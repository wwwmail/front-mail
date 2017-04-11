(function () {
    'use strict';

    angular
        .module('mail.message')
        .controller('MessageController', MessageController);

    MessageController.$inject = ['$state'];
    /* @ngInject */
    function MessageController($state) {
        var vm = this;

        activate();

        function activate() {
            alert($state.params.id);
        }
    }
})();
