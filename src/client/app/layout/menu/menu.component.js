(function () {
    'use strict';

    angular
        .module('app.layout')
        .component('menu', {
            bindings: {},
            templateUrl: 'app/layout/menu/menu.html',
            controller: 'MenuController',
            controllerAs: 'vm'
        });
})();