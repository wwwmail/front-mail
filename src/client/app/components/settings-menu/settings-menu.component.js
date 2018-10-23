(function () {
    'use strict';

    angular
        .module('app.components')
        .component('settingsMenu', {
            bindings: {
                onClose: '&?'
            },
            templateUrl: 'app/components/settings-menu/settings-menu.html',
            controller: 'SettingsMenuController',
            controllerAs: 'vm'
        });
})();