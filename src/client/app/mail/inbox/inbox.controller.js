(function () {
    'use strict';

    angular
        .module('mail.inbox')
        .controller('InboxController', InboxController);

    InboxController.$inject = ['$rootScope', '$state', 'mail', 'mailBox'];
    /* @ngInject */
    function InboxController($rootScope, $state, mail, mailBox) {
        var vm = this;

        vm.messages = {
            params: {
                'per-page': 20,
                'len': 100
            },
            checked: []
        };

        vm.folders = {};

        $rootScope.$on('mail:sync', function () {
            get();
            getMailBox();
        });

        activate();

        function activate() {

            if ($state.params.filter) {
                vm.messages.params.filter = $state.params.filter;
            }

            if ($state.params.mbox) {
                vm.messages.params.mbox = $state.params.mbox;
            }

            get();
            getMailBox();
        }

        function get() {
            mail.get(vm.messages.params).then(function (response) {
                vm.messages = _.assign(vm.messages, response.data);
                // console.log(vm.messages);
                _.forEach(vm.messages.items, function (message) {
                    message.body = message.body ? String(message.body).replace(/<[^>]+>/gm, '') : '';
                });
            });
        }

        // function getMessage(message) {
        //     console.log('get', message);
        //     mail.getById({
        //         id: message.number,
        //         mbox: message.mbox,
        //         part: 'text'
        //     }).then(function (response) {
        //         message.message = response;
        //         console.log('message', response);
        //     });
        // }

        function getMailBox() {
            mailBox.get().then(function (response) {
                vm.folders = _.assign(vm.folders, response.data);
            });
        }
    }
})();
