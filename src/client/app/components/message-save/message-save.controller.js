(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('MessageSaveController', MessageSaveController);

    MessageSaveController.$inject = ['mailBox'];
    /* @ngInject */
    function MessageSaveController(mailBox) {
        var vm = this;

        vm.form = {
            model: {}
        };

        vm.create = create;
        vm.close = close;
        vm.cancel = cancel;

        activate();

        function activate() {
            // console.log('cancel()', vm);
        }

        function create(form) {
            if (form.$invalid) return;

            mailBox.create({}, vm.form.model).then(function (response) {
                console.log('response', response);
                close();
            });
        }

        function close(data) {
            vm.onClose({result: data});
        }

        function cancel() {
            vm.onCancel();
        }
    }
})();
