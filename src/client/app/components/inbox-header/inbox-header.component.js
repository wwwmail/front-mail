(function () {
    'use strict';

    angular
        .module('app.components')
        .component('inboxHeader', {
            bindings: {
                messages: '='
            },
            templateUrl: 'app/components/inbox-header/inbox-header.html',
            controller: 'InboxHeaderController',
            controllerAs: 'vm'
        });
})();