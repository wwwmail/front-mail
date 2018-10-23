(function () {
    'use strict';

    angular
        .module('app.components')
        .component('searchContact', {
            bindings: {},
            templateUrl: 'app/components/search-contact/search-contact.html',
            controller: 'SearchContactController',
            controllerAs: 'vm'
        });
})();