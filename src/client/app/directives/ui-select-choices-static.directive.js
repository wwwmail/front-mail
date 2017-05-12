(function () {
    'use strict';

    angular
        .module('app.directives')
        .directive('uiSelectChoicesStatic', uiSelectChoicesStatic);

    uiSelectChoicesStatic.$inject = [];

    /* @ngInject */
    function uiSelectChoicesStatic() {
        var directive = {
            link: link,
            restrict: 'AE',
            scope: true
        };
        return directive;

        function link(scope, element, attrs) {
            console.log('static -el', element.hide());
        }
    }

})();
