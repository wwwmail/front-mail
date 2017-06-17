(function () {
    'use strict';

    angular
        .module('app.services')
        .factory('theme', theme);

    theme.$inject = ['CONFIG', 'localStorageService'];

    function theme(CONFIG, localStorageService) {
        var elements = [
            {
                name: '.layout__left',
                alpha: 0.4
            },
            {
                name: '.header',
                alpha: 0.2
            },
            {
                name: '.footer',
                alpha: 0.2
            },
            {
                name: '.search-result--no-result',
                alpha: 0.3
            },
            {
                name: '.inbox-header',
                alpha: 0.3
            },
            {
                name: '.inbox-header__link',
                alpha: 0.3
            }
        ];

        function setDefault() {
            console.log(get());
            if (get()) {
                set(get());
            }
        }

        function set(theme) {
            if (!theme.isColor) {
                $('body').css('background', 'url(/images/themes/origin/' + theme.img);
                $('.layout__content').css('backgroundColor', '#fff');

                _.forEach(elements, function (el) {
                    $(el.name).css('backgroundColor', jQuery.Color($(el.name).css('backgroundColor')).alpha(el.alpha) + '!important')
                });
            }

            if (theme.isColor) {
                $('body').css('background', 'none');
                $('.layout__content').css('backgroundColor', '#fff');

                $('.header').css('backgroundColor', jQuery.Color(theme.colors.selected.color).alpha(0.2));
                // $('.footer').css('backgroundColor', jQuery.Color(theme.colors.selected.color).alpha(0.2));
                $('.layout__left').css('backgroundColor', jQuery.Color(theme.colors.selected.color).alpha(0.1));

                // _.forEach(elements, function (el) {
                //     $(el.name).css('backgroundColor', jQuery.Color($(el.name).css('backgroundColor')).alpha(1) + '!important')
                // });
            }

            localStorageService.set('theme', theme);
        }

        function get() {
            return localStorageService.get('theme');
        }

        return {
            setDefault: setDefault,
            set: set,
            get: get
        }
    }

})();