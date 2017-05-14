(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('AttachUploadController', AttachUploadController);

    AttachUploadController.$inject = ['$auth'];
    /* @ngInject */
    function AttachUploadController($auth) {
        var vm = this;

        activate();

        function activate() {
            vm.user = $auth.user;
        }
    }
})();
