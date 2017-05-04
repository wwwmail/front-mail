(function () {
    'use strict';

    angular
        .module('app.components')
        .component('contactHeader', {
            bindings: {
                messages: '='
            },
            templateUrl: 'app/components/contact-header/contact-header.html',
            controller: 'ContactHeaderController',
            controllerAs: 'vm'
        });
})();