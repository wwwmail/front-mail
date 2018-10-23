(function () {
    'use strict';

    angular
        .module('app.directives')
        .directive('layoutHeight', layoutHeight);

    layoutHeight.$inject = ['$document'];

    /* @ngInject */
    function layoutHeight($document) {
        var directive = {
            link: link,
            restrict: 'A',
            scope: true
        };
        return directive;

        function link(scope, element, attrs) {

            function layoutHeight() {
                $('.main-layout__inner').css({
                    minHeight: $(document).innerHeight() - 61
                });

                $('aside-right').css({
                    minHeight: $('.height-flex--content').innerHeight() - 61
                });
            }

            layoutHeight();

            $(window).on('resize', function () {
                layoutHeight();
            })
        }
    }

})();
