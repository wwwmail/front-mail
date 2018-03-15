(function () {
    'use strict';

    angular
        .module('app.components')
        .component('spinner', {
            bindings: {
                isGlobal: '=',
                isOpen: '@?',
                classNames: '@?'
            },
            templateUrl: 'app/components/spinner/spinner.html',
            controller: 'SpinnerController',
            controllerAs: 'vm'
        });
})();