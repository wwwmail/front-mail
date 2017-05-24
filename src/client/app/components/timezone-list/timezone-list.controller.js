(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('TimezoneListController', TimezoneListController);

    TimezoneListController.$inject = ['$state', 'profile'];
    /* @ngInject */
    function TimezoneListController($state, profile) {
        var vm = this;

        vm.timezoneList = [];

        vm.setTimezone = setTimezone;

        activate();
        
        function activate() {
            getTimezoneList();
        }

        function getTimezoneList() {
            vm.timezoneList = moment.tz.names();
        }
        
        function setTimezone(timezone) {
            moment.tz.setDefault(timezone);
            profile.put({}, {timezone: timezone});
        }
    }
})();
