(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('ContactRestoreController', ContactRestoreController);

    ContactRestoreController.$inject = ['contact'];
    /* @ngInject */
    function ContactRestoreController(contact) {
        var vm = this;

        vm.restore = {
            checked: [],
            items: []
        };

        vm.close = close;
        vm.restoreArchive = restoreArchive;

        ////

        activate();

        function activate() {
            get();
        }

        function get() {
            contact.getArchive().then(function (response) {
                vm.restore.items = response.data;
            });
        }
        
        function restoreArchive() {
            var dates = [];

            _.forEach(vm.restore.checked, function (restore) {
                dates.push(restore.date);
            });

            contact.restoreArchive({}, {dates: dates}).then(function (response) {
                vm.restore.items = response.data;
            });
        }

        function close() {
            vm.onClose();
        }
    }
})();
