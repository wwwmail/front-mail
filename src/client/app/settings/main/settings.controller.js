(function () {
    'use strict';

    angular
        .module('settings.main')
        .controller('SettingsController', SettingsController);

    SettingsController.$inject = ['$uibModal', '$sce', 'profile', 'country'];
    /* @ngInject */
    function SettingsController($uibModal, $sce, profile, country) {
        var vm = this;

        vm.openAvatarUploadPopup = openAvatarUploadPopup;
        vm.destroy = destroy;
        vm.getTrustHtml = getTrustHtml;

        activate();

        function activate() {

        }

        function openAvatarUploadPopup() {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'app/components/avatar-upload/avatar-upload-popup.html',
                controller: function ($scope, $uibModalInstance) {
                    $scope.cancel = cancel;

                    function cancel() {
                        $uibModalInstance.dismiss('cancel');
                    }
                },
                size: 'sm',
                windowClass: 'popup popup--avatar-upload'
            });
        }

        function destroy() {
            profile.destroy();
        }

        function getTrustHtml(html) {
            return $sce.trustAsHtml(html);
        }
    }
})();
