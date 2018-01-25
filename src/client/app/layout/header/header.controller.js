(function () {
    'use strict';

    angular
        .module('app.layout')
        .controller('HeaderController', HeaderController);

    HeaderController.$inject = ['$auth', '$state', '$scope', '$uibModal', 'CONFIG', '$rootScope'];

    /* @ngInject */
    function HeaderController($auth, $state, $scope, $uibModal, CONFIG, $rootScope) {
        var vm = this;

        vm.syncMail = syncMail;
        vm.openComposePopup = openComposePopup;
        vm.isOpenThemes = isOpenThemes;
        vm.isThemes = false;

        ////

        activate();

        function activate() {
            vm.user = $auth.user;
            vm.$state = $state;
            vm.CONFIG = CONFIG;
        }

        function syncMail() {
            if ($state.current.name === 'mail.inbox') {
                $scope.$emit('mail:sync');
                return;
            }
            $scope.$emit('folders:sync');
            $state.go('mail.inbox', {mbox: 'INBOX'}, {reload: true});
        }

        function isOpenThemes() {
            $rootScope.isThemeShow = true;
            vm.isThemes = true;
        }

        function openComposePopup(params) {
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
                keyboard: false,
                windowClass: 'popup popup--compose hide'
            });
        }
    }
})();
