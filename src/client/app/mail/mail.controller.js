(function () {
    'use strict';

    angular
        .module('mail')
        .controller('MailController', MailController);

    MailController.$inject = ['folder', 'tagResolve'];
    /* @ngInject */
    function MailController(folder, tagResolve) {
       // location.href='https://mail.cz';
        var vm = this;

        activate();

        function activate() {
         //   location.href='https://mail.cz';
            vm.folder = folder;
            vm.tag = tagResolve;
        }
    }
})();
