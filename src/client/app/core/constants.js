(function () {
    'use strict';

    angular
        .module('app.core')
        .constant('CONFIG',
            {
                DebugMode: true,
                APIHost: 'https://apimail.devogic.com',
                MediaUrl: 'https://apimail.devogic.com/'
            }
        );
})();
