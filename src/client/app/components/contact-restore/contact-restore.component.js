(function () {
    'use strict';

    angular
        .module('app.components')
        .component('contactRestore', {
            bindings: {
                onClose: '&'
            },
            templateUrl: 'app/components/contact-restore/contact-restore.html',
            controller: 'ContactRestoreController',
            controllerAs: 'vm'
        });
})();