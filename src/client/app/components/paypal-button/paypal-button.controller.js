(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('PaypalButtonController', PaypalButtonController);

    PaypalButtonController.$inject = [];
    /* @ngInject */
    function PaypalButtonController() {
        var vm = this;

        activate();

        function activate() {
            getButton();
        }

        function getButton() {

            paypal.Button.render({

                env: 'sandbox', // Or 'sandbox'

                client: {
                    sandbox: 'info.advers-facilitator@gmail.com',
                    production: 'xxxxxxxxx'
                },

                commit: true, // Show a 'Pay Now' button

                payment: function (data, actions) {
                    return actions.payment.create({
                        transactions: [
                            {
                                amount: {total: '1.00', currency: 'USD'}
                            }
                        ]
                    });
                },

                onAuthorize: function (data, actions) {
                    return actions.payment.execute().then(function (payment) {

                        // The payment is complete!
                        // You can now show a confirmation message to the customer
                    });
                }

            }, '#paypal-button');
        }
    }
})();
