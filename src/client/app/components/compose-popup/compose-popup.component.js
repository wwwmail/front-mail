(function () {
    'use strict';

    angular
        .module('app.components')
        .component('composePopup', {
            bindings: {
                onClose: '&'
            },
            templateUrl: 'app/components/compose-popup/compose-popup.html',
            controller: 'ComposePopupController',
            controllerAs: 'vm'
        });
})();