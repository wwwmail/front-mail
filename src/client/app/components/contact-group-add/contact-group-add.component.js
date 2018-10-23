(function () {
    'use strict';

    angular
        .module('app.components')
        .component('contactGroupAdd', {
            bindings: {
                onClose: '&'
            },
            templateUrl: 'app/components/contact-group-add/contact-group-add.html',
            controller: 'ContactGroupAddController',
            controllerAs: 'vm'
        });
})();