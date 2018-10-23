(function () {
    'use strict';

    angular
        .module('help.main')
        .controller('HelpController', HelpController);

    HelpController.$inject = ['help', '$scope', '$state', '$rootScope'];
    /* @ngInject */
    function HelpController(help, $scope, $state, $rootScope) {
        var vm = this;

        // console.log($state);

        vm.searchForm = {
            model: {}
        };

        vm.help = {
            list: []
        };

        vm.select = select;
        vm.openMenu = openMenu;

        $scope.$on('help:search', function (e, data) {
            search(data.search);
        });

        activate();

        function activate() {
            help.get().then(function (response) {
                vm.help.list = response.data;
                // console.log('help', vm.help);
            });
        }

        function select(item) {
            vm.help.selected = item;
        }
        
        function openMenu(help) {
            _.forEach(vm.help.list, function (item) {
                if (help !== item) {
                    item.isActive = false;
                }

            });
            help.isActive = !help.isActive;
        }
        
        function search(q) {
            // console.log('data', q);
            vm.searchForm.model.q = q
        }
    }
})();
