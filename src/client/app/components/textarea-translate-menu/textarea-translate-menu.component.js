(function () {
    'use strict';

    angular
        .module('app.components')
        .component('textareaTranslateMenu', {
            bindings: {
                translateFrom: '=',
                translateTo: '='
            },
            templateUrl: 'app/components/textarea-translate-menu/textarea-translate-menu.html',
            controller: 'TextareaTranslateMenuController',
            controllerAs: 'vm'
        });
})();