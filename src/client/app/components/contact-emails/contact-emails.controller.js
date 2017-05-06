(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('ContactEmailsController', ContactEmailsController);

    ContactEmailsController.$inject = [];
    /* @ngInject */
    function ContactEmailsController() {
        var vm = this;

        vm.emailForm = {
            model: {}
        };

        vm.addEmail = addEmail;

        function addEmail(form) {
            alert();
            if (form.$invalid) return;
            vm.contactForm.model.emails.push({value: vm.emailForm.model.email});
            console.log('vm.contactForm.model.emails', vm.contactForm.model.emails);
        }
    }
})();
