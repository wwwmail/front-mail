(function () {
    'use strict';

    angular
        .module('app.components')
        .component('contactToAddSelect', {
            bindings: {
                addresses: '=',
                name: '@?',
                required: '@?',
                isAutofocus: '=?'
            },
            templateUrl: 'app/components/contact-to-add-select/contact-to-add-select.html',
            controller: 'ContactToAddSelectController',
            controllerAs: 'vm'
        });
})();