(function () {
    'use strict';

    angular
        .module('app.components')
        .component('attachButtonUpload', {
            bindings: {
                attachments: '=',
                message: '='
            },
            templateUrl: 'app/components/attach-button-upload/attach-button-upload.html',
            controller: 'AttachButtonUploadController',
            controllerAs: 'vm'
        });
})();