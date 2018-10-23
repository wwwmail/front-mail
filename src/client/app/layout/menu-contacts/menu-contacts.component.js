(function () {
    'use strict';

    angular
        .module('app.layout')
        .component('menuContacts', {
            bindings: {
                contactGroup: '='
            },
            templateUrl: 'app/layout/menu-contacts/menu-contacts.html',
            controller: 'MenuContactsController',
            controllerAs: 'vm'
        });
})();