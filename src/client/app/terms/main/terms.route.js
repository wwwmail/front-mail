(function () {
    'use strict';

    angular
        .module('terms.main')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'terms',
                config: {
                    url: '/terms',
                    templateUrl: 'app/terms/main/terms.html',
                    controller: 'TermsController',
                    controllerAs: 'vm',
                    title: 'terms'
                }
            }
        ];
    }
})();
