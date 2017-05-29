(function () {
    'use strict';

    angular
        .module('app.components')
        .component('emailAdd', {
            bindings: {
                onClose: '&',
                onCancel: '&',
                model: '='
            },
            templateUrl: 'app/components/email-add/email-add.html',
            controller: 'EmailAddController',
            controllerAs: 'vm'
        });
})();