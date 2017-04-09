(function () {
    'use strict';

    angular
        .module('auth.signUp')
        .controller('SignUpController', SignUpController);

    SignUpController.$inject = ['$state', '$auth', 'authService'];
    /* @ngInject */
    function SignUpController($state, $auth, authService) {
        var vm = this;

        vm.userForm = {
            isLoading: false,
            model: {}
        };

        vm.codeForm = {
            model: {}
        };

        vm.signUp = signUp;
        vm.sendCode = sendCode;

        function signUp() {
            console.log(vm.userForm);
            $auth.submitRegistration(vm.userForm.model)
                .then(function (response) {
                    vm.userForm.isLoading = false;
                    $state.go('mail.inbox');
                })
                .catch(function (resp) {
                    // handle error response
                    console.log('error', vm.userForm.model);
                });
        }

        function sendCode() {
            authService.sendCode(vm.sendCode.model).$promise
                .then(function (response) {

                });
        }

    }
})();
