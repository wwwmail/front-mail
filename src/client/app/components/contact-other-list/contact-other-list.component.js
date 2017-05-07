(function () {
    'use strict';

    angular
        .module('app.components')
        .component('contactOtherList', {
            bindings: {},
            templateUrl: 'app/components/contact-other-list/contact-other-list.html',
            controller: 'ContactOtherListController',
            controllerAs: 'vm'
        });
})();