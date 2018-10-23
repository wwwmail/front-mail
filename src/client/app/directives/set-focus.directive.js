(function () {
    'use strict';

    angular
        .module('app.directives')
        .directive('setFocus', setFocus);

    setFocus.$inject = ['$timeout'];

    /* @ngInject */
    function setFocus($timeout) {
        var directive = {
            link: link,
            restrict: 'A',
            scope: true
        };
        return directive;

        function link(scope, element, attrs) {
            if(attrs.setFocus !== false) {
                var timeout = 250;
                var focus = true;

                console.log(focus);

                if (attrs.setFocus) {
                    focus = scope.$eval(attrs.setFocus);
                }

                if (focus) {
                    $timeout(function () {
                        element[0].focus();
                    }, timeout);
                }
            }
        }
    }

})();
