(function () {
    'use strict';

    angular
        .module('mail.inbox')
        .controller('InboxController', InboxController);

    InboxController.$inject = ['$rootScope', '$state', '$auth', '$uibModal', '$interval', '$scope', '$timeout', 'mail', 'mailBox', 'profile', 'messages'];
    /* @ngInject */
    function InboxController($rootScope, $state, $auth, $uibModal, $interval, $scope, $timeout, mail, mailBox, profile, messages) {
        var vm = this;

        vm.isOpenCompose = false;

        vm.messages = {
            params: {
                'per-page': 20,
                'len': 100,
                'part': 'bodytext'
            },
            defaultParams: {
                'per-page': 20,
                'len': 100,
                'part': 'bodytext'
            },
            checked: []
        };

        vm.folders = {};

        vm.folderSyncInterval = $interval(function () {
            $rootScope.$broadcast('folders:sync');
            get();
        }, 1000 * 60);

        $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
            $interval.cancel(vm.folderSyncInterval);
        });

        $rootScope.$on('mail:sync', function () {
            get();
        });

        $rootScope.$on('search:mail', function (e, data) {
            vm.messages.params = data.search;
            vm.messages.isSearch = true;
            get();
        });

        $rootScope.$on('search:close', function (e, data) {
            vm.messages.params = angular.copy(vm.messages.defaultParams);
            vm.messages.params.mbox = $state.params.mbox;
            vm.messages.isSearch = false;
            get();
        });

        $scope.$watch('vm.messages.params.search_start', function (e, data) {
            if (vm.params && vm.params.search) {
                get();
            }
        });

        $scope.$watch('vm.messages.params.search_end', function (e, data) {
            if (vm.params && vm.params.search) {
                get();
            }
        });

        vm.clearFolder = clearFolder;
        vm.openComposePopup = openComposePopup;

        activate();

        function activate() {
            vm.$state = $state;
            vm.user = $auth.user;

            if ($state.params.filter) {
                vm.messages.params.filter = $state.params.filter;
            }

            if ($state.params.mbox) {
                vm.messages.params.mbox = $state.params.mbox;
            }

            if ($state.params.tag_id) {
                vm.messages.params.tag_id = $state.params.tag_id;
            }

            if ($state.params.compose && !vm.isOpenCompose) {
                $timeout(function () {
                    openComposePopup({new: true});
                }, 250);
                vm.isOpenCompose = true;
            }

            getMailBox();

            messages.$promise.then(function (response) {
                vm.messages.params.search = null;
                vm.messages.checked = [];
                vm.messages = _.assign(vm.messages, response.data);
                _.forEach(vm.messages.items, function (message) {
                    message.body = message.body ? String(message.body).replace(/<[^>]+>/gm, '') : '';
                });
            });
        }

        function get() {
            mail.get(vm.messages.params).then(function (response) {
                vm.messages.checked = [];
                vm.messages = _.assign(vm.messages, response.data);
                _.forEach(vm.messages.items, function (message) {
                    message.body = message.body ? String(message.body).replace(/<[^>]+>/gm, '') : '';
                });

                if (vm.messages.isSearch) {
                    vm.messages.showSearchIcon = true;
                } else {
                    vm.messages.showSearchIcon = false;
                }
            });
        }

        function getMailBox() {
            mailBox.get().then(function (response) {
                vm.folders = _.assign(vm.folders, response.data);
            });
        }

        function clearFolder(e, folder) {
            e.stopPropagation();
            mail.deleteAll({}, {
                mbox: folder.name,
                connection_id: vm.user.profile.default_connection_id
            }).then(function () {
                get();
            });
        }

        function openComposePopup(params) {
            $uibModal.open({
                animation: false,
                templateUrl: 'app/components/compose-popup/compose-popup.html',
                controller: 'ComposePopupController',
                controllerAs: 'vm',
                resolve: {
                    params: function () {
                        return params;
                    }
                },
                size: 'lg',
                windowClass: 'popup popup--compose popup--compose-minimize hide-elm'
            });
        }
    }
})();
