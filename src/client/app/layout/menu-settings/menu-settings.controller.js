(function () {
    'use strict';

    angular
        .module('app.layout')
        .controller('MenuSettingsController', MenuSettingsController);

    MenuSettingsController.$inject = ['$uibModal', '$auth', 'lang', '$translate', 'timezone'];

    /* @ngInject */
    function MenuSettingsController($uibModal, $auth, lang, $translate, timezone) {
        var vm = this;

        vm.getTimezoneName = getTimezoneName;
        vm.openPasswordChangePopup = openPasswordChangePopup;

        activate();

        function activate() {
            vm.user = $auth.user;
            vm.profile = $auth.user.profile;

            vm.useLang = lang.getCurrentLang();
        }

        function openPasswordChangePopup() {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'app/components/password-change/password-change-popup.html',
                controller: function ($scope, $uibModalInstance) {
                    $scope.cancel = cancel;

                    function cancel() {
                        $uibModalInstance.dismiss('cancel');
                    }
                },
                size: 'sm',
                windowClass: 'popup popup--password-change'
            });
        }

        function getTimezoneName() {
            return timezone.getCurrent();
        }
    }
})();
