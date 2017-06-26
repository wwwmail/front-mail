(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('ContactAddController', ContactAddController);

    ContactAddController.$inject = ['contact', 'list', '$translatePartialLoader', '$translate'];
    /* @ngInject */
    function ContactAddController(contact, list, $translatePartialLoader, $translate) {
        var vm = this;

        $translatePartialLoader.addPart('components');
        $translate.refresh();

        vm.contactForm = {
            model: {}
        };

        vm.years = [];
        vm.months = [];
        vm.days = [];

        vm.create = create;
        vm.close = close;

        ////

        activate();

        function activate() {
            vm.months = list.getMonths();
            vm.days = list.getDays();
            vm.years = list.getYears();

            if (vm.email) {
                vm.contactForm.model.email = vm.email;
            }
        }

        function create(form) {
            if (form.$invalid) return;

            vm.contactForm.model.emails = [{
                "value": vm.contactForm.model.email
            }];

            vm.contactForm.model.phones = [{
                "value": vm.contactForm.model.phone
            }];

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

            contact.create({}, vm.contactForm.model).then(function (response) {
                vm.onClose();
            });
        }

        function close() {
            vm.onClose();
        }
    }
})();
