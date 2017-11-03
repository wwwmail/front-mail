(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('ConfirmReadingController', ConfirmReadingController);

    ConfirmReadingController.$inject = ['mail'];
    /* @ngInject */
    function ConfirmReadingController(mail) {
        var vm = this;

        vm.confirmForm = {
            model: {}
        };

        vm.unConfirm = unConfirm;
        vm.confirm = confirm;
        vm.cancel = cancel;
        vm.close = close;

        activate();

        ////

        function activate() {
            vm.confirmForm.model.connection_id = vm.message.connection_id;
            vm.confirmForm.model.connection_id = vm.message.connection_id;
            vm.confirmForm.model.number = vm.message.number;
        }

        function cancel() {
            vm.onCancel();
        }

        function close() {
            vm.onClose();
        }

        function confirm() {
            vm.confirmForm.model.allow = true;
            mail.confirmReading({}, vm.confirmForm.model).then(function (response) {
                close();
            });
        }

        function unConfirm() {
            vm.confirmForm.model.allow = false;
            mail.confirmReading({}, vm.confirmForm.model).then(function (response) {
                close();
            });
        }
    }
})();
