(function () {
    'use strict';

    angular
        .module('auth.passwordUpdate')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'passwordUpdate',
                config: {
                    parent: 'config',
                    url: '/password-update?username&code',
                    templateUrl: 'app/auth/password-update/password-update.html',
                    controller: 'PasswordUpdateController',
                    controllerAs: 'vm',
                    title: 'Войти',
                    resolve: {
                        configResolve: function (config) {
                            return config.getIndex();
                        }
                    }
                }
            }
        ];
    }
})();
