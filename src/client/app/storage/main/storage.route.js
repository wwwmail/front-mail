(function () {
    'use strict';

    angular
        .module('storage.main')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'storage',
                config: {
                    url: '/storage',
                    templateUrl: 'app/storage/main/storage.html',
                    controller: 'StorageController',
                    controllerAs: 'vm',
                    title: 'storage',
                    resolve: {
                        tariffResult: function (tariff) {
                            return tariff.getTariff();
                        }
                    }
                }
            }
        ];
    }
})();
