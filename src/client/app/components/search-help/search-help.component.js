(function () {
    'use strict';

    angular
        .module('app.components')
        .component('searchHelp', {
            bindings: {},
            templateUrl: 'app/components/search-help/search-help.html',
            controller: 'SearchHelpController',
            controllerAs: 'vm'
        });
})();