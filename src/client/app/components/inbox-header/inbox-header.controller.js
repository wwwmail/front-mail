(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('InboxHeaderController', InboxHeaderController);

    InboxHeaderController.$inject = ['$state', '$scope', 'mail'];
    /* @ngInject */
    function InboxHeaderController($state, $scope, mail) {
        var vm = this;

        vm.title = "InboxHeaderController";

        vm.checkedAllMessages = checkedAllMessages;
        vm.syncMail = syncMail;
        vm.move = move;
        vm.destroy = destroy;

        $scope.$watch('vm.messages.checked', function (data) {
            console.log('vm.messages.checked', vm.messages.checked);
            if (data && !data.length) {
                vm.isAllChecked = false;
            }
        }, true);

        activate();

        function activate() {
            vm.$state = $state;
            console.log('$state', $state.current.name);
        }

        function checkedAllMessages() {
            if(vm.isAllChecked && vm.messages.items) {
                // vm.messages.checked = angular.copy(vm.messages.items);
                vm.messages.checked = angular.copy(vm.messages.items);
                console.log('checked', vm.messages.checked);
                return;
            }
            vm.messages.checked = [];
        }

        function syncMail() {
            if ($state.current.name === 'mail.inbox') {
                $scope.$emit('mail:sync');
                return;
            }
            $scope.$emit('folders:sync');
            $state.go('mail.inbox');
        }

        function move(folder) {
            var ids = [];

            _.forEach(vm.messages.checked, function (message) {
                ids.push(message.number);
            });

            mail.move({}, {
                ids: ids,
                mbox: vm.messages.checked[0].mbox,
                mboxnew: folder.name
            }).then(function (response) {
                vm.messages.checked = [];
                syncMail();
            });
        }
        
        function destroy(folder) {
            var ids = [];

            _.forEach(vm.messages.checked, function (message) {
                ids.push(message.number);
            });

            mail.destroy({}, {
                id: 1,
                ids: ids,
                mbox: vm.messages.checked[0].mbox
            }).then(function (response) {
                vm.messages.checked = [];
                syncMail();
            });
        }

    }
})();
