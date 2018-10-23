(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('InfoSenderMenuController', InfoSenderMenuController);

    InfoSenderMenuController.$inject = ['$uibModal', '$state', 'tag', 'mail'];
    /* @ngInject */
    function InfoSenderMenuController($uibModal, $state, tag, mail) {
        var vm = this;

        vm.openComposePopup = openComposePopup;
        vm.close = close;

        function openComposePopup() {
            var params = {
                new: true,
                contactTo: (vm.to.name || vm.to.address || vm.to.fullAddress || vm.to)
            };

            var modalInstance = $uibModal.open({
                animation: false,
                templateUrl: 'app/components/compose-popup/compose-popup.html',
                controller: 'ComposePopupController',
                controllerAs: 'vm',
                resolve: {
                    params: function () {
                        return params;
                    }
                },
                size: 'lg',
                keyboard: false,
                windowClass: 'popup popup--compose popup--compose-minimize hide'
            });
        }

        function close() {
            vm.onClose();
        }
    }
})();
