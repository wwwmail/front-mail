(function () {
    'use strict';

    angular.module('mail', [
        'mail.inbox',
        'mail.settings',
        'mail.compose',
        'mail.message',
        'mail.tags'
    ]);
})();