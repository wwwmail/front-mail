(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('AttachItemController', AttachItemController);

    AttachItemController.$inject = ['$scope'];
    /* @ngInject */
    function AttachItemController($scope) {
        var vm = this;

        activate();

        function activate() {
            console.log('attach', vm.attach);
        }
    }
})();
