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
                    url: '/inbox?mbox&filter&tag_id&compose&search&sort&sortReverse&search_part&search_tag_id&search_start&search_end&id&connection_id&viewStyle',
                    templateUrl: 'app/mail/inbox/inbox.html',
                    controller: 'InboxController',
                    controllerAs: 'vm',
                    title: null,
                    resolve: {
                        messages: function (mail, $stateParams) {
                            var messages = {
                                params: {
                                    'per-page': 20,
                                    'len': 200,
                                    'part': 'bodytext'
                                },
                                checked: []
                            };

                            if ($stateParams.filter) {
                                messages.params.filter = $stateParams.filter;
                            }

                            if ($stateParams.mbox) {
                                messages.params.mbox = $stateParams.mbox;
                            }

                            if ($stateParams.tag_id) {
                                messages.params.tag_id = $stateParams.tag_id;
                            }

                            if ($stateParams.sort) {
                                messages.params.sort = $stateParams.sort;
                            }

                            if ($stateParams.sortReverse) {
                                messages.params.sortReverse = $stateParams.sortReverse;
                            }

                            return mail.get(messages.params);
                        }
                    }
                }
            }
        ];
    }
})();
