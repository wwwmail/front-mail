(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('TextareaTranslateMenuController', TextareaTranslateMenuController);

    TextareaTranslateMenuController.$inject = ['$scope', '$translate', 'googleTranslation'];
    /* @ngInject */
    function TextareaTranslateMenuController($scope, $translate, googleTranslation) {
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
            googleTranslation.get({}, {"target": $translate.use()}).then(function (response) {
                vm.list.items = response.data.languages;

                vm.translateFrom = _.find(vm.list.items, {'language': $translate.use()});
                vm.translateTo = _.find(vm.list.items, {'language': 'en'});

                vm.list.itemsFormatted = _.chunk(vm.list.items, 13);
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
