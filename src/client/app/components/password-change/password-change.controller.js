(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('PasswordChangeController', PasswordChangeController);

    PasswordChangeController.$inject = ['$timeout', 'profile'];
    /* @ngInject */
    function PasswordChangeController($timeout, profile) {
        var vm = this;

        vm.passwordForm = {
            model: {}
        };

        vm.changePassword = changePassword;
        vm.close = close;

        ////

        activate();

        function activate() {
        }

        function changePassword(form) {
            console.log('vm.passwordForm', vm.passwordForm.model, form);

            if (form.$invalid) return;

            profile.changePassword({}, vm.passwordForm.model)
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
