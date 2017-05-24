(function () {
    'use strict';

    angular
        .module('app.components')
        .component('timezoneList', {
            bindings: {
                messages: '='
            },
            templateUrl: 'app/components/timezone-list/timezone-list.html',
            controller: 'TimezoneListController',
            controllerAs: 'vm'
        });
})();