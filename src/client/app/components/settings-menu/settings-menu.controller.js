(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('SettingsMenuController', SettingsMenuController);

    SettingsMenuController.$inject = [];
    /* @ngInject */
    function SettingsMenuController() {
        var vm = this;

        vm.close = close;

        function close() {
            vm.onClose();
        }
    }
})();
