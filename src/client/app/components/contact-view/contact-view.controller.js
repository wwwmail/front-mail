(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('ContactViewController', ContactViewController);

    ContactViewController.$inject = ['$rootScope', '$uibModal', 'wb'];
    /* @ngInject */
    function ContactViewController($rootScope, $uibModal, wb) {
        var vm = this;

        // $translatePartialLoader.addPart('components');
        // $translate.refresh();

        vm.close = close;
        vm.openContactEditPopup = openContactEditPopup;
        vm.getDate = getDate;
        vm.openComposePopup = openComposePopup;
        vm.addToBlackList = addToBlackList;

        ////

        activate();

        function activate() {
        }

        function close() {
            vm.onClose();
        }

        function openContactEditPopup() {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'app/components/contact-edit/contact-edit-popup.html',
                controller: function ($scope, $uibModalInstance, model) {
                    $scope.contact = model;
                    $scope.result = {};

                    $scope.cancel = cancel;
                    $scope.close = close;

                    ////

                    function cancel() {
                        $uibModalInstance.dismiss('cancel');
                    }

                    function close(result) {
                        $uibModalInstance.close(result);
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

            modalInstance.result.then(function (response) {
                vm.contact = response;
            });
        }

        function getDate(date) {
            return moment(date).format('DD MMMM YYYY');
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
                windowClass: 'popup popup--compose popup--compose-minimize hide-elm'
            });
        }

        function addToBlackList() {
            _.forEach(vm.contact.emails, function (email) {
                wb.post({}, {
                    email: email.value,
                    list: 'B'
                });
            });

            $rootScope.$broadcast('notify:message', {
                message: 'ADDED_TO_BLACKLIST',
                email: vm.contact.emails[0].value
            });

            close();
        }
    }
})();
