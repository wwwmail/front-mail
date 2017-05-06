(function () {
    'use strict';

    angular
        .module('storage.main')
        .controller('StorageController', StorageController);

    StorageController.$inject = [];
    /* @ngInject */
    function StorageController() {
        var vm = this;
    }
})();
