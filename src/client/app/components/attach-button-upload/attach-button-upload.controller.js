(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('AttachButtonUploadController', AttachButtonUploadController);

    AttachButtonUploadController.$inject = ['$auth'];
    /* @ngInject */
    function AttachButtonUploadController($auth) {
        var vm = this;

        activate();

        function activate() {
            vm.user = $auth.user;

            console.log('message', vm.message);
            console.log('user', vm.user);
        }
    }
})();
