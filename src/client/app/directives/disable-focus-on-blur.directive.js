(function () {
    'use strict';

    angular
        .module('app.directives')
        .directive('disableFocusOnBlur', disableFocusOnBlur);

    disableFocusOnBlur.$inject = ['$rootScope', '$timeout'];

    /* @ngInject */
    function disableFocusOnBlur($rootScope, $timeout) {
        var directive = {
            require: "tagsInput",
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element, attrs, tagsInputCtrl) {

        }
    }

})();
