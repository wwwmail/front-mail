(function () {
    'use strict';

    angular
        .module('app.services')
        .factory('help', help);

    help.$inject = ['CONFIG', '$http'];

    function help(CONFIG, $http) {

        function get(params, data) {
            return $http.get('/json/help.json', data);
        }

        return {
            get: get
        }
    }

})();