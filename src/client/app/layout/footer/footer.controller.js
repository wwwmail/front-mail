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
                    lang: 'AL',
                    icon: 'al.svg'
                },
                {
                    lang: 'EN',
                    icon: 'en.svg'
                },
                {
                    lang: 'BS',
                    icon: 'bs.svg'
                },
                {
                    lang: 'HR',
                    icon: 'hr.svg'
                },
                {
                    lang: 'CZ',
                    icon: 'cz.svg'
                },
                {
                    lang: 'MK',
                    icon: 'mk.svg'
                },
                {
                    lang: 'RU',
                    icon: 'ru.svg',
                    isActive: true
                },
                {
                    lang: 'SR',
                    icon: 'SR.svg',
                    isActive: false
                },
                {
                    lang: 'SK',
                    icon: 'sk.svg',
                    isActive: false
                },
                {
                    lang: 'SL',
                    icon: 'sl.svg',
                    isActive: false
                },
                {
                    lang: 'UK',
                    icon: 'uk.svg'
                }
            ]
        };

        vm.selectLang = selectLang;

        activate();

        function activate() {
            console.log('lang', localStorageService.get('lang'));

            var lang = localStorageService.get('lang') ? localStorageService.get('lang') : 'RU';

            $translate.use(lang);
            // $translate.refresh();

            _.forEach(vm.lang.items, function (item) {
                if (item.lang === lang) {
                    vm.lang.selected = item;
                }
            });

            vm.user = $auth.user;
        }

        function selectLang(lang) {
            vm.lang.selected = lang;

            $translate.use(lang.lang);
            // $translate.refresh();

            localStorageService.set('lang', lang.lang);

            $http.defaults.headers.common["Accept-Language"] = lang.lang;
        }
    }
})();
