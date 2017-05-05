(function () {
    'use strict';

    angular
        .module('terms.main')
        .controller('TermsController', TermsController);

    TermsController.$inject = [];
    /* @ngInject */
    function TermsController() {
        var vm = this;
    }
})();
