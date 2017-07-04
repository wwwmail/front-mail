(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('MoreListController', MoreListController);

    MoreListController.$inject = ['$state'];
    /* @ngInject */
    function MoreListController($state) {
        var vm = this;

        vm.print = print;

        activate();

        function activate() {
            console.log('messages', vm.messages.checked[0]);
        }

        function print() {
            var url = $state.href('print', {
                id: vm.messages.checked[0].number,
                connection_id: vm.messages.checked[0].connection_id,
                mbox: vm.messages.checked[0].mbox
            });
            window.open(url, '_blank');
        }
    }
})();
