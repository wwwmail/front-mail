(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('UserMenuController', UserMenuController);

    UserMenuController.$inject = ['$auth', '$state', '$uibModal', 'profile'];
    /* @ngInject */
    function UserMenuController($auth, $state, $uibModal, profile) {
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
            $auth.signOut().then(function() {
                $state.go('signIn');
            });
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
            // $auth.setAuthHeaders({
            //     "Authorization": profile.getStorageProfiles()[0].access_token
            // });
        }

        function setAuthProfile(profile) {
            console.log(profile);
            $auth.setAuthHeaders({
                "Authorization": profile.access_token
            });

            location.reload();
        }

    }
})();
