(function () {
    'use strict';

    angular
        .module('app.components')
        .component('infoSenderMenu', {
            bindings: {
                to: '=',
                onClose: '&?'
            },
            templateUrl: 'app/components/info-sender-menu/info-sender-menu.html',
            controller: 'InfoSenderMenuController',
            controllerAs: 'vm'
        });
})();