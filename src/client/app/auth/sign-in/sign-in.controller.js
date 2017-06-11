(function () {
    'use strict';

    angular
        .module('auth.signIn')
        .controller('SignInController', SignInController);

    SignInController.$inject = ['$scope', '$state', '$auth', '$timeout', 'profile'];
    /* @ngInject */
    function SignInController($scope, $state, $auth, $timeout, profile) {
        var vm = this;

        vm.userForm = {
            isLoading: false,
            isChange: false,
            model: {}
        };

        $scope.$watch('vm.userForm.model', function (data, oldData) {
            if (!_.isEqual(data, oldData)) {
                vm.userForm.errors = '';
            }
        }, true);

        vm.login = login;

        activate();

        function activate() {
            vm.$state = $state;

            if ($state.params.token) {
                signWidthToken();
            }
        }

        function signWidthToken() {
            vm.isTokenAuthLoading = true;

            $auth.setAuthHeaders({
                "Authorization": "Bearer " + $state.params.token
            });

            var params = {
                mbox: 'INBOX'
            };

            if ($state.params.compose) {
                params.compose = true;
            }

            $auth.validateUser().then(function() {
                $state.go('mail.inbox', params);
            });
        }

        function login() {
            console.log(vm.userForm);
            vm.userForm.isLoading = true;
            $auth.submitLogin(vm.userForm.model).then(function (response) {
                vm.userForm.isLoading = false;

                profile.addStorageProfile(response);

                if (!response.profile.timezone) {
                    var profileModel = {};
                    profileModel.timezone = moment.tz.guess();
                    profile.put({}, profileModel);
                }

                $state.go('mail.inbox', {mbox: 'INBOX'});

            }).catch(function (response) {
                vm.userForm.isLoading = false;
                vm.userForm.errors = "Не правильный логин или пароль";
                console.log('error', vm.userForm.errors);
            });
        }
    }
})();
