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
            moment.tz.setDefault(timezone.value);
            profile.put({}, {timezone: timezone.value});

            close();
        }

        function close() {
            vm.onClose();
        }

        function formatted() {
            var timeZones = moment.tz.names();
            var offsetTmz = [];

            for (var i in timeZones) {
                var name = "(GMT" + moment.tz(timeZones[i]).format('Z') + ") " + timeZones[i];
                offsetTmz.push({
                    name: name,
                    value: timeZones[i]
                });
            }

            return offsetTmz;
        }
    }
})();
