(function () {
    'use strict';

    angular
        .module('print')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'print',
                config: {
                    url: '/print?mbox&connection_id&id',
                    templateUrl: 'app/print/print.html',
                    controller: 'PrintController',
                    controllerAs: 'vm',
                    title: 'Print',
                    resolve: {
                        message: function ($stateParams, mail) {
                            return mail.getById({
                                id: $stateParams.id,
                                mbox: $stateParams.mbox,
                                connection_id: $stateParams.connection_id,
                                part: 'headnhtml'
                            });
                        }
                    }
                }
            }
        ];
    }
})();
