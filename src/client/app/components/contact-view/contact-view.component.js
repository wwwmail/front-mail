(function () {
    'use strict';

    angular
        .module('app.components')
        .component('contactView', {
            bindings: {
                onClose: '&'
            },
            templateUrl: 'app/components/contact-view/contact-view.html',
            controller: 'ContactViewController',
            controllerAs: 'vm'
        });
})();