(function () {
    'use strict';

    angular
        .module('app.directives')
        .directive('whenScrolled', whenScrolled);

    whenScrolled.$inject = [];
    /* @ngInject */
    function whenScrolled() {
        var directive = {
            link: link,
            restrict: 'EA'
        };
        return directive;

        function link(scope, element, attrs) {

            var raw = element[0];

            element.bind('scroll', function () {
                var position = attrs.whenScrolledPosition * 10;

                position = (raw.offsetHeight * position) / 100;

                if (raw.scrollTop + (raw.offsetHeight + position) >= raw.scrollHeight) {
                    scope.$apply(attrs.whenScrolled);
                }
            });
        }
    }
})();
