(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('AttachUploadController', AttachUploadController);

    AttachUploadController.$inject = ['$auth', '$state'];
    /* @ngInject */
    function AttachUploadController($auth, $state) {
        var vm = this;

        activate();

        function activate() {
            vm.user = $auth.user;
            vm.$state = $state;
        }
    }
})();
