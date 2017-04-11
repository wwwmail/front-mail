(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('InboxMessageListController', InboxMessageListController);

    InboxMessageListController.$inject = ['$scope', 'mail'];
    /* @ngInject */
    function InboxMessageListController($scope, mail) {
        var vm = this;

        // $scope.$watch('vm.messages.data', function (data, oldData) {
        //     if (data && data.length) {
        //
        //     }
        // }, true);

        activate();

        function activate() {
        }

    }
})();
