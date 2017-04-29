(function () {
    'use strict';

    angular
        .module('app.components')
        .component('tagCreate', {
            bindings: {
                onClose: '&'
            },
            templateUrl: 'app/components/tag-create/tag-create.html',
            controller: 'TagCreateController',
            controllerAs: 'vm'
        });
})();