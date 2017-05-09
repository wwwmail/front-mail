(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('ToDateController', ToDateController);

    ToDateController.$inject = ['$scope'];
    /* @ngInject */
    function ToDateController($scope) {
        var vm = this;

        vm.getConvert = getConvert;

        activate();

        function activate() {
        }

        function getConvert() {
            return moment.unix(vm.date).calendar(null, {
                sameDay: 'hh:mm',
                nextDay: '[Tomorrow]',
                nextWeek: 'dddd',
                lastDay: 'D MMM',
                lastWeek: 'D MMM YY',
                sameElse: 'D MMM YY'
            });
        }
    }
})();
