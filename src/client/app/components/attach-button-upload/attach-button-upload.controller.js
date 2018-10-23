(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('AttachButtonUploadController', AttachButtonUploadController);

    AttachButtonUploadController.$inject = ['$auth', 'CONFIG'];
    /* @ngInject */
    function AttachButtonUploadController($auth, CONFIG) {
        var vm = this;

        activate();

        function activate() {
            vm.user = $auth.user;
            vm.config = CONFIG;

            console.log('message', vm.message);
            console.log('user', vm.user);
        }
    }
})();
