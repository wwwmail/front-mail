(function () {
    'use strict';

    angular
        .module('app.services')
        .factory('payment', payment);

    payment.$inject = ['CONFIG', '$resource'];

    function payment(CONFIG, $resource) {
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
            return resource.register(params, data).$promise;
        }

        return {
            register: register
        }
    }

})();