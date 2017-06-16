(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('ContactGroupAddController', ContactGroupAddController);

    ContactGroupAddController.$inject = ['$scope', 'contactGroup', 'contact', '$translatePartialLoader', '$translate'];
    /* @ngInject */
    function ContactGroupAddController($scope, contactGroup, contact, $translatePartialLoader, $translate) {
        var vm = this;
        $translatePartialLoader.addPart('components');
        $translate.refresh();

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
        vm.checkedAllContacts = checkedAllContacts;
        vm.isChecked = isChecked;

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
                console.log('vm.contactGroup', vm.contactGroup);
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

                contact.sync();

                close();
            });
        }

        function removeChecked(contact) {
            _.remove(vm.contacts.checked, function (item) {
                return item === contact;
            })
        }

        function isChecked(contact) {
            return _.forEach(vm.contacts.checked, function (item) {
                if (contact === item) {

                    return true;
                }
            })
        }

        function close() {
            vm.onClose();
        }
    }
})();
