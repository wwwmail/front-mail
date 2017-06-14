(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('TextareaTranslateMenuController', TextareaTranslateMenuController);

    TextareaTranslateMenuController.$inject = ['$scope', '$timeout', 'googleTranslation'];
    /* @ngInject */
    function TextareaTranslateMenuController($scope, $timeout, googleTranslation) {
        var vm = this;

        vm.list = {
            items: [],
            itemsFormatted: []
        };

        vm.selectFrom = selectFrom;
        vm.selectTo = selectTo;

        activate();

        function activate() {
            getTranslateList();
        }

        function getTranslateList() {
            googleTranslation.get({}, {"target": "ru"}).then(function (response) {
                vm.list.items = response.data.languages;

                vm.translateFrom = _.find(vm.list.items, {'language': 'ru'});
                vm.translateTo = _.find(vm.list.items, {'language': 'cs'});

                var itemsFormatted = [];
                _.forEach(vm.list.items.reverse(), function (item, i) {
                    itemsFormatted.push(item);
                    if (i % 13 === 0) {
                        vm.list.itemsFormatted.push(itemsFormatted);
                        itemsFormatted = [];
                    }
                });

                vm.list.itemsFormatted.reverse();
            });
        }

        function selectFrom(item) {
            vm.translateFrom = item;
            vm.isOpenFrom = false;
        }

        function selectTo(item) {
            vm.translateTo = item;
            vm.isOpenTo = false;
        }
    }
})();
