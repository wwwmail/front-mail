(function () {
    'use strict';

    angular
        .module('app.layout')
        .controller('MenuController', MenuController);

    MenuController.$inject = [];

    /* @ngInject */
    function MenuController() {
        var vm = this;
        vm.title = 'Menu';
    }
})();
