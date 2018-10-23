(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('AlertPopupController', AlertPopupController);

    AlertPopupController.$inject = ['$uibModalInstance'];
    /* @ngInject */
    function AlertPopupController($uibModalInstance) {
        var vm = this;

        vm.close = close;

        activate();

        function activate() {
        }

        function close() {
            $uibModalInstance.dismiss('cancel');
        }
    }
})();
