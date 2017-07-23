(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('UserMenuController', UserMenuController);

    UserMenuController.$inject = ['$rootScope', '$auth', '$state', '$uibModal', 'profile', '$cookies'];
    /* @ngInject */
    function UserMenuController($rootScope, $auth, $state, $uibModal, profile, $cookies) {
        var vm = this;

        vm.user = $auth.user;
        vm.profiles = [];

        vm.logout = logout;
        vm.openPasswordChangePopup = openPasswordChangePopup;
        vm.setAuthProfile = setAuthProfile;

        activate();

        function activate() {
            getProfiles();
        }

        function logout() {
            profile.destroyStorageProfile($auth.user);
            $auth.signOut();
            $state.go('signIn');
        }

        function openPasswordChangePopup() {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'app/components/password-change/password-change-popup.html',
                controller: function ($scope, $uibModalInstance) {
                    $scope.cancel = cancel;

                    function cancel() {
                        $uibModalInstance.dismiss('cancel');
                    }
                },
                size: 'sm',
                windowClass: 'popup popup--password-change'
            });
        }

        function getProfiles() {
            vm.profiles = profile.getStorageProfiles();
        }

        function setAuthProfile(profile) {
            // $cookies.put('authToken', 'Bearer+' + profile.access_token);

            // console.log('$cookies', $cookies.getAll());

            // location.reload();

            // $cookies.remove('authToken');

            $auth.user.access_token = profile.access_token;

            $('#iframe--auth').on('load', function () {
                location.reload();
            });

            //
            // $auth.setAuthHeaders({
            //     "Authorization": profile.access_token
            // });
            //

        }
    }
})();
