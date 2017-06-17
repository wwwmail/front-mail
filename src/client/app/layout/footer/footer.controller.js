(function () {
    'use strict';

    angular
        .module('app.layout')
        .controller('FooterController', FooterController);

    FooterController.$inject = ['$auth', '$http', '$translatePartialLoader', '$translate', 'localStorageService'];

    /* @ngInject */
    function FooterController($auth, $http, $translatePartialLoader, $translate, localStorageService) {
        var vm = this;

        $translatePartialLoader.addPart('layout/footer');
        $translate.refresh();

        vm.lang = {
            selected: {},
            items: [
                {
                    lang: 'sq',
                    icon: 'sq.svg'
                },
                {
                    lang: 'en',
                    icon: 'en.svg'
                },
                {
                    lang: 'bs',
                    icon: 'bs.svg'
                },
                {
                    lang: 'hr',
                    icon: 'hr.svg'
                },
                {
                    lang: 'cs',
                    icon: 'cs.svg'
                },
                {
                    lang: 'mk',
                    icon: 'mk.svg'
                },
                {
                    lang: 'ru',
                    icon: 'ru.svg'
                },
                {
                    lang: 'sk',
                    icon: 'sk.svg'
                },
                {
                    lang: 'sl',
                    icon: 'sl.svg'
                },
                {
                    lang: 'uk',
                    icon: 'uk.svg'
                }
            ]
        };

        vm.selectLang = selectLang;

        activate();

        function activate() {
            console.log('$translate', $translate.use());

            var lang = $translate.use();

            moment.locale(lang);

            _.forEach(vm.lang.items, function (item) {
                if (item.lang === lang) {
                    vm.lang.selected = item;
                }
            });

            vm.user = $auth.user;
        }

        function selectLang(lang) {
            // console.log('lang', lang);

            vm.lang.selected = lang;

            $translate.use(lang.lang);
            moment.locale(lang.lang);

            $http.defaults.headers.common["Accept-Language"] = lang.lang;
        }
    }
})();
