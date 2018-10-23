(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('ThemesController', ThemesController);

    ThemesController.$inject = ['theme', 'profile', '$rootScope'];

    /* @ngInject */
    function ThemesController(theme, profile, $rootScope) {
        var vm = this;

        vm.select = select;
        vm.selectColor = selectColor;
        vm.close = close;
        
        ////

        activate();

        function activate() {
            vm.themes = theme.themes;
            // console.log('start themes', vm.themes);
        }

        function close() {
            $rootScope.isThemeShow = false;
            vm.isThemeActive = false;
        }

        function select(data) {
            vm.themes.selected = data;

            if (!vm.themes.selected.isColor) {
                theme.get({
                    id: vm.themes.selected.id
                });

                profile.put({}, {
                    theme: data.id
                });
            }
        }

        function selectColor(data) {
            vm.themes.selected.colors.selected = data;

            theme.get({
                id: vm.themes.selected.id,
                color_id: data.id
            });

            profile.put({}, {
                theme: 100,
                color_id: vm.themes.selected.colors.selected.id
            });
        }
    }
})();
