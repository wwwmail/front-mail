(function () {
    'use strict';

    angular
        .module('app.components')
        .component('emlPopup', {
            bindings: {
                message: '=',
                onCancel: '&?',
                onClose: '&?'
            },
            templateUrl: 'app/components/eml-popup/eml-popup.html',
            controller: 'EmlPopupController',
            controllerAs: 'vm'
        });
})();