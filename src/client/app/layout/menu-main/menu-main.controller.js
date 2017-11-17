(function () {
    'use strict';

    angular
        .module('app.layout')
        .controller('MenuMainController', MenuMainController);

    MenuMainController.$inject = ['$scope', '$rootScope', '$uibModal', '$state', '$auth', 'mailBox', 'mail', 'tag'];

    /* @ngInject */
    function MenuMainController($scope, $rootScope, $uibModal, $state, $auth, mailBox, mail, tag) {
        var vm = this;

        vm.messages = [];

        vm.standartFolders = [
            {
                name: 'INBOX',
                icon: 'icon-inbox'
            },
            {
                name: 'Drafts',
                icon: 'icon-draft-line'
            },
            {
                name: 'Trash',
                icon: 'icon-basket'
            },
            {
                name: 'Sent',
                icon: 'icon-sent'
            },
            {
                name: 'Junk',
                icon: 'icon-spam'
            },
            {
                name: 'Outbox',
                icon: 'icon-up'
            }
        ];

        vm.folders = {};

        vm.tags = {
            items: []
        };

        vm.counters = {};

        $scope.$on('mail:sync', function () {
            getMailBox();
        });

        $scope.$on('folders:sync', function () {
            getMailBox();
        });

        $scope.$on('mailBox:update:success', function () {
            getMailBox();
        });

        $scope.$on('mailBox:create:success', function () {
            getMailBox();
        });

        $scope.$on('mailBox:destroy:success', function () {
            getMailBox();
        });

        $scope.$on('mailBox:sync', function () {
            getMailBox();
        });

        $scope.$on('tag:update:success', function () {
            getTag();
        });

        $scope.$on('tag:create:success', function () {
            getTag();
        });

        $scope.$on('tag:destroy:success', function () {
            getTag();
        });

        $scope.$on('mail:count:update', function (data) {
            vm.counters.flag = data.count;
        });

        $scope.$on('mail:flag:update', function (data) {
            getCounters();
        });

        $scope.$on('mail:deflag:update', function (data) {
            getCounters();
        });

        vm.openFolderCreatePopup = openFolderCreatePopup;
        vm.syncMail = syncMail;
        vm.openTagCreatePopup = openTagCreatePopup;
        vm.goToUrl = goToUrl;
        vm.clearFolder = clearFolder;
        vm.openStoragePopup = openStoragePopup;
        vm.openComposePopup = openComposePopup;

        activate();

        function activate() {
            vm.user = $auth.user;
            vm.$state = $state;

            vm.folder.$promise.then(function (response) {
                vm.folders = _.assign(vm.folders, response.data);
                setIcons();
                getMailBoxFormatted();
            });

            getTag();
            getCounters();
        }

        function getMailBox() {
            mailBox.get().then(function (response) {
                vm.folders = _.assign(vm.folders, response.data);
                setIcons();
                getMailBoxFormatted();
            });
        }

        function getMailBoxFormatted() {
            _.forEach(vm.folders.items, function (folder) {
                var isSub = true;

                _.forEach(vm.standartFolders, function (standartFolder) {
                    if (folder.name == standartFolder.name) {
                        isSub = false;
                    }
                });

                if (isSub) {
                    folder.isSub = true;
                } else {
                    folder.isSub = false;
                }

                if (folder.name === 'INBOX') {
                    folder.isOpen = true;
                }

                // alert(vm.$state.params.mbox);

                if (vm.$state.params.mbox === 'Templates' || vm.$state.params.mbox === 'Drafts') {
                    var findFolder = _.find(vm.folders.items, {'name': 'Drafts'});
                    findFolder.isOpen = true;
                }
            });

            sortFolder();
        }

        function sortFolder() {
            vm.folders.items = _.sortBy(vm.folders.items, 'caption').reverse();
            vm.folders.items = _.sortBy(vm.folders.items, [
                {'name': 'INBOX'},
                {'isSub': true},
                {'name': 'Sent'},
                {'name': 'Trash'},
                {'name': 'Junk'},
                {'name': 'Drafts'},
                {'name': 'Outbox'}
            ]).reverse();
        }

        function setIcons() {
            _.forEach(vm.folders.items, function (item) {
                _.forEach(vm.standartFolders, function (standartFolder) {
                    if (item.name === standartFolder.name) {
                        item.icon = standartFolder.icon;
                    }
                });
            });
        }

        function openFolderCreatePopup() {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'app/components/folder-create/folder-create-popup.html',
                controller: function ($scope, $uibModalInstance) {
                    $scope.cancel = cancel;

                    function cancel() {
                        $uibModalInstance.dismiss('cancel');
                    }
                },
                // controllerAs: 'vm',
                size: 'sm',
                windowClass: 'popup popup--folder-create'
            });
        }

        function openTagCreatePopup() {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'app/components/tag-create/tag-create-popup.html',
                controller: function ($scope, $uibModalInstance, messages) {
                    $scope.cancel = cancel;

                    $scope.messages = messages;

                    function cancel() {
                        $uibModalInstance.dismiss('cancel');
                    }
                },
                resolve: {
                    messages: function () {
                        return vm.messages;
                    }
                },
                // controllerAs: 'vm',
                size: 'sm',
                windowClass: 'popup popup--tag-create'
            });
        }

        function getTag() {
            tag.get().then(function (response) {
                vm.tags.items = response.data;
            });
        }

        function syncMail() {
            if ($state.current.name === 'mail.inbox') {
                $scope.$emit('mail:sync');
                return;
            }
            $scope.$emit('folders:sync');
            $state.go('mail.inbox', {mbox: 'INBOX'}, {reload: true});
        }

        function goToUrl(folder) {
            $state.go('mail.inbox', {
                mbox: folder.name,
                filter: undefined,
                tag_id: undefined,
                search: undefined
            }, {reload: true});
        }

        function clearFolder(e, folder) {
            e.stopPropagation();
            mail.deleteAll({}, {
                mbox: folder.name,
                connection_id: vm.user.profile.default_connection_id
            }).then(function () {
                $scope.$emit('mail:sync');
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

        function openComposePopup(params) {
            var modalInstance = $uibModal.open({
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
                windowClass: 'popup popup--compose hide-elm'
            });
        }

        function getCounters() {
            mail.getCount({type: 'flag'}).then(function (response) {
                vm.counters.flag = response;
            });
        }
    }
})();
