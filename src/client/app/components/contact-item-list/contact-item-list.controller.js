(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('ContactItemListController', ContactItemListController);

    ContactItemListController.$inject = ['$rootScope'];
    /* @ngInject */
    function ContactItemListController($rootScope) {
        var vm = this;

        activate();

        function activate() {

        }
    }
})();
