(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('ToFolderNameController', ToFolderNameController);

    ToFolderNameController.$inject = ['$scope', 'mailBox'];
    /* @ngInject */
    function ToFolderNameController($scope, mailBox) {
        var vm = this;

        vm.folders = {};

        vm.folderName = '';

        activate();

        function activate() {
            vm.folders = mailBox.getCacheList();
            getName();
        }

        function getName() {
            _.forEach(vm.folders.items, function (item) {
                if (item.name == vm.name) {
                    vm.folderName = item.caption;
                }
            });
        }
    }
})();
