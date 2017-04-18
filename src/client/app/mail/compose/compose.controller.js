(function () {
    'use strict';

    angular
        .module('mail.compose')
        .controller('ComposeController', ComposeController);

    ComposeController.$inject = ['mail'];
    /* @ngInject */
    function ComposeController(mail) {
        var vm = this;

        vm.sendForm = {
            model: {}
        };

        vm.send = send;

        function send(form) {
            if (form.$invalid) return;
            mail.post({}, vm.sendForm.model).then(function (response) {
                console.log('response', response);
            });
        }
    }
})();
