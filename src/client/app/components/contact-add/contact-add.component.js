(function () {
    'use strict';

    angular
        .module('app.components')
        .component('contactAdd', {
            bindings: {
                onClose: '&',
                email: '=?'
            },
            templateUrl: 'app/components/contact-add/contact-add.html',
            controller: 'ContactAddController',
            controllerAs: 'vm'
        });
})();