(function () {
    'use strict';

    angular
        .module('mail.inbox')
        .controller('InboxController', InboxController);

    InboxController.$inject = ['mail'];
    /* @ngInject */
    function InboxController(mail) {
        var vm = this;

        vm.messages = {};

        activate();

        function activate() {
            mail.get().then(function (response) {
                vm.messages.data = response;

                _.forEach(vm.messages.data, function (message) {
                    getMessage(message);
                });

            });
        }

        function getMessage(message) {
            console.log('get', message);
            mail.getById({id: message.number}).then(function (response) {
                message.message = response;

                console.log('message', message);
            });
        }

    }
})();
