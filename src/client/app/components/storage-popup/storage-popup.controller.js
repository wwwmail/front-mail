(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('StoragePopupController', StoragePopupController);

    StoragePopupController.$inject = ['$auth', '$uibModalInstance', 'tariff', 'tariffResult', 'profile'];
    /* @ngInject */
    function StoragePopupController($auth, $uibModalInstance, tariff, tariffResult, profile) {
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
        vm.close = close;
        vm.isNominalValue = isNominalValue;
        vm.isQuotaFull = isQuotaFull;

        activate();

        function activate() {
            vm.user = $auth.user;
            vm.Math = window.Math;

            // vm.user.profile.quota = 2048;
            // vm.user.profile.freeQuota = 2008;
            // vm.user.profile.usedQuota = 2047;
            // console.log('vm.user', vm.user);

            tariffResult.$promise.then(function (response) {
                vm.tariff.items = response.data;
                vm.tariff.selected = vm.tariff.items[1];
                createQuota(vm.tariff.selected);
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

        function close() {
            $uibModalInstance.dismiss('cancel');
        }

        function isNominalValue(val) {
            var isNominal = false;
            if (!((val) % (vm.Math.ceil(val)))) {
                isNominal = true;
            }
            console.log('isNominalValue', val, vm.Math.ceil(val), !((val) % (vm.Math.ceil(val))));
            return isNominal;
        }

        function isQuotaFull() {
            return profile.isQuotaFull();
        }
    }
})();
