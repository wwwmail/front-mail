(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('ComposePopupController', ComposePopupController);

    ComposePopupController.$inject = [];
    /* @ngInject */
    function ComposePopupController() {
        var vm = this;

        vm.close = close;

        function close() {
            vm.onClose();
        }
    }
})();
