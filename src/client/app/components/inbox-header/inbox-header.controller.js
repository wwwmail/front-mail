(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('InboxHeaderController', InboxHeaderController);

    InboxHeaderController.$inject = ['$state', '$scope', '$uibModal', 'mail'];
    /* @ngInject */
    function InboxHeaderController($state, $scope, $uibModal, mail) {
        var vm = this;

        vm.title = "InboxHeaderController";

        vm.isSeen = true;

        vm.checkedAllMessages = checkedAllMessages;
        vm.syncMail = syncMail;
        vm.move = move;
        vm.destroy = destroy;
        vm.triggerSeen = triggerSeen;
        vm.goToAnswer = goToAnswer;
        vm.goToFwd = goToFwd;

        $scope.$watch('vm.messages.checked', function (data) {
            if (data && !data.length) {
                vm.isAllChecked = false;
            }

            vm.isSeen = true;

            _.forEach(data, function (item) {
                if (!item.seen) {
                    vm.isSeen = false;
                    console.log('un-seen', true);
                }
            });
        }, true);

        activate();

        function activate() {
            vm.$state = $state;
            console.log('vm.state', vm.$state);
        }

        function checkedAllMessages() {
            if (vm.isAllChecked && vm.messages.items) {
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
            $scope.$emit('folders:sync');
            $state.go('mail.inbox', {mbox: 'INBOX'});
        }

        function move(folder) {
            vm.messages = mail.moveToFolder(folder, vm.messages, {move: true});

            // if ($state.current.name === 'mail.message' && folder.name === 'Junk') {
            //     $state.go('mail.inbox', {mbox: folder.name});
            // }
        }

        function destroy() {
            vm.messages = mail.destroy(vm.messages);
        }

        function triggerSeen() {
            vm.isSeen ? setUnSeen() : setSeen();
            vm.isSeen = !vm.isSeen;
        }

        function setSeen() {
            if ($state.current.name === 'mail.inbox') {
                vm.messages = mail.setSeen(vm.messages);
            }

            if ($state.current.name === 'mail.message') {
                vm.messages = mail.setSeen(vm.messages, {saveChecked: true});
            }
        }

        function setUnSeen() {
            if ($state.current.name === 'mail.inbox') {
                vm.messages = mail.setUnSeen(vm.messages);
            }

            if ($state.current.name === 'mail.message') {
                vm.messages = mail.setUnSeen(vm.messages, {saveChecked: true});
            }
        }

        function goToAnswer() {
            var data = mail.getAnswerData();

            var params = {
                id: data.number,
                mbox: data.mbox,
                connection_id: data.connection_id,
                re: true
            };

            $uibModal.open({
                animation: false,
                templateUrl: 'app/components/compose-popup/compose-popup.html',
                controller: 'ComposePopupController',
                controllerAs: 'vm',
                resolve: {
                    params: function () {
                        return params;
                    }
                },
                size: 'lg',
                windowClass: 'popup popup--compose popup--compose-minimize hide-elm'
            });
        }

        function goToFwd() {
            var ids = [];

            _.forEach(vm.messages.checked, function (item) {
                ids.push(item.number);
            });

            mail.setFwdData(vm.messages.checked);

            var params = {
                ids: ids,
                mbox: vm.messages.checked[0].mbox,
                connection_id: vm.messages.checked[0].connection_id,
                fwd: true
            };

            var modalInstance = $uibModal.open({
                animation: false,
                templateUrl: 'app/components/compose-popup/compose-popup.html',
                controller: 'ComposePopupController',
                controllerAs: 'vm',
                resolve: {
                    params: function () {
                        return params;
                    }
                },
                size: 'lg',
                windowClass: 'popup popup--compose popup--compose-minimize hide-elm'
            });

            // $state.go('mail.compose', {
            //     ids: ids,
            //     mbox: vm.messages.checked[0].mbox,
            //     connection_id: vm.messages.checked[0].connection_id,
            //     fwd: true
            // });
        }
    }
})();
