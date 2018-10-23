(function () {
    'use strict';

    angular
        .module('app.components')
        .component('contactPhones', {
            bindings: {
                phones: '='
            },
            templateUrl: 'app/components/contact-phones/contact-phones.html',
            controller: 'ContactPhonesController',
            controllerAs: 'vm'
        });
})();