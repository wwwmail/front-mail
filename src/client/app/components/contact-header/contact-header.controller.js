(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('ContactHeaderController', ContactHeaderController);

    ContactHeaderController.$inject = ['$state', '$scope', '$uibModal', 'mail'];
    /* @ngInject */
    function ContactHeaderController($state, $scope, $uibModal, mail) {
        var vm = this;

        vm.isSeen = true;

        vm.checkedAllMessages = checkedAllMessages;
        vm.syncMail = syncMail;
        vm.move = move;
        vm.destroy = destroy;
        vm.triggerSeen = triggerSeen;
        vm.openContactAddPopup = openContactAddPopup;
        vm.openContactRestorePopup = openContactRestorePopup;

        $scope.$watch('vm.messages.checked', function (data) {
            console.log('data', data);
            if (data && !data.length) {
                vm.isAllChecked = false;
            }
        }, true);

        activate();

        function activate() {
            vm.$state = $state;
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

        function triggerSeen() {
            vm.isSeen ? setUnSeen() : setSeen();
            vm.isSeen = !vm.isSeen;
        }

        function setSeen() {
            vm.messages = mail.setSeen(vm.messages);
            // console.log('seen', vm.messages);
        }

        function setUnSeen() {
            vm.messages = mail.setUnSeen(vm.messages);
            // console.log('unseen', vm.messages);
        }

        function openContactAddPopup() {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'app/components/contact-add/contact-add-popup.html',
                controller: function ($scope, $uibModalInstance) {
                    $scope.cancel = cancel;

                    function cancel() {
                        $uibModalInstance.dismiss('cancel');
                    }
                },
                size: 'sm',
                windowClass: 'popup popup--contact-add'
            });
        }

        function openContactRestorePopup() {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'app/components/contact-restore/contact-restore-popup.html',
                controller: function ($scope, $uibModalInstance) {
                    $scope.cancel = cancel;

                    function cancel() {
                        $uibModalInstance.dismiss('cancel');
                    }
                },
                size: 'sm',
                windowClass: 'popup popup--contact-add'
            });
        }

    }
})();
