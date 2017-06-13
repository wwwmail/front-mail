(function () {
    'use strict';

    angular
        .module('mail.inbox')
        .controller('InboxController', InboxController);

    InboxController.$inject = ['$rootScope', '$state', '$auth', '$uibModal', '$scope', 'mail', 'mailBox', 'profile', 'messages'];
    /* @ngInject */
    function InboxController($rootScope, $state, $auth, $uibModal, $scope, mail, mailBox, profile, messages) {
        var vm = this;

        vm.messages = {
            params: {
                'per-page': 20,
                'len': 100
            },
            defaultParams: {
                'per-page': 20,
                'len': 100
            },
            checked: []
        };

        vm.folders = {};

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
            get();
        });

        $scope.$watch('vm.messages.params.search_end', function (e, data) {
            get();
        });

        vm.clearFolder = clearFolder;

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

            if ($state.params.compose) {
                openComposePopup();
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

        function openComposePopup() {
            var params = {
                new: true
            };

            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'app/components/compose-popup/compose-popup.html',
                controller: 'ComposePopupController',
                controllerAs: 'vm',
                resolve: {
                    params: function () {
                        return params;
                    }
                },
                size: 'lg',
                windowClass: 'popup popup--compose'
            });
        }
    }
})();
