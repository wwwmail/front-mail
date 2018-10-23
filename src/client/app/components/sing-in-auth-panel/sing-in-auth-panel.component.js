(function () {
    'use strict';

    angular
        .module('app.components')
        .component('singInAuthPanel', {
            bindings: {
                data: '=',
                onClose: '&?'
            },
            templateUrl: 'app/components/sing-in-auth-panel/sing-in-auth-panel.html',
            controller: 'SingInAuthPanelController',
            controllerAs: 'vm'
        });
})();