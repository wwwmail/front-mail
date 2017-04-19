(function () {
    'use strict';

    angular
        .module('mail.compose')
        .controller('ComposeController', ComposeController);

    ComposeController.$inject = ['mail', '$interval', '$state'];
    /* @ngInject */
    function ComposeController(mail, $interval, $state) {
        var vm = this;

        vm.sendForm = {
            model: {}
        };

        vm.send = send;
        vm.save = save;

        activate();

        function activate() {
            $interval(function () {
                if (vm.sendForm.model.to) {
                    save();
                }
            }, 1000 * 2);
        }

        function send(form) {
            if (form.$invalid) return;
            // vm.sendForm.model.cmd = 'send';
            mail.post({}, vm.sendForm.model).then(function (response) {
                console.log('response', response);
                if (response.success) {
                    $state.go('mail.inbox');
                }
            });
        }

        function save() {
            if (!vm.sendForm.model.id) {
                mail.post({}, vm.sendForm.model).then(function (response) {
                    console.log('response', response);
                    if (response.success) {
                        vm.sendForm.model.id = response.data.id;
                    }
                });
                return;
            }

            mail.put({}, vm.sendForm.model).then(function (response) {
                console.log('response', response);
                if (response.success) {
                    // vm.sendForm.model.id = response.data.
                }
            });
        }
    }
})();
