(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('ContactGroupAddController', ContactGroupAddController);

    ContactGroupAddController.$inject = ['$scope', 'contactGroup', 'contact'];
    /* @ngInject */
    function ContactGroupAddController($scope, contactGroup, contact) {
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

        vm.create = create;
        vm.close = close;
        vm.removeChecked = removeChecked;

        ////

        activate();

        function activate() {
            getContacts();
            getContactGroups();
        }

        function getByGroup() {
            contact.getByGroup(vm.contacts.params, {}).then(function (response) {
                vm.contacts.items = response.data;
            });
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
            });
        }

        function create(form) {
            console.log('vm.contactGroupForm', vm.contactGroupForm, form);

            if (form.$invalid) return;

            contactGroup.create({}, vm.contactGroupForm.model).then(function (response) {
                console.log('response', response);
                if (vm.contacts.checked.length) {
                    addContacts(response.data);
                    return;
                }

                close();
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
                $scope.$broadcast('contact:sync');
                close();
            });
        }

        function removeChecked(contact) {
            _.remove(vm.contacts.checked, function (item) {
                return item === contact;
            })
        }

        function close() {
            vm.onClose();
        }
    }
})();
