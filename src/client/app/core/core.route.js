(function () {
    'use strict';

    angular
        .module('app.core')
        .run(appRun);

    /* @ngInject */
    function appRun(routerHelper, $http, $rootScope, $translate, theme, $timeout) {

/*        var lang = $translate.use();

        alert(lang);

        if (!lang) {
            lang = navigator.language || navigator.userLanguage;
            $translate.use(lang);
        }

        moment.locale(lang);*/

        //
        // alert($translate.use());
        //
        // if (!$translate.use()) {
        //     var lang = navigator.language || navigator.userLanguage;
        //     $translate.use(lang);
        //     moment.locale(lang);
        // }

        // alert($translate.use());

        // $http.defaults.headers.common["Accept-Language"] = $translate.use();

        theme.setDefault();

        $rootScope.$on('$stateChangeSuccess',
            function (event, toState, toParams, fromState, fromParams) {
                $timeout(function () {
                    theme.setDefault();
                }, 50);
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
