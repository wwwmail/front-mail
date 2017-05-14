(function () {
    'use strict';

    angular
        .module('app.components')
        .component('templateList', {
            bindings: {
                onSave: '&'
            },
            templateUrl: 'app/components/template-list/template-list.html',
            controller: 'TemplateListController',
            controllerAs: 'vm'
        });
})();