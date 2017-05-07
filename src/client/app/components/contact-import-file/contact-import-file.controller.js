(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('ContactImportFileController', ContactImportFileController);

    ContactImportFileController.$inject = ['Upload'];
    /* @ngInject */
    function ContactImportFileController(Upload) {
        var vm = this;

        vm.fileForm = {
            model: {}
        };

        vm.upload = upload;
        vm.close = close;

        ////

        function upload(form) {
            file.upload = Upload.upload({
                url: 'http://apimail.devogic.com/contact/import',
                data: {contacts: vm.fileForm.model.file}
            });
        }

        function close() {
            vm.onClose();
        }
    }
})();
