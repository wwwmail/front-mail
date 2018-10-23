(function () {
    'use strict';

    angular
        .module('app.components')
        .component('timeSend', {
            bindings: {
                sdate: '=',
                onClose: '&?'
            },
            templateUrl: 'app/components/time-send/time-send.html',
            controller: 'TimeSendController',
            controllerAs: 'vm'
        });
})();