(function () {
    'use strict';

    angular
        .module('app.components')
        .component('storagePopup', {
            bindings: {
                onClose: '&'
            },
            templateUrl: 'app/components/storage-popup/storage-popup.html',
            controller: 'StoragePopupController',
            controllerAs: 'vm'
        });
})();