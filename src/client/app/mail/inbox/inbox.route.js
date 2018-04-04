(function () {
    'use strict';

    angular
        .module('mail.inbox')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'mail.inbox',
                config: {
                    url: '/inbox?mbox&filter&tag_id&compose&search&sort&sortReverse&search_part&search_tag_id&search_start&search_end&id&connection_id&viewStyle&reload&smbox',
                    templateUrl: 'app/mail/inbox/inbox.html',
                    controller: 'InboxController',
                    controllerAs: 'vm'
                }
            }
        ];
    }
})();
