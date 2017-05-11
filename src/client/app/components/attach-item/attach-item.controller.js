(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('AttachItemController', AttachItemController);

    AttachItemController.$inject = ['$auth'];
    /* @ngInject */
    function AttachItemController($auth) {
        var vm = this;

        activate();

        function activate() {
            console.log('attach', vm.attach);

            vm.user = $auth.user;
        }
    }
})();
