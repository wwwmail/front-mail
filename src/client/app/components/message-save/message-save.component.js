(function () {
    'use strict';

    angular
        .module('app.components')
        .component('messageSave', {
            bindings: {
                onClose: '&',
                onCancel: '&'
            },
            templateUrl: 'app/components/message-save/message-save.html',
            controller: 'MessageSaveController',
            controllerAs: 'vm'
        });
})();