(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('UserMenuController', UserMenuController);

    UserMenuController.$inject = [];
    /* @ngInject */
    function UserMenuController() {
        var vm = this;

        vm.name = "Example component"
    }
})();
