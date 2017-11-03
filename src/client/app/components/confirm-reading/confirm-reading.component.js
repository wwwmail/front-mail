(function () {
    'use strict';

    angular
        .module('app.components')
        .component('confirmReading', {
            bindings: {
                message: '=?',
                onClose: '&?',
                onCancel: '&?'
            },
            templateUrl: 'app/components/confirm-reading/confirm-reading.html',
            controller: 'ConfirmReadingController',
            controllerAs: 'vm'
        });
})();