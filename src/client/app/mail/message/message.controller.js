(function () {
    'use strict';

    angular
        .module('mail.message')
        .controller('MessageController', MessageController);

    MessageController.$inject = [];
    /* @ngInject */
    function MessageController() {
        var vm = this;
    }
})();
