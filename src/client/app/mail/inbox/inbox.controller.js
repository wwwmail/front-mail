(function () {
    'use strict';

    angular
        .module('mail.inbox')
        .controller('InboxController', InboxController);

    InboxController.$inject = ['$rootScope', '$state', '$auth', '$uibModal', '$interval', '$scope', '$timeout', 'mail', 'mailBox', 'profile', '$http'];

    /* @ngInject */
    function InboxController($rootScope, $state, $auth, $uibModal, $interval, $scope, $timeout, mail, mailBox, profile, $http) {

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
            if ((vm.params && vm.params.search) || (vm.params && vm.messages.params.search_start)) {
                get();
            }
        });

        $scope.$watch('vm.messages.params.search_end', function (e, data) {
            if ((vm.params && vm.params.search) || (vm.params && vm.messages.params.search_end)) {
                get();
            }
        });

        $scope.$watch(function () {
            return $state.params.id;
        }, function (data, oldData) {
            if ($state.params.id && $state.params.connection_id) {
                getMessage();
            }
        }, true);


        vm.paginate = paginate;
        vm.clearFolder = clearFolder;
        vm.openComposePopup = openComposePopup;


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

            getStart();

            getMailBox();

            checkStorage();

            // setFolderSync();
        }

        function getStart() {
            if ($state.params.filter) {
                vm.messages.params.filter = $state.params.filter;
            }

            if ($state.params.mbox) {
                vm.messages.params.mbox = $state.params.mbox;
            }

            if ($state.params.tag_id) {
                vm.messages.params.tag_id = $state.params.tag_id;
            }

            if ($state.params.sort) {
                vm.messages.params.sort = $state.params.sort;
            }

            if ($state.params.sortReverse) {
                vm.messages.params.sortReverse = $state.params.sortReverse;
            }

            /*if (!$state.params.search && !$state.params.storageMessages) {
                get();
            }*/

            if ($state.params.forceFetch || !mail.getStorageMessages()) {
                get();
                return;
            }

            if (mail.getStorageMessages() && !$state.params.forceFetch) {
                // console.log('mail.getStorageMessages()', mail.getStorageMessages());
                vm.messages = mail.getStorageMessages();
            }

            // vm.messages = mail.getStorageMessages();
            // console.log('storage messages', mail.getStorageMessages());

            /*if ($state.params.storageMessages) {
                vm.messages = mail.getStorageMessages();
                // console.log('storage messages', mail.getStorageMessages());
            }*/
        }

        function get() {
            vm.messages.isLoading = true;
            mail.get(vm.messages.params).then(function (response) {
                vm.messages.isLoading = false;
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

                if ($state.params.forceFetch) {
                    $state.go('.', {forceFetch: undefined}, {notify: false});
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

        function checkStorage() {
            if (profile.isQuotaFull()) {
                openStoragePopup();
            }
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

        function setFolderSync() {
            vm.folderSyncInterval = $interval(function () {
                $rootScope.$broadcast('folders:sync');
                get();
            }, 1000 * 60);
        }
    }
})();
