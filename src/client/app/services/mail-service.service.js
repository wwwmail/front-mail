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
                }
            }
        );

        function getWeather(params, data) {
            return resource.getWeather(params, data).$promise;
        }

        return {
            getWeather: getWeather
        }
    }

})();