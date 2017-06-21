(function () {
    'use strict';

    angular
        .module('auth.signUp')
        .controller('SignUpController', SignUpController);

    SignUpController.$inject = ['$state', '$auth', '$timeout', 'authService', 'profile'];
    /* @ngInject */
    function SignUpController($state, $auth, $timeout, authService, profile) {
        var vm = this;

        vm.userForm = {
            isLoading: false,
            model: {
                phone: '420'
            },
            validations: {
                phone: {
                }
            }
        };

        vm.codeForm = {
            model: {}
        };

        vm.signUp = signUp;
        vm.sendCode = sendCode;

        activate();

        function activate() {
            $timeout(function () {
                vm.userForm.model.phone = 420;
            }, 1250);
        }

        function signUp(form) {
            var data = angular.copy(vm.userForm.model);

            if (vm.userForm.model.phone) {
                data.phone = vm.userForm.model.phone.replace(/\s{2,}/g, ' ');
            }

            vm.userForm.isLoading = true;

            $auth.submitRegistration(data)
                .then(function (response) {
                    vm.userForm.isLoading = false;
                    $state.go('signIn');
                })
                .catch(function (response) {
                    vm.userForm.isLoading = false;
                    vm.userForm.errors = response.data.data;
                    vm.error = response.data.data;
                });
        }

        function sendCode() {
            var phone = vm.userForm.model.phone.replace(/\s{2,}/g, ' ');
            authService.sendCode({}, {phone: phone})
                .then(function (response) {
                    vm.codeResult = response.data;
                })
                .catch(function (response) {
                    vm.userForm.errors = response.data.data;
                    console.log('error', response);
                });
        }
    }
})();
