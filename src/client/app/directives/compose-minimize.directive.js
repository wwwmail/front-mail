(function () {
    'use strict';

    angular
        .module('app.directives')
        .directive('composeMinimize', composeMinimize);

    composeMinimize.$inject = ['$sce', '$compile', '$timeout', '$templateRequest'];

    /* @ngInject */
    function composeMinimize($sce, $compile, $timeout, $templateRequest) {
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
                        angular.element($el).addClass('popup--compose-mini');
                        $('.modal-backdrop').css('display', 'none');
                    }, 250);
                    isMinimize = true;
                    return;
                }

                $timeout(function () {
                    angular.element($el).removeClass('popup--compose-mini');
                    $('.modal-backdrop').css('display', 'block');
                    isMinimize = false;
                }, 250);
            });
            
            function setPosition() {
                $('.popup--compose-mini').forEach(function (e) {

                });
            }
        }
    }

})();
