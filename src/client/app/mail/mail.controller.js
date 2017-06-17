(function () {
    'use strict';

    angular
        .module('mail')
        .controller('MailController', MailController);

    MailController.$inject = ['folder', 'tagResolve', '$translatePartialLoader', '$translate'];
    /* @ngInject */
    function MailController(folder, tagResolve, $translatePartialLoader, $translate) {
        var vm = this;

        // $translatePartialLoader.addPart('mail');
        // $translate.refresh();

        activate();

        function activate() {
            vm.folder = folder;
            vm.tag = tagResolve;
        }
    }
})();
