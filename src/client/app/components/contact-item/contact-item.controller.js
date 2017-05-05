(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('ContactItemController', ContactItemController);

    ContactItemController.$inject = ['$state', '$scope', '$uibModal', 'contact', 'tag'];
    /* @ngInject */
    function ContactItemController($state, $scope, $uibModal, contact, tag) {
        var vm = this;

        vm.openContactViewPopup = openContactViewPopup;
        vm.destroy = destroy;

        // activate();

        function activate() {
            vm.$state = $state;
            console.log('activate', vm.message);
            getTags();
        }

        function goToUrl() {
            console.log('state', $state.params.mbox);
            if ($state.params.mbox === 'Drafts') {
                $state.go('mail.compose', {
                    id: vm.message.number,
                    mbox: vm.message.mbox
                });
                return;
            }
            $state.go('mail.message', {
                id: vm.message.number,
                mbox: vm.message.mbox
            });
        }

        function getTags() {
            tag.getTagsByMessage({}, {
                mbox: vm.message.mbox,
                id: vm.message.number
            }).then(function (response) {
                vm.message.tags = response.data;
            })
        }

        function destroy(model) {
            contact.destroy({id: model.id}, {});
            _.remove(vm.contacts.items, function (item) {
                return model.id === item.id;
            });
        }

        function openContactViewPopup() {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'app/components/contact-view/contact-view-popup.html',
                controller: function ($scope, $uibModalInstance, model) {
                    $scope.cancel = cancel;

                    $scope.contact = model;
                    // console.log('model', model);

                    function cancel() {
                        $uibModalInstance.dismiss('cancel');
                    }
                },
                resolve: {
                    model: function () {
                        return vm.contact;
                    }
                },
                size: 'sm',
                windowClass: 'popup popup--contact-add'
            });
        }
    }
})();