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
            // Render the PayPal button

            paypal.Button.render({

                // Set your environment

                env: 'sandbox', // sandbox | production

                // Specify the style of the button

                style: {
                    label: 'checkout', // checkout | credit | pay
                    size:  'small',    // small | medium | responsive
                    shape: 'rect',     // pill | rect
                    color: 'gold'      // gold | blue | silver
                },

                commit: true,

                // PayPal Client IDs - replace with your own
                // Create a PayPal app: https://developer.paypal.com/developer/applications/create

                client: {
                    sandbox: 'AZDxjDScFpQtjWTOUtWKbyN_bDt4OgqaF4eYXlewfBP4-8aqX3PiV8e1GWU6liB2CUXlkA59kJXE7M6R',
                    production: 'AQgVJbIVhUkthElCdiLS1GZj7tq38wDeBspxYrLG_K73OzXL2_NTvBsQTDT9oXhEMTGQIiEtr8jPnFzF'
                },

                // Wait for the PayPal button to be clicked

                payment: function (actions) {
                    return actions.payment.create({
                        transactions: [
                            {
                                amount: {
                                    total: vm.amount,
                                    currency: 'CZK'
                                }
                            }
                        ]
                    });
                },

                // Wait for the payment to be authorized by the customer

                onAuthorize: function (data, actions) {
                    return actions.payment.execute().then(function () {
                        window.alert('Payment Complete!');
                    });
                }

            }, '#paypal-button-container');
        }
    }
})();