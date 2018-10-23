(function () {
    'use strict';

    angular
        .module('app.components')
        .component('paginateButton', {
            bindings: {
                data: '=',
                label: '@?'
            },
            templateUrl: 'app/components/paginate-button/paginate-button.html',
            controller: 'PaginateButtonController',
            controllerAs: 'vm'
        });
})();