(function () {
    'use strict';

    angular
        .module('storage.main')
        .controller('StorageController', StorageController);

    StorageController.$inject = ['tariff'];
    /* @ngInject */
    function StorageController(tariff) {
        var vm = this;

        vm.tariff = {
            items: []
        };

        activate();

        function activate() {
            getTariff();
        }
        
        function getTariff() {
            tariff.getTariff().then(function (response) {
                vm.tariff.items = response.data;
            });
        }
    }
})();
