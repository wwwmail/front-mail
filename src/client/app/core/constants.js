(function () {
    'use strict';

    angular
        .module('app.core')
        .constant('CONFIG',
            {
                DebugMode: true,
                APIHost: 'http://apimail.devogic.com'
            }
        );
    /*   angular
     .module('app.core')
     .constant('toastr', toastr);*/
})();
