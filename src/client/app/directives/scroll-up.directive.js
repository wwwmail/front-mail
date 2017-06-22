(function () {
    'use strict';

    angular
        .module('app.directives')
        .directive('scrollUp', scrollUp);

    scrollUp.$inject = ['$window'];

    /* @ngInject */
    function scrollUp($window) {
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element, attrs) {
            element.bind('click', function () {
                $window.scrollTo(0, 0);
            });

            angular.element($window).bind("scroll", function() {
                if (this.pageYOffset >= 60) {
                    $('.btn--page-up').addClass('btn--page-up--active');
                } else {
                    $('.btn--page-up').removeClass('btn--page-up--active');
                }
            });
        }
    }

})();
