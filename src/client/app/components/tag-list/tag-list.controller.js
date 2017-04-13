(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('TagListController', TagListController);

    TagListController.$inject = ['$auth', '$state'];
    /* @ngInject */
    function TagListController($auth, $state) {
        var vm = this;

        vm.tags = {};
    }
})();
