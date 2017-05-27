(function () {
    'use strict';

    angular
        .module('app.components')
        .component('testDraggable', {
            bindings: {
                tagId: '='
            },
            templateUrl: 'app/components/test-draggable/test-draggable.html',
            controller: 'TestDraggableController',
            controllerAs: 'vm'
        });
})();