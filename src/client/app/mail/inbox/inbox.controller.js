(function () {
    'use strict';

    angular
        .module('mail.inbox')
        .controller('InboxController', InboxController);

    InboxController.$inject = ['$rootScope', '$state', '$stateParams', '$auth', '$uibModal', '$interval', '$scope', '$timeout', 'mail', 'mailBox', 'profile', 'messages', '$http'];

    /* @ngInject */
    function InboxController($rootScope, $state, $stateParams, $auth, $uibModal, $interval, $scope, $timeout, mail, mailBox, profile, messages, $http) {
        var vm = this;

        vm.message = {};

        vm.messages = {
            params: {
                'per-page': 20,
                'len': 200,
                'part': 'bodytext'
            },
            defaultParams: {
                'per-page': 20,
                'len': 200,
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

        $scope.$on('mail:sync', function () {
            get();
        });

        $scope.$on('search:mail', function (e, data) {
            vm.messages.params = data.search;
            vm.messages.isSearch = true;
            get();
        });

        $scope.$on('search:close', function (e, data) {
            vm.messages.params = angular.copy(vm.messages.defaultParams);
            vm.messages.params.mbox = $state.params.mbox;
            vm.messages.isSearch = false;
            get();
        });

        $scope.$watch('vm.messages.params.search_start', function (e, data) {
            if ((vm.params && vm.params.search) || vm.messages.params.search_start) {
                get();
            }
        });

        $scope.$watch('vm.messages.params.search_end', function (e, data) {
            if ((vm.params && vm.params.search) || vm.messages.params.search_end) {
                get();
            }
        });

        $scope.$watch('$stateParams', function (data, oldData) {
            if ($stateParams.id && $stateParams.connection_id) {
                getMessage();
            }
        }, true);

        $scope.$watch(function () {
            return $state.params.id;
        }, function (data, oldData) {
            getMessage();
        }, true);

       /* $rootScope.$on('message:open', function () {
            getMessage();
        });*/

        vm.clearFolder = clearFolder;
        vm.openComposePopup = openComposePopup;
        vm.paginate = paginate;

        activate();

        ////

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

            if ($state.params.compose && !$rootScope.isOpenCompose) {
                $rootScope.isOpenCompose = true;
                $timeout(function () {
                    openComposePopup({new: true});
                }, 250);
            }

            getMailBox();

            if (messages) {
                messages.$promise.then(function (response) {
                    $rootScope.isAppLoading = false;
                    vm.messages.params.search = null;
                    vm.messages.checked = [];
                    vm.messages = _.assign(vm.messages, response.data);
                    _.forEach(vm.messages.items, function (message) {
                        message.body = message.body ? String(message.body).replace(/<[^>]+>/gm, '') : '';
                    });
                });
            }

            checkStorage();
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
            var cacheFolders = mailBox.getCacheList();
            vm.folders = _.assign(vm.folders, cacheFolders);
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
                keyboard: false,
                windowClass: 'popup popup--compose popup--compose-minimize hide'
            });
        }

        function checkStorage() {
            if (profile.isQuotaFull()) {
                openStoragePopup();
            }
        }

        function openStoragePopup() {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'app/components/storage-popup/storage-popup.html',
                controller: 'StoragePopupController',
                controllerAs: 'vm',
                size: 'lg',
                windowClass: 'popup popup--storage',
                resolve: {
                    tariffResult: function (tariff) {
                        return tariff.getTariff();
                    }
                }
            })
        }

        function getMessage() {
            mail.getById({
                id: $state.params.id,
                mbox: $state.mbox,
                connection_id: $state.connection_id,
                part: 'headnhtml'
            }).then(function (response) {
                vm.message.model = response.data;
                console.log('response', response);
            });
        }

        function paginate() {
            if (vm.messages._links.next.href && !vm.messages.isLoading) {
                vm.messages.isLoading = true;
                $http.get(vm.messages._links.next.href).then(function (response) {
                    vm.messages.isLoading = false;
                    vm.messages.items = vm.messages.items.concat(response.data.data.items);
                    vm.messages._links = response.data.data._links;
                    vm.messages._meta = response.data.data._meta;
                });
            }
        }
    }
})();
