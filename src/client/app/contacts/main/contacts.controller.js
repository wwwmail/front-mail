(function () {
    'use strict';

    angular
        .module('contacts.main')
        .controller('ContactsMainController', ContactsMainController);

    ContactsMainController.$inject = ['$scope', '$state', '$uibModal', 'contact'];
    /* @ngInject */
    function ContactsMainController($scope, $state, $uibModal, contact) {
        var vm = this;

        vm.contacts = {
            params: {},
            items: [],
            checked: []
        };

        $scope.$on('contact:create:success', function () {
            get();
        });

        ////

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

    }
})();
