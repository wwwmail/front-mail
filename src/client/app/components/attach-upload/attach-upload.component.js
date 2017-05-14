(function () {
    'use strict';

    angular
        .module('app.components')
        .component('attachUpload', {
            bindings: {
                attachmentsData: '=',
                message: '='
            },
            templateUrl: 'app/components/attach-upload/attach-upload.html',
            controller: 'AttachUploadController',
            controllerAs: 'vm'
        });
})();