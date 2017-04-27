(function () {
    'use strict';

    angular
        .module('app.layout')
        .controller('HeaderController', HeaderController);

    HeaderController.$inject = ['$auth'];

    /* @ngInject */
    function HeaderController($auth) {
        var vm = this;
        vm.title = 'Header';

        activate();

        function activate() {
            vm.user = $auth.user;
        }
    }
})();
