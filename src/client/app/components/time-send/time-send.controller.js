(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('TimeSendController', TimeSendController);

    TimeSendController.$inject = ['$uibTooltip', '$scope'];
    /* @ngInject */
    function TimeSendController($uibTooltip, $scope) {
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

        $scope.$watch('vm.timeForm.model.time', function (data) {
            if (vm.isChecked) {
                getTimestampAllDate();
            }
        });

        $scope.$watch('vm.timeForm.model.date.value', function (data) {
            if (vm.isChecked) {
                getTimestampAllDate();
            }
        });

        ////

        activate();

        function activate() {
            getTimeList();

            vm.timeForm.model.date = {
                value: moment().toDate(),
                name: moment().format('[сегодня]')
            };
        }

        function getTimestampAllDate() {
            if (vm.timeForm.model.time) {
                var parseTime = vm.timeForm.model.time.split(':');
                var date = moment(vm.timeForm.model.date.value).set({hour: parseTime[0], minute: parseTime[1]});

                console.log('moment', date, date.unix());

                vm.timeForm.model.date.name = date.calendar();

                vm.sdate = date.unix();
            }
        }

        function getFormattedDate(date) {
            return moment(date).calendar();
        }

        function close() {
            console.log('$uibTooltip', $uibTooltip());
            $uibTooltip.setTriggers({'openTrigger': 'closeTrigger'});
        }

        function getTimeList() {
            for (var i = 0; i < 24; i++) {

                if (i < 10) {
                    vm.timeList.push('0' + i + ':00');
                } else {
                    vm.timeList.push(i + ':00');
                }
            }

            vm.timeForm.model.time = vm.timeList[0];
        }

        function endDateBeforeRender($view, $dates) {
            var activeDate = moment();
            $dates.filter(function (date) {
                return date.localDateValue() < activeDate.valueOf()
            }).forEach(function (date) {
                date.selectable = false;
            })
        }
    }
})();
