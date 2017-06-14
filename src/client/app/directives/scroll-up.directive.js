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
                console.log('scroll', this.pageYOffset);
                if (this.pageYOffset >= 60) {
                    $('.inbox-header__button-up').addClass('inbox-header__button-up--active');
                } else {
                    $('.inbox-header__button-up').removeClass('inbox-header__button-up--active');
                }
            });
        }
    }

})();
