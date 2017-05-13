(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('SearchMailController', SearchMailController);

    SearchMailController.$inject = ['$rootScope', 'tag', 'mailBox'];
    /* @ngInject */
    function SearchMailController($rootScope, tag, mailBox) {
        var vm = this;

        vm.tags = {
            selected: {
                tag_name: 'Все метки',
                id: undefined
            },
            items: [{
                tag_name: 'Все тэги',
                id: undefined
            }]
        };

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
            }
        ];

        vm.folders = {};

        vm.searchParts = {
            selected: {
                'name': 'Искать по всему письму',
                'value': 'text'
            },
            list: [
                {
                    'name': 'Искать по всему письму',
                    'value': 'text'
                },
                {
                    'name': 'в поле "Отправитель"',
                    'value': 'from'
                },
                {
                    'name': 'в поле "Получатель"',
                    'value': 'to'
                },
                {
                    'name': 'в теле письма',
                    'value': 'body'
                },
                {
                    'name': 'в тексте письма',
                    'value': 'text'
                }
            ]
        };

        vm.searchForm = {
            model: {}
        };

        vm.title = "Search component";

        vm.search = search;

        activate();

        function activate() {
            getTags();
            getMailBox();
        }

        function search() {

            vm.searchForm.model.search_part = vm.searchParts.selected.value;
            vm.searchForm.model.search_tag_id = vm.tags.selected.id;

            $rootScope.$broadcast('search:mail', {
                search: vm.searchForm.model
            });
        }

        function getTags() {
            tag.get().then(function (response) {
                vm.tags.items = vm.tags.items.concat(response.data);
            });
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
            vm.folders.items = _.sortBy(vm.folders.items, [
                {'name': 'INBOX'},
                {'isSub': true},
                {'name': 'Sent'},
                {'name': 'Trash'},
                {'name': 'Junk'},
                {'name': 'Drafts'}
            ]).reverse();
        }


    }
})();
