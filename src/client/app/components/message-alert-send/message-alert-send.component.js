(function () {
    'use strict';

    angular
        .module('app.components')
        .component('messageAlertSend', {
            bindings: {
            },
            templateUrl: 'app/components/message-alert-send/message-alert-send.html',
            controller: 'MessageAlertSendController',
            controllerAs: 'vm'
        });
})();