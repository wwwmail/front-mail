(function () {
    'use strict';

    angular
        .module('auth.signIn')
        .controller('SignInController', SignInController);

    SignInController.$inject = ['$state', '$auth'];
    /* @ngInject */
    function SignInController($state, $auth) {
        var vm = this;

        vm.loginForm = {
            isLoading: false,
            model: {}
        };

        vm.login = login;

        function login() {
            console.log(vm.loginForm);
            vm.loginForm.isLoading = true;
            $auth.submitLogin(vm.loginForm.model)
                .then(function (response) {
                    vm.loginForm.isLoading = false;
                    $state.go('mail.inbox');
                })
                .catch(function (response) {
                    // handle error response
                    console.log('error', response);
                });
        }

    }
})();
