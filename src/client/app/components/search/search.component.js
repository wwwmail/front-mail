(function () {
    'use strict';

    angular
        .module('app.components')
        .component('search', {
            bindings: {},
            templateUrl: 'app/components/search/search.html',
            controller: 'SearchController',
            controllerAs: 'vm'
        });
})();