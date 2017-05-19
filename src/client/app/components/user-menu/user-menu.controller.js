(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('UserMenuController', UserMenuController);

    UserMenuController.$inject = ['$auth', '$state', '$uibModal'];
    /* @ngInject */
    function UserMenuController($auth, $state, $uibModal) {
        var vm = this;

        vm.user = $auth.user;

        vm.logout = logout;
        vm.openPasswordChangePopup = openPasswordChangePopup;

        activate();

        function activate() {}

        function logout() {
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

    }
})();
