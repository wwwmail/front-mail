(function () {
    'use strict';

    angular
        .module('app.directives')
        .directive('showOnMousemove', showOnMousemove);

    showOnMousemove.$inject = ['$compile', '$timeout', '$templateRequest'];

    /* @ngInject */
    function showOnMousemove($compile, $timeout, $templateRequest) {
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element, attrs) {
            var $addSigh = $('.compose__add-signature');
            var intervalValulue;
            var isHover = false;

            $(function () {
                // $addSigh.css({"opacity": "0", "transition": "opacity 1s;"});

                $(".message-textarea").mousemove(function (event) {
                    $addSigh.css({"opacity": "1", "transition": "opacity 1s;"});
                    intervalValulue = setTimeout(function () {
                        if (!isHover) {
                            $addSigh.css({"opacity": "0", "transition": "opacity 1s;"});
                        }
                    }, 2000);
                });

                $addSigh.hover(function () {
                    isHover = true;
                }, function () {
                    isHover = false;
                });
            });
        }
    }

})();
