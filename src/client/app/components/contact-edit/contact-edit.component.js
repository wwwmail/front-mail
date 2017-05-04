(function () {
    'use strict';

    angular
        .module('app.components')
        .component('contactEdit', {
            bindings: {
                onClose: '&'
            },
            templateUrl: 'app/components/contact-edit/contact-edit.html',
            controller: 'ContactEditController',
            controllerAs: 'vm'
        });
})();