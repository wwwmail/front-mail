(function () {
    'use strict';

    angular
        .module('contacts.main')
        .controller('ContactsMainController', ContactsMainController);

    ContactsMainController.$inject = ['$state', '$uibModal', 'contact'];
    /* @ngInject */
    function ContactsMainController($state, $uibModal, contact) {
        var vm = this;

        vm.contacts = {
            params: {},
            items: []
        };

        vm.openContactViewPopup = openContactViewPopup;

        activate();

        function activate() {
            if ($state.params.groupId) {
                vm.contacts.params.groupId = $state.params.groupId;
            }

            get();
        }

        function get() {
            contact.get(vm.contacts.params, {}).then(function(response) {
                vm.contacts.items = response.data;
            });
        }

        function openContactViewPopup() {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'app/components/contact-view/contact-view-popup.html',
                controller: function ($scope, $uibModalInstance) {
                    $scope.cancel = cancel;

                    function cancel() {
                        $uibModalInstance.dismiss('cancel');
                    }
                },
                size: 'sm',
                windowClass: 'popup popup--contact-add'
            });
        }
    }
})();
