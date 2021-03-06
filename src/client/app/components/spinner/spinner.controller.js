(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('SpinnerController', SpinnerController);

    SpinnerController.$inject = ['$scope', '$timeout'];
    /* @ngInject */
    function SpinnerController($scope, $timeout) {
        var vm = this;

        vm.isOpen = false;

        $scope.$on('httpCallStarted', function () {
            $timeout(function () {
                if (vm.isGlobal) {
                    // vm.isOpen = true;
                }
            });
        });

        $scope.$on('httpCallStopped', function () {
            $timeout(function () {
                if (vm.isGlobal) {
                    // vm.isOpen = false;
                }
            });
        });

    }
})();
