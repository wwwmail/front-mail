(function () {
    'use strict';

    angular
        .module('app.services')
        .factory('connection', connection);

    connection.$inject = ['CONFIG', '$resource', '$translate'];

    function connection(CONFIG, $resource, $translate) {
        var API_URL = CONFIG.APIHost + '/connection';

        var resource = $resource(API_URL,
            {},
            {
                get: {
                    method: 'GET',
                    url: API_URL
                },
                getById: {
                    method: 'GET',
                    url: API_URL
                },
                create: {
                    method: 'POST',
                    url: API_URL
                },
                update: {
                    method: 'PUT',
                    url: API_URL + '/:id'
                },
                destroy: {
                    method: 'DELETE',
                    url: API_URL + '/:id'
                }
            }
        );

        function get(params, data) {
           return resource.get(params, data).$promise
        }

        function getById(params, data) {
            return resource.getById(params, data).$promise
        }

        function create(params, data) {
            return resource.create(params, data).$promise;
        }

        function update(params, data) {
            return resource.update(params, data).$promise;
        }

        function destroy(params, data) {
            $translate('WANT_DELETE_ACCOUNT').then(function (translation) {
                if (confirm(translation)) {
                    return resource.destroy(params, data).$promise;
                }
            });
        }

        return {
            get: get,
            getById: getById,
            create: create,
            update: update,
            destroy: destroy
        }
    }

})();