(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('ContactGroupAddController', ContactGroupAddController);

    ContactGroupAddController.$inject = ['contactGroup', 'contact'];
    /* @ngInject */
    function ContactGroupAddController(contactGroup, contact) {
        var vm = this;

        vm.contactGroupForm = {
            model: {}
        };

        vm.contacts = {
            isLoading: true,
            params: {},
            items: [],
            checked: []
        };

        vm.create = create;
        vm.close = close;

        ////

        activate();

        function activate() {
            getContacts();
        }

        function getByGroup() {
            contact.getByGroup(vm.contacts.params, {}).then(function(response) {
                vm.contacts.items = response.data;
            });
        }
        
        function getContacts() {
            vm.contacts.isLoading = true;
            contact.get(vm.contacts.params, {}).then(function(response) {
                vm.contacts.isLoading = false;
                vm.contacts.items = response.data;
            });
        }

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
