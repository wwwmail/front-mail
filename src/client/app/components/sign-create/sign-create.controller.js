(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('SignCreateController', SignCreateController);

    SignCreateController.$inject = ['sign'];
    /* @ngInject */
    function SignCreateController(sign) {
        var vm = this;

        vm.form = {
            model: {}
        };

        vm.create = create;
        vm.close = close;

        activate();

        function activate() {
            // console.log('cancel()', vm);
        }

        function create(form) {
            if (form.$invalid) return;

            sign.post({}, vm.form.model).then(function (response) {
                // console.log('response', response);
                close({result: {sign:  vm.form.model.sign}});
            });
        }

        function close(data) {
            vm.onClose(data);
        }
    }
})();
