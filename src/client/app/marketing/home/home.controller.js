(function () {
    'use strict';

    angular
        .module('marketing.home')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$auth', '$state'];
    /* @ngInject */
    function HomeController($auth, $state) {
        var vm = this;

        activate();

        function activate() {
            if ($state.params.version === 'desktop') {
                $auth.setAuthHeaders({
                    "Authorization": "Bearer " + $state.params.token
                });

                $auth.validateUser().then(function() {
                    $state.go($state.params.page);
                });
                return;
            }

            $state.go('mail.inbox');
        }
    }
})();
