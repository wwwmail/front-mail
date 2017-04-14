(function () {
    'use strict';

    angular
        .module('settings.accounts')
        .controller('AccountsController', AccountsController);

    AccountsController.$inject = [];
    /* @ngInject */
    function AccountsController() {
        var vm = this;
    }
})();
