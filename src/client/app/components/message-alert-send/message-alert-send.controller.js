(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('MessageAlertSendController', MessageAlertSendController);

    MessageAlertSendController.$inject = ['$scope', '$timeout'];
    /* @ngInject */
    function MessageAlertSendController($scope, $timeout) {
        var vm = this;

        vm.message = '';

        vm.close = close;

        $scope.$on('notify:message', function (e, data) {
            vm.message = data.message;
            vm.folder = data.folder;
            vm.email = data.email;
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
            }, 800);
        }

        function close() {
            vm.isShow = false;
        }
    }
})();
