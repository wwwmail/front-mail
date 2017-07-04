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

        activate();

        function activate() {
            console.log('messages', vm.messages.checked[0]);
        }

        function print() {
            window.print();
        }
    }
})();
