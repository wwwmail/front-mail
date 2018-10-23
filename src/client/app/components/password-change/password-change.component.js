(function () {
    'use strict';

    angular
        .module('app.components')
        .component('passwordChange', {
            bindings: {
                onClose: '&',
                model: '='
            },
            templateUrl: 'app/components/password-change/password-change.html',
            controller: 'PasswordChangeController',
            controllerAs: 'vm'
        });
})();