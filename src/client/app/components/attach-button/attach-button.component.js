(function () {
    'use strict';

    angular
        .module('app.components')
        .component('attachButton', {
            bindings: {
                data: '='
            },
            templateUrl: 'app/components/attach-button/attach-button.html',
            controller: 'AttachButtonController',
            controllerAs: 'vm'
        });
})();