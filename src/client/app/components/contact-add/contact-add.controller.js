(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('ContactAddController', ContactAddController);

    ContactAddController.$inject = ['contact'];
    /* @ngInject */
    function ContactAddController(contact) {
        var vm = this;

        vm.contactForm = {
            model: {}
        };

        vm.create = create;
        vm.close = close;

        ////

        function create(form) {
            console.log('vm.contactForm', vm.contactForm, form);

            if (form.$invalid) return;

            contact.create({}, vm.contactForm.model).then(function (response) {
                vm.onClose();
            });
        }

        function close() {
            vm.onClose();
        }
    }
})();
