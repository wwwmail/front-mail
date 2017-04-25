(function () {
    'use strict';

    angular
        .module('contacts.main')
        .controller('ContactsController', ContactsController);

    ContactsController.$inject = [];
    /* @ngInject */
    function ContactsController() {
        var vm = this;
    }
})();
