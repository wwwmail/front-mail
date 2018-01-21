(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('InboxMessageViewListController', InboxMessageViewListController);

    InboxMessageViewListController.$inject = ['$scope', 'mail'];
    /* @ngInject */
    function InboxMessageViewListController($scope, mail) {
        var vm = this;

        activate();

        function activate() {

        }

    }
})();
