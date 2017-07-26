(function () {
    'use strict';

    angular
        .module('app.components')
        .component('contactItemList', {
            bindings: {
                search: '=?',
                contacts: '='
            },
            templateUrl: 'app/components/contact-item-list/contact-item-list.html',
            controller: 'ContactItemListController',
            controllerAs: 'vm'
        });
})();