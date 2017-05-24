(function () {
    'use strict';

    angular
        .module('app.layout')
        .controller('FooterController', FooterController);

    FooterController.$inject = ['$auth', '$translatePartialLoader', '$translate', 'localStorageService'];

    /* @ngInject */
    function FooterController($auth, $translatePartialLoader, $translate, localStorageService) {
        var vm = this;

        vm.lang = {
            selected: {},
            items: [
                {
                    lang: 'albania',
                    icon: 'albania.svg'
                },
                {
                    lang: 'bosnia',
                    icon: 'bosnia.svg'
                },
                {
                    lang: 'croatia',
                    icon: 'croatia.svg'
                },
                {
                    lang: 'cz',
                    icon: 'cz.svg'
                },
                {
                    lang: 'macedonia',
                    icon: 'macedonia.svg'
                },
                {
                    lang: 'RU',
                    icon: 'russia.svg',
                    isActive: true
                },
                {
                    lang: 'serbia',
                    icon: 'serbia.svg',
                    isActive: false
                },
                {
                    lang: 'slovakia',
                    icon: 'slovakia.svg',
                    isActive: false
                },
                {
                    lang: 'Slovenia',
                    icon: 'Slovenia.svg',
                    isActive: false
                },
                {
                    lang: 'UK',
                    icon: 'uk.svg'
                },
                {
                    lang: 'UA',
                    icon: 'ukraine.svg'
                }
            ]
        };

        vm.selectLang = selectLang;

        activate();

        function activate() {
            console.log('lang', localStorageService.get('lang'));

            var lang = localStorageService.get('lang') ? localStorageService.get('lang') : 'RU';

            $translate.use(lang);
            $translate.refresh();

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
            $translate.refresh();

            localStorageService.set('lang', lang.lang);
        }
    }
})();
