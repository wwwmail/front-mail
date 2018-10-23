(function () {
    'use strict';

    angular
        .module('app.components')
        .component('tagSettings', {
            bindings: {
                messages: '='
            },
            templateUrl: 'app/components/tag-settings/tag-settings.html',
            controller: 'TagSettingsController',
            controllerAs: 'vm'
        });
})();