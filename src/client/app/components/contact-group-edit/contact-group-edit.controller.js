(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('ContactGroupEditController', ContactGroupEditController);

    ContactGroupEditController.$inject = ['contactGroup'];
    /* @ngInject */
    function ContactGroupEditController(contactGroup) {
        var vm = this;

        vm.contactGroupForm = {
            model: {}
        };

        vm.create = create;
        vm.close = close;

        ////

        activate();

        function activate() {
            vm.contactGroupForm.model = angular.copy(vm.model);
        }

        function create(form) {
            console.log('vm.contactGroupForm', vm.contactGroupForm, form);

            if (form.$invalid) return;

            contactGroup.update({}, vm.contactGroupForm.model).then(function (response) {
                vm.onClose();
            });
        }

        function close() {
            vm.onClose();
        }
    }
})();
