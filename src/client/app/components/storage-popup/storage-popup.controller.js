(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('StoragePopupController', StoragePopupController);

    StoragePopupController.$inject = ['$auth', '$uibModalInstance', 'tariff', 'tariffResult', 'profile'];
    /* @ngInject */
    function StoragePopupController($auth, $uibModalInstance, tariff, tariffResult, profile) {
        var vm = this;

        vm.payType = 'paypal';

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
        vm.goToPay = goToPay;


        activate();

        ////

        function activate() {
            vm.user = $auth.user;
            vm.Math = window.Math;

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
            return isNominal;
        }

        function isQuotaFull() {
            return profile.isQuotaFull();
        }

        function goToPay(url) {
            document.location.href = url;
        }
    }
})();
