(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('AttachItemController', AttachItemController);

    AttachItemController.$inject = ['$auth', 'CONFIG', 'gallery'];
    /* @ngInject */
    function AttachItemController($auth, CONFIG, gallery) {
        var vm = this;

        vm.openGallery = openGallery;

        activate();

        function activate() {
            vm.user = $auth.user;
            vm.CONFIG = CONFIG;
        }

        function openGallery() {
            gallery.openGallery({
                attachIndex: vm.index,
                attach: vm.attach,
                attachments: vm.attachments,
                message: vm.message
            });
        }
    }
})();
