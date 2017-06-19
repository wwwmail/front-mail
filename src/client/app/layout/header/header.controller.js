(function () {
    'use strict';

    angular
        .module('app.layout')
        .controller('HeaderController', HeaderController);

    HeaderController.$inject = ['$auth', '$state', '$translate'];

    /* @ngInject */
    function HeaderController($auth, $state, $translate) {
        var vm = this;

        activate();

        function activate() {
            vm.user = $auth.user;
            vm.$state = $state;
        }
    }
})();
