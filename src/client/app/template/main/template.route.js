(function () {
    'use strict';

    angular
        .module('template.main')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'template',
                config: {
                    url: '/template',
                    templateUrl: 'app/template/main/template.html',
                    controller: 'TemplateController',
                    controllerAs: 'vm',
                    title: 'template',
                    configResolve: function (config) {
                        return config.getIndex();
                    }
                }
            }
        ];
    }
})();
