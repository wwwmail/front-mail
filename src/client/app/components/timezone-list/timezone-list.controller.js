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
            vm.timezoneList = formatted();
        }

        function setTimezone(timezone) {
            moment.tz.setDefault(timezone);
            profile.put({}, {timezone: timezone});

            close();
        }

        function close() {
            vm.onClose();
        }

        function formatted() {
            var timeZones = moment.tz.names();
            var offsetTmz = [];

            for (var i in timeZones) {
                offsetTmz.push(timeZones[i] + " (GMT" + moment.tz(timeZones[i]).format('Z') + ")");
            }

            return offsetTmz;
        }
    }
})();
