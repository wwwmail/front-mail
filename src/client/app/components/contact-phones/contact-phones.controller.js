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
        vm.remove = remove;

        function add(form, keyCode) {
            if (form.$invalid || keyCode !== 13) return;
            vm.phones.push({value: vm.phoneForm.model.phone});
            vm.phoneForm.model.phone = '';
        }

        function remove(item) {
            _.remove(vm.phones, function (phone) {
                return phone === item;
            });
        }
    }
})();
