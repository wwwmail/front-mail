(function () {
    'use strict';

    angular
        .module('contacts.main')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'contacts.main',
                config: {
                    url: '/main?groupId',
                    templateUrl: 'app/contacts/main/contacts.html',
                    controller: 'ContactsMainController',
                    controllerAs: 'vm',
                    title: 'Contacts'
                }
            }
        ];
    }
})();
