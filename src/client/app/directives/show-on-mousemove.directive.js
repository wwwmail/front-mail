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
            $(function () {
                console.log('scope', scope);

                var $addSigh = element.closest(".compose").find('.compose__add-signature');
                var $messageTextarea = element.closest(".compose").find(".message-textarea");
                var $noteEditableSign = element.closest(".compose").find(".note-editable--sign");
                var intervalValulue;
                var isHover = false;

                $messageTextarea.mousemove(function (event) {
                    $addSigh.css({"opacity": "1", "transition": "opacity 1s;"});
                    intervalValulue = setTimeout(function () {
                        if (!isHover) {
                            $addSigh.css({"opacity": "0", "transition": "opacity 1s;"});
                        }
                    }, 2000);
                });

                console.log('$addSigh', $addSigh);
                console.log('$addSigh text', $addSigh.html());
                console.log('$noteEditableSign', $noteEditableSign);

                $addSigh.hover(function () {
                    isHover = true;
                }, function () {
                    isHover = false;
                });

                scope.$watch(function () {
                    return scope.vm.sendForm.model.body;
                }, function (value, oldValue) {
                    console.log('value', value);
                    setSignPosition();
                }, true);

                function setSignPosition() {
                    var position = element.closest(".compose").find(".note-editable--sign").offset();
                    console.log(position);

                    if (position) {
                        element.offset({top: (position.top + 4)});
                    }
                }
            });
        }
    }

})();
