(function () {
    'use strict';

    angular
        .module('app.directives')
        .directive('resizeMenu', resizeMenu);

    resizeMenu.$inject = ['$timeout'];

    /* @ngInject */
    function resizeMenu($timeout) {
        var directive = {
            link: link,
            restrict: 'A',
            scope: false
        };
        return directive;

        function link(scope, element, attrs) {

            var maxMenuSize = 250,
                minMenuSize = 60;
            // autoMenuSize = element.innerWidth();

            scope.close = close;

            eventWidth();

            function eventWidth(menuSize) {
                $('.main-container__body').css({
                    maxWidth: $('.main-layout').width() - menuSize - $('.aside-right').innerWidth() - 1
                });
            }

            function close() {
                if (element.hasClass('is-menu-minimize')) {
                    element.removeClass('is-menu-minimize');
                    element.removeClass('is-menu-middle');
                    element.css({width: maxMenuSize});
                    eventWidth(maxMenuSize);
                    return;
                }
                element.addClass('is-menu-minimize');
                element.removeClass('is-menu-middle');
                element.css({width: minMenuSize});
                eventWidth(minMenuSize);
            }

            /*
             interact('.resize-menu')
             .resizable({
             preserveAspectRatio: true,
             edges: {
             left: false,
             right: true,
             bottom: false,
             top: false
             }
             })
             .on('resizemove', function (event) {

             // console.log('event,', event);

             var target = event.target,
             x = (parseFloat(target.getAttribute('data-x')) || 0),
             y = (parseFloat(target.getAttribute('data-y')) || 0);

             // update the element's style
             target.style.width = event.rect.width + 'px';
             // target.style.height = event.rect.height + 'px';

             // translate when resizing from top or left edges
             x += event.deltaRect.left;
             // y += event.deltaRect.top;

             target.style.webkitTransform = target.style.transform =
             'translate(' + x + 'px,' + y + 'px)';

             if (event.pageX <= 140) {
             element.addClass('is-menu-minimize');
             } else if (event.pageX > 140 && event.pageX < 220) {
             element.removeClass('is-menu-minimize');
             element.addClass('is-menu-middle');
             } else if (event.pageX >= 220) {
             element.removeClass('is-menu-middle');
             element.removeClass('is-menu-minimize');
             }
             });

             function dragMoveListener(event) {
             var target = event.target,
             x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;

             target.style.webkitTransform =
             target.style.transform =
             'c(' + x + 'px, ' + y + 'px)';
             }
             */
        }
    }

})();
