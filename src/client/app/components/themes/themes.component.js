(function () {
    'use strict';

    angular
        .module('app.components')
        .component('themes', {
            bindings: {
                isThemeActive: '='
            },
            templateUrl: 'app/components/themes/themes.html',
            controller: 'ThemesController',
            controllerAs: 'vm'
        });
})();
