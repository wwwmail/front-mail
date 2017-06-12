(function () {
    'use strict';

    angular
        .module('app.directives')
        .directive('composeCollapsed', composeCollapsed);

    composeCollapsed.$inject = ['$sce', '$compile', '$timeout', '$templateRequest'];

    /* @ngInject */
    function composeCollapsed($sce, $compile, $timeout, $templateRequest) {
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element, attrs) {

            var isMinimize = false;

            element.click(function (e) {
                var $el = element.offsetParent().offsetParent().offsetParent().offsetParent();

                if (!isMinimize) {
                    $timeout(function () {
                        angular.element($el).addClass('popup--compose-minimized');
                        $('.modal-backdrop').css('display', 'none');
                    }, 250);
                    isMinimize = true;
                    setPosition();
                    return;
                }

                $timeout(function () {
                    angular.element($el).removeClass('popup--compose-minimized');
                    $('.modal-backdrop').css('display', 'block');
                }, 250);
                isMinimize = false;
                setPosition();
            });

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
