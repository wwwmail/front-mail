(function () {
    'use strict';

    angular
        .module('settings.accounts')
        .controller('AccountsController', AccountsController);

    AccountsController.$inject = ['connection'];
    /* @ngInject */
    function AccountsController(connection) {
        var vm = this;

        vm.accountForm = {
            model: {
                enable: 0
            }
        };

        vm.accounts = {
            items: []
        };

        vm.create = create;
        vm.destroy = destroy;
        vm.enableTrigger = enableTrigger;

        activate();

        function activate() {
            get();
        }

        function get() {
            connection.get()
                .then(function (response) {
                    vm.accounts.items = response.data;
                });
        }

        function create() {
            connection.create({}, vm.accountForm.model)
                .then(function (response) {
                    vm.accounts.items.push(response.data);

                    vm.accountForm = {
                        model: {
                            enabled: false
                        }
                    };

                    vm.error = {};

                }, function (response) {
                    vm.error = response.data.data;
                    console.log('response', response);
                });
        }

        function enableTrigger(account) {
            console.log('account', account);
            connection.update({id: account.id}, {enable: account.enable})
                .then(function (response) {
                    // account.enable = !account.enable;
                });
        }

        function destroy(account) {
            connection.destroy({id: account.id})
                .then(function (response) {
                    _.remove(vm.accounts.items, function (item) {
                        return account.id === item.id;
                    });
                });
        }
    }
})();
