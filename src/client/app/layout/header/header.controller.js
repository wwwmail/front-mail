(function () {
    'use strict';

    angular
        .module('app.layout')
        .controller('HeaderController', HeaderController);

    HeaderController.$inject = ['$auth', '$translatePartialLoader', '$translate'];

    /* @ngInject */
    function HeaderController($auth, $translatePartialLoader, $translate) {
        var vm = this;

        activate();

        function activate() {
            vm.user = $auth.user;
        }
    }
})();
