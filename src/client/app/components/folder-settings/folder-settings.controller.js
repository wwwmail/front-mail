(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('FolderSettingsController', FolderSettingsController);

    FolderSettingsController.$inject = ['$scope', '$auth', '$state', '$uibModal', 'mailBox', 'mail'];
    /* @ngInject */
    function FolderSettingsController($scope, $auth, $state, $uibModal, mailBox, mail) {
        var vm = this;

        vm.standartFolders = [
            {
                name: 'INBOX',
                icon: 'icon-incoming'
            },
            {
                name: 'Drafts',
                icon: 'icon-draft'
            },
            {
                name: 'Trash',
                icon: 'icon-bin'
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
                icon: 'icon-spam'
            }
        ];

        vm.folders = {};

        vm.selected = {};

        vm.openFolderCreatePopup = openFolderCreatePopup;
        vm.openFolderEditPopup = openFolderEditPopup;
        vm.move = move;
        vm.select = select;
        vm.destroy = destroy;
        vm.openFolderDeleteConfirmPopup = openFolderDeleteConfirmPopup;

        $scope.$on('mailBox:update:success', function () {
            getMailBox();
        });

        $scope.$on('mailBox:create:success', function () {
            getMailBox();
        });

        $scope.$on('mailBox:destroy:success', function () {
            getMailBox();
        });

        /////

        activate();

        function activate() {
            vm.$state = $state;
            getMailBox();
        }

        function getMailBox() {
            mailBox.get().then(function (response) {
                vm.folders = _.assign(vm.folders, response.data);
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

        function move(folder) {
            var ids = [];

            _.forEach(vm.messages.checked, function (message) {
                ids.push(message.number);
            });

            mail.move({}, {
                ids: ids,
                mbox: vm.messages.checked[0].mbox,
                mboxnew: folder.name
            }).then(function (response) {
                vm.messages.checked = [];
                $scope.$emit('mail:sync');
            });
        }

        function openFolderCreatePopup() {
            $uibModal.open({
                animation: true,
                templateUrl: 'app/components/folder-create/folder-create-popup.html',
                controller: function ($scope, $uibModalInstance) {
                    $scope.cancel = cancel;

                    function cancel() {
                        $uibModalInstance.dismiss('cancel');
                    }
                },
                size: 'sm',
                windowClass: 'popup popup--folder-create'
            });
        }

        function openFolderEditPopup() {
            $uibModal.open({
                animation: true,
                templateUrl: 'app/components/folder-edit/folder-edit-popup.html',
                controller: function ($scope, $uibModalInstance, model) {
                    $scope.model = model;

                    $scope.cancel = cancel;

                    function cancel() {
                        $uibModalInstance.dismiss('cancel');
                    }
                },
                resolve: {
                    model: function () {
                        return vm.selected;
                    }
                },
                size: 'sm',
                windowClass: 'popup popup--folder-create'
            });
        }

        function select(folder) {
            _.forEach(vm.folders.items, function (folder) {
                folder.isSelected = false;
            });

            folder.isSelected = true;

            vm.selected = folder;
        }

        function destroy() {
            mailBox.destroy({}, {
                mbox: vm.selected.name
            });
        }

        function openFolderDeleteConfirmPopup() {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'app/components/folder-delete-confirm/folder-delete-confirm-popup.html',
                controller: function ($scope, $uibModalInstance, folderResolve) {
                    $scope.cancel = cancel;
                    $scope.close = close;

                    $scope.folder = folderResolve;

                    function cancel() {
                        $uibModalInstance.dismiss('cancel');
                    }

                    function close(data) {
                        $uibModalInstance.close(data);
                    }
                },
                size: 'sm',
                resolve: {
                    folderResolve: function () {
                        return vm.selected;
                    }
                },
                windowClass: 'popup popup--folder-create'
            });

            modalInstance.result.then(function (response) {
                destroy();
            });
        }
    }
})();
