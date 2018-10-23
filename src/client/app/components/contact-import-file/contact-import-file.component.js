(function () {
    'use strict';

    angular
        .module('app.components')
        .component('contactImportFile', {
            bindings: {
                onClose: '&'
            },
            templateUrl: 'app/components/contact-import-file/contact-import-file.html',
            controller: 'ContactImportFileController',
            controllerAs: 'vm'
        });
})();