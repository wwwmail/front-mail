(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('EmailChangeController', EmailChangeController);

    EmailChangeController.$inject = ['$timeout', 'profile'];
    /* @ngInject */
    function EmailChangeController($timeout, profile) {
        var vm = this;

        vm.emailForm = {
            model: {}
        };

        vm.changeEmail = changeEmail;
        vm.close = close;

        ////

        activate();

        function activate() {
        }

        function changeEmail(form) {
            console.log('vm.emailForm', vm.emailForm.model, form);

            if (form.$invalid) return;

            profile.put({}, vm.emailForm.model)
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
