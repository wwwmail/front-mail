(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('ThemesController', ThemesController);

    ThemesController.$inject = ['$rootScope', '$timeout', 'theme', 'profile'];
    /* @ngInject */
    function ThemesController($rootScope, $timeout, theme, profile) {
        var vm = this;

        vm.themes = theme.themes;

        vm.select = select;
        vm.selectColor = selectColor;

        ////

        activate();

        function activate() {
            if (theme.get()) {
                vm.themes.selected = theme.get();
                vm.themes.selected.isActive = true;
            }
        }

        function select(data) {
            _.forEach(vm.themes.items, function (item) {
                item.isActive = false;
            });

            vm.themes.selected = data;
            vm.themes.selected.isActive = true;

            if (!vm.themes.selected.isColor) {
                theme.get(vm.themes.selected.id);
            }

            profile.put({}, {
                theme: data.id
            });
        }

        function selectColor(data) {
            _.forEach(vm.themes.selected.colors.items, function (item) {
                item.isActive = false;
            });
            vm.themes.selected.colors.selected = data;
            vm.themes.selected.colors.selected.isActive = true;
            theme.get(vm.themes.selected.id);

            profile.put({}, {
                theme: data.id
            });
        }
    }
})();
