(function () {
    'use strict';

    angular
        .module('app.components')
        .component('paypalButton', {
            bindings: {
                amount: '='
            },
            templateUrl: 'app/components/paypal-button/paypal-button.html',
            controller: 'PaypalButtonController',
            controllerAs: 'vm'
        });
})();