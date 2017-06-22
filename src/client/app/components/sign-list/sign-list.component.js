(function () {
    'use strict';

    angular
        .module('app.components')
        .component('signList', {
            bindings: {
                signs: '=',
                onSelect: '&',
                onClose: '&'
            },
            templateUrl: 'app/components/sign-list/sign-list.html',
            controller: 'SignListController',
            controllerAs: 'vm'
        });
})();