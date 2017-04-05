(function () {
    'use strict';

    angular
        .module('app.layout')
        .controller('MenuMainController', MenuMainController);

    MenuMainController.$inject = [];

    /* @ngInject */
    function MenuMainController() {
        var vm = this;
        vm.title = 'Menu';
    }
})();
