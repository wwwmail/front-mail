(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('SignListController', SignListController);

    SignListController.$inject = ['$auth', 'sign', '$uibModal', 'mailBox', 'mail'];
    /* @ngInject */
    function SignListController($auth, sign, $uibModal, mailBox, mail) {
        var vm = this;

        vm.sign = {
            items: []
        };

        vm.select = select;
        vm.openCreateSignPopup = openCreateSignPopup;

        ////

        activate();

        function activate() {
            vm.sign.items = vm.signs;

            console.log('vm.sign.items', vm);
        }

        function select(item) {
            console.log('sign', item);
            vm.onSelect({result: item.sign});
            vm.onClose();
        }

        function openCreateSignPopup() {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'app/components/sign-create/sign-create-popup.html',
                controller: function ($scope, $uibModalInstance) {
                    $scope.close = close;
                    $scope.cancel = cancel;

                    // $scope.messages = messages;

                    function cancel() {
                        $uibModalInstance.dismiss('cancel');
                    }

                    function close(data) {
                        $uibModalInstance.close(data);
                    }
                },
                size: 'sm',
                windowClass: 'popup popup--sign-create'
            });

            modalInstance.result.then(function (response) {
                // console.log('result', response);

                select(response);

                getList();
            });
        }
        
        function getList() {
            sign.get().then(function (response) {
                console.log('result', response);
                vm.sign.items = response.data;
            });
        }
    }
})();
