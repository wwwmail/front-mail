(function () {
    'use strict';

    angular
        .module('app.directives')
        .directive('searchMailOpen', searchMailOpen);

    searchMailOpen.$inject = ['$rootScope'];

    /* @ngInject */
    function searchMailOpen($rootScope) {
        var directive = {
            link: link,
            restrict: 'A',
            scope: true
        };
        return directive;

        function link(scope, element, attrs) {
            console.log('scope', scope.searchForm);

            scope.isOpen = false;

            scope.open = open;
            scope.close = close;

            function open() {
                scope.isOpen = true;
                hideMenu();

                element.addClass('search-mail--open');

                // var $searchMailInput = angular.element(document.querySelector('.search-mail__input'));
                // $searchMailInput.css({
                //     'width': '100%',
                //     'transition': 'width .2s linear'
                // });
            }

            function close() {
                scope.isOpen = false;

                element.removeClass('search-mail--open');

                // var $searchMailInput = angular.element(document.querySelector('.search-mail__input'));
                // $searchMailInput.css({
                //     'width': '188px',
                //     'transition': 'width .0s linear'
                // });

                showMenu();
            }

            function showMenu() {
                var $headerNavigation = angular.element(document.querySelector('.header__navigation'));
                $headerNavigation.css({'display': 'block'});

                $rootScope.$broadcast('search:close', {});
            }

            function hideMenu() {
                var element = angular.element(document.querySelector('.header__navigation'));
                element.css({'display': 'none'});
            }
        }
    }

})();
