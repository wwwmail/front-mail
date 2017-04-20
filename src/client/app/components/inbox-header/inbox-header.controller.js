(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('InboxHeaderController', InboxHeaderController);

    InboxHeaderController.$inject = ['$state'];
    /* @ngInject */
    function InboxHeaderController($state) {
        var vm = this;

        vm.title = "InboxHeaderController";

        vm.checkedAllMessages = checkedAllMessages;

        activate();

        function activate() {

            vm.$state = $state;
            console.log('$state', $state.current.name);
        }

        function checkedAllMessages() {
            if(vm.isAllChecked) {
                vm.messages.checked = angular.copy(vm.messages.items);
                return;
            }
            vm.messages.checked = [];
        }
    }
})();
