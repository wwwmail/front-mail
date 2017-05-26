(function () {
    'use strict';

    angular
        .module('app.components')
        .component('contactDraggable', {
            bindings: {
                onClose: '&'
            },
            templateUrl: 'app/components/contact-draggable/contact-draggable.html',
            controller: 'ContactDraggableController',
            controllerAs: 'vm'
        });
})();