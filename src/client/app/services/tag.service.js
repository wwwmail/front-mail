(function () {
    'use strict';

    angular
        .module('app.services')
        .factory('tag', tag);

    tag.$inject = ['CONFIG', '$resource', '$http', '$rootScope'];

    function tag(CONFIG, $resource, $http, $rootScope) {
        var API_URL = CONFIG.APIHost + '/tag';

        var resource = $resource(API_URL,
            {},
            {
                get: {
                    method: 'GET',
                    url: API_URL
                },
                create: {
                    method: 'POST',
                    url: API_URL
                },
                update: {
                    method: 'POST',
                    url: API_URL + '/:id'
                },
                getTagsByUser: {
                    method: 'GET',
                    url: API_URL + '/get-tags-by-user'
                },
                addTagToMessage: {
                    method: 'POST',
                    url: API_URL + '/add-tag-to-message'
                }
            }
        );

        function get(params, data) {
            return resource.get(params, data).$promise;
        }

        function getTagsByUser(params, data) {
            return resource.getTagsByUser(params, data).$promise;
        }

        return {
            get: get,
            getTagsByUser: getTagsByUser
        }
    }

})();