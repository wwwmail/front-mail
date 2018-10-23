(function () {
    'use strict';

    angular
        .module('app.layout')
        .controller('FooterController', FooterController);

    FooterController.$inject = ['$auth', 'CONFIG'];

    /* @ngInject */
    function FooterController($auth, CONFIG) {
        var vm = this;

        activate();

        function activate() {
            vm.CONFIG = CONFIG;
            vm.user = $auth.user;
        }
    }
})();
