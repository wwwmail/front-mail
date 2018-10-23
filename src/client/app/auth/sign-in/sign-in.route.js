(function () {
    'use strict';

    angular
        .module('auth.signIn')
        .run(appRun);
console.log(6);
    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
//        location.href='https://mail.si';
//        return true;
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'signIn',
                config: {
                    parent: 'config',
                    url: '/sign-in?token&compose&username',
                    templateUrl: 'app/auth/sign-in/sign-in.html',
                    controller: 'SignInController',
                    controllerAs: 'vm',
                    title: 'Войти',
                    resolve: {
                        configResolve: function (config) {
                            return config.getIndex();
                        }
                    }
                }
            },
            {
                state: 'logout',
                config: {
                    url: '/logout',
                    onEnter: function ($auth, $state) {
                        $auth.signOut();
                        $state.go('signIn');
                    }
                }
            }
        ];
    }
})();
