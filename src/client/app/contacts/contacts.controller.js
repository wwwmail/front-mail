(function () {
    'use strict';

    angular
        .module('contacts')
        .controller('ContactsController', ContactsController);

    ContactsController.$inject = ['contactGroupResolve'];
    /* @ngInject */
    function ContactsController(contactGroupResolve) {
        var vm = this;

        vm.contactGroup = {
            items: []
        };

        activate();

        function activate() {
            contactGroupResolve.$promise
                .then(function (response) {
                    console.log('response contactGroup', response);
                    vm.contactGroup.items = response.data;
                });
        }
    }
})();
