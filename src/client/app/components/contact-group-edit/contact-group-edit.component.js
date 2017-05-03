(function () {
    'use strict';

    angular
        .module('app.components')
        .component('contactGroupEdit', {
            bindings: {
                onClose: '&',
                model: '='
            },
            templateUrl: 'app/components/contact-group-edit/contact-group-edit.html',
            controller: 'ContactGroupEditController',
            controllerAs: 'vm'
        });
})();