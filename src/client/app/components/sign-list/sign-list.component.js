(function () {
    'use strict';

    angular
        .module('app.components')
        .component('signList', {
            bindings: {
                messages: '='
            },
            templateUrl: 'app/components/sign-list/sign-list.html',
            controller: 'SignListController',
            controllerAs: 'vm'
        });
})();