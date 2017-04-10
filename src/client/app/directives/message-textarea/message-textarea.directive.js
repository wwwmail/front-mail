(function () {
    'use strict';

    angular
        .module('app.directives')
        .directive('messageTextarea', messageTextarea);

    messageTextarea.$inject = [];

    /* @ngInject */
    function messageTextarea() {
        var directive = {
            templateUrl: 'app/directives/message-textarea/message-textarea.html',
            link: link,
            restrict: 'E',
            scope: true,
            replace: true
        };
        return directive;

        function link(scope, element, attrs) {
            // element.summernote();
        }
    }

})();
