(function () {
    'use strict';

    angular
        .module('app.components')
        .component('paginateButton', {
            bindings: {
                data: '='
            },
            templateUrl: 'app/components/paginate-button/paginate-button.html',
            controller: 'PaginateButtonController',
            controllerAs: 'vm'
        });
})();