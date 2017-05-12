(function () {
    'use strict';

    angular
        .module('app.directives')
        .directive('uiSelectChoicesStatic', uiSelectChoicesStatic);

    uiSelectChoicesStatic.$inject = ['$compile', '$timeout'];

    /* @ngInject */
    function uiSelectChoicesStatic($compile, $timeout) {
        var directive = {
            link: link,
            restrict: 'EA',
            scope: true
        };
        return directive;

        function link(scope, element, attrs) {
            var html = element.html();
            // element.html('');

            var compileHtml = $compile(html);

            pasteHtml(compileHtml(scope));

            function pasteHtml(html) {
                $timeout(function () {
                    $('.ui-select-choices-group').append(html);
                }, 250);
            }


        }
    }

})();
