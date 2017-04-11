(function () {
    'use strict';

    angular
        .module('mail.inbox')
        .controller('InboxController', InboxController);

    InboxController.$inject = ['mail'];
    /* @ngInject */
    function InboxController(mail) {
        var vm = this;

        activate();

        function activate() {
            mail.get().then(function (response) {
                console.log('get response', response);
            });

            mail.getById({id: 1}).then(function (response) {
                console.log('getById response', response);
            });
        }
    }
})();
