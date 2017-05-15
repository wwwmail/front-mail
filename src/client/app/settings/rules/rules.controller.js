(function () {
    'use strict';

    angular
        .module('settings.rules')
        .controller('RulesController', RulesController);

    RulesController.$inject = ['$state', 'sieve'];
    /* @ngInject */
    function RulesController($state, sieve) {
        var vm = this;

        vm.$state = $state;

        vm.sieve = {
            items: []
        };

        activate();

        function activate() {

            if (vm.$state.params.id) {
                return
            }


            get();
        }

        function get() {
            sieve.get().then(function (response) {
                vm.sieve.items = response.data;
            });
        }



        function remove() {

        }

        function enableTrigger() {

        }
    }
})();
