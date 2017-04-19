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

        vm.icons = [
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
            _.forEach(vm.folders.items, function (item) {
                if (item.name.split('.').length > 2) {
                    item.isSub = true;
                }
                console.log('-', item);
            });
        }

        function setIcons() {
            _.forEach(vm.folders.items, function (item) {
                _.forEach(vm.icons, function (icon) {
                    if (item.name === icon.name) {
                        item.icon = icon.icon;
                    }
                });
            });
        }
    }
})();
