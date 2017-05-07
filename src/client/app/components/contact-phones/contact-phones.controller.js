(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('ContactPhonesController', ContactPhonesController);

    ContactPhonesController.$inject = [];
    /* @ngInject */
    function ContactPhonesController() {
        var vm = this;

        vm.phoneForm = {
            model: {}
        };

        vm.add = add;

        function add(form) {
            if (form.$invalid) return;
            vm.phones.push({value: vm.phoneForm.model.phone});
            vm.phoneForm.model.phone = '';
        }
    }
})();
