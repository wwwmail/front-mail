(function () {
    'use strict';

    angular
        .module('app.layout')
        .component('menuContacts', {
            bindings: {},
            templateUrl: 'app/layout/menu-contacts/menu-contacts.html',
            controller: 'MenuContactsController',
            controllerAs: 'vm'
        });
})();