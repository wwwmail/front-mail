(function () {
    'use strict';

    angular
        .module('main')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'config',
                config: {
                    template: '<ui-view></ui-view>',
                    abstract: true,
                    resolve: {
                        init: function (init) {
                            return init.$promise;
                        }
                    }
                }
            },
            {
                state: 'main',
                config: {
                    parent: 'config',
                    url: '/?version&token&page&compose&success&lang',
                    controller: 'MainController',
                    controllerAs: 'vm'
                }
            }
        ];
    }
})();
