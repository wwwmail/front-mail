(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('ChoiceLanguageController', ChoiceLanguageController);

    ChoiceLanguageController.$inject = ['$translate', 'lang', '$timeout'];
    /* @ngInject */
    function ChoiceLanguageController($translate, lang, $timeout) {
        var vm = this;

        vm.lang = {
            selected: {},
            items: []
        };

        vm.selectLang = selectLang;

        activate();

        ////

        function activate() {
            $timeout(function () {
                vm.lang.items = lang.getList();

                var useLang = $translate.use();

                _.forEach(vm.lang.items, function (item) {
                    if (item.lang === useLang) {
                        vm.lang.selected = item;
                    }
                });

                sortLang(useLang);
            }, 250);
        }

        function selectLang(selectLang) {
            vm.lang.selected = selectLang;

            sortLang(lang.selectLang(selectLang).lang);
        }

        function sortLang(useLang) {
            vm.lang.items = _.sortBy(vm.lang.items, {'lang': useLang});
        }
    }
})();
