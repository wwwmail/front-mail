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
                                color: '#cccccc'
                            },
                            {
                                color: '#8da3d5'
                            },
                            {
                                color: 'rgba(100,167,217,.5)'
                            },
                            {
                                color: '#679e4d'
                            },
                            {
                                color: '#21af60'
                            },
                            {
                                color: '#09ae8b'
                            },
                            {
                                color: '#cfba09'
                            },
                            {
                                color: '#f5861e'
                            },
                            {
                                color: '#ea6c71'
                            },
                            {
                                color: '#dd86a6'
                            },
                            {
                                color: '#a28ec1'
                            },
                            {
                                color: '#fff'
                            },
                            {
                                color: 'rgba(0,0,0,.2)'
                            },
                            {
                                color: 'rgba(0,0,0,.4)'
                            },
                            {
                                color: '#333338'
                            }
                        ]
                    }
                },
                {
                    id: 1,
                    name: 'Трава',
                    color: '#fff',
                    img: '1.jpg'
                },
                {
                    id: 9,
                    name: 'World of Tanks',
                    color: '#fff',
                    img: '9.jpg'
                },
                {
                    id: 10,
                    name: 'Апельсин',
                    color: '#fff',
                    img: '10.jpg'
                },
                {
                    id: 2,
                    name: 'Морская',
                    color: '#fff',
                    img: '2.jpg'
                },
                {
                    id: 3,
                    name: 'Фантазия',
                    color: '#fff',
                    img: '3.jpg'
                },
                {
                    id: 4,
                    name: 'Хоккей',
                    color: '#fff',
                    img: '4.jpg'
                },
                {
                    id: 5,
                    name: 'В поисках Немо',
                    color: '#fff',
                    img: '5.jpg'
                },
                {
                    id: 6,
                    name: 'Одуванчики',
                    color: '#fff',
                    img: '6.jpg'
                },
                {
                    id: 7,
                    name: 'Пермский край',
                    color: '#fff',
                    img: '7.jpg'
                },
                {
                    id: 8,
                    name: 'Приморье',
                    color: '#fff',
                    img: '8.jpg'
                }
            ]
        };


        function setDefault() {
            // console.log(get());
            // if (get()) {
            //     set(get());
            // }
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
                $('.layout__left').css('backgroundColor', jQuery.Color(theme.colors.selected.color).alpha(0.1));
            }

            localStorageService.set('theme', theme);
        }

        function get(id) {
            console.log('id', id);
        }

        return {
            setDefault: setDefault,
            set: set,
            get: get,
            themes: themes
        }
    }

})();