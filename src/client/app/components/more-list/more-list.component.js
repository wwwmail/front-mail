(function () {
    'use strict';

    angular
        .module('app.components')
        .component('moreList', {
            bindings: {
                messages: '=',
                isSeen: '=?',
                triggerSeen: '&?'
            },
            templateUrl: 'app/components/more-list/more-list.html',
            controller: 'MoreListController',
            controllerAs: 'vm'
        });
})();