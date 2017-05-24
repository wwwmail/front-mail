(function () {
    'use strict';

    angular
        .module('app.layout')
        .controller('MenuSettingsController', MenuSettingsController);

    MenuSettingsController.$inject = ['$uibModal', '$auth'];

    /* @ngInject */
    function MenuSettingsController($uibModal, $auth) {
        var vm = this;
        vm.title = 'Menu';

        vm.openPasswordChangePopup = openPasswordChangePopup;

        activate();

        function activate() {
            vm.profile = $auth.user.profile;
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
