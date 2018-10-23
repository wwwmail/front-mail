(function () {
    'use strict';

    angular
        .module('app.components')
        .component('paypalTariffButton', {
            bindings: {
                tariff: '='
            },
            templateUrl: 'app/components/paypal-tariff-button/paypal-tariff-button.html',
            controller: 'PaypalTariffButtonController',
            controllerAs: 'vm'
        });
})();