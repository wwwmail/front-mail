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

            element.click(function (e) {
                var $el = element.offsetParent().offsetParent().offsetParent().offsetParent();

                $timeout(function () {
                    angular.element($el).addClass('popup--compose-mini');
                    $('.modal-backdrop').css('display', 'none');
                }, 250);
            });
        }
    }

})();
