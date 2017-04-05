(function () {
    'use strict';

    angular
        .module('mail')
        .controller('MailController', MailController);

    MailController.$inject = [];
    /* @ngInject */
    function MailController() {
        var vm = this;
    }
})();
