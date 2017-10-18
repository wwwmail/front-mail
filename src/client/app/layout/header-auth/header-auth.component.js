(function () {
    'use strict';

    angular
        .module('app.layout')
        .component('headerAuth', {
            bindings: {},
            templateUrl: 'app/layout/header-auth/header-auth.html',
            controller: 'HeaderAuthController',
            controllerAs: 'vm'
        });
})();