(function () {
    'use strict';

    angular
        .module('app.components')
        .component('contactGroup', {
            bindings: {
                messages: '='
            },
            templateUrl: 'app/components/contact-group/contact-group.html',
            controller: 'ContactGroupController',
            controllerAs: 'vm'
        });
})();