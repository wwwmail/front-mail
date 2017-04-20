(function () {
    'use strict';

    angular
        .module('app.components')
        .component('avatarName', {
            bindings: {},
            templateUrl: 'app/components/avatar-name/avatar-name.html',
            controller: 'AvatarNameController',
            controllerAs: 'vm'
        });
})();