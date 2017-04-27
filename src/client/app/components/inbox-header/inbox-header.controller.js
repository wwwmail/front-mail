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
        vm.setUnSeen = setUnSeen;

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
            if (vm.isAllChecked && vm.messages.items) {
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

        function setUnSeen() {
            if (vm.messages.isLoading || !vm.messages.checked.length) return;
            
            var ids = [];

            _.forEach(vm.messages.checked, function (message) {
                ids.push(message.number);
            });

            vm.messages.isLoading = true;

            mail.deflag({}, {
                ids: ids,
                flag: 'Seen'
            }).then(function (response) {
                vm.messages.isLoading = false;
            });

            vm.messages.checked = [];

            _.forEach(vm.messages.items, function (item) {
                item.seen = false;
            });
        }

    }
})();
