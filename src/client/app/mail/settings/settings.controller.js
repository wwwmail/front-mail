(function () {
    'use strict';

    angular
        .module('mail.settings')
        .controller('SettingsController', SettingsController);

    SettingsController.$inject = [];
    /* @ngInject */
    function SettingsController() {
        var vm = this;
    }
})();
