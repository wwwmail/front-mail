(function () {
    'use strict';

    angular
        .module('mail')
        .controller('MailController', MailController);

    MailController.$inject = ['folder'];
    /* @ngInject */
    function MailController(folder) {
        var vm = this;

        activate();

        function activate() {
            vm.folder = folder;
        }
    }
})();
