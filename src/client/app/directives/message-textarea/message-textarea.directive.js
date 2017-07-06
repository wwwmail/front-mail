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
                messageTextareaHtmlRe: '=?',
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

            scope.translateFrom = {};
            scope.translateTo = {};
            scope.language = '';

            scope.targetElement = _.uniqueId('summernote_');

            scope.$watch('translateTo', function (data, oldData) {
                scope.language = data.language;
                translate(ngModel.$viewValue);
            }, true);

            scope.$watch('messageTextareaHtmlSign', function (data, oldData) {
                scope.signHTML = $sce.trustAsHtml(data);
                console.log('signHTML', scope.signHTML);
            });

            scope.$watch('messageTextareaHtmlRe', function (data, oldData) {
                console.log('re data', data);
                scope.reHTML = $sce.trustAsHtml(data);
                console.log('reHTML',  scope.reHTML);
            });

            // scope.$watch('messageTextareaHtml', function (data, oldData) {
            //     console.log('re data', data);
            //     scope.bodyHTML = $sce.trustAsHtml(data);
            //     console.log('bodyHTML',  scope.bodyHTML);
            // });

            scope.$watch('messageTextareaHtmlFwd', function (data, oldData) {
                scope.fwdHTML = $sce.trustAsHtml(data);
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

                    pasteStructureHtml();

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

            function pasteStructureHtml() {
                var html = [
                    '<div class="note-editable--re" ng-bind-html="reHTML"></div>',
                    '<div class="note-editable--sign" ng-bind-html="signHTML"></div>',
                    '<div class="note-editable--fwd" ng-bind-html="fwdHTML"></div>'
                ].join(' ');
                element.find('.note-editable').append($compile(html)(scope));
            }
        }
    }

})();
