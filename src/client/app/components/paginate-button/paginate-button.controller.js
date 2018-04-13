(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('PaginateButtonController', PaginateButtonController);

    PaginateButtonController.$inject = ['$scope', '$http'];
    /* @ngInject */
    function PaginateButtonController($scope, $http) {
        var vm = this;

        vm.get = get;

        activate();

        function activate() {
        }

        function get(url) {
            vm.isLoading = true;
            $http.get(url).then(function(response) {
                vm.isLoading = false;
                vm.data.items = vm.data.items.concat(response.data.data.items);
                vm.data._links = response.data.data._links;
                vm.data._meta = response.data.data._meta;
            });
        }
    }
})();
