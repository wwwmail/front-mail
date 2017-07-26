(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('SearchContactController', SearchContactController);

    SearchContactController.$inject = ['$scope', '$rootScope', 'tag', 'mailBox', '$state', '$translate'];
    /* @ngInject */
    function SearchContactController($scope, $rootScope, tag, mailBox, $state, $translate) {
        var vm = this;

        vm.searchForm = {
            model: {}
        };

        vm.search = search;
        vm.onSearchChange = onSearchChange;

        ////

        activate();

        function activate() {}

        function search() {
            $rootScope.$broadcast('contact:search', {
                search: vm.searchForm.model.q
            });
        }

        function onSearchChange() {
            search();
        }
    }
})();
