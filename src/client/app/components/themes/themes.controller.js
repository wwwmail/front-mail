(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('ThemesController', ThemesController);

    ThemesController.$inject = ['$rootScope', '$timeout', 'theme'];
    /* @ngInject */
    function ThemesController($rootScope, $timeout, theme) {
        var vm = this;

        vm.themes = {
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

        vm.select = select;
        vm.selectColor = selectColor;

        ////

        activate();

        function activate() {
            vm.themes.selected = theme.get();
            vm.themes.selected.isActive = true;
        }

        function select(data) {
            _.forEach(vm.themes.items, function (item) {
                item.isActive = false;
            });

            vm.themes.selected = data;
            vm.themes.selected.isActive = true;

            if (!vm.themes.selected.isColor) {
                theme.set(vm.themes.selected);
            }
        }

        function selectColor(data) {
            _.forEach(vm.themes.selected.colors.items, function (item) {
                item.isActive = false;
            });
            vm.themes.selected.colors.selected = data;
            vm.themes.selected.colors.selected.isActive = true;
            theme.set(vm.themes.selected);
        }
    }
})();
