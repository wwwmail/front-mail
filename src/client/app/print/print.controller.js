(function () {
    'use strict';

    angular
        .module('print')
        .controller('PrintController', PrintController);

    PrintController.$inject = ['$timeout', '$window', '$sce', 'message'];
    /* @ngInject */
    function PrintController($timeout, $window, $sce, message) {
        var vm = this;

        vm.message = {};

        vm.getTrustHtml = getTrustHtml;

        activate();

        function activate() {
            message.$promise.then(function (response) {
                vm.message.model = response.data;

                $timeout(function () {
                    $window.print();
                    $window.close();
                }, 250);
            });
        }

        function getTrustHtml(html) {
            return $sce.trustAsHtml(html);
        }


    }
})();
