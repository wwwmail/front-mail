(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('ContactToAddController', ContactToAddController);

    ContactToAddController.$inject = ['$scope', 'contactGroup', 'contact'];
    /* @ngInject */
    function ContactToAddController($scope, contactGroup, contact) {
        var vm = this;

        vm.contactGroupForm = {
            model: {}
        };

        vm.contacts = {
            isLoading: true,
            params: {},
            items: [],
            checked: []
        };

        vm.contactGroup = {
            isLoading: true,
            params: {},
            items: [],
            checked: []
        };

        vm.searchForm = {
            isLoading: true,
            params: {},
            items: [],
            checked: []
        };

        vm.cancel = cancel;
        vm.checkedAllContacts = checkedAllContacts;
        vm.isChecked = isChecked;
        vm.add = add;

        ////

        activate();

        function activate() {
            getContacts();
            getContactGroups();
        }

        function checkedAllContacts() {
            if (vm.isAllChecked && vm.contacts.items.length) {
                vm.contacts.checked = angular.copy(vm.contacts.items);
                console.log('test', vm.contacts.items);
                console.log('vm.contacts.checked', vm.contacts.checked);
                return;
            }
            vm.contacts.checked = [];
        }

        function getContacts() {
            vm.contacts.isLoading = true;
            contact.get(vm.contacts.params, {}).then(function (response) {
                vm.contacts.isLoading = false;
                vm.contacts.items = response.data;
            });
        }

        function getContactGroups() {
            contactGroup.get().then(function (response) {
                vm.contactGroup.items = response.data;
                console.log('vm.contactGroup', vm.contactGroup);
            });
        }

        function add() {
            vm.onClose({result: vm.contacts.checked});
        }

        function isChecked(contact) {
            return _.forEach(vm.contacts.checked, function (item) {
                if (contact === item) {
                    return true;
                }
            })
        }

        function cancel() {
            vm.onCancel();
        }
    }
})();
