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

        vm.select = select;
        vm.openMenu = openMenu;

        activate();

        function activate() {
            help.get().then(function (response) {
                vm.help.list = response.data;
                console.log('help', vm.help);
            });
        }

        function select(item) {
            vm.help.selected = item;
        }
        
        function openMenu(help) {
            _.forEach(vm.help.list, function (item) {
                item.isActive = false;
            });
            help.isActive = true;
        }
    }
})();
