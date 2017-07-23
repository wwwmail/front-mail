(function () {
    'use strict';

    angular
        .module('app.core')
        .run(appRun);

    /* @ngInject */
    function appRun(routerHelper, $http, $rootScope, $translate, theme, $timeout, $cookies, $auth) {
        theme.setDefault();

        if ($cookies.get('authToken')) {
            var tokenArr = $cookies.get('authToken').split('+');
            $auth.setAuthHeaders({
                "Authorization": "Bearer " + tokenArr[1]
            });
        }

        $rootScope.$on('$stateChangeSuccess',
            function (event, toState, toParams, fromState, fromParams) {
                $timeout(function () {
                    theme.setDefault();
                });
            });

        var otherwise = '404';
        routerHelper.configureStates(getStates(), otherwise);
    }

    function getStates() {
        return [
            {
                state: '404',
                config: {
                    url: '/404',
                    templateUrl: 'app/core/errors/404.html',
                    title: '404',
                    data: {
                        'noLogin': true
                    }
                }
            }
        ];
    }
})();
