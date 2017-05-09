(function () {
    'use strict';

    angular
        .module('app.layout')
        .controller('FooterController', FooterController);

    FooterController.$inject = ['$auth'];

    /* @ngInject */
    function FooterController($auth) {
        var vm = this;

        vm.title = "Footer";

        activate();

        function activate() {
            vm.user = $auth.user;
        }
    }
})();
