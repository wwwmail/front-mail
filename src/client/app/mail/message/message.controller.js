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

        vm.isSendTextOpen = false;
        vm.isFromOpen = false;

        vm.getDate = getDate;

        activate();

        function activate() {
            vm.$state = $state;
            getMessage();
        }

        function getMessage() {
            mail.getById({id: $state.params.id, mbox: $state.params.mbox, part: 'headnhtml'}).then(function (response) {
                vm.message.model = response.data;
                console.log('message', vm.message.model);
            });
        }

        function getDate(date) {
            var newDate = new Date(date);
            return moment(newDate).format("MMM Do YY");
        }
    }
})();
