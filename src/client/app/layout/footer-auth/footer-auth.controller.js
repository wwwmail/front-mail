(function () {
    'use strict';

    angular
        .module('app.layout')
        .controller('FooterAuthController', FooterAuthController);

    FooterAuthController.$inject = ['$auth', 'CONFIG'];

    /* @ngInject */
    function FooterAuthController($auth, CONFIG) {
        var vm = this;

        activate();

        function activate() {
            vm.CONFIG = CONFIG;
            vm.user = $auth.user;
        }
    }
})();
