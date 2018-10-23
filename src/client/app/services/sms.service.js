(function () {
    'use strict';

    angular
        .module('app.services')
        .factory('sms', sms);

    sms.$inject = ['CONFIG', '$resource'];

    function sms(CONFIG, $resource) {
        var API_URL = CONFIG.APIHost + '/sms';

        var resource = $resource(API_URL,
            {},
            {
                sendNotify: {
                    method: 'POST',
                    url: API_URL + '/send-notify'
                }
            }
        );

        function sendNotify(params, data) {
            return resource.sendNotify(params, data);
        }

        return {
            sendNotify: sendNotify
        }
    }

})();