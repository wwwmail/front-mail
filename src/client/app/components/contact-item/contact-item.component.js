(function () {
    'use strict';

    angular
        .module('app.components')
        .component('contactItem', {
            bindings: {
                contact: '=',
                contacts: '='
            },
            templateUrl: 'app/components/contact-item/contact-item.html',
            controller: 'ContactItemController',
            controllerAs: 'vm'
        });
})();