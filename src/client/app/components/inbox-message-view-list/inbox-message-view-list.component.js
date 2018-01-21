(function () {
    'use strict';

    angular
        .module('app.components')
        .component('inboxMessageViewList', {
            bindings: {
                messages: '='
            },
            templateUrl: 'app/components/inbox-message-view-list/inbox-message-view-list.html',
            controller: 'InboxMessageViewListController',
            controllerAs: 'vm'
        });
})();
