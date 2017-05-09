(function () {
    'use strict';

    angular
        .module('app.services')
        .factory('contactGroup', contactGroup);

    contactGroup.$inject = ['CONFIG', '$resource', '$rootScope'];

    function contactGroup(CONFIG, $resource, $rootScope) {
        var API_URL = CONFIG.APIHost + '/contact-group';

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
                },
                addContacts: {
                    method: 'POST',
                    url: API_URL + '/:id/contacts',
                    params: {
                        id: '@id'
                    }
                }
            }
        );

        function get(params, data) {
            return resource.get(params, data).$promise;
        }

        function getById(params, data) {
            return resource.getById(params, data).$promise;
        }

        function create(params, data) {
            return resource.create(params, data).$promise
                .then(function (response) {
                    $rootScope.$broadcast('contactGroup:create:success');
                    return response;
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

        function addContacts(params, data) {
            return resource.addContacts(params, data).$promise
                .then(function (response) {
                    $rootScope.$broadcast('contactGroup:sync');
                });
        }

        return {
            get: get,
            getById: getById,
            create: create,
            update: update,
            destroy: destroy,
            addContacts: addContacts
        }
    }

})();