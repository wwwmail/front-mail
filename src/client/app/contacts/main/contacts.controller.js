(function () {
    'use strict';

    angular
        .module('contacts.main')
        .controller('ContactsMainController', ContactsMainController);

    ContactsMainController.$inject = ['$scope', '$state', '$uibModal', 'contact', 'contactGroup'];
    /* @ngInject */
    function ContactsMainController($scope, $state, $uibModal, contact, contactGroup) {
        var vm = this;

        vm.contacts = {
            params: {},
            items: [],
            checked: []
        };

        vm.contactGroup = {
            model: {}
        };

        $scope.$on('contact:create:success', function () {
            get();
        });

        $scope.$on('contact:update:success', function () {
            get();
        });

        ////

        activate();

        function activate() {
            if ($state.params.group_id) {
                vm.contacts.params.group_id = $state.params.group_id;

                getByGroup();
                getGroupById();
                return;
            }

            get();
        }

        function get() {
            contact.get(vm.contacts.params, {}).then(function(response) {
                vm.contacts.items = response.data;
            });
        }

        function getByGroup() {
            contact.getByGroup(vm.contacts.params, {}).then(function(response) {
                vm.contacts.items = response.data;
            });
        }

        function getGroupById() {
            contactGroup.getById({id: $state.params.group_id}).then(function (response) {
                vm.contactGroup.model = response.data;
                console.log('vm.contactGroup.model', vm.contactGroup.model);
            })
        }

    }
})();
