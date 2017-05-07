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

        vm.add = add;

        function add(form) {
            if (form.$invalid) return;
            vm.emails.push({value: vm.emailForm.model.email});
            vm.emailForm.model.email = '';
        }
    }
})();
