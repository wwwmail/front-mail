(function () {
    'use strict';

    angular
        .module('help.main')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'help',
                config: {
                    url: '/help',
                    templateUrl: 'app/help/main/help.html',
                    controller: 'HelpController',
                    controllerAs: 'vm',
                    title: 'help'
                }
            }
        ];
    }
})();
