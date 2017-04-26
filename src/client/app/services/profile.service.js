(function () {
    'use strict';

    angular
        .module('app.services')
        .factory('profile', profile);

    profile.$inject = ['CONFIG', '$resource', 'Upload', '$rootScope'];

    function profile(CONFIG, $resource, Upload, $rootScope) {
        var API_URL = CONFIG.APIHost + '/profile';

        var resource = $resource(API_URL,
            {},
            {
                get: {
                    method: 'GET',
                    url: API_URL
                },
                post: {
                    method: 'POST',
                    url: API_URL
                },
                put: {
                    method: 'PATCH',
                    url: API_URL
                }
            }
        );

        var profile = {};

        function post(params, data) {
            profile = resource.post(params, data).$promise
                .then(function (response) {
                    profile = response.data;
                });

            return profile;
        }

        function get(params, data) {
            profile = resource.get(params, data).$promise
                .then(function (response) {
                    profile = response.data;
                });

            return profile;
        }

        function put(params, data) {
            profile = resource.put(params, data).$promise
                .then(function (response) {
                    profile = response.data;
                });

            return profile;
        }

        function uploadAvatar(data) {
            profile = Upload.upload({
                url: API_URL + '/upload-avatar',
                data: data
            });

            return profile;
        }

        function getCurrent() {
            return profile;
        }

        return {
            get: get,
            post: post,
            put: put,
            uploadAvatar: uploadAvatar,
            getCurrent: getCurrent
        }
    }

})();