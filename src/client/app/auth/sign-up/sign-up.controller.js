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
                .catch(function (response) {
                    // handle error response
                    console.log('error', response);
                });
        }

        function sendCode() {
            console.log(vm.userForm.model);
            authService.sendCode({}, {phone: vm.userForm.model.phone})
                .then(function (response) {
                    console.log('response', response);
                    vm.codeResult = response;
                });
        }

    }
})();
