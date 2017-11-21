(function () {
    'use strict';

    angular
        .module('app.layout')
        .controller('HeaderAuthController', HeaderAuthController);

    HeaderAuthController.$inject = ['$uibModal', '$auth', 'mailService', 'CONFIG'];

    /* @ngInject */
    function HeaderAuthController($uibModal, $auth, mailService, CONFIG) {
        var vm = this;

        vm.weather = {
            model: {}
        };

        vm.isOpenSingIn = false;


        vm.openAboutUs = openAboutUs;


        activate();

        ////

        function activate() {
            vm.user = $auth.user;
            vm.CONFIG = CONFIG;

            getWeather();
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

        function getWeather() {
            mailService.getWeather({
                // location: 'Lviv',
                // lang: 'ua'
            }).then(function (response) {
                vm.weather.model = response;
            });
        }
    }
})();
