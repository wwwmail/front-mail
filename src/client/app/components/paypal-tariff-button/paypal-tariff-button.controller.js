(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('PaypalTariffButtonController', PaypalTariffButtonController);

    PaypalTariffButtonController.$inject = ['$auth', '$timeout', 'payment'];
    /* @ngInject */
    function PaypalTariffButtonController($auth, $timeout, payment) {
        var vm = this;

        vm.opts = {

            env: 'sandbox',

            style: {
                label: 'pay',
                size:  'small', // small | medium
                shape: 'rect'   // pill | rect
            },

            client: {
                sandbox: 'AQgVJbIVhUkthElCdiLS1GZj7tq38wDeBspxYrLG_K73OzXL2_NTvBsQTDT9oXhEMTGQIiEtr8jPnFzF',
                production: 'AVZhosFzrnZ5Mf3tiOxAD0M6NHv8pcB2IFNHAfp_h69mmbd-LElFYkJUSII3Y0FPbm7S7lxBuqWImLbl'
            },

            payment: function () {

                var env = this.props.env;
                var client = this.props.client;

                return paypal.rest.payment.create(env, client, {
                    transactions: [
                        {
                            amount: {
                                total: vm.tariff.price,
                                currency: 'CZK'
                            }
                        }
                    ]
                }, {
                    input_fields: {
                        no_shipping: 1
                    }
                });
            },

            commit: true, // Optional: show a 'Pay Now' button in the checkout flow

            onAuthorize: function (data, actions) {

                console.log('data', data);

                data.tariffId = vm.tariff.id;

                payment.register({}, data);

                // Optional: display a confirmation page here

                return actions.payment.execute().then(function () {
                    alert('success');
                });
            }
        };

        activate();

        function activate() {
            vm.user = $auth.user;
        }
    }
})();
