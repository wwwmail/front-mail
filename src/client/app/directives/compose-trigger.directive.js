(function () {
    'use strict';

    angular
        .module('app.directives')
        .directive('composeTrigger', composeTrigger);

    composeTrigger.$inject = ['$sce', '$compile', '$timeout', '$templateRequest'];

    /* @ngInject */
    function composeTrigger($sce, $compile, $timeout, $templateRequest) {
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element, attrs) {
            var isMinimized = false;
            var isCollapsed = false;

            scope.minimize = minimize;
            scope.collapse = collapse;

            function minimize() {
                var $el = element.offsetParent().offsetParent().offsetParent();

                if (!isMinimized) {
                    $timeout(function () {
                        angular.element($el).addClass('popup--compose-minimized');
                        // angular.element($el).removeClass('popup--compose-minimized');
                        $('.modal-backdrop').css('display', 'none');
                    }, 250);
                    isMinimized = true;
                    setPosition();
                } else {
                    $timeout(function () {
                        angular.element($el).removeClass('popup--compose-minimized');
                        $('.modal-backdrop').css('display', 'block');
                    }, 250);
                    isMinimized = false;
                    setPosition();
                }
            }

            function collapse() {
                var $el = element.offsetParent().offsetParent().offsetParent();

                if (!isCollapsed) {
                    $timeout(function () {
                        console.log('$el', $el);
                        angular.element($el).addClass('popup--compose-collapsed');
                        // angular.element($el).removeClass('popup--compose-minimized');
                        $('.modal-backdrop').css('display', 'none');
                    }, 250);
                    isCollapsed = true;
                    setPosition();
                }

                $timeout(function () {
                    angular.element($el).removeClass('popup--compose-collapsed');
                    $('.modal-backdrop').css('display', 'block');
                }, 250);
                isCollapsed = false;
                setPosition();
            }

            function setPosition() {
                var position = 0;
                $timeout(function () {
                    $('.popup--compose-mini').each(function () {
                        console.log('el', $(this));
                        $(this).css({'right': position});
                        position += 590;
                    });
                }, 250);
            }
        }
    }

})();
