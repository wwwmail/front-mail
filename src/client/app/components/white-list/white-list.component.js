(function () {
    'use strict';

    angular
        .module('app.components')
        .component('whiteList', {
            bindings: {
                data: '='
            },
            templateUrl: 'app/components/white-list/white-list.html',
            controller: 'WhiteListController',
            controllerAs: 'vm'
        });
})();