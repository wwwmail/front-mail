(function () {
    'use strict';

    angular
        .module('app.services')
        .factory('mailService', mailService);

    mailService.$inject = ['$resource', 'CONFIG'];

    function mailService($resource, CONFIG) {
        var API_URL = CONFIG.APIHost + '/services';

        var resource = $resource(API_URL,
            {},
            {
                getWeather: {
                    method: 'GET',
                    url: API_URL + '/top-panel/weather'
                },
                getCurrencies: {
                    method: 'GET',
                    url: API_URL + '/top-panel/currencies'
                }
            }
        );

        function getWeather(params, data) {
            return resource.getWeather(params, data).$promise;
        }

        function getCurrencies(params, data) {
            return resource.getCurrencies(params, data).$promise;
        }

        return {
            getWeather: getWeather,
            getCurrencies: getCurrencies
        }
    }

})();