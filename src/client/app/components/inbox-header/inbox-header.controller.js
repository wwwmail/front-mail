(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('InboxHeaderController', InboxHeaderController);

    InboxHeaderController.$inject = ['$state', '$scope'];
    /* @ngInject */
    function InboxHeaderController($state, $scope) {
        var vm = this;

        vm.title = "InboxHeaderController";

        vm.checkedAllMessages = checkedAllMessages;
        vm.syncMail = syncMail;

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

        function syncMail() {
            if ($state.current.name === 'mail.inbox') {
                $scope.$emit('mail:sync');
                return;
            }
            $state.go('mail.inbox');
        }
    }
})();
