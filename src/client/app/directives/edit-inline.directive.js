(function () {
    'use strict';

    angular
        .module('app.directives')
        .directive('editInline', editInline);

    editInline.$inject = ['$timeout'];

    /* @ngInject */
    function editInline($timeout) {
        var directive = {
            link: link,
            restrict: 'A',
            scope: true
        };
        return directive;

        function link(scope, element, attrs) {
            $timeout(function () {
                element.attr('size', (element.val().length + 1));
                element.bind("keyup", function(){
                    element.attr('size', element.val().length + 1);
                });
            }, 250);
        }
    }

})();
