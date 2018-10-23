(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('EmailAddController', EmailAddController);

    EmailAddController.$inject = ['additionalMail', 'profile'];
    /* @ngInject */
    function EmailAddController(additionalMail, profile) {
        var vm = this;

        vm.emailForm = {
            model: {}
        };

        vm.changeEmail = changeEmail;
        vm.close = close;
        vm.cancel = cancel;

        ////

        activate();

        function activate() {
        }

        function changeEmail(form) {
            console.log('vm.emailForm', vm.emailForm.model, form);

            if (form.$invalid) return;

            additionalMail.post({}, {
                email: vm.emailForm.model.email
            }).then(function (response) {
                close({result: vm.emailForm.model.email});
            }, function (response) {
                vm.error = response.data.data.message;
            });
        }

        function close(data) {
            vm.onClose(data);
        }

        function cancel(data) {
            vm.onCancel(data);
        }
    }
})();
