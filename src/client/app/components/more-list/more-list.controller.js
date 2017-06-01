(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('MoreListController', MoreListController);

    MoreListController.$inject = [];
    /* @ngInject */
    function MoreListController() {
        var vm = this;

        vm.print = print;

        function print() {
            window.print();
        }
    }
})();
