(function () {
    'use strict';

    angular
        .module('app.components')
        .component('contactToAdd', {
            bindings: {
                onClose: '&',
                onCancel: '&',
                addresses: '=?'
            },
            templateUrl: 'app/components/contact-to-add/contact-to-add.html',
            controller: 'ContactToAddController',
            controllerAs: 'vm'
        });
})();