(function () {
    'use strict';

    angular
        .module('app.components')
        .component('toFolderName', {
            bindings: {
                name: '='
            },
            templateUrl: 'app/components/to-folder-name/to-folder-name.html',
            controller: 'ToFolderNameController',
            controllerAs: 'vm'
        });
})();