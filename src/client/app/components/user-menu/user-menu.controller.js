(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('UserMenuController', UserMenuController);

    UserMenuController.$inject = ['$auth', '$state', 'profile'];
    /* @ngInject */
    function UserMenuController($auth, $state, profile) {
        var vm = this;

        vm.logout = logout;

        activate();

        function activate() {
            vm.profile = profile.getCurrent();
        }

        function logout() {
            $auth.signOut().then(function() {
                $state.go('signIn');
            });
        }
    }
})();
