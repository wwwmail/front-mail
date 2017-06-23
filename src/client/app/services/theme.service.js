(function () {
    'use strict';

    angular
        .module('app.services')
        .factory('theme', theme);

    theme.$inject = ['CONFIG', 'localStorageService', '$auth', '$rootScope'];

    function theme(CONFIG, localStorageService, $auth, $rootScope) {
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

        var themes = {
            selected: {},
            items: [
                {
                    id: 100,
                    name: 'Цветная',
                    color: '#fff',
                    img: '1.jpg',
                    isColor: true,
                    colors: {
                        selected: {},
                        items: [
                            {
                                id: 1,
                                color: '#cccccc',
                                options: {
                                    type: 'light'
                                }
                            },
                            {
                                id: 2,
                                color: '#8da3d5',
                                options: {
                                    type: 'light'
                                }
                            },
                            {
                                id: 3,
                                color: 'rgba(100,167,217,.5)',
                                options: {
                                    type: 'light'
                                }
                            },
                            {
                                id: 4,
                                color: '#679e4d',
                                options: {
                                    type: 'light'
                                }
                            },
                            {
                                id: 5,
                                color: '#21af60'
                            },
                            {
                                id: 6,
                                color: '#09ae8b',
                                options: {
                                    type: 'light'
                                }
                            },
                            {
                                id: 7,
                                color: '#cfba09',
                                options: {
                                    type: 'light'
                                }
                            },
                            {
                                id: 8,
                                color: '#f5861e',
                                options: {
                                    type: 'light'
                                }
                            },
                            {
                                id: 9,
                                color: '#ea6c71',
                                options: {
                                    type: 'light'
                                }
                            },
                            {
                                id: 10,
                                color: '#dd86a6',
                                options: {
                                    type: 'light'
                                }
                            },
                            {
                                id: 11,
                                color: '#a28ec1',
                                options: {
                                    type: 'light'
                                }
                            },
                            {
                                id: 12,
                                color: '#fff',
                                options: {
                                    type: 'default'
                                }
                            },
                            {
                                id: 13,
                                color: 'rgba(0,0,0,.2)',
                                options: {
                                    type: 'dark'
                                }
                            },
                            {
                                id: 14,
                                color: 'rgba(0,0,0,.4)',
                                options: {
                                    type: 'dark'
                                }
                            },
                            {
                                id: 15,
                                color: '#333338',
                                options: {
                                    type: 'dark'
                                }
                            }
                        ]
                    }
                },
                {
                    id: 1,
                    name: 'Трава',
                    img: '1.jpg'
                },
                {
                    id: 2,
                    name: 'World of Tanks',
                    img: '9.jpg'
                },
                {
                    id: 3,
                    name: 'Апельсин',
                    img: '10.jpg'
                },
                {
                    id: 4,
                    name: 'Морская',
                    img: '2.jpg'
                }
            ]
        };

        activate();

        function activate() {
        }

        function setDefault() {
            if ($auth.user.profile) {
                get({
                    id: $auth.user.profile.theme,
                    color_id: $auth.user.profile.color_id
                });
            }
        }

        function set(theme) {
            if (!theme.isColor) {
                $('body').css('background', 'url(/images/themes/origin/' + theme.img);
                $('.layout__content').css('backgroundColor', '#fff');

                // var $searchMail = $('.search-mail');

                // $searchMail.find('.search-mail__input').css({
                //     'border': '1px solid #fff'
                // });
                //
                // $searchMail.find('.search-mail__filter').css({
                //     'color': '#fff'
                // });
                //
                // $searchMail.find('.search-mail__button').css({
                //     'border': '1px solid #fff',
                //     'color': '#fff'
                // });

                // $searchMail.find('.search-mail__group').addClass('placeholder--white');

                _.forEach(elements, function (el) {
                    $(el.name).css('backgroundColor', jQuery.Color($(el.name)
                            .css('backgroundColor'))
                            .alpha(el.alpha) + '' + '!important');
                });
            }

            if (theme.isColor) {
                var selectColor = theme.colors.selected;

                $('body').css('background', 'none');
                $('.layout__content').css('backgroundColor', '#fff');
                $('.header').css('backgroundColor', jQuery.Color(selectColor.color).alpha(0.2));
                $('.layout__left').css('backgroundColor', jQuery.Color(selectColor.color).alpha(0.1));

                if (selectColor.options.type === 'dark') {
                    // var $searchMail = $('.search-mail');
                    //
                    // $searchMail.find('.search-mail__input').css({
                    //     // 'border': '1px solid #fff',
                    //     'background-color': '#fff'
                    // });
                    //
                    // $searchMail.find('.search-mail__filter').css({
                    //     // 'color': '#fff',
                    //     'background-color': '#fff'
                    // });
                    //
                    // $searchMail.find('.search-mail__button').css({
                    //     // 'border': '1px solid #fff',
                    //     'color': '#fff',
                    //     'background-color': '#fff'
                    // });
                    //
                    // $searchMail.find('.search-mail__group').addClass('placeholder--white');
                }

                if (selectColor.options.type === 'light') {
                    // var $searchMail = $('.search-mail');

                    // $searchMail.find('.search-mail__input').css({
                    //     'border': '1px solid #c3c4c9'
                    // });
                    //
                    // $searchMail.find('.search-mail__filter').css({
                    //     'color': '#333'
                    // });
                    //
                    // $searchMail.find('.search-mail__button').css({
                    //     'border': '1px solid rgba(0, 0, 0, 0.2)',
                    //     'color': '#333'
                    // });

                    // $searchMail.find('.search-mail__group').removeClass('placeholder--white');
                }

                if (selectColor.options.type === 'default') {
                    // var $searchMail = $('.search-mail');

                    // $searchMail.find('.search-mail__input').css({
                    //     'border': '1px solid #c3c4c9'
                    // });
                    //
                    // $searchMail.find('.search-mail__filter').css({
                    //     'color': '#333'
                    // });
                    //
                    // $searchMail.find('.search-mail__button').css({
                    //     'border': '1px solid rgba(0, 0, 0, 0.2)',
                    //     'color': '#333'
                    // });

                    $('body').css('background', '#fff');
                    $('.layout__content').css('backgroundColor', '#fff');
                    $('.header').css('backgroundColor', '#ffffff');
                    $('.layout__left').css('backgroundColor', '#f3f5f7');

                    // $searchMail.find('.search-mail__group').addClass('placeholder--white');
                }
            }
        }

        function get(options) {
            var theme = _.find(themes.items, {'id': options.id});

            if (theme.isColor) {
                theme.colors.selected = _.find(theme.colors.items, {'id': options.color_id});
            }

            set(theme);
        }

        return {
            setDefault: setDefault,
            set: set,
            get: get,
            themes: themes
        }
    }
})();