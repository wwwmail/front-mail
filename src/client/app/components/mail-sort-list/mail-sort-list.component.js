(function () {
    'use strict';

    angular
        .module('app.components')
        .component('mailSortList', {
            bindings: {
                messages: '='
            },
            templateUrl: 'app/components/mail-sort-list/mail-sort-list.html',
            controller: 'MailSortListController',
            controllerAs: 'vm'
        });
})();