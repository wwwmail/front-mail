(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('SearchController', SearchController);

    SearchController.$inject = [];
    /* @ngInject */
    function SearchController() {
        var vm = this;

        vm.title = "Search component"
    }
})();
