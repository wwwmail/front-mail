(function () {
    'use strict';

    angular
        .module('help.main')
        .controller('HelpController', HelpController);

    HelpController.$inject = [];
    /* @ngInject */
    function HelpController() {
        var vm = this;

        activate();

        function activate() {

        }
    }
})();
