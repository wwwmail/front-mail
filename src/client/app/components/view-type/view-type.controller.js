(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('ViewTypeController', ViewTypeController);

    ViewTypeController.$inject = ['$stateParams', '$state', '$rootScope', 'localStorageService'];

    /* @ngInject */
    function ViewTypeController($stateParams, $state, $rootScope, localStorageService) {
        var vm = this;

        vm.viewStyle = $rootScope.listViewStyle;


        vm.viewStyleList = viewStyleList;
        vm.viewStyleColumn = viewStyleColumn;


        activate();

        /////

        function activate() {
        }

        function viewStyleList() {
            $rootScope.listViewStyle = false;

            vm.viewStyle = false;

            vm.isViewTypeOpen = false;

            localStorageService.set('listViewStyle', false);
        }

        function viewStyleColumn() {
            $rootScope.listViewStyle = true;

            vm.viewStyle = true;

            vm.isViewTypeOpen = false;

            localStorageService.set('listViewStyle', true);
        }
    }
})();
