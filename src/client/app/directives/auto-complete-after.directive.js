(function () {
    'use strict';

    angular
        .module('app.directives')
        .directive('autoCompleteAfter', autoCompleteAfter);

    autoCompleteAfter.$inject = ['$compile', '$timeout', '$templateRequest'];

    /* @ngInject */
    function autoCompleteAfter($compile, $timeout, $templateRequest) {
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element, attrs) {
            var compileHtml;

            $templateRequest("autocomplete-template-footer").then(function(html){
                compileHtml = $compile(html);
            });

            scope.$watch('$$childHead.suggestionList.visible', function (data, oldData) {
                if (data) {
                    pasteHtml(compileHtml(scope));
                }
            });

            function pasteHtml(html) {
                $timeout(function () {
                    element.find('.suggestion-list').append(html);
                });
            }
        }
    }

})();
