(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('BlackListController', BlackListController);

    BlackListController.$inject = ['$auth'];
    /* @ngInject */
    function BlackListController($auth) {
        var vm = this;

        vm.add = add;

        activate();

        function activate() {
            vm.user = $auth.user;
        }
        
        function add() {
            
        }
    }
})();
