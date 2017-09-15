(function () {
    'use strict';

    angular
        .module('marketing.home')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'home',
                config: {
                    url: '/?version&token&page&compose&success',
                    controller: 'HomeController',
                    controllerAs: 'vm',
                    onEnter: function ($auth, $state, $stateParams) {
                        console.log('home $state', $stateParams);

                        var params = {};

                        if ($stateParams.compose) {
                            params.compose = $state.params.compose
                        }

                        if ($stateParams.page) {
                            $state.go($stateParams.page, params);
                            return;
                        }

                        if ($stateParams.token) {
                            $auth.setAuthHeaders({
                                "Authorization": 'Bearer ' + $stateParams.token
                            });
                            $state.go('mail.inbox', {mbox: 'INBOX'});
                            return;
                        }

                        params.mbox = 'INBOX';

                        $state.go('mail.inbox', params);
                    }
                }
            }
        ];
    }
})();
