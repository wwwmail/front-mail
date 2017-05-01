(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('PhoneChangeController', PhoneChangeController);

    PhoneChangeController.$inject = ['$timeout', 'profile'];
    /* @ngInject */
    function PhoneChangeController($timeout, profile) {
        var vm = this;

        vm.phoneForm = {
            model: {}
        };

        vm.changePhone = changePhone;
        vm.close = close;

        ////

        activate();

        function activate() {
        }

        function changePhone(form) {
            console.log('vm.phoneForm', vm.phoneForm.model, form);

            if (form.$invalid) return;

            profile.put({}, vm.phoneForm.model)
                .then(function (response) {
                    close();
                }, function(response) {
                    vm.error = response.data.data.message;
                });
        }

        function close() {
            vm.onClose();
        }
    }
})();
