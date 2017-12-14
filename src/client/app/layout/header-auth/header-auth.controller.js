(function () {
    'use strict';

    angular
        .module('app.layout')
        .controller('HeaderAuthController', HeaderAuthController);

    HeaderAuthController.$inject = ['$uibModal', '$auth', '$rootScope', '$timeout', 'mailService', 'CONFIG', 'currencyFormatService'];

    /* @ngInject */
    function HeaderAuthController($uibModal, $auth, $rootScope, $timeout, mailService, CONFIG, currencyFormatService) {
        var vm = this;

        vm.weather = {
            model: {}
        };

        vm.currencies = {
            model: {}
        };

        vm.isOpenSingIn = false;


        vm.openAboutUs = openAboutUs;


        $rootScope.$on('$translateChangeSuccess', function() {
            getWeather();
            getCurrencies();
        });


        vm.getCurrencyByCode = getCurrencyByCode;


        activate();

        ////

        function activate() {
            vm.user = $auth.user;
            vm.CONFIG = CONFIG;

            $timeout(function () {
                getWeather();
                getCurrencies();
            }, 250);
        }

        function openAboutUs() {
            $uibModal.open({
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
            mailService.getWeather().then(function (response) {
                vm.weather.model = response;
            });
        }

        function getCurrencies() {
            mailService.getCurrencies().then(function (response) {
                vm.currencies.data = response.data;
            });
        }
        
        function getCurrencyByCode(code) {
            return currencyFormatService.getByCode(code);
        }
    }
})();
