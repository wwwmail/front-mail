(function () {
    'use strict';

    angular
        .module('app.directives')
        .directive('messageTextarea', messageTextarea);

    messageTextarea.$inject = [];

    /* @ngInject */
    function messageTextarea() {
        var directive = {
            template: '<div class="summernote"></div>',
            // templateUrl: 'app/directives/message-textarea/message-textarea.html',
            link: link,
            restrict: 'EA',
            scope: true,
            replace: true
        };
        return directive;

        function link(scope, element, attrs) {
            console.log(element);
            $('.summernote').summernote();
        }
    }

})();
