(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('PaypalTariffButtonController', PaypalTariffButtonController);

    PaypalTariffButtonController.$inject = ['$auth', '$timeout', '$uibModal', 'payment', 'profile', 'CONFIG'];
    /* @ngInject */
    function PaypalTariffButtonController($auth, $timeout, $uibModal, payment, profile, CONFIG) {
        var vm = this;

        vm.paymentInterval = {};

        console.log('CONFIG', CONFIG);

        vm.opts = {

            env: CONFIG.env,

            style: {
                label: 'pay',
                size:  'small', // small | medium
                shape: 'rect'   // pill | rect
            },

            client: CONFIG.payment,

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
                // console.log('data', data);

                data.tariffId = vm.tariff.id;

                payment.register({}, data).then(function (response) {
                    updateTariff(response.data);
                });

                // Optional: display a confirmation page here
                return actions.payment.execute().then(function () {
                    var modalInstance = $uibModal.open({
                        animation: true,
                        templateUrl: 'app/components/alert-popup/alert-popup.html',
                        controller: 'AlertPopupController',
                        controllerAs: 'vm',
                        size: 'sm',
                        windowClass: 'popup popup--alert'
                    });
                });
            }
        };

        activate();

        function activate() {
            vm.user = $auth.user;
        }

        function updateTariff(data) {
            console.log('status', data);
            if (data.status === 0) {
                $timeout(function () {
                    checkPayment(data);
                }, 1000 * 5);
            }

            if (data.status === 1) {
                profile.get();
            }

            if (data.status === 2) {
                alert('Ошибка');
            }
        }

        function checkPayment(data) {
            console.log('data', data);
            payment.getById({id: data.id}, {}).then(function (response) {
                console.log('response status', response.data);
                updateTariff(response.data);
            });
        }
    }
})();
