(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('AttachButtonController', AttachButtonController);

    AttachButtonController.$inject = ['$auth'];
    /* @ngInject */
    function AttachButtonController($auth) {
        var vm = this;

        activate();

        function activate() {
            vm.user = $auth.user;
        }
    }
})();
