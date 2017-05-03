(function () {
    'use strict';

    angular
        .module('app.components')
        .component('contactGroupCreate', {
            bindings: {
                onClose: '&'
            },
            templateUrl: 'app/components/contact-group-create/contact-group-create.html',
            controller: 'ContactGroupCreateController',
            controllerAs: 'vm'
        });
})();