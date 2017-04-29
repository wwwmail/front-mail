(function () {
    'use strict';

    angular
        .module('app.components')
        .component('tagEdit', {
            bindings: {
                onClose: '&'
            },
            templateUrl: 'app/components/tag-edit/tag-edit.html',
            controller: 'TagEditController',
            controllerAs: 'vm'
        });
})();