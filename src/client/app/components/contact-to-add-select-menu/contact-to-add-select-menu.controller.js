(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('ContactToAddSelectMenuController', ContactToAddSelectMenuController);

    ContactToAddSelectMenuController.$inject = ['$scope', '$uibModal'];
    /* @ngInject */
    function ContactToAddSelectMenuController($scope, $uibModal) {
        var vm = this;

        vm.remove = remove;
        vm.selectOnlyThis = selectOnlyThis;
        vm.openContactAddPopup = openContactAddPopup;
        vm.setEdit = setEdit;

        ////

        activate();

        function activate() {
            console.log('tag', vm.tag);
            console.log('vm.addresses', vm.addresses);
        }

        function remove() {
            vm.onRemove();
        }

        function selectOnlyThis() {
            vm.addresses = [vm.tag];
        }

        function openContactAddPopup() {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'app/components/contact-add/contact-add-popup.html',
                controller: function ($scope, $uibModalInstance, tag) {
                    $scope.cancel = cancel;

                    $scope.email = tag.first_name;

                    function cancel() {
                        $uibModalInstance.dismiss('cancel');
                    }
                },
                size: 'sm',
                windowClass: 'popup popup--contact-add',
                resolve: {
                    tag: function () {
                        return vm.tag
                    }
                }
            });
        }

        function setEdit(e) {
            vm.onEdit({result: e});
        }
    }
})();
