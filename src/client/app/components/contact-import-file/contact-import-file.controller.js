(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('ContactImportFileController', ContactImportFileController);

    ContactImportFileController.$inject = ['contact', 'Upload', '$translatePartialLoader', '$translate'];
    /* @ngInject */
    function ContactImportFileController(contact, Upload, $translatePartialLoader, $translate) {
        var vm = this;

        $translatePartialLoader.addPart('components');
        $translate.refresh();

        vm.uploadForm = {
            model: {}
        };

        vm.upload = upload;
        vm.close = close;

        ////

        function upload(form) {
            var upload = contact.uploadContacts({}, {contacts: vm.uploadForm.model.file});
            upload.then(function (response) {
                close();
            });
        }

        function close() {
            vm.onClose();
        }
    }
})();
