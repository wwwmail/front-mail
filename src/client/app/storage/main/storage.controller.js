(function () {
    'use strict';

    angular
        .module('storage.main')
        .controller('StorageController', StorageController);

    StorageController.$inject = ['$auth', 'tariff', 'tariffResult'];
    /* @ngInject */
    function StorageController($auth, tariff, tariffResult) {
        var vm = this;

        vm.payType = 'sms';

        vm.smsForm = {};

        vm.tariff = {
            selected: null,
            items: []
        };

        vm.quota = {
            result: {}
        };

        vm.createQuota = createQuota;

        activate();

        function activate() {
            vm.user = $auth.user;

            console.log('vm.user', vm.user);
            // createQuota();

            tariffResult.$promise.then(function (response) {
                vm.tariff.items = response.data;
            });
        }
        
        function getTariff() {
            tariff.getTariff().then(function (response) {
                vm.tariff.items = response.data;
            });
        }
        
        function createQuota(selected) {
            tariff.createQuota({}, {tariff_id: selected.id}).then(function (response) {
                vm.quota.result = response.data;
            });
        }
    }
})();
