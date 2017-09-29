(function () {
    'use strict';

    angular
        .module('app.layout')
        .controller('HeaderController', HeaderController);

    HeaderController.$inject = ['$auth', '$state', '$translate', 'CONFIG'];

    /* @ngInject */
    function HeaderController($auth, $state, $translate, CONFIG) {
        var vm = this;

        activate();

        function activate() {
            vm.user = $auth.user;
            vm.$state = $state;
            vm.CONFIG = CONFIG;
        }
    }
})();
