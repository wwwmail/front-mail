(function () {
    'use strict';

    angular
        .module('help.main')
        .controller('HelpController', HelpController);

    HelpController.$inject = ['help'];
    /* @ngInject */
    function HelpController(help) {
        var vm = this;

        vm.help = {
            list: []
        };

        activate();

        function activate() {
            help.get().then(function (response) {
                vm.help.list = response.data;
                vm.help.selected = vm.help.list[0];
                console.log('help', vm.help);
            });
        }
    }
})();
