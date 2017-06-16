(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('SettingsMenuController', SettingsMenuController);

    SettingsMenuController.$inject = ['$translatePartialLoader', '$translate'];
    /* @ngInject */
    function SettingsMenuController($translatePartialLoader, $translate) {
        var vm = this;

        $translatePartialLoader.addPart('layout/menu-settings');
        $translate.refresh();
    }
})();
