(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('AlertErrorController', AlertErrorController);

    AlertErrorController.$inject = ['$rootScope', '$scope', '$interval'];
    /* @ngInject */
    function AlertErrorController($rootScope, $scope, $interval) {
        var vm = this;

        vm.timer = {
            isShow: false,
            value: 5
        };

        // $scope.$watch('vm.isOpen', function (data, oldData) {
        //    if (data) {
        //        showTimer();
        //    }
        // });

        $rootScope.$on('error:50*', function () {
            if (!vm.isOpen) {
                open();
            }
        });

        vm.reload = reload;

        ////

        activate();

        function activate() {
        }

        function reload() {
            window.location.reload();
        }

        function open() {
            vm.isOpen = true;
            showTimer();
        }

        function showTimer() {
            var currentTime = moment().unix();
            var eventTime = moment().add(5, 'seconds').unix();
            var diffTime = eventTime - currentTime;
            var duration = moment.duration(diffTime * 1000, 'milliseconds');
            var interval = 1000;

            vm.timer.isShow = true;
            vm.timer.isRetry = false;

            var stop = $interval(function () {
                duration = moment.duration(duration - interval, 'milliseconds');
                vm.timer.value = duration.seconds();
                if (duration <= 0) {
                    $interval.cancel(stop);
                    vm.timer.isShow = false;
                    vm.timer.isRetry = true;
                    reload();
                }
            }, interval);
        }
    }
})();
