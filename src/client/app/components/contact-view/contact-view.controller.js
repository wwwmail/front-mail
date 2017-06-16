(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('ContactViewController', ContactViewController);

    ContactViewController.$inject = ['$scope', '$uibModal', '$translatePartialLoader', '$translate'];
    /* @ngInject */
    function ContactViewController($scope, $uibModal, $translatePartialLoader, $translate) {
        var vm = this;

        $translatePartialLoader.addPart('components');
        $translate.refresh();

        vm.close = close;
        vm.openContactEditPopup = openContactEditPopup;
        vm.getDate = getDate;

        ////

        activate();

        function activate() {
        }

        function close() {
            vm.onClose();
        }

        function openContactEditPopup() {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'app/components/contact-edit/contact-edit-popup.html',
                controller: function ($scope, $uibModalInstance, model) {
                    $scope.contact = model;
                    $scope.result = {};

                    $scope.cancel = cancel;
                    $scope.close = close;

                    ////

                    function cancel() {
                        $uibModalInstance.dismiss('cancel');
                    }
                    
                    function close(result) {
                        $uibModalInstance.close(result);
                    }
                },
                resolve: {
                    model: function () {
                        return vm.contact;
                    }
                },
                size: 'sm',
                windowClass: 'popup popup--contact-add'
            });

            modalInstance.result.then(function (response) {
                vm.contact = response;
            });
        }

        function getDate(date) {
            return moment(date).format('DD MMMM YYYY');
        }
    }
})();
