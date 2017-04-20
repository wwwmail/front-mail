(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('InboxHeaderController', InboxHeaderController);

    InboxHeaderController.$inject = [];
    /* @ngInject */
    function InboxHeaderController() {
        var vm = this;

        vm.title = "InboxHeaderController";

        vm.checkedAllMessages = checkedAllMessages;

        function checkedAllMessages() {
            if(vm.isAllChecked) {
                vm.messages.checked = vm.messages.items;
                return;
            }
            vm.messages.checked = [];
        }
    }
})();
