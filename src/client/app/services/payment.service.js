(function () {
    'use strict';

    angular
        .module('app.services')
        .factory('payment', payment);

    payment.$inject = ['CONFIG', '$resource', 'paypal'];

    function payment(CONFIG, $resource, paypal) {
        var API_URL = CONFIG.APIHost + '/paypal';

        var resource = $resource(API_URL,
            {},
            {
                register: {
                    method: 'POST',
                    url: API_URL + '/register'
                }
            }
        );

        function register(params, data) {
            return resource.getTariff(params, data).$promise;
        }

        return {
            register: register
        }
    }

})();