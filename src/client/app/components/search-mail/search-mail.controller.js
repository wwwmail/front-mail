(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('SearchMailController', SearchMailController);

    SearchMailController.$inject = ['$rootScope'];
    /* @ngInject */
    function SearchMailController($rootScope) {
        var vm = this;

        vm.searchForm = {
            model: {}
        };

        vm.title = "Search component";

        vm.search = search;

        function search() {
            $rootScope.$broadcast('search:mail', {search: vm.searchForm.model.search});
        }
    }
})();
