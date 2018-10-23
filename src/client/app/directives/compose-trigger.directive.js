(function () {
    'use strict';

    angular
        .module('app.directives')
        .directive('composeTrigger', composeTrigger);

    composeTrigger.$inject = ['$rootScope', '$timeout'];

    /* @ngInject */
    function composeTrigger($rootScope, $timeout) {
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element, attrs) {
            var isMinimized = true;
            var isCollapsed = false;

            scope.minimize = minimize;
            scope.collapse = collapse;
            scope.setPosition = setPosition;
            scope.close = close;

            minimize();

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

                        // $('.modal-backdrop').css('display', 'none');
                    }, 50);
                    isMinimized = true;
                    setPosition();
                } else {
                    $timeout(function () {
                        angular.element($el).removeClass('popup--compose-minimized');

                        if (!isMinimized && !isCollapsed) {
                            angular.element($el).removeClass('popup--compose-is-modify');
                        }

                        angular.element($el).css({'right': 0, 'z-index': '1050'});
                        // angular.css({'display': 'block', 'z-index': '1050'});

                        // $('.modal-backdrop').css({'display': 'block', 'z-index': '1050'});
                    }, 50);
                    isMinimized = false;
                    setPosition();
                }

                if (isMinimized || isCollapsed) {
                    angular.element($el).removeClass('popup--compose-is-full');
                    $('.modal-backdrop').css('display', 'none');
                } else {
                    angular.element($el).addClass('popup--compose-is-full');
                    $('.modal-backdrop').css({'display': 'block', 'z-index': '1049'});
                }

                $timeout(function () {
                    $el.removeClass('hide');
                }, 50);
            }

            function collapse() {
                var $el = element.offsetParent().offsetParent().offsetParent();

                if (!isCollapsed) {
                    $timeout(function () {
                        angular.element($el).addClass('popup--compose-is-modify');
                        angular.element($el).addClass('popup--compose-collapsed');
                        angular.element($el).removeClass('popup--compose-minimized');

                        if (isMinimized) {
                            angular.element($el).removeClass('popup--compose-minimized');
                            isMinimized = false;
                        }

                        // $('.modal-backdrop').css('display', 'none');
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

                        angular.element($el).css({'right': 0, 'z-index': '1050'});
                    }, 50);
                    isCollapsed = false;
                    setPosition();
                }

                if (isMinimized || isCollapsed) {
                    angular.element($el).removeClass('popup--compose-is-full');
                } else {
                    angular.element($el).addClass('popup--compose-is-full');
                }
            }

            function setPosition() {
                var position = 0;
                $timeout(function () {
                    $('.popup--compose-is-modify').each(function (i) {
                        $(this).css({'right': position, 'z-index': '1040', 'visibility': 'visible'});
                        position += ($(this).width() + 10);
                        if (i > 2) {
                            $(this).css({'visibility': 'hidden'});
                        }
                    });
                }, 50);

                $timeout(function () {
                    if (!$('.popup').is('.popup--compose-is-full')) {
                        $('.modal-backdrop').css('display', 'none');
                    } else {
                        $('.modal-backdrop').css({'display': 'block', 'z-index': '1048'});
                    }
                }, 50);
            }

            function close() {
            }
        }
    }

})();
