(function () {
    'use strict';

    angular
        .module('contacts.main')
        .controller('ContactsMainController', ContactsMainController);

    ContactsMainController.$inject = ['$state', 'contact'];
    /* @ngInject */
    function ContactsMainController($state, contact) {
        var vm = this;

        vm.contacts = {
            params: {},
            items: []
        };

        activate();

        function activate() {
            if ($state.params.groupId) {
                vm.contacts.params.groupId = $state.params.groupId;
            }

            get();
        }

        function get() {
            contact.get(vm.contacts.params, {}).then(function(response) {
                vm.contacts.items = response.data;
            });
        }
    }
})();
