(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('ChoiceLanguageController', ChoiceLanguageController);

    ChoiceLanguageController.$inject = ['$http', '$timeout', '$translate', 'lang'];
    /* @ngInject */
    function ChoiceLanguageController($http, $timeout, $translate, lang) {
        var vm = this;

        vm.lang = {
            selected: {},
            items: []
        };

        vm.selectLang = selectLang;

        activate();

        function activate() {
            vm.lang.items = lang.getList();

            $timeout(function () {
                var lang = $translate.use();
                moment.locale(lang);

                $http.defaults.headers.common["Accept-Language"] = lang;

                _.forEach(vm.lang.items, function (item) {
                    if (item.lang === lang) {
                        vm.lang.selected = item;
                    }
                });

            });
        }

        function selectLang(lang) {
            vm.lang.selected = lang;

            $timeout(function () {
                $translate.use(lang.lang);
                moment.locale(lang.lang);

                $http.defaults.headers.common["Accept-Language"] = lang.lang;
            });
        }
    }
})();
