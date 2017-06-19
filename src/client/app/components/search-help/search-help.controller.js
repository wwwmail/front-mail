(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('SearchHelpController', SearchHelpController);

    SearchHelpController.$inject = ['$scope', '$rootScope', 'tag', 'mailBox', '$state', '$translate'];
    /* @ngInject */
    function SearchHelpController($scope, $rootScope, tag, mailBox, $state, $translate) {
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
            $rootScope.$broadcast('help:search', {
                search: vm.searchForm.model.q
            });
        }

        function onSearchChange() {
            search();
        }
    }
})();
