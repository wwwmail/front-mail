(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('ContactAddController', ContactAddController);

    ContactAddController.$inject = ['contact', 'list'];
    /* @ngInject */
    function ContactAddController(contact, list) {
        var vm = this;

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
                var date = moment(vm.contactForm.model.bDay.name + ' ' + vm.contactForm.model.bMonth + ' ' + vm.contactForm.model.bYear.name);
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
