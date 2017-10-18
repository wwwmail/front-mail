(function () {
    'use strict';

    angular
        .module('app.layout')
        .controller('FooterAuthController', FooterAuthController);

    FooterAuthController.$inject = ['$auth'];

    /* @ngInject */
    function FooterAuthController($auth) {
        var vm = this;

        activate();

        function activate() {
            vm.user = $auth.user;
        }
    }
})();
