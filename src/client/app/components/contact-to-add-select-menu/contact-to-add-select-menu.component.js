(function () {
    'use strict';

    angular
        .module('app.components')
        .component('contactToAddSelectMenu', {
            bindings: {
                tag: '=',
                addresses: '=',
                onRemove: '&'
            },
            templateUrl: 'app/components/contact-to-add-select-menu/contact-to-add-select-menu.html',
            controller: 'ContactToAddSelectMenuController',
            controllerAs: 'vm'
        });
})();