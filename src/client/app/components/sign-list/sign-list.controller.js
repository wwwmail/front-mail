(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('SignListController', SignListController);

    SignListController.$inject = ['$auth', '$state', '$uibModal', 'mailBox', 'mail'];
    /* @ngInject */
    function SignListController($auth, $state, $uibModal, mailBox, mail) {
        var vm = this;

        vm.sign = {
            items: []
        };

        vm.select = select;

        ////

        activate();

        function activate() {
            vm.sign.items = vm.signs;

            console.log('vm.sign.items', vm);
        }
        
        function select(sign) {
            console.log('sign', sign);
            vm.onSelect({result: sign.sign});
            vm.onClose();
        }
    }
})();
