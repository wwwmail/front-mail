(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('ContactExportFileController', ContactExportFileController);

    ContactExportFileController.$inject = ['contact', 'FileSaver', '$translatePartialLoader', '$translate'];
    /* @ngInject */
    function ContactExportFileController(contact, FileSaver, $translatePartialLoader, $translate) {
        var vm = this;

        $translatePartialLoader.addPart('components');
        $translate.refresh();

        vm.uploadForm = {
            model: {}
        };

        vm.exportContacts = exportContacts;
        vm.close = close;

        ////

        function exportContacts(form) {
            contact.exportContacts();
        }

        function close() {
            vm.onClose();
        }
    }
})();
