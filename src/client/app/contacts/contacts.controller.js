(function () {
    'use strict';

    angular
        .module('contacts')
        .controller('ContactsController', ContactsController);

    ContactsController.$inject = ['contactGroupResolve', '$rootScope'];
    /* @ngInject */
    function ContactsController(contactGroupResolve, $rootScope) {
        var vm = this;

        vm.contactGroup = {
            items: []
        };

        activate();

        function activate() {
            contactGroupResolve.$promise
                .then(function (response) {
                    vm.contactGroup.items = response.data;
                });
        }
    }
})();
