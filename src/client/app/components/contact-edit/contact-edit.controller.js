(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('ContactEditController', ContactEditController);

    ContactEditController.$inject = ['contactGroup'];
    /* @ngInject */
    function ContactEditController(contactGroup) {
        var vm = this;

        vm.contactForm = {
            model: {}
        };

        vm.update = update;
        vm.close = close;

        ////

        activate();

        function activate() {
            vm.contactForm.model = angular.copy(vm.contact);
        }

        function update(form) {
            console.log('vm.contactForm', vm.contactForm, form);

            if (form.$invalid) return;

            contactGroup.update({}, vm.contactForm.model).then(function (response) {
                vm.onClose();
            });
        }

        function close() {
            vm.onClose();
        }
    }
})();
