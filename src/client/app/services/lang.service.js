(function () {
    'use strict';

    angular
        .module('app.services')
        .factory('lang', lang);

    lang.$inject = ['CONFIG', '$translate'];

    function lang(CONFIG, $translate) {
        var list = [
            {
                lang: 'al',
                icon: 'al.svg',
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
                icon: 'bs.svg',
                caption: 'Боснийский'
            },
            {
                lang: 'sr',
                icon: 'sr.svg',
                caption: 'Сербский'
            },
            {
                lang: 'hr',
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
                ico: 'uk-UA',
                icon: 'md.svg',
                caption: 'Молдавский'
            }
        ];

        function getCurrentLang() {
            return _.find(list, {lang: $translate.use()});
        }

        function getList() {
            return list;
        }

        return {
            getCurrentLang: getCurrentLang,
            getList: getList
        }
    }

})();