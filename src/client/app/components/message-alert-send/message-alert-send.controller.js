(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('MessageAlertSendController', MessageAlertSendController);

    MessageAlertSendController.$inject = ['$scope', '$timeout'];
    /* @ngInject */
    function MessageAlertSendController($scope, $timeout) {
        var vm = this;

        vm.close = close;

        $scope.$on('mail:send:success', function () {
            show();
        });

        ////

        activate();

        function activate() {
        }

        function show() {
            vm.isShow = true;

            $timeout(function() {
                vm.isShow = false;
            }, 3000);
        }

        function close() {
            vm.isShow = false;
        }
    }
})();
