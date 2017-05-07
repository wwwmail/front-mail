(function () {
    'use strict';

    angular
        .module('settings.contacts')
        .controller('СontactsController', СontactsController);

    СontactsController.$inject = [];
    /* @ngInject */
    function СontactsController() {
        var vm = this;

        vm.openContactImportFilePopup = openContactImportFilePopup;

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
