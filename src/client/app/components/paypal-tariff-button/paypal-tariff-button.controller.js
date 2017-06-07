(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('PaypalTariffButtonController', PaypalTariffButtonController);

    PaypalTariffButtonController.$inject = ['$auth', '$timeout'];
    /* @ngInject */
    function PaypalTariffButtonController($auth, $timeout) {
        var vm = this;

        vm.payment = payment;
        vm.onAuthorize = onAuthorize;

        activate();

        function activate() {
            var params = {};
            params.email = $auth.user.profile.email;
            params.amount = vm.tariff.price;
            params.id = vm.tariff.id;
        }

        vm.client = {
            sandbox: 'AQgVJbIVhUkthElCdiLS1GZj7tq38wDeBspxYrLG_K73OzXL2_NTvBsQTDT9oXhEMTGQIiEtr8jPnFzF',
            production: 'AQgVJbIVhUkthElCdiLS1GZj7tq38wDeBspxYrLG_K73OzXL2_NTvBsQTDT9oXhEMTGQIiEtr8jPnFzF'
        };

        vm.opts = {

            env: 'production',

            client: {
                sandbox:    'AWi18rxt26-hrueMoPZ0tpGEOJnNT4QkiMQst9pYgaQNAfS1FLFxkxQuiaqRBj1vV5PmgHX_jA_c1ncL',
                production: 'AVZhosFzrnZ5Mf3tiOxAD0M6NHv8pcB2IFNHAfp_h69mmbd-LElFYkJUSII3Y0FPbm7S7lxBuqWImLbl'
            },

            payment: function() {

                var env    = this.props.env;
                var client = this.props.client;

                return paypal.rest.payment.create(env, client, {
                    transactions: [
                        {
                            amount: { total: '1.00', currency: 'USD' }
                        }
                    ]
                });
            },

            commit: true, // Optional: show a 'Pay Now' button in the checkout flow

            onAuthorize: function(data, actions) {

                // Optional: display a confirmation page here

                return actions.payment.execute().then(function() {
                    // Show a success page to the buyer
                });
            }
        };

        function payment(data, actions) {
            return actions.payment.create({
                transactions: [
                    {
                        amount: {total: '0.01', currency: 'USD'}
                    }
                ]
            });
        }

        function onAuthorize(data, actions) {
            return actions.payment.execute().then(function () {
                window.alert('Payment Complete!');
            });
        }
    }
})();
