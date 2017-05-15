(function () {
    'use strict';

    angular
        .module('app.services')
        .factory('tariff', tariff);

    tariff.$inject = ['CONFIG', '$resource', '$http'];

    function tariff(CONFIG, $resource, $http) {
        var API_URL = CONFIG.APIHost + '/tariff';

        var resource = $resource(API_URL,
            {},
            {
                getTariff: {
                    method: 'GET',
                    url: API_URL
                },
                getQuota: {
                    method: 'GET',
                    url: CONFIG.APIHost + '/quota'
                },
                getQuotaById: {
                    method: 'GET',
                    url: CONFIG.APIHost + '/quota/:id',
                    params: {
                        id: '@id'
                    }
                },
                getById: {
                    method: 'GET',
                    url: API_URL + '/:id'
                },
                destroy: {
                    method: 'DELETE',
                    url: API_URL + '/:id',
                    hasBody: true,
                    params: {
                        id: '@id'
                    }
                }
            }
        );

        function getTariff(params, data) {
            return resource.getTariff(params, data).$promise;
        }

        function getQuota(params, data) {
            return resource.getQuota(params, data).$promise;
        }

        return {
            getTariff: getTariff,
            getQuota: getQuota
        }
    }

})();