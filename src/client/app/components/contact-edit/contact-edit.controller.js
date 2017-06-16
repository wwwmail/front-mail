(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('ContactEditController', ContactEditController);

    ContactEditController.$inject = ['contact', 'list', '$translatePartialLoader', '$translate'];
    /* @ngInject */
    function ContactEditController(contact, list, $translatePartialLoader, $translate) {
        var vm = this;
        $translatePartialLoader.addPart('components');
        $translate.refresh();

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

            // console.log('vm.contactForm.model', vm.contactForm.model);

            if (vm.contactForm.model.birthday) {
                parseDate();
            }
        }

        function update(form) {
            // if (form.$invalid) return;

            console.log('vm.contactForm', vm.contactForm.model, form);

            if (vm.contactForm.model.bDay && vm.contactForm.model.bMonth && vm.contactForm.model.bYear) {
                var date = moment(vm.contactForm.model.bDay.name + ' ' + vm.contactForm.model.bMonth + ' ' + vm.contactForm.model.bYear.name);
                vm.contactForm.model.birthday = date.format('YYYY-MM-DD');
            }

            contact.update({id: vm.contactForm.model.id}, vm.contactForm.model)
                .then(function (response) {

                });

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
