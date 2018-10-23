(function () {
    'use strict';

    angular
        .module('app.directives')
        .directive('logoHover', logoHover);

    logoHover.$inject = ['CONFIG'];

    /* @ngInject */
    function logoHover(CONFIG) {
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element, attrs) {
            element.hover(function () {
                attrs.$set("src", '/images/domains/' + CONFIG.domainZone + '/logo-mail-light.svg');
            }, function () {
                attrs.$set("src", '/images/domains/' + CONFIG.domainZone + '/logo-mail-white.svg');
            });
        }
    }

})();
