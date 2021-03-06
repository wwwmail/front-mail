(function () {
    'use strict';

    angular
        .module('main')
        .controller('MainController', MainController);

    MainController.$inject = ['$auth', '$state', '$stateParams', 'profile', 'lang'];
    /* @ngInject */
    function MainController($auth, $state, $stateParams, profile, lang) {
        var vm = this;

        activate();

        ////

        function activate() {
            var params = {};

            if ($stateParams.lang) {
                lang.selectLang(
                    lang.getLangByIco($stateParams.lang)
                );
            }

            if ($stateParams.compose) {
                params.compose = $state.params.compose
            }

            if ($stateParams.page) {
                $state.go($stateParams.page, params);
                return;
            }

            if ($stateParams.token) {
                $auth.setAuthHeaders({
                    "Authorization": 'Bearer ' + $stateParams.token
                });

                $auth.validateUser().then(function (response) {
                    profile.addStorageProfile(response);
                });

                $state.go('mail.inbox', {mbox: 'INBOX'});

                return;
            }

            params.mbox = 'INBOX';

            $state.go('mail.inbox', params);
        }
    }
})();
