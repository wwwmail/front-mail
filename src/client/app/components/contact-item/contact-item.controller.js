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
        vm.openComposePopup = openComposePopup;

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
            contact.destroy({}, {ids: [model.id]});
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

        function openComposePopup() {
            var params = {
                new: true,
                contactTo: vm.contact.emails[0].value
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
                windowClass: 'popup popup--compose hide-elm'
            });
        }
    }
})();
