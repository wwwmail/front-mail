(function () {
    'use strict';

    angular
        .module('app.layout')
        .component('footerAuth', {
            bindings: {},
            templateUrl: 'app/layout/footer-auth/footer-auth.html',
            controller: 'FooterAuthController',
            controllerAs: 'vm'
        });
})();