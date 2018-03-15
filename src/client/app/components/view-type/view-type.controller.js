(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('ViewTypeController', ViewTypeController);

    ViewTypeController.$inject = ['$stateParams', '$state', '$rootScope'];

    /* @ngInject */
    function ViewTypeController($stateParams, $state, $rootScope) {
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
        }

        function viewStyleColumn() {
            $rootScope.listViewStyle = true;

            vm.viewStyle = true;

            vm.isViewTypeOpen = false;
        }
    }
})();
