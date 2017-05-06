(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('ContactEditController', ContactEditController);

    ContactEditController.$inject = ['contact'];
    /* @ngInject */
    function ContactEditController(contact) {
        var vm = this;

        vm.contactForm = {
            model: {}
        };

        vm.emailForm = {
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
            if (form.$invalid) return;

            // console.log('vm.contactForm', vm.contactForm.model, form);

            contact.update({id: vm.contactForm.model.id}, vm.contactForm.model)
                .then(function (response) {});

            vm.onClose({result: vm.contactForm.model});
        }

        function close() {
            vm.onCancel();
        }
    }
})();
