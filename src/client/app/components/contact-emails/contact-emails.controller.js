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
        vm.remove = remove;

        function add(form, keyCode) {
            if (form.$invalid || keyCode !== 13) return;
            vm.emails.push({value: vm.emailForm.model.email});
            vm.emailForm.model.email = '';
        }

        function remove(item) {
            _.remove(vm.emails, function (email) {
                return email === item;
            });
        }
    }
})();
