(function () {
    'use strict';

    angular
        .module('terms.main')
        .controller('TermsController', TermsController);

    TermsController.$inject = ['CONFIG'];
    /* @ngInject */
    function TermsController(CONFIG) {
        var vm = this;

        activate();

        function activate() {
            vm.CONFIG = CONFIG;
        }
    }
})();
