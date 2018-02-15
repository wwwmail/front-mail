(function () {
    'use strict';

    angular
        .module('app.components')
        .component('messageAvatar', {
            bindings: {
                message: '=',
                classNames: '@?',
                sizeAvatar: '@?'
            },
            templateUrl: 'app/components/message-avatar/message-avatar.html',
            controller: 'MessageAvatarController',
            controllerAs: 'vm'
        });
})();
