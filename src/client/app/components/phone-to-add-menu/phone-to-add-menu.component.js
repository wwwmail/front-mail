(function () {
    'use strict';

    angular
        .module('app.components')
        .component('phoneToAddMenu', {
            bindings: {
                tag: '=',
                phones: '=',
                onRemove: '&'
            },
            templateUrl: 'app/components/phone-to-add-menu/phone-to-add-menu.html',
            controller: 'PhoneToAddMenuController',
            controllerAs: 'vm'
        });
})();