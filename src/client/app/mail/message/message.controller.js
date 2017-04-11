(function () {
    'use strict';

    angular
        .module('mail.message')
        .controller('MessageController', MessageController);

    MessageController.$inject = ['mail', '$state'];
    /* @ngInject */
    function MessageController(mail, $state) {
        var vm = this;

        vm.message = {};

        activate();

        function activate() {
            // alert($state.params.id);
            getMessage();
        }

        function getMessage() {
            // console.log('get', message);
            mail.getById({id: $state.params.id}).then(function (response) {
                vm.message.model = response;

                console.log('message', vm.message.model);
            });
        }
    }
})();
