(function () {
    'use strict';

    angular
        .module('app.components')
        .component('phoneToAdd', {
            bindings: {
                phones: '=',
                name: '@?',
                required: '@?',
                isAutofocus: '=?'
            },
            templateUrl: 'app/components/phone-to-add/phone-to-add.html',
            controller: 'PhoneToAddController',
            controllerAs: 'vm'
        });
})();