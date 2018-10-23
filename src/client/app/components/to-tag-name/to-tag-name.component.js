(function () {
    'use strict';

    angular
        .module('app.components')
        .component('toTagName', {
            bindings: {
                tagId: '='
            },
            templateUrl: 'app/components/to-tag-name/to-tag-name.html',
            controller: 'ToTagNameController',
            controllerAs: 'vm'
        });
})();