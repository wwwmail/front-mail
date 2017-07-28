(function () {
    'use strict';

    angular
        .module('auth.passwordReset')
        .controller('PasswordResetController', PasswordResetController);

    PasswordResetController.$inject = ['$state', '$auth', 'authService'];
    /* @ngInject */
    function PasswordResetController($state, $auth, authService) {
        var vm = this;

        vm.userForm = {
            isLoading: false,
            model: {},
            validations: {
                username: {
                    'required': 'ENTER_EMAIL_OR_LOGIN'
                }
            }
        };

        vm.requestPasswordReset = requestPasswordReset;

        function requestPasswordReset(form) {
            if (form.$invalid) return;

            var data = vm.userForm.model;

            if (data.username.split('@').length) {
                data.username = data.username.split('@')[0];
            }

            vm.userForm.isLoading = true;
            $auth.requestPasswordReset(data)
                .then(function (response) {
                    vm.userForm.isLoading = false;
                    $state.go('passwordUpdate', {
                        username: vm.userForm.model.username
                    });
                })
                .catch(function (response) {
                    vm.userForm.errors = response.data.data;
                    console.log('error',vm.userForm.errors);
                });
        }
    }
})();
