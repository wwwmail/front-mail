(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('TimeSendController', TimeSendController);

    TimeSendController.$inject = ['$scope', '$translate'];
    /* @ngInject */
    function TimeSendController($scope, $translate) {
        var vm = this;

        vm.isInfoOpen = false;

        vm.timeForm = {
            model: {}
        };

        vm.timeList = [];

        vm.isDateOpen = false;

        vm.close = close;
        vm.getFormattedDate = getFormattedDate;
        vm.endDateBeforeRender = endDateBeforeRender;

        // $scope.$watch

        $scope.$watch('vm.isChecked', function (data) {
            if (vm.isChecked) {
                getTimestampAllDate();
                return;
            }
        });

        $scope.$watch('vm.timeForm.model.time', function (data) {
            if (vm.isChecked) {
                getTimestampAllDate();
            }
        });

        $scope.$watch('vm.timeForm.model.date.value', function (data) {
            if (vm.isChecked) {
                getTimestampAllDate();
                getTimeList();
            }
        });

        ////

        activate();

        function activate() {
            $translate('TODAY').then(function (translation) {
                if (vm.sdate) {
                    vm.isChecked = true;
                }

                vm.timeForm.model.date = {
                    value: moment().toDate(),
                    name: moment().format('[' + translation + ']')
                };

                getTimeList();
            });
        }

        function getTimestampAllDate() {
            if (vm.timeForm.model.time) {
                var parseTime = vm.timeForm.model.time.split(':');

                var date = moment(vm.timeForm.model.date.value).set({
                    hour: parseTime[0],
                    minute: parseTime[1],
                    second: 0,
                    millisecond: 0
                });

                // console.log('moment', date, date.unix());

                vm.timeForm.model.date.name = date.calendar();

                vm.sdate = date.unix();

                // console.log('vm.timeForm.model.time', parseTime);
            }
        }

        function getFormattedDate(date) {
            return moment(date).calendar();
        }

        function getTimeList() {
            vm.timeList = [];
            var isToday = moment(vm.timeForm.model.date.value).isSame(moment().startOf('day'), 'd');

            if (isToday) {
                var nowHours = new Date().getHours() + 1;
            }

            for (var i = (nowHours || 0); i < 24; i++) {
                if (i < 10) {
                    vm.timeList.push('0' + i + ':00');
                } else {
                    vm.timeList.push(i + ':00');
                }
            }

            vm.timeForm.model.time = vm.timeList[0];
        }

        function endDateBeforeRender($view, $dates) {
            var activeDate = moment().subtract(1, 'days');
            $dates.filter(function (date) {
                return date.localDateValue() < activeDate.valueOf()
            }).forEach(function (date) {
                date.selectable = false;
            })
        }

        function close() {
            vm.onClose();
        }
    }
})();
