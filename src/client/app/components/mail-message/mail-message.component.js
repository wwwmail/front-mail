(function () {
    'use strict';

    angular
        .module('app.components')
        .component('mailMessage', {
            bindings: {
                message: '=',
                messages: '='
            },
            templateUrl: 'app/components/mail-message/mail-message.html',
            controller: 'MailMessageController',
            controllerAs: 'vm'
        });
})();
