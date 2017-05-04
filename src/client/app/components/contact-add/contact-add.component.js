(function () {
    'use strict';

    angular
        .module('app.components')
        .component('contactAdd', {
            bindings: {
                onClose: '&'
            },
            templateUrl: 'app/components/contact-add/contact-add.html',
            controller: 'ContactAddController',
            controllerAs: 'vm'
        });
})();