(function () {
    'use strict';

    angular
        .module('auth.signIn')
        .controller('SignInController', SignInController);

    SignInController.$inject = [];
    /* @ngInject */
    function SignInController() {
        var vm = this;
    }
})();
