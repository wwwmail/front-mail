(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('ContactHeaderController', ContactHeaderController);

    ContactHeaderController.$inject = ['$state', '$scope', '$uibModal', 'contact'];
    /* @ngInject */
    function ContactHeaderController($state, $scope, $uibModal, contact) {
        var vm = this;

        vm.isSeen = true;

        vm.checkedAllContacts = checkedAllContacts;
        // vm.syncMail = syncMail;
        // vm.move = move;
        vm.destroy = destroy;
        // vm.triggerSeen = triggerSeen;
        vm.openContactAddPopup = openContactAddPopup;
        vm.openContactRestorePopup = openContactRestorePopup;

        $scope.$watch('vm.contacts.checked', function (data) {
            console.log('data', data);
            if (data && !data.length) {
                vm.isAllChecked = false;
            }
        }, true);

        activate();

        function activate() {
            vm.$state = $state;
        }

        function checkedAllContacts() {
            if (vm.isAllChecked && vm.contacts.items) {
                vm.contacts.checked = angular.copy(vm.contacts.items);
                return;
            }
            vm.contacts.checked = [];
        }

        // function syncMail() {
        //     if ($state.current.name === 'mail.inbox') {
        //         $scope.$emit('mail:sync');
        //         return;
        //     }
        //     $scope.$emit('folders:sync');
        //     $state.go('mail.inbox');
        // }

        function destroy() {
            var ids = [];

            _.forEach(vm.contacts.checked, function (contact) {
                ids.push(contact.id);
            });

            contact.destroy({}, {ids: ids});

            _.forEach(ids, function (id) {
                _.remove(vm.contacts.items, function (item) {
                    return item.id === id;
                });
            });
        }

        // function destroy(folder) {
        //     var ids = [];
        //
        //     _.forEach(vm.contacts.checked, function (message) {
        //         ids.push(message.number);
        //     });
        //
        //     mail.destroy({}, {
        //         id: 1,
        //         ids: ids,
        //         mbox: vm.contacts.checked[0].mbox
        //     }).then(function (response) {
        //         vm.contacts.checked = [];
        //         syncMail();
        //     });
        // }

        // function triggerSeen() {
        //     vm.isSeen ? setUnSeen() : setSeen();
        //     vm.isSeen = !vm.isSeen;
        // }
        //
        // function setSeen() {
        //     vm.contacts = mail.setSeen(vm.contacts);
        //     // console.log('seen', vm.contacts);
        // }
        //
        // function setUnSeen() {
        //     vm.contacts = mail.setUnSeen(vm.contacts);
        //     // console.log('unseen', vm.contacts);
        // }

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
                windowClass: 'popup popup--contact-restore'
            });
        }

    }
})();
