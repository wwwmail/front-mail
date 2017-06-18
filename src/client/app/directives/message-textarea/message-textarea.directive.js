(function () {
    'use strict';

    angular
        .module('app.directives')
        .directive('messageTextarea', messageTextarea);

    messageTextarea.$inject = ['$sce', '$timeout', '$compile', 'googleTranslation'];

    /* @ngInject */
    function messageTextarea($sce, $timeout, $compile, googleTranslation) {
        var directive = {
            templateUrl: 'app/directives/message-textarea/message-textarea.html',
            link: link,
            require: '?ngModel',
            restrict: 'EA',
            scope: {
                messageTextareaHtml: '=?',
                messageTextareaIsTranslate: '=?',
                messageTextareaIsTranslateShow: '=?',
                messageTextareaHtmlTranslate: '=?',
                messageTextareaHtmlSign: '=?'
            },
            replace: true
        };
        return directive;

        function link(scope, element, attrs, ngModel) {
            var isLoadedModel = false;
            var body = '';

            scope.translateFrom = {};
            scope.translateTo = {};
            scope.language = '';

            scope.targetElement = _.uniqueId('summernote_');

            scope.$watch('translateFrom', function (data, oldData) {

            }, true);

            scope.$watch('translateTo', function (data, oldData) {
                scope.language = data.language;
                translate(ngModel.$viewValue);
            }, true);

            scope.$watch('messageTextareaHtmlSign', function (data, oldData) {
                console.log('pasteSignText', data);
                pasteSign(data);
            });

            var HelloButton = function (context) {
                var ui = $.summernote.ui;

                if (scope.messageTextareaIsTranslateShow) {
                    var button = ui.button({
                        className: 'btn--normal',
                        contents: 'Переводчик',
                        tooltip: 'Переводчик',
                        click: function () {
                            scope.messageTextareaIsTranslate = !scope.messageTextareaIsTranslate;

                            if (scope.messageTextareaIsTranslate) {
                                showTextareaTranslate();
                            } else {
                                hideTextareaTranslate();
                            }
                            scope.$apply();
                        }
                    });

                    return button.render();
                }
            };

            $timeout(function () {
                scope.$watch('messageTextareaHtml', function (newValue) {
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

                            if (scope.messageTextareaIsTranslate) {
                                translate(contents);
                            }
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

                        ['clear', ['fullscreen', 'clear']],

                        ['mybutton', ['hello']]
                        // ['help', ['help']]
                    ],
                    buttons: {
                        hello: HelloButton
                    },
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

            function showTextareaTranslate() {
                scope.$noteEditingArea = element.find('.note-editing-area');
                scope.$noteToolbar = element.find('.note-toolbar');
                scope.$textareaTranslateMenu = $compile('<textarea-translate-menu translate-from="translateFrom" translate-to="translateTo"></textarea-translate-menu>')(scope);
                scope.$noteToolbar.after(scope.$textareaTranslateMenu);
                scope.$noteEditingArea.append('<div class="note-editing-area-translate"></div>');
                scope.$noteEditingAreaTranslate = element.find('.note-editing-area-translate');
                scope.$noteEditingArea.addClass('message-textarea__note-editing-area--translate');
                translate(ngModel.$viewValue);
            }

            function hideTextareaTranslate() {
                scope.$noteEditingAreaTranslate.remove();
                scope.$textareaTranslateMenu.remove();
            }

            function translate(contents) {
                googleTranslation.translate({}, {"q": contents, "target": scope.language}).then(function (response) {
                    scope.messageTextareaHtmlTranslate = response.data.translations[0].translatedText;
                    scope.$noteEditingAreaTranslate.html(scope.messageTextareaHtmlTranslate);
                });
            }

            function pasteSign() {

            }
        }
    }

})();
