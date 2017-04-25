(function () {
    'use strict';

    angular
        .module('app.layout')
        .controller('MenuContactsController', MenuContactsController);

    MenuContactsController.$inject = [];

    /* @ngInject */
    function MenuContactsController() {
        var vm = this;
        vm.title = 'Menu';
    }
})();
