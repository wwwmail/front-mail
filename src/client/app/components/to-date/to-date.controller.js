(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('ToDateController', ToDateController);

    ToDateController.$inject = ['$scope', '$translate'];
    /* @ngInject */
    function ToDateController($scope, $translate) {
        var vm = this;

        vm.convertDate = '';

        vm.calendarFormat = {
            sameDay: 'HH:mm',
            nextDay: '[завтра]',
            nextWeek: 'dddd HH:mm',
            lastDay: '[вчера] hh:mm',
            lastWeek: 'DD MMMM YYYY [в] hh:mm',
            sameElse: 'DD MMMM YYYY [в] hh:mm'
        };

        vm.calendarSmallFormat = {
            sameDay: 'HH:mm',
            nextDay: '[завтра] HH:mm',
            nextWeek: 'dddd HH:mm',
            lastDay: 'D MMM',
            lastWeek: 'D MMM',
            sameElse: 'D MMM'
        };

        vm.sendTimeFormat = {
            sameDay: '[сегодня в] HH:mm',
            nextDay: '[завтра] HH:mm',
            nextWeek: 'dddd HH:mm',
            lastDay: '[вчера] hh:mm',
            lastWeek: 'DD MMMM YYYY [в] hh:mm',
            sameElse: 'DD MMMM YYYY [в] hh:mm'
        };

        vm.getConvert = getConvert;

        $scope.$watch('vm.date', function (data, newData) {
            if (data) {
                console.log('data', data);
                var newDate = moment(data);
                vm.convertDate = getConvert(newDate);
            }
        });

        $scope.$watch('vm.dateUnix', function (data, newData) {
            if (data) {
                vm.convertDate = getUnixConvert(data);
            }
        });

        activate();

        function activate() {
            moment.locale($translate.use());
            // moment().format('LLL');  // 11 мая 2017 г., 22:14
        }

        function getConvert(date) {
            if (vm.isSmall) {
                return moment(date).calendar(null, vm.calendarSmallFormat);
            }
            return moment(date).calendar(null, vm.calendarFormat);
        }

        function getUnixConvert(date) {
            if (vm.isSmall) {
                return moment.unix(date).calendar(null, vm.calendarSmallFormat);
            }

            if (vm.isSendTime) {
                return moment.unix(date).calendar(null, vm.sendTimeFormat);
            }

            return moment.unix(date).calendar(null, vm.calendarFormat);
        }
    }
})();
