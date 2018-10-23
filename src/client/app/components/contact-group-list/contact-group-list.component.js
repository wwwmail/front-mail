(function () {
    'use strict';

    angular
        .module('app.components')
        .component('contactGroupList', {
            bindings: {
                contacts: '='
            },
            templateUrl: 'app/components/contact-group-list/contact-group-list.html',
            controller: 'ContactGroupListController',
            controllerAs: 'vm'
        });
})();