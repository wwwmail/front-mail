(function () {
    'use strict';

    angular
        .module('app.layout')
        .controller('MenuMainController', MenuMainController);

    MenuMainController.$inject = ['mailBox'];

    /* @ngInject */
    function MenuMainController(mailBox) {
        var vm = this;
        vm.title = 'Menu';

        vm.standartFolders = [
            {
                name: 'INBOX',
                icon: 'icon-incoming'
            },
            {
                name: 'INBOX.Drafts',
                icon: 'icon-draft'
            },
            {
                name: 'INBOX.Trash',
                icon: 'icon-bin'
            },
            {
                name: 'INBOX.Sent',
                icon: 'icon-sent'
            },
            {
                name: 'INBOX.Junk',
                icon: 'icon-spam'
            }
        ];

        vm.folders = {};

        activate();

        function activate() {
            getMailBox();
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
                    folder.caption = folder.caption.split('.')[1];
                } else {
                    folder.isSub = false;
                }
            });
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
    }
})();
