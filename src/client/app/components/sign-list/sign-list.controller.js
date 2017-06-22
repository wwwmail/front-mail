(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('SignListController', SignListController);

    SignListController.$inject = ['sign', '$auth', '$state', '$uibModal', 'mailBox', 'mail'];
    /* @ngInject */
    function SignListController(sign, $auth, $state, $uibModal, mailBox, mail) {
        var vm = this;

        vm.sign = {
            items: []
        };

        ////

        activate();

        function activate() {
            sign.get().then(function (response) {
                vm.sign.items = response.data;
            });
        }
    }
})();
