(function () {
    'use strict';

    angular
        .module('app.components')
        .component('viewType', {
            bindings: {
                messages: '='
            },
            templateUrl: 'app/components/view-type/view-type.html',
            controller: 'ViewTypeController',
            controllerAs: 'vm'
        });
})();
