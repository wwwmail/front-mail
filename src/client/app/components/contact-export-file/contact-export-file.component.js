(function () {
    'use strict';

    angular
        .module('app.components')
        .component('contactExportFile', {
            bindings: {
                onClose: '&'
            },
            templateUrl: 'app/components/contact-export-file/contact-export-file.html',
            controller: 'ContactExportFileController',
            controllerAs: 'vm'
        });
})();