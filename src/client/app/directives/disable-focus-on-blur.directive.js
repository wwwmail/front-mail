(function () {
    'use strict';

    angular
        .module('app.directives')
        .directive('disableFocusOnBlur', disableFocusOnBlur);

    disableFocusOnBlur.$inject = ['$timeout'];

    /* @ngInject */
    function disableFocusOnBlur($timeout) {
        var directive = {
            require: "tagsInput",
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element, attrs, tagsInputCtrl) {
            $( "body" ).on( "input-blur", function() {
                // console.log( $( this ).text() );
            });
        }
    }

})();
