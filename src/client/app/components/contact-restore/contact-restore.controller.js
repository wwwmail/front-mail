(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('ContactRestoreController', ContactRestoreController);

    ContactRestoreController.$inject = ['contactGroup'];
    /* @ngInject */
    function ContactRestoreController(contactGroup) {
        var vm = this;

        vm.contactGroupForm = {
            model: {}
        };

        vm.create = create;
        vm.close = close;

        ////

        function create(form) {
            console.log('vm.contactGroupForm', vm.contactGroupForm, form);

            if (form.$invalid) return;

            contactGroup.create({}, vm.contactGroupForm.model).then(function (response) {
                vm.onClose();
            });
        }

        function close() {
            vm.onClose();
        }
    }
})();
