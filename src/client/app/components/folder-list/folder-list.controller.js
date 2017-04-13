(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('FolderListController', FolderListController);

    FolderListController.$inject = ['$auth', '$state'];
    /* @ngInject */
    function FolderListController($auth, $state) {
        var vm = this;

        vm.folders = {};
    }
})();
