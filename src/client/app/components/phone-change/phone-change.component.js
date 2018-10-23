(function () {
    'use strict';

    angular
        .module('app.components')
        .component('phoneChange', {
            bindings: {
                onClose: '&',
                model: '='
            },
            templateUrl: 'app/components/phone-change/phone-change.html',
            controller: 'PhoneChangeController',
            controllerAs: 'vm'
        });
})();