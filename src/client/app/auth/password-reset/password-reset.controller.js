(function () {
    'use strict';

    angular
        .module('auth.passwordReset')
        .controller('PasswordResetController', PasswordResetController);

    PasswordResetController.$inject = ['$state', '$auth'];
    /* @ngInject */
    function PasswordResetController($state, $auth) {
        var vm = this;

        vm.userForm = {
            isLoading: false,
            model: {}
        };

        vm.send = send;

        function send() {
            // console.log(vm.userForm);
            // vm.userForm.isLoading = true;
            // $auth.submitLogin(vm.userForm.model)
            //     .then(function (response) {
            //         vm.userForm.isLoading = false;
            //         $state.go('mail.inbox');
            //     })
            //     .catch(function (response) {
            //         // handle error response
            //         vm.userForm.errors = response.errors;
            //         console.log('error', vm.userForm.errors);
            //     });
        }

    }
})();
