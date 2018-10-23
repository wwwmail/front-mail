(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('EmlPopupController', EmlPopupController);

    EmlPopupController.$inject = [];
    /* @ngInject */
    function EmlPopupController() {
        var vm = this;

        vm.close = close;
        vm.cancel = cancel;

        activate();

        ////

        function activate() {
            console.log('message', vm.message);
            vm.message.model = vm.message;
        }

        function close() {
            vm.onClose();
        }

        function cancel() {
            vm.onCancel();
        }
    }
})();
