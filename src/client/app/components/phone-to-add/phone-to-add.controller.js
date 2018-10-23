(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('PhoneToAddController', PhoneToAddController);

    PhoneToAddController.$inject = [];
    /* @ngInject */
    function PhoneToAddController() {
        var vm = this;

        // vm.phones = {
        //     model: {}
        // };

        ////

        activate();

        function activate() {
        }
    }
})();
