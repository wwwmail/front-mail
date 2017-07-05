(function () {
    'use strict';

    angular
        .module('app.directives')
        .directive('messageTextarea', messageTextarea);

    messageTextarea.$inject = ['$sce', '$timeout', '$compile', 'googleTranslation', 'lang', '$translate'];

    /* @ngInject */
    function messageTextarea($sce, $timeout, $compile, googleTranslation, lang, $translate) {
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
                messageTextareaHtmlSign: '=?',
                messageTextareaHtmlFwd: '=?',
                messageTextareaTimeLoad: '@?'
            },
            replace: true
        };
        return directive;

        function link(scope, element, attrs, ngModel) {
            var isLoadedModel = false;
            var timeLoad = scope.messageTextareaTimeLoad || 250;
            var $summetnote;
            var body = '';

            // alert(lang.getCurrentLang().ico);

            scope.translateFrom = {};
            scope.translateTo = {};
            scope.language = '';

            scope.targetElement = _.uniqueId('summernote_');

            scope.$watch('translateTo', function (data, oldData) {
                scope.language = data.language;
                translate(ngModel.$viewValue);
            }, true);

            scope.$watch('messageTextareaHtmlSign', function (data, oldData) {
                pasteSign(data);
            });

            scope.$watch('messageTextareaHtmlFwd', function (data, oldData) {
                // pasteFwd(data);
            });

            $translate('TRANSLATOR').then(function (translation) {

                var HelloButton = function (context) {
                    var ui = $.summernote.ui;

                    if (scope.messageTextareaIsTranslateShow) {
                        var button = ui.button({
                            className: 'btn--normal',
                            contents: translation,
                            tooltip: translation,
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
                    var useLang = lang.getCurrentLang().ico;

                    console.log('lang', useLang);

                    scope.$watch('messageTextareaHtml', function (newValue) {
                            if (newValue && !isLoadedModel) {
                                isLoadedModel = true;

                                if ($summetnote.summernote('isEmpty')) {
                                    $summetnote.summernote('code',
                                        ngModel.$viewValue
                                    );
                                }
                            }
                        }
                    );

                    $summetnote = $('.' + scope.targetElement).summernote({
                        minHeight: 400,
                        dialogsInBody: true,
                        callbacks: {
                            onInit: function () {
                                $('.note-recent-color').css('background-color', 'rgb(255, 255, 255)');
                            },
                            onChange: function (contents, $editable) {
                                ngModel.$setViewValue(contents);

                                if (scope.messageTextareaIsTranslate) {
                                    translate(contents);
                                }
                            }
                        },
                        lang: useLang,
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

                            ['clear', ['clear']],

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
                            // font: 'icon-background-color',
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
                }, timeLoad);
            });

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

            function pasteSign(data) {
                if (data) {
                    var html = '<div class="note-editable--sign">';
                    html += data;
                    html += '</div>';

                    // console.log('note-editable--sign', element.find('.note-editable--sign')[0]);

                    if (element.find('.note-editable--sign')[0]) {
                        element.find('.note-editable--sign').html(html);
                        return;
                    }

                    element.find('.note-editable').append(html);

                    return;
                }

                if (element.find('.note-editable--sign')[0]) {
                    element.find('.note-editable--sign').html('');
                }
            }

            function pasteFwd(data) {
                if (data) {
                    var html = '<div class="note-editable--fwd">';
                    html += data;
                    html += '</div>';

                    // console.log('note-editable--sign', element.find('.note-editable--sign')[0]);

                    if (element.find('.note-editable--fwd')[0]) {
                        element.find('.note-editable--fwd').html(html);
                        return;
                    }

                    element.find('.note-editable').append(html);

                    return;
                }

                if (element.find('.note-editable--fwd')[0]) {
                    element.find('.note-editable--fwd').html('');
                }
            }

        }
    }

})();
