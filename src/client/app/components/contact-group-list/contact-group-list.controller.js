(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('ContactGroupListController', ContactGroupListController);

    ContactGroupListController.$inject = ['$scope', '$state', '$uibModal', 'contactGroup', 'contact'];
    /* @ngInject */
    function ContactGroupListController($scope, $state, $uibModal, contactGroup, contact) {
        var vm = this;

        vm.contactGroup = {};

        vm.openGroupAddPopup = openGroupAddPopup;
        vm.addContacts = addContacts;


        // $scope.$on('mailBox:update:success', function () {
        //     getMailBox();
        // });
        //
        // $scope.$on('mailBox:create:success', function () {
        //     getMailBox();
        // });
        //
        // $scope.$on('mailBox:destroy:success', function () {
        //     getMailBox();
        // });

        /////

        activate();

        function activate() {
            getContactGroup();
        }

        function getContactGroup() {
            contactGroup.get().then(function (response) {
                vm.contactGroup.items = response.data;
            });
        }

        function addContacts(group) {
            var ids = [];

            _.forEach(vm.contacts.checked, function (contact) {
                ids.push(contact.id);
            });

            contactGroup.addContacts({}, {
                ids: ids,
                id: group.id
            }).then(function () {
                vm.contacts.checked = [];
            });
        }

        function openGroupAddPopup() {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'app/components/contact-group-add/contact-group-add-popup.html',
                controller: function ($scope, $uibModalInstance) {
                    $scope.cancel = cancel;

                    function cancel() {
                        $uibModalInstance.dismiss('cancel');
                    }
                },
                size: 'sm',
                windowClass: 'popup popup--contact-group-add'
            });
        }
    }
})();
