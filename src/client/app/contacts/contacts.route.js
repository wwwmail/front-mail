(function () {
    'use strict';

    angular
        .module('contacts')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'contacts',
                config: {
                    url: '/contacts?group_id',
                    templateUrl: 'app/contacts/contacts.html',
                    controller: 'ContactsController',
                    controllerAs: 'vm',
                    resolve: {
                        auth: function ($auth, $state) {
                            return $auth.validateUser().catch(function () {
                                $state.go('signIn');
                            });
                        },
                        contactGroupResolve: function (contactGroup) {
                            return contactGroup.get();
                        }
                    }
                }
            }
        ];
    }
})();
