(function () {
    'use strict';

    angular
        .module('app.components')
        .component('contactEmails', {
            bindings: {
                emails: '='
            },
            templateUrl: 'app/components/contact-emails/contact-emails.html',
            controller: 'ContactEmailsController',
            controllerAs: 'vm'
        });
})();