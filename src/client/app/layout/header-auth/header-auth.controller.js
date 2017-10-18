(function () {
    'use strict';

    angular
        .module('app.layout')
        .controller('HeaderAuthController', HeaderAuthController);

    HeaderAuthController.$inject = ['$auth'];

    /* @ngInject */
    function HeaderAuthController($auth) {
        var vm = this;

        activate();

        function activate() {
            vm.user = $auth.user;
        }
    }
})();
