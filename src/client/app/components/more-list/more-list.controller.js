(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('MoreListController', MoreListController);

    MoreListController.$inject = ['$state', 'mail'];
    /* @ngInject */
    function MoreListController($state, mail) {
        var vm = this;

        vm.print = print;
        vm.close = close;
        vm.move = move;

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

        function move(folder) {
            vm.messages = mail.moveToFolder(folder, vm.messages, {move: true});
        }

        function close() {
            vm.onClose();
        }
    }
})();
