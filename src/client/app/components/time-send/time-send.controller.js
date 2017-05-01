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

        vm.dateOptions = {
            formatYear: 'yy',
            maxDate: new Date(2020, 5, 22),
            minDate: new Date(),
            startingDay: 1
        };

        vm.timeList = ['10:00', '11:00'];

        vm.isDateOpen = false;

        vm.close = close;

        $scope.$watch('vm.timeForm.model.time', function (data) {
            console.log('data', data);
            vm.sdate = data;
        });

        function close() {
            console.log('$uibTooltip', $uibTooltip());
            $uibTooltip.setTriggers({'openTrigger': 'closeTrigger'});
        }


    }
})();
