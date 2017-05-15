(function () {
    'use strict';

    angular
        .module('app.components')
        .component('blackList', {
            bindings: {
                data: '='
            },
            templateUrl: 'app/components/black-list/black-list.html',
            controller: 'BlackListController',
            controllerAs: 'vm'
        });
})();