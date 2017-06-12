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
            scope.setPosition = setPosition;

            function minimize() {
                var $el = element.offsetParent().offsetParent().offsetParent();

                if (!isMinimized) {
                    $timeout(function () {
                        angular.element($el).addClass('popup--compose-is-modify');
                        angular.element($el).addClass('popup--compose-minimized');

                        if (isCollapsed) {
                            angular.element($el).removeClass('popup--compose-collapsed');
                            isCollapsed = false;
                        }

                        $('.modal-backdrop').css('display', 'none');
                    }, 50);
                    isMinimized = true;
                    setPosition();
                } else {
                    $timeout(function () {
                        angular.element($el).removeClass('popup--compose-minimized');

                        if (!isMinimized && !isCollapsed) {
                            angular.element($el).removeClass('popup--compose-is-modify');
                        }

                        $('.modal-backdrop').css('display', 'block');
                    }, 50);
                    isMinimized = false;
                    setPosition();
                }
            }

            function collapse() {
                var $el = element.offsetParent().offsetParent().offsetParent();

                if (!isCollapsed) {
                    $timeout(function () {
                        console.log('$el', $el);
                        angular.element($el).addClass('popup--compose-is-modify');
                        angular.element($el).addClass('popup--compose-collapsed');
                        angular.element($el).removeClass('popup--compose-minimized');

                        if (isMinimized) {
                            angular.element($el).removeClass('popup--compose-minimized');
                            isMinimized = false;
                        }

                        $('.modal-backdrop').css('display', 'none');
                    }, 50);
                    isCollapsed = true;
                    setPosition();
                } else {
                    $timeout(function () {
                        angular.element($el).removeClass('popup--compose-collapsed');

                        if (isMinimized) {
                            angular.element($el).addClass('popup--compose-minimized');
                            isMinimized = false;
                        }

                        if (!isMinimized && !isCollapsed) {
                            angular.element($el).removeClass('popup--compose-is-modify');
                        }

                        $('.modal-backdrop').css('display', 'block');
                    }, 50);
                    isCollapsed = false;
                    setPosition();
                }
            }

            function setPosition() {
                var position = 0;
                $timeout(function () {
                    $('.popup--compose-is-modify').each(function () {
                        console.log('el', $(this));
                        $(this).css({'right': position});
                        position += ($(this).width() + 10);
                    });
                }, 50);
            }
        }
    }

})();
