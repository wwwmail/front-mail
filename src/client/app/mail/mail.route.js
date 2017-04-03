(function () {
    'use strict';

    angular
        .module('mail')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'mail',
                config: {
                    url: '/',
                    templateUrl: 'app/mail/mail.html',
                    // controller: 'HomeController',
                    // controllerAs: 'vm',
                    title: 'Mail'
                }
            }
        ];
    }
})();
