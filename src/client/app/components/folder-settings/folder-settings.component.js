(function () {
    'use strict';

    angular
        .module('app.components')
        .component('folderSettings', {
            bindings: {
                messages: '='
            },
            templateUrl: 'app/components/folder-settings/folder-settings.html',
            controller: 'FolderSettingsController',
            controllerAs: 'vm'
        });
})();