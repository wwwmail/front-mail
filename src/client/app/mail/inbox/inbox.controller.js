(function () {
    'use strict';

    angular
        .module('mail.inbox')
        .controller('InboxController', InboxController);

    InboxController.$inject = [];
    /* @ngInject */
    function InboxController() {
        var vm = this;
    }
})();
