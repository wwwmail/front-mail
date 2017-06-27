(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('ContactEditController', ContactEditController);

    ContactEditController.$inject = ['contact', 'list'];
    /* @ngInject */
    function ContactEditController(contact, list) {
        var vm = this;

        vm.contactForm = {
            model: {}
        };

        vm.emailForm = {
            model: {}
        };

        vm.years = [];
        vm.months = [];
        vm.days = [];

        vm.update = update;
        vm.close = close;
        vm.cancel = cancel;

        ////

        activate();

        function activate() {
            vm.contactForm.model = angular.copy(vm.contact);

            vm.months = list.getMonths();
            vm.days = list.getDays();
            vm.years = list.getYears();

            if (vm.contactForm.model.birthday) {
                parseDate();
            }
        }

        function update(form) {
            var data = {};

            if (vm.contactForm.model.bDay && vm.contactForm.model.bMonth && vm.contactForm.model.bYear) {
                var monthNumber;
                _.forEach(vm.months, function (item, index) {
                    if (item === vm.contactForm.model.bMonth) {
                        monthNumber = index;
                    }
                });

                var date = moment().set({
                    month: monthNumber,
                    year: vm.contactForm.model.bYear.name,
                    date: vm.contactForm.model.bDay.name,
                    hour: 0,
                    minute: 0,
                    second: 0,
                    millisecond: 0
                });

                vm.contactForm.model.birthday = date.format('YYYY-MM-DD');
            }

            data.first_name = vm.contactForm.model.first_name;
            data.last_name = vm.contactForm.model.last_name;
            data.middle_name = vm.contactForm.model.middle_name;
            data.birthday = vm.contactForm.model.birthday;
            data.emails = vm.contactForm.model.emails;
            data.phones = vm.contactForm.model.phones;
            data.comment = vm.contactForm.model.comment;
            data.contact_id = vm.contactForm.model.id;

            contact.update({id: vm.contactForm.model.id}, data);

            vm.onClose({result: vm.contactForm.model});
        }

        function parseDate() {
            var date = vm.contactForm.model.birthday.split('-');
            vm.contactForm.model.bYear = {name: date[0]};
            vm.contactForm.model.bMonth = moment.months()[parseInt(date[1]) - 1];
            vm.contactForm.model.bDay = {name: date[2]};
        }

        function close() {
            vm.onClose();
        }

        function cancel() {
            vm.onCancel();
        }
    }
})();
