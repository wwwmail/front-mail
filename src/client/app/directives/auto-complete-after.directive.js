(function () {
    'use strict';

    angular
        .module('app.directives')
        .directive('autoCompleteAfter', autoCompleteAfter);

    autoCompleteAfter.$inject = ['$compile', '$timeout', '$templateRequest'];

    /* @ngInject */
    function autoCompleteAfter($compile, $timeout, $templateRequest) {
        var directive = {
            require: '^autoComplete',
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element, attrs, autoComplete) {
            console.log('autoComplete', autoComplete.registerAutocompleteMatch.suggestionList);
            console.log('scope', scope);

            // element.click(function () {
                $templateRequest("autocomplete-template-footer").then(function(html){
                    var compileHtml = $compile(html);
                    pasteHtml(compileHtml(scope));
                });
            // });

            function pasteHtml(html) {
                $timeout(function () {
                    $('.suggestion-list').append(html);
                }, 250);
            }
        }
    }

})();
