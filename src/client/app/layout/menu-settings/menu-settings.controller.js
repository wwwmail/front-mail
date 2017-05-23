(function () {
    'use strict';

    angular
        .module('app.layout')
        .controller('MenuSettingsController', MenuSettingsController);

    MenuSettingsController.$inject = ['$uibModal', '$translatePartialLoader', '$translate'];

    /* @ngInject */
    function MenuSettingsController($uibModal, $translatePartialLoader, $translate) {
        var vm = this;
        vm.title = 'Menu';

        $translatePartialLoader.addPart('layout/menu-settings');
        $translate.refresh();

        vm.openPasswordChangePopup = openPasswordChangePopup;

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
