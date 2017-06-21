(function () {
    'use strict';

    angular
        .module('app.core')
        .constant('CONFIG',
            {
                DebugMode: true,
                APIHost: window.appConfig.APIHost,
                MediaUrl: window.appConfig.MediaUrl
            }
        );
})();
