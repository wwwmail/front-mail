(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('ContactDraggableController', ContactDraggableController);

    ContactDraggableController.$inject = ['contact', 'Upload'];
    /* @ngInject */
    function ContactDraggableController(contact, Upload) {
        var vm = this;

        vm.uploadForm = {
            model: {}
        };

        vm.upload = upload;
        vm.close = close;

        ////

        function upload(form) {
            var upload = contact.uploadContacts({}, {contacts: vm.uploadForm.model.file});
            upload.then(function (response) {
                // close();
            });
        }
    }
})();
