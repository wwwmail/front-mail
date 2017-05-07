(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('ContactImportFileController', ContactImportFileController);

    ContactImportFileController.$inject = ['Upload'];
    /* @ngInject */
    function ContactImportFileController(Upload) {
        var vm = this;

        vm.uploadForm = {
            model: {}
        };

        vm.upload = upload;
        vm.close = close;

        ////

        function upload(form) {
            console.log(form);
            var upload = Upload.upload({
                url: 'http://apimail.devogic.com/contact/import',
                data: {contacts: vm.uploadForm.model.file}
            });

            upload.then(function (response) {
                close();
            });
        }

        function close() {
            vm.onClose();
        }
    }
})();
