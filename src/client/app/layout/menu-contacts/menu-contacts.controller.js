(function () {
    'use strict';

    angular
        .module('app.layout')
        .controller('MenuContactsController', MenuContactsController);

    MenuContactsController.$inject = ['$uibModal'];

    /* @ngInject */
    function MenuContactsController($uibModal) {
        var vm = this;

        vm.openGroupAddPopup = openGroupAddPopup;
        vm.openContactImportFilePopup = openContactImportFilePopup;

        function openGroupAddPopup() {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'app/components/contact-group-add/contact-group-add-popup.html',
                controller: function ($scope, $uibModalInstance) {
                    $scope.cancel = cancel;

                    function cancel() {
                        $uibModalInstance.dismiss('cancel');
                    }
                },
                size: 'sm',
                windowClass: 'popup popup--contact-group-add'
            });
        }

        function openContactImportFilePopup() {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'app/components/contact-import-file/contact-import-file-popup.html',
                controller: function ($scope, $uibModalInstance) {
                    $scope.cancel = cancel;

                    function cancel() {
                        $uibModalInstance.dismiss('cancel');
                    }
                },
                size: 'sm',
                windowClass: 'popup popup--contact-import-file'
            });
        }
    }
})();
