(function () {
    'use strict';

    angular
        .module('app.layout')
        .controller('MenuContactsController', MenuContactsController);

    MenuContactsController.$inject = ['$uibModal', '$scope', 'contactGroup'];

    /* @ngInject */
    function MenuContactsController($uibModal, $scope, contactGroup) {
        var vm = this;

        vm.openGroupAddPopup = openGroupAddPopup;
        vm.openContactImportFilePopup = openContactImportFilePopup;

        $scope.$on('contactGroup:create:success', function () {
            getContactGroup();
        });

        function getContactGroup() {
            contactGroup.get().then(function (response) {
                vm.contactGroup.items = response.data;
            });
        }

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
