(function () {
    'use strict';

    angular
        .module('app.services')
        .factory('lang', lang);

    lang.$inject = ['$translate', '$http', '$timeout', 'config'];

    function lang($translate, $http, $timeout, config) {
        var list = [
            {
                lang: 'sq',
                ico: 'sq-AL',
                icon: 'sq.svg',
                caption: 'Албанский'
            },
            {
                lang: 'en',
                ico: 'en-US',
                icon: 'en.svg',
                caption: 'Английский'
            },
            {
                lang: 'bs',
                ico: 'bs-BA',
                icon: 'bs.svg',
                caption: 'Боснийский'
            },
            {
                lang: 'sr',
                ico: 'sr-RS',
                icon: 'sr.svg',
                caption: 'Сербский'
            },
            {
                lang: 'hr',
                ico: 'hr-HR',
                icon: 'hr.svg',
                caption: 'Хорватский'
            },
            {
                lang: 'cs',
                ico: 'cs-CZ',
                icon: 'cs.svg',
                caption: 'Чешский'
            },
            {
                lang: 'mk',
                ico: 'mk-MK',
                icon: 'mk.svg',
                caption: 'Македонский'
            },
            {
                lang: 'ru',
                ico: 'ru-RU',
                icon: 'ru.svg',
                caption: 'Русский'
            },
            {
                lang: 'sk',
                ico: 'sk-SK',
                icon: 'sk.svg',
                caption: 'Словацкий'
            },
            {
                lang: 'sl',
                ico: 'sl-SI',
                icon: 'sl.svg',
                caption: 'Словенский'
            },
            {
                lang: 'uk',
                ico: 'uk-UA',
                icon: 'uk.svg',
                caption: 'Украинский'
            },
            {
                lang: 'ro',
                ico: 'ro-MD',
                icon: 'md.svg',
                caption: 'Молдавский'
            }
        ];

        function init() {
            if ($translate.use()) {
                $http.defaults.headers.common["Accept-Language"] = $translate.use();
                moment.locale($translate.use());
            }

            $timeout(function () {
                if (!$translate.use()) {
                    var configObj = config.getConfig();
                    selectLang(
                        getLangByIco(configObj.language)
                    );
                }
            }, 250);
        }

        function selectLang(selectLang) {
            $translate.use(selectLang.lang);

            moment.locale(selectLang.lang);

            $http.defaults.headers.common["Accept-Language"] = selectLang.lang;

            return selectLang.lang;
        }

        function getCurrentLang() {
            return _.find(list, {lang: $translate.use()});
        }

        function getList() {
            return list;
        }

        function getLangByIco(ico) {
            return _.find(list, {ico: ico}) ? _.find(list, {ico: ico}) : _.find(list, {lang: ico});
        }

        return {
            init: init,
            selectLang: selectLang,
            getCurrentLang: getCurrentLang,
            getList: getList,
            getLangByIco: getLangByIco
        }
    }

})();