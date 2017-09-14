(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('UserMenuController', UserMenuController);

    UserMenuController.$inject = ['$rootScope', '$auth', '$state', '$uibModal', 'profile', '$cookies', '$timeout'];
    /* @ngInject */
    function UserMenuController($rootScope, $auth, $state, $uibModal, profile, $cookies, $timeout) {
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
            var profiles = profile.destroyStorageProfile($auth.user);

            console.log('profiles', profiles);

            if (profiles && profiles.length) {
                setAuthProfile(profiles[0]);
                return;
            }

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
            $auth.user.access_token = profile.access_token;
            $timeout(function () {
                $('#iframe--auth').on('load', function () {
                    $timeout(function () {
                        window.location.href = '/mail/inbox?mbox=INBOX';
                    }, 250);
                });
            }, 250);
        }
    }
})();
