(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('SearchMailController', SearchMailController);

    SearchMailController.$inject = ['$rootScope', 'tag'];
    /* @ngInject */
    function SearchMailController($rootScope, tag) {
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

    }
})();
