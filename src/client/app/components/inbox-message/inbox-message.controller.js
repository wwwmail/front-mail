(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('InboxMessageController', InboxMessageController);

    InboxMessageController.$inject = [];
    /* @ngInject */
    function InboxMessageController() {
        var vm = this;

        activate();

        function activate() {
            console.log('activate', vm.message);
        }
    }
})();
