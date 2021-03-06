(function () {
    'use strict';

    angular
        .module('app.components')
        .component('viewType', {
            bindings: {
                isViewTypeOpen: '='
            },
            templateUrl: 'app/components/view-type/view-type.html',
            controller: 'ViewTypeController',
            controllerAs: 'vm'
        });
})();
