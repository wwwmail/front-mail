(function () {
    'use strict';

    angular
        .module('app.directives')
        .directive('photoswipeInfo', photoswipeInfo);

    photoswipeInfo.$inject = ['$compile', '$timeout', '$templateRequest'];

    /* @ngInject */
    function photoswipeInfo($compile, $timeout, $templateRequest) {
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element, attrs) {
            console.log('scope', scope);

            var html = "<div><button>{{ 'PRINT' | translate }}</button><button>{{ 'DONWLOAD' | translate }}</button></div>";

            scope.$watch('vm.slidesFormatted', function () {
                console.log('element', element.find('.pswp__ui-custom'));
                element.find('.pswp__ui-custom').html($compile(html)(scope));
            });
        }
    }

})();
