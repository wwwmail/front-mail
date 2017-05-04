(function () {
    'use strict';

    angular
        .module('app.services')
        .factory('contact', contact);

    contact.$inject = ['CONFIG', '$resource', '$rootScope'];

    function contact(CONFIG, $resource, $rootScope) {
        var API_URL = CONFIG.APIHost + '/contact';

        var resource = $resource(API_URL,
            {},
            {
                get: {
                    method: 'GET',
                    url: API_URL
                },
                getById: {
                    method: 'GET',
                    url: API_URL + '/:id'
                },
                create: {
                    method: 'POST',
                    url: API_URL
                },
                update: {
                    method: 'PUT',
                    url: API_URL + '/:id',
                    params: {
                        id: '@id'
                    }
                },
                destroy: {
                    method: 'DELETE',
                    url: API_URL + '/:id'
                }
            }
        );

        function get(params, data) {
            return resource.get(params, data).$promise;
        }

        function getById(params, data) {
            return resource.getById(params, data).$promise
                .then(function (response) {

                });
        }

        function create(params, data) {
            return resource.create(params, data).$promise
                .then(function (response) {
                    $rootScope.$broadcast('contactGroup:create:success');
                });
        }

        function update(params, data) {
            return resource.update(params, data).$promise
                .then(function (response) {
                    $rootScope.$broadcast('contactGroup:update:success');
                });
        }

        function destroy(params, data) {
            return resource.destroy(params, data).$promise
                .then(function (response) {
                    $rootScope.$broadcast('contactGroup:destroy:success');
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