(function () {
    'use strict';

    angular
        .module('app.components')
        .component('alertError', {
            bindings: {
                index: '=',
                attach: '=',
                message: '=',
                attachments: '='
            },
            templateUrl: 'app/components/alert-error/alert-error.html',
            controller: 'AlertErrorController',
            controllerAs: 'vm'
        });
})();