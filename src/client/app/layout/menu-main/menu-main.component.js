(function () {
    'use strict';

    angular
        .module('app.layout')
        .component('menuMain', {
            bindings: {
                folder: '='
            },
            templateUrl: 'app/layout/menu-main/menu-main.html',
            controller: 'MenuMainController',
            controllerAs: 'vm'
        });
})();