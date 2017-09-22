(function () {
    'use strict';

    angular
        .module('app.directives')
        .directive('logoHover', logoHover);

    logoHover.$inject = [];

    /* @ngInject */
    function logoHover() {
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element, attrs) {
            element.hover(function () {
                attrs.$set("src", '/images/logo-mailcz-light.svg');
            }, function () {
                attrs.$set("src", '/images/logo-mailcz-white.svg');
            });
        }
    }

})();
