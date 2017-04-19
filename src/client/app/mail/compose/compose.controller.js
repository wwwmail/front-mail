(function () {
    'use strict';

    angular
        .module('mail.compose')
        .controller('ComposeController', ComposeController);

    ComposeController.$inject = ['mail', '$interval', '$state', '$rootScope'];
    /* @ngInject */
    function ComposeController(mail, $interval, $state, $rootScope) {
        var vm = this;

        vm.interval = {};

        vm.sendForm = {
            model: {}
        };

        vm.send = send;
        vm.save = save;

        $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
            $interval.cancel(vm.interval);
        });

        activate();

        function activate() {
            vm.interval = $interval(function () {
                if (vm.sendForm.model.to) {
                    save();
                }
            }, 1000 * 5);
        }

        function send(form) {
            if (form.$invalid) return;
            mail.post({}, vm.sendForm.model).then(function (response) {
                console.log('response', response);
                if (response.success) {
                    $state.go('mail.inbox');
                }
            });
        }

        function save() {
            if (!vm.sendForm.id) {
                mail.post({}, vm.sendForm.model).then(function (response) {
                    console.log('response', response);
                    if (response.success) {
                        vm.sendForm.id = response.data.id;
                    }
                });
                return;
            }

            mail.put({id: vm.sendForm.id}, vm.sendForm.model).then(function (response) {
                console.log('response', response);
                if (response.success) {
                    vm.sendForm.id = response.data.id;
                }
            });
        }
    }
})();
