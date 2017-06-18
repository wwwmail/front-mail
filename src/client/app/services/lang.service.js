(function () {
    'use strict';

    angular
        .module('app.services')
        .factory('lang', lang);

    lang.$inject = ['CONFIG', '$translate'];

    function lang(CONFIG, $translate) {
        var list = [
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
        ];

        function getCurrentLang() {
            return _.result(_.find(list, {lang: $translate.use()}), 'caption');
        }

        return {
            getCurrentLang: getCurrentLang
        }
    }

})();