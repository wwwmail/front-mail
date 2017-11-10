(function () {
    'use strict';

    angular
        .module('app.layout')
        .controller('HeaderAuthController', HeaderAuthController);

    HeaderAuthController.$inject = ['$uibModal', '$auth', 'profile'];

    /* @ngInject */
    function HeaderAuthController($uibModal, $auth, profile) {
        var vm = this;
        vm.openAboutUs = openAboutUs;

        vm.isOpenSingIn = false;

        activate();

        function activate() {
            vm.user = $auth.user;
        }

        function openAboutUs() {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'app/components/about-us/about-us-popup.html',
                controller: function ($scope, $uibModalInstance) {
                    $scope.cancel = cancel;

                    function cancel() {
                        $uibModalInstance.dismiss('cancel');
                    }
                },
                size: 'sm',
                windowClass: 'popup popup--about-us'
            });
        }
    }
})();
