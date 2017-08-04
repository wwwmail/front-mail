(function () {
    'use strict';

    angular
        .module('app.layout')
        .controller('MenuSettingsController', MenuSettingsController);

    MenuSettingsController.$inject = ['$uibModal', '$auth', 'lang', '$translate'];

    /* @ngInject */
    function MenuSettingsController($uibModal, $auth, lang, $translate) {
        var vm = this;

        // $translatePartialLoader.addPart('layout/menu-settings');
        // $translate.refresh();

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

        function getTimezoneName(timezone) {
            return "(GMT" + moment.tz(timezone).month(0).format('Z') + ") " + timezone;
        }
    }
})();
