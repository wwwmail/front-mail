(function () {
    'use strict';

    angular
        .module('app.directives')
        .directive('messageTextarea', messageTextarea);

    messageTextarea.$inject = ['$sce', '$timeout'];

    /* @ngInject */
    function messageTextarea($sce, $timeout) {
        var directive = {
            templateUrl: 'app/directives/message-textarea/message-textarea.html',
            link: link,
            require: '?ngModel',
            restrict: 'EA',
            scope: {
                messageTextareaHtml: '=?'
            },
            replace: true
        };
        return directive;

        function link(scope, element, attrs, ngModel) {
            var isLoadedModel = false;

            scope.targetElement = _.uniqueId('summernote_');

            // console.log('ngModel.$viewValue', ngModel.$viewValue);

            $timeout(function () {
                scope.$watch('messageTextareaHtml', function (newValue) {
                    // console.log('messageTextareaHtml', newValue);
                    if (newValue && !isLoadedModel) {
                        isLoadedModel = true;
                        $('.' + scope.targetElement).summernote('code',
                            ngModel.$viewValue
                        );
                    }
                });

                $('.' + scope.targetElement).summernote({
                    minHeight: 400,
                    dialogsInBody: true,
                    callbacks: {
                        onChange: function (contents, $editable) {
                            ngModel.$setViewValue(contents);
                        }
                    },
                    toolbar: [
                        ['undo', ['undo', 'redo']],
                        ['font', ['bold', 'italic', 'underline', 'strikethrough', 'fontname']],
                        // ['color'],
                        // ['fontname', ['fontname']],
                        ['color', ['color']],
                        ['para', ['ol', 'ul']],
                        ['para', ['paragraph']],
                        // ['para', ['alignCenter']],
                        ['fontsize', ['fontsize']],
                        // ['height', ['height', 'fontsize']],
                        // ['table', ['table']],
                        ['insert', ['link', 'picture']],
                        // ['view', ['fullscreen', 'codeview']],

                        ['clear', ['fullscreen', 'clear']]
                        // ['help', ['help']]
                    ],
                    icons: {
                        undo: 'icon-undo',
                        redo: 'icon-redo',
                        bold: 'icon-bold-en',
                        italic: 'icon-italic-en',
                        underline: 'icon-underline',
                        eraser: 'icon-style',
                        'current-color': 'icon-font-color',
                        font: 'icon-background-color',
                        fontname: 'icon-font-family',
                        fontsize: 'icon-font-size',
                        orderedlist: 'icon-ol',
                        unorderedlist: 'icon-ul',
                        link: 'icon-link',
                        unlink: 'icon-unlink',
                        picture: 'icon-img',
                        arrowsAlt: 'icon-full-screen',
                        strikethrough: 'icon-thru',

                        align: 'icon-align-c',
                        alignCenter: 'icon-align-c',
                        alignLeft: 'icon-align-l',
                        alignRight: 'icon-align-r',
                        caret: 'icon-arrow-down'
                    }
                });

                $('.note-statusbar').html("<span class='summernote__resize'>◢</span>");
            }, 250);
        }
    }

})();
