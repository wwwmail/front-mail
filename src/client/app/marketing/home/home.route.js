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
                    url: '/?version&token&page&compose',
                    controller: 'HomeController',
                    controllerAs: 'vm',
                    onEnter: function ($auth, $state, $stateParams) {
                        // if ($state.params.token) {
                            // $auth.setAuthHeaders({
                            //     "Authorization": "Bearer " + $state.params.token
                            // });

                            // $auth.validateUser().then(function() {
                                console.log('home $state', $stateParams);

                                var params = {};

                                alert($stateParams.page);

                                if ($stateParams.compose) {
                                    params.compose = $state.params.compose
                                }

                                if ($stateParams.page) {
                                    $state.go($stateParams.page, params);
                                    return;
                                }

                                params.mbox = 'INBOX';

                                $state.go('mail.inbox', params);
                            // }, function () {
                            //     $state.go('signIn');
                            // });
                            // return;
                        // }

                        // $state.go('mail.inbox', {mbox: 'INBOX'});
                    }
                }
            }
        ];
    }
})();
