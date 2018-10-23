(function () {
    'use strict';

    angular
        .module('app.components')
        .component('emailChange', {
            bindings: {
                onClose: '&',
                model: '='
            },
            templateUrl: 'app/components/email-change/email-change.html',
            controller: 'EmailChangeController',
            controllerAs: 'vm'
        });
})();