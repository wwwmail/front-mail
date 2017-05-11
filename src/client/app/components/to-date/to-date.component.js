(function () {
    'use strict';

    angular
        .module('app.components')
        .component('toDate', {
            bindings: {
                date: '=',
                dateUnix: '='
            },
            templateUrl: 'app/components/to-date/to-date.html',
            controller: 'ToDateController',
            controllerAs: 'vm'
        });
})();