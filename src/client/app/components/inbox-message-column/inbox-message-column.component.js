(function () {
    'use strict';

    angular
        .module('app.components')
        .component('inboxMessageColumn', {
            bindings: {
                message: '=',
                messages: '='
            },
            templateUrl: 'app/components/inbox-message-column/inbox-message-column.html',
            controller: 'InboxMessageColumnController',
            controllerAs: 'vm'
        });
})();
