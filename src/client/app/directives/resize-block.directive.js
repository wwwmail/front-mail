(function () {
    'use strict';
    angular
        .module('app.directives')
        .directive('resizeBlock', resizeBlock);

    resizeBlock.$inject = ['$timeout'];

    /* @ngInject */
    function resizeBlock() {
        var directive = {
            link: link,
            restrict: 'A',
            scope: false
        };

        var adrConfig = {
            iconPosition: [0, 0],
            mode: 'all',
            modes: ['all', 'horizontal', 'vertical']
        };

        return directive;

        function link(scope, element, attrs) {

            var dimension = {},
                iconPosition = [0, 0],
                widthButton = 5,
                colorButton = 'transparent',
                mode = attrs.resizeBlock && adrConfig.modes.indexOf(attrs.resizeBlock) > -1 ? attrs.resizeBlock : adrConfig.mode,
                position = {};

            var resizeButton = document.createElement("span");


            // "bottom:" + iconPosition[0] + 'px;' +
            var mainCss = "position: absolute;" +
                "right: " + iconPosition[1] + 'px;' +
                "bottom:" + iconPosition[0] + 'px;' +
                "visibility: hidden;" +
                "background-color:"+ colorButton + ';';

            var leftCss = "top: 0;" +

                "width: " + widthButton + 'px;' +
                "height: 100%;" +
                "cursor: ew-resize;";

            var bottomCss = "position: absolute;" +
                
                "height: " + widthButton + 'px;' +
                "width: 100%;" +
                "cursor: ns-resize";

            resizeButton.innerHTML = " <span class='resize-hor-'>"

            element.css({position: 'relative'});

            if (mode == 'horizontal') {
                resizeButton.style.cssText = mainCss + leftCss;

                resizeButton.classList.add('resize-hor');
            }
            else if (mode == 'vertical') {
                resizeButton.style.cssText = mainCss + bottomCss;
                resizeButton.classList.add('resize-ver');
            }
            else {
                resizeButton.style.cursor = 'nwse-resize';
            }

            //bind resize function to button;
            function mouseMove($event) {
                var deltaWidth = dimension.width - (position.x - $event.clientX);
                var deltaHeight = dimension.height - (position.y - $event.clientY);
                var newDimensions = {};

                if (mode == 'horizontal') {
                    newDimensions = {
                        width: deltaWidth + 'px'
                    };
                }
                else if (mode == 'vertical') {
                    newDimensions = {
                        height: deltaHeight + 'px'
                    };
                }
                else {
                    newDimensions = {
                        width: deltaWidth + 'px',
                        height: deltaHeight + 'px'
                    };
                }
                element.css(newDimensions);
                return false;
            }

            function mouseUp() {
                $(document).unbind('mousemove', mouseMove);
                $(document).unbind('mouseup', mouseUp);
            }

            function changeSize($event) {
                $event.stopImmediatePropagation();
                position.x = $event.clientX;
                position.y = $event.clientY;
                dimension.width = element.prop('offsetWidth');
                dimension.height = element.prop('offsetHeight');

                $(document).bind('mousemove', mouseMove);
                $(document).bind('mouseup', mouseUp);

                console.log(' position.x=', position.x);
                console.log('position.y=', position.y);
                console.log(' dimension.width=', dimension.width);
                console.log('dimension.height=', dimension.height);

                return false;
            }

            resizeButton.onmousedown = changeSize;

            element.append(resizeButton);
            //show button on hover
            element.bind('mouseover', function () {
                resizeButton.style.visibility = 'visible';
            });
            element.bind('mouseout', function () {
                resizeButton.style.visibility = 'hidden';
            });

        }
    }

})();
