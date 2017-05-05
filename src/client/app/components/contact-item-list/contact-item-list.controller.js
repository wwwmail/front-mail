(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('ContactItemListController', ContactItemListController);

    ContactItemListController.$inject = [];
    /* @ngInject */
    function ContactItemListController() {
        var vm = this;

        activate();

        function activate() {

        }
    }
})();
