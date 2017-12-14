(function () {
    'use strict';

    angular
        .module('theme.main')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'theme',
                config: {
                    parent: 'config',
                    url: '/theme',
                    templateUrl: 'app/theme/main/main.html',
                    controller: 'ThemeController',
                    controllerAs: 'vm',
                    title: 'Theme'
                }
            }
        ];
    }
})();
