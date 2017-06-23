(function () {
    'use strict';

    angular
        .module('app.directives')
        .directive('disableFocusOnBlur', disableFocusOnBlur);

    disableFocusOnBlur.$inject = ['$rootScope', '$timeout'];

    /* @ngInject */
    function disableFocusOnBlur($rootScope, $timeout) {
        var directive = {
            require: "tagsInput",
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element, attrs, tagsInputCtrl) {
            // element.on('blur', function () {
            //     alert();
            // });

            $('.compose').click(function (event) {
                // console.log('click', event);
                // event.currentTarget.focus();

                $timeout(function () {
                    // console.log('set click', event);
                    // $('.input').blur();
                    event.currentTarget.focus();
                }, 250);
            });

            element.find('input').bind('input-blur', function(event) {
                event.preventDefault();
                event.stopPropagation();
                // console.log('event', event);

                $timeout(function () {
                    console.log('set click', event);
                    $('.input').blur();
                }, 250);
            });


            // console.log('scope', scope.$$childHead);
            // $rootScope.$on("input-blur", function() {
            //     console.log('scope!', scope.$$childHead);
            // });
        }
    }

})();
