(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('ContactViewController', ContactViewController);

    ContactViewController.$inject = ['$uibModal', 'contactGroup'];
    /* @ngInject */
    function ContactViewController($uibModal, contactGroup) {
        var vm = this;

        // vm.contactGroupForm = {
        //     model: {}
        // };

        // vm.create = create;
        vm.close = close;
        vm.openContactEditPopup = openContactEditPopup;

        ////

        // function create(form) {
        //     console.log('vm.contactGroupForm', vm.contactGroupForm, form);
        //
        //     if (form.$invalid) return;
        //
        //     contactGroup.create({}, vm.contactGroupForm.model).then(function (response) {
        //         vm.onClose();
        //     });
        // }

        function close() {
            vm.onClose();
        }

        function openContactEditPopup() {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'app/components/contact-edit/contact-edit-popup.html',
                controller: function ($scope, $uibModalInstance, model) {
                    $scope.cancel = cancel;

                    // console.log('vm.contact', model);
                    $scope.contact = model;

                    function cancel() {
                        $uibModalInstance.dismiss('cancel');
                    }
                },
                resolve: {
                    model: function () {
                        return vm.contact;
                    }
                },
                size: 'sm',
                windowClass: 'popup popup--contact-add'
            });
        }
    }
})();
