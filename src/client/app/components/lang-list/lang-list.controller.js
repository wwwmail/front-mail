(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('LangListController', LangListController);

    LangListController.$inject = ['$translate', '$http', '$timeout', 'lang'];
    /* @ngInject */
    function LangListController($translate, $http, $timeout, lang) {
        var vm = this;

        // console.log('getCurrentLang', lang.getCurrentLang());

        vm.lang = {
            selected: {},
            items: [
                {
                    lang: 'sq',
                    icon: 'sq.svg',
                    caption: 'Албанский'
                },
                {
                    lang: 'en',
                    icon: 'en.svg',
                    caption: 'Английский'
                },
                {
                    lang: 'bs',
                    icon: 'bs.svg',
                    caption: 'Боснийский'
                },
                {
                    lang: 'hr',
                    icon: 'hr.svg',
                    caption: 'Хорватский'
                },
                {
                    lang: 'cs',
                    icon: 'cs.svg',
                    caption: 'Чешский'
                },
                {
                    lang: 'mk',
                    icon: 'mk.svg',
                    caption: 'Македонский'
                },
                {
                    lang: 'ru',
                    icon: 'ru.svg',
                    caption: 'Русский'
                },
                {
                    lang: 'sk',
                    icon: 'sk.svg',
                    caption: 'Словацкий'
                },
                {
                    lang: 'sl',
                    icon: 'sl.svg',
                    caption: 'Словенский'
                },
                {
                    lang: 'uk',
                    icon: 'uk.svg',
                    caption: 'Украинский'
                }
            ]
        };

        vm.selectLang = selectLang;

        activate();

        function activate() {
            // $translate.use('ru');

            var lng = $translate.use();
            moment.locale(lng);

            $http.defaults.headers.common["Accept-Language"] = lng;

            _.forEach(vm.lang.items, function (item) {
                if (item.lang === lng) {
                    vm.lang.selected = item;
                }
            });
        }

        function selectLang(lng) {
            vm.lang.selected = lng;

            $timeout(function () {
                $translate.use(lng.lang);
                moment.locale(lng.lang);

                $timeout(function () {
                    vm.useLang = lang.getCurrentLang();
                }, 50);

                $http.defaults.headers.common["Accept-Language"] = lng.lang;

                close();
            });
        }

        function close() {
            vm.onClose();
        }
    }
})();
