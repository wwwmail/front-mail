(function () {
    'use strict';

    angular
        .module('app.components')
        .component('signCreate', {
            bindings: {
                onClose: '&',
                onCancel: '&'
            },
            templateUrl: 'app/components/sign-create/sign-create.html',
            controller: 'SignCreateController',
            controllerAs: 'vm'
        });
})();