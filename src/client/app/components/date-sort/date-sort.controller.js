(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('DateSortController', DateSortController);

    DateSortController.$inject = ['$scope', '$state', 'mail'];
    /* @ngInject */
    function DateSortController($scope, $state, mail) {
        var vm = this;

        vm.monthList = [];

        vm.selectDate = selectDate;
        vm.selectDefault = selectDefault;

        ////

        activate();

        function activate() {
            getMonthList();
            getMessagesCounters();
        }

        function getMessagesCounters() {
            mail.getMessagesCounters({mbox: $state.params.mbox}).then(function (response) {
                // console.log('mail', Object.keys(response.data.by_years[moment().year()])[0]);
                vm.fromMonth = Object.keys(response.data.by_years[moment().year()])[0] - 1;
                getMonthList();
            });
        }

        function getMonthList() {
            vm.currentMonth = moment().month();
            _.forEach(moment.months(), function (month, i) {
                if (i >= vm.fromMonth && i <= vm.currentMonth) {
                    console.log(vm.fromMonth, vm.currentMonth);
                    console.log('month', month);
                    vm.monthList.push({month: month, monthNumber: i});
                }
            });
        }

        function selectDate(i) {
            var selectedMonth = moment().month(i);
            vm.from = selectedMonth.startOf('month').unix();
            vm.to = selectedMonth.endOf('month').unix();
        }

        function selectDefault() {
            var startMonth = moment().month(0);
            var endMonth = moment().month(vm.currentMonth);
            vm.from = startMonth.startOf('month').unix();
            vm.to = endMonth.endOf('month').unix();
        }
    }
})();
