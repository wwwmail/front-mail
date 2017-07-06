(function () {
    'use strict';

    angular.module('app', [
        'app.core',
        'app.services',
        'app.components',
        'app.directives',
        'app.layout',
        'marketing',
        'auth',
        'mail',
        'settings',
        'contacts',
        'theme',
        'terms',
        'storage',
        'template',
        'help',
        'print'
    ]);
})();

(function () {
    'use strict';

    angular.module('auth', [
        'auth.signIn',
        'auth.signUp',
        'auth.passwordReset',
        'auth.passwordUpdate'
    ]);
})();

(function() {
  'use strict';

  angular.module('app.components', []);
})();

(function () {
    'use strict';

    angular
        .module('app.core', [
            'ngSanitize',
            'ngResource',
            'ui.router',
            'ui.bootstrap',
            'ui.mask',
            'toastr',
            'checklist-model',
            'blocks.logger',
            'blocks.router',
            'ng-token-auth',
            'ngFileUpload',
            'ngImgCrop',
            'ui.select',
            'dcbImgFallback',
            'ui.bootstrap.datetimepicker',
            'ngFileSaver',
            'monospaced.elastic',
            'ngTagsInput',
            'LocalStorageModule',
            'pascalprecht.translate',
            'dndLists',
            'content-editable',
            'paypal-button',
            'ngCookies',
            'ngclipboard',
            'ngPhotoswipe'
        ]);
})();

(function () {
    'use strict';

    angular.module('contacts', [
        'contacts.main'
    ]);
})();
(function () {
    'use strict';

    angular.module('help', [
        'help.main'
    ]);
})();

(function() {
  'use strict';

  angular.module('app.layout', [
    'app.core'
  ]);
})();

(function() {
    'use strict';

    angular.module('app.directives', []);
})();

(function () {
    'use strict';

    angular.module('mail', [
        'mail.inbox',
        'mail.compose',
        'mail.message'
    ]);
})();
(function () {
    'use strict';

    angular.module('marketing', [
        'marketing.home'
    ]);
})();

(function () {
    'use strict';

    angular.module('print', []);
})();

(function() {
  'use strict';

  angular.module('app.services', [
      'app.core'
  ]);
})();

(function () {
    'use strict';

    angular.module('settings', [
        'settings.main',
        'settings.tags',
        'settings.folders',
        'settings.rules',
        'settings.accounts',
        'settings.contacts',
        'settings.ruleAdd'
    ]);
})();
(function () {
    'use strict';

    angular.module('storage', [
        'storage.main'
    ]);
})();

(function () {
    'use strict';

    angular.module('template', [
        'template.main'
    ]);
})();

(function () {
    'use strict';

    angular.module('terms', [
        'terms.main'
    ]);
})();

(function () {
    'use strict';

    angular.module('theme', [
        'theme.main'
    ]);
})();

(function() {
    'use strict';

    angular.module('auth.passwordUpdate', [
        'app.core',
        'app.components'
    ]);
})();

(function() {
    'use strict';

    angular.module('auth.passwordReset', [
        'app.core',
        'app.components'
    ]);
})();

(function() {
    'use strict';

    angular.module('auth.signIn', [
        'app.core',
        'app.components'
    ]);
})();

(function() {
    'use strict';

    angular.module('auth.signUp', [
        'app.core',
        'app.components',
        'app.services'
    ]);
})();

(function() {
  'use strict';

  angular.module('blocks.logger', []);
})();

(function() {
  'use strict';

  angular.module('blocks.router', [
    'ui.router',
    'blocks.logger'
  ]);
})();

(function () {
    'use strict';

    angular.module('contacts.main', []);
})();

(function() {
  'use strict';

  angular.module('help.main', [
    'app.core',
    'app.components'
  ]);
})();

(function () {
    'use strict';

    angular.module('mail.inbox', []);
})();

(function () {
    'use strict';

    angular.module('mail.compose', []);
})();

(function () {
    'use strict';

    angular.module('mail.message', []);
})();

(function() {
  'use strict';

  angular.module('marketing.home', [
    'app.core',
    'app.components'
  ]);
})();

(function () {
    'use strict';

    angular.module('settings.accounts', []);
})();

(function () {
    'use strict';

    angular.module('settings.folders', []);
})();

(function () {
    'use strict';

    angular.module('settings.main', []);
})();

(function () {
    'use strict';

    angular.module('settings.contacts', []);
})();

(function () {
    'use strict';

    angular.module('settings.ruleAdd', []);
})();

(function () {
    'use strict';

    angular.module('settings.rules', []);
})();

(function () {
    'use strict';

    angular.module('settings.tags', []);
})();

(function() {
  'use strict';

  angular.module('storage.main', [
    'app.core',
    'app.components'
  ]);
})();

(function() {
  'use strict';

  angular.module('template.main', [
    'app.core',
    'app.components'
  ]);
})();

(function() {
  'use strict';

  angular.module('terms.main', [
    'app.core',
    'app.components'
  ]);
})();

(function() {
  'use strict';

  angular.module('theme.main', [
    'app.core',
    'app.components'
  ]);
})();

(function () {
    'use strict';


    // angular.module('app').config(function($uibTooltipProvider) {
    //     $uibTooltipProvider.setTriggers({'open': 'close'});
    // });
    // angular.module('app').config(function (uiSelectConfig) {
    //     uiSelectConfig.theme = 'select2';
    // })
    //     .config(function (ScrollBarsProvider) {
    //
    //         ScrollBarsProvider.defaults = {
    //             scrollButtons: {
    //                 scrollAmount: 'auto',
    //                 enable: false
    //             },
    //             theme: 'minimal',
    //             axis: 'y'
    //         };
    //
    //     });
    //]
    // moment.locale('ru');

})();

(function () {
    'use strict';

    moment.locale('ru');

    var core = angular.module('app.core');

    core.config(["$translateProvider", function ($translateProvider) {
        $translateProvider.useStaticFilesLoader({
            prefix: 'i18n/',
            suffix: '.json'
        });

        $translateProvider.fallbackLanguage('cs');
        $translateProvider.preferredLanguage('cs');
        $translateProvider.useLocalStorage();
        $translateProvider.useLoaderCache('$translationCache');
    }]);

    core.config(["tagsInputConfigProvider", function (tagsInputConfigProvider) {
        tagsInputConfigProvider.setDefaults('tagsInput', {placeholder: ''});
    }]);

    core.config(["$uibTooltipProvider", function ($uibTooltipProvider) {
        $uibTooltipProvider.setTriggers({'open': 'close'});
    }]);

    core.config(["$authProvider", "CONFIG", function ($authProvider, CONFIG) {
        $authProvider.configure({
            apiUrl: CONFIG.APIHost,
            tokenValidationPath: '/auth/validate-token',
            signOutUrl: '/auth/logout',
            emailRegistrationPath: '/auth/signup',
            accountUpdatePath: '/auth',
            accountDeletePath: '/auth',
            confirmationSuccessUrl: window.location.href,
            passwordResetPath: '/auth/request-password-reset',
            passwordUpdatePath: '/auth/reset-password',
            passwordResetSuccessUrl: window.location.href,
            emailSignInPath: '/auth/login',
            storage: 'localStorage',
            forceValidateToken: false,
            validateOnPageLoad: false,
            proxyIf: function () {
                return false;
            }

            ,
            proxyUrl: '/proxy',
            omniauthWindowType: 'sameWindow',
            authProviderPaths: {
                github: '/auth/github',
                facebook: '/auth/facebook',
                google: '/auth/google'
            }
            ,
            tokenFormat: {
                "access-token": "{{ token }}",
                "token-type": "Bearer"
            },
            cookieOps: {
                path: "/",
                expires: 9999,
                expirationUnit: 'days',
                secure: false,
                domain: 'domain.com'
            },
            createPopup: function (url) {
                return window.open(url, '_blank', 'closebuttoncaption=Cancel');
            },
            parseExpiry: function (headers) {
                // convert from UTC ruby (seconds) to UTC js (milliseconds)
                return (parseInt(headers['expiry']) * 1000) || null;
            },
            handleLoginResponse: function (response, $auth, profile, theme) {
                $auth.persistData('auth_headers', {
                    'Authorization': response.data.access_token
                });

                $auth.persistData('profile', {
                    'profile': response.data.profile
                });

                if (response.data.profile.timezone) {
                    moment.tz.setDefault(response.data.profile.timezone);
                }

                return response.data;
            },
            handleAccountUpdateResponse: function (response) {
                return response.data;
            },
            handleTokenValidationResponse: function (response) {
                if (response.data.profile.timezone) {
                    moment.tz.setDefault(response.data.profile.timezone);
                }
                return response.data;
            }
        });

    }]);
})();

(function () {
    'use strict';

    angular
        .module('app.core')
        .constant('CONFIG', window.appConfig
            // {
            //     DebugMode: true,
            //     APIHost: window.appConfig.APIHost,
            //     MediaUrl: window.appConfig.MediaUrl,
            //     AttachUrl: window.appConfig.AttachUrl
            // }
        );
})();

(function () {
    'use strict';

    appRun.$inject = ["routerHelper", "$http", "$rootScope", "$translate", "theme", "$timeout"];
    angular
        .module('app.core')
        .run(appRun);

    /* @ngInject */
    function appRun(routerHelper, $http, $rootScope, $translate, theme, $timeout) {
        theme.setDefault();

        $rootScope.$on('$stateChangeSuccess',
            function (event, toState, toParams, fromState, fromParams) {
                $timeout(function () {
                    theme.setDefault();
                });
            });

        var otherwise = '404';
        routerHelper.configureStates(getStates(), otherwise);
    }

    function getStates() {
        return [
            {
                state: '404',
                config: {
                    url: '/404',
                    templateUrl: 'app/core/errors/404.html',
                    title: '404',
                    data: {
                        'noLogin': true
                    }
                }
            }
        ];
    }
})();

(function () {
    'use strict';

    angular
        .module('contacts')
        .controller('ContactsController', ContactsController);

    ContactsController.$inject = ['contactGroupResolve'];
    /* @ngInject */
    function ContactsController(contactGroupResolve) {
        var vm = this;

        vm.contactGroup = {
            items: []
        };

        activate();

        function activate() {
            contactGroupResolve.$promise
                .then(function (response) {
                    vm.contactGroup.items = response.data;
                });
        }
    }
})();

(function () {
    'use strict';

    angular
        .module('contacts')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'contacts',
                config: {
                    url: '/contacts?group_id',
                    templateUrl: 'app/contacts/contacts.html',
                    controller: 'ContactsController',
                    controllerAs: 'vm',
                    resolve: {
                        auth: function ($auth, $state) {
                            return $auth.validateUser().catch(function () {
                                $state.go('signIn');
                            });
                        },
                        contactGroupResolve: function (contactGroup) {
                            return contactGroup.get();
                        }
                    }
                }
            }
        ];
    }
})();

(function () {
    'use strict';

    angular
        .module('app.directives')
        .directive('autoCompleteAfter', autoCompleteAfter);

    autoCompleteAfter.$inject = ['$compile', '$timeout', '$templateRequest'];

    /* @ngInject */
    function autoCompleteAfter($compile, $timeout, $templateRequest) {
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element, attrs) {
            var compileHtml;

            $templateRequest("autocomplete-template-footer").then(function(html){
                compileHtml = $compile(html);
            });

            scope.$watch('$$childHead.suggestionList.visible', function (data, oldData) {
                if (data) {
                    pasteHtml(compileHtml(scope));
                }
            });

            function pasteHtml(html) {
                $timeout(function () {
                    element.find('.suggestion-list').append(html);
                });
            }
        }
    }

})();

(function () {
    'use strict';

    angular
        .module('app.directives')
        .directive('autofocus', autofocus);

    autofocus.$inject = ['$timeout'];

    /* @ngInject */
    function autofocus($timeout) {
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element, attrs) {
            var autofocus = scope.$eval(attrs.autofocus);

            if (autofocus) {
                var input = element.find('input');
                $timeout(function () {
                    input[0].focus();
                }, 250);
            }
        }
    }

})();

(function () {
    'use strict';

    angular
        .module('app.directives')
        .directive('composeTrigger', composeTrigger);

    composeTrigger.$inject = ['$sce', '$compile', '$timeout', '$templateRequest'];

    /* @ngInject */
    function composeTrigger($sce, $compile, $timeout, $templateRequest) {
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element, attrs) {
            var isMinimized = false;
            var isCollapsed = false;

            scope.minimize = minimize;
            scope.collapse = collapse;
            scope.setPosition = setPosition;
            scope.close = close;

            minimize();

            function minimize() {
                var $el = element.offsetParent().offsetParent().offsetParent();

                if (!isMinimized) {
                    $timeout(function () {
                        angular.element($el).addClass('popup--compose-is-modify');
                        angular.element($el).addClass('popup--compose-minimized');

                        if (isCollapsed) {
                            angular.element($el).removeClass('popup--compose-collapsed');
                            isCollapsed = false;
                        }

                        // $('.modal-backdrop').css('display', 'none');
                    }, 50);
                    isMinimized = true;
                    setPosition();
                } else {
                    $timeout(function () {
                        angular.element($el).removeClass('popup--compose-minimized');

                        if (!isMinimized && !isCollapsed) {
                            angular.element($el).removeClass('popup--compose-is-modify');
                        }

                        angular.element($el).css({'right': 0, 'z-index': '1051'});
                        // angular.css({'display': 'block', 'z-index': '1050'});

                        // $('.modal-backdrop').css({'display': 'block', 'z-index': '1050'});
                    }, 50);
                    isMinimized = false;
                    setPosition();
                }

                if (isMinimized || isCollapsed) {
                    angular.element($el).removeClass('popup--compose-is-full');
                    $('.modal-backdrop').css('display', 'none');
                } else {
                    angular.element($el).addClass('popup--compose-is-full');
                    $('.modal-backdrop').css({'display': 'block', 'z-index': '1050'});
                }

                $timeout(function () {
                    $el.removeClass('hide-elm');
                }, 50);
            }

            function collapse() {
                var $el = element.offsetParent().offsetParent().offsetParent();

                if (!isCollapsed) {
                    $timeout(function () {
                        angular.element($el).addClass('popup--compose-is-modify');
                        angular.element($el).addClass('popup--compose-collapsed');
                        angular.element($el).removeClass('popup--compose-minimized');

                        if (isMinimized) {
                            angular.element($el).removeClass('popup--compose-minimized');
                            isMinimized = false;
                        }

                        // $('.modal-backdrop').css('display', 'none');
                    }, 50);
                    isCollapsed = true;
                    setPosition();
                } else {
                    $timeout(function () {
                        angular.element($el).removeClass('popup--compose-collapsed');

                        if (isMinimized) {
                            angular.element($el).addClass('popup--compose-minimized');
                            isMinimized = false;
                        }

                        if (!isMinimized && !isCollapsed) {
                            angular.element($el).removeClass('popup--compose-is-modify');
                        }

                        angular.element($el).css({'right': 0, 'z-index': '1051'});
                    }, 50);
                    isCollapsed = false;
                    setPosition();
                }

                if (isMinimized || isCollapsed) {
                    angular.element($el).removeClass('popup--compose-is-full');
                } else {
                    angular.element($el).addClass('popup--compose-is-full');
                }
            }

            function setPosition() {
                var position = 0;
                $timeout(function () {
                    $('.popup--compose-is-modify').each(function (i) {
                        $(this).css({'right': position, 'z-index': '1040', 'visibility': 'visible'});
                        position += ($(this).width() + 10);
                        if (i > 2) {
                            $(this).css({'visibility': 'hidden'});
                        }
                    });
                }, 50);

                $timeout(function () {
                    if (!$('.popup').is('.popup--compose-is-full')) {
                        $('.modal-backdrop').css('display', 'none');
                    } else {
                        $('.modal-backdrop').css({'display': 'block', 'z-index': '1050'});
                    }
                }, 50);
            }

            function close() {
                // $('.modal-backdrop').css('display', 'none');
            }
        }
    }

})();

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

        }
    }

})();

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
            }, 10);
        }
    }

})();

(function () {
    'use strict';

    angular
        .module('app.directives')
        .directive('inboxMessageHover', inboxMessageHover);

    inboxMessageHover.$inject = [];

    /* @ngInject */
    function inboxMessageHover() {
        var directive = {
            link: link,
            restrict: 'A',
            scope: true
        };
        return directive;

        function link(scope, element, attrs) {
            element.bind('mouseover', function() {
                element.find('.round').addClass('round--border');
            });
        }
    }

})();

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
            $('.layout__inner').css({
                minHeight: $(document).innerHeight() - 60
            });
        }
    }

})();

(function () {
    'use strict';

    angular
        .module('app.components')
        .directive('loginFormat', loginFormat);

    loginFormat.$inject = [];
    /* @ngInject */
    function loginFormat() {
        var directive = {
            restrict: 'EA',
            link: link,
            require: 'ngModel'
        };
        return directive;

        function link(scope, element, attrs, ngModel) {
            scope.$watch(function () {
                return ngModel.$modelValue;
            }, function (data, oldData) {
                if (typeof data === 'string') {
                    var newValue = data.toString().replace(/[^0-9A-Za-z_-]/g, "");
                    ngModel.$setViewValue(newValue);
                    ngModel.$render()
                }
            }, true);
        }
    }
})();

(function () {
    'use strict';

    angular
        .module('app.directives')
        .directive('mediaUrl', mediaUrl);

    mediaUrl.$inject = ['CONFIG'];

    /* @ngInject */
    function mediaUrl(CONFIG) {
        var directive = {
            link: link,
            restrict: 'EA',
            scope: true
        };
        return directive;

        function link(scope, element, attrs) {
            scope.$watch(attrs['mediaUrl'], function() {
                var mediaUrl = CONFIG.MediaUrl + scope.$eval(attrs.mediaUrl);
                element.attr('src', mediaUrl);
            });
        }
    }

})();

(function () {
    'use strict';

    angular
        .module('app.directives')
        .directive('photoswipeInfo', photoswipeInfo);

    photoswipeInfo.$inject = ['$compile', '$timeout', '$templateRequest'];

    /* @ngInject */
    function photoswipeInfo($compile, $timeout, $templateRequest) {
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element, attrs) {
            console.log('scope', scope);

            var html = "<div><button>{{ 'PRINT' | translate }}</button><button>{{ 'DONWLOAD' | translate }}</button></div>";

            scope.$watch('vm.slidesFormatted', function () {
                console.log('element', element.find('.pswp__ui-custom'));
                element.find('.pswp__ui-custom').html($compile(html)(scope));
            });
        }
    }

})();

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
            scope.close = close;

            function close() {
                if (element.hasClass('is-menu-minimize')) {
                    element.removeClass('is-menu-minimize');
                    element.removeClass('is-menu-middle');
                    element.css({width: 250});
                    return;
                }
                element.addClass('is-menu-minimize');
                element.removeClass('is-menu-middle');
                element.css({width: 60});
            }

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
                        'translate(' + x + 'px, ' + y + 'px)';
            }

        }
    }

})();

(function () {
    'use strict';

    angular
        .module('app.directives')
        .directive('scrollUp', scrollUp);

    scrollUp.$inject = ['$window'];

    /* @ngInject */
    function scrollUp($window) {
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element, attrs) {
            element.bind('click', function () {
                $window.scrollTo(0, 0);
            });

            angular.element($window).bind("scroll", function() {
                if (this.pageYOffset >= 60) {
                    $('.btn--page-up').addClass('btn--page-up--active');
                } else {
                    $('.btn--page-up').removeClass('btn--page-up--active');
                }
            });
        }
    }

})();

(function () {
    'use strict';

    angular
        .module('app.directives')
        .directive('searchMailOpen', searchMailOpen);

    searchMailOpen.$inject = ['$rootScope'];

    /* @ngInject */
    function searchMailOpen($rootScope) {
        var directive = {
            link: link,
            restrict: 'A',
            scope: true
        };
        return directive;

        function link(scope, element, attrs) {
            // console.log('scope', scope.searchForm);

            scope.isOpen = false;

            scope.open = open;
            scope.close = close;

            function open() {
                scope.isOpen = true;
                hideMenu();

                element.addClass('search-mail--open');

                // var $searchMailInput = angular.element(document.querySelector('.search-mail__input'));
                // $searchMailInput.css({
                //     'width': '100%',
                //     'transition': 'width .2s linear'
                // });
            }

            function close() {
                scope.isOpen = false;

                element.removeClass('search-mail--open');

                // var $searchMailInput = angular.element(document.querySelector('.search-mail__input'));
                // $searchMailInput.css({
                //     'width': '188px',
                //     'transition': 'width .0s linear'
                // });

                showMenu();
            }

            function showMenu() {
                var $headerNavigation = angular.element(document.querySelector('.header__navigation'));
                $headerNavigation.css({'display': 'block'});

                $rootScope.$broadcast('search:close', {});
            }

            function hideMenu() {
                var element = angular.element(document.querySelector('.header__navigation'));
                element.css({'display': 'none'});
            }
        }
    }

})();

(function () {
    'use strict';

    angular
        .module('app.directives')
        .directive('selectOnBlur', selectOnBlur);

    selectOnBlur.$inject = [];

    /* @ngInject */
    function selectOnBlur() {
        var directive = {
            require: 'uiSelect',
            link: link,
            restrict: 'EA'
        };
        return directive;

        function link($scope, $element, attrs, $select) {
            var searchInput = $element.querySelectorAll('input.ui-select-search');
            if (searchInput.length !== 1) return;

            searchInput.on('blur', function () {
                var isset = false;

                _.forEach($select.items, function (item) {
                    if (item.emails[0].value === $select.search) {
                        isset = true;
                    }
                });

                return;

                // console.log('$select', $select.items[$select.activeIndex]);
                // console.log('$select.activeIndex', $select.activeIndex);
                console.log('$select', $select);
                console.log(' $select.search', $select.search);

                if (!isset) {
                    $scope.$apply(function () {
                        var item = {emails: [{value: $select.search}]};
                        $select.select(item);
                    });
                }
            });
        }
    }

})();

(function () {
    'use strict';

    angular
        .module('app.directives')
        .directive('setFocus', setFocus);

    setFocus.$inject = ['$timeout'];

    /* @ngInject */
    function setFocus($timeout) {
        var directive = {
            link: link,
            restrict: 'A',
            scope: true
        };
        return directive;

        function link(scope, element, attrs) {
            if(attrs.setFocus !== false) {
                var timeout = 250;
                var focus = true;

                console.log(focus);

                if (attrs.setFocus) {
                    focus = scope.$eval(attrs.setFocus);
                }

                if (focus) {
                    $timeout(function () {
                        element[0].focus();
                    }, timeout);
                }
            }
        }
    }

})();

(function () {
    'use strict';

    angular
        .module('app.directives')
        .directive('showOnMousemove', showOnMousemove);

    showOnMousemove.$inject = ['$compile', '$timeout', '$templateRequest'];

    /* @ngInject */
    function showOnMousemove($compile, $timeout, $templateRequest) {
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element, attrs) {
            var $addSigh = $('.compose__add-signature');
            var intervalValulue;
            var isHover = false;

            $(function () {
                // $addSigh.css({"opacity": "0", "transition": "opacity 1s;"});

                $(".message-textarea").mousemove(function (event) {
                    $addSigh.css({"opacity": "1", "transition": "opacity 1s;"});
                    intervalValulue = setTimeout(function () {
                        if (!isHover) {
                            $addSigh.css({"opacity": "0", "transition": "opacity 1s;"});
                        }
                    }, 2000);
                });

                $addSigh.hover(function () {
                    isHover = true;
                }, function () {
                    isHover = false;
                });
            });
        }
    }

})();

(function () {
    'use strict';

    angular
        .module('app.directives')
        .directive('storageGraph', storageGraph);

    storageGraph.$inject = ['$auth'];

    /* @ngInject */
    function storageGraph($auth) {
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element, attrs) {
            function $$(selector, context) {
                context = context || document;
                var elements = context.querySelectorAll(selector);
                return Array.prototype.slice.call(elements);
            }

            $$('.storage__space-pie--my-space').forEach(function (pie) {
                var spaceDisk = (($auth.user.profile.usedQuota * 100) / $auth.user.profile.freeQuota);
                pie.style.animationDelay = '-' + parseFloat(spaceDisk) + 's';
            });
        }
    }

})();

(function () {
    'use strict';

    angular
        .module('app.directives')
        .directive('tagInputEdit', tagInputEdit);

    tagInputEdit.$inject = ['$timeout'];

    /* @ngInject */
    function tagInputEdit($timeout) {
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element, attrs) {
            var tag = {};

            var $tagItem;

            scope.newEditTag = '';

            scope.setEdit = setEdit;
            scope.editTag = editTag;

            function editTag(e) {
                $tagItem = element.parent().parent().parent();
                $tagItem.addClass('tag-item--edit');

                var tagEdit = '';
                var fullName = '';

                tag = scope.$parent.data;

                if (tag.last_name || tag.first_name) {
                    fullName += '"';
                    fullName += tag.last_name || '';
                    fullName += (tag.first_name && tag.last_name) ? ' ' : '';
                    fullName += tag.first_name || '';
                    fullName += '" ';
                    tagEdit += fullName;
                }

                tagEdit += tag.emails && tag.emails.length ? "\<" + tag.emails[0].value + "\>" : "\<" + tag.first_name + "\>";

                tag.isEdit = true;

                scope.tagEdit = tagEdit;

                $timeout(function () {
                    element.find('.tag-contact-edit').trigger('focus');
                }, 50);

                e.preventDefault();
            }

            function setEdit($event, data) {
                data.isEdit = false;

                var model = $event.target.innerText;

                if (model.match(/\"(.*)\"/)) {
                    var newFullName = model.match(/\"(.*)\"/)[1];
                }

                if (model.match(/\<(.*)\>/)) {
                    var email = model.match(/\<(.*)\>/)[1];
                }

                if (newFullName) {
                    var newNames = newFullName.split(' ');

                    if (newNames.length > 1) {
                        data.last_name = newNames[0];
                        data.first_name = newNames[1];
                    } else {
                        data.first_name = newNames[0];
                        data.last_name = '';
                    }

                    if (!email) {
                        data.emails[0].value = newNames[0];
                    }
                }

                if (email) {
                    data.emails[0].value = email;
                }

                $tagItem.removeClass('tag-item--edit');
            }
        }
    }
})();

(function () {
    'use strict';

    angular
        .module('app.directives')
        .directive('tagInputPhoneEdit', tagInputPhoneEdit);

    tagInputPhoneEdit.$inject = ['$timeout'];

    /* @ngInject */
    function tagInputPhoneEdit($timeout) {
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element, attrs) {
            var tag = {};

            scope.newEditTag = '';
            var $tagItem;

            scope.setEdit = setEdit;
            scope.editTag = editTag;

            function editTag(e) {
                $tagItem = element.parent().parent().parent();
                $tagItem.addClass('tag-item--edit');

                tag = scope.$parent.data;

                var tagEdit = tag.text;

                tag.isEdit = true;

                scope.tagEdit = tagEdit;

                $timeout(function () {
                    element.find('.tag-contact-edit').trigger('focus');
                }, 50);

                e.preventDefault();
            }

            function setEdit($event, data) {
                data.isEdit = false;
                data.text = $event.target.innerText;
                $tagItem.removeClass('tag-item--edit');
            }
        }
    }

})();

(function () {
    'use strict';

    angular
        .module('app.directives')
        .directive('tagsInputPhoneButton', tagsInputPhoneButton);

    tagsInputPhoneButton.$inject = ['$translate', '$timeout', '$compile'];

    /* @ngInject */
    function tagsInputPhoneButton($translate, $timeout, $compile) {
        var directive = {
            require: "ngModel",
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element, attrs, ngModel) {

            scope.pasteSms = pasteSms;

            scope.$watch(function () {
                return ngModel.$modelValue;
            }, function (newValue) {
                $timeout(function () {
                    if (newValue && newValue.length === 1 && !scope.$parent.vm.isSms && attrs.tagsInputPhoneButton) {
                        var tagList = angular.element(element.find('.tag-list'));

                        console.log('element', tagList, newValue);

                        var html = '<li class="tag-item tag-item--phone" ng-click="pasteSms()">{{ \'COPY_IN_SMS\' | translate }}<li>';
                        tagList.append($compile(html)(scope));
                    } else {
                        angular.element(element.find('.tag-item--phone')).remove();
                    }
                }, 50);
            }, true);

            function pasteSms() {
                angular.element(element.find('.tag-item--phone')).remove();
                scope.$parent.vm.isSms = true;
            }
        }
    }

})();

(function () {
    'use strict';

    angular
        .module('mail')
        .controller('MailController', MailController);

    MailController.$inject = ['folder', 'tagResolve', '$translatePartialLoader', '$translate'];
    /* @ngInject */
    function MailController(folder, tagResolve, $translatePartialLoader, $translate) {
        var vm = this;

        // $translatePartialLoader.addPart('mail');
        // $translate.refresh();

        activate();

        function activate() {
            vm.folder = folder;
            vm.tag = tagResolve;
        }
    }
})();

(function () {
    'use strict';

    angular
        .module('mail')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'mail',
                config: {
                    url: '/mail',
                    templateUrl: 'app/mail/mail.html',
                    controller: 'MailController',
                    controllerAs: 'vm',
                    resolve: {
                        auth: function ($auth, $state) {
                            return $auth.validateUser().catch(function () {
                                $state.go('signIn');
                            });
                        },
                        folder: function (mailBox) {
                            return mailBox.get();
                        },
                        tagResolve: function (tag) {
                            return tag.get();
                        }
                    }
                }
            }
        ];
    }
})();

(function () {
    'use strict';

    angular
        .module('print')
        .controller('PrintController', PrintController);

    PrintController.$inject = ['$timeout', '$window', '$sce', 'message'];
    /* @ngInject */
    function PrintController($timeout, $window, $sce, message) {
        var vm = this;

        vm.message = {};

        vm.getTrustHtml = getTrustHtml;

        activate();

        function activate() {
            message.$promise.then(function (response) {
                vm.message.model = response.data;

                $timeout(function () {
                    $window.print();
                    $window.close();
                }, 250);
            });
        }

        function getTrustHtml(html) {
            return $sce.trustAsHtml(html);
        }


    }
})();

(function () {
    'use strict';

    angular
        .module('print')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'print',
                config: {
                    url: '/print?mbox&connection_id&id',
                    templateUrl: 'app/print/print.html',
                    controller: 'PrintController',
                    controllerAs: 'vm',
                    title: 'Print',
                    resolve: {
                        message: function ($stateParams, mail) {
                            return mail.getById({
                                id: $stateParams.id,
                                mbox: $stateParams.mbox,
                                connection_id: $stateParams.connection_id,
                                part: 'headnhtml'
                            });
                        }
                    }
                }
            }
        ];
    }
})();

(function () {
    'use strict';

    angular
        .module('app.services')
        .factory('additionalMail', additionalMail);

    additionalMail.$inject = ['CONFIG', '$resource', '$http'];

    function additionalMail(CONFIG, $resource, $http) {
        var API_URL = CONFIG.APIHost + '/additional-mail';

        var resource = $resource(API_URL,
            {},
            {
                get: {
                    method: 'GET',
                    url: API_URL
                },
                post: {
                    method: 'POST',
                    url: API_URL
                },
                destroy: {
                    method: 'POST',
                    url: API_URL + '/delete'
                }
            }
        );

        function get(params, data) {
            return resource.get(params, data).$promise;
        }

        function post(params, data) {
            return resource.post(params, data).$promise;
        }

        function destroy(params, data) {
            return resource.destroy(params, data).$promise;
        }

        return {
            get: get,
            post: post,
            destroy: destroy
        }
    }

})();
(function () {
    'use strict';

    angular
        .module('app.services')
        .factory('authService', authService);

    authService.$inject = ['$http', '$q', 'CONFIG', '$resource', '$window'];

    function authService($http, $q, CONFIG, $resource, $window) {
        var API_URL = CONFIG.APIHost + '/auth';

        var resource = $resource(API_URL,
            {},
            {
                sendCode: {
                    method: 'POST',
                    url: API_URL + '/send-code'
                }
            }
        );

        function sendCode(params, data) {
            return resource.sendCode(params, data).$promise;
        }

        return {
            sendCode: sendCode
        }
    }

})();
(function () {
    'use strict';

    angular
        .module('app.services')
        .factory('connection', connection);

    connection.$inject = ['CONFIG', '$resource', '$translate'];

    function connection(CONFIG, $resource, $translate) {
        var API_URL = CONFIG.APIHost + '/connection';

        var resource = $resource(API_URL,
            {},
            {
                get: {
                    method: 'GET',
                    url: API_URL
                },
                getById: {
                    method: 'GET',
                    url: API_URL
                },
                create: {
                    method: 'POST',
                    url: API_URL
                },
                update: {
                    method: 'PUT',
                    url: API_URL + '/:id'
                },
                destroy: {
                    method: 'DELETE',
                    url: API_URL + '/:id'
                }
            }
        );

        function get(params, data) {
           return resource.get(params, data).$promise
        }

        function getById(params, data) {
            return resource.getById(params, data).$promise
        }

        function create(params, data) {
            return resource.create(params, data).$promise;
        }

        function update(params, data) {
            return resource.update(params, data).$promise;
        }

        function destroy(params, data) {
            $translate('WANT_DELETE_ACCOUNT').then(function (translation) {
                if (confirm(translation)) {
                    return resource.destroy(params, data).$promise;
                }
            });
        }

        return {
            get: get,
            getById: getById,
            create: create,
            update: update,
            destroy: destroy
        }
    }

})();
(function () {
    'use strict';

    angular
        .module('app.services')
        .factory('contactGroup', contactGroup);

    contactGroup.$inject = ['CONFIG', '$resource', '$rootScope'];

    function contactGroup(CONFIG, $resource, $rootScope) {
        var API_URL = CONFIG.APIHost + '/contact-group';

        var resource = $resource(API_URL,
            {},
            {
                get: {
                    method: 'GET',
                    url: API_URL
                },
                getById: {
                    method: 'GET',
                    url: API_URL + '/:id'
                },
                create: {
                    method: 'POST',
                    url: API_URL
                },
                update: {
                    method: 'PUT',
                    url: API_URL + '/:id',
                    params: {
                        id: '@id'
                    }
                },
                destroy: {
                    method: 'DELETE',
                    url: API_URL + '/:id'
                },
                addContacts: {
                    method: 'POST',
                    url: API_URL + '/:id/contacts',
                    params: {
                        id: '@id'
                    }
                }
            }
        );

        function get(params, data) {
            return resource.get(params, data).$promise;
        }

        function getById(params, data) {
            return resource.getById(params, data).$promise;
        }

        function create(params, data) {
            return resource.create(params, data).$promise
                .then(function (response) {
                    $rootScope.$broadcast('contactGroup:create:success');
                    return response;
                });
        }

        function update(params, data) {
            return resource.update(params, data).$promise
                .then(function (response) {
                    $rootScope.$broadcast('contactGroup:update:success');
                });
        }

        function destroy(params, data) {
            return resource.destroy(params, data).$promise
                .then(function (response) {
                    $rootScope.$broadcast('contactGroup:destroy:success');
                });
        }

        function addContacts(params, data) {
            return resource.addContacts(params, data).$promise
                .then(function (response) {
                    $rootScope.$broadcast('contactGroup:sync');
                });
        }

        return {
            get: get,
            getById: getById,
            create: create,
            update: update,
            destroy: destroy,
            addContacts: addContacts
        }
    }

})();
(function () {
    'use strict';

    angular
        .module('app.services')
        .factory('contact', contact);

    contact.$inject = ['CONFIG', '$resource', '$rootScope', '$http', 'Upload', 'FileSaver'];

    function contact(CONFIG, $resource, $rootScope, $http, Upload, FileSaver) {
        var API_URL = CONFIG.APIHost + '/contact';

        var resource = $resource(API_URL,
            {},
            {
                get: {
                    method: 'GET',
                    url: API_URL
                },
                getById: {
                    method: 'GET',
                    url: API_URL + '/:id'
                },
                create: {
                    method: 'POST',
                    url: API_URL
                },
                update: {
                    method: 'PUT',
                    url: API_URL + '/:id',
                    params: {
                        id: '@id'
                    }
                },
                destroy: {
                    method: 'POST',
                    url: API_URL + '/delete'
                },
                getArchive: {
                    method: 'GET',
                    url: API_URL + '/archive'
                },
                restoreArchive: {
                    method: 'POST',
                    url: API_URL + '/archive/restore'
                },
                getByGroup: {
                    method: 'GET',
                    url: API_URL + '/contacts-by-group'
                },
                exportContacts: {
                    method: 'GET',
                    url: API_URL + '/export'
                },
                find: {
                    method: 'POST',
                    url: API_URL + '/find'
                }
            }
        );

        function get(params, data) {
            return resource.get(params, data).$promise;
        }

        function getById(params, data) {
            return resource.getById(params, data).$promise
                .then(function (response) {

                });
        }

        function create(params, data) {
            return resource.create(params, data).$promise
                .then(function (response) {
                    $rootScope.$broadcast('contact:create:success');
                });
        }

        function update(params, data) {
            return resource.update(params, data).$promise
                .then(function (response) {
                    $rootScope.$broadcast('contact:update:success');
                });
        }

        function destroy(params, data) {
            return resource.destroy(params, data).$promise
                .then(function (response) {
                    $rootScope.$broadcast('contact:destroy:success');
                });
        }

        function getArchive(params, data) {
            return resource.getArchive(params, data).$promise;
        }

        function restoreArchive(params, data) {
            return resource.restoreArchive(params, data).$promise
                .then(function (response) {
                    $rootScope.$broadcast('contact:sync');
                    return response;
                });
        }

        function getByGroup(params, data) {
            return resource.getByGroup(params, data).$promise;
        }

        function find(params, data) {
            return resource.find(params, data).$promise;
        }

        function uploadContacts(params, data) {
            var upload = Upload.upload({
                url: API_URL + '/import',
                data: data
            });

            return upload.then(function (response) {
                $rootScope.$broadcast('contact:create:success');
                return response;
            });
        }

        function exportContacts() {
            return $http.get(API_URL + '/export').then(function (response) {
                console.log('FileSaver', response.data);
                var data = new Blob([response.data], {type: 'text/x-vcard'});
                FileSaver.saveAs(data, 'contacts.vcf');
            });
        }

        function sync() {
            $rootScope.$broadcast('contact:sync');
        }

        return {
            get: get,
            getById: getById,
            create: create,
            update: update,
            destroy: destroy,
            getArchive: getArchive,
            restoreArchive: restoreArchive,
            getByGroup: getByGroup,
            uploadContacts: uploadContacts,
            exportContacts: exportContacts,
            sync: sync,
            find: find
        }
    }

})();
(function () {
    'use strict';

    angular
        .module('app.services')
        .factory('country', country);

    country.$inject = ['$resource'];

    function country($resource) {
        var API_URL = '/json/countries.json';

        var resource = $resource(API_URL,
            {},
            {
                get: {
                    method: 'GET',
                    url: API_URL,
                    isArray: true
                }
            }
        );

        function get(params, data) {
            return resource.get(params, data).$promise;
        }

        return {
            get: get
        }
    }

})();
(function () {
    'use strict';

    angular
        .module('app.services')
        .factory('gallery', gallery);

    gallery.$inject = ['$rootScope'];

    function gallery($rootScope) {

        function openGallery(data) {
            $rootScope.$broadcast('gallery:open', data);
        }

        return {
            openGallery: openGallery
        }
    }

})();
(function () {
    'use strict';

    angular
        .module('app.services')
        .factory('googleTranslation', googleTranslation);

    googleTranslation.$inject = ['CONFIG', '$resource', '$http', '$rootScope'];

    function googleTranslation(CONFIG, $resource, $http, $rootScope) {
        var API_URL = 'https://translation.googleapis.com/language/translate/v2';

        var resource = $resource(API_URL,
            {},
            {
                get: {
                    method: 'POST',
                    url: API_URL + '/languages',
                    params: {
                        key: 'AIzaSyBS21iM34oEWnfFDeZChgMBxxchgLMSYQw'
                    }
                },
                translate: {
                    method: 'POST',
                    url: API_URL,
                    params: {
                        key: 'AIzaSyBS21iM34oEWnfFDeZChgMBxxchgLMSYQw'
                    }
                }
            }
        );

        function get(params, data) {
            return resource.get(params, data).$promise;
        }

        function translate(params, data) {
            return resource.translate(params, data).$promise;
        }

        return {
            get: get,
            translate: translate
        }
    }

})();
(function () {
    'use strict';

    angular
        .module('app.services')
        .factory('help', help);

    help.$inject = ['CONFIG', '$http'];

    function help(CONFIG, $http) {

        function get(params, data) {
            return $http.get('/json/help.json', data);
        }

        return {
            get: get
        }
    }

})();
(function () {
    'use strict';

    angular
        .module('app.services')
        .factory('httpPreConfig', httpPreConfig);

    httpPreConfig.$inject = ['$http', '$rootScope'];

    function httpPreConfig($http, $rootScope) {
        $http.defaults.transformRequest.push(function (data) {
            $rootScope.$broadcast('httpCallStarted');
            return data;
        });

        $http.defaults.transformResponse.push(function(data){
            $rootScope.$broadcast('httpCallStopped');
            return data;
        });

        return $http;
    }

})();
(function () {
    'use strict';

    angular
        .module('app.services')
        .factory('lang', lang);

    lang.$inject = ['CONFIG', '$translate'];

    function lang(CONFIG, $translate) {
        var list = [
            {
                lang: 'sq',
                icon: 'sq.svg',
                caption: 'Албанский'
            },
            {
                lang: 'en',
                ico: 'en-US',
                icon: 'en.svg',
                caption: 'Английский'
            },
            {
                lang: 'bs',
                icon: 'bs.svg',
                caption: 'Боснийский'
            },
            {
                lang: 'hr',
                icon: 'hr.svg',
                caption: 'Хорватский'
            },
            {
                lang: 'cs',
                ico: 'cs-CZ',
                icon: 'cs.svg',
                caption: 'Чешский'
            },
            {
                lang: 'mk',
                icon: 'mk.svg',
                caption: 'Македонский'
            },
            {
                lang: 'ru',
                ico: 'ru-RU',
                icon: 'ru.svg',
                caption: 'Русский'
            },
            {
                lang: 'sk',
                ico: 'sk-SK',
                icon: 'sk.svg',
                caption: 'Словацкий'
            },
            {
                lang: 'sl',
                icon: 'sl.svg',
                caption: 'Словенский'
            },
            {
                lang: 'uk',
                ico: 'uk-UA',
                icon: 'uk.svg',
                caption: 'Украинский'
            }
        ];

        function getCurrentLang() {
            return _.find(list, {lang: $translate.use()});
        }

        return {
            getCurrentLang: getCurrentLang
        }
    }

})();
(function () {
    'use strict';

    angular
        .module('app.services')
        .factory('list', list);

    list.$inject = [];

    function list() {

        function getMonths() {
            return moment.months();
        }

        function getDays() {
            var arr = [];
            for (var i = 1; i <= 31; i++) {
                if (i < 10) {
                    var value = '0' + i;
                    arr.push({
                        id: i,
                        name: value
                    });
                    continue;
                }
                arr.push({
                    id: i,
                    name: i
                });
            }
            return arr;
        }

        function getYears() {
            var arr = [];
            for (var i = 1935; i < 2018; i++) {
                arr.push({
                    id: i,
                    name: i
                });
            }
            return arr;
        }

        function getColors() {
            return [
                '#31c73b',
                '#7cc3c4',
                '#5a8eff',
                '#ba99ff',
                '#a8bcce',
                '#c1be00',
                '#f99000',
                '#ff8985',
                '#28a931',
                '#67a3a4',
                '#5080e7',
                '#a488e2',
                '#8e9faf',
                '#a19f00',
                '#db7f00',
                '#ff3f30',
                '#1d8925',
                '#508182',
                '#456ec8',
                '#8e75c4',
                '#73818e',
                '#807e00',
                '#bb6c00',
                '#f32300',
                '#136619',
                '#395e5f',
                '#385ca8',
                '#7760a4',
                '#57616c',
                '#5c5a00',
                '#9c5800',
                '#d51e00'
            ]
        }

        return {
            getMonths: getMonths,
            getYears: getYears,
            getDays: getDays,
            getColors: getColors
        }
    }

})();
(function () {
    'use strict';

    angular
        .module('app.services')
        .factory('mailBox', mailBox);

    mailBox.$inject = ['CONFIG', '$resource', '$http', '$rootScope'];

    function mailBox(CONFIG, $resource, $http, $rootScope) {
        var API_URL = CONFIG.APIHost + '/mail-box';

        var cacheList = [];

        var resource = $resource(API_URL,
            {},
            {
                get: {
                    method: 'GET',
                    url: API_URL
                },
                create: {
                    method: 'POST',
                    url: API_URL
                },
                update: {
                    method: 'PUT',
                    url: API_URL + '/123'
                },
                delete: {
                    method: 'DELETE',
                    url: API_URL + '/123'
                }
            }
        );

        function get(params, data) {
            return resource.get(params, data).$promise
                .then(function (response) {
                    cacheList = response.data;
                    return response;
                });
        }

        function getCacheList() {
            return cacheList;
        }

        function create(params, data) {
            return resource.create(params, data).$promise
                .then(function (response) {
                    $rootScope.$broadcast('mailBox:create:success');
                });
        }

        function update(params, data) {
            return resource.update(params, data).$promise
                .then(function (response) {
                    $rootScope.$broadcast('mailBox:update:success');
                });
        }

        function destroy(params, data) {
            return $http({
                url: API_URL + '/123',
                method: 'DELETE',
                data: data,
                headers: {
                    "Content-Type": "application/json;charset=utf-8"
                }
            }).then(function (response) {
                $rootScope.$broadcast('mailBox:destroy:success');
            });
            // return resource.destroy(params, data).$promise;
        }

        return {
            get: get,
            getCacheList: getCacheList,
            create: create,
            update: update,
            destroy: destroy
        }
    }

})();
(function () {
    'use strict';

    angular
        .module('app.services')
        .factory('mail', mail);

    mail.$inject = ['CONFIG', '$resource', '$http', '$rootScope', 'Upload', 'localStorageService'];

    function mail(CONFIG, $resource, $http, $rootScope, Upload, localStorageService) {
        var API_URL = CONFIG.APIHost + '/mail';

        var answerData = {};
        var fwdData = {};

        var resource = $resource(API_URL,
            {},
            {
                get: {
                    method: 'GET',
                    url: API_URL
                },
                post: {
                    method: 'POST',
                    url: API_URL
                },
                put: {
                    method: 'PUT',
                    url: API_URL + '/:id',
                    params: {
                        id: '@id'
                    }
                },
                getById: {
                    method: 'GET',
                    url: API_URL + '/:id'
                },
                move: {
                    method: 'POST',
                    url: CONFIG.APIHost + '/mails/move'
                },
                destroy: {
                    method: 'DELETE',
                    url: API_URL + '/:id',
                    hasBody: true,
                    params: {
                        id: '@id'
                    }
                },
                flag: {
                    method: 'POST',
                    url: CONFIG.APIHost + '/mails/flag'
                },
                deflag: {
                    method: 'POST',
                    url: CONFIG.APIHost + '/mails/deflag'
                },
                deleteAll: {
                    method: 'POST',
                    url: CONFIG.APIHost + '/mails/delete-all'
                },
                getMessagesCounters: {
                    method: 'POST',
                    url: CONFIG.APIHost + '/mails/get-messages-counters'
                }
            }
        );

        function post(params, data) {
            return resource.post(params, data).$promise
                .then(function (response) {
                    if (data.cmd === 'send') {
                        $rootScope.$broadcast('mail:send:success');
                    }

                    // if (data.sdate) {
                    $rootScope.$broadcast('mailBox:sync');
                    $rootScope.$broadcast('mail:sync');
                    // }

                    return response;
                });
        }

        function get(params, data) {
            return resource.get(params, data).$promise;
        }

        function put(params, data) {
            return resource.put(params, data).$promise
                .then(function (response) {
                    if (data.cmd === 'send') {
                        $rootScope.$broadcast('mail:send:success');
                    }

                    // if (data.sdate) {
                    $rootScope.$broadcast('mailBox:sync');
                    $rootScope.$broadcast('mail:sync');
                    // }

                    return response;
                });
        }

        function upload(params, data, files) {
            var formattedData = {
                id: params.id,
                mbox: params.mbox
            };

            _.forEach(files, function (file, i) {
                var name = 'file' + i;
                formattedData[name] = file;
            });

            if (params.id) {
                formattedData.id = params.id;
            }

            return Upload.upload({
                url: CONFIG.APIHost + '/mails/add-attach',
                data: formattedData
            });
        }

        function getById(params, data) {
            return resource.getById(params, data).$promise;
        }

        function move(params, data) {
            return resource.move(params, data).$promise
                .then(function (response) {
                    $rootScope.$broadcast('mailBox:sync');
                    $rootScope.$broadcast('mail:sync');

                    return response;
                });
        }

        function moveToFolder(folder, data) {
            var messages = angular.copy(data);

            if (messages.isLoading || !messages.checked.length) return;

            $rootScope.$broadcast('notify:message', {
                message: (messages.checked.length > 1 ? 'LETTERS_MOVED_TO_A_FOLDER' : 'LETTER_MOVED_TO_A_FOLDER'),
                folder: folder
            });

            move({}, {
                messages: filterMessage(messages.checked),
                mboxnew: folder.name
            }).then(function () {
                $rootScope.$broadcast('mailBox:sync');
            });

            _.forEach(messages.checked, function (checked) {
                _.remove(messages.items, function (message) {
                    return message.number === checked.number;
                });
            });

            messages.checked = [];

            return messages;
        }

        function flag(params, data) {
            return resource.flag(params, data).$promise;
        }

        function deflag(params, data) {
            return resource.deflag(params, data).$promise;
        }

        function destroy(data) {
            var messages = angular.copy(data);

            if (messages.isLoading || !messages.checked.length) return;

            $http({
                url: API_URL + '/' + 1,
                method: 'DELETE',
                data: {
                    messages: filterMessage(messages.checked)
                },
                headers: {
                    "Content-Type": "application/json;charset=utf-8"
                }
            }).success(function (response) {
                $rootScope.$broadcast('mailBox:sync');
                $rootScope.$broadcast('mail:sync');

                return response;
            });

            _.forEach(messages.checked, function (checked) {
                _.remove(messages.items, function (message) {
                    return message.number === checked.number;
                });
            });

            console.log('messages', messages);

            messages.checked = [];

            return messages;
        }

        function destroyOne(data, isSync) {
            var message = angular.copy(data);

            if (message.isLoading) return;

            $http({
                url: API_URL + '/' + 1,
                method: 'DELETE',
                data: {
                    messages: [message]
                },
                headers: {
                    "Content-Type": "application/json;charset=utf-8"
                }
            }).then(function () {
                $rootScope.$broadcast('mail:sync');
            });

            message = {};

            return message;
        }

        function setSeen(data) {
            var messages = angular.copy(data);

            if (messages.isLoading || !messages.checked.length) return;

            messages.isLoading = true;

            flag({}, {
                messages: filterMessage(messages.checked),
                flag: 'Seen'
            }).then(function (response) {
                messages.isLoading = false;
                $rootScope.$broadcast('mailBox:sync');
            });

            _.forEach(messages.checked, function (checked) {
                _.forEach(messages.items, function (item) {
                    if (checked.number == item.number) {
                        item.seen = true;
                    }
                });
            });

            messages.checked = [];

            return messages;
        }

        function setUnSeen(data) {
            var messages = angular.copy(data);

            if (messages.isLoading || !messages.checked.length) return;

            messages.isLoading = true;

            deflag({}, {
                messages: filterMessage(messages.checked),
                flag: 'Seen'
            }).then(function (response) {
                messages.isLoading = false;
                $rootScope.$broadcast('mailBox:sync');
            });

            _.forEach(messages.checked, function (checked) {
                _.forEach(messages.items, function (item) {
                    if (checked.number == item.number) {
                        item.seen = false;
                    }
                });
            });

            messages.checked = [];

            return messages;
        }

        function setImportant(data) {
            var messages = angular.copy(data);

            if (messages.isLoading || !messages.checked.length) return;

            messages.isLoading = true;

            flag({}, {
                messages: filterMessage(messages.checked),
                flag: 'Flagged'
            }).then(function (response) {
                messages.isLoading = false;
            });

            _.forEach(messages.checked, function (checked) {
                _.forEach(messages.items, function (item) {
                    if (checked.number == item.number) {
                        item.important = true;
                    }
                });
            });

            messages.checked = [];

            return messages;
        }

        function setUnImportant(data) {
            var messages = angular.copy(data);

            if (messages.isLoading || !messages.checked.length) return;

            messages.isLoading = true;

            deflag({}, {
                messages: filterMessage(messages.checked),
                flag: 'Flagged'
            }).then(function (response) {
                messages.isLoading = false;
            });

            _.forEach(messages.checked, function (checked) {
                _.forEach(messages.items, function (item) {
                    if (checked.number == item.number) {
                        item.important = false;
                    }
                });
            });

            messages.checked = [];

            return messages;
        }

        function setAnswerData(data) {
            answerData = data;
        }

        function getAnswerData() {
            return answerData;
        }

        function setFwdData(data) {
            localStorageService.set('fwd', data);
        }

        function getFwdData() {
            return localStorageService.get('fwd');
        }

        function filterMessage(messages) {
            var data = [];
            _.forEach(messages, function (item) {
                data.push({
                    number: item.number,
                    connection_id: item.connection_id,
                    mbox: item.mbox
                })
            });
            return data;
        }

        function deleteAll(params, data) {
            return resource.deleteAll(params, data).$promise;
        }

        function getMessagesCounters(params, data) {
            return resource.getMessagesCounters(params, data).$promise;
        }

        return {
            get: get,
            post: post,
            put: put,
            getById: getById,
            move: move,
            destroy: destroy,
            destroyOne: destroyOne,
            flag: flag,
            deflag: deflag,
            setSeen: setSeen,
            setUnSeen: setUnSeen,
            setImportant: setImportant,
            setUnImportant: setUnImportant,
            moveToFolder: moveToFolder,
            getAnswerData: getAnswerData,
            setAnswerData: setAnswerData,
            upload: upload,
            setFwdData: setFwdData,
            getFwdData: getFwdData,
            deleteAll: deleteAll,
            getMessagesCounters: getMessagesCounters
        }
    }

})();
(function () {
    'use strict';

    angular
        .module('app.services')
        .factory('payment', payment);

    payment.$inject = ['CONFIG', '$resource'];

    function payment(CONFIG, $resource) {
        var API_URL = CONFIG.APIHost + '/paypal';

        var resource = $resource(API_URL,
            {},
            {
                getById: {
                    method: 'GET',
                    url: API_URL + '/:id'
                },
                register: {
                    method: 'POST',
                    url: API_URL + '/register'
                }
            }
        );

        function getById(params, data) {
            return resource.getById(params, data).$promise;
        }

        function register(params, data) {
            return resource.register(params, data).$promise;
        }

        return {
            getById: getById,
            register: register
        }
    }

})();
(function () {
    'use strict';

    angular
        .module('app.services')
        .factory('profile', profile);

    profile.$inject = ['CONFIG', '$resource', 'Upload', '$rootScope', '$auth', '$state', 'localStorageService', '$translate'];

    function profile(CONFIG, $resource, Upload, $rootScope, $auth, $state, localStorageService, $translate) {
        var API_URL = CONFIG.APIHost + '/profile';

        var resource = $resource(API_URL,
            {},
            {
                get: {
                    method: 'GET',
                    url: API_URL
                },
                post: {
                    method: 'POST',
                    url: API_URL
                },
                put: {
                    method: 'PUT',
                    url: API_URL
                },
                destroy: {
                    method: 'DELETE',
                    url: API_URL
                },
                changePassword: {
                    method: 'POST',
                    url: API_URL + '/reset-password'
                }
            }
        );

        var profile = {};

        var isThemeLoaded = false;

        function post(params, data) {
            profile = resource.post(params, data).$promise
                .then(function (response) {
                    $rootScope.user.profile = getFormatted(response.data);
                });

            return profile;
        }

        function get(params, data) {
            profile = resource.get(params, data).$promise
                .then(function (response) {
                    $rootScope.user.profile = getFormatted(response.data);
                });

            return profile;
        }

        function getFormatted(data) {
            // data.photo = CONFIG.MediaUrl + data.photo;

            if (data.birthday) {
                var date = moment(data.birthday);
                data.bMonth = moment.months()[date.month()];
                data.bDay = date.day() + 1;
                data.bYear = date.year();
            }

            // if (!isThemeLoaded) {
            //     alert(isThemeLoaded);
            //     theme.get(data.theme);
            //     isThemeLoaded = true;
            // }

            return data;
        }

        function put(params, data) {
            profile = resource.put(params, data).$promise
                .then(function (response) {
                    $rootScope.user.profile = getFormatted(response.data);
                });

            return profile;
        }

        function destroy(params, data) {
            $translate('WANT_DELETE_ACCOUNT').then(function (translation) {
                if (confirm(translation)) {
                    resource.destroy(params, data).$promise
                        .then(function (response) {
                            $auth.signOut().then(function () {
                                $state.go('signIn');
                            });
                        });
                }
            });
        }

        function uploadAvatar(data) {
            profile = Upload.upload({
                url: API_URL + '/upload-avatar',
                data: data
            }).then(function () {
                get();
            });

            return profile;
        }

        function getCurrent() {
            return profile;
        }

        function changePassword(params, data) {
            return resource.changePassword(params, data).$promise;
        }

        function getStorageProfiles() {
            return localStorageService.get('profiles');
        }

        function addStorageProfile(user) {
            var profiles = getStorageProfiles();

            if (!profiles || !profiles.length) {
                profiles = [];
            }

            var isSet = false;

            _.forEach(profiles, function (item) {
                if (item.profile.email === user.profile.email) {
                    isSet = true;
                }
            });

            if (!isSet) {
                profiles.push(user);
                localStorageService.set('profiles', profiles);
            }
        }

        function destroyStorageProfile(user) {
            var profiles = getStorageProfiles();

            _.remove(profiles, function (item) {
                return user.profile.email === item.profile.email;
            });

            localStorageService.set('profiles', profiles);
        }

        return {
            get: get,
            post: post,
            put: put,
            uploadAvatar: uploadAvatar,
            getCurrent: getCurrent,
            destroy: destroy,
            changePassword: changePassword,
            getStorageProfiles: getStorageProfiles,
            addStorageProfile: addStorageProfile,
            destroyStorageProfile: destroyStorageProfile
        }
    }

})();
(function () {
    'use strict';

    angular
        .module('app.services')
        .factory('sieve', sieve);

    sieve.$inject = ['CONFIG', '$resource', '$http'];

    function sieve(CONFIG, $resource, $http) {
        var API_URL = CONFIG.APIHost + '/sieve';

        var resource = $resource(API_URL,
            {},
            {
                get: {
                    method: 'GET',
                    url: API_URL
                },
                post: {
                    method: 'POST',
                    url: API_URL
                },
                put: {
                    method: 'PUT',
                    url: API_URL + '/:id',
                    params: {
                        id: '@id'
                    }
                },
                getById: {
                    method: 'GET',
                    url: API_URL + '/:id'
                },
                destroy: {
                    method: 'DELETE',
                    url: API_URL + '/:id',
                    hasBody: true,
                    params: {
                        id: '@id'
                    }
                }
            }
        );

        function post(params, data) {
            return resource.post(params, data).$promise;
        }

        function get(params, data) {
            return resource.get(params, data).$promise;
        }

        function put(params, data) {
            return resource.put(params, data).$promise;
        }

        function getById(params, data) {
            return resource.getById(params, data).$promise;
        }

        function destroy(params, data) {
            if (confirm('Удалить правило?')) {
                return resource.destroy(params).$promise;
            }
        }

        return {
            get: get,
            post: post,
            put: put,
            getById: getById,
            destroy: destroy
        }
    }

})();
(function () {
    'use strict';

    angular
        .module('app.services')
        .factory('sign', sign);

    sign.$inject = ['CONFIG', '$resource', '$http', '$translate'];

    function sign(CONFIG, $resource, $http, $translate) {
        var API_URL = CONFIG.APIHost + '/sign';

        var resource = $resource(API_URL,
            {},
            {
                get: {
                    method: 'GET',
                    url: API_URL
                },
                getById: {
                    method: 'GET',
                    url: API_URL + '/:id'
                },
                post: {
                    method: 'POST',
                    url: API_URL
                },
                put: {
                    method: 'PUT',
                    url: API_URL + '/:id',
                    params: {
                        id: '@id'
                    }
                },
                destroy: {
                    method: 'DELETE',
                    url: API_URL + '/:id'
                }
            }
        );

        function get(params, data) {
            return resource.get(params, data).$promise;
        }

        function getById(params, data) {
            return resource.getById(params, data).$promise;
        }

        function post(params, data) {
            return resource.post(params, data).$promise;
        }

        function put(params, data) {
            return resource.put(params, data).$promise;
        }

        function destroy(params, data) {
            $translate('DELETE_CAPTION').then(function (translation) {
                if (confirm(translation)) {
                    return resource.destroy(params).$promise;
                }
            });
        }

        return {
            get: get,
            getById: getById,
            post: post,
            put: put,
            destroy: destroy
        }
    }

})();
(function () {
    'use strict';

    angular
        .module('app.services')
        .factory('sms', sms);

    sms.$inject = ['CONFIG', '$resource'];

    function sms(CONFIG, $resource) {
        var API_URL = CONFIG.APIHost + '/sms';

        var resource = $resource(API_URL,
            {},
            {
                sendNotify: {
                    method: 'POST',
                    url: API_URL + '/send-notify'
                }
            }
        );

        function sendNotify(params, data) {
            return resource.sendNotify(params, data);
        }

        return {
            sendNotify: sendNotify
        }
    }

})();
(function () {
    'use strict';

    angular
        .module('app.services')
        .factory('tag', tag);

    tag.$inject = ['CONFIG', '$resource', '$http', '$rootScope', '$auth'];

    function tag(CONFIG, $resource, $http, $rootScope, $auth) {
        var API_URL = CONFIG.APIHost + '/tag';

        var cacheList = [];

        var resource = $resource(API_URL,
            {},
            {
                get: {
                    method: 'GET',
                    url: API_URL
                },
                create: {
                    method: 'POST',
                    url: API_URL
                },
                update: {
                    method: 'PUT',
                    url: API_URL + '/:id',
                    params: {
                        'id': '@id'
                    }
                },
                destroy: {
                    method: 'DELETE',
                    url: API_URL + '/:id'
                },
                getTagsByMessage: {
                    method: 'POST',
                    url: CONFIG.APIHost + '/tagged-message/get-tags-by-message'
                },
                addTagToMessages: {
                    method: 'POST',
                    url: CONFIG.APIHost + '/tagged-message/add-tag-to-messages'
                },
                deleteTagFromMessages: {
                    method: 'POST',
                    url: CONFIG.APIHost + '/tagged-message/delete-tag-from-messages'
                }
            }
        );

        function get(params, data) {
            return resource.get(params, data).$promise
                .then(function (response) {
                    cacheList = response.data;
                    return response;
                });
        }

        function create(params, data) {
            return resource.create(params, data).$promise
                .then(function (response) {
                    $rootScope.$broadcast('tag:create:success');
                    return response;
                });
        }

        function update(params, data) {
            return resource.update(params, data).$promise
                .then(function () {
                    $rootScope.$broadcast('tag:update:success');
                });
        }

        function destroy(params, data) {
            return resource.destroy(params, data).$promise;
        }

        function getTagsByMessage(params, data) {
            return resource.getTagsByMessage(params, data).$promise;
        }

        function addTagToMessages(params, data) {
            return resource.addTagToMessages(params, data).$promise
                .then(function (response) {
                    $rootScope.$broadcast('tag:message:add:success');
                    return response;
                });
        }

        function deleteTagFromMessages(params, data) {
            return resource.deleteTagFromMessages(params, data).$promise
                .then(function (response) {
                    $rootScope.$broadcast('tag:message:delete:success');
                    return response;
                });
        }

        function setTag(item, data, sync) {
            var messages = angular.copy(data);

            _.forEach(messages.checked, function (messageChecked) {
                var isset = false;

                if (messageChecked.tags.length) {
                    _.forEach(messageChecked.tags, function (tag) {
                        if (item.id === tag.id) {
                            isset = true;
                        }
                    });
                }

                if (!isset) {
                    _.forEach(messages.items, function (message) {
                        if (messageChecked.number === message.number) {
                            message.tags.push(item);
                        }
                    });
                }

            });

            var response = addTagToMessages({}, {
                messages: filterMessage(messages.checked),
                tag_id: item.id
            });

            if (sync) {
                return response;
            }

            messages.checked = [];

            _.forEach(messages.items, function (item) {
                _.forEach(data.checked, function (checked) {
                    if (item.number === checked.number) {
                        messages.checked.push(item);
                    }
                });
            });

            return messages;
        }

        function setUnTag(item, data) {
            var messages = angular.copy(data);

            _.forEach(messages.checked, function (messageChecked) {
                _.forEach(messages.items, function (message) {
                    if (messageChecked.number === message.number) {
                        _.remove(message.tags, function (o) {
                            return item.id === o.id;
                        });
                    }
                });
            });

            deleteTagFromMessages({}, {
                messages: filterMessage(messages.checked),
                tag_id: item.id
            });

            messages.checked = [];

            _.forEach(messages.items, function (item) {
                _.forEach(data.checked, function (checked) {
                    if (item.number === checked.number) {
                        messages.checked.push(item);
                    }
                });
            });

            return messages;
        }

        function filterMessage(messages) {
            var data = [];
            _.forEach(messages, function(item) {
                data.push({
                    number: item.number,
                    connection_id: item.connection_id,
                    mbox: item.mbox
                })
            });
            return data;
        }

        function getCacheList() {
            return cacheList;
        }

        return {
            get: get,
            create: create,
            update: update,
            destroy: destroy,
            getTagsByMessage: getTagsByMessage,
            addTagToMessages: addTagToMessages,
            deleteTagFromMessages: deleteTagFromMessages,
            setTag: setTag,
            setUnTag: setUnTag,
            getCacheList: getCacheList,
            filterMessage: filterMessage
        }
    }

})();
(function () {
    'use strict';

    angular
        .module('app.services')
        .factory('tariff', tariff);

    tariff.$inject = ['CONFIG', '$resource', '$http'];

    function tariff(CONFIG, $resource, $http) {
        var API_URL = CONFIG.APIHost + '/tariff';

        var resource = $resource(API_URL,
            {},
            {
                getTariff: {
                    method: 'GET',
                    url: API_URL
                },
                getQuota: {
                    method: 'GET',
                    url: CONFIG.APIHost + '/quota'
                },
                getQuotaById: {
                    method: 'GET',
                    url: CONFIG.APIHost + '/quota/:id',
                    params: {
                        id: '@id'
                    }
                },
                createQuota: {
                    method: 'POST',
                    url: CONFIG.APIHost + '/quota'
                }
            }
        );

        function getTariff(params, data) {
            return resource.getTariff(params, data).$promise;
        }

        function getQuota(params, data) {
            return resource.getQuota(params, data).$promise;
        }

        function createQuota(params, data) {
            return resource.createQuota(params, data).$promise;
        }


        return {
            getTariff: getTariff,
            getQuota: getQuota,
            createQuota: createQuota
        }
    }

})();
(function () {
    'use strict';

    angular
        .module('app.services')
        .factory('theme', theme);

    theme.$inject = ['CONFIG', 'localStorageService', '$auth', '$rootScope'];

    function theme(CONFIG, localStorageService, $auth, $rootScope) {
        var elements = [
            {
                name: '.layout__left',
                alpha: 0.4
            },
            {
                name: '.header',
                alpha: 0.2
            },
            {
                name: '.footer',
                alpha: 0.2
            },
            {
                name: '.search-result--no-result',
                alpha: 0.3
            },
            {
                name: '.inbox-header',
                alpha: 0.3
            },
            {
                name: '.inbox-header__link',
                alpha: 0.3
            }
        ];

        var themes = {
            selected: {},
            items: [
                {
                    id: 100,
                    name: 'COLOR',
                    color: '#fff',
                    img: '1.jpg',
                    isColor: true,
                    colors: {
                        selected: {},
                        items: [
                            {
                                id: 1,
                                color: '#cccccc',
                                options: {
                                    type: 'light'
                                }
                            },
                            {
                                id: 2,
                                color: '#8da3d5',
                                options: {
                                    type: 'light'
                                }
                            },
                            {
                                id: 3,
                                color: 'rgba(100,167,217,.5)',
                                options: {
                                    type: 'light'
                                }
                            },
                            {
                                id: 4,
                                color: '#679e4d',
                                options: {
                                    type: 'light'
                                }
                            },
                            {
                                id: 5,
                                color: '#21af60'
                            },
                            {
                                id: 6,
                                color: '#09ae8b',
                                options: {
                                    type: 'light'
                                }
                            },
                            {
                                id: 7,
                                color: '#cfba09',
                                options: {
                                    type: 'light'
                                }
                            },
                            {
                                id: 8,
                                color: '#f5861e',
                                options: {
                                    type: 'light'
                                }
                            },
                            {
                                id: 9,
                                color: '#ea6c71',
                                options: {
                                    type: 'light'
                                }
                            },
                            {
                                id: 10,
                                color: '#dd86a6',
                                options: {
                                    type: 'light'
                                }
                            },
                            {
                                id: 11,
                                color: '#a28ec1',
                                options: {
                                    type: 'light'
                                }
                            },
                            {
                                id: 12,
                                color: '#fff',
                                options: {
                                    type: 'default'
                                }
                            },
                            {
                                id: 13,
                                color: 'rgba(0,0,0,.2)',
                                options: {
                                    type: 'dark'
                                }
                            },
                            {
                                id: 14,
                                color: 'rgba(0,0,0,.4)',
                                options: {
                                    type: 'dark'
                                }
                            },
                            {
                                id: 15,
                                color: '#333338',
                                options: {
                                    type: 'dark'
                                }
                            }
                        ]
                    }
                },
                {
                    id: 1,
                    name: 'GRASS',
                    img: '1.jpg'
                },
                {
                    id: 2,
                    name: 'WORLD_OF_TANKS',
                    img: '9.jpg'
                },
                {
                    id: 3,
                    name: 'ORANGE',
                    img: '10.jpg'
                },
                {
                    id: 4,
                    name: 'MARINE',
                    img: '2.jpg'
                }
            ]
        };

        activate();

        function activate() {
        }

        function setDefault() {
            if ($auth.user.profile) {
                get({
                    id: $auth.user.profile.theme,
                    color_id: $auth.user.profile.color_id
                });
            }
        }

        function set(theme) {
            if (theme && !theme.isColor) {
                $('body').css('background', 'url(/images/themes/origin/' + theme.img);
                $('.layout__content').css('backgroundColor', '#fff');

                // var $searchMail = $('.search-mail');

                // $searchMail.find('.search-mail__input').css({
                //     'border': '1px solid #fff'
                // });
                //
                // $searchMail.find('.search-mail__filter').css({
                //     'color': '#fff'
                // });
                //
                // $searchMail.find('.search-mail__button').css({
                //     'border': '1px solid #fff',
                //     'color': '#fff'
                // });

                // $searchMail.find('.search-mail__group').addClass('placeholder--white');

                _.forEach(elements, function (el) {
                    $(el.name).css('backgroundColor', jQuery.Color($(el.name)
                            .css('backgroundColor'))
                            .alpha(el.alpha) + '' + '!important');
                });
            }

            if (theme && theme.isColor) {
                var selectColor = theme.colors.selected;

                $('body').css('background', 'none');
                $('.layout__content').css('backgroundColor', '#fff');
                $('.header').css('backgroundColor', jQuery.Color(selectColor.color).alpha(0.2));
                $('.layout__left').css('backgroundColor', jQuery.Color(selectColor.color).alpha(0.1));

                if (selectColor.options.type === 'dark') {
                    // var $searchMail = $('.search-mail');
                    //
                    // $searchMail.find('.search-mail__input').css({
                    //     // 'border': '1px solid #fff',
                    //     'background-color': '#fff'
                    // });
                    //
                    // $searchMail.find('.search-mail__filter').css({
                    //     // 'color': '#fff',
                    //     'background-color': '#fff'
                    // });
                    //
                    // $searchMail.find('.search-mail__button').css({
                    //     // 'border': '1px solid #fff',
                    //     'color': '#fff',
                    //     'background-color': '#fff'
                    // });
                    //
                    // $searchMail.find('.search-mail__group').addClass('placeholder--white');
                }

                if (selectColor.options.type === 'light') {
                    // var $searchMail = $('.search-mail');

                    // $searchMail.find('.search-mail__input').css({
                    //     'border': '1px solid #c3c4c9'
                    // });
                    //
                    // $searchMail.find('.search-mail__filter').css({
                    //     'color': '#333'
                    // });
                    //
                    // $searchMail.find('.search-mail__button').css({
                    //     'border': '1px solid rgba(0, 0, 0, 0.2)',
                    //     'color': '#333'
                    // });

                    // $searchMail.find('.search-mail__group').removeClass('placeholder--white');
                }

                if (selectColor.options.type === 'default') {
                    // var $searchMail = $('.search-mail');

                    // $searchMail.find('.search-mail__input').css({
                    //     'border': '1px solid #c3c4c9'
                    // });
                    //
                    // $searchMail.find('.search-mail__filter').css({
                    //     'color': '#333'
                    // });
                    //
                    // $searchMail.find('.search-mail__button').css({
                    //     'border': '1px solid rgba(0, 0, 0, 0.2)',
                    //     'color': '#333'
                    // });

                    $('body').css('background', '#fff');
                    $('.layout__content').css('backgroundColor', '#fff');
                    $('.header').css('backgroundColor', '#ffffff');
                    $('.layout__left').css('backgroundColor', '#f3f5f7');

                    // $searchMail.find('.search-mail__group').addClass('placeholder--white');
                }
            }
        }

        function get(options) {
            var theme = _.find(themes.items, {'id': options.id});

            if (theme && theme.isColor) {
                theme.colors.selected = _.find(theme.colors.items, {'id': options.color_id});
            }

            set(theme);
        }

        return {
            setDefault: setDefault,
            set: set,
            get: get,
            themes: themes
        }
    }
})();
(function () {
    'use strict';

    angular
        .module('app.services')
        .factory('wb', wb);

    wb.$inject = ['CONFIG', '$resource', '$http'];

    function wb(CONFIG, $resource, $http) {
        var API_URL = CONFIG.APIHost + '/wb';

        var resource = $resource(API_URL,
            {},
            {
                get: {
                    method: 'GET',
                    url: API_URL
                },
                post: {
                    method: 'POST',
                    url: API_URL
                },
                destroy: {
                    method: 'POST',
                    url: API_URL + '/delete'
                }
            }
        );

        function get(params, data) {
            return resource.get(params, data).$promise;
        }

        function post(params, data) {
            return resource.post(params, data).$promise;
        }

        function destroy(params, data) {
            return resource.destroy(params, data).$promise;
        }

        return {
            get: get,
            post: post,
            destroy: destroy
        }
    }

})();
(function () {
    'use strict';

    angular
        .module('settings')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'settings',
                config: {
                    url: '/settings',
                    templateUrl: 'app/settings/settings.html',
                    resolve: {
                        auth: function ($auth, $state) {
                            return $auth.validateUser().catch(function () {
                                $state.go('signIn');
                            });
                        }
                        // user: function (profile) {
                        //     return profile.get();
                        // }
                    }
                }
            }
        ];
    }
})();

(function () {
    'use strict';

    angular
        .module('auth.passwordUpdate')
        .controller('PasswordUpdateController', PasswordUpdateController);

    PasswordUpdateController.$inject = ['$state', '$auth'];
    /* @ngInject */
    function PasswordUpdateController($state, $auth) {
        var vm = this;

        vm.userForm = {
            isLoading: false,
            model: {},
            validations: {
                code: {
                    'required': 'INPUT_PLACEHOLDER_ENTER_SMS_CODE'
                },
                newpassword: {
                    'required': 'INPUT_PLACEHOLDER_ENTER_NEW_PASSWORD'
                },
                passwordConf: {
                    'required': 'INPUT_PLACEHOLDER_CONFIRM_NEW_PASSWORD'
                }
            }
        };

        vm.resetPassword = resetPassword;

        activate();

        function activate() {
            // alert($state.params.username);
        }

        function resetPassword() {
            if (userForm.$invalid) return;
            vm.userForm.model.username = $state.params.username;
            console.log(vm.userForm);
            vm.userForm.isLoading = true;
            $auth.updatePassword(vm.userForm.model)
                .then(function (response) {
                    vm.userForm.isLoading = false;
                    $state.go('signIn');
                })
                .catch(function (response) {
                    // handle error response
                    vm.userForm.errors = response.data.data;
                    console.log('error', vm.userForm.errors);
                });
        }

    }
})();

(function () {
    'use strict';

    angular
        .module('auth.passwordUpdate')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'passwordUpdate',
                config: {
                    url: '/password-update?username&code',
                    templateUrl: 'app/auth/password-update/password-update.html',
                    controller: 'PasswordUpdateController',
                    controllerAs: 'vm',
                    title: 'Войти'
                }
            }
        ];
    }
})();

(function () {
    'use strict';

    angular
        .module('auth.passwordReset')
        .controller('PasswordResetController', PasswordResetController);

    PasswordResetController.$inject = ['$state', '$auth', 'authService'];
    /* @ngInject */
    function PasswordResetController($state, $auth, authService) {
        var vm = this;

        vm.userForm = {
            isLoading: false,
            model: {},
            validations: {
                username: {
                    'required': 'ENTER_EMAIL_OR_LOGIN'
                }
            }
        };

        vm.requestPasswordReset = requestPasswordReset;

        function requestPasswordReset(form) {
            if (form.$invalid) return;
            vm.userForm.isLoading = true;
            $auth.requestPasswordReset(vm.userForm.model)
                .then(function (response) {
                    vm.userForm.isLoading = false;
                    $state.go('passwordUpdate', {
                        username: vm.userForm.model.username
                    });
                })
                .catch(function (response) {
                    vm.userForm.errors = response.data.data;
                    console.log('error',vm.userForm.errors);
                });
        }
    }
})();

(function () {
    'use strict';

    angular
        .module('auth.passwordReset')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'passwordReset',
                config: {
                    url: '/password-reset',
                    templateUrl: 'app/auth/password-reset/password-reset.html',
                    controller: 'PasswordResetController',
                    controllerAs: 'vm',
                    title: 'Войти'
                }
            }
        ];
    }
})();

(function () {
    'use strict';

    angular
        .module('auth.signIn')
        .controller('SignInController', SignInController);

    SignInController.$inject = ['$scope', '$state', '$auth', 'profile'];
    /* @ngInject */
    function SignInController($scope, $state, $auth, profile) {
        var vm = this;

        vm.userForm = {
            isLoading: false,
            isChange: false,
            model: {}
        };

        $scope.$watch('vm.userForm.model', function (data, oldData) {
            if (!_.isEqual(data, oldData)) {
                vm.userForm.errors = '';
            }
        }, true);

        vm.login = login;

        activate();

        function activate() {
            vm.$state = $state;

            if ($state.params.token) {
                $state.go('home', vm.$state.params);
                return;
            }
        }

        function login() {
            vm.userForm.isLoading = true;
            $auth.submitLogin(vm.userForm.model).then(function (response) {
                vm.userForm.isLoading = false;

                profile.addStorageProfile(response);

                if (!response.profile.timezone) {
                    var profileModel = {};
                    profileModel.timezone = moment.tz.guess();
                    profile.put({}, profileModel);
                }

                $state.go('mail.inbox', {mbox: 'INBOX'});

            }).catch(function (response) {
                vm.userForm.isLoading = false;
                vm.userForm.errors = 'WRONG_LOGIN_OF_PASSWORD';
                console.log('error', vm.userForm.errors);
            });
        }
    }
})();

(function () {
    'use strict';

    angular
        .module('auth.signIn')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'signIn',
                config: {
                    url: '/sign-in?token&compose',
                    templateUrl: 'app/auth/sign-in/sign-in.html',
                    controller: 'SignInController',
                    controllerAs: 'vm',
                    title: 'Войти'
                }
            },
            {
                state: 'logout',
                config: {
                    url: '/logout',
                    onEnter: function ($auth, $state) {
                        $auth.signOut().then(function () {
                            $state.go('signIn');
                        });
                    }
                }
            }
        ];
    }
})();

(function () {
    'use strict';

    angular
        .module('auth.signUp')
        .controller('SignUpController', SignUpController);

    SignUpController.$inject = ['$state', '$auth', '$timeout', 'authService', 'profile'];
    /* @ngInject */
    function SignUpController($state, $auth, $timeout, authService, profile) {
        var vm = this;

        vm.userForm = {
            isLoading: false,
            model: {
                phone: '420'
            },
            validations: {
                phone: {
                }
            }
        };

        vm.codeForm = {
            model: {}
        };

        vm.signUp = signUp;
        vm.sendCode = sendCode;

        activate();

        function activate() {
            $timeout(function () {
                vm.userForm.model.phone = 420;
            }, 1250);
        }

        function signUp(form) {
            var data = angular.copy(vm.userForm.model);

            if (vm.userForm.model.phone) {
                data.phone = vm.userForm.model.phone.replace(/\s{2,}/g, ' ');
            }

            vm.userForm.isLoading = true;

            $auth.submitRegistration(data)
                .then(function (response) {
                    vm.userForm.isLoading = false;
                    $state.go('signIn');
                })
                .catch(function (response) {
                    vm.userForm.isLoading = false;
                    vm.userForm.errors = response.data.data;
                    vm.error = response.data.data;
                });
        }

        function sendCode() {
            var phone = vm.userForm.model.phone.replace(/\s{2,}/g, ' ');
            authService.sendCode({}, {phone: phone})
                .then(function (response) {
                    vm.codeResult = response.data;
                })
                .catch(function (response) {
                    vm.userForm.errors = response.data.data;
                    console.log('error', response);
                });
        }
    }
})();

(function () {
    'use strict';

    angular
        .module('auth.signUp')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'signUp',
                config: {
                    url: '/sign-up',
                    templateUrl: 'app/auth/sign-up/sign-up.html',
                    controller: 'SignUpController',
                    controllerAs: 'vm',
                    title: 'Регистрация'
                }
            }
        ];
    }
})();

(function () {
    'use strict';

    angular
        .module('blocks.logger')
        .factory('logger', logger);

    logger.$inject = ['$log', 'toastr'];

    /* @ngInject */
    function logger($log, toastr) {
        var service = {
            showToasts: true,
            error: error,
            info: info,
            success: success,
            warning: warning,

            // straight to console; bypass toastr
            log: $log.log
        };

        return service;
        /////////////////////

        function error(message, data, title) {
            toastr.error(message, title);
            $log.error('Error: ' + message, data);
        }

        function info(message, data, title) {
            toastr.info(message, title);
            $log.info('Info: ' + message, data);
        }

        function success(message, data, title) {
            toastr.success(message, title);
            $log.info('Success: ' + message, data);
        }

        function warning(message, data, title) {
            toastr.warning(message, title);
            $log.warn('Warning: ' + message, data);
        }
    }
}());

/* Help configure the state-base ui.router */
(function () {
    'use strict';

    angular
        .module('blocks.router')
        .provider('routerHelper', routerHelperProvider);

    routerHelperProvider.$inject = ['$locationProvider', '$stateProvider', '$urlRouterProvider'];
    /* @ngInject */
    function routerHelperProvider($locationProvider, $stateProvider, $urlRouterProvider) {
        /* jshint validthis:true */
        var config = {
            docTitle: '',
            resolveAlways: {}
        };

        // if (!(window.history && window.history.pushState)) {
        //   window.location.hash = '/';
        // }

        $locationProvider.html5Mode(true);
        $locationProvider.hashPrefix('!');

        this.configure = function (cfg) {
            angular.extend(config, cfg);
        };

        this.$get = RouterHelper;
        RouterHelper.$inject = ['$location', '$rootScope', '$state', '$timeout', 'logger', 'mailBox'];
        /* @ngInject */
        function RouterHelper($location, $rootScope, $state, $timeout, logger, mailBox) {
            var handlingStateChangeError = false;
            var hasOtherwise = false;
            var stateCounts = {
                errors: 0,
                changes: 0
            };

            var service = {
                configureStates: configureStates,
                getStates: getStates,
                stateCounts: stateCounts
            };

            init();

            return service;

            ///////////////

            function configureStates(states, otherwisePath) {
                states.forEach(function (state) {
                    state.config.resolve =
                        angular.extend(state.config.resolve || {}, config.resolveAlways);
                    $stateProvider.state(state.state, state.config);
                });
                if (otherwisePath && !hasOtherwise) {
                    hasOtherwise = true;
                    $urlRouterProvider.otherwise(otherwisePath);
                }
            }

            function handleRoutingErrors() {
                // Route cancellation:
                // On routing error, go to the dashboard.
                // Provide an exit clause if it tries to do it twice.
                $rootScope.$on('$stateChangeError',
                    function (event, toState, toParams, fromState, fromParams, error) {
                        if (handlingStateChangeError) {
                            return;
                        }
                        stateCounts.errors++;
                        handlingStateChangeError = true;
                        var destination = (toState &&
                            (toState.title || toState.name || toState.loadedTemplateUrl)) ||
                            'unknown target';
                        var msg = 'Error routing to ' + destination + '. ' +
                            (error.data || '') + '. <br/>' + (error.statusText || '') +
                            ': ' + (error.status || '');
                        // logger.warning(msg, [toState]);
                        $location.path('/');
                    }
                );
            }

            function init() {
                handleRoutingErrors();
                updateDocTitle();
            }

            function getStates() {
                return $state.get();
            }

            function updateDocTitle() {
                $rootScope.$on('$stateChangeSuccess',
                    function (event, toState, toParams, fromState, fromParams) {
                        stateCounts.changes++;
                        handlingStateChangeError = false;
                        // var title = config.docTitle + ' ' + (toState.title || '');

                        if (toState.name === 'mail.inbox') {
                            var folderName = _.result(_.find(mailBox.getCacheList().items, {'name': toParams.mbox}), 'name');
                            $rootScope.title = folderName;
                            return;
                        }

                        $rootScope.title = null;
                    }
                );
            }
        }
    }
})();

(function () {
    'use strict';

    angular
        .module('app.components')
        .component('attachButtonUpload', {
            bindings: {
                attachments: '=',
                message: '='
            },
            templateUrl: 'app/components/attach-button-upload/attach-button-upload.html',
            controller: 'AttachButtonUploadController',
            controllerAs: 'vm'
        });
})();
(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('AttachButtonUploadController', AttachButtonUploadController);

    AttachButtonUploadController.$inject = ['$auth', 'CONFIG'];
    /* @ngInject */
    function AttachButtonUploadController($auth, CONFIG) {
        var vm = this;

        activate();

        function activate() {
            vm.user = $auth.user;
            vm.config = CONFIG;

            console.log('message', vm.message);
            console.log('user', vm.user);
        }
    }
})();

(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('AlertPopupController', AlertPopupController);

    AlertPopupController.$inject = ['$uibModalInstance'];
    /* @ngInject */
    function AlertPopupController($uibModalInstance) {
        var vm = this;

        vm.close = close;

        activate();

        function activate() {
        }

        function close() {
            $uibModalInstance.dismiss('cancel');
        }
    }
})();

(function () {
    'use strict';

    angular
        .module('app.components')
        .component('attachItem', {
            bindings: {
                index: '=',
                attach: '=',
                message: '=',
                attachments: '='
            },
            templateUrl: 'app/components/attach-item/attach-item.html',
            controller: 'AttachItemController',
            controllerAs: 'vm'
        });
})();
(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('AttachItemController', AttachItemController);

    AttachItemController.$inject = ['$auth', 'CONFIG', 'gallery'];
    /* @ngInject */
    function AttachItemController($auth, CONFIG, gallery) {
        var vm = this;

        vm.openGallery = openGallery;

        activate();

        function activate() {
            vm.user = $auth.user;
            vm.CONFIG = CONFIG;
        }

        function openGallery() {
            gallery.openGallery({
                attachIndex: vm.index,
                attach: vm.attach,
                attachments: vm.attachments,
                message: vm.message
            });
        }
    }
})();

(function () {
    'use strict';

    angular
        .module('app.components')
        .component('attachUpload', {
            bindings: {
                attachmentsData: '=',
                message: '=',
                isUploading: '=',
                attachmentsConf: '=',
                onClickUpload: '&?',
                isShowAdd: '@?'
            },
            templateUrl: 'app/components/attach-upload/attach-upload.html',
            controller: 'AttachUploadController',
            controllerAs: 'vm'
        });
})();
(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('AttachUploadController', AttachUploadController);

    AttachUploadController.$inject = ['$scope', '$auth', '$state', 'CONFIG', 'gallery'];
    /* @ngInject */
    function AttachUploadController($scope, $auth, $state, CONFIG, gallery) {
        var vm = this;

        vm.isThumbLoaded = false;

        vm.getLink = getLink;
        vm.remove = remove;
        vm.getPreviewLink = getPreviewLink;
        vm.upload = upload;
        vm.openGallery = openGallery;

        $scope.$watch('vm.attachmentsConf.type', function (data) {
            // if (data && data.type === 'load') {
            //     _.forEach(vm.attachmentsData, function (item) {
            //         item.isLoaded = true;
            //     });
            // }
        });

        activate();

        function activate() {
            vm.user = $auth.user;
            vm.$state = $state;
        }

        function getPreviewLink(attachment) {
            var at = angular.copy(attachment);
            if (attachment.isPreview) return;
            attachment.isPreview = true;
            return window.URL.createObjectURL(at);
        }

        function getLink(attachment) {
            var link = [
                // MediaUrl
                CONFIG.AttachUrl,
                // "mail/",
                vm.message.model.number,
                "?mbox=",
                vm.message.model.mbox || 'Drafts',
                // vm.$state.params.mbox ? vm.$state.params.mbox : 'Drafts',
                "&part=attach&filename=",
                attachment.fileName,
                "&token=",
                vm.user.access_token,
                "&connection_id=",
                vm.message.model.connection_id
            ].join("");

            return link;
        }

        function remove(attachment) {
            _.remove(vm.attachmentsData, function (item) {
                return item === attachment;
            });
        }

        function upload($files, $invalidFiles) {
            vm.onClickUpload({
                $files: $files,
                $invalidFiles: $invalidFiles
            });
        }

        function openGallery(i) {
            gallery.openGallery({
                attachIndex: i,
                attachments: vm.attachmentsData,
                message: vm.message.model
            });
        }
    }
})();

(function () {
    'use strict';

    angular
        .module('app.components')
        .component('avatarName', {
            bindings: {
                name: '=?',
                email: '=?'
            },
            templateUrl: 'app/components/avatar-name/avatar-name.html',
            controller: 'AvatarNameController',
            controllerAs: 'vm'
        });
})();
(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('AvatarNameController', AvatarNameController);

    AvatarNameController.$inject = ['$scope'];
    /* @ngInject */
    function AvatarNameController($scope) {
        var vm = this;

        vm.title = "AvatarNameController";

        $scope.$watch('vm.name', function (data) {
            if (data) {
                getNames();
            }
        });

        $scope.$watch('vm.email', function (data) {
            if (data) {
                getNames();
            }
        });

        activate();

        function activate() {
        }

        function getNames() {
            if (vm.name) {
                vm.firstLetter = vm.name.split(' ')[0].slice(0, 1);

                if (vm.name.split(' ')[1]) {
                    vm.lastLetter = vm.name.split(' ')[1].slice(0, 1);
                }
                return;
            }
            vm.emailLetter = vm.email.slice(0, 1);
        }
    }
})();

(function () {
    'use strict';

    angular
        .module('app.components')
        .component('avatarUpload', {
            bindings: {
                onClose: '&'
            },
            templateUrl: 'app/components/avatar-upload/avatar-upload.html',
            controller: 'AvatarUploadController',
            controllerAs: 'vm'
        });
})();
(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('AvatarUploadController', AvatarUploadController);

    AvatarUploadController.$inject = ['$timeout', 'Upload', 'profile', 'profile'];
    /* @ngInject */
    function AvatarUploadController($timeout, Upload, profile) {
        var vm = this;

        vm.avatar = {};

        vm.close = close;
        vm.upload = upload;

        function upload(dataUrl, name) {
            var blob = Upload.dataUrltoBlob(dataUrl, name);

            vm.avatar.upload = profile.uploadAvatar({imageFile: blob});

            vm.avatar.isLoading = true;
            vm.avatar.upload.then(function (response) {
                $timeout(function () {
                    vm.avatar.isLoading = false;
                    close();
                });
            }, function (response) {
                // toastr.success('Не удалось загрузить аватар, пожалуйста, повторите попытку', 'Ошибка');
            }, function (evt) {
                // file.progress = Math.min(100, parseInt(100.0 *
                //                          evt.loaded / evt.total));
            });
        }

        function close() {
            vm.onClose();
        }


    }
})();

(function () {
    'use strict';

    angular
        .module('app.components')
        .component('choiceLanguage', {
            bindings: {
                data: '='
            },
            templateUrl: 'app/components/choice-language/choice-language.html',
            controller: 'ChoiceLanguageController',
            controllerAs: 'vm'
        });
})();
(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('ChoiceLanguageController', ChoiceLanguageController);

    ChoiceLanguageController.$inject = ['$http', '$timeout', '$translate'];
    /* @ngInject */
    function ChoiceLanguageController($http, $timeout, $translate) {
        var vm = this;

        vm.lang = {
            selected: {},
            items: [
                // {
                //     lang: 'sq',
                //     icon: 'sq.svg'
                // },
                // {
                //     lang: 'bs',
                //     icon: 'bs.svg'
                // },
                // {
                //     lang: 'hr',
                //     icon: 'hr.svg'
                // },
                {
                    lang: 'cs',
                    icon: 'cs.svg'
                },
                {
                    lang: 'sk',
                    icon: 'sk.svg'
                },
                // {
                //     lang: 'sl',
                //     icon: 'sl.svg'
                // },
                {
                    lang: 'en',
                    icon: 'en.svg'
                },
                // {
                //     lang: 'mk',
                //     icon: 'mk.svg'
                // },
                {
                    lang: 'ru',
                    icon: 'ru.svg'
                },
                // {
                //     lang: 'sk',
                //     icon: 'sk.svg'
                // },
                {
                    lang: 'uk',
                    icon: 'uk.svg'
                }
            ]
        };

        vm.selectLang = selectLang;

        activate();

        function activate() {
            $timeout(function () {
                var lang = $translate.use();
                moment.locale(lang);

                $http.defaults.headers.common["Accept-Language"] = lang;

                _.forEach(vm.lang.items, function (item) {
                    if (item.lang === lang) {
                        vm.lang.selected = item;
                    }
                });

            });
        }

        function selectLang(lang) {
            vm.lang.selected = lang;

            $timeout(function () {
                $translate.use(lang.lang);
                moment.locale(lang.lang);

                $http.defaults.headers.common["Accept-Language"] = lang.lang;
            });
        }
    }
})();

(function () {
    'use strict';

    angular
        .module('app.components')
        .component('blackList', {
            bindings: {
                data: '='
            },
            templateUrl: 'app/components/black-list/black-list.html',
            controller: 'BlackListController',
            controllerAs: 'vm'
        });
})();
(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('BlackListController', BlackListController);

    BlackListController.$inject = ['$auth', 'wb', '$translatePartialLoader', '$translate'];
    /* @ngInject */
    function BlackListController($auth, wb, $translatePartialLoader, $translate) {
        var vm = this;

        // $translatePartialLoader.addPart('components');
        // $translate.refresh();

        vm.form = {
            model: {}
        };

        vm.list = {
            checked: [],
            items: []
        };

        vm.add = add;
        vm.remove = remove;

        ////

        activate();

        function activate() {
            vm.user = $auth.user;

            get();
        }

        function add(form) {
            if (form.$invalid) return;

            wb.post({}, {
                email: vm.form.model.email,
                list: 'B'
            });

            vm.list.items.push({
                email: vm.form.model.email,
                wb: 'B'
            });

            vm.form.model.email = '';
        }

        function get() {
            wb.get().then(function (response) {
                vm.list.items = response.data;
            });
        }

        function remove() {
            _.forEach(vm.list.checked, function(checked) {

                wb.destroy({}, {
                    email: checked.email,
                    list: 'B'
                });

                _.remove(vm.list.items, function(item) {
                    return checked === item;
                });
            });
        }
    }
})();

(function () {
    'use strict';

    angular
        .module('app.components')
        .component('composeHeader', {
            bindings: {},
            templateUrl: 'app/components/compose-header/compose-header.html',
            controller: 'ComposeHeaderController',
            controllerAs: 'vm'
        });
})();
(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('ComposeHeaderController', ComposeHeaderController);

    ComposeHeaderController.$inject = [];
    /* @ngInject */
    function ComposeHeaderController() {
        var vm = this;

        vm.title = "ComposeHeaderController"
    }
})();

(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('ComposePopupController', ComposePopupController);

    ComposePopupController.$inject = ['mail', '$scope', '$state', '$interval', 'sign', '$rootScope', '$auth', '$uibModalInstance', 'params', 'sms', '$timeout', '$translate', '$uibModal', 'profile'];
    /* @ngInject */
    function ComposePopupController(mail, $scope, $state, $interval, sign, $rootScope, $auth, $uibModalInstance, params, sms, $timeout, $translate, $uibModal, profile) {
        var vm = this;

        vm.view = 'mail';

        vm.signs = {
            items: []
        };

        vm.smsForm = {
            model: {
                phones: []
            }
        };

        vm.connections = {
            selected: {},
            items: []
        };

        vm.interval = {};

        vm.message = {};

        vm.isSaveDraft = false;

        vm.fwd = {
            items: [],
            checked: []
        };

        vm.isUploading = false;

        vm.isCopy = false;
        vm.isCopyHidden = false;
        vm.isSms = false;

        vm.tags = [];

        vm.sendForm = {
            model: {}
        };

        vm.toList = {
            model: {}
        };

        vm.templates = {
            items: []
        };

        vm.send = send;
        vm.save = save;
        vm.upload = upload;
        vm.saveTemplate = saveTemplate;
        vm.close = close;
        vm.destroy = destroy;
        vm.pasteSign = pasteSign;
        vm.setSdate = setSdate;
        vm.pasteSignFromList = pasteSignFromList;
        vm.getSigns = getSigns;
        vm.updateConnectionName = updateConnectionName;

        $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
            $interval.cancel(vm.interval);
        });

        $scope.$watch('vm.sendForm.model.body', function (data, oldData) {
            if (data) {
                if (params.mbox !== 'Drafts' && params.mbox !== 'Outbox' && !vm.isSaveDraft && !params.fwd && !params.re && !params.template) {
                    save();
                    vm.interval = $interval(function () {
                        if (vm.sendForm.model.to && !vm.params.template) {
                            save();
                        }
                    }, 1000 * 60);
                    vm.isSaveDraft = true;
                }

                if (params.re || params.fwd) {
                    vm.interval = $interval(function () {
                        save();
                    }, 1000 * 60);
                    vm.isSaveDraft = true;
                }
            }
        });

        activate();

        function activate() {
            vm.user = $auth.user;
            vm.params = params;

            console.log('params', params);

            $translate('SENDING_MESSAGE').then(function (translationValue) {
                vm.resendTitle = translationValue;
            }, function (translationId) {
                vm.resendTitle = translationId;
            });

            getTemplates();

            if (params.id && params.mbox && !params.fwd && !params.re) {
                vm.sendForm.id = params.id;
                getMessage();
            }

            if (params.to) {
                vm.sendForm.model.to = params.to;
            }

            if (params.contactTo) {
                vm.sendForm.model.to = getEmailSelectFormat({
                    email: params.contactTo
                });
            }

            if (params.fwd && params.mbox === 'Drafts') {
                $translate('SENDING_MESSAGE').then(function (response) {
                    console.log('SENDING_MESSAGE', response);
                    pasteFwd(response);
                }, function (translationId) {
                    console.log('SENDING_MESSAGE', translationId);
                    pasteFwd(translationId);
                });
            }

            if (params.fwd && params.mbox !== 'Drafts') {
                vm.sendForm.id = params.ids;

                if (_.isArray(params.ids)) {
                    pasteFwdList();
                }

                if (!_.isArray(params.ids)) {
                    copyFwdMessage();
                }
            }

            if (params.re && params.mbox === 'Drafts') {
                pasteRe();
            }

            if (params.re && params.mbox !== 'Drafts') {
                vm.sendForm.id = params.id;
                copyReMessage();
            }

            getConnectionsList();
            getSigns();
        }

        function send(form) {
            if (form.$invalid) return;

            var data = getFormattedData();

            if (!data.sdate) {
                data.cmd = 'send';
            }

            if (vm.fwd.checked.length) {
                data.body = pasteListFwd();
            }

            data.mbox = params.mbox || 'Drafts';

            if (vm.isTranslate) {
                data.body = vm.sendForm.model.bodyTranslate;
            }

            if (vm.smsForm.model.phones.length && data.to.length < 2) {
                var smsParams = {
                    phone: 420 + '' + vm.smsForm.model.phones[0].text,
                    from: getEmailFromConnections(data.from_connection),
                    to: data.to[0]
                };
                sms.sendNotify({}, smsParams);
            }

            if (params.id) {
                mail.put({id: vm.sendForm.id}, data);
            } else {
                mail.post({}, data);
            }

            if (params.mbox === 'Drafts' && data.cmd === 'send') {
                destroy();
            }

            $rootScope.$broadcast('notify:message', {
                message: 'EMAIL_SUCCESS_SENT'
            });

            // $state.go('mail.inbox', {mbox: 'INBOX'});
            $uibModalInstance.dismiss('cancel');
        }

        function save() {
            var data = getFormattedData();

            data.mbox = params.mbox || 'Drafts';

            var result = {};

            if (!vm.sendForm.id) {
                result = mail.post({}, data);
            }

            if (vm.sendForm.id) {
                if (params.template) {
                    data.mbox = params.mbox;
                    data.connection_id = params.connection_id;
                }

                result = mail.put({id: vm.sendForm.id}, data);
            }

            result.then(function (response) {
                if (response.success) {
                    vm.sendForm.id = response.data.id;
                    vm.sendForm.model.date = {
                        date: setNowTime()
                    };
                    params.id = vm.sendForm.id;
                    params.mbox = 'Drafts';
                    params.connection_id = vm.user.profile.default_connection_id;
                }
            });
        }

        function saveTemplate() {
            var data = getFormattedData();

            if (!vm.sendForm.id) {
                data.mbox = 'Templates';

                console.log('saved', data);

                mail.post({}, data).then(function () {
                    console.log('moved', data);
                });
            }

            if (vm.sendForm.id) {
                data.number = vm.sendForm.id;
                data.connection_id = vm.user.profile.default_connection_id;
                data.mbox = params.mbox;

                mail.put({id: vm.sendForm.id}, data).then(function (response) {
                    vm.sendForm.id = response.data.id;
                    params.id = response.data.id;
                    params.mbox = data.mbox;
                    data.number = response.data.id;

                    if (params.mbox !== 'Templates') {
                        mail.move({}, {
                            mboxnew: 'Templates',
                            messages: [data]
                        }).then(function (response) {
                            vm.sendForm.id = response.data.id;
                            params.id = response.data.id;
                            params.mbox = 'Templates';
                        });
                    }
                });
            }
        }

        function getMessage() {
            mail.getById({
                id: params.id,
                mbox: params.mbox,
                connection_id: params.connection_id,
                part: 'headnhtml'
            }).then(function (response) {
                vm.sendForm.model = response.data;
                vm.sendForm.model.subject = vm.sendForm.model.Subject;

                if (vm.sendForm.model.to.length) {
                    vm.sendForm.model.to = getEmailSelectFormat({
                        first_name: vm.sendForm.model.to[0].address,
                        email: vm.sendForm.model.to[0].address
                    });
                }

                getConnectionsList();
            });
        }

        function setNowTime() {
            return moment().toDate();
        }

        function getFormattedData() {
            var data = {};

            if (vm.sendForm.model.to) {
                data.to = getMailsFromContact(vm.sendForm.model.to);
            }

            if (vm.sendForm.model.toCopy) {
                data.toCopy = getMailsFromContact(vm.sendForm.model.toCopy);
            }

            if (vm.sendForm.model.toCopyHidden) {
                data.toCopyHidden = getMailsFromContact(vm.sendForm.model.toCopyHidden);
            }

            if (vm.sendForm.model.subject) {
                data.subject = vm.sendForm.model.subject;
            }

            if (vm.sendForm.model.body) {
                data.body = vm.sendForm.model.body;
            }

            if (vm.sendForm.model.sdate) {
                data.sdate = vm.sendForm.model.sdate;
            }

            if (vm.sendForm.model.from_connection) {
                data.from_connection = vm.sendForm.model.from_connection;
            }

            if (vm.sendForm.model.attachmentsData) {
                data.attaches = [];
                _.forEach(vm.sendForm.model.attachmentsData, function (attach) {
                    data.attaches.push(attach.fileName);
                });
            }

            vm.sendForm.model.connection_id = vm.user.profile.default_connection_id;

            return data;
        }

        function getMailsFromContact(data) {
            var to = [];

            _.forEach(data, function (item) {
                if (item.emails) {
                    to.push(item.emails[0].value);
                    return;
                }
                to.push(item.first_name);
            });

            return to;
        }

        function upload(files, invalidFiles) {
            console.log(files, invalidFiles);
            if (vm.sendForm.model.attachmentsData) {
                vm.sendForm.model.attachmentsData = vm.sendForm.model.attachmentsData.concat(
                    getFormattedAttach(files)
                );
            } else {
                vm.sendForm.model.attachmentsData = getFormattedAttach(files);
            }

            vm.sendForm.model.attachmentsData = vm.sendForm.model.attachmentsData.concat(
                getFormattedErrorAttach(invalidFiles)
            );

            if (vm.sendForm.model.attachmentsData.length) {

                vm.view = 'attach';

                vm.isUploading = true;

                mail.upload({
                    id: params.id,
                    mbox: params.mbox
                }, {}, files).then(function (response) {
                    vm.isUploading = false;
                    vm.sendForm.id = response.data.data;
                    vm.sendForm.model.number = vm.sendForm.id;

                    params.id = vm.sendForm.id;

                    vm.sendForm.model.date = {
                        date: setNowTime()
                    };

                    if (!vm.sendForm.model.attachmentsData) {
                        vm.sendForm.model.attachmentsData = [];
                    }

                    _.forEach(files, function (file) {
                        file.number = vm.sendForm.id;
                        file.isLoaded = true;
                    });
                }, function () {
                    vm.isUploading = false;
                }, function (evt) {
                    vm.sendForm.model.attachmentsConf = evt;
                    vm.sendForm.model.attachmentsConf.progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                    // var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                    console.log('progress: ', vm.sendForm.model.attachmentsConf);
                });
            }
        }

        function getFormattedAttach(files) {
            _.forEach(files, function (file) {
                file.number = vm.sendForm.id;
                file.fileName = file.name;
                file.mime = file.type;
            });
            return files;
        }

        function getFormattedErrorAttach(files) {
            _.forEach(files, function (file) {
                file.number = vm.sendForm.id;
                file.fileName = file.name;
                file.mime = file.type;
            });
            return files;
        }

        function pasteSign() {
            if (params.new || params.fwd) {
                _.forEach(vm.connections.items, function (connection) {
                    if (vm.sendForm.model.from_connection === connection.id) {
                        vm.sign = connection.sign;
                    }
                });
            }
        }

        function pasteSignFromList(sign) {
            vm.sign = sign;
        }

        function pasteFwdList() {
            var messages = mail.getFwdData();
            _.forEach(messages, function (message) {
                getFwdMessageById(message, messages);
            });
        }

        function getFwdMessageById(message, messages) {
            return mail.getById({
                id: message.number,
                mbox: message.mbox,
                connection_id: message.connection_id,
                part: 'headnhtml'
            }).then(function (response) {
                if (messages.length === 1) {
                    $translate('SENDING_MESSAGE').then(function (translationValue) {
                        pasteFwd(response.data, translationValue);
                    }, function (translationId) {
                        pasteFwd(response.data, translationId);
                    });
                    return;
                }
                vm.fwd.items.push(response.data);
                vm.fwd.checked.push(response.data);
            });
        }

        function pasteFwd(message, resendTitle) {
            var html = '<br><br><br>';
            html += '--------' + resendTitle + '--------<br>';
            html += moment(message.date.date).format('DD.MM.YYYY HH.mm');
            html += ' ';
            html += message.fromAddress || '';
            html += '<br><br>';
            html += message.body + '<br>';

            vm.modelFwd = html;

            vm.sendForm.id = message.number;
            vm.sendForm.model.number = message.number;
            vm.sendForm.model.mbox = message.mbox;
            vm.sendForm.model.connection_id = message.connection_id;
            vm.sendForm.model.attachmentsData = message.attachmentsData;
            vm.sendForm.model.subject = 'Fwd: ';
            vm.sendForm.model.subject += message.Subject || '';
            // vm.sendForm.model.body = html;

            vm.sendForm.model.to = getEmailSelectFormat({
                first_name: message.from,
                email: message.fromAddress
            });
        }

        function pasteListFwd() {
            var fwd = '';

            _.forEach(vm.fwd.checked, function (item) {
                fwd += '--------' + vm.resendTitle + '--------<br>';
                fwd += moment(item.date.date).format('DD.MM.YYYY HH.mm');
                fwd += item.from || '';
                fwd += ' <br>';
                fwd += item.body + '<br>';
                // fwd += '-------- Конец пересылаемого сообщения --------';
                fwd += '<br><br>';
            });

            return fwd;
        }

        function pasteRe() {
            mail.getById({
                id: params.id,
                mbox: params.mbox,
                connection_id: params.connection_id,
                part: 'headnhtml'
            }).then(function (response) {
                var message = response.data;
                var html = '<br><br><br>';

                html += moment(message.date.date).format('DD.MM.YYYY HH.mm');
                html += ' ';
                html += message.from || '';
                html += ' <br>';
                html += message.body + '<br>';
                html += '<br>';

                vm.modelRe = html;

                console.log('vm.modelRe', vm.modelRe);

                vm.sendForm.id = message.number;
                vm.sendForm.model.number = message.number;
                vm.sendForm.model.mbox = message.mbox;
                vm.sendForm.model.connection_id = message.connection_id;
                vm.sendForm.model.attachmentsData = message.attachmentsData;
                vm.sendForm.model.subject = 'Re: ';
                vm.sendForm.model.subject += message.Subject || '';

                vm.sendForm.model.to = getEmailSelectFormat({
                    first_name: message.from,
                    email: message.fromAddress
                });
            });
        }

        function getTemplates() {
            var data = {
                'mbox': 'Templates',
                'per-page': 20,
                'len': 100
            };
            mail.get(data).then(function (response) {
                vm.templates.isLoading = false;
                vm.templates = _.assign(vm.templates, response.data);
            });
        }

        function getEmailSelectFormat(data) {
            return [{
                first_name: data.first_name,
                emails: [{
                    value: data.email
                }]
            }];
        }

        function getConnectionsList() {
            vm.connections.items = [];

            var userConnection = {
                id: vm.user.profile.default_connection_id,
                email: vm.user.profile.email,
                sign: vm.user.profile.sign,
                user_name: vm.user.profile.user_name,
                isDefault: true
            };

            vm.connections.items.push(userConnection);

            vm.connections.items = vm.connections.items.concat(vm.user.profile.connections);

            _.forEach(vm.connections.items, function (connection) {
                if (vm.user.profile.selected_connection_id === connection.id) {
                    vm.connections.selected = connection;
                }
            });

            if (!vm.user.profile.selected_connection_id) {
                vm.connections.selected = userConnection;
            }

            vm.sendForm.model.from_connection = vm.connections.selected.id;

            $timeout(function () {
                pasteSign();
            }, 250);
        }

        function copyReMessage() {
            var data = {
                id: params.id,
                mboxfrom: params.mbox,
                connection_id: params.connection_id,
                cmd: 'reply'
            };
            mail.post({}, data).then(function (response) {
                vm.sendForm.id = response.data.id;
                params.id = response.data.id;
                params.mbox = 'Drafts';
                params.connection_id = vm.user.profile.default_connection_id;
                pasteRe();
            });
        }

        function copyFwdMessage() {
            var data = {
                id: params.ids,
                mboxfrom: params.mbox,
                connection_id: params.connection_id,
                cmd: 'forward'
            };
            mail.post({}, data).then(function (response) {
                vm.sendForm.id = response.data.id;
                params.id = response.data.id;
                params.mbox = 'Drafts';
                params.connection_id = vm.user.profile.default_connection_id;
                pasteFwd();
            });
        }

        function close() {
            if (params.mbox === 'Drafts' && params.id) {
                openMessageSavePopup();
                return;
            }

            $uibModalInstance.dismiss('cancel');
        }

        function destroy() {
            if (params.id) {
                params.number = params.id;
                mail.destroyOne(params);
            }
            $uibModalInstance.dismiss('cancel');
        }

        function getEmailFromConnections(id) {
            return _.result(_.find(vm.connections.items, {'id': id}), 'email');
        }

        function setSdate(sdate) {
            vm.sendForm.model.sdate = sdate;
        }

        function getSigns() {
            sign.get().then(function (response) {
                vm.signs = response.data;
            });
        }

        function updateConnectionName(user) {
            if (user.isDefault) {
                profile.put({}, {user_name: user.user_name});
            }
        }

        function openMessageSavePopup() {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'app/components/message-save/message-save-popup.html',
                controller: ["$scope", "$uibModalInstance", function ($scope, $uibModalInstance) {
                    $scope.cancel = cancel;
                    $scope.close = close;

                    function cancel() {
                        $uibModalInstance.dismiss('cancel');
                    }

                    function close(data) {
                        $uibModalInstance.close(data);
                    }
                }],
                size: 'sm',
                windowClass: 'popup popup--folder-create'
            });

            modalInstance.result.then(function (response) {
                console.log('response', response);

                if (response && response.save) {
                    save();
                }

                $uibModalInstance.dismiss('cancel');

                $state.go('mail.inbox', {mbox: 'INBOX'});
            });
        }
    }
})();

(function () {
    'use strict';

    angular
        .module('app.components')
        .component('contactAdd', {
            bindings: {
                onClose: '&',
                email: '=?'
            },
            templateUrl: 'app/components/contact-add/contact-add.html',
            controller: 'ContactAddController',
            controllerAs: 'vm'
        });
})();
(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('ContactAddController', ContactAddController);

    ContactAddController.$inject = ['contact', 'list', '$translatePartialLoader', '$translate'];
    /* @ngInject */
    function ContactAddController(contact, list, $translatePartialLoader, $translate) {
        var vm = this;

        $translatePartialLoader.addPart('components');
        $translate.refresh();

        vm.contactForm = {
            model: {}
        };

        vm.years = [];
        vm.months = [];
        vm.days = [];

        vm.create = create;
        vm.close = close;

        ////

        activate();

        function activate() {
            vm.months = list.getMonths();
            vm.days = list.getDays();
            vm.years = list.getYears();

            if (vm.email) {
                vm.contactForm.model.email = vm.email;
            }
        }

        function create(form) {
            if (form.$invalid) return;

            vm.contactForm.model.emails = [{
                "value": vm.contactForm.model.email
            }];

            vm.contactForm.model.phones = [{
                "value": vm.contactForm.model.phone
            }];

            if (vm.contactForm.model.bDay && vm.contactForm.model.bMonth && vm.contactForm.model.bYear) {
                var monthNumber;
                _.forEach(vm.months, function (item, index) {
                    if (item === vm.contactForm.model.bMonth) {
                        monthNumber = index;
                    }
                });

                var date = moment().set({
                    month: monthNumber,
                    year: vm.contactForm.model.bYear.name,
                    date: vm.contactForm.model.bDay.name,
                    hour: 0,
                    minute: 0,
                    second: 0,
                    millisecond: 0

                });

                vm.contactForm.model.birthday = date.format('YYYY-MM-DD');
            }

            contact.create({}, vm.contactForm.model).then(function (response) {
                vm.onClose();
            });
        }

        function close() {
            vm.onClose();
        }
    }
})();

(function () {
    'use strict';

    angular
        .module('app.components')
        .component('contactEdit', {
            bindings: {
                onClose: '&',
                onCancel: '&',
                contact: '='
            },
            templateUrl: 'app/components/contact-edit/contact-edit.html',
            controller: 'ContactEditController',
            controllerAs: 'vm'
        });
})();
(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('ContactEditController', ContactEditController);

    ContactEditController.$inject = ['contact', 'list'];
    /* @ngInject */
    function ContactEditController(contact, list) {
        var vm = this;

        vm.contactForm = {
            model: {}
        };

        vm.emailForm = {
            model: {}
        };

        vm.years = [];
        vm.months = [];
        vm.days = [];

        vm.update = update;
        vm.close = close;
        vm.cancel = cancel;

        ////

        activate();

        function activate() {
            vm.contactForm.model = angular.copy(vm.contact);

            vm.months = list.getMonths();
            vm.days = list.getDays();
            vm.years = list.getYears();

            if (vm.contactForm.model.birthday) {
                parseDate();
            }
        }

        function update(form) {
            var data = {};

            if (vm.contactForm.model.bDay && vm.contactForm.model.bMonth && vm.contactForm.model.bYear) {
                var monthNumber;
                _.forEach(vm.months, function (item, index) {
                    if (item === vm.contactForm.model.bMonth) {
                        monthNumber = index;
                    }
                });

                var date = moment().set({
                    month: monthNumber,
                    year: vm.contactForm.model.bYear.name,
                    date: vm.contactForm.model.bDay.name,
                    hour: 0,
                    minute: 0,
                    second: 0,
                    millisecond: 0
                });

                vm.contactForm.model.birthday = date.format('YYYY-MM-DD');
            }

            data.first_name = vm.contactForm.model.first_name;
            data.last_name = vm.contactForm.model.last_name;
            data.middle_name = vm.contactForm.model.middle_name;
            data.birthday = vm.contactForm.model.birthday;
            data.emails = vm.contactForm.model.emails;
            data.phones = vm.contactForm.model.phones;
            data.comment = vm.contactForm.model.comment;
            data.contact_id = vm.contactForm.model.id;

            contact.update({id: vm.contactForm.model.id}, data);

            vm.onClose({result: vm.contactForm.model});
        }

        function parseDate() {
            var date = vm.contactForm.model.birthday.split('-');
            vm.contactForm.model.bYear = {name: date[0]};
            vm.contactForm.model.bMonth = moment.months()[parseInt(date[1]) - 1];
            vm.contactForm.model.bDay = {name: date[2]};
        }

        function close() {
            vm.onClose();
        }

        function cancel() {
            vm.onCancel();
        }
    }
})();

(function () {
    'use strict';

    angular
        .module('app.components')
        .component('contactDraggable', {
            bindings: {
                onClose: '&'
            },
            templateUrl: 'app/components/contact-draggable/contact-draggable.html',
            controller: 'ContactDraggableController',
            controllerAs: 'vm'
        });
})();
(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('ContactDraggableController', ContactDraggableController);

    ContactDraggableController.$inject = ['contact', 'Upload'];
    /* @ngInject */
    function ContactDraggableController(contact, Upload) {
        var vm = this;

        vm.uploadForm = {
            model: {}
        };

        vm.upload = upload;
        vm.close = close;

        ////

        function upload(form) {
            var upload = contact.uploadContacts({}, {contacts: vm.uploadForm.model.file});
            upload.then(function (response) {
                // close();
            });
        }
    }
})();

(function () {
    'use strict';

    angular
        .module('app.components')
        .component('contactExportFile', {
            bindings: {
                onClose: '&'
            },
            templateUrl: 'app/components/contact-export-file/contact-export-file.html',
            controller: 'ContactExportFileController',
            controllerAs: 'vm'
        });
})();
(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('ContactExportFileController', ContactExportFileController);

    ContactExportFileController.$inject = ['contact', 'FileSaver', '$translatePartialLoader', '$translate'];
    /* @ngInject */
    function ContactExportFileController(contact, FileSaver, $translatePartialLoader, $translate) {
        var vm = this;

        $translatePartialLoader.addPart('components');
        $translate.refresh();

        vm.uploadForm = {
            model: {}
        };

        vm.exportContacts = exportContacts;
        vm.close = close;

        ////

        function exportContacts(form) {
            contact.exportContacts();
        }

        function close() {
            vm.onClose();
        }
    }
})();

(function () {
    'use strict';

    angular
        .module('app.components')
        .component('contactEmails', {
            bindings: {
                emails: '='
            },
            templateUrl: 'app/components/contact-emails/contact-emails.html',
            controller: 'ContactEmailsController',
            controllerAs: 'vm'
        });
})();
(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('ContactEmailsController', ContactEmailsController);

    ContactEmailsController.$inject = [];
    /* @ngInject */
    function ContactEmailsController() {
        var vm = this;

        vm.emailForm = {
            model: {}
        };

        vm.add = add;
        vm.remove = remove;

        function add(form, keyCode) {
            if (form.$invalid || keyCode !== 13) return;
            vm.emails.push({value: vm.emailForm.model.email});
            vm.emailForm.model.email = '';
        }

        function remove(item) {
            _.remove(vm.emails, function (email) {
                return email === item;
            });
        }
    }
})();

(function () {
    'use strict';

    angular
        .module('app.components')
        .component('contactGroup', {
            bindings: {
                messages: '='
            },
            templateUrl: 'app/components/contact-group/contact-group.html',
            controller: 'ContactGroupController',
            controllerAs: 'vm'
        });
})();
(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('ContactGroupController', ContactGroupController);

    ContactGroupController.$inject = ['$scope', '$uibModal', 'contactGroup', '$translatePartialLoader', '$translate'];
    /* @ngInject */
    function ContactGroupController($scope, $uibModal, contactGroup, $translatePartialLoader, $translate) {
        var vm = this;

        $translatePartialLoader.addPart('components');
        $translate.refresh();

        vm.contactGroup = {
            items: {}
        };

        vm.select = select;
        vm.destroy = destroy;
        vm.openContactGroupCreatePopup = openContactGroupCreatePopup;
        vm.openContactGroupEditPopup = openContactGroupEditPopup;

        $scope.$on('contactGroup:update:success', function () {
            get();
        });

        $scope.$on('contactGroup:create:success', function () {
            get();
        });

        $scope.$on('contactGroup:destroy:success', function () {
            get();
        });

        ////

        activate();

        function activate() {
            get();
        }

        function get() {
            contactGroup.get().then(function (response) {
                vm.contactGroup.items = response.data;
            });
        }

        function select(contact) {
            _.forEach(vm.contactGroup.items, function (contact) {
                contact.isSelected = false;
            });

            contact.isSelected = true;

            vm.selected = contact;
        }

        function openContactGroupCreatePopup() {
            $uibModal.open({
                animation: true,
                templateUrl: 'app/components/contact-group-create/contact-group-create-popup.html',
                controller: ["$scope", "$uibModalInstance", function ($scope, $uibModalInstance) {
                    $scope.cancel = cancel;

                    function cancel() {
                        $uibModalInstance.dismiss('cancel');
                    }
                }],
                size: 'sm',
                windowClass: 'popup popup--contact-group-create'
            });
        }

        function openContactGroupEditPopup() {
            $uibModal.open({
                animation: true,
                templateUrl: 'app/components/contact-group-edit/contact-group-edit-popup.html',
                controller: ["$scope", "$uibModalInstance", "model", function ($scope, $uibModalInstance, model) {
                    $scope.model = model;

                    $scope.cancel = cancel;

                    function cancel() {
                        $uibModalInstance.dismiss('cancel');
                    }
                }],
                resolve: {
                    model: function () {
                        return vm.selected;
                    }
                },
                size: 'sm',
                windowClass: 'popup popup--contact-group-create'
            });
        }

        function destroy() {
            contactGroup.destroy({
                id: vm.selected.id
            }, {});
        }

    }
})();

(function () {
    'use strict';

    angular
        .module('app.components')
        .component('contactGroupAdd', {
            bindings: {
                onClose: '&'
            },
            templateUrl: 'app/components/contact-group-add/contact-group-add.html',
            controller: 'ContactGroupAddController',
            controllerAs: 'vm'
        });
})();
(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('ContactGroupAddController', ContactGroupAddController);

    ContactGroupAddController.$inject = ['$scope', 'contactGroup', 'contact', '$translatePartialLoader', '$translate'];
    /* @ngInject */
    function ContactGroupAddController($scope, contactGroup, contact, $translatePartialLoader, $translate) {
        var vm = this;
        $translatePartialLoader.addPart('components');
        $translate.refresh();

        vm.contactGroupForm = {
            model: {}
        };

        vm.contacts = {
            isLoading: true,
            params: {},
            items: [],
            checked: []
        };

        vm.contactGroup = {
            isLoading: true,
            params: {},
            items: [],
            checked: []
        };

        vm.searchForm = {
            isLoading: true,
            params: {},
            items: [],
            checked: []
        };

        vm.create = create;
        vm.close = close;
        vm.removeChecked = removeChecked;
        vm.checkedAllContacts = checkedAllContacts;
        vm.isChecked = isChecked;

        ////

        activate();

        function activate() {
            getContacts();
            getContactGroups();
        }

        function checkedAllContacts() {
            if (vm.isAllChecked && vm.contacts.items.length) {
                vm.contacts.checked = angular.copy(vm.contacts.items);
                console.log('test', vm.contacts.items);
                console.log('vm.contacts.checked', vm.contacts.checked);
                return;
            }
            vm.contacts.checked = [];
        }

        function getByGroup() {
            contact.getByGroup(vm.contacts.params, {}).then(function (response) {
                vm.contacts.items = response.data;
            });
        }

        function getContacts() {
            vm.contacts.isLoading = true;
            contact.get(vm.contacts.params, {}).then(function (response) {
                vm.contacts.isLoading = false;
                vm.contacts.items = response.data;
            });
        }

        function getContactGroups() {
            contactGroup.get().then(function (response) {
                vm.contactGroup.items = response.data;
                console.log('vm.contactGroup', vm.contactGroup);
            });
        }

        function create(form) {
            console.log('vm.contactGroupForm', vm.contactGroupForm, form);

            if (form.$invalid) return;

            contactGroup.create({}, vm.contactGroupForm.model).then(function (response) {
                console.log('response', response);
                if (vm.contacts.checked.length) {
                    addContacts(response.data);
                    return;
                }

                close();
            });
        }

        function addContacts(group) {
            var ids = [];

            _.forEach(vm.contacts.checked, function (contact) {
                ids.push(contact.id);
            });

            contactGroup.addContacts({}, {
                ids: ids,
                id: group.id
            }).then(function () {
                vm.contacts.checked = [];

                contact.sync();

                close();
            });
        }

        function removeChecked(contact) {
            _.remove(vm.contacts.checked, function (item) {
                return item === contact;
            })
        }

        function isChecked(contact) {
            return _.forEach(vm.contacts.checked, function (item) {
                if (contact === item) {

                    return true;
                }
            })
        }

        function close() {
            vm.onClose();
        }
    }
})();

(function () {
    'use strict';

    angular
        .module('app.components')
        .component('contactGroupCreate', {
            bindings: {
                onClose: '&'
            },
            templateUrl: 'app/components/contact-group-create/contact-group-create.html',
            controller: 'ContactGroupCreateController',
            controllerAs: 'vm'
        });
})();
(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('ContactGroupCreateController', ContactGroupCreateController);

    ContactGroupCreateController.$inject = ['contactGroup'];
    /* @ngInject */
    function ContactGroupCreateController(contactGroup) {
        var vm = this;

        vm.contactGroupForm = {
            model: {}
        };

        vm.create = create;
        vm.close = close;

        ////

        function create(form) {
            console.log('vm.contactGroupForm', vm.contactGroupForm, form);

            if (form.$invalid) return;

            contactGroup.create({}, vm.contactGroupForm.model).then(function (response) {
                vm.onClose();
            });
        }

        function close() {
            vm.onClose();
        }
    }
})();

(function () {
    'use strict';

    angular
        .module('app.components')
        .component('contactGroupEdit', {
            bindings: {
                onClose: '&',
                model: '='
            },
            templateUrl: 'app/components/contact-group-edit/contact-group-edit.html',
            controller: 'ContactGroupEditController',
            controllerAs: 'vm'
        });
})();
(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('ContactGroupEditController', ContactGroupEditController);

    ContactGroupEditController.$inject = ['contactGroup', '$translatePartialLoader', '$translate'];
    /* @ngInject */
    function ContactGroupEditController(contactGroup, $translatePartialLoader, $translate) {
        var vm = this;

        $translatePartialLoader.addPart('components');
        $translate.refresh();

        vm.contactGroupForm = {
            model: {}
        };

        vm.create = create;
        vm.close = close;

        ////

        activate();

        function activate() {
            vm.contactGroupForm.model = angular.copy(vm.model);
        }

        function create(form) {
            console.log('vm.contactGroupForm', vm.contactGroupForm, form);

            if (form.$invalid) return;

            contactGroup.update({}, vm.contactGroupForm.model).then(function (response) {
                vm.onClose();
            });
        }

        function close() {
            vm.onClose();
        }
    }
})();

(function () {
    'use strict';

    angular
        .module('app.components')
        .component('contactGroupList', {
            bindings: {
                contacts: '='
            },
            templateUrl: 'app/components/contact-group-list/contact-group-list.html',
            controller: 'ContactGroupListController',
            controllerAs: 'vm'
        });
})();
(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('ContactGroupListController', ContactGroupListController);

    ContactGroupListController.$inject = ['$scope', '$state', '$uibModal', 'contactGroup', 'contact'];
    /* @ngInject */
    function ContactGroupListController($scope, $state, $uibModal, contactGroup, contact) {
        var vm = this;

        vm.contactGroup = {};

        vm.openGroupAddPopup = openGroupAddPopup;
        vm.addContacts = addContacts;


        // $scope.$on('mailBox:update:success', function () {
        //     getMailBox();
        // });
        //
        // $scope.$on('mailBox:create:success', function () {
        //     getMailBox();
        // });
        //
        // $scope.$on('mailBox:destroy:success', function () {
        //     getMailBox();
        // });

        /////

        activate();

        function activate() {
            getContactGroup();
        }

        function getContactGroup() {
            contactGroup.get().then(function (response) {
                vm.contactGroup.items = response.data;
            });
        }

        function addContacts(group) {
            var ids = [];

            _.forEach(vm.contacts.checked, function (contact) {
                ids.push(contact.id);
            });

            contactGroup.addContacts({}, {
                ids: ids,
                id: group.id
            }).then(function () {
                vm.contacts.checked = [];
            });
        }

        function openGroupAddPopup() {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'app/components/contact-group-add/contact-group-add-popup.html',
                controller: ["$scope", "$uibModalInstance", function ($scope, $uibModalInstance) {
                    $scope.cancel = cancel;

                    function cancel() {
                        $uibModalInstance.dismiss('cancel');
                    }
                }],
                size: 'sm',
                windowClass: 'popup popup--contact-group-add'
            });
        }
    }
})();

(function () {
    'use strict';

    angular
        .module('app.components')
        .component('contactHeader', {
            bindings: {
                contacts: '='
            },
            templateUrl: 'app/components/contact-header/contact-header.html',
            controller: 'ContactHeaderController',
            controllerAs: 'vm'
        });
})();
(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('ContactHeaderController', ContactHeaderController);

    ContactHeaderController.$inject = ['$state', '$scope', '$uibModal', 'contact'];
    /* @ngInject */
    function ContactHeaderController($state, $scope, $uibModal, contact) {
        var vm = this;

        vm.isSeen = true;

        vm.checkedAllContacts = checkedAllContacts;
        // vm.syncMail = syncMail;
        // vm.move = move;
        vm.destroy = destroy;
        // vm.triggerSeen = triggerSeen;
        vm.openContactAddPopup = openContactAddPopup;
        vm.openContactRestorePopup = openContactRestorePopup;

        $scope.$watch('vm.contacts.checked', function (data) {
            console.log('data', data);
            if (data && !data.length) {
                vm.isAllChecked = false;
            }
        }, true);

        activate();

        function activate() {
            vm.$state = $state;
        }

        function checkedAllContacts() {
            if (vm.isAllChecked && vm.contacts.items) {
                vm.contacts.checked = angular.copy(vm.contacts.items);
                return;
            }
            vm.contacts.checked = [];
        }

        // function syncMail() {
        //     if ($state.current.name === 'mail.inbox') {
        //         $scope.$emit('mail:sync');
        //         return;
        //     }
        //     $scope.$emit('folders:sync');
        //     $state.go('mail.inbox');
        // }

        function destroy() {
            var ids = [];

            _.forEach(vm.contacts.checked, function (contact) {
                ids.push(contact.id);
            });

            contact.destroy({}, {ids: ids});

            _.forEach(ids, function (id) {
                _.remove(vm.contacts.items, function (item) {
                    return item.id === id;
                });
            });
        }

        // function destroy(folder) {
        //     var ids = [];
        //
        //     _.forEach(vm.contacts.checked, function (message) {
        //         ids.push(message.number);
        //     });
        //
        //     mail.destroy({}, {
        //         id: 1,
        //         ids: ids,
        //         mbox: vm.contacts.checked[0].mbox
        //     }).then(function (response) {
        //         vm.contacts.checked = [];
        //         syncMail();
        //     });
        // }

        // function triggerSeen() {
        //     vm.isSeen ? setUnSeen() : setSeen();
        //     vm.isSeen = !vm.isSeen;
        // }
        //
        // function setSeen() {
        //     vm.contacts = mail.setSeen(vm.contacts);
        //     // console.log('seen', vm.contacts);
        // }
        //
        // function setUnSeen() {
        //     vm.contacts = mail.setUnSeen(vm.contacts);
        //     // console.log('unseen', vm.contacts);
        // }

        function openContactAddPopup() {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'app/components/contact-add/contact-add-popup.html',
                controller: ["$scope", "$uibModalInstance", function ($scope, $uibModalInstance) {
                    $scope.cancel = cancel;

                    function cancel() {
                        $uibModalInstance.dismiss('cancel');
                    }
                }],
                size: 'sm',
                windowClass: 'popup popup--contact-add'
            });
        }

        function openContactRestorePopup() {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'app/components/contact-restore/contact-restore-popup.html',
                controller: ["$scope", "$uibModalInstance", function ($scope, $uibModalInstance) {
                    $scope.cancel = cancel;

                    function cancel() {
                        $uibModalInstance.dismiss('cancel');
                    }
                }],
                size: 'sm',
                windowClass: 'popup popup--contact-restore'
            });
        }

    }
})();

(function () {
    'use strict';

    angular
        .module('app.components')
        .component('contactImportFile', {
            bindings: {
                onClose: '&'
            },
            templateUrl: 'app/components/contact-import-file/contact-import-file.html',
            controller: 'ContactImportFileController',
            controllerAs: 'vm'
        });
})();
(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('ContactImportFileController', ContactImportFileController);

    ContactImportFileController.$inject = ['contact', 'Upload', '$translatePartialLoader', '$translate'];
    /* @ngInject */
    function ContactImportFileController(contact, Upload, $translatePartialLoader, $translate) {
        var vm = this;

        $translatePartialLoader.addPart('components');
        $translate.refresh();

        vm.uploadForm = {
            model: {}
        };

        vm.upload = upload;
        vm.close = close;

        ////

        function upload(form) {
            var upload = contact.uploadContacts({}, {contacts: vm.uploadForm.model.file});
            upload.then(function (response) {
                close();
            });
        }

        function close() {
            vm.onClose();
        }
    }
})();

(function () {
    'use strict';

    angular
        .module('app.components')
        .component('contactItem', {
            bindings: {
                contact: '=',
                contacts: '='
            },
            templateUrl: 'app/components/contact-item/contact-item.html',
            controller: 'ContactItemController',
            controllerAs: 'vm'
        });
})();
(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('ContactItemController', ContactItemController);

    ContactItemController.$inject = ['$state', '$scope', '$uibModal', 'contact', 'tag'];
    /* @ngInject */
    function ContactItemController($state, $scope, $uibModal, contact, tag) {
        var vm = this;

        vm.openContactViewPopup = openContactViewPopup;
        vm.destroy = destroy;
        vm.openComposePopup = openComposePopup;

        // activate();

        function activate() {
            vm.$state = $state;
            console.log('activate', vm.message);
            getTags();
        }

        function goToUrl() {
            console.log('state', $state.params.mbox);
            if ($state.params.mbox === 'Drafts') {
                $state.go('mail.compose', {
                    id: vm.message.number,
                    mbox: vm.message.mbox
                });
                return;
            }
            $state.go('mail.message', {
                id: vm.message.number,
                mbox: vm.message.mbox
            });
        }

        function getTags() {
            tag.getTagsByMessage({}, {
                mbox: vm.message.mbox,
                id: vm.message.number
            }).then(function (response) {
                vm.message.tags = response.data;
            })
        }

        function destroy(model) {
            contact.destroy({}, {ids: [model.id]});
            _.remove(vm.contacts.items, function (item) {
                return model.id === item.id;
            });
        }

        function openContactViewPopup() {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'app/components/contact-view/contact-view-popup.html',
                controller: ["$scope", "$uibModalInstance", "model", function ($scope, $uibModalInstance, model) {
                    $scope.cancel = cancel;

                    $scope.contact = model;

                    function cancel() {
                        $uibModalInstance.dismiss('cancel');
                    }
                }],
                resolve: {
                    model: function () {
                        return vm.contact;
                    }
                },
                size: 'sm',
                windowClass: 'popup popup--contact-add'
            });
        }

        function openComposePopup() {
            var params = {
                new: true,
                contactTo: vm.contact.emails[0].value
            };

            var modalInstance = $uibModal.open({
                animation: false,
                templateUrl: 'app/components/compose-popup/compose-popup.html',
                controller: 'ComposePopupController',
                controllerAs: 'vm',
                resolve: {
                    params: function () {
                        return params;
                    }
                },
                size: 'lg',
                windowClass: 'popup popup--compose popup--compose-minimize hide-elm'
            });
        }
    }
})();

(function () {
    'use strict';

    angular
        .module('app.components')
        .component('contactItemList', {
            bindings: {
                contacts: '='
            },
            templateUrl: 'app/components/contact-item-list/contact-item-list.html',
            controller: 'ContactItemListController',
            controllerAs: 'vm'
        });
})();
(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('ContactItemListController', ContactItemListController);

    ContactItemListController.$inject = [];
    /* @ngInject */
    function ContactItemListController() {
        var vm = this;

        activate();

        function activate() {

        }
    }
})();

(function () {
    'use strict';

    angular
        .module('app.components')
        .component('contactPhones', {
            bindings: {
                phones: '='
            },
            templateUrl: 'app/components/contact-phones/contact-phones.html',
            controller: 'ContactPhonesController',
            controllerAs: 'vm'
        });
})();
(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('ContactPhonesController', ContactPhonesController);

    ContactPhonesController.$inject = [];
    /* @ngInject */
    function ContactPhonesController() {
        var vm = this;

        vm.phoneForm = {
            model: {}
        };

        vm.add = add;
        vm.remove = remove;

        function add(form, keyCode) {
            if (form.$invalid || keyCode !== 13) return;
            vm.phones.push({value: vm.phoneForm.model.phone});
            vm.phoneForm.model.phone = '';
        }

        function remove(item) {
            _.remove(vm.phones, function (phone) {
                return phone === item;
            });
        }
    }
})();

(function () {
    'use strict';

    angular
        .module('app.components')
        .component('contactOtherList', {
            bindings: {},
            templateUrl: 'app/components/contact-other-list/contact-other-list.html',
            controller: 'ContactOtherListController',
            controllerAs: 'vm'
        });
})();
(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('ContactOtherListController', ContactOtherListController);

    ContactOtherListController.$inject = ['$scope', '$state', '$uibModal', 'contactGroup', 'contact', '$translatePartialLoader', '$translate'];
    /* @ngInject */
    function ContactOtherListController($scope, $state, $uibModal, contactGroup, contact, $translatePartialLoader, $translate) {
        var vm = this;

        $translatePartialLoader.addPart('components');
        $translate.refresh();

        vm.openContactImportFilePopup = openContactImportFilePopup;
        vm.openContactExportFilePopup = openContactExportFilePopup;

        /////

        activate();

        function activate() {
        }

        function openContactImportFilePopup() {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'app/components/contact-import-file/contact-import-file-popup.html',
                controller: ["$scope", "$uibModalInstance", function ($scope, $uibModalInstance) {
                    $scope.cancel = cancel;

                    function cancel() {
                        $uibModalInstance.dismiss('cancel');
                    }
                }],
                size: 'sm',
                windowClass: 'popup popup--contact-import-file'
            });
        }

        function openContactExportFilePopup() {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'app/components/contact-export-file/contact-export-file-popup.html',
                controller: ["$scope", "$uibModalInstance", function ($scope, $uibModalInstance) {
                    $scope.cancel = cancel;

                    function cancel() {
                        $uibModalInstance.dismiss('cancel');
                    }
                }],
                size: 'sm',
                windowClass: 'popup popup--contact-import-file'
            });
        }
    }
})();

(function () {
    'use strict';

    angular
        .module('app.components')
        .component('contactRestore', {
            bindings: {
                onClose: '&'
            },
            templateUrl: 'app/components/contact-restore/contact-restore.html',
            controller: 'ContactRestoreController',
            controllerAs: 'vm'
        });
})();
(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('ContactRestoreController', ContactRestoreController);

    ContactRestoreController.$inject = ['contact'];
    /* @ngInject */
    function ContactRestoreController(contact) {
        var vm = this;

        vm.restore = {
            checked: [],
            items: []
        };

        vm.close = close;
        vm.restoreArchive = restoreArchive;

        ////

        activate();

        function activate() {
            get();
        }

        function get() {
            contact.getArchive().then(function (response) {
                vm.restore.items = response.data;
            });
        }
        
        function restoreArchive() {
            var dates = [];

            _.forEach(vm.restore.checked, function (restore) {
                dates.push(restore.date);
            });

            contact.restoreArchive({}, {dates: dates}).then(function (response) {
                vm.restore.items = response.data;
            });
        }

        function close() {
            vm.onClose();
        }
    }
})();

(function () {
    'use strict';

    angular
        .module('app.components')
        .component('contactToAdd', {
            bindings: {
                onClose: '&',
                onCancel: '&',
                addresses: '=?'
            },
            templateUrl: 'app/components/contact-to-add/contact-to-add.html',
            controller: 'ContactToAddController',
            controllerAs: 'vm'
        });
})();
(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('ContactToAddController', ContactToAddController);

    ContactToAddController.$inject = ['$scope', 'contactGroup', 'contact'];
    /* @ngInject */
    function ContactToAddController($scope, contactGroup, contact) {
        var vm = this;

        vm.contactGroupForm = {
            model: {}
        };

        vm.contacts = {
            isLoading: true,
            params: {},
            items: [],
            checked: []
        };

        vm.contactGroup = {
            isLoading: true,
            params: {},
            items: [],
            checked: []
        };

        vm.searchForm = {
            isLoading: true,
            params: {},
            items: [],
            checked: []
        };

        vm.cancel = cancel;
        vm.checkedAllContacts = checkedAllContacts;
        vm.add = add;

        ////

        activate();

        function activate() {
            console.log('addresses', vm.addresses);
            getContacts();
            getContactGroups();

            if (vm.addresses) {
                vm.contacts.checked = angular.copy(vm.addresses);
            }
        }

        function checkedAllContacts() {
            if (vm.isAllChecked && vm.contacts.items.length) {
                vm.contacts.checked = angular.copy(vm.contacts.items);
                console.log('test', vm.contacts.items);
                console.log('vm.contacts.checked', vm.contacts.checked);
                return;
            }
            vm.contacts.checked = [];
        }

        function getContacts() {
            vm.contacts.isLoading = true;
            contact.get(vm.contacts.params, {}).then(function (response) {
                vm.contacts.isLoading = false;
                vm.contacts.items = response.data;
            });
        }

        function getContactGroups() {
            contactGroup.get().then(function (response) {
                vm.contactGroup.items = response.data;
                console.log('vm.contactGroup', vm.contactGroup);
            });
        }

        function add() {
            vm.onClose({result: vm.contacts.checked});
        }

        function cancel() {
            vm.onCancel();
        }
    }
})();

(function () {
    'use strict';

    angular
        .module('app.components')
        .component('contactToAddSelect', {
            bindings: {
                addresses: '=',
                name: '@?',
                required: '@?',
                isAutofocus: '=?',
                isPhoneButton: '@?'
            },
            templateUrl: 'app/components/contact-to-add-select/contact-to-add-select.html',
            controller: 'ContactToAddSelectController',
            controllerAs: 'vm'
        });
})();
(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('ContactToAddSelectController', ContactToAddSelectController);

    ContactToAddSelectController.$inject = ['$uibModal', 'contact'];
    /* @ngInject */
    function ContactToAddSelectController($uibModal, contact) {
        var vm = this;

        vm.contacts = {
            items: {}
        };

        vm.selectContact = {};

        vm.getContacts = getContacts;
        vm.findContacts = findContacts;
        vm.makeContact = makeContact;
        vm.openContactToAddPopup = openContactToAddPopup;

        ////

        activate();

        function activate() {
            getContacts();
        }

        function getContacts() {
            contact.get().then(function (response) {
                vm.contacts.items = response.data;
            });
        }

        function findContacts(q, isTagFocus) {
            if (isTagFocus) {
                if (q) {
                    var res = contact.find({}, {q: q});
                } else {
                    var res = contact.get();
                }

                return res.then(function (response) {
                    var contacts = response.data;

                    _.forEach(contacts, function (item) {
                        if (!item.first_name) {
                            item.first_name = item.emails[0].value;
                        }
                    });

                    return contacts;
                });
            }
        }

        function makeContact(email) {
            return {
                first_name: email,
                emails: [{value: email}]
            };
        }

        function openContactToAddPopup() {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'app/components/contact-to-add/contact-to-add-popup.html',
                controller: ["$scope", "$uibModalInstance", "addresses", function ($scope, $uibModalInstance, addresses) {
                    $scope.addresses = addresses;

                    $scope.cancel = cancel;
                    $scope.close = close;

                    function close(result) {
                        $uibModalInstance.close(result);
                    }

                    function cancel() {
                        $uibModalInstance.dismiss('cancel');
                    }
                }],
                size: 'sm',
                windowClass: 'popup popup--contact-group-add',
                resolve: {
                    addresses: function () {
                        return vm.addresses;
                    }
                }
            });

            modalInstance.result.then(function (response) {
                vm.addresses = response;
            });
        }
    }
})();

(function () {
    'use strict';

    angular
        .module('app.components')
        .component('contactToAddSelectMenu', {
            bindings: {
                tag: '=',
                addresses: '=',
                onRemove: '&',
                onEdit: '&'
            },
            templateUrl: 'app/components/contact-to-add-select-menu/contact-to-add-select-menu.html',
            controller: 'ContactToAddSelectMenuController',
            controllerAs: 'vm'
        });
})();
(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('ContactToAddSelectMenuController', ContactToAddSelectMenuController);

    ContactToAddSelectMenuController.$inject = ['$scope', '$uibModal'];
    /* @ngInject */
    function ContactToAddSelectMenuController($scope, $uibModal) {
        var vm = this;

        vm.remove = remove;
        vm.selectOnlyThis = selectOnlyThis;
        vm.openContactAddPopup = openContactAddPopup;
        vm.setEdit = setEdit;

        ////

        activate();

        function activate() {
            console.log('tag', vm.tag);
            console.log('vm.addresses', vm.addresses);
        }

        function remove() {
            vm.onRemove();
        }

        function selectOnlyThis() {
            vm.addresses = [vm.tag];
        }

        function openContactAddPopup() {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'app/components/contact-add/contact-add-popup.html',
                controller: ["$scope", "$uibModalInstance", "tag", function ($scope, $uibModalInstance, tag) {
                    $scope.cancel = cancel;

                    $scope.email = tag.first_name;

                    function cancel() {
                        $uibModalInstance.dismiss('cancel');
                    }
                }],
                size: 'sm',
                windowClass: 'popup popup--contact-add',
                resolve: {
                    tag: function () {
                        return vm.tag
                    }
                }
            });
        }

        function setEdit(e) {
            vm.onEdit({result: e});
        }
    }
})();

(function () {
    'use strict';

    angular
        .module('app.components')
        .component('contactView', {
            bindings: {
                onClose: '&',
                contact: '='
            },
            templateUrl: 'app/components/contact-view/contact-view.html',
            controller: 'ContactViewController',
            controllerAs: 'vm'
        });
})();
(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('ContactViewController', ContactViewController);

    ContactViewController.$inject = ['$scope', '$uibModal', 'wb'];
    /* @ngInject */
    function ContactViewController($scope, $uibModal, wb) {
        var vm = this;

        // $translatePartialLoader.addPart('components');
        // $translate.refresh();

        vm.close = close;
        vm.openContactEditPopup = openContactEditPopup;
        vm.getDate = getDate;
        vm.openComposePopup = openComposePopup;
        vm.addToBlackList = addToBlackList;

        ////

        activate();

        function activate() {
        }

        function close() {
            vm.onClose();
        }

        function openContactEditPopup() {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'app/components/contact-edit/contact-edit-popup.html',
                controller: ["$scope", "$uibModalInstance", "model", function ($scope, $uibModalInstance, model) {
                    $scope.contact = model;
                    $scope.result = {};

                    $scope.cancel = cancel;
                    $scope.close = close;

                    ////

                    function cancel() {
                        $uibModalInstance.dismiss('cancel');
                    }

                    function close(result) {
                        $uibModalInstance.close(result);
                    }
                }],
                resolve: {
                    model: function () {
                        return vm.contact;
                    }
                },
                size: 'sm',
                windowClass: 'popup popup--contact-add'
            });

            modalInstance.result.then(function (response) {
                vm.contact = response;
            });
        }

        function getDate(date) {
            return moment(date).format('DD MMMM YYYY');
        }

        function openComposePopup() {
            var params = {
                new: true,
                contactTo: vm.contact.emails[0].value
            };

            var modalInstance = $uibModal.open({
                animation: false,
                templateUrl: 'app/components/compose-popup/compose-popup.html',
                controller: 'ComposePopupController',
                controllerAs: 'vm',
                resolve: {
                    params: function () {
                        return params;
                    }
                },
                size: 'lg',
                windowClass: 'popup popup--compose popup--compose-minimize hide-elm'
            });
        }

        function addToBlackList() {
            _.forEach(vm.contact.emails, function (email) {
                wb.post({}, {
                    email: email.value,
                    list: 'B'
                });
            });
        }
    }
})();

(function () {
    'use strict';

    angular
        .module('app.components')
        .component('dateSort', {
            bindings: {
                from: '=',
                to: '='
            },
            templateUrl: 'app/components/date-sort/date-sort.html',
            controller: 'DateSortController',
            controllerAs: 'vm'
        });
})();
(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('DateSortController', DateSortController);

    DateSortController.$inject = ['$scope', '$state', 'mail'];
    /* @ngInject */
    function DateSortController($scope, $state, mail) {
        var vm = this;

        vm.monthList = [];

        vm.selectDate = selectDate;
        vm.selectDefault = selectDefault;

        ////

        activate();

        function activate() {
            getMonthList();
            getMessagesCounters();
        }

        function getMessagesCounters() {
            mail.getMessagesCounters({mbox: $state.params.mbox}).then(function (response) {
                // console.log('mail', Object.keys(response.data.by_years[moment().year()])[0]);
                vm.fromMonth = Object.keys(response.data.by_years[moment().year()])[0] - 1;
                getMonthList();
            });
        }

        function getMonthList() {
            vm.currentMonth = moment().month();
            _.forEach(moment.months(), function (month, i) {
                if (i >= vm.fromMonth && i <= vm.currentMonth) {
                    console.log(vm.fromMonth, vm.currentMonth);
                    console.log('month', month);
                    vm.monthList.push({month: month, monthNumber: i});
                }
            });
        }

        function selectDate(i) {
            var selectedMonth = moment().month(i);
            vm.from = selectedMonth.startOf('month').unix();
            vm.to = selectedMonth.endOf('month').unix();
        }

        function selectDefault() {
            var startMonth = moment().month(0);
            var endMonth = moment().month(vm.currentMonth);
            vm.from = startMonth.startOf('month').unix();
            vm.to = endMonth.endOf('month').unix();
        }
    }
})();

(function () {
    'use strict';

    angular
        .module('app.components')
        .component('emailAdd', {
            bindings: {
                onClose: '&',
                onCancel: '&',
                model: '='
            },
            templateUrl: 'app/components/email-add/email-add.html',
            controller: 'EmailAddController',
            controllerAs: 'vm'
        });
})();
(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('EmailAddController', EmailAddController);

    EmailAddController.$inject = ['additionalMail', 'profile'];
    /* @ngInject */
    function EmailAddController(additionalMail, profile) {
        var vm = this;

        vm.emailForm = {
            model: {}
        };

        vm.changeEmail = changeEmail;
        vm.close = close;
        vm.cancel = cancel;

        ////

        activate();

        function activate() {
        }

        function changeEmail(form) {
            console.log('vm.emailForm', vm.emailForm.model, form);

            if (form.$invalid) return;

            additionalMail.post({}, {
                email: vm.emailForm.model.email
            }).then(function (response) {
                close({result: vm.emailForm.model.email});
            }, function (response) {
                vm.error = response.data.data.message;
            });
        }

        function close(data) {
            vm.onClose(data);
        }

        function cancel(data) {
            vm.onCancel(data);
        }
    }
})();

(function () {
    'use strict';

    angular
        .module('app.components')
        .component('emailChange', {
            bindings: {
                onClose: '&',
                model: '='
            },
            templateUrl: 'app/components/email-change/email-change.html',
            controller: 'EmailChangeController',
            controllerAs: 'vm'
        });
})();
(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('EmailChangeController', EmailChangeController);

    EmailChangeController.$inject = ['$timeout', 'profile'];
    /* @ngInject */
    function EmailChangeController($timeout, profile) {
        var vm = this;

        vm.emailForm = {
            model: {}
        };

        vm.changeEmail = changeEmail;
        vm.close = close;

        ////

        activate();

        function activate() {
        }

        function changeEmail(form) {
            console.log('vm.emailForm', vm.emailForm.model, form);

            if (form.$invalid) return;

            profile.put({}, vm.emailForm.model)
                .then(function (response) {
                    close();
                }, function(response) {
                    vm.error = response.data.data.message;
                });
        }

        function close() {
            vm.onClose();
        }
    }
})();

(function () {
    'use strict';

    angular
        .module('app.components')
        .component('example', {
            bindings: {},
            templateUrl: 'app/components/example/example.html',
            controller: 'ExampleController',
            controllerAs: 'vm'
        });
})();
(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('ExampleController', ExampleController);

    ExampleController.$inject = [];
    /* @ngInject */
    function ExampleController() {
        var vm = this;

        vm.name = "Example component"
    }
})();

(function () {
    'use strict';

    angular
        .module('app.components')
        .component('folderCreate', {
            bindings: {
                onСlose: '&'
            },
            templateUrl: 'app/components/folder-create/folder-create.html',
            controller: 'FolderCreateController',
            controllerAs: 'vm'
        });
})();
(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('FolderCreateController', FolderCreateController);

    FolderCreateController.$inject = ['mailBox'];
    /* @ngInject */
    function FolderCreateController(mailBox) {
        var vm = this;

        vm.form = {
            model: {}
        };

        vm.create = create;
        vm.close = close;

        activate();

        function activate() {
            console.log('cancel()', vm);
        }

        function create(form) {
            if (form.$invalid) return;

            mailBox.create({}, vm.form.model).then(function (response) {
                console.log('response', response);
                close();
            });
        }

        function close() {
            vm.onСlose();
        }
    }
})();

(function () {
    'use strict';

    angular
        .module('app.components')
        .component('folderEdit', {
            bindings: {
                model: '=',
                onСlose: '&'
            },
            templateUrl: 'app/components/folder-edit/folder-edit.html',
            controller: 'FolderEditController',
            controllerAs: 'vm'
        });
})();
(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('FolderEditController', FolderEditController);

    FolderEditController.$inject = ['mailBox'];
    /* @ngInject */
    function FolderEditController(mailBox) {
        var vm = this;

        vm.form = {
            model: {}
        };

        vm.update = update;
        vm.close = close;

        activate();

        function activate() {
            vm.form.model.mbox = angular.copy(vm.model).name;
            vm.form.model.mboxnew = angular.copy(vm.model).name;

            // vm.form.model
            console.log('vm.form.model', vm.form.model);
        }

        function update(form) {
            if (form.$invalid) return;

            mailBox.update({}, vm.form.model).then(function (response) {
                console.log('response', response);
                close();
            });
        }

        function close() {
            vm.onСlose();
        }
    }
})();

(function () {
    'use strict';

    angular
        .module('app.components')
        .component('folderList', {
            bindings: {
                messages: '='
            },
            templateUrl: 'app/components/folder-list/folder-list.html',
            controller: 'FolderListController',
            controllerAs: 'vm'
        });
})();
(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('FolderListController', FolderListController);

    FolderListController.$inject = ['$scope', '$auth', '$state', '$uibModal', 'mailBox', 'mail'];
    /* @ngInject */
    function FolderListController($scope, $auth, $state, $uibModal, mailBox, mail) {
        var vm = this;

        vm.standartFolders = [
            {
                name: 'INBOX',
                icon: 'icon-incoming'
            },
            {
                name: 'Drafts',
                icon: 'icon-draft'
            },
            {
                name: 'Trash',
                icon: 'icon-bin'
            },
            {
                name: 'Sent',
                icon: 'icon-sent'
            },
            {
                name: 'Junk',
                icon: 'icon-spam'
            }
        ];

        vm.folders = {};

        vm.openFolderCreatePopup = openFolderCreatePopup;
        vm.move = move;

        $scope.$on('mailBox:update:success', function () {
            getMailBox();
        });

        $scope.$on('mailBox:create:success', function () {
            getMailBox();
        });

        $scope.$on('mailBox:destroy:success', function () {
            getMailBox();
        });

        /////

        activate();

        function activate() {
            vm.$state = $state;
            getMailBox();
        }

        function getMailBox() {
            var folders = mailBox.getCacheList();

            vm.folders = _.assign(vm.folders, folders);
            getMailBoxFormatted();

            // mailBox.get().then(function (response) {
            //     vm.folders = _.assign(vm.folders, response.data);
            //     getMailBoxFormatted();
            // });
        }

        function getMailBoxFormatted() {
            _.forEach(vm.folders.items, function (folder) {
                var isSub = true;

                _.forEach(vm.standartFolders, function (standartFolder) {
                    if (folder.name == standartFolder.name) {
                        isSub = false;
                    }
                });

                if (isSub) {
                    folder.isSub = true;
                } else {
                    folder.isSub = false;
                }
            });

            sortFolder();
        }

        function sortFolder() {
            vm.folders.items = _.sortBy(vm.folders.items, 'caption').reverse();
            vm.folders.items = _.sortBy(vm.folders.items, [
                {'name': 'INBOX'},
                {'isSub': true},
                {'name': 'Sent'},
                {'name': 'Trash'},
                {'name': 'Junk'},
                {'name': 'Drafts'}
            ]).reverse();
        }

        function move(folder) {
            vm.messages = mail.moveToFolder(folder, vm.messages);
        }

        function openFolderCreatePopup() {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'app/components/folder-create/folder-create-popup.html',
                controller: ["$scope", "$uibModalInstance", function ($scope, $uibModalInstance) {
                    $scope.cancel = cancel;

                    function cancel() {
                        $uibModalInstance.dismiss('cancel');
                    }
                }],
                size: 'sm',
                windowClass: 'popup popup--folder-create'
            });
        }
    }
})();

(function () {
    'use strict';

    angular
        .module('app.components')
        .component('folderSettings', {
            bindings: {
                messages: '='
            },
            templateUrl: 'app/components/folder-settings/folder-settings.html',
            controller: 'FolderSettingsController',
            controllerAs: 'vm'
        });
})();
(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('FolderSettingsController', FolderSettingsController);

    FolderSettingsController.$inject = ['$scope', '$auth', '$state', '$uibModal', 'mailBox', 'mail'];
    /* @ngInject */
    function FolderSettingsController($scope, $auth, $state, $uibModal, mailBox, mail) {
        var vm = this;

        vm.standartFolders = [
            {
                name: 'INBOX',
                icon: 'icon-incoming'
            },
            {
                name: 'Drafts',
                icon: 'icon-draft'
            },
            {
                name: 'Trash',
                icon: 'icon-bin'
            },
            {
                name: 'Sent',
                icon: 'icon-sent'
            },
            {
                name: 'Junk',
                icon: 'icon-spam'
            }
        ];

        vm.folders = {};

        vm.selected = {};

        vm.openFolderCreatePopup = openFolderCreatePopup;
        vm.openFolderEditPopup = openFolderEditPopup;
        vm.move = move;
        vm.select = select;
        vm.destroy = destroy;

        $scope.$on('mailBox:update:success', function () {
            getMailBox();
        });

        $scope.$on('mailBox:create:success', function () {
            getMailBox();
        });

        $scope.$on('mailBox:destroy:success', function () {
            getMailBox();
        });

        /////

        activate();

        function activate() {
            vm.$state = $state;
            getMailBox();
        }

        function getMailBox() {
            mailBox.get().then(function (response) {
                vm.folders = _.assign(vm.folders, response.data);
                getMailBoxFormatted();
            });
        }

        function getMailBoxFormatted() {
            _.forEach(vm.folders.items, function (folder) {
                var isSub = true;

                _.forEach(vm.standartFolders, function (standartFolder) {
                    if (folder.name == standartFolder.name) {
                        isSub = false;
                    }
                });

                if (isSub) {
                    folder.isSub = true;
                } else {
                    folder.isSub = false;
                }
            });

            sortFolder();
        }

        function sortFolder() {
            vm.folders.items = _.sortBy(vm.folders.items, 'caption').reverse();
            vm.folders.items = _.sortBy(vm.folders.items, [
                {'name': 'INBOX'},
                {'isSub': true},
                {'name': 'Sent'},
                {'name': 'Trash'},
                {'name': 'Junk'},
                {'name': 'Drafts'}
            ]).reverse();
        }

        function move(folder) {
            var ids = [];

            _.forEach(vm.messages.checked, function (message) {
                ids.push(message.number);
            });

            mail.move({}, {
                ids: ids,
                mbox: vm.messages.checked[0].mbox,
                mboxnew: folder.name
            }).then(function (response) {
                vm.messages.checked = [];
                $scope.$emit('mail:sync');
            });
        }

        function openFolderCreatePopup() {
            $uibModal.open({
                animation: true,
                templateUrl: 'app/components/folder-create/folder-create-popup.html',
                controller: ["$scope", "$uibModalInstance", function ($scope, $uibModalInstance) {
                    $scope.cancel = cancel;

                    function cancel() {
                        $uibModalInstance.dismiss('cancel');
                    }
                }],
                size: 'sm',
                windowClass: 'popup popup--folder-create'
            });
        }

        function openFolderEditPopup() {
            $uibModal.open({
                animation: true,
                templateUrl: 'app/components/folder-edit/folder-edit-popup.html',
                controller: ["$scope", "$uibModalInstance", "model", function ($scope, $uibModalInstance, model) {
                    $scope.model = model;

                    $scope.cancel = cancel;

                    function cancel() {
                        $uibModalInstance.dismiss('cancel');
                    }
                }],
                resolve: {
                    model: function () {
                        return vm.selected;
                    }
                },
                size: 'sm',
                windowClass: 'popup popup--folder-create'
            });
        }

        function select(folder) {
            _.forEach(vm.folders.items, function (folder) {
                folder.isSelected = false;
            });

            folder.isSelected = true;

            vm.selected = folder;
        }

        function destroy() {
            mailBox.destroy({}, {
                mbox: vm.selected.name
            });
        }
    }
})();

(function () {
    'use strict';

    angular
        .module('app.components')
        .component('inboxHeader', {
            bindings: {
                messages: '='
            },
            templateUrl: 'app/components/inbox-header/inbox-header.html',
            controller: 'InboxHeaderController',
            controllerAs: 'vm'
        });
})();
(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('InboxHeaderController', InboxHeaderController);

    InboxHeaderController.$inject = ['$state', '$scope', '$uibModal', 'mail'];
    /* @ngInject */
    function InboxHeaderController($state, $scope, $uibModal, mail) {
        var vm = this;

        vm.title = "InboxHeaderController";

        vm.isSeen = true;

        vm.checkedAllMessages = checkedAllMessages;
        vm.syncMail = syncMail;
        vm.move = move;
        vm.destroy = destroy;
        vm.triggerSeen = triggerSeen;
        vm.goToAnswer = goToAnswer;
        vm.goToFwd = goToFwd;

        $scope.$watch('vm.messages.checked', function (data) {
            if (data && !data.length) {
                vm.isAllChecked = false;
            }

            // console.log('seen', data);

           /* _.forEach(data, function (item) {
                console.log('seen', item);
                if (!item.seen) {
                    console.log('seen', true);
                }
            });*/
        }, true);

        activate();

        function activate() {
            vm.$state = $state;
            console.log('vm.state', vm.$state);
        }

        function checkedAllMessages() {
            if (vm.isAllChecked && vm.messages.items) {
                vm.messages.checked = angular.copy(vm.messages.items);
                return;
            }
            vm.messages.checked = [];
        }

        function syncMail() {
            if ($state.current.name === 'mail.inbox') {
                $scope.$emit('mail:sync');
                return;
            }
            $scope.$emit('folders:sync');
            $state.go('mail.inbox', {mbox: 'INBOX'});
        }

        function move(folder) {
            vm.messages = mail.moveToFolder(folder, vm.messages);
        }

        function destroy() {
            vm.messages = mail.destroy(vm.messages);
        }

        function triggerSeen() {
            vm.isSeen ? setUnSeen() : setSeen();
            vm.isSeen = !vm.isSeen;
        }

        function setSeen() {
            vm.messages = mail.setSeen(vm.messages);
        }

        function setUnSeen() {
            vm.messages = mail.setUnSeen(vm.messages);
        }

        function goToAnswer() {
            var data = mail.getAnswerData();

            var params = {
                id: data.number,
                mbox: data.mbox,
                connection_id: data.connection_id,
                re: true
            };

            $uibModal.open({
                animation: false,
                templateUrl: 'app/components/compose-popup/compose-popup.html',
                controller: 'ComposePopupController',
                controllerAs: 'vm',
                resolve: {
                    params: function () {
                        return params;
                    }
                },
                size: 'lg',
                windowClass: 'popup popup--compose popup--compose-minimize hide-elm'
            });
        }

        function goToFwd() {
            var ids = [];

            _.forEach(vm.messages.checked, function (item) {
                ids.push(item.number);
            });

            mail.setFwdData(vm.messages.checked);

            var params = {
                ids: ids,
                mbox: vm.messages.checked[0].mbox,
                connection_id: vm.messages.checked[0].connection_id,
                fwd: true
            };

            var modalInstance = $uibModal.open({
                animation: false,
                templateUrl: 'app/components/compose-popup/compose-popup.html',
                controller: 'ComposePopupController',
                controllerAs: 'vm',
                resolve: {
                    params: function () {
                        return params;
                    }
                },
                size: 'lg',
                windowClass: 'popup popup--compose popup--compose-minimize hide-elm'
            });

            // $state.go('mail.compose', {
            //     ids: ids,
            //     mbox: vm.messages.checked[0].mbox,
            //     connection_id: vm.messages.checked[0].connection_id,
            //     fwd: true
            // });
        }
    }
})();

(function () {
    'use strict';

    angular
        .module('app.components')
        .component('inboxMessage', {
            bindings: {
                message: '=',
                messages: '='
            },
            templateUrl: 'app/components/inbox-message/inbox-message.html',
            controller: 'InboxMessageController',
            controllerAs: 'vm'
        });
})();
(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('InboxMessageController', InboxMessageController);

    InboxMessageController.$inject = ['$state', '$scope', 'mail', 'tag', '$rootScope', '$uibModal'];
    /* @ngInject */
    function InboxMessageController($state, $scope, mail, tag, $rootScope, $uibModal) {
        var vm = this;

        vm.standartFolders = [
            {
                name: 'INBOX',
                icon: 'icon-incoming'
            },
            {
                name: 'Drafts',
                icon: 'icon-draft'
            },
            {
                name: 'Trash',
                icon: 'icon-bin'
            },
            {
                name: 'Sent',
                icon: 'icon-sent'
            },
            {
                name: 'Junk',
                icon: 'icon-spam'
            },
            {
                name: 'Templates',
                icon: 'icon-draft'
            }
        ];

        vm.getDate = getDate;
        vm.openMessage = openMessage;
        vm.setSeen = setSeen;
        vm.setImportant = setImportant;
        vm.getIconByFolderName = getIconByFolderName;
        vm.onDrop = onDrop;
        vm.isChecked = isChecked;

        $scope.$watch('vm.messages.checked', function (data, oldData) {
            vm.isChecked = false;
            _.forEach(vm.messages.checked, function (checked) {
                if (vm.message.number === checked.number && vm.message.connection_id === checked.connection_id) {
                    vm.isChecked = true;
                }
            });
        }, true);

        activate();

        function activate() {
            vm.$state = $state;
        }

        function getDate(date) {
            var newDate = new Date(date);

            return moment(newDate).calendar(null, {
                sameDay: 'hh:mm',
                nextDay: '[Tomorrow]',
                nextWeek: 'dddd',
                lastDay: 'D MMM',
                lastWeek: 'D MMM YY',
                sameElse: 'D MMM YY'
            });
        }

        function openMessage() {
            if ($state.params.mbox === 'Drafts' || $state.params.mbox === 'Outbox') {
                var params = {
                    id: vm.message.number,
                    mbox: vm.message.mbox,
                    connection_id: vm.message.connection_id
                };

                $uibModal.open({
                    animation: false,
                    templateUrl: 'app/components/compose-popup/compose-popup.html',
                    controller: 'ComposePopupController',
                    controllerAs: 'vm',
                    resolve: {
                        params: function () {
                            return params;
                        }
                    },
                    size: 'lg',
                    windowClass: 'popup popup--compose popup--compose-minimize hide-elm'
                });
                return;
            }

            if ($state.params.mbox === 'Templates') {
                var params = {
                    template: true,
                    id: vm.message.number,
                    mbox: vm.message.mbox,
                    connection_id: vm.message.connection_id
                };

                $uibModal.open({
                    animation: false,
                    templateUrl: 'app/components/compose-popup/compose-popup.html',
                    controller: 'ComposePopupController',
                    controllerAs: 'vm',
                    resolve: {
                        params: function () {
                            return params;
                        }
                    },
                    size: 'lg',
                    windowClass: 'popup popup--compose popup--compose-minimize hide-elm'
                });
                return;
            }

            $state.go('mail.message', {
                id: vm.message.number,
                mbox: vm.message.mbox,
                connection_id: vm.message.connection_id
            });
        }

        function setSeen() {
            if (vm.message.seen && !vm.message.isLoading) {
                vm.message.isLoading = true;
                mail.deflag({}, {
                    messages: [vm.message],
                    flag: 'Seen'
                }).then(function () {
                    vm.message.isLoading = false;
                    $rootScope.$broadcast('mailBox:sync');
                });
                vm.message.seen = !vm.message.seen;
                return;
            }

            vm.message.isLoading = true;
            mail.flag({}, {
                messages: [vm.message],
                flag: 'Seen'
            }).then(function () {
                vm.message.isLoading = false;
                $rootScope.$broadcast('mailBox:sync');
            });
            vm.message.seen = !vm.message.seen
        }

        function setImportant() {
            if (vm.message.important && !vm.message.isLoading) {
                vm.message.isLoading = true;
                mail.deflag({}, {
                    messages: [vm.message],
                    flag: 'Flagged'
                }).then(function () {
                    vm.message.isLoading = false;
                });
                vm.message.important = !vm.message.important;
                return;
            }

            vm.message.isLoading = true;
            mail.flag({}, {
                messages: [vm.message],
                flag: 'Flagged'
            }).then(function () {
                vm.message.isLoading = false;
            });
            vm.message.important = !vm.message.important;
        }

        function getIconByFolderName(folder) {
            var icon = _.filter(vm.standartFolders, function (item) {
                return item.name === folder;
            });
            return icon[0].icon;
        }

        function onDrop(event, index, item) {
            var isset = false;

            _.forEach(vm.message.tags, function (tag) {
                if (item.id === tag.id) {
                    isset = true;
                }
            });

            if (!isset) {
                var data = {
                    number: vm.message.number,
                    connection_id: vm.message.connection_id,
                    mbox: vm.message.mbox
                };

                tag.addTagToMessages({}, {
                    tag_id: item.id,
                    messages: [data]
                });

                vm.message.tags.push(item);
            }
        }

        function isChecked(message) {
            // message.isChecked = false;
            _.forEach(vm.messages.checked, function (checked) {
                if (message.number === checked.number) {
                    message.isChecked = true;
                }
            });
        }
    }
})();

(function () {
    'use strict';

    angular
        .module('app.components')
        .component('inboxMessageList', {
            bindings: {
                messages: '='
            },
            templateUrl: 'app/components/inbox-message-list/inbox-message-list.html',
            controller: 'InboxMessageListController',
            controllerAs: 'vm'
        });
})();
(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('InboxMessageListController', InboxMessageListController);

    InboxMessageListController.$inject = ['$scope', 'mail'];
    /* @ngInject */
    function InboxMessageListController($scope, mail) {
        var vm = this;

        activate();

        function activate() {

        }

    }
})();

(function () {
    'use strict';

    angular
        .module('app.components')
        .component('langList', {
            bindings: {
                messages: '=',
                onClose: '&?',
                useLang: '=?'
            },
            templateUrl: 'app/components/lang-list/lang-list.html',
            controller: 'LangListController',
            controllerAs: 'vm'
        });
})();
(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('LangListController', LangListController);

    LangListController.$inject = ['$translate', '$http', '$timeout', 'lang'];
    /* @ngInject */
    function LangListController($translate, $http, $timeout, lang) {
        var vm = this;

        // console.log('getCurrentLang', lang.getCurrentLang());

        vm.lang = {
            selected: {},
            items: [
                // {
                //     lang: 'sq',
                //     icon: 'sq.svg',
                //     caption: 'Албанский'
                // },
                // {
                //     lang: 'bs',
                //     icon: 'bs.svg',
                //     caption: 'Боснийский'
                // },
                // {
                //     lang: 'hr',
                //     icon: 'hr.svg',
                //     caption: 'Хорватский'
                // },
                {
                    lang: 'cs',
                    icon: 'cs.svg',
                    caption: 'Чешский'
                },
                {
                    lang: 'sk',
                    icon: 'sk.svg',
                    caption: 'Словацкий'
                },
                // {
                //     lang: 'sl',
                //     icon: 'sl.svg',
                //     caption: 'Словенский'
                // },
                {
                    lang: 'en',
                    icon: 'en.svg',
                    caption: 'Английский'
                },
                // {
                //     lang: 'mk',
                //     icon: 'mk.svg',
                //     caption: 'Македонский'
                // },
                {
                    lang: 'ru',
                    icon: 'ru.svg',
                    caption: 'Русский'
                },
                {
                    lang: 'uk',
                    icon: 'uk.svg',
                    caption: 'Украинский'
                }
            ]
        };

        vm.selectLang = selectLang;

        activate();

        function activate() {
            // $translate.use('ru');

            var lng = $translate.use();
            moment.locale(lng);

            $http.defaults.headers.common["Accept-Language"] = lng;

            _.forEach(vm.lang.items, function (item) {
                if (item.lang === lng) {
                    vm.lang.selected = item;
                }
            });
        }

        function selectLang(lng) {
            vm.lang.selected = lng;

            $timeout(function () {
                $translate.use(lng.lang);
                moment.locale(lng.lang);

                $timeout(function () {
                    vm.useLang = lang.getCurrentLang();
                }, 50);

                $http.defaults.headers.common["Accept-Language"] = lng.lang;

                close();
            });
        }

        function close() {
            vm.onClose();
        }
    }
})();

(function () {
    'use strict';

    angular
        .module('app.components')
        .component('messageAlertSend', {
            bindings: {
            },
            templateUrl: 'app/components/message-alert-send/message-alert-send.html',
            controller: 'MessageAlertSendController',
            controllerAs: 'vm'
        });
})();
(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('MessageAlertSendController', MessageAlertSendController);

    MessageAlertSendController.$inject = ['$scope', '$timeout'];
    /* @ngInject */
    function MessageAlertSendController($scope, $timeout) {
        var vm = this;

        vm.message = '';

        vm.close = close;

        $scope.$on('notify:message', function (e, data) {
            vm.message = data.message;
            vm.folder = data.folder;
            show();
        });

        ////

        activate();

        function activate() {
        }

        function show() {
            vm.isShow = true;

            $timeout(function() {
                vm.isShow = false;
            }, 3000);
        }

        function close() {
            vm.isShow = false;
        }
    }
})();

(function () {
    'use strict';

    angular
        .module('app.components')
        .component('messageSave', {
            bindings: {
                onClose: '&',
                onCancel: '&'
            },
            templateUrl: 'app/components/message-save/message-save.html',
            controller: 'MessageSaveController',
            controllerAs: 'vm'
        });
})();
(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('MessageSaveController', MessageSaveController);

    MessageSaveController.$inject = ['mailBox'];
    /* @ngInject */
    function MessageSaveController(mailBox) {
        var vm = this;

        vm.form = {
            model: {}
        };

        vm.create = create;
        vm.close = close;
        vm.cancel = cancel;

        activate();

        function activate() {
            console.log('cancel()', vm);
        }

        function create(form) {
            if (form.$invalid) return;

            mailBox.create({}, vm.form.model).then(function (response) {
                console.log('response', response);
                close();
            });
        }

        function close(data) {
            vm.onClose({result: data});
        }

        function cancel() {
            vm.onCancel();
        }
    }
})();

(function () {
    'use strict';

    angular
        .module('app.components')
        .component('moreList', {
            bindings: {
                messages: '='
            },
            templateUrl: 'app/components/more-list/more-list.html',
            controller: 'MoreListController',
            controllerAs: 'vm'
        });
})();
(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('MoreListController', MoreListController);

    MoreListController.$inject = ['$state'];
    /* @ngInject */
    function MoreListController($state) {
        var vm = this;

        vm.print = print;

        activate();

        function activate() {
            console.log('messages', vm.messages.checked[0]);
        }

        function print() {
            var url = $state.href('print', {
                id: vm.messages.checked[0].number,
                connection_id: vm.messages.checked[0].connection_id,
                mbox: vm.messages.checked[0].mbox
            });
            window.open(url, '_blank');
        }
    }
})();

(function () {
    'use strict';

    angular
        .module('app.components')
        .component('paginateButton', {
            bindings: {
                data: '='
            },
            templateUrl: 'app/components/paginate-button/paginate-button.html',
            controller: 'PaginateButtonController',
            controllerAs: 'vm'
        });
})();
(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('PaginateButtonController', PaginateButtonController);

    PaginateButtonController.$inject = ['$scope', '$http'];
    /* @ngInject */
    function PaginateButtonController($scope, $http) {
        var vm = this;

        vm.get = get;

        activate();

        function activate() {
            // console.log('data', vm.data);
        }

        function get(url) {
            $http.get(url).then(function(response) {
                vm.data.items = vm.data.items.concat(response.data.data.items);
                vm.data._links = response.data.data._links;
                vm.data._meta = response.data.data._meta;
            });
        }
    }
})();

(function () {
    'use strict';

    angular
        .module('app.components')
        .component('paypalTariffButton', {
            bindings: {
                tariff: '='
            },
            templateUrl: 'app/components/paypal-tariff-button/paypal-tariff-button.html',
            controller: 'PaypalTariffButtonController',
            controllerAs: 'vm'
        });
})();
(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('PaypalTariffButtonController', PaypalTariffButtonController);

    PaypalTariffButtonController.$inject = ['$auth', '$timeout', '$uibModal', 'payment', 'profile', 'CONFIG'];
    /* @ngInject */
    function PaypalTariffButtonController($auth, $timeout, $uibModal, payment, profile, CONFIG) {
        var vm = this;

        vm.paymentInterval = {};

        console.log('CONFIG', CONFIG);

        vm.opts = {

            env: CONFIG.env,

            style: {
                label: 'pay',
                size:  'small', // small | medium
                shape: 'rect'   // pill | rect
            },

            client: CONFIG.payment,

            payment: function () {

                var env = this.props.env;
                var client = this.props.client;

                return paypal.rest.payment.create(env, client, {
                    transactions: [
                        {
                            amount: {
                                total: vm.tariff.price,
                                currency: 'CZK'
                            }
                        }
                    ]
                }, {
                    input_fields: {
                        no_shipping: 1
                    }
                });
            },

            commit: true, // Optional: show a 'Pay Now' button in the checkout flow

            onAuthorize: function (data, actions) {
                // console.log('data', data);

                data.tariffId = vm.tariff.id;

                payment.register({}, data).then(function (response) {
                    updateTariff(response.data);
                });

                // Optional: display a confirmation page here
                return actions.payment.execute().then(function () {
                    var modalInstance = $uibModal.open({
                        animation: true,
                        templateUrl: 'app/components/alert-popup/alert-popup.html',
                        controller: 'AlertPopupController',
                        controllerAs: 'vm',
                        size: 'sm',
                        windowClass: 'popup popup--alert'
                    });
                });
            }
        };

        activate();

        function activate() {
            vm.user = $auth.user;
        }

        function updateTariff(data) {
            console.log('status', data);
            if (data.status === 0) {
                $timeout(function () {
                    checkPayment(data);
                }, 1000 * 5);
            }

            if (data.status === 1) {
                profile.get();
            }

            if (data.status === 2) {
                alert('Ошибка');
            }
        }

        function checkPayment(data) {
            console.log('data', data);
            payment.getById({id: data.id}, {}).then(function (response) {
                console.log('response status', response.data);
                updateTariff(response.data);
            });
        }
    }
})();

(function () {
    'use strict';

    angular
        .module('app.components')
        .component('passwordChange', {
            bindings: {
                onClose: '&',
                model: '='
            },
            templateUrl: 'app/components/password-change/password-change.html',
            controller: 'PasswordChangeController',
            controllerAs: 'vm'
        });
})();
(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('PasswordChangeController', PasswordChangeController);

    PasswordChangeController.$inject = ['$timeout', 'profile'];
    /* @ngInject */
    function PasswordChangeController($timeout, profile) {
        var vm = this;

        vm.passwordForm = {
            model: {}
        };

        vm.changePassword = changePassword;
        vm.close = close;

        ////

        activate();

        function activate() {
        }

        function changePassword(form) {
            console.log('vm.passwordForm', vm.passwordForm.model, form);

            if (form.$invalid) return;

            profile.changePassword({}, vm.passwordForm.model)
                .then(function (response) {
                    close();
                }, function(response) {
                    vm.error = response.data.data.message;
                });
        }

        function close() {
            vm.onClose();
        }
    }
})();

(function () {
    'use strict';

    angular
        .module('app.components')
        .component('phoneChange', {
            bindings: {
                onClose: '&',
                model: '='
            },
            templateUrl: 'app/components/phone-change/phone-change.html',
            controller: 'PhoneChangeController',
            controllerAs: 'vm'
        });
})();
(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('PhoneChangeController', PhoneChangeController);

    PhoneChangeController.$inject = ['$timeout', 'profile'];
    /* @ngInject */
    function PhoneChangeController($timeout, profile) {
        var vm = this;

        vm.phoneForm = {
            model: {}
        };

        vm.changePhone = changePhone;
        vm.close = close;

        ////

        activate();

        function activate() {
        }

        function changePhone(form) {
            console.log('vm.phoneForm', vm.phoneForm.model, form);

            if (form.$invalid) return;

            profile.put({}, vm.phoneForm.model)
                .then(function (response) {
                    close();
                }, function(response) {
                    vm.error = response.data.data.message;
                });
        }

        function close() {
            vm.onClose();
        }
    }
})();

(function () {
    'use strict';

    angular
        .module('app.components')
        .component('phoneToAdd', {
            bindings: {
                phones: '=',
                name: '@?',
                required: '@?',
                isAutofocus: '=?'
            },
            templateUrl: 'app/components/phone-to-add/phone-to-add.html',
            controller: 'PhoneToAddController',
            controllerAs: 'vm'
        });
})();
(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('PhoneToAddController', PhoneToAddController);

    PhoneToAddController.$inject = [];
    /* @ngInject */
    function PhoneToAddController() {
        var vm = this;

        // vm.phones = {
        //     model: {}
        // };

        ////

        activate();

        function activate() {
        }
    }
})();

(function () {
    'use strict';

    angular
        .module('app.components')
        .component('phoneToAddMenu', {
            bindings: {
                tag: '=',
                phones: '=',
                onRemove: '&',
                onEdit: '&'
            },
            templateUrl: 'app/components/phone-to-add-menu/phone-to-add-menu.html',
            controller: 'PhoneToAddMenuController',
            controllerAs: 'vm'
        });
})();
(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('PhoneToAddMenuController', PhoneToAddMenuController);

    PhoneToAddMenuController.$inject = [];
    /* @ngInject */
    function PhoneToAddMenuController() {
        var vm = this;

        vm.remove = remove;
        vm.setEdit = setEdit;

        ////

        activate();

        function activate() {
            // console.log('tag', vm.tag);
            // console.log('vm.phones', vm.phones);
        }

        function remove() {
            vm.onRemove();
        }

        function setEdit(e) {
            vm.onEdit({result: e});
        }
    }
})();

(function () {
    'use strict';

    angular
        .module('app.components')
        .component('photoswipeGallery', {
            bindings: {},
            templateUrl: 'app/components/photoswipe/photoswipe.html',
            controller: 'PhotoswipeController',
            controllerAs: 'vm'
        });
})();
(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('PhotoswipeController', PhotoswipeController);

    PhotoswipeController.$inject = ['$scope', '$auth', '$timeout', 'CONFIG'];
    /* @ngInject */
    function PhotoswipeController($scope, $auth, $timeout, CONFIG) {
        var vm = this;

        vm.CONFIG = CONFIG;
        vm.user = $auth.user;
        vm.slidesFormatted = [];

        vm.opts = {
            index: 0,
            history: false,
            showHideOpacity: true,
            closeEl: true,
            captionEl: true,
            fullscreenEl: true,
            zoomEl: true,
            shareEl: false,
            counterEl: true,
            arrowEl: true,
            preloaderEl: true,
            getThumbBoundsFn: false
        };

        $scope.$watch('vm.index', function (data, oldData) {
            if (data) {
                showGallery(data);
            }
        });

        $scope.$watch('vm.slides', function (data, oldData) {
            if (data) {
                console.log('slides', data);
                formatted(data);
            }
        });

        $scope.$on('gallery:open', function (e, data) {
            console.log('gallery:open', data);
            vm.message = data.message;
            vm.attachments = data.attachments;

            formatted(vm.attachments);

            $timeout(function () {
                showGallery(data.attachIndex);
            }, 750);
        });

        vm.closeGallery = closeGallery;

        ////

        activate();

        function activate() {
        }

        function showGallery(i) {
            if (angular.isDefined(i)) {
                vm.opts.index = i;
            }
            vm.open = true;
        }

        function closeGallery() {
            vm.open = false;
            vm.index = undefined;
        }

        function formatted(attaches) {
            vm.slidesFormatted = [];
            _.forEach(attaches, function (attach) {
                vm.slidesFormatted.push(getFormattedItem(attach));
            });
        }

        function getFormattedItem(attach) {
            var item = {};
            var src = [
                vm.CONFIG.AttachUrl,
                vm.message.number,
                '?mbox=',
                vm.message.mbox || 'Drafts',
                '&part=attach&screen=true&filename=',
                attach.fileName,
                '&token=',
                vm.user.access_token,
                '&connection_id=',
                vm.message.connection_id || vm.user.profile.default_connection_id
            ].join('');

            item.src = src;

            var img = new Image();
            img.src = src;

            img.onload = function () {
                item.w = img.naturalWidth;
                item.h = img.naturalHeight;
            };

            item.title = attach.fileName;

            return item;
        }

    }
})();

(function () {
    'use strict';

    angular
        .module('app.components')
        .component('profileForm', {
            bindings: {},
            templateUrl: 'app/components/profile-form/profile-form.html',
            controller: 'ProfileFormController',
            controllerAs: 'vm'
        });
})();
(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('ProfileFormController', ProfileFormController);

    ProfileFormController.$inject = ['$auth', '$state', 'profile', 'country'];
    /* @ngInject */
    function ProfileFormController($auth, $state, profile, country) {
        var vm = this;

        vm.profileForm = {};

        vm.monthList = moment.months();
        vm.countryList = [];
        vm.citiesList = [];

        vm.logout = logout;
        vm.save = save;
        vm.resetForm = resetForm;

        activate();

        function activate() {
            vm.profile = $auth.user.profile;
            vm.profileForm = angular.copy($auth.user.profile);

            getCountries();
        }

        function logout() {
            profile.destroyStorageProfile($auth.user);
            $auth.signOut().then(function () {
                $state.go('signIn');
            });
        }

        function save() {
            var data = {
                first_name: vm.profileForm.first_name,
                last_name: vm.profileForm.last_name,
                gender: vm.profileForm.gender,
                country: vm.profileForm.country,
                city: vm.profileForm.city,
                user_name: vm.profileForm.user_name
            };

            if (vm.profileForm.bDay && vm.profileForm.bMonth && vm.profileForm.bYear) {
                var date = moment(vm.profileForm.bDay + ' ' + vm.profileForm.bMonth + ' ' + vm.profileForm.bYear);
                data.birthday = date.format('YYYY-MM-DD');
            }

            profile.put({}, data);
        }

        function resetForm() {
            vm.profileForm = angular.copy($auth.user.profile);
        }

        function getCountries() {
            country.get().then(function (response) {
                vm.countryList = [];
                _.forEach(response, function (item) {
                    vm.countryList.push(item.name);
                });
            });
        }
    }
})();

(function () {
    'use strict';

    angular
        .module('app.components')
        .component('searchHelp', {
            bindings: {},
            templateUrl: 'app/components/search-help/search-help.html',
            controller: 'SearchHelpController',
            controllerAs: 'vm'
        });
})();
(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('SearchHelpController', SearchHelpController);

    SearchHelpController.$inject = ['$scope', '$rootScope', 'tag', 'mailBox', '$state', '$translate'];
    /* @ngInject */
    function SearchHelpController($scope, $rootScope, tag, mailBox, $state, $translate) {
        var vm = this;

        vm.searchForm = {
            model: {}
        };

        vm.search = search;
        vm.onSearchChange = onSearchChange;

        ////

        activate();

        function activate() {}

        function search() {
            $rootScope.$broadcast('help:search', {
                search: vm.searchForm.model.q
            });
        }

        function onSearchChange() {
            search();
        }
    }
})();

(function () {
    'use strict';

    angular
        .module('app.components')
        .component('searchMail', {
            bindings: {},
            templateUrl: 'app/components/search-mail/search-mail.html',
            controller: 'SearchMailController',
            controllerAs: 'vm'
        });
})();
(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('SearchMailController', SearchMailController);

    SearchMailController.$inject = ['$scope', '$rootScope', 'tag', 'mailBox', '$translatePartialLoader', '$translate'];
    /* @ngInject */
    function SearchMailController($scope, $rootScope, tag, mailBox, $translatePartialLoader, $translate) {
        var vm = this;

        $translatePartialLoader.addPart('components');
        $translate.refresh();

        vm.isOpenDate = false;

        vm.date = {};

        vm.tags = {
            selected: {
                tag_name: 'ALL_TAGS',
                id: undefined
            },
            items: [{
                tag_name: 'ALL_TAGS',
                id: undefined
            }]
        };

        vm.standartFolders = [
            {
                caption: 'ALL_FOLDERS',
                name: 'ALL',
                icon: 'icon-incoming'
            },
            {
                name: 'INBOX',
                icon: 'icon-incoming'
            },
            {
                name: 'Drafts',
                icon: 'icon-draft'
            },
            {
                name: 'Trash',
                icon: 'icon-bin'
            },
            {
                name: 'Sent',
                icon: 'icon-sent'
            },
            {
                name: 'Junk',
                icon: 'icon-spam'
            }
        ];

        vm.folders = {
            selected: {
                caption: 'ALL_FOLDERS',
                name: 'ALL',
                icon: 'icon-incoming'
            }
        };

        vm.searchParts = {
            selected: {
                'name': 'SEARCH_ENTIRE_LETTER',
                'value': 'all'
            },
            list: [
                {
                    'name': 'SEARCH_ENTIRE_LETTER',
                    'value': 'all'
                },
                {
                    'name': 'IN_THE_SENDER_FIELD',
                    'value': 'from'
                },
                {
                    'name': 'IN_THE_FIELD_RECIPIENT',
                    'value': 'to'
                },
                {
                    'name': 'IN_THE_BODY_OF_THE_LETTER',
                    'value': 'body'
                },
                {
                    'name': 'IN_THE_TEXT_OF_THE_LETTER',
                    'value': 'text'
                }
            ]
        };

        vm.searchForm = {
            model: {}
        };

        vm.search = search;
        vm.onSearchChange = onSearchChange;

        $scope.$watch('vm.isOpenDate', function (date, oldData) {
            if (!date) {
                setDefaultDate();
            }
        });

        activate();

        function activate() {
            getTags();
            getMailBox();
        }

        function setDefaultDate() {
            vm.date.from = moment().startOf('month').toDate();
            vm.date.to = moment().endOf('month').toDate();
        }

        function search() {
            var data = {};

            if (vm.folders.selected.name === 'ALL') {
                data.search_part = 'text';
            }

            if (vm.searchParts.selected.value && vm.searchParts.selected.value !== 'all') {
                data.search_part = vm.searchParts.selected.value;
            }

            if (vm.tags.selected.id) {
                data.search_tag_id = vm.tags.selected.id;
            }

            if (vm.searchForm.isAttach) {
                data.filter = 'attach';
            }

            if (vm.searchForm.model.search) {
                data.search = vm.searchForm.model.search;
            }

            if (vm.folders.selected.name && vm.folders.selected.name !== 'ALL') {
                data.mbox = vm.folders.selected.name;
            }

            if (vm.date.start && vm.date.end) {
                data.search_start = moment(vm.date.from).unix();
                data.search_end = moment(vm.date.to).unix();
            }

            if (data.search.length) {
                $rootScope.$broadcast('search:mail', {
                    search: data
                });

                return;
            }

            $rootScope.$broadcast('search:close', {});

        }

        function getTags() {
            tag.get().then(function (response) {
                vm.tags.items = vm.tags.items.concat(response.data);
            });
        }

        function getMailBox() {
            mailBox.get().then(function (response) {
                vm.folders = _.assign(vm.folders, response.data);
                getMailBoxFormatted();
            });
        }

        function getMailBoxFormatted() {
            _.forEach(vm.folders.items, function (folder) {
                var isSub = true;

                _.forEach(vm.standartFolders, function (standartFolder) {
                    if (folder.name == standartFolder.name) {
                        isSub = false;
                    }
                });

                if (isSub) {
                    folder.isSub = true;
                } else {
                    folder.isSub = false;
                }
            });

            vm.folders.items.push(vm.standartFolders[0]);

            sortFolder();
        }

        function sortFolder() {
            vm.folders.items = _.sortBy(vm.folders.items, [
                {'name': 'ALL'},
                {'name': 'INBOX'},
                {'isSub': true},
                {'name': 'Sent'},
                {'name': 'Trash'},
                {'name': 'Junk'},
                {'name': 'Drafts'}
            ]).reverse();
        }
        
        function onSearchChange() {
            console.log('vm.searchForm.model.search', vm.searchForm.model.search);
            if (!vm.searchForm.model.search) {
                $rootScope.$broadcast('search:close', {});
            }
        }
    }
})();

(function () {
    'use strict';

    angular
        .module('app.components')
        .component('settingsMenu', {
            bindings: {},
            templateUrl: 'app/components/settings-menu/settings-menu.html',
            controller: 'SettingsMenuController',
            controllerAs: 'vm'
        });
})();
(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('SettingsMenuController', SettingsMenuController);

    SettingsMenuController.$inject = ['$translatePartialLoader', '$translate'];
    /* @ngInject */
    function SettingsMenuController($translatePartialLoader, $translate) {
        var vm = this;

        $translatePartialLoader.addPart('layout/menu-settings');
        $translate.refresh();
    }
})();

(function () {
    'use strict';

    angular
        .module('app.components')
        .component('signCreate', {
            bindings: {
                onClose: '&',
                onCancel: '&'
            },
            templateUrl: 'app/components/sign-create/sign-create.html',
            controller: 'SignCreateController',
            controllerAs: 'vm'
        });
})();
(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('SignCreateController', SignCreateController);

    SignCreateController.$inject = ['sign'];
    /* @ngInject */
    function SignCreateController(sign) {
        var vm = this;

        vm.form = {
            model: {}
        };

        vm.create = create;
        vm.close = close;

        activate();

        function activate() {
            console.log('cancel()', vm);
        }

        function create(form) {
            if (form.$invalid) return;

            sign.post({}, vm.form.model).then(function (response) {
                console.log('response', response);
                close({result: {sign:  vm.form.model.sign}});
            });
        }

        function close(data) {
            vm.onClose(data);
        }
    }
})();

(function () {
    'use strict';

    angular
        .module('app.components')
        .component('signList', {
            bindings: {
                signs: '=',
                onSelect: '&',
                onClose: '&'
            },
            templateUrl: 'app/components/sign-list/sign-list.html',
            controller: 'SignListController',
            controllerAs: 'vm'
        });
})();
(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('SignListController', SignListController);

    SignListController.$inject = ['$auth', 'sign', '$uibModal', 'mailBox', 'mail', 'profile'];
    /* @ngInject */
    function SignListController($auth, sign, $uibModal, mailBox, mail, profile) {
        var vm = this;

        vm.sign = {
            items: []
        };

        vm.select = select;
        vm.openCreateSignPopup = openCreateSignPopup;

        ////

        activate();

        function activate() {
            vm.sign.items = vm.signs;

            console.log('vm.sign.items', vm);
        }

        function select(item) {
            console.log('sign', item);
            profile.put({}, {sign: item.sign});
            vm.onSelect({result: item.sign});
            vm.onClose();
        }

        function openCreateSignPopup() {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'app/components/sign-create/sign-create-popup.html',
                controller: ["$scope", "$uibModalInstance", function ($scope, $uibModalInstance) {
                    $scope.close = close;
                    $scope.cancel = cancel;

                    // $scope.messages = messages;

                    function cancel() {
                        $uibModalInstance.dismiss('cancel');
                    }

                    function close(data) {
                        $uibModalInstance.close(data);
                    }
                }],
                size: 'sm',
                windowClass: 'popup popup--sign-create'
            });

            modalInstance.result.then(function (response) {
                // console.log('result', response);

                select(response);

                getList();
            });
        }
        
        function getList() {
            sign.get().then(function (response) {
                console.log('result', response);
                vm.sign.items = response.data;
            });
        }
    }
})();

(function () {
    'use strict';

    angular
        .module('app.components')
        .component('spinner', {
            bindings: {
                isGlobal: '=',
                isOpen: '@?'
            },
            templateUrl: 'app/components/spinner/spinner.html',
            controller: 'SpinnerController',
            controllerAs: 'vm'
        });
})();
(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('SpinnerController', SpinnerController);

    SpinnerController.$inject = ['$scope', '$timeout', 'httpPreConfig'];
    /* @ngInject */
    function SpinnerController($scope, $timeout, httpPreConfig) {
        var vm = this;

        vm.isOpen = false;

        $scope.$on('httpCallStarted', function () {
            $timeout(function () {
                if (vm.isGlobal) {
                    vm.isOpen = true;
                }
            });
        });

        $scope.$on('httpCallStopped', function () {
            $timeout(function () {
                if (vm.isGlobal) {
                    vm.isOpen = false;
                }
            });
        });

    }
})();

(function () {
    'use strict';

    angular
        .module('app.components')
        .component('storagePopup', {
            bindings: {
                onClose: '&'
            },
            templateUrl: 'app/components/storage-popup/storage-popup.html',
            controller: 'StoragePopupController',
            controllerAs: 'vm'
        });
})();
(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('StoragePopupController', StoragePopupController);

    StoragePopupController.$inject = ['$auth', '$uibModalInstance', 'tariff', 'tariffResult'];
    /* @ngInject */
    function StoragePopupController($auth, $uibModalInstance, tariff, tariffResult) {
        var vm = this;

        vm.payType = 'sms';

        vm.smsForm = {};

        vm.tariff = {
            selected: null,
            items: []
        };

        vm.quota = {
            result: {}
        };

        vm.createQuota = createQuota;
        vm.close = close;
        vm.isNominalValue = isNominalValue;

        activate();

        function activate() {
            vm.user = $auth.user;
            vm.Math = window.Math;

            console.log('vm.user', vm.user);
            // createQuota();

            tariffResult.$promise.then(function (response) {
                vm.tariff.items = response.data;
                vm.tariff.selected = vm.tariff.items[1];
                createQuota(vm.tariff.selected);
            });
        }

        function getTariff() {
            tariff.getTariff().then(function (response) {
                vm.tariff.items = response.data;
            });
        }

        function createQuota(selected) {
            tariff.createQuota({}, {tariff_id: selected.id}).then(function (response) {
                vm.quota.result = response.data;
            });
        }

        function close() {
            $uibModalInstance.dismiss('cancel');
        }

        function isNominalValue(val) {
            var isNominal = false;
            if (!((val) % (vm.Math.ceil(val)))) {
                isNominal = true;
            }
            return isNominal;
        }
    }
})();

(function () {
    'use strict';

    angular
        .module('app.components')
        .component('tagCreate', {
            bindings: {
                onClose: '&',
                messages: '='
            },
            templateUrl: 'app/components/tag-create/tag-create.html',
            controller: 'TagCreateController',
            controllerAs: 'vm'
        });
})();
(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('TagCreateController', TagCreateController);

    TagCreateController.$inject = ['$rootScope', '$timeout', 'tag', 'list'];
    /* @ngInject */
    function TagCreateController($rootScope, $timeout, tag, list) {
        var vm = this;

        vm.paletteForm = {
            model: {
                color: '#fff'
            }
        };

        vm.palette = {
            items: []
        };

        vm.create = create;
        vm.select = select;
        vm.close = close;

        ////

        activate();

        function activate() {
            // console.log('vm', list.getColors());
            getColors();
        }

        function getColors() {
            _.forEach(list.getColors(), function (color, i) {
                vm.palette.items.push({
                    active: false,
                    color: color
                });
            });

            select(vm.palette.items[0]);
        }

        function select(palette) {
            $timeout(function () {
                vm.palette.selected = palette;
                vm.paletteForm.model.bgcolor = palette.color;
            });
        }

        function create(form) {
            if (form.$invalid || vm.paletteForm.isLoading) return;

            vm.paletteForm.isLoading = true;
            tag.create({}, vm.paletteForm.model).then(function (response) {
                if (vm.messages) {
                    tag.setTag(response.data, vm.messages, true).then(function () {
                        vm.paletteForm.isLoading = false;
                        $rootScope.$broadcast('mail:sync');
                        close();
                    });
                } else {
                    close();
                }
            });
        }

        function close() {
            vm.onClose();
        }
    }
})();

(function () {
    'use strict';

    angular
        .module('app.components')
        .component('tagEdit', {
            bindings: {
                onClose: '&',
                model: '='
            },
            templateUrl: 'app/components/tag-edit/tag-edit.html',
            controller: 'TagEditController',
            controllerAs: 'vm'
        });
})();
(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('TagEditController', TagEditController);

    TagEditController.$inject = ['$timeout', 'tag'];
    /* @ngInject */
    function TagEditController($timeout, tag) {
        var vm = this;

        vm.paletteForm = {
            model: {
                color: '#fff'
            }
        };

        vm.palette = {
            items: [
                {
                    active: true,
                    bgcolor: '#f44336'
                },
                {
                    active: false,
                    bgcolor: '#e91e63'
                },
                {
                    active: false,
                    bgcolor: '#ffc107'
                },
                {
                    active: false,
                    bgcolor: '#ffeb3b'
                },
                {
                    active: false,
                    bgcolor: '#4caf50'
                },
                {
                    active: false,
                    bgcolor: '#2196f3'
                },
                {
                    active: false,
                    bgcolor: '#3f51b5'
                },
                {
                    active: false,
                    bgcolor: '#9c27b0'
                },
                {
                    active: false,
                    bgcolor: '#607d8e'
                },
                {
                    active: false,
                    bgcolor: '#9e9e9e'
                }
            ]
        };

        vm.update = update;
        vm.select = select;
        vm.close = close;

        ////

        activate();

        function activate() {
            vm.palette.selected = angular.copy(vm.model);
            vm.paletteForm.model = angular.copy(vm.model);
            // select(vm.paletteForm.model);
            console.log('vm.palette.selected', vm.palette.selected);
        }

        function select(palette) {
            $timeout(function () {
                vm.palette.selected = palette;
                vm.paletteForm.model.bgcolor = palette.bgcolor;
            });
        }

        function update(form) {
            console.log('vm.paletteForm', vm.paletteForm.model, form);

            if (form.$invalid) return;

            tag.update({}, vm.paletteForm.model).then(function (response) {
                close();
            });
        }

        function close() {
            vm.onClose();
        }
    }
})();

(function () {
    'use strict';

    angular
        .module('app.components')
        .component('tagList', {
            bindings: {
                messages: '='
            },
            templateUrl: 'app/components/tag-list/tag-list.html',
            controller: 'TagListController',
            controllerAs: 'vm'
        });
})();
(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('TagListController', TagListController);

    TagListController.$inject = ['$uibModal', 'tag', 'mail'];
    /* @ngInject */
    function TagListController($uibModal, tag, mail) {
        var vm = this;

        vm.tags = {};
        vm.unTags = {
            items: []
        };

        vm.openTagCreatePopup = openTagCreatePopup;
        vm.setTag = setTag;
        vm.setUnTag = setUnTag;
        vm.setSeen = setSeen;
        vm.setUnSeen = setUnSeen;
        vm.setImportant = setImportant;

        activate();

        function activate() {
            get();
        }

        function get() {
            tag.get().then(function (response) {
                vm.tags.items = response.data;
                getFormattedTags();
            });
        }

        function getFormattedTags() {
            var unTags = [];

            _.forEach(vm.messages.checked, function (messageChecked) {
                unTags = unTags.concat(messageChecked.tags);
            });

            vm.unTags.items = _.uniqBy(unTags, 'id');
        }

        function setTag(item) {
            vm.messages = tag.setTag(item, vm.messages);

            getFormattedTags();
        }

        function setUnTag(item) {
            vm.messages = tag.setUnTag(item, vm.messages);

            getFormattedTags();
        }

        function setSeen() {
            vm.messages = mail.setSeen(vm.messages);
        }

        function setUnSeen() {
            vm.messages = mail.setUnSeen(vm.messages);
        }

        function setImportant() {
            if (_.find(vm.messages.checked, {important: false})) {
                vm.messages = mail.setImportant(vm.messages);
                return;
            }

            vm.messages = mail.setUnImportant(vm.messages);
        }

        function openTagCreatePopup() {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'app/components/tag-create/tag-create-popup.html',
                controller: ["$scope", "$uibModalInstance", "messages", function ($scope, $uibModalInstance, messages) {
                    $scope.cancel = cancel;

                    $scope.messages = messages;

                    function cancel() {
                        $uibModalInstance.dismiss('cancel');
                    }
                }],
                resolve: {
                  messages: function () {
                      return vm.messages;
                  }
                },
                // controllerAs: 'vm',
                size: 'sm',
                windowClass: 'popup popup--tag-create'
            });
        }

    }
})();

(function () {
    'use strict';

    angular
        .module('app.components')
        .component('tagSettings', {
            bindings: {
                messages: '='
            },
            templateUrl: 'app/components/tag-settings/tag-settings.html',
            controller: 'TagSettingsController',
            controllerAs: 'vm'
        });
})();
(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('TagSettingsController', TagSettingsController);

    TagSettingsController.$inject = ['$scope', '$state', '$uibModal', 'tag'];
    /* @ngInject */
    function TagSettingsController($scope, $state, $uibModal, tag) {
        var vm = this;

        vm.tags = {};

        vm.selected = null;

        vm.openTagCreatePopup = openTagCreatePopup;
        vm.openTagEditPopup = openTagEditPopup;
        vm.select = select;
        vm.destroy = destroy;

        $scope.$on('tag:update:success', function () {
            get();
        });

        $scope.$on('tag:create:success', function () {
            get();
        });

        $scope.$on('tag:destroy:success', function () {
            get();
        });

        /////

        activate();

        function activate() {
            vm.$state = $state;
            get();
        }

        function get() {
            tag.get().then(function (response) {
                vm.tags.items = response.data;
            });
        }

        function openTagCreatePopup() {
            $uibModal.open({
                animation: true,
                templateUrl: 'app/components/tag-create/tag-create-popup.html',
                controller: ["$scope", "$uibModalInstance", function ($scope, $uibModalInstance) {
                    $scope.cancel = cancel;

                    function cancel() {
                        $uibModalInstance.dismiss('cancel');
                    }
                }],
                size: 'sm',
                windowClass: 'popup popup--folder-create'
            });
        }

        function openTagEditPopup() {
            $uibModal.open({
                animation: true,
                templateUrl: 'app/components/tag-edit/tag-edit-popup.html',
                controller: ["$scope", "$uibModalInstance", "model", function ($scope, $uibModalInstance, model) {
                    $scope.model = model;

                    $scope.cancel = cancel;

                    function cancel() {
                        $uibModalInstance.dismiss('cancel');
                    }
                }],
                resolve: {
                    model: function () {
                        return vm.selected;
                    }
                },
                size: 'sm',
                windowClass: 'popup popup--folder-create'
            });
        }

        function select(tagItem) {
            _.forEach(vm.tags.items, function (item) {
                item.isSelected = false;
            });

            tagItem.isSelected = true;
            vm.selected = tagItem;
        }

        function destroy() {
            tag.destroy({id: vm.selected.id}, {});
            _.remove(vm.tags.items, function(item) {
                return item.id == vm.selected.id;
            });
        }
    }
})();

(function () {
    'use strict';

    angular
        .module('app.components')
        .component('templateList', {
            bindings: {
                onSave: '&',
                templates: '='
            },
            templateUrl: 'app/components/template-list/template-list.html',
            controller: 'TemplateListController',
            controllerAs: 'vm'
        });
})();
(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('TemplateListController', TemplateListController);

    TemplateListController.$inject = ['$state', '$uibModal', '$uibModalStack', 'mail'];
    /* @ngInject */
    function TemplateListController($state, $uibModal, $uibModalStack, mail) {
        var vm = this;

        vm.messages = {
            isLoading: true,
            params: {
                'per-page': 20,
                'len': 100
            }
        };

        vm.save = save;
        vm.openTemplateComposePopup = openTemplateComposePopup;

        /////

        activate();

        function activate() {
            vm.$state = $state;
            // vm.messages.params.mbox = 'Templates';
            vm.messages = vm.templates;
            // get();
            console.log('templates', vm.templates);
        }

        function get() {
            mail.get(vm.messages.params).then(function (response) {
                vm.messages.isLoading = false;
                vm.messages = _.assign(vm.messages, response.data);
            });
        }

        function save() {
            vm.onSave({
                result: {
                    template: true
                }
            })
        }

        function openTemplateComposePopup() {
            var params = {
                template: true
            };

            $uibModal.open({
                animation: false,
                templateUrl: 'app/components/compose-popup/compose-popup.html',
                controller: 'ComposePopupController',
                controllerAs: 'vm',
                resolve: {
                    params: function () {
                        return params;
                    }
                },
                size: 'lg',
                windowClass: 'popup popup--compose popup--compose-minimize hide-elm'
            });
        }
    }
})();

(function () {
    'use strict';

    angular
        .module('app.components')
        .component('testDraggable', {
            bindings: {
                tagId: '='
            },
            templateUrl: 'app/components/test-draggable/test-draggable.html',
            controller: 'TestDraggableController',
            controllerAs: 'vm'
        });
})();
(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('TestDraggableController', TestDraggableController);

    TestDraggableController.$inject = ['$scope'];
    /* @ngInject */
    function TestDraggableController($scope) {
        var vm = this;

        activate();

        function activate() {

        }

        vm.model = [generateList(1), generateList(2)];

        vm.onDrop = function(srcList, srcIndex, targetList, targetIndex) {
            // Copy the item from source to target.
            targetList.splice(targetIndex, 0, srcList[srcIndex]);
            // Remove the item from the source, possibly correcting the index first.
            // We must do this immediately, otherwise ng-repeat complains about duplicates.
            if (srcList == targetList && targetIndex <= srcIndex) srcIndex++;
            srcList.splice(srcIndex, 1);
            // By returning true from dnd-drop we signalize we already inserted the item.
            return true;
        };

        function generateList(id) {
            return ['A', 'B', 'C'].map(function(letter) {
                // angular-drag-and-drop-lists usually serializes the objects to drag, thus we
                // can not transfer functions on the objects. However, as this fiddle uses dnd-callback
                // to move the objects directly without serialization, we can use a function reference
                // on the item here.
                return {
                    labelFunc: function(index) {
                        return "Item " + id + letter + " at index " + index;
                    }
                };
            });
        }
    }
})();

(function () {
    'use strict';

    angular
        .module('app.components')
        .component('textareaTranslateMenu', {
            bindings: {
                translateFrom: '=',
                translateTo: '='
            },
            templateUrl: 'app/components/textarea-translate-menu/textarea-translate-menu.html',
            controller: 'TextareaTranslateMenuController',
            controllerAs: 'vm'
        });
})();
(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('TextareaTranslateMenuController', TextareaTranslateMenuController);

    TextareaTranslateMenuController.$inject = ['$scope', '$translate', 'googleTranslation'];
    /* @ngInject */
    function TextareaTranslateMenuController($scope, $translate, googleTranslation) {
        var vm = this;

        vm.list = {
            items: [],
            itemsFormatted: []
        };

        vm.selectFrom = selectFrom;
        vm.selectTo = selectTo;

        activate();

        function activate() {
            getTranslateList();
        }

        function getTranslateList() {
            googleTranslation.get({}, {"target": $translate.use()}).then(function (response) {
                vm.list.items = response.data.languages;

                vm.translateFrom = _.find(vm.list.items, {'language': $translate.use()});
                vm.translateTo = _.find(vm.list.items, {'language': 'en'});

                var itemsFormatted = [];
                _.forEach(vm.list.items.reverse(), function (item, i) {
                    itemsFormatted.push(item);
                    if (i % 13 === 0) {
                        vm.list.itemsFormatted.push(itemsFormatted);
                        itemsFormatted = [];
                    }
                });

                vm.list.itemsFormatted.reverse();
            });
        }

        function selectFrom(item) {
            vm.translateFrom = item;
            vm.isOpenFrom = false;
        }

        function selectTo(item) {
            vm.translateTo = item;
            vm.isOpenTo = false;
        }
    }
})();

(function () {
    'use strict';

    angular
        .module('app.components')
        .component('themes', {
            bindings: {
                isThemeActive: '='
            },
            templateUrl: 'app/components/themes/themes.html',
            controller: 'ThemesController',
            controllerAs: 'vm'
        });
})();
(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('ThemesController', ThemesController);

    ThemesController.$inject = ['theme', 'profile'];
    /* @ngInject */
    function ThemesController(theme, profile) {
        var vm = this;

        vm.select = select;
        vm.selectColor = selectColor;

        ////

        activate();

        function activate() {
            vm.themes = theme.themes;

            console.log('start themes', vm.themes);
        }

        function select(data) {
            vm.themes.selected = data;

            if (!vm.themes.selected.isColor) {
                theme.get({
                    id: vm.themes.selected.id
                });

                profile.put({}, {
                    theme: data.id
                });
            }
        }

        function selectColor(data) {
            vm.themes.selected.colors.selected = data;

            theme.get({
                id: vm.themes.selected.id,
                color_id: data.id
            });

            profile.put({}, {
                theme: 100,
                color_id: vm.themes.selected.colors.selected.id
            });
        }
    }
})();

(function () {
    'use strict';

    angular
        .module('app.components')
        .component('timezoneList', {
            bindings: {
                messages: '=',
                onClose: '&?'
            },
            templateUrl: 'app/components/timezone-list/timezone-list.html',
            controller: 'TimezoneListController',
            controllerAs: 'vm'
        });
})();
(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('TimezoneListController', TimezoneListController);

    TimezoneListController.$inject = ['$state', 'profile'];
    /* @ngInject */
    function TimezoneListController($state, profile) {
        var vm = this;

        vm.timezoneList = [];

        vm.setTimezone = setTimezone;

        activate();

        function activate() {
            getTimezoneList();
        }

        function getTimezoneList() {
            vm.timezoneList = formatted();
        }

        function setTimezone(timezone) {
            moment.tz.setDefault(timezone);
            profile.put({}, {timezone: timezone});

            close();
        }

        function close() {
            vm.onClose();
        }

        function formatted() {
            var timeZones = moment.tz.names();
            var offsetTmz = [];

            for (var i in timeZones) {
                offsetTmz.push("(GMT" + moment.tz(timeZones[i]).format('Z') + ") " + timeZones[i]);
            }

            return offsetTmz;
        }
    }
})();

(function () {
    'use strict';

    angular
        .module('app.components')
        .component('timeSend', {
            bindings: {
                sdate: '=',
                onClose: '&?'
            },
            templateUrl: 'app/components/time-send/time-send.html',
            controller: 'TimeSendController',
            controllerAs: 'vm'
        });
})();
(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('TimeSendController', TimeSendController);

    TimeSendController.$inject = ['$scope', '$translate'];
    /* @ngInject */
    function TimeSendController($scope, $translate) {
        var vm = this;

        vm.isInfoOpen = false;

        vm.timeForm = {
            model: {}
        };

        vm.timeList = [];

        vm.isDateOpen = false;

        vm.close = close;
        vm.getFormattedDate = getFormattedDate;
        vm.endDateBeforeRender = endDateBeforeRender;

        // $scope.$watch

        $scope.$watch('vm.isChecked', function (data) {
            if (vm.isChecked) {
                getTimestampAllDate();
                return;
            }
        });

        $scope.$watch('vm.timeForm.model.time', function (data) {
            if (vm.isChecked) {
                getTimestampAllDate();
            }
        });

        $scope.$watch('vm.timeForm.model.date.value', function (data) {
            if (vm.isChecked) {
                getTimestampAllDate();
                getTimeList();
            }
        });

        ////

        activate();

        function activate() {
            $translate('TODAY').then(function (translation) {
                if (vm.sdate) {
                    vm.isChecked = true;
                }

                vm.timeForm.model.date = {
                    value: moment().toDate(),
                    name: moment().format('[' + translation + ']')
                };

                getTimeList();
            });
        }

        function getTimestampAllDate() {
            if (vm.timeForm.model.time) {
                var parseTime = vm.timeForm.model.time.split(':');

                var date = moment(vm.timeForm.model.date.value).set({
                    hour: parseTime[0],
                    minute: parseTime[1],
                    second: 0,
                    millisecond: 0
                });

                // console.log('moment', date, date.unix());

                vm.timeForm.model.date.name = date.calendar();

                vm.sdate = date.unix();

                // console.log('vm.timeForm.model.time', parseTime);
            }
        }

        function getFormattedDate(date) {
            return moment(date).calendar();
        }

        function getTimeList() {
            vm.timeList = [];
            var isToday = moment(vm.timeForm.model.date.value).isSame(moment().startOf('day'), 'd');

            if (isToday) {
                var nowHours = new Date().getHours() + 1;
            }

            for (var i = (nowHours || 0); i < 24; i++) {
                if (i < 10) {
                    vm.timeList.push('0' + i + ':00');
                } else {
                    vm.timeList.push(i + ':00');
                }
            }

            vm.timeForm.model.time = vm.timeList[0];
        }

        function endDateBeforeRender($view, $dates) {
            var activeDate = moment().subtract(1, 'days');
            $dates.filter(function (date) {
                return date.localDateValue() < activeDate.valueOf()
            }).forEach(function (date) {
                date.selectable = false;
            })
        }

        function close() {
            vm.onClose();
        }
    }
})();

(function () {
    'use strict';

    angular
        .module('app.components')
        .component('toDate', {
            bindings: {
                date: '=',
                dateUnix: '=',
                isSmall: '=?',
                isSendTime: '=?'
            },
            templateUrl: 'app/components/to-date/to-date.html',
            controller: 'ToDateController',
            controllerAs: 'vm'
        });
})();
(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('ToDateController', ToDateController);

    ToDateController.$inject = ['$scope', '$translate'];
    /* @ngInject */
    function ToDateController($scope, $translate) {
        var vm = this;

        vm.convertDate = '';

        vm.calendarFormat = {
            // sameDay: 'HH:mm',
            // nextDay: '[завтра]',
            // nextWeek: 'dddd HH:mm',
            // lastDay: '[вчера] hh:mm',
            // lastWeek: 'DD MMMM YYYY [в] hh:mm',
            // sameElse: 'DD MMMM YYYY [в] hh:mm'
        };

        vm.calendarSmallFormat = {
            // sameDay: 'HH:mm',
            // nextDay: '[завтра] HH:mm',
            // nextWeek: 'dddd HH:mm',
            // lastDay: 'D MMM',
            // lastWeek: 'D MMM',
            // sameElse: 'D MMM'
        };

        vm.sendTimeFormat = {
            // sameDay: '[сегодня в] HH:mm',
            // nextDay: '[завтра] HH:mm',
            // nextWeek: 'dddd HH:mm',
            // lastDay: '[вчера] hh:mm',
            // lastWeek: 'DD MMMM YYYY [в] hh:mm',
            // sameElse: 'DD MMMM YYYY [в] hh:mm'
        };

        vm.getConvert = getConvert;

        $scope.$watch('vm.date', function (data, newData) {
            if (data) {
                console.log('data', data);
                var newDate = moment(data);
                vm.convertDate = getConvert(newDate);
            }
        });

        $scope.$watch('vm.dateUnix', function (data, newData) {
            if (data) {
                vm.convertDate = getUnixConvert(data);
            }
        });

        activate();

        function activate() {
            if (vm.isSmall) {
                moment.locale('ru', {
                    calendar: {
                        sameDay: 'HH:mm',
                        lastDay: 'D MMM',
                        nextDay: '[завтра]',
                        nextWeek: 'dddd HH:mm',
                        lastWeek: 'D MMM',
                        sameElse: 'D MMM'
                    }
                });

                moment.locale('en', {
                    calendar: {
                        sameDay: 'HH:mm',
                        lastDay: 'D MMM',
                        nextDay: '[tomorrow at]',
                        nextWeek: 'dddd HH:mm',
                        lastWeek: 'D MMM',
                        sameElse: 'D MMM'
                    }
                });

                moment.locale('cs', {
                    calendar: {
                        sameDay: 'HH:mm',
                        lastDay: 'D MMM',
                        nextDay: '[zítra]',
                        nextWeek: 'dddd HH:mm',
                        lastWeek: 'D MMM',
                        sameElse: 'D MMM'
                    }
                });

                moment.locale('sk', {
                    calendar: {
                        sameDay: 'HH:mm',
                        lastDay: 'D MMM',
                        nextDay: '[zítra]',
                        nextWeek: 'dddd HH:mm',
                        lastWeek: 'D MMM',
                        sameElse: 'D MMM'
                    }
                });

                moment.locale('uk', {
                    calendar: {
                        sameDay: 'HH:mm',
                        lastDay: 'D MMM',
                        nextDay: '[завтра]',
                        nextWeek: 'dddd HH:mm',
                        lastWeek: 'D MMM',
                        sameElse: 'D MMM'
                    }
                });

                moment.locale($translate.use());

                return;
            }

            if (vm.isSendTime) {
                moment.locale('ru', {
                    calendar: {
                        sameDay: '[сегодня в] HH:mm',
                        lastDay: '[вчера] hh:mm',
                        nextDay: '[завтра]',
                        nextWeek: 'dddd HH:mm',
                        lastWeek: 'DD MMMM YYYY [в] hh:mm',
                        sameElse: 'DD MMMM YYYY [в] hh:mm'
                    }
                });

                moment.locale('en', {
                    calendar: {
                        sameDay: '[today] HH:mm',
                        lastDay: '[yesterday] hh:mm',
                        nextDay: '[tomorrow at]',
                        nextWeek: 'dddd HH:mm',
                        lastWeek: 'DD MMMM YYYY [at] hh:mm',
                        sameElse: 'DD MMMM YYYY [at] hh:mm'
                    }
                });

                moment.locale('cs', {
                    calendar: {
                        sameDay: '[dnes] HH:mm',
                        lastDay: '[včera] hh:mm',
                        nextDay: '[zítra]',
                        nextWeek: 'dddd HH:mm',
                        lastWeek: 'DD MMMM YYYY [v] hh:mm',
                        sameElse: 'DD MMMM YYYY [v] hh:mm'
                    }
                });

                moment.locale('sk', {
                    calendar: {
                        sameDay: '[dnes] HH:mm',
                        lastDay: '[včera] hh:mm',
                        nextDay: '[zítra]',
                        nextWeek: 'dddd HH:mm',
                        lastWeek: 'DD MMMM YYYY [v] hh:mm',
                        sameElse: 'DD MMMM YYYY [v] hh:mm'
                    }
                });

                moment.locale('uk', {
                    calendar: {
                        sameDay: '[сьогодні] HH:mm',
                        lastDay: '[вчора] hh:mm',
                        nextDay: '[завтра]',
                        nextWeek: 'dddd HH:mm',
                        lastWeek: 'DD MMMM YYYY [в] hh:mm',
                        sameElse: 'DD MMMM YYYY [в] hh:mm'
                    }
                });

                moment.locale($translate.use());

                return
            }

            moment.locale('ru', {
                calendar: {
                    sameDay: 'HH:mm',
                    lastDay: '[вчера] hh:mm',
                    nextDay: '[завтра]',
                    nextWeek: 'dddd HH:mm',
                    lastWeek: 'DD MMMM YYYY [в] hh:mm',
                    sameElse: 'DD MMMM YYYY [в] hh:mm'
                }
            });

            moment.locale('en', {
                calendar: {
                    sameDay: 'HH:mm',
                    lastDay: '[yesterday] hh:mm',
                    nextDay: '[tomorrow at]',
                    nextWeek: 'dddd HH:mm',
                    lastWeek: 'DD MMMM YYYY [at] hh:mm',
                    sameElse: 'DD MMMM YYYY [at] hh:mm'
                }
            });

            moment.locale('cs', {
                calendar: {
                    sameDay: 'HH:mm',
                    lastDay: '[včera] hh:mm',
                    nextDay: '[zítra]',
                    nextWeek: 'dddd HH:mm',
                    lastWeek: 'DD MMMM YYYY [v] hh:mm',
                    sameElse: 'DD MMMM YYYY [v] hh:mm'
                }
            });

            moment.locale('sk', {
                calendar: {
                    sameDay: 'HH:mm',
                    lastDay: '[včera] hh:mm',
                    nextDay: '[zítra]',
                    nextWeek: 'dddd HH:mm',
                    lastWeek: 'DD MMMM YYYY [v] hh:mm',
                    sameElse: 'DD MMMM YYYY [v] hh:mm'
                }
            });

            moment.locale('uk', {
                calendar: {
                    sameDay: 'HH:mm',
                    lastDay: '[вчора] hh:mm',
                    nextDay: '[завтра]',
                    nextWeek: 'dddd HH:mm',
                    lastWeek: 'DD MMMM YYYY [в] hh:mm',
                    sameElse: 'DD MMMM YYYY [в] hh:mm'
                }
            });

            moment.locale($translate.use());
        }

        function getConvert(date) {
            return moment(date).calendar();
        }

        function getUnixConvert(date) {
            return moment.unix(date).calendar();
        }
    }
})();

(function () {
    'use strict';

    angular
        .module('app.components')
        .component('toFolderName', {
            bindings: {
                name: '='
            },
            templateUrl: 'app/components/to-folder-name/to-folder-name.html',
            controller: 'ToFolderNameController',
            controllerAs: 'vm'
        });
})();
(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('ToFolderNameController', ToFolderNameController);

    ToFolderNameController.$inject = ['$scope', 'mailBox'];
    /* @ngInject */
    function ToFolderNameController($scope, mailBox) {
        var vm = this;

        vm.folders = {};

        vm.folderName = '';

        activate();

        function activate() {
            vm.folders = mailBox.getCacheList();
            getName();
        }

        function getName() {
            _.forEach(vm.folders.items, function (item) {
                if (item.name == vm.name) {
                    vm.folderName = item.caption;
                }
            });
        }
    }
})();

(function () {
    'use strict';

    angular
        .module('app.components')
        .component('toTagName', {
            bindings: {
                tagId: '='
            },
            templateUrl: 'app/components/to-tag-name/to-tag-name.html',
            controller: 'ToTagNameController',
            controllerAs: 'vm'
        });
})();
(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('ToTagNameController', ToTagNameController);

    ToTagNameController.$inject = ['$scope', 'tag'];
    /* @ngInject */
    function ToTagNameController($scope, tag) {
        var vm = this;

        vm.tags = {};

        vm.tagName = '';

        activate();

        function activate() {
            vm.tags = tag.getCacheList();
            getName();
        }

        function getName() {
            _.forEach(vm.tags, function (item) {
                if (item.id == vm.tagId) {
                    vm.tagName = item.tag_name;
                }
            });
        }

    }
})();

(function () {
    'use strict';

    angular
        .module('app.components')
        .component('userConnectionDefault', {
            bindings: {},
            templateUrl: 'app/components/user-connection-default/user-connection-default.html',
            controller: 'UserConnectionDefaultController',
            controllerAs: 'vm'
        });
})();
(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('UserConnectionDefaultController', UserConnectionDefaultController);

    UserConnectionDefaultController.$inject = ['$auth', 'profile'];
    /* @ngInject */
    function UserConnectionDefaultController($auth, profile) {
        var vm = this;

        vm.connections = {
            selected: {},
            items: []
        };

        vm.update = update;

        ////

        activate();

        function activate() {
            vm.user = $auth.user;
            getList();
        }

        function getList() {
            var userConnection = {
                id: vm.user.profile.default_connection_id,
                email: vm.user.profile.email
            };

            vm.connections.items.push(userConnection);

            vm.connections.items = vm.connections.items.concat(vm.user.profile.connections);

            _.forEach(vm.connections.items, function (connection) {
                if (vm.user.profile.selected_connection_id === connection.id) {
                    vm.connections.selected = connection;
                }
            });

            if (!vm.user.profile.selected_connection_id) {
                vm.connections.selected = userConnection;
            }

            // console.log('connections', vm.connections);
        }

        function update(connection) {
            var data = {};
            data.selected_connection_id = connection.id;
            profile.put({}, data);
        }
    }
})();

(function () {
    'use strict';

    angular
        .module('app.components')
        .component('userMenu', {
            bindings: {},
            templateUrl: 'app/components/user-menu/user-menu.html',
            controller: 'UserMenuController',
            controllerAs: 'vm'
        });
})();
(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('UserMenuController', UserMenuController);

    UserMenuController.$inject = ['$auth', '$state', '$uibModal', 'profile'];
    /* @ngInject */
    function UserMenuController($auth, $state, $uibModal, profile) {
        var vm = this;

        vm.user = $auth.user;
        vm.profiles = [];

        vm.logout = logout;
        vm.openPasswordChangePopup = openPasswordChangePopup;
        vm.setAuthProfile = setAuthProfile;

        activate();

        function activate() {
            getProfiles();
        }

        function logout() {
            profile.destroyStorageProfile($auth.user);
            $auth.signOut().then(function() {
                $state.go('signIn');
            });
        }

        function openPasswordChangePopup() {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'app/components/password-change/password-change-popup.html',
                controller: ["$scope", "$uibModalInstance", function ($scope, $uibModalInstance) {
                    $scope.cancel = cancel;

                    function cancel() {
                        $uibModalInstance.dismiss('cancel');
                    }
                }],
                size: 'sm',
                windowClass: 'popup popup--password-change'
            });
        }

        function getProfiles() {
            vm.profiles = profile.getStorageProfiles();
        }

        function setAuthProfile(profile) {
            $auth.setAuthHeaders({
                "Authorization": profile.access_token
            });
            location.reload();
        }

    }
})();

(function () {
    'use strict';

    angular
        .module('app.components')
        .component('userSignatures', {
            bindings: {},
            templateUrl: 'app/components/user-signatures/user-signatures.html',
            controller: 'UserSignaturesController',
            controllerAs: 'vm'
        });
})();
(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('UserSignaturesController', UserSignaturesController);

    UserSignaturesController.$inject = ['$auth', '$timeout', '$sce', 'profile', 'sign', 'connection'];
    /* @ngInject */
    function UserSignaturesController($auth, $timeout, $sce, profile, sign, connection) {
        var vm = this;

        vm.signatureForm = {
            model: {
                sign: ""
            }
        };

        vm.signatures = {
            items: []
        };

        vm.connections = {};

        vm.getTrustHtml = getTrustHtml;
        vm.save = save;
        vm.add = add;
        vm.edit = edit;
        vm.destroy = destroy;
        vm.getEmailBySign = getEmailBySign;

        ////

        activate();

        function activate() {
            vm.user = $auth.user;

            getList();
            getConnectionsList();
        }

        function refresh() {

        }

        function getList() {
            sign.get().then(function (response) {
                vm.signatures.items = response.data;
                vm.signatures.items.reverse();
                console.log('signatures', vm.signatures.items);
            });
        }

        function add() {
            var data = {};

            data.sign = vm.signatureForm.model.sign;

            if (vm.signatureForm.model.isSignConnected) {
                data.connection_id = vm.signatureForm.model.connection_id;
                updateConnectionSign(data);
            }

            sign.post({}, data).then(function (response) {
                vm.signatures.items.unshift(response.data);
                vm.signatureForm.model.sign = '';

                $timeout(function () {
                    getList();
                    getConnectionsList();
                }, 250);
            });
        }

        function edit(model) {
            _.forEach(vm.signatures.items, function (item) {
                item.isEdit = false;
            });
            model.isEdit = true;
        }

        function save(model) {
            var data = {};

            data.id = model.id;
            data.sign = model.sign;
            data.connection_id = model.connection_id;

            console.log('data', data);

            if (model.isSignConnected) {
                data.connection_id = model.connection_id;
                updateConnectionSign(data);
            }

            sign.put({}, {id: data.id, sign: data.sign}).then(function (response) {
                model.isEdit = false;

                $timeout(function () {
                    getList();
                    getConnectionsList();
                }, 250);
            });
        }

        function destroy(model) {
            sign.destroy({id: model.id}).then(function (response) {
                _.remove(vm.signatures.items, function (item) {
                    return model === item;
                });
            });
        }

        function getTrustHtml(html) {
            return $sce.trustAsHtml(html);
        }

        function getConnectionsList() {
            vm.connections.items = [];

            var userConnection = {
                id: vm.user.profile.default_connection_id,
                email: vm.user.profile.email,
                sign: vm.user.profile.sign
            };

            vm.connections.items.push(userConnection);

            vm.connections.items = vm.connections.items.concat(vm.user.profile.connections);

            _.forEach(vm.connections.items, function (connection) {
                if (vm.user.profile.selected_connection_id === connection.id) {
                    vm.connections.selected = connection;
                }
            });

            if (!vm.user.profile.selected_connection_id) {
                vm.connections.selected = userConnection;
            }

            vm.signatureForm.model.connection_id = vm.connections.selected.id;
        }

        function updateConnectionSign(data) {
            if (vm.user.profile.default_connection_id === data.connection_id) {
                profile.put({}, {
                    sign: data.sign
                });
                return;
            }

            connection.update({id: data.connection_id}, {sign: data.sign});

            profile.put({}, {
                sign: ''
            });
        }

        function getEmailBySign(data) {
            return _.result(_.find(vm.connections.items, {'sign': data.sign}), 'email');
        }
    }
})();

(function () {
    'use strict';

    angular
        .module('app.components')
        .component('validationErrors', {
            bindings: {
                data: '=',
                server: '=',
                messages: '='
            },
            templateUrl: 'app/components/validation-errors/validation-errors.html',
            controller: 'ValidationErrorsController',
            controllerAs: 'vm'
        });
})();
(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('ValidationErrorsController', ValidationErrorsController);

    ValidationErrorsController.$inject = ['$scope'];
    /* @ngInject */
    function ValidationErrorsController($scope) {
        var vm = this;

        $scope.$watch('vm', function (data) {
            console.log('ValidationErrorsController', data);
        }, true);
    }
})();

(function () {
    'use strict';

    angular
        .module('app.components')
        .component('whiteList', {
            bindings: {
                data: '='
            },
            templateUrl: 'app/components/white-list/white-list.html',
            controller: 'WhiteListController',
            controllerAs: 'vm'
        });
})();
(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('WhiteListController', WhiteListController);

    WhiteListController.$inject = ['$auth', 'wb'];
    /* @ngInject */
    function WhiteListController($auth, wb) {
        var vm = this;

        vm.form = {
            model: {}
        };

        vm.list = {
            checked: [],
            items: []
        };

        vm.add = add;
        vm.remove = remove;

        ////

        activate();

        function activate() {
            vm.user = $auth.user;

            get();
        }

        function add(form) {
            if (form.$invalid) return;

            wb.post({}, {
                email: vm.form.model.email,
                list: 'W'
            });

            vm.list.items.push({
                email: vm.form.model.email,
                wb: 'W'
            });

            vm.form.model.email = '';
        }

        function get() {
            wb.get().then(function (response) {
                vm.list.items = response.data;
            });
        }
        
        function remove() {
            _.forEach(vm.list.checked, function(checked) {

                wb.destroy({}, {
                    email: checked.email,
                    list: 'W'
                });

                _.remove(vm.list.items, function(item) {
                    return checked === item;
                });
            });
        }
    }
})();

(function () {
    'use strict';

    angular
        .module('contacts.main')
        .controller('ContactsMainController', ContactsMainController);

    ContactsMainController.$inject = ['$scope', '$state', '$uibModal', 'contact', 'contactGroup', '$translatePartialLoader', '$translate'];
    /* @ngInject */
    function ContactsMainController($scope, $state, $uibModal, contact, contactGroup, $translatePartialLoader, $translate) {
        var vm = this;

        $translatePartialLoader.addPart('contacts');
        $translate.refresh();

        vm.contacts = {
            isLoading: true,
            params: {},
            items: [],
            checked: []
        };

        vm.contactGroup = {
            model: {}
        };

        $scope.$on('contact:create:success', function () {
            get();
        });

        $scope.$on('contact:update:success', function () {
            get();
        });

        $scope.$on('contact:sync', function () {
            get();
        });

        ////

        activate();

        function activate() {
            if ($state.params.group_id) {
                vm.contacts.params.group_id = $state.params.group_id;

                getByGroup();
                getGroupById();
                return;
            }

            get();
        }

        function get() {
            vm.contacts.isLoading = true;
            contact.get(vm.contacts.params, {}).then(function(response) {
                vm.contacts.isLoading = false;
                vm.contacts.items = response.data;
            });
        }

        function getByGroup() {
            contact.getByGroup(vm.contacts.params, {}).then(function(response) {
                vm.contacts.items = response.data;
            });
        }

        function getGroupById() {
            contactGroup.getById({id: $state.params.group_id}).then(function (response) {
                vm.contactGroup.model = response.data;
                console.log('vm.contactGroup.model', vm.contactGroup.model);
            })
        }

    }
})();

(function () {
    'use strict';

    angular
        .module('contacts.main')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'contacts.main',
                config: {
                    url: '/main?groupId',
                    templateUrl: 'app/contacts/main/contacts.html',
                    controller: 'ContactsMainController',
                    controllerAs: 'vm',
                    title: 'Contacts'
                }
            }
        ];
    }
})();

(function () {
    'use strict';

    angular
        .module('app.layout')
        .component('footer', {
            bindings: {},
            templateUrl: 'app/layout/footer/footer.html',
            controller: 'FooterController',
            controllerAs: 'vm'
        });
})();
(function () {
    'use strict';

    angular
        .module('app.layout')
        .controller('FooterController', FooterController);

    FooterController.$inject = ['$auth'];

    /* @ngInject */
    function FooterController($auth) {
        var vm = this;

        activate();

        function activate() {
            vm.user = $auth.user;
        }
    }
})();

(function () {
    'use strict';

    angular
        .module('help.main')
        .controller('HelpController', HelpController);

    HelpController.$inject = ['help', '$state', '$rootScope'];
    /* @ngInject */
    function HelpController(help, $state, $rootScope) {
        var vm = this;

        console.log($state);

        vm.searchForm = {
            model: {}
        };

        vm.help = {
            list: []
        };

        vm.select = select;
        vm.openMenu = openMenu;

        $rootScope.$on('help:search', function (e, data) {
            search(data.search);
        });

        activate();

        function activate() {
            help.get().then(function (response) {
                vm.help.list = response.data;
                console.log('help', vm.help);
            });
        }

        function select(item) {
            vm.help.selected = item;
        }
        
        function openMenu(help) {
            _.forEach(vm.help.list, function (item) {
                if (help !== item) {
                    item.isActive = false;
                }

            });
            help.isActive = !help.isActive;
        }
        
        function search(q) {
            console.log('data', q);
            vm.searchForm.model.q = q
        }
    }
})();

(function () {
    'use strict';

    angular
        .module('help.main')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'help',
                config: {
                    url: '/help',
                    templateUrl: 'app/help/main/help.html',
                    controller: 'HelpController',
                    controllerAs: 'vm',
                    title: 'help',
                    resolve: {
                        auth: function ($auth, $state) {
                            return $auth.validateUser().catch(function () {
                                $state.go('signIn');
                            });
                        }
                    }
                }
            }
        ];
    }
})();

(function () {
    'use strict';

    angular
        .module('app.layout')
        .component('header', {
            bindings: {},
            templateUrl: 'app/layout/header/header.html',
            controller: 'HeaderController',
            controllerAs: 'vm'
        });
})();
(function () {
    'use strict';

    angular
        .module('app.layout')
        .controller('HeaderController', HeaderController);

    HeaderController.$inject = ['$auth', '$state', '$translate'];

    /* @ngInject */
    function HeaderController($auth, $state, $translate) {
        var vm = this;

        activate();

        function activate() {
            vm.user = $auth.user;
            vm.$state = $state;
        }
    }
})();

(function () {
    'use strict';

    angular
        .module('app.layout')
        .component('menuContacts', {
            bindings: {
                contactGroup: '='
            },
            templateUrl: 'app/layout/menu-contacts/menu-contacts.html',
            controller: 'MenuContactsController',
            controllerAs: 'vm'
        });
})();
(function () {
    'use strict';

    angular
        .module('app.layout')
        .controller('MenuContactsController', MenuContactsController);

    MenuContactsController.$inject = ['$uibModal', '$scope', 'contactGroup', '$translatePartialLoader', '$translate'];

    /* @ngInject */
    function MenuContactsController($uibModal, $scope, contactGroup,$translatePartialLoader, $translate) {
        var vm = this;
        $translatePartialLoader.addPart('layout/menu-contacts');
        $translate.refresh();

        vm.openGroupAddPopup = openGroupAddPopup;
        vm.openContactImportFilePopup = openContactImportFilePopup;

        $scope.$on('contactGroup:create:success', function () {
            getContactGroup();
        });

        function getContactGroup() {
            contactGroup.get().then(function (response) {
                vm.contactGroup.items = response.data;
            });
        }

        function openGroupAddPopup() {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'app/components/contact-group-add/contact-group-add-popup.html',
                controller: ["$scope", "$uibModalInstance", function ($scope, $uibModalInstance) {
                    $scope.cancel = cancel;

                    function cancel() {
                        $uibModalInstance.dismiss('cancel');
                    }
                }],
                size: 'sm',
                windowClass: 'popup popup--contact-group-add'
            });
        }

        function openContactImportFilePopup() {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'app/components/contact-import-file/contact-import-file-popup.html',
                controller: ["$scope", "$uibModalInstance", function ($scope, $uibModalInstance) {
                    $scope.cancel = cancel;

                    function cancel() {
                        $uibModalInstance.dismiss('cancel');
                    }
                }],
                size: 'sm',
                windowClass: 'popup popup--contact-import-file'
            });
        }
    }
})();

(function () {
    'use strict';

    angular
        .module('app.layout')
        .component('menuMain', {
            bindings: {
                folder: '=',
                tag: '='
            },
            templateUrl: 'app/layout/menu-main/menu-main.html',
            controller: 'MenuMainController',
            controllerAs: 'vm'
        });
})();
(function () {
    'use strict';

    angular
        .module('app.layout')
        .controller('MenuMainController', MenuMainController);

    MenuMainController.$inject = ['$scope', '$rootScope', '$uibModal', '$state', '$auth', 'mailBox', 'mail', 'tag', '$translatePartialLoader', '$translate'];

    /* @ngInject */
    function MenuMainController($scope, $rootScope, $uibModal, $state, $auth, mailBox, mail, tag, $translatePartialLoader, $translate) {
        var vm = this;

        $translatePartialLoader.addPart('layout/menu-main');
        $translate.refresh();

        vm.messages = [];

        vm.standartFolders = [
            {
                name: 'INBOX',
                icon: 'icon-incoming'
            },
            {
                name: 'Drafts',
                icon: 'icon-draft'
            },
            {
                name: 'Trash',
                icon: 'icon-bin'
            },
            {
                name: 'Sent',
                icon: 'icon-sent'
            },
            {
                name: 'Junk',
                icon: 'icon-spam'
            },
            {
                name: 'Outbox',
                icon: 'icon-up'
            }
        ];

        vm.folders = {};

        vm.tags = {
            items: []
        };

        $rootScope.$on('mail:sync', function () {
            getMailBox();
        });

        $rootScope.$on('folders:sync', function () {
            getMailBox();
        });

        $scope.$on('mailBox:update:success', function () {
            getMailBox();
        });

        $scope.$on('mailBox:create:success', function () {
            getMailBox();
        });

        $scope.$on('mailBox:destroy:success', function () {
            getMailBox();
        });

        $scope.$on('mailBox:sync', function () {
            getMailBox();
        });

        $scope.$on('tag:update:success', function () {
            getTag();
        });

        $scope.$on('tag:create:success', function () {
            getTag();
        });

        $scope.$on('tag:destroy:success', function () {
            getTag();
        });

        vm.openFolderCreatePopup = openFolderCreatePopup;
        vm.syncMail = syncMail;
        vm.openTagCreatePopup = openTagCreatePopup;
        vm.goToUrl = goToUrl;
        vm.clearFolder = clearFolder;
        vm.openStoragePopup = openStoragePopup;
        vm.openComposePopup = openComposePopup;

        activate();

        function activate() {
            vm.user = $auth.user;
            vm.$state = $state;

            vm.folder.$promise.then(function (response) {
                vm.folders = _.assign(vm.folders, response.data);
                setIcons();
                getMailBoxFormatted();
            });

            getTag();
        }

        function getMailBox() {
            mailBox.get().then(function (response) {
                vm.folders = _.assign(vm.folders, response.data);
                setIcons();
                getMailBoxFormatted();
            });
        }

        function getMailBoxFormatted() {
            _.forEach(vm.folders.items, function (folder) {
                var isSub = true;

                _.forEach(vm.standartFolders, function (standartFolder) {
                    if (folder.name == standartFolder.name) {
                        isSub = false;
                    }
                });

                if (isSub) {
                    folder.isSub = true;
                } else {
                    folder.isSub = false;
                }

                if (folder.name === 'INBOX') {
                    folder.isOpen = true;
                }
            });

            sortFolder();
        }

        function sortFolder() {
            vm.folders.items = _.sortBy(vm.folders.items, 'caption').reverse();
            vm.folders.items = _.sortBy(vm.folders.items, [
                {'name': 'INBOX'},
                {'isSub': true},
                {'name': 'Sent'},
                {'name': 'Trash'},
                {'name': 'Junk'},
                {'name': 'Drafts'},
                {'name': 'Outbox'}
                // {'name': 'Templates'}
            ]).reverse();
        }

        function setIcons() {
            _.forEach(vm.folders.items, function (item) {
                _.forEach(vm.standartFolders, function (standartFolder) {
                    if (item.name === standartFolder.name) {
                        item.icon = standartFolder.icon;
                    }
                });
            });
        }

        function openFolderCreatePopup() {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'app/components/folder-create/folder-create-popup.html',
                controller: ["$scope", "$uibModalInstance", function ($scope, $uibModalInstance) {
                    $scope.cancel = cancel;

                    function cancel() {
                        $uibModalInstance.dismiss('cancel');
                    }
                }],
                // controllerAs: 'vm',
                size: 'sm',
                windowClass: 'popup popup--folder-create'
            });
        }

        function openTagCreatePopup() {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'app/components/tag-create/tag-create-popup.html',
                controller: ["$scope", "$uibModalInstance", "messages", function ($scope, $uibModalInstance, messages) {
                    $scope.cancel = cancel;

                    $scope.messages = messages;

                    function cancel() {
                        $uibModalInstance.dismiss('cancel');
                    }
                }],
                resolve: {
                    messages: function () {
                        return vm.messages;
                    }
                },
                // controllerAs: 'vm',
                size: 'sm',
                windowClass: 'popup popup--tag-create'
            });
        }

        function getTag() {
            tag.get().then(function (response) {
                vm.tags.items = response.data;
            });
        }

        function syncMail() {
            if ($state.current.name === 'mail.inbox') {
                $scope.$emit('mail:sync');
                return;
            }
            $scope.$emit('folders:sync');
            $state.go('mail.inbox', {mbox: 'INBOX'});
        }

        function goToUrl(folder) {
            $state.go('mail.inbox', {
                mbox: folder.name,
                filter: undefined,
                tag_id: undefined
            });
        }

        function clearFolder(e, folder) {
            e.stopPropagation();
            mail.deleteAll({}, {
                mbox: folder.name,
                connection_id: vm.user.profile.default_connection_id
            }).then(function () {
                $scope.$emit('mail:sync');
            });
        }


        function openStoragePopup() {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'app/components/storage-popup/storage-popup.html',
                controller: 'StoragePopupController',
                controllerAs: 'vm',
                size: 'lg',
                windowClass: 'popup popup--storage',
                resolve: {
                    tariffResult: ["tariff", function (tariff) {
                        return tariff.getTariff();
                    }]
                }
            })
        }

        function openComposePopup(params) {
            var modalInstance = $uibModal.open({
                animation: false,
                templateUrl: 'app/components/compose-popup/compose-popup.html',
                controller: 'ComposePopupController',
                controllerAs: 'vm',
                resolve: {
                    params: function () {
                        return params;
                    }
                },
                size: 'lg',
                windowClass: 'popup popup--compose hide-elm'
            });
        }
    }
})();

(function () {
    'use strict';

    angular
        .module('app.layout')
        .component('menuSettings', {
            bindings: {},
            templateUrl: 'app/layout/menu-settings/menu-settings.html',
            controller: 'MenuSettingsController',
            controllerAs: 'vm'
        });
})();
(function () {
    'use strict';

    angular
        .module('app.layout')
        .controller('MenuSettingsController', MenuSettingsController);

    MenuSettingsController.$inject = ['$uibModal', '$auth', 'lang', '$translate'];

    /* @ngInject */
    function MenuSettingsController($uibModal, $auth, lang, $translate) {
        var vm = this;

        // $translatePartialLoader.addPart('layout/menu-settings');
        // $translate.refresh();

        vm.openPasswordChangePopup = openPasswordChangePopup;

        activate();

        function activate() {
            vm.user = $auth.user;
            vm.profile = $auth.user.profile;

            vm.useLang = lang.getCurrentLang();
        }

        function openPasswordChangePopup() {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'app/components/password-change/password-change-popup.html',
                controller: ["$scope", "$uibModalInstance", function ($scope, $uibModalInstance) {
                    $scope.cancel = cancel;

                    function cancel() {
                        $uibModalInstance.dismiss('cancel');
                    }
                }],
                size: 'sm',
                windowClass: 'popup popup--password-change'
            });
        }

    }
})();

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

(function () {
    'use strict';

    angular
        .module('mail.inbox')
        .controller('InboxController', InboxController);

    InboxController.$inject = ['$rootScope', '$state', '$auth', '$uibModal', '$interval', '$scope', 'mail', 'mailBox', 'profile', 'messages'];
    /* @ngInject */
    function InboxController($rootScope, $state, $auth, $uibModal, $interval, $scope, mail, mailBox, profile, messages) {
        var vm = this;

        vm.messages = {
            params: {
                'per-page': 20,
                'len': 100
            },
            defaultParams: {
                'per-page': 20,
                'len': 100
            },
            checked: []
        };

        vm.folders = {};

        $interval(function () {
            $rootScope.$broadcast('folders:sync');
            get();
        }, 1000 * 60);

        $rootScope.$on('mail:sync', function () {
            get();
        });

        $rootScope.$on('search:mail', function (e, data) {
            vm.messages.params = data.search;
            vm.messages.isSearch = true;
            get();
        });

        $rootScope.$on('search:close', function (e, data) {
            vm.messages.params = angular.copy(vm.messages.defaultParams);
            vm.messages.params.mbox = $state.params.mbox;
            vm.messages.isSearch = false;
            get();
        });

        $scope.$watch('vm.messages.params.search_start', function (e, data) {
            get();
        });

        $scope.$watch('vm.messages.params.search_end', function (e, data) {
            get();
        });

        vm.clearFolder = clearFolder;
        vm.openComposePopup = openComposePopup;

        activate();

        function activate() {
            vm.$state = $state;
            vm.user = $auth.user;

            if ($state.params.filter) {
                vm.messages.params.filter = $state.params.filter;
            }

            if ($state.params.mbox) {
                vm.messages.params.mbox = $state.params.mbox;
            }

            if ($state.params.tag_id) {
                vm.messages.params.tag_id = $state.params.tag_id;
            }

            if ($state.params.compose) {
                openComposePopup({new: true});
            }

            getMailBox();

            messages.$promise.then(function (response) {
                vm.messages.params.search = null;
                vm.messages.checked = [];
                vm.messages = _.assign(vm.messages, response.data);
                _.forEach(vm.messages.items, function (message) {
                    message.body = message.body ? String(message.body).replace(/<[^>]+>/gm, '') : '';
                });
            });
        }

        function get() {
            mail.get(vm.messages.params).then(function (response) {
                vm.messages.checked = [];
                vm.messages = _.assign(vm.messages, response.data);
                _.forEach(vm.messages.items, function (message) {
                    message.body = message.body ? String(message.body).replace(/<[^>]+>/gm, '') : '';
                });

                if (vm.messages.isSearch) {
                    vm.messages.showSearchIcon = true;
                } else {
                    vm.messages.showSearchIcon = false;
                }
            });
        }

        function getMailBox() {
            mailBox.get().then(function (response) {
                vm.folders = _.assign(vm.folders, response.data);
            });
        }

        function clearFolder(e, folder) {
            e.stopPropagation();
            mail.deleteAll({}, {
                mbox: folder.name,
                connection_id: vm.user.profile.default_connection_id
            }).then(function () {
                get();
            });
        }

        function openComposePopup(params) {
            $uibModal.open({
                animation: false,
                templateUrl: 'app/components/compose-popup/compose-popup.html',
                controller: 'ComposePopupController',
                controllerAs: 'vm',
                resolve: {
                    params: function () {
                        return params;
                    }
                },
                size: 'lg',
                windowClass: 'popup popup--compose popup--compose-minimize hide-elm'
            });
        }
    }
})();

(function () {
    'use strict';

    angular
        .module('mail.inbox')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'mail.inbox',
                config: {
                    url: '/inbox?mbox&filter&tag_id&compose',
                    templateUrl: 'app/mail/inbox/inbox.html',
                    controller: 'InboxController',
                    controllerAs: 'vm',
                    title: null,
                    resolve: {
                        messages: function (mail, $stateParams) {
                            var messages = {
                                params: {
                                    'per-page': 20,
                                    'len': 100
                                },
                                checked: []
                            };

                            if ($stateParams.filter) {
                                messages.params.filter = $stateParams.filter;
                            }

                            if ($stateParams.mbox) {
                                messages.params.mbox = $stateParams.mbox;
                            }

                            if ($stateParams.tag_id) {
                                messages.params.tag_id = $stateParams.tag_id;
                            }

                            return mail.get(messages.params);
                        }
                    }
                }
            }
        ];
    }
})();

(function () {
    'use strict';

    angular
        .module('mail.compose')
        .controller('ComposeController', ComposeController);

    ComposeController.$inject = ['mail', '$scope', '$interval', '$state', '$rootScope', '$auth', 'contact', '$uibModal', 'Upload', '$location'];
    /* @ngInject */
    function ComposeController(mail, $scope, $interval, $state, $rootScope, $auth, contact, $uibModal, Upload, $location) {
        var vm = this;

        $translatePartialLoader.addPart('mail');
        $translate.refresh();

        vm.connections = {
            selected: {},
            items: []
        };

        vm.interval = {};

        vm.message = {};

        vm.isSaveDraft = false;

        vm.fwd = {
            items: [],
            checked: []
        };

        vm.isUploading = false;

        vm.isCopy = false;
        vm.isCopyHidden = false;

        vm.tags = [];

        vm.sendForm = {
            model: {}
        };

        vm.toList = {
            model: {}
        };

        vm.templates = {
            items: []
        };

        vm.send = send;
        vm.save = save;
        vm.upload = upload;
        vm.saveTemplate = saveTemplate;

        $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
            $interval.cancel(vm.interval);
        });

        $scope.$watch('vm.sendForm.model.body', function (data, oldData) {
            if (data) {
                if (!vm.isSaveDraft && !$state.params.fwd && !$state.params.re && !$state.params.template) {
                    save();
                    vm.interval = $interval(function () {
                        if (vm.sendForm.model.to && !vm.$state.params.template) {
                            save();
                        }
                    }, 1000 * 60);
                    vm.isSaveDraft = true;
                }
            }
        });

        activate();

        function activate() {
            vm.user = $auth.user;
            vm.$state = $state;

            getTemplates();

            if ($state.params.id && $state.params.mbox && !$state.params.fwd && !$state.params.re) {
                vm.sendForm.id = $state.params.id;
                getMessage();
            }

            if ($state.params.to) {
                vm.sendForm.model.to = $state.params.to;
            }

            if ($state.params.fwd && $state.params.mbox === 'Drafts') {
                pasteFwd();
            }

            if ($state.params.fwd && $state.params.mbox !== 'Drafts') {
                vm.sendForm.id = $state.params.ids;

                if (_.isArray($state.params.ids)) {
                    pasteFwdList();
                    return;
                }

                copyFwdMessage();
            }

            if ($state.params.re && $state.params.mbox === 'Drafts') {
                pasteRe();
            }

            if ($state.params.re && $state.params.mbox !== 'Drafts') {
                vm.sendForm.id = $state.params.id;
                copyReMessage();
            }

            pasteSign();
            getConnectionsList();
        }

        function send(form) {
            if (form.$invalid) return;

            var data = getFormattedData();

            if (!data.sdate) {
                data.cmd = 'send';
            }

            if (vm.fwd.checked.length) {
                data.body += pasteListFwd();
            }

            data.mbox = $state.params.mbox || 'Drafts';

            if ($state.params.id) {
                mail.put({id: vm.sendForm.id}, data);
            } else {
                mail.post({}, data);
            }

            $rootScope.$broadcast('notify:message', {
                message: 'Письмо успешно отправлено'
            });

            $state.go('mail.inbox', {mbox: 'INBOX'});
        }

        function save() {
            var data = getFormattedData();

            data.mbox = $state.params.mbox || 'Drafts';

            var result = {};

            if (!vm.sendForm.id) {
                result = mail.post({}, data);
            }

            if (vm.sendForm.id) {
                if ($state.params.template) {
                    data.mbox = $state.params.mbox;
                    data.connection_id = $state.params.connection_id;
                }

                result = mail.put({id: vm.sendForm.id}, data);
            }

            result.then(function (response) {
                if (response.success) {
                    vm.sendForm.id = response.data.id;
                    vm.sendForm.model.date = {
                        date: setNowTime()
                    };

                    $state.go('mail.compose', {
                        id: vm.sendForm.id,
                        mbox: 'Drafts',
                        connection_id: vm.user.profile.default_connection_id
                    }, {notify: false});

                }
            });
        }

        function saveTemplate() {
            var data = getFormattedData();

            if (!vm.sendForm.id) {
                data.mbox = 'Templates';

                mail.post({}, data).then(function () {
                    $state.go('mail.inbox', {
                        mbox: 'Templates'
                    });
                });
            }

            if (vm.sendForm.id) {
                data.number = vm.sendForm.id;
                data.connection_id = vm.user.profile.default_connection_id;
                data.mbox = 'Drafts';

                mail.put({id: vm.sendForm.id}, data).then(function (response) {
                    data.number = response.data.id;
                    mail.move({}, {
                        mboxnew: 'Templates',
                        messages: [data]
                    }).then(function () {
                        $state.go('mail.inbox', {
                            mbox: 'Templates'
                        });
                    });
                });
            }
        }

        function getMessage() {
            mail.getById({
                id: $state.params.id,
                mbox: $state.params.mbox,
                connection_id: $state.params.connection_id,
                part: 'headnhtml'
            }).then(function (response) {
                vm.sendForm.model = response.data;
                vm.sendForm.model.subject = vm.sendForm.model.Subject;
                vm.sendForm.model.to = getEmailSelectFormat({
                    first_name: vm.sendForm.model.to[0].address,
                    email: vm.sendForm.model.to[0].address
                });
            });
        }

        function setNowTime() {
            return moment().toDate();
        }

        function getFormattedData() {
            var data = {};

            if (vm.sendForm.model.to) {
                data.to = getMailsFromContact(vm.sendForm.model.to);
            }

            if (vm.sendForm.model.toCopy) {
                data.toCopy = getMailsFromContact(vm.sendForm.model.toCopy);
            }

            if (vm.sendForm.model.toCopyHidden) {
                data.toCopyHidden = getMailsFromContact(vm.sendForm.model.toCopyHidden);
            }

            if (vm.sendForm.model.subject) {
                data.subject = vm.sendForm.model.subject;
            }

            if (vm.sendForm.model.body) {
                data.body = vm.sendForm.model.body;
            }

            if (vm.sendForm.model.sdate) {
                data.sdate = vm.sendForm.model.sdate;
            }

            if (vm.sendForm.model.from_connection) {
                data.from_connection = vm.sendForm.model.from_connection;
            }

            if (vm.sendForm.model.attachmentsData) {
                data.attaches = [];
                _.forEach(vm.sendForm.model.attachmentsData, function (attach) {
                    data.attaches.push(attach.fileName);
                });
            }

            vm.sendForm.model.connection_id = vm.user.profile.default_connection_id;

            return data;
        }

        function getMailsFromContact(data) {
            var to = [];

            _.forEach(data, function (item) {
                if (item.emails) {
                    to.push(item.emails[0].value);
                    return;
                }
                to.push(item.first_name);
            });

            return to;
        }

        function upload(files, invalidFiles) {
            if (vm.sendForm.model.attachmentsData) {
                vm.sendForm.model.attachmentsData = vm.sendForm.model.attachmentsData.concat(
                    getFormattedAttach(files)
                );
            } else {
                vm.sendForm.model.attachmentsData = getFormattedAttach(files);
            }

            vm.isUploading = true;

            mail.upload({
                id: $state.params.id,
                mbox: $state.params.mbox
            }, {}, files).then(function (response) {
                vm.isUploading = false;
                vm.sendForm.id = response.data.data;
                vm.sendForm.model.number = vm.sendForm.id;

                if (!vm.sendForm.model.attachmentsData) {
                    vm.sendForm.model.attachmentsData = [];
                }

                _.forEach(files, function (file) {
                    file.number = vm.sendForm.id;
                });
            });
        }

        function getFormattedAttach(files) {
            _.forEach(files, function (file) {
                file.number = vm.sendForm.id;
                file.fileName = file.name;
                file.mime = file.type;
            });
            return files;
        }

        function pasteSign() {
            if (vm.user.profile.sign && !vm.sendForm.model.body && !$state.params.fwd && !$state.params.re) {
                vm.sendForm.model.body = '<br><br>' + vm.user.profile.sign || '';
            }
        }

        function pasteFwdList() {
            var messages = mail.getFwdData();
            console.log('messages fwd', messages);
            _.forEach(messages, function (message) {
                getFwdMessageById(message, messages);
            });
        }

        function getFwdMessageById(message, messages) {
            return mail.getById({
                id: message.number,
                mbox: message.mbox,
                connection_id: message.connection_id,
                part: 'headnhtml'
            }).then(function (response) {
                if (messages.length === 1) {
                    pasteOneFwd(response.data);
                    return;
                }
                vm.fwd.items.push(response.data);
                vm.fwd.checked.push(response.data);
            });
        }

        function pasteFwd() {
            mail.getById({
                id: $state.params.id,
                mbox: $state.params.mbox,
                connection_id: $state.params.connection_id,
                part: 'headnhtml'
            }).then(function (response) {
                var message = response.data;

                var html = '<br><br><br>';
                html += '-------- Пересылаемое сообщение--------<br>';
                html += moment(message.date.date).format('DD.MM.YYYY HH.mm');
                html += ' ';
                html += message.fromAddress || '';
                html += '<br><br>';
                html += message.body + '<br>';
                html += '-------- Конец пересылаемого сообщения --------';
                html += '<br><br>';
                html += vm.user.profile.sign || '';

                vm.sendForm.id = message.number;

                vm.sendForm.model.number = message.number;
                vm.sendForm.model.mbox = message.mbox;
                vm.sendForm.model.connection_id = message.connection_id;
                vm.sendForm.model.attachmentsData = message.attachmentsData;
                vm.sendForm.model.subject = 'Fwd: ';
                vm.sendForm.model.subject += message.Subject || '';
                vm.sendForm.model.body = html;

                vm.sendForm.model.to = getEmailSelectFormat({
                    first_name: message.from,
                    email: message.fromAddress
                });
            });
        }

        function pasteListFwd() {
            var fwd = '';

            _.forEach(vm.fwd.checked, function (item) {
                fwd += '-------- Пересылаемое сообщение--------<br>';
                fwd += moment(item.date.date).format('DD.MM.YYYY HH.mm');
                fwd += item.from || '';
                fwd += ' <br>';
                fwd += item.body + '<br>';
                fwd += '-------- Конец пересылаемого сообщения --------';
                fwd += '<br><br>';
            });

            return fwd;
        }

        function pasteRe() {
            mail.getById({
                id: $state.params.id,
                mbox: $state.params.mbox,
                connection_id: $state.params.connection_id,
                part: 'headnhtml'
            }).then(function (response) {
                var message = response.data;

                var html = '<br><br><br>';
                html += moment(message.date.date).format('DD.MM.YYYY HH.mm');
                html += ' ';
                html += message.from || '';
                html += ' <br>';
                html += message.body + '<br>';
                html += '<br>';
                html += vm.user.profile.sign || '';

                vm.sendForm.id = message.number;

                vm.sendForm.model.number = message.number;
                vm.sendForm.model.mbox = message.mbox;
                vm.sendForm.model.connection_id = message.connection_id;
                vm.sendForm.model.attachmentsData = message.attachmentsData;
                vm.sendForm.model.subject = 'Re: ';
                vm.sendForm.model.subject += message.Subject || '';
                vm.sendForm.model.body = html;

                vm.sendForm.model.to = getEmailSelectFormat({
                    first_name: message.from,
                    email: message.fromAddress
                });
            });
        }

        function getTemplates() {
            var data = {
                'mbox': 'Templates',
                'per-page': 20,
                'len': 100
            };

            mail.get(data).then(function (response) {
                vm.templates.isLoading = false;
                vm.templates = _.assign(vm.templates, response.data);
            });
        }

        function getEmailSelectFormat(data) {
            return [{
                first_name: data.first_name,
                emails: [{
                    value: data.email
                }]
            }];
        }

        function getConnectionsList() {
            var userConnection = {
                id: vm.user.profile.default_connection_id,
                email: vm.user.profile.email
            };

            vm.connections.items.push(userConnection);

            vm.connections.items = vm.connections.items.concat(vm.user.profile.connections);

            _.forEach(vm.connections.items, function (connection) {
                if (vm.user.profile.selected_connection_id === connection.id) {
                    vm.connections.selected = connection;
                }
            });

            if (!vm.user.profile.selected_connection_id) {
                vm.connections.selected = userConnection;
            }

            vm.sendForm.model.from_connection = vm.connections.selected.id;
        }

        function copyReMessage() {
            var data = {
                id: $state.params.id,
                mboxfrom: $state.params.mbox,
                connection_id: $state.params.connection_id,
                cmd: 'reply'
            };
            mail.post({}, data).then(function (response) {
                vm.sendForm.id = response.data.id;

                $state.go('mail.compose', {
                    id: response.data.id,
                    mbox: 'Drafts',
                    connection_id: vm.user.profile.default_connection_id,
                }, {notify: false});

                pasteRe();
            });
        }

        function copyFwdMessage() {
            var data = {
                id: $state.params.ids,
                mboxfrom: $state.params.mbox,
                connection_id: $state.params.connection_id,
                cmd: 'forward'
            };
            mail.post({}, data).then(function (response) {
                vm.sendForm.id = response.data.id;

                $state.go('mail.compose', {
                    id: response.data.id,
                    mbox: 'Drafts',
                    connection_id: vm.user.profile.default_connection_id
                }, {notify: false});

                pasteFwd();
            });
        }
    }
})();

(function () {
    'use strict';

    angular
        .module('mail.compose')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'mail.compose',
                config: {
                    url: '/compose?id&mbox&ids&to&connection_id&template&fwd&re',
                    templateUrl: 'app/mail/compose/compose.html',
                    controller: 'ComposeController',
                    controllerAs: 'vm',
                    reloadOnSearch: false,
                    title: 'Compose'
                }
            }
        ];
    }
})();

(function () {
    'use strict';

    angular
        .module('mail.message')
        .controller('MessageController', MessageController);

    MessageController.$inject = ['mail', '$scope', '$state', '$sce', 'message', 'tag', '$rootScope', '$auth', '$uibModal', '$translate', 'contact'];
    /* @ngInject */
    function MessageController(mail, $scope, $state, $sce, message, tag, $rootScope, $auth, $uibModal, $translate, contact) {
        var vm = this;

        // $translatePartialLoader.addPart('mail');
        // $translate.refresh();

        vm.message = {};

        vm.messages = {
            checked: []
        };

        vm.selectedPartInfo = 'subject';

        vm.info = {};

        vm.sendForm = {
            model: {}
        };

        vm.isSendTextOpen = false;
        vm.isFromOpen = false;

        vm.getDate = getDate;
        vm.getTrustHtml = getTrustHtml;
        vm.setUnTag = setUnTag;
        vm.send = send;
        vm.setImportant = setImportant;
        vm.upload = upload;
        vm.getInfoMessage = getInfoMessage;
        vm.goToUrl = goToUrl;
        vm.goToFwd = goToFwd;
        vm.goToAnswer = goToAnswer;
        vm.openContactView = openContactView;

        $scope.$on('tag:message:add:success', function (e, data) {
            // console.log('data', data);
            // vm.message.model.tags.push(data.tag);
            getTags();
        });

        $scope.$on('tag:message:delete:success', function (e, data) {
            // console.log('data', data);
            // vm.message.model.tags.push(data.tag);
            getTags();
        });

        activate();

        function activate() {
            vm.$state = $state;
            // getMessage();

            vm.user = $auth.user;

            message.$promise.then(function (response) {
                vm.message.model = response.data;
                vm.messages.checked.push(vm.message.model);

                $rootScope.$broadcast('mailBox:sync');

                getTags();

                mail.setAnswerData(vm.message.model);

                getPaginateMessage(vm.message.model);

                getInfoMessage('subject');
            });
        }

        function getTags() {
            tag.getTagsByMessage({}, {
                mbox: vm.message.model.mbox,
                id: vm.message.model.number,
                connection_id: vm.message.model.connection_id
            }).then(function (response) {
                vm.message.model.tags = response.data;
            })
        }

        function setUnTag(item) {
            var ids = [];

            _.remove(vm.message.model.tags, function (tag) {
                return tag.id === item.id;
            });

            ids.push(vm.message.model.number);

            tag.deleteTagFromMessages({}, {
                // ids: ids,
                messages: [vm.message.model],
                tag_id: item.id
            }).then(function (response) {
                // vm.messages.checked = [];
            });
        }

        function getDate(date) {
            var newDate = new Date(date);
            return moment(newDate).format("MMM Do YY");
        }

        function getTrustHtml(html) {
            return $sce.trustAsHtml(html);
        }

        function send(form) {
            if (form.$invalid) return;

            var data = {
                to: vm.message.model.fromAddress,
                body: vm.sendForm.model.body
            };

            data.cmd = 'send';
            mail.post({}, data).then(function (response) {
                console.log('response', response);
                if (response.success) {
                    $state.go('mail.inbox', {mbox: 'INBOX'});
                }
            });
        }

        function getFormattedData() {
            var data = {};

            if (vm.sendForm.model.to) {
                data.to = vm.sendForm.model.to.split(',');
            }

            if (vm.sendForm.model.toCopy) {
                data.toCopy = vm.sendForm.model.toCopy.split(',');
            }

            if (vm.sendForm.model.toCopyHidden) {
                data.toCopyHidden = vm.sendForm.model.toCopyHidden.split(',');
            }

            if (vm.sendForm.model.subject) {
                data.subject = vm.sendForm.model.subject;
            }

            if (vm.sendForm.model.body) {
                data.body = vm.sendForm.model.body;
            }

            if (vm.sendForm.model.attaches) {
                data.attaches = vm.sendForm.model.attaches;
            }

            vm.sendForm.model.connection_id = vm.user.profile.default_connection_id;

            return data;
        }

        function setImportant() {
            if (vm.message.model.important && !vm.message.model.isLoading) {
                vm.message.isLoading = true;
                mail.deflag({}, {
                    messages: [vm.message.model],
                    flag: 'Flagged'
                }).then(function () {
                    vm.message.isLoading = false;
                });
                vm.message.model.important = !vm.message.model.important;
                return;
            }

            vm.message.isLoading = true;
            mail.flag({}, {
                messages: [vm.message.model],
                flag: 'Flagged'
            }).then(function () {
                vm.message.isLoading = false;
            });
            vm.message.model.important = !vm.message.model.important;
        }

        function upload(files, invalidFiles) {
            var data = getFormattedData();

            if (vm.sendForm.model.attachmentsData) {
                vm.sendForm.model.attachmentsData = vm.sendForm.model.attachmentsData.concat(
                    getFormattedAttach(files)
                );
            } else {
                vm.sendForm.model.attachmentsData = getFormattedAttach(files);
            }

            console.log('vm.sendForm.model.attachmentsData', vm.sendForm.model.attachmentsData);

            vm.isUploading = true;

            mail.upload({id: vm.sendForm.id}, data, files).then(function (response) {
                console.log('result', response, files);

                vm.isUploading = false;

                vm.sendForm.id = response.data.data;
                vm.sendForm.model.number = vm.sendForm.id;

                if (!vm.sendForm.model.attaches) {
                    vm.sendForm.model.attaches = [];
                }

                _.forEach(files, function (file) {
                    file.number = vm.sendForm.id;
                    vm.sendForm.model.attaches.push(file.name);
                });
            });
        }

        function getFormattedAttach(files) {
            _.forEach(files, function (file) {
                file.number = vm.sendForm.id;
                file.fileName = file.name;
                file.mime = file.type;
            });

            return files;
        }

        function getPaginateMessage() {
            mail.getById({
                id: $state.params.id,
                mbox: $state.params.mbox,
                connection_id: $state.params.connection_id,
                part: 'headnhtml',
                neighbours: 1
            }).then(function (response) {
                vm.paginate = response.data;
            })
        }

        function getInfoMessage(part) {
            vm.selectedPartInfo = part;

            var params = {
                mbox: vm.message.model.mbox,
                'per-page': 5
            };

            if (part === 'from') {
                params.search = vm.message.model.fromAddress;
                params.search_part = 'from';
            }

            if (part === 'subject') {
                params.search = vm.message.model.Subject;
                params.search_part = 'subject';
            }

            if (part === 'attach') {
                params.search = vm.message.model.fromAddress;
                params.search_part = 'from';
                params.filter = 'attach';
            }

            vm.info.isLoading = true;

            mail.get(params).then(function (response) {
                vm.info.isLoading = false;
                // vm.messages.checked = [];
                // vm.messages = _.assign(vm.messages, response.data);

                var messages = response.data;

                _.forEach(messages, function (message) {
                    message.body = message.body ? String(message.body).replace(/<[^>]+>/gm, '') : '';
                });

                vm.info.messages = messages;
                vm.info.attachmentsData = [];

                _.forEach(vm.info.messages.items, function (item) {
                    _.forEach(item.attachmentsData, function (attachment) {
                        vm.info.attachmentsData.push(attachment);
                    });
                });

                console.log('vm.info.attachmentsData', vm.info.attachmentsData);
            });
        }

        function goToUrl(model) {
            if (model.mbox === 'Drafts') {
                $state.go('mail.compose', {
                    id: model.number,
                    mbox: model.mbox,
                    connection_id: model.connection_id
                });
                return;
            }

            if (model.mbox === 'Templates') {
                $state.go('mail.compose', {
                    id: model.number,
                    mbox: model.mbox,
                    connection_id: model.connection_id,
                    template: true
                });
                return;
            }

            $state.go('mail.message', {
                id: model.number,
                mbox: model.mbox,
                connection_id: model.connection_id
            });
        }

        function goToAnswer() {
            // var data = mail.getAnswerData();

            var params = {
                id: vm.message.model.number,
                mbox: vm.message.model.mbox,
                connection_id: vm.message.model.connection_id,
                re: true
            };

            $uibModal.open({
                animation: false,
                templateUrl: 'app/components/compose-popup/compose-popup.html',
                controller: 'ComposePopupController',
                controllerAs: 'vm',
                resolve: {
                    params: function () {
                        return params;
                    }
                },
                size: 'lg',
                windowClass: 'popup popup--compose popup--compose-minimize hide-elm'
            });
        }

        function goToFwd() {
            var checked = [vm.message.model];
            var ids = [];

            _.forEach(checked, function (item) {
                ids.push(item.number);
            });

            mail.setFwdData(checked);

            var params = {
                ids: ids,
                mbox: checked[0].mbox,
                connection_id: checked[0].connection_id,
                fwd: true
            };

            $uibModal.open({
                animation: false,
                templateUrl: 'app/components/compose-popup/compose-popup.html',
                controller: 'ComposePopupController',
                controllerAs: 'vm',
                resolve: {
                    params: function () {
                        return params;
                    }
                },
                size: 'lg',
                windowClass: 'popup popup--compose popup--compose-minimize hide-elm'
            });
        }

        function openContactView(email) {
            contact.find({}, {q: email}).then(function (response) {
                var contactModel = response.data[0];
                var modalInstance = $uibModal.open({
                    animation: true,
                    templateUrl: 'app/components/contact-view/contact-view-popup.html',
                    controller: ["$scope", "$uibModalInstance", "model", function ($scope, $uibModalInstance, model) {
                        $scope.cancel = cancel;

                        $scope.contact = model;

                        function cancel() {
                            $uibModalInstance.dismiss('cancel');
                        }
                    }],
                    resolve: {
                        model: function () {
                            return contactModel;
                        }
                    },
                    size: 'sm',
                    windowClass: 'popup popup--contact-add'
                });
            });
        }
    }
})();

(function () {
    'use strict';

    angular
        .module('mail.message')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'mail.message',
                config: {
                    url: '/message/:mbox/:id?connection_id',
                    templateUrl: 'app/mail/message/message.html',
                    controller: 'MessageController',
                    controllerAs: 'vm',
                    title: 'Message',
                    resolve: {
                        message: function (mail, $stateParams) {
                            return mail.getById({
                                id: $stateParams.id,
                                mbox: $stateParams.mbox,
                                connection_id: $stateParams.connection_id,
                                part: 'headnhtml'
                            });
                        }
                    }
                }
            }
        ];
    }
})();

(function () {
    'use strict';

    angular
        .module('marketing.home')
        .controller('HomeController', HomeController);

    HomeController.$inject = [];
    /* @ngInject */
    function HomeController() {
        var vm = this;

        activate();

        function activate() {}
    }
})();

(function () {
    'use strict';

    angular
        .module('marketing.home')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'home',
                config: {
                    url: '/?version&token&page&compose',
                    controller: 'HomeController',
                    controllerAs: 'vm',
                    onEnter: function ($auth, $state) {
                        if ($state.params.token) {
                            $auth.setAuthHeaders({
                                "Authorization": "Bearer " + $state.params.token
                            });

                            $auth.validateUser().then(function() {
                                var params = {};

                                if ($state.params.compose) {
                                    params.compose = $state.params.compose
                                }

                                if ($state.params.page) {
                                    $state.go($state.params.page, params);
                                    return;
                                }

                                params.mbox = 'INBOX';

                                $state.go('mail.inbox', params);
                            }, function () {
                                $state.go('signIn');
                            });
                            return;
                        }

                        $state.go('mail.inbox', {mbox: 'INBOX'});
                    }
                }
            }
        ];
    }
})();

(function () {
    'use strict';

    angular
        .module('settings.accounts')
        .controller('AccountsController', AccountsController);

    AccountsController.$inject = ['$scope', 'connection'];
    /* @ngInject */
    function AccountsController($scope, connection) {
        var vm = this;

        vm.isConnected = false;

        vm.accountsConf = {
            isFirst: true,
            selected: null,
            list: [
                {
                    parts: [
                        'seznam.cz',
                        'email.cz',
                        'post.cz'
                    ],
                    imap: 'imap.seznam.cz',
                    port: 993
                },
                {
                    parts: [
                        'gmail.com'
                    ],
                    imap: 'imap.gmail.com',
                    port: 993
                },
                {
                    parts: [
                        'volny.cz'
                    ],
                    imap: 'imap.volny.cz',
                    port: 993
                },
                {
                    parts: [
                        'centrum.cz'
                    ],
                    imap: 'imap.centrum.cz',
                    port: 993
                },
                {
                    parts: [
                        'centrum.cz'
                    ],
                    imap: 'imap.centrum.cz',
                    port: 993
                },
                {
                    parts: [
                        'tiscali.cz',
                        'wo.cz'
                    ],
                    imap: 'imap.tiscali.cz',
                    port: 993
                }
            ]
        };

        vm.accountForm = {
            model: {
                enable: 0
            }
        };

        vm.accounts = {
            items: []
        };

        // $scope.$watch('vm.accountForm.model.email', function (data, oldData) {
        //     console.log('data', data);
        //     _.forEach(vm.accountsConf, function (item) {
        //         console.log('find', _.find(item, data));
        //     });
        //
        //     // accountsConf();
        // }, true);

        vm.create = create;
        vm.destroy = destroy;
        vm.enableTrigger = enableTrigger;
        vm.getConf = getConf;

        activate();

        function activate() {
            get();
        }

        function get() {
            connection.get()
                .then(function (response) {
                    vm.accounts.items = response.data;
                });
        }

        function create() {
            connection.create({}, vm.accountForm.model)
                .then(function (response) {
                    vm.isConnected = true;

                    vm.accounts.items.push(response.data);

                    vm.accountForm = {
                        model: {
                            enabled: false
                        }
                    };

                    vm.error = {};

                }, function (response) {
                    vm.error = response.data.data;
                    console.log('response', response);
                });
        }

        function enableTrigger(account) {
            console.log('account', account);
            connection.update({id: account.id}, {enable: account.enable})
                .then(function (response) {
                    // account.enable = !account.enable;
                });
        }

        function destroy(account) {
            connection.destroy({id: account.id})
                .then(function (response) {
                    _.remove(vm.accounts.items, function (item) {
                        return account.id === item.id;
                    });
                });
        }

        function getConf(form) {
            vm.accountsConf.selected = null;

            vm.accountsConf.isFirst = false;

            if (form.email.$invalid) return;

            var emailPart = vm.accountForm.model.email.split('@');

            _.forEach(vm.accountsConf.list, function (item) {
                _.forEach(item.parts, function (part) {
                    if (part === emailPart[1]) {
                        vm.accountsConf.selected = item;
                    }
                });
            });

            if (vm.accountsConf.selected) {
                vm.accountForm.model.login = vm.accountForm.model.email.split('@')[0];
                vm.accountForm.model.server = vm.accountsConf.selected.imap;
                vm.accountForm.model.port = vm.accountsConf.selected.port.toString();
                return;
            }

            vm.accountForm.model.login = emailPart[0];
            vm.accountForm.model.server = '';
            vm.accountForm.model.port = '';

            // vm.accountsConf.selected = null;

            console.log('vm.accountsConf.selected', vm.accountsConf.selected);
        }
    }
})();

(function () {
    'use strict';

    angular
        .module('settings.accounts')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'settings.accounts',
                config: {
                    url: '/accounts',
                    templateUrl: 'app/settings/accounts/accounts.html',
                    controller: 'AccountsController',
                    controllerAs: 'vm',
                    title: 'Rules'
                }
            }
        ];
    }
})();

(function () {
    'use strict';

    angular
        .module('settings.folders')
        .controller('FoldersController', FoldersController);

    FoldersController.$inject = ['$translatePartialLoader', '$translate'];
    /* @ngInject */
    function FoldersController($translatePartialLoader, $translate) {
        var vm = this;

        $translatePartialLoader.addPart('settings');
        $translate.refresh();
    }
})();

(function () {
    'use strict';

    angular
        .module('settings.folders')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'settings.folders',
                config: {
                    url: '/folders',
                    templateUrl: 'app/settings/folders/folders.html',
                    controller: 'FoldersController',
                    controllerAs: 'vm',
                    title: 'Tags'
                }
            }
        ];
    }
})();

(function () {
    'use strict';

    angular
        .module('settings.main')
        .controller('SettingsController', SettingsController);

    SettingsController.$inject = ['$uibModal', '$sce', '$auth', 'profile', '$translatePartialLoader', '$translate'];
    /* @ngInject */
    function SettingsController($uibModal, $sce, $auth, profile, $translatePartialLoader, $translate) {
        var vm = this;

        // $translatePartialLoader.addPart('settings');
        // $translate.refresh();

        vm.openAvatarUploadPopup = openAvatarUploadPopup;
        vm.openPasswordChangePopup = openPasswordChangePopup;
        // vm.openEmailChangePopup = openEmailChangePopup;
        vm.openEmailAddPopup = openEmailAddPopup;
        vm.openPhoneChangePopup = openPhoneChangePopup;
        vm.destroy = destroy;
        vm.getTrustHtml = getTrustHtml;
        vm.updateSign = updateSign;
        vm.removeAvatar = removeAvatar;

        activate();

        function activate() {
             vm.user = $auth.user;
        }

        function openAvatarUploadPopup() {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'app/components/avatar-upload/avatar-upload-popup.html',
                controller: ["$scope", "$uibModalInstance", function ($scope, $uibModalInstance) {
                    $scope.cancel = cancel;

                    function cancel() {
                        $uibModalInstance.dismiss('cancel');
                    }
                }],
                size: 'sm',
                windowClass: 'popup popup--avatar-upload'
            });
        }

        function openPasswordChangePopup() {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'app/components/password-change/password-change-popup.html',
                controller: ["$scope", "$uibModalInstance", function ($scope, $uibModalInstance) {
                    $scope.cancel = cancel;

                    function cancel() {
                        $uibModalInstance.dismiss('cancel');
                    }
                }],
                size: 'sm',
                windowClass: 'popup popup--password-change'
            });
        }

        function openEmailAddPopup() {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'app/components/email-add/email-add-popup.html',
                controller: ["$scope", "$uibModalInstance", function ($scope, $uibModalInstance) {
                    $scope.cancel = cancel;
                    $scope.close = close;

                    function cancel() {
                        $uibModalInstance.dismiss('cancel');
                    }

                    function close() {
                        $uibModalInstance.close();
                    }
                }],
                size: 'sm',
                windowClass: 'popup popup--email-change'
            });

            modalInstance.result.then(function (response) {
                console.log('response', response);
                profile.get().then(function () {
                    vm.user = $auth.user;
                });
            });
        }

        function openPhoneChangePopup() {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'app/components/phone-change/phone-change-popup.html',
                controller: ["$scope", "$uibModalInstance", function ($scope, $uibModalInstance) {
                    $scope.cancel = cancel;

                    function cancel() {
                        $uibModalInstance.dismiss('cancel');
                    }
                }],
                size: 'sm',
                windowClass: 'popup popup--phone-change'
            });
        }

        function removeAvatar() {
            profile.put({}, {photo: null});
        }
        
        function destroy() {
            profile.destroy();
        }

        function getTrustHtml(html) {
            return $sce.trustAsHtml(html);
        }

        function updateSign() {
            vm.user.profile.sign = vm.signature ? vm.signature : '';

            var data = {};

            data.sign = '-- <br>' + angular.copy(vm.user.profile.sign);

            profile.put({}, data);
        }
    }
})();

(function () {
    'use strict';

    angular
        .module('settings.main')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'settings.main',
                config: {
                    url: '/main',
                    templateUrl: 'app/settings/main/settings.html',
                    controller: 'SettingsController',
                    controllerAs: 'vm',
                    title: 'Settings'
                }
            }
        ];
    }
})();

(function () {
    'use strict';

    angular
        .module('settings.contacts')
        .controller('СontactsController', СontactsController);

    СontactsController.$inject = ['$uibModal', '$translatePartialLoader', '$translate'];
    /* @ngInject */
    function СontactsController($uibModal, $translatePartialLoader, $translate) {
        var vm = this;

        $translatePartialLoader.addPart('settings');
        $translate.refresh();

        vm.openContactImportFilePopup = openContactImportFilePopup;
        vm.openContactExportFilePopup = openContactExportFilePopup;

        function openContactImportFilePopup() {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'app/components/contact-import-file/contact-import-file-popup.html',
                controller: ["$scope", "$uibModalInstance", function ($scope, $uibModalInstance) {
                    $scope.cancel = cancel;

                    function cancel() {
                        $uibModalInstance.dismiss('cancel');
                    }
                }],
                size: 'sm',
                windowClass: 'popup popup--contact-import-file'
            });
        }

        function openContactExportFilePopup() {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'app/components/contact-export-file/contact-export-file-popup.html',
                controller: ["$scope", "$uibModalInstance", function ($scope, $uibModalInstance) {
                    $scope.cancel = cancel;

                    function cancel() {
                        $uibModalInstance.dismiss('cancel');
                    }
                }],
                size: 'sm',
                windowClass: 'popup popup--contact-import-file'
            });
        }
    }
})();

(function () {
    'use strict';

    angular
        .module('settings.contacts')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'settings.contacts',
                config: {
                    url: '/contacts',
                    templateUrl: 'app/settings/contacts/contacts.html',
                    controller: 'СontactsController',
                    controllerAs: 'vm',
                    title: 'Сontacts'
                }
            }
        ];
    }
})();

(function () {
    'use strict';

    angular
        .module('settings.ruleAdd')
        .controller('RuleAddController', RuleAddController);

    RuleAddController.$inject = ['sieve', '$state', 'mailBox', 'tag', '$translatePartialLoader', '$translate'];
    /* @ngInject */
    function RuleAddController(sieve, $state, mailBox, tag, $translatePartialLoader, $translate) {
        var vm = this;

        $translatePartialLoader.addPart('settings');
        $translate.refresh();

        vm.$state = $state;

        vm.tags = {};

        vm.folders = {};

        vm.spamAccept = {
            list: [
                {
                    name: 'RULE_FOR_ONLY_SPAM',
                    value: 'only'
                },
                {
                    name: 'RULE_ALL_NOT_SPAM',
                    value: 'except'
                },
                {
                    name: 'RULE_ALL_MAILS',
                    value: 'include'
                }
            ]
        };

        vm.attachmentAccept = {
            list: [
                {
                    name: 'RULE_IS_ALL_ATTACH',
                    value: 'all'
                },
                {
                    name: 'RULE_IS_ATTACH',
                    value: 'with'
                },
                {
                    name: 'RULE_IS_NOT_ATTACH',
                    value: 'without'
                }
            ]
        };

        vm.sieveRules = {
            list: [
                {
                    name: 'NAME_OF_ATTACHMENT',
                    value: 'attachment'
                },
                {
                    name: 'BODY_LETTER',
                    value: 'body'
                },
                {
                    name: 'IS_COPY',
                    value: 'copy'
                },
                {
                    name: 'FROM_WHOM_U',
                    value: 'from'
                },
                {
                    name: 'FROM_WHOM_U',
                    value: 'from'
                },
                {
                    name: 'HEADER',
                    value: 'header',
                    options: {
                        "header": "some header"
                    }
                },
                {
                    name: 'SUBJECT',
                    value: 'subject'
                },
                {
                    name: 'TO',
                    value: 'to'
                },
                {
                    name: 'TO_WHOM_OR_COPY',
                    value: 'to_copy'
                }
            ]
        };

        vm.compareTypes = {
            list: [
                {
                    name: 'CONTAINS',
                    value: 'contain'
                },
                {
                    name: 'MATCHES',
                    value: 'match'
                },
                {
                    name: 'NOT_CONTAINS',
                    value: 'not_contain'
                },
                {
                    name: 'NOT_MATCHES',
                    value: 'not_match'
                }
            ]
        };

        vm.ruleForms = [
            {
                "type": "attachment",
                "compare_type": "match",
                "value": "example@example.com"
            }
        ];

        vm.sieveActions = {
            move: {
                type: 'move'
            },
            flag: {
                type: 'flag'
            },
            resend: {
                type: 'resend'
            },
            notify: {
                type: 'notify'
            },
            answer: {
                type: 'answer'
            },
            option: {
                type: 'option'
            }
        };

        vm.sieve = {
            model: {}
        };

        vm.sieveForm = {
            model: {
                sieveRules: []
            }
        };

        vm.addRule = addRule;
        vm.removeRule = removeRule;
        vm.update = update;
        vm.add = add;
        // vm.getFolders = getFolders;
        // vm.getTags = getTags;

        activate();

        function activate() {
            if (vm.$state.params.id) {
                getById();
            }

            if (vm.$state.params.subject) {
                vm.sieveForm.model.sieveRules.push({
                    "type": "from",
                    "compare_type": "match",
                    "value": vm.$state.params.subject
                });

                vm.sieveActions.move = {"type":"move","value":"Junk"};
            }

            if (vm.$state.params.email) {
                vm.sieveForm.model.sieveRules.push({
                    "type": "from",
                    "compare_type": "match",
                    "value": vm.$state.params.email
                });
            }

            if (vm.$state.params.subject || vm.$state.params.email) {
                vm.sieveForm.model.sieveActions = [{"type":"move","value":"Junk"}]
            }

            getTags();
            getFolders();
        }

        function setSieveActions() {
            _.forEach(vm.sieveActions, function (item) {
                _.forEach(vm.sieveForm.model.sieveActions, function (itemServer) {
                    if (itemServer.type === item.type) {
                        item.value = itemServer.value;
                        // console.log('sieveActions', itemServer, item);
                    }
                });
                // console.log('sieveActions server', item);
            });
            // console.log('sieveActions', vm.sieveActions);
        }

        function getById() {
            sieve.getById({id: vm.$state.params.id}).then(function (response) {
                vm.sieve.model = response.data;
                vm.sieveForm.model = response.data;

                setSieveActions();
            });
        }

        function addRule() {
            vm.sieveForm.model.sieveRules.push({
                "type": "",
                "compare_type": "",
                "value": ""
            });
        }

        function removeRule(rule) {
            _.remove(vm.sieveForm.model.sieveRules, function (item) {
                return rule === item;
            })
        }

        function add() {
            sieve.post({}, vm.sieveForm.model).then(function () {
                vm.$state.go('settings.rules');
            });
        }

        function update() {
            sieve.put({}, vm.sieveForm.model).then(function () {
                vm.$state.go('settings.rules');
            });
        }

        function getFolders() {
            mailBox.get().then(function (response) {
                vm.folders = response.data;
            });
        }

        function getTags() {
            tag.get().then(function (response) {
                vm.tags.items = response.data;
            });
        }
    }
})();

(function () {
    'use strict';

    angular
        .module('settings.ruleAdd')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'settings.ruleAdd',
                config: {
                    url: '/rule-add?id&subject&email',
                    templateUrl: 'app/settings/rule-add/rule-add.html',
                    controller: 'RuleAddController',
                    controllerAs: 'vm',
                    title: 'Rules'
                }
            }
        ];
    }
})();

(function () {
    'use strict';

    angular
        .module('settings.rules')
        .controller('RulesController', RulesController);

    RulesController.$inject = ['$state', 'sieve', '$translatePartialLoader', '$translate'];
    /* @ngInject */
    function RulesController($state, sieve, $translatePartialLoader, $translate) {
        var vm = this;

        $translatePartialLoader.addPart('settings');
        $translate.refresh();

        vm.$state = $state;

        vm.sieve = {
            items: []
        };

        vm.remove = remove;
        vm.enableTrigger = enableTrigger;

        activate();

        function activate() {

            if (vm.$state.params.id) {
                return
            }

            get();
        }

        function get() {
            sieve.get().then(function (response) {
                vm.sieve.items = response.data;
            });
        }

        function remove(rule) {
            sieve.destroy({id: rule.id}).then(function(response) {
                get();
            });
        }

        function enableTrigger(rule) {
            sieve.put({id: rule.id}, {enable: rule.enable}).then(function(response) {
                // get();
            });
        }
    }
})();

(function () {
    'use strict';

    angular
        .module('settings.rules')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'settings.rules',
                config: {
                    url: '/rules',
                    templateUrl: 'app/settings/rules/rules.html',
                    controller: 'RulesController',
                    controllerAs: 'vm',
                    title: 'Rules'
                }
            }
        ];
    }
})();

(function () {
    'use strict';

    angular
        .module('settings.tags')
        .controller('TagsController', TagsController);

    TagsController.$inject = ['$translatePartialLoader', '$translate'];
    /* @ngInject */
    function TagsController($translatePartialLoader, $translate) {
        var vm = this;

        $translatePartialLoader.addPart('settings');
        $translate.refresh();
    }
})();

(function () {
    'use strict';

    angular
        .module('settings.tags')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'settings.tags',
                config: {
                    url: '/tags',
                    templateUrl: 'app/settings/tags/tags.html',
                    controller: 'TagsController',
                    controllerAs: 'vm',
                    title: 'Tags'
                }
            }
        ];
    }
})();

(function () {
    'use strict';

    angular
        .module('storage.main')
        .controller('StorageController', StorageController);

    StorageController.$inject = ['$auth', 'tariff', 'tariffResult'];
    /* @ngInject */
    function StorageController($auth, tariff, tariffResult) {
        var vm = this;

        vm.payType = 'sms';

        vm.smsForm = {};

        vm.tariff = {
            selected: null,
            items: []
        };

        vm.quota = {
            result: {}
        };

        vm.createQuota = createQuota;

        activate();

        function activate() {
            vm.user = $auth.user;

            console.log('vm.user', vm.user);
            // createQuota();

            tariffResult.$promise.then(function (response) {
                vm.tariff.items = response.data;
            });
        }
        
        function getTariff() {
            tariff.getTariff().then(function (response) {
                vm.tariff.items = response.data;
            });
        }
        
        function createQuota(selected) {
            tariff.createQuota({}, {tariff_id: selected.id}).then(function (response) {
                vm.quota.result = response.data;
            });
        }
    }
})();

(function () {
    'use strict';

    angular
        .module('storage.main')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'storage',
                config: {
                    url: '/storage',
                    templateUrl: 'app/storage/main/storage.html',
                    controller: 'StorageController',
                    controllerAs: 'vm',
                    title: 'storage',
                    resolve: {
                        tariffResult: function (tariff) {
                            return tariff.getTariff();
                        },
                        auth: function ($auth, $state) {
                            return $auth.validateUser().catch(function () {
                                $state.go('signIn');
                            });
                        }
                    }
                }
            }
        ];
    }
})();

(function () {
    'use strict';

    angular
        .module('template.main')
        .controller('TemplateController', TemplateController);

    TemplateController.$inject = [];
    /* @ngInject */
    function TemplateController() {
        var vm = this;
    }
})();

(function () {
    'use strict';

    angular
        .module('template.main')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'template',
                config: {
                    url: '/template',
                    templateUrl: 'app/template/main/template.html',
                    controller: 'TemplateController',
                    controllerAs: 'vm',
                    title: 'template'
                }
            }
        ];
    }
})();

(function () {
    'use strict';

    angular
        .module('terms.main')
        .controller('TermsController', TermsController);

    TermsController.$inject = [];
    /* @ngInject */
    function TermsController() {
        var vm = this;
    }
})();

(function () {
    'use strict';

    angular
        .module('terms.main')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'terms',
                config: {
                    url: '/terms',
                    templateUrl: 'app/terms/main/terms.html',
                    controller: 'TermsController',
                    controllerAs: 'vm',
                    title: 'terms'
                }
            }
        ];
    }
})();

(function () {
    'use strict';

    angular
        .module('theme.main')
        .controller('ThemeController', ThemeController);

    ThemeController.$inject = [];
    /* @ngInject */
    function ThemeController() {
        var vm = this;



    }
})();

(function () {
    'use strict';

    angular
        .module('theme.main')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'theme',
                config: {
                    url: '/theme',
                    templateUrl: 'app/theme/main/main.html',
                    controller: 'ThemeController',
                    controllerAs: 'vm',
                    title: 'Theme'
                }
            }
        ];
    }
})();

angular.module('app.core').run(['$templateCache', function($templateCache) {$templateCache.put('app/auth/view.html','<div class="auth-layout"><ui-view></ui-view></div>');
$templateCache.put('app/contacts/contacts.html','<section class="layout"><div class="layout__header"><header></header></div><div class="layout__inner" layout-height><div class="layout__left"><div class="layout__menu"><menu-contacts contact-group="vm.contactGroup"></menu-contacts></div></div><div class="layout__content"><ui-view class="height-flex--content"></ui-view><div class="layout__footer"><footer></footer></div></div></div></section>');
$templateCache.put('app/mail/mail.html','<section class="layout"><div class="layout__header"><header></header></div><div class="layout__inner" layout-height><div class="layout__left"><div class="layout__menu resize-menu" resize-menu><div class="layout__button-up"><button class="icon-up btn btn--page-up" type="button" scroll-up></button></div><button class="layout__menu-switch btn--not-style" type="button" ng-click="close()"></button><menu-main folder="vm.folder"></menu-main></div></div><div class="layout__content"><!--\n            class="height-flex--content position"\n            --><ui-view class="height-flex--content"></ui-view><div class="layout__footer"><footer></footer></div></div></div></section>');
$templateCache.put('app/print/print.html','<div ng-bind-html="vm.getTrustHtml(vm.message.model.body)"></div>');
$templateCache.put('app/settings/settings.html','<section class="layout"><div class="layout__header"><header></header></div><div class="layout__inner" layout-height><div class="layout__left"><div class="layout__menu layout__menu--settings"><menu-settings></menu-settings></div></div><div class="layout__content"><ui-view class="height-flex--content"></ui-view><div class="layout__footer height-flex--bot"><footer></footer></div></div></div></section>');
$templateCache.put('app/auth/sign-in/sign-in.html','<div class="auth-layout"><div class="auth-layout__content"><div class="auth-layout__form"><div class="card"><div class="text-center" ng-if="vm.isTokenAuthLoading"><spinner is-global="false" is-open="true"></spinner></div><div class="auth-form" ng-if="!vm.isTokenAuthLoading"><div class="auth-form__logo mrg__bottom16"><img class="img-responsive mrg__auto" src="/images/logo.png"><hr class="hr hr--auth mrg__top16"></div><form class="form" name="userForm" ng-submit="vm.login(userForm)" novalidate><!-- \u043B\u043E\u0433\u0438\u043D --><div class="form__field-item mrg__bottom10"><div class="field-style"><input class="input input--size_l input--up-shadow width--inh" type="text" placeholder="{{ \'INPUT_PLACEHOLDER_LOGIN\' | translate }}" ng-model="vm.userForm.model.username" login-format required><validation-errors data="userForm.username" messages="vm.userForm.validations.username"></validation-errors></div></div><!-- \u043F\u0430\u0440\u043E\u043B\u044C --><div class="form__field-item mrg__bottom10"><div class="field-style"><input class="input input--size_l input--up-shadow width--inh" type="password" ng-model="vm.userForm.model.password" required placeholder="{{ \'INPUT_PLACEHOLDER_PASSWORD\' | translate }}"></div><validation-errors data="userForm.password" messages="vm.userForm.validations.password"></validation-errors></div><!-- \u0432\u043E\u0439\u0442\u0438 --><div class="form__field-item mrg__bottom10"><div class="field-style text-center"><button class="btn btn--size_l btn--yellow width--inh" type="submit" ng-if="!vm.userForm.isLoading">{{ \'SING_IN\' | translate }}</button><div ng-if="vm.userForm.isLoading"><spinner is-global="false" is-open="true"></spinner></div></div></div><div class="validation mrg__bottom10"><div class="validation__message validation__message--red">{{ vm.userForm.errors | translate }}</div></div><!-- \u0437\u0430\u043F\u043E\u043C\u043D\u0438\u0442\u044C / \u0437\u0430\u0431\u044B\u043B\u0438--><div class="form__field-item mrg__bottom10 flex flex--just-s-a"><div class="field-style widtn--inh"><!--\u043D\u0430\u0448 \u0447\u0435\u043A\u0431\u043E\u043A\u0441 --><label class="checkbox-y__label checkbox-y" for="isChecked"><input class="checkbox-y__input" id="isChecked" type="checkbox" name="isChecked" ng-model="isChecked"><div class="checkbox-y__body"><span class="checkbox-y__icon"></span></div><span class="checkbox__text" role="presentation">{{\'REMEMBER_ME\' | translate }}</span></label></div><div class="field-style widtn--inh font__right"><a class="link link-aith" ui-sref="passwordReset">{{ \'FORGOT_YOUR_PASSWORD\' | translate }}</a></div></div></form><hr class="hr hr--auth"><button class="btn btn--size_l btn--normal width--inh btn--s-gradient" ui-sref="signUp">{{ \'CHECK_IN\' | translate }}</button></div></div></div><!-- \u0444\u0443\u0442\u0442\u0435\u0440 \u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435 \u0430\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u0438--><div class="footer footer__auth"><!-- \u041A\u043E\u043F\u0438\u0440\u0430\u0439\u0442--><div class="footer__copyright"><span class="">\xA9 2001\u20142017 \xABMail.cz\xBB Group a.s.</span></div><!-- \u041E\u0441\u043D\u043E\u0432\u043D\u043E\u0435 \u043C\u0435\u043D\u044E--><div class="footer__menu"><div class="navigation"><div class="navigation__row"><div class="navigation__item"><!--<a class="navigation__link navigation__link&#45;&#45;footer-a" href="">\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B</a>--></div></div></div></div><!-- \u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043C\u0435\u043D\u044E \u0441 \u0432\u044B\u0431\u043E\u0440\u043E\u043C \u044F\u0437\u044B\u043A\u0430--><div class="footer__right-menu mrg__right"><div class="navigation"><div class="navigation__row"><div class="navigation__item position width--size28"><!-- \u042F\u0437\u044B\u043A\u043E\u0432\u043E\u0435 \u043C\u0435\u043D\u044E--><choice-language></choice-language></div><div class="navigation__item"><a class="navigation__link" href="">{{ \'CONTACTS\' | translate }}</a></div><!--<div class="navigation__item"><a class="navigation__link" href="">\u0420\u0435\u043A\u043B\u0430\u043C\u0430</a></div>--></div></div></div></div></div><div class="auth-layout__bg"></div></div>');
$templateCache.put('app/auth/password-update/password-update.html','<div class="auth-layout"><div class="password-reset-layout__content"><div class="password-reset-layout__form"><div class="card"><div class="auth-form"><div class="main-title-text">{{ \'ACCESS_RECOVERY\' | translate }}</div><form class="form" name="userForm" ng-submit="vm.resetPassword(userForm)" novalidate><div class="form__field-item mrg__bottom6"><div class="field-style"><div class="field-style__group"><input class="input input--size_l input--up-shadow width--size328 font__center" type="text" name="code" ng-model="vm.userForm.model.code" placeholder="{{ \'INPUT_PLACEHOLDER_ENTER_SMS_CODE\' | translate }} " required><validation-errors ng-if="userForm.$submitted" data="userForm.code" server="vm.userForm.errors" messages="vm.userForm.validations.code"></validation-errors></div></div></div><!-- \u041F\u0430\u0440\u043E\u043B\u044C--><div class="form__field-item mrg__bottom6"><div class="field-style"><div class="field-style__group"><input class="input input--size_l input--up-shadow width--size328 font__center" type="password" name="newpassword" ng-model="vm.userForm.model.newpassword" placeholder="{{ \'INPUT_PLACEHOLDER_ENTER_NEW_PASSWORD\' | translate }}" required><validation-errors ng-if="userForm.$submitted" data="userForm.newpassword" server="vm.userForm.errors" messages="vm.userForm.validations.newpassword"></validation-errors></div></div></div><!-- \u041F\u0430\u0440\u043E\u043B\u044C 2--><div class="form__field-item"><div class="field-style"><div class="field-style__group"><input class="input input--size_l input--up-shadow width--size328 font__center" type="password" name="passwordConf" ng-model="vm.userForm.model.passwordConf" placeholder="{{ \'INPUT_PLACEHOLDER_CONFIRM_NEW_PASSWORD\' | translate }}" required><validation-errors ng-if="userForm.$submitted" data="userForm.passwordConf" server="vm.userForm.errors" messages="vm.userForm.validations.passwordConf"></validation-errors></div></div></div><!-- \u043A\u043D\u043E\u043F\u043A\u0430 \u0414\u0430\u043B\u0435\u0435 --><div class="form__field-item mrg__top25"><div class="field-style"><button class="btn btn--size_l btn--yellow width--inh" type="submit">{{ \'BTN_SAVE_AND_CONTINUE\' | translate }}</button></div></div></form></div></div></div><!-- \u0444\u0443\u0442\u0442\u0435\u0440 \u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435 \u0430\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u0438--><div class="footer footer__auth"><!-- \u041A\u043E\u043F\u0438\u0440\u0430\u0439\u0442--><div class="footer__copyright"><span class="">\xA9 2001\u20142017 \xABMail.cz\xBB Group a.s.</span></div><!-- \u041E\u0441\u043D\u043E\u0432\u043D\u043E\u0435 \u043C\u0435\u043D\u044E--><div class="footer__menu"><div class="navigation"><div class="navigation__row"><div class="navigation__item"><!--<a class="navigation__link navigation__link&#45;&#45;footer-a" href="">\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B</a>--></div></div></div></div><!-- \u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043C\u0435\u043D\u044E \u0441 \u0432\u044B\u0431\u043E\u0440\u043E\u043C \u044F\u0437\u044B\u043A\u0430--><div class="footer__right-menu mrg__right"><div class="navigation"><div class="navigation__row"><div class="navigation__item position width--size28"><!-- \u042F\u0437\u044B\u043A\u043E\u0432\u043E\u0435 \u043C\u0435\u043D\u044E--><choice-language></choice-language></div><div class="navigation__item"><a class="navigation__link" href="">{{ \'CONTACTS\' | translate }}</a></div><!--<div class="navigation__item"><a class="navigation__link" href="">\u0420\u0435\u043A\u043B\u0430\u043C\u0430</a></div>--></div></div></div></div></div><div class="auth-layout__bg"></div></div>');
$templateCache.put('app/auth/password-reset/password-reset.html','<div class="password-reset-layout"><div class="password-reset-layout__content"><div class="password-reset-layout__form"><div class="card"><div class="auth-form"><div class="main-title-text">{{ \'ACCESS_RECOVERY\' | translate }}</div><form class="form" name="userForm" ng-submit="vm.requestPasswordReset(userForm)" novalidate><!-- \u0412\u0430\u0448 \u043C\u0430\u0439\u043B--><div class="form__field-item form__field-item--flex-start mrg__bottom10"><div class="field-style"><label class="field-style__title font__size13">{{ \'AUTH_SPECIFY_LOGIN\' | translate }}</label><div class="field-style__group"><input class="input input--size_l input--up-shadow width--size328" type="text" name="username" ng-model="vm.userForm.model.username" placeholder="{{ \'INPUT_PLACEHOLDER_LOGIN_OR_EMAIL\' | translate }}" required><validation-errors data="userForm.username" server="vm.userForm.errors" messages="vm.userForm.validations.username"></validation-errors><!-- <div class="validation">\n                                         <div class="validation__message validation__message&#45;&#45;red">\n                                             \u042D\u0442\u043E \u0438\u043C\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u0443\u0436\u0435 \u0437\u0430\u043D\u044F\u0442\u043E. \u041F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435\n                                             \u0434\u0440\u0443\u0433\u043E\u0435\n                                         </div>\n                                     </div>--></div></div></div><!-- \u0421\u041C\u0421 \u0432\u0430\u043B\u0438\u0434\u0430\u0446\u0438\u044F --><!--<div class="form__field-item form__field-item&#45;&#45;flex-start mrg__bottom10 mrg__top16 sms-bg flex&#45;&#45;inline flex&#45;&#45;just-s-a">--><!--<div class="width&#45;&#45;size328 mrg__right30">--><!--<div class="flex&#45;&#45;inline">--><!--<div class="field-style mrg__right5 width&#45;&#45;size201">--><!--<input class="input input&#45;&#45;size_l input&#45;&#45;up-shadow width&#45;&#45;inh"--><!--type="text"--><!--name="phone"--><!--ng-model="vm.userForm.model.phone"--><!--placeholder="+420 xxx xxx xxx"--><!--ui-mask="+420 999-999-999"--><!--required>--><!--</div>--><!--<div class="field-style width&#45;&#45;size121 ">--><!--<button class="btn btn&#45;&#45;size_l btn&#45;&#45;normal btn&#45;&#45;s-gradient width&#45;&#45;inh" type="button"--><!--ng-click="vm.sendCode()">\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043A\u043E\u0434--><!--</button>--><!--</div>--><!--</div>--><!--<validation-errors data="userForm.phone"--><!--server="vm.userForm.errors"--><!--messages="vm.userForm.validations.phone"></validation-errors>--><!--<span class="notific notific&#45;&#45;auth mrg__top5" ng-if="vm.codeResult">--><!--\u041D\u0430 \u043D\u043E\u043C\u0435\u0440 +420 xxx xxx xxx \u0431\u044B\u043B \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D \u043A\u043E\u0434 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0438 (\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E)--><!--<span class="color&#45;&#45;red">{{ vm.codeResult }}</span>--><!--</span>--><!--</div>--><!--<span class="notific notific&#45;&#45;auth mrg__top5" ng-if="vm.codeResult">--><!--\u041D\u0430 \u043D\u043E\u043C\u0435\u0440 +420 xxx xxx xxx \u0431\u044B\u043B \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D \u043A\u043E\u0434 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0438 (\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E)--><!--<span class="color&#45;&#45;red">{{ vm.codeResult }}</span>--><!--</span>--><!--<div class="width&#45;&#45;size328">--><!--<div class="flex&#45;&#45;inline">--><!--<div class="field-style mrg__right5 width&#45;&#45;size201">--><!--<input class="input input&#45;&#45;size_l input&#45;&#45;up-shadow width&#45;&#45;inh"--><!--type="text"--><!--name="code"--><!--ng-model="vm.userForm.model.code"--><!--placeholder="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u0434 \u0438\u0437 \u0441\u043C\u0441"--><!--required>--><!--</div>--><!--<div class="field-style width&#45;&#45;size121">--><!--<button class="btn btn&#45;&#45;size_l btn&#45;&#45;normal btn&#45;&#45;s-gradient width&#45;&#45;inh " type="button">\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C--><!--</button>--><!--</div>--><!--</div>--><!--<validation-errors data="userForm.code"--><!--server="vm.userForm.errors"--><!--messages="vm.userForm.validations.code">--><!--</validation-errors>--><!--</div>--><!--</div>--><div class="form__field-item form__field-item--flex-start mrg__top25"><div class="field-style"><button class="btn btn--size_l btn--yellow" type="submit">{{ \'BTN_FURTHER\' | translate }}</button></div></div></form></div></div></div><!-- \u0444\u0443\u0442\u0442\u0435\u0440 \u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435 \u0430\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u0438--><div class="footer footer__auth"><!-- \u041A\u043E\u043F\u0438\u0440\u0430\u0439\u0442--><div class="footer__copyright"><span class="">\xA9 2001\u20142017 \xABMail.cz\xBB Group a.s.</span></div><!-- \u041E\u0441\u043D\u043E\u0432\u043D\u043E\u0435 \u043C\u0435\u043D\u044E--><div class="footer__menu"><div class="navigation"><div class="navigation__row"><div class="navigation__item"><!--<a class="navigation__link navigation__link&#45;&#45;footer-a" href="">\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B</a>--></div></div></div></div><!-- \u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043C\u0435\u043D\u044E \u0441 \u0432\u044B\u0431\u043E\u0440\u043E\u043C \u044F\u0437\u044B\u043A\u0430--><div class="footer__right-menu mrg__right"><div class="navigation"><div class="navigation__row"><div class="navigation__item position width--size28"><!-- \u042F\u0437\u044B\u043A\u043E\u0432\u043E\u0435 \u043C\u0435\u043D\u044E--><choice-language></choice-language></div><div class="navigation__item"><a class="navigation__link" href="">{{ \'CONTACTS\' | translate }}</a></div><!--<div class="navigation__item"><a class="navigation__link" href="">\u0420\u0435\u043A\u043B\u0430\u043C\u0430</a></div>--></div></div></div></div></div><div class="auth-layout__bg"></div></div>');
$templateCache.put('app/auth/sign-up/sign-up.html','<div class="auth-layout"><div class="auth-layout__content"><div class="auth-layout__form auth-layout__form--wd388"><div class="card"><div class="auth-form"><div class="auth-form__logo mrg__bottom16"><img class="img-responsive mrg__auto" src="/images/logo.png"><hr class="hr hr--auth mrg__top16"></div><form class="form" name="userForm" ng-submit="vm.signUp(userForm)" novalidate><!-- \u0438\u043C\u044F \u0438 \u0444\u0430\u043C\u0438\u043B\u0438\u044F --><div class="form__field-item mrg__bottom20 flex--inline"><div class="field-style mrg__right5"><input class="input input--size_l input--up-shadow width--inh" type="text" name="first_name" ng-model="vm.userForm.model.first_name" placeholder="{{ \'INPUT_PLACEHOLDER_NAME\' | translate }}" required><validation-errors data="userForm.first_name" server="vm.userForm.errors" messages="vm.userForm.validations.first_name"></validation-errors></div><div class="field-style"><input class="input input--size_l input--up-shadow width--inh" type="text" ng-model="vm.userForm.model.last_name" placeholder="{{ \'INPUT_PLACEHOLDER_LAST_MANE\' | translate }}" required><validation-errors data="userForm.last_name" server="vm.userForm.errors" messages="vm.userForm.validations.last_name"></validation-errors></div></div><!-- \u043B\u043E\u0433\u0438\u043D \u0432 \u0431\u0430\u0437\u0435 --><div class="form__field-item mrg__bottom10"><div class="field-style"><label class="field-style__title font__size13">{{ \'AUTH_CREATE_A_USER_NAME\' | translate }}</label><div class="field-style__group"><div class="width--inh position"><span class="input-plash input-plash--top13 font__size13">@mail.cz</span> <input class="input input--size_l input--up-shadow width--inh" type="text" name="username" ng-model="vm.userForm.model.username" placeholder="{{\'INPUT_PLACEHOLDER_MAIL_NAME\' | translate }}" login-format required></div><validation-errors data="userForm.username" server="vm.userForm.errors" messages="vm.userForm.validations.username"></validation-errors><!-- <div class="validation">\n                                         <div class="validation__message validation__message&#45;&#45;red">\n                                             \u042D\u0442\u043E \u0438\u043C\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u0443\u0436\u0435 \u0437\u0430\u043D\u044F\u0442\u043E. \u041F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435\n                                             \u0434\u0440\u0443\u0433\u043E\u0435\n                                         </div>\n                                     </div>--></div><!--<div class="input-data-valide-test mrg__top10 mrg__bottom10 ">--><!--\u0421\u0432\u043E\u0431\u043E\u0434\u043D\u043E: <span class="input-data-valide-test__we-offer">abc779736</span>--><!--</div>--></div></div><!-- \u043F\u0430\u0440\u043E\u043B\u044C --><div class="form__field-item mrg__bottom6"><div class="field-style"><input class="input input--size_l input--up-shadow width--inh" type="password" name="password" ng-model="vm.userForm.model.password" placeholder="{{ \'INPUT_PLACEHOLDER_PASSWORD\' | translate }}" required><validation-errors data="userForm.password" server="vm.userForm.errors" messages="vm.userForm.validations.password"></validation-errors></div></div><!-- \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u0435 \u043F\u0430\u0440\u043E\u043B\u044F --><div class="form__field-item mrg__bottom10"><div class="field-style"><input class="input input--size_l input--up-shadow width--inh" type="password" name="passwordConf" ng-model="vm.userForm.model.passwordConf" placeholder="{{ \'INPUT_PLACEHOLDER_PASSWORD_CONFIRMATION\' | translate }}" required><validation-errors data="userForm.passwordConf" server="vm.userForm.errors" messages="vm.userForm.validations.passwordConf"></validation-errors></div></div><!-- \u0421\u041C\u0421 \u0432\u0430\u043B\u0438\u0434\u0430\u0446\u0438\u044F --><div class="form__field-item mrg__bottom25 mrg__top30 flex flex--row-wrap"><div class="field-style mrg__right5 width--size177"><input class="input input--size_l input--up-shadow width--inh" type="text" name="phone" ng-model="vm.userForm.model.phone" ui-mask-placeholder ui-mask-placeholder-char="x" ui-mask="+999 999-999-999" ui-options="{allowInvalidValue: true, clearOnBlur: false}" required></div><div class="field-style width--inh width--max126"><button class="btn btn--size_l btn--normal width--inh btn--s-gradient" type="button" ng-click="vm.sendCode()">{{ \'BTN_TO_GET_THE_CODE\' | translate }}</button></div><validation-errors data="userForm.phone" server="vm.userForm.errors" messages="vm.userForm.validations.phone"></validation-errors><!-- <div ng-repeat="error in vm.userForm.errors" ng-if="!vm.codeResult">\n                                <span class="color&#45;&#45;red" ng-if="error.field === \'code\'">{{ error.message }}</span>\n                            </div>--> <span class="notific notific--auth" ng-if="vm.codeResult && vm.userForm.model.phone">{{ \'AUTH_NOTIFIC_PHONE_1\' | translate }} +{{ vm.userForm.model.phone }} {{ \'AUTH_NOTIFIC_PHONE_2\' | translate }}</span></div><!-- \u0421\u041C\u0421 \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u0435 \u043A\u043E\u0434\u0430 --><div class="form__field-item mrg__bottom20 mrg__top16" ng-if="vm.codeResult.code"><div class="width-inh flex--inline align-items--cn"><div class="field-style mrg__right5 width--size177"><input class="input input--size_l input--up-shadow width--inh" type="text" name="code" ng-model="vm.userForm.model.code" placeholder="{{ \'INPUT_PLACEHOLDER_ENTER_SMS_CODE\' | translate }}" required></div></div><div class="color--red">{{ vm.error.message }}</div><validation-errors data="userForm.code" server="vm.userForm.errors" messages="vm.userForm.validations.code"></validation-errors></div><!-- \u0421\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u0435 --><div class="form__field-item mrg__bottom10"><div class="field-style widtn--inh"><!--\u043D\u0430\u0448 \u0447\u0435\u043A\u0431\u043E\u043A\u0441 --><label class="checkbox-y__label checkbox-y--size15 checkbox-y checkbox-y--chek-top" for="isChecked"><input class="checkbox-y__input" id="isChecked" type="checkbox" name="agree" ng-model="vm.userForm.model.agree"><div class="checkbox-y__body"><span class="checkbox-y__icon"></span></div><span class="checkbox__text font__size12 color--silver" role="presentation">{{ \'AUTH_CHECKBOX_CONFORMING_1\' | translate }} <a class="link link-aith" ui-sref="terms" target="_blank">{{ \'AUTH_CHECKBOX_CONFORMING_2\' | translate }}</a></span></label><validation-errors data="userForm.agree" server="vm.userForm.errors" messages="vm.userForm.validations.agree"></validation-errors></div></div><!-- \u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u0441\u044F --><div class="form__field-item mrg__bottom10"><hr class="hr hr--auth"><div class="field-style text-center"><button class="btn btn--size_l btn--yellow width--inh" type="submit" ng-if="!vm.userForm.isLoading">{{ \'BTN_SING_UP_NOW\' | translate }}</button><div ng-if="vm.userForm.isLoading"><spinner is-global="false" is-open="true"></spinner></div></div></div></form><!--<hr class="hr hr&#45;&#45;auth ">--> <button class="btn btn--size_l btn--link-style" ui-sref="signIn">{{ \'SING_IN\' | translate }}</button></div></div></div><!-- \u0444\u0443\u0442\u0442\u0435\u0440 \u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435 \u0430\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u0438--><div class="footer footer__auth"><!-- \u041A\u043E\u043F\u0438\u0440\u0430\u0439\u0442--><div class="footer__copyright"><span class="">\xA9 2001\u20142017 \xABMail.cz\xBB Group a.s.</span></div><!-- \u041E\u0441\u043D\u043E\u0432\u043D\u043E\u0435 \u043C\u0435\u043D\u044E--><div class="footer__menu"><div class="navigation"><div class="navigation__row"><div class="navigation__item"><!--<a class="navigation__link navigation__link&#45;&#45;footer-a" href="">\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B</a>--></div></div></div></div><!-- \u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043C\u0435\u043D\u044E \u0441 \u0432\u044B\u0431\u043E\u0440\u043E\u043C \u044F\u0437\u044B\u043A\u0430--><div class="footer__right-menu mrg__right"><div class="navigation"><div class="navigation__row"><div class="navigation__item position width--size28"><!-- \u042F\u0437\u044B\u043A\u043E\u0432\u043E\u0435 \u043C\u0435\u043D\u044E--><choice-language></choice-language></div><div class="navigation__item"><a class="navigation__link" href="">{{ \'CONTACTS\' | translate }}</a></div><!--<div class="navigation__item"><a class="navigation__link" href="">\u0420\u0435\u043A\u043B\u0430\u043C\u0430</a></div>--></div></div></div></div></div><div class="auth-layout__bg"></div></div>');
$templateCache.put('app/contacts/main/contacts.html','<contact-header contacts="vm.contacts"></contact-header><div class="contacts-list"><contact-item-list contacts="vm.contacts"></contact-item-list></div><div class="contacts-list-is-null hide-elm"><form class="contacts-list-is-null__content ng-pristine ng-valid" ngf-drop ngf-select ng-model="files" ngf-multiple="true" ngf-allow-dir="true" accept="contacts/csv" ngf-pattern="\'contacts/csv\'" ngf-drag-over-class="\'contacts-list-is-null__content--is-hover-file\'"><div class="contacts-list-is-null__adder hide-elm"><input class="contacts-list-is-null__drop-mode hide-elm" type="file" name="data"></div><div class="contacts-list-is-null__title">{{ \'CONTACTS_LIST_TITLE_UPLOAD_IS_FILE\' | translate }}</div><div class="contacts-list-is-null__text">{{ \'CONTACTS_LIST_TEXT_SUPPORTS_IMPORT_CONTACTS\' | translate }}</div><div class="contacts-list-is-null__text-comment">{{ \'CONTACTS_LIST_TEXT_MOVE_THIS_FILE\' | translate }}</div><div class="contacts-list-is-null__error-added-file" ngf-no-file-drop>{{ \'CONTACTS_LIST_TEXT_ERROR_ADDED_FILE\' | translate }}</div><button class="btn btn--normal btn--size_xs btn--silver-hover" type="file" name="data">{{ \'BTN_CHOOSE_FILE\' | translate }}</button></form><div class="contacts-list-is-null__success hide-elm"><div class=""><span class="contacts-list-is-null__success-title icon-check-box-mark mrg__right5"></span> {{ \'CONTACTS_LIST_MESSAGE_SUCCESS_MOVE\' | translate }}</div></div></div><div class="contacts-footer" ng-if="!vm.contacts.items.length && vm.contactGroup.model.name && !vm.contacts.isLoading"><div class="contacts-footer__message">{{ \'CONTACTS_MESSAGE_IN_NOT_CONTACT_ON_GROUP_1\' | translate }} \xAB<span class="contacts-footer__name-group">{{ vm.contactGroup.model.name }}</span>\xBB {{ \'CONTACTS_MESSAGE_IN_NOT_CONTACT_ON_GROUP_2\' | translate }}</div></div><div class="contacts-footer" ng-if="!vm.contacts.items.length && !vm.contactGroup.model.name"><div class="contacts-footer__message">{{ \'CONTACTS_MESSAGE_IN_NOT_CONTACT_ON_GROUP_1\' | translate }} \xAB<span class="contacts-footer__name-group">{{ \'ALL\' | translate }}</span>\xBB {{ \'CONTACTS_MESSAGE_IN_NOT_CONTACT_ON_GROUP_2\' | translate }}</div></div><contact-draggable ng-if="!vm.contacts.items.length && !vm.contacts.isLoading"></contact-draggable>');
$templateCache.put('app/components/attach-upload/attach-upload.html','<div class="attach-upload"><div class="attach-upload__list"><div class="attach-upload__item" ng-repeat="attachment in vm.attachmentsData track by $index"><div class="attach-upload__image pointer" ng-click="vm.openGallery($index)" style="background-image: url(\'{{ vm.getLink(attachment); }}\')" ng-if="!attachment.$error && (attachment.mime === \'image/jpeg\' || attachment.mime === \'image/png\')" ng-class="{\'attach-upload__image--shadow\': attachment.mime === \'image/jpeg\' || attachment.mime === \'image/png\'}"></div><div class="attach-upload__image pointer" ng-click="vm.openGallery($index)" style="background-image: url(\'{{ attachment | ngfDataUrl }}\')" ng-if="attachment.$error && (attachment.mime === \'image/jpeg\' || attachment.mime === \'image/png\')" ng-class="{\'attach-upload__image--shadow\': attachment.mime === \'image/jpeg\' || attachment.mime === \'image/png\'}"></div><div class="attach-upload__image" style="background-image: url(\'/images/upload-file.png\')" ng-if="attachment.mime !== \'image/jpeg\' && attachment.mime !== \'image/png\'"></div><div class="attach-upload__info"><div class="attach-upload__name">{{ attachment.fileName }}</div><div class="attach-upload__size"><span ng-if="(attachment.size / 1024 / 1024) < 1">{{ (attachment.size / 1024) | number:0 }} KB </span><span ng-if="(attachment.size / 1024 / 1024) > 1">{{ (attachment.size / 1024 / 1024) | number:0 }} MB</span></div></div><!--<div class="text-center">\n                <spinner is-global="false" is-open="true" ng-if="vm.isUploading"></spinner>\n            </div>--><div class="attach-upload__links" ng-if="!vm.isUploading"><a class="attach-upload__link" href="{{ vm.getLink(attachment);}}" ng-if="!attachment.$error" target="_blank">{{ \'DOWNLOAD\' | translate }}</a> <a class="attach-upload__link" href ng-click="vm.remove(attachment)">{{ \'DELETE\' | translate }}</a></div><div class="color--red text-center font__size12" ng-if="attachment.$error === \'maxSize\'">\u0412\u043E\u0437\u043C\u043E\u0436\u043D\u043E \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0432\u043B\u043E\u0436\u0435\u043D\u0438\u0439 \u043D\u0435 \u0431\u043E\u043B\u0435\u0435 10 \u041C\u0431.</div><!--ng-if="vm.isUploading && !attachment.isLoaded"--><div class="attach-upload__progress" ng-if="vm.isUploading && !attachment.isLoaded"><div class="attach-upload__progress-bar"><uib-progressbar class="progress--attach progress-striped" ng-class="{\'active\': vm.isUploading}" value="vm.attachmentsConf.progressPercentage"></uib-progressbar></div><div class="attach-upload__progress-remove pointer" ng-click="vm.remove(attachment)">x</div></div></div><div class="attach-upload__item attach-upload__item--button-add pointer" ng-if="vm.isShowAdd" type="file" multiple="multiple" accept="**/*" ngf-max-size="10MB" ngf-select="vm.upload($files, $invalidFiles)"><div class="attach-upload__image attach-upload__image--add attach-upload__image--shadow"><img src="/images/icon-screpka-plus.svg"></div></div></div></div>');
$templateCache.put('app/components/alert-popup/alert-popup.html','<div><div class="popup__close" ng-click="cancel()">\xD7</div><div class="tag-create__title">\u041E\u043F\u043B\u0430\u0442\u0430 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043F\u0440\u043E\u0448\u043B\u0430!</div><div class="mrg__top15"><p>\u041E\u0436\u0438\u0434\u0430\u0439\u0442\u0435 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0438\u044F..</p><div class="folder-create__btn mrg__top40"><button class="btn-y btn-y--border" type="button" ng-click="vm.close()">\u0425\u043E\u0440\u043E\u0448\u043E</button></div></div></div>');
$templateCache.put('app/components/attach-button-upload/attach-button-upload.html','<a href="{{ vm.config.AttachUrl }}{{ vm.message.number }}?mbox={{ vm.message.mbox }}&part=attach&screen=true&filename=zip&token={{ vm.user.access_token }}&connection_id={{ vm.message.connection_id }}" ng-click="$event.stopPropagation();"><button class="btn btn--size_m btn--yellow" type="button"><span class="icon-upload"></span> {{ \'DOWNLOAD_ALL\' | translate }}</button></a>');
$templateCache.put('app/components/attach-item/attach-item.html','<div class="attach-item"><div class="attach-item__body"><!--<div class="attach-item__name" ng-if="vm.attach.mime !== \'image/png\' && vm.attach.mime !== \'image/jpeg\'">\n            {{ vm.attach.fileName }}\n        </div>--><div class="attach-item__type" ng-if="vm.attach.mime.split(\'/\')[1] === \'x-msdownload\'">exe</div><div class="attach-item__type" ng-if="vm.attach.mime.split(\'/\')[1] !== \'x-msdownload\'">{{ vm.attach.mime.split(\'/\')[1]; }}</div><div class="attach-item__buttons"><a class="attach-item__buttons-link" ng-click="vm.openGallery()"><button class="attach-item__button"><span class="icon-eye"></span></button> </a><a class="attach-item__buttons-link" target="_blank" href="{{ vm.CONFIG.AttachUrl }}{{ vm.message.number }}?mbox={{ vm.message.mbox }}&part=attach&filename={{ vm.attach.fileName }}&token={{ vm.user.access_token }}&connection_id={{ vm.message.connection_id }}" ng-click="$event.stopPropagation();"><button class="attach-item__button"><span class="icon-download-stroke"></span></button></a></div><div class="attach-item__image" ng-if="vm.attach.mime === \'image/png\' || vm.attach.mime === \'image/jpeg\'" style="background-image: url(\'{{ vm.CONFIG.AttachUrl }}{{ vm.message.number }}?mbox={{ vm.message.mbox }}&part=attach&filename={{ vm.attach.fileName }}&token={{ vm.user.access_token }}&connection_id={{ vm.message.connection_id }}\')"></div><div class="attach-item__image attach-item__image--file" ng-if="vm.attach.mime !== \'image/png\' && vm.attach.mime !== \'image/jpeg\'" style="background-image: url(\'images/upload-file.png\')"></div></div><div class="attach-item__name2">{{ vm.attach.fileName }}</div></div>');
$templateCache.put('app/components/avatar-name/avatar-name.html','<img class="avatar__image" src="/images/avatar-personal.svg" alt="" ng-if="!vm.firstLetter && !vm.emailLetter"><div class="avatar__symbol-image" ng-if="vm.firstLetter || vm.emailLetter"><div class="avatar__first-name">{{ vm.firstLetter ? vm.firstLetter : vm.emailLetter }}</div><div class="avatar__last-name" ng-if="vm.lastLetter">{{ vm.lastLetter }}</div></div>');
$templateCache.put('app/components/black-list/black-list.html','<div><div class="rules-settings__bl-wh-content__title">{{ \'BLACK_LIST\' | translate }}</div><span class="rules-settings__bl-wh-content__text">{{ \'BLACK_LIST_TEXT_ALL_MAILS_IS_BLACK_LIST\' | translate }}.</span><form name="form" ng-submit="vm.add(form)" novalidate><div class="form__field-item mrg__bottom0"><div class="field-style flex--inline width--max460"><input class="input input--size_xs input--up-shadow width--inh input--bg-white mrg__right7 border--cl-bl-silver" type="email" name="email" ng-model="vm.form.model.email" placeholder="{{ \'INPUT_PLACEHOLDER_PLEASE_YOUR_EMAIL\' | translate }}" required> <button class="btn btn--normal btn--size_xs width--size150 border--cl-bl-silver" type="submit">{{ \'ADD\' | translate }}</button></div></div></form><div class="mrg__top20"><div class="mrg__top5 padding--top3 padding--bottom3" ng-repeat="item in vm.list.items" ng-if="item.wb === \'B\'"><div class="checkbox-y checkbox-y--size14"><label class="checkbox-y__label"><input class="checkbox-y__input" type="checkbox" data-checklist-model="vm.list.checked" data-checklist-value="item"><div class="checkbox-y__body"><span class="checkbox-y__icon"></span></div><div class="checkbox-y__text font-sizer--bigger-15 font__bold">{{ item.email }}</div></label></div></div></div><div class="mrg__top10"><button class="btn btn--size_xs btn--normal btn--hover-border btn--silver-bg-y-shw" type="button" ng-click="vm.remove()" ng-disabled="!vm.list.checked.length">{{ \'REMOVE_IS_LIST\' | translate }}</button></div></div>');
$templateCache.put('app/components/choice-language/choice-language.html','<div class="choice-language choice-language--main-footer"><a class="choice-language__link" href ng-click="vm.selectLang(lang)" ng-repeat="lang in vm.lang.items" ng-class="{\'choice-language--active\': lang.lang === vm.lang.selected.lang}"><img class="choice-language__country" src="images/country/{{ lang.icon }}"></a></div>');
$templateCache.put('app/components/avatar-upload/avatar-upload-popup.html','<div><div class="popup__close" ng-click="cancel()">\xD7</div><avatar-upload on-close="cancel()"></avatar-upload></div>');
$templateCache.put('app/components/avatar-upload/avatar-upload.html','<div class="avatar-upload"><div class="avatar-upload__header"><span class="avatar-upload__title">\u041F\u043E\u0440\u0442\u0440\u0435\u0442 \u043F\u0440\u043E\u0444\u0438\u043B\u044F</span></div><div class="avatar-upload__body"><div class="col-xs-6"><div class="flex just-content--center mrg__right10"><div class="avatar-upload__crop" ngf-drop ngf-pattern="image/*" ng-if="vm.avatar.picFile" style="width:283px;height:283px"><img-crop image="vm.avatar.picFile | ngfDataUrl" result-image="vm.avatar.croppedDataUrl" ng-init="vm.avatar.croppedDataUrl=\'\'"></img-crop></div><img class="avatar-upload__default img-responsive" style="width:260px;height:260px" src="/images/avatar-300.png" ng-if="!vm.avatar.picFile"></div></div><div class="col-xs-6 flex flex--colum just-content--center"><button class="btn btn--size_l btn--normal" ngf-select accept="image/*" ng-model="vm.avatar.picFile">{{ \'AVATAR_LOAD_IMAGE\' | translate }}</button><p class="font__size12 color--gray mrg__top10">{{ \'AVATAR_UPLOAD_TEXT_NOTYF\' | translate }}</p></div><!--<hr class="hr hr&#45;&#45;bottom">--></div><div class="avatar-upload__footer"><button class="btn btn--size_l btn--normal pull-left" ng-click="vm.close()">{{ \'CANCEL\' | translate }}</button> <button class="btn btn--size_l btn--yellow pull-right" type="button" ng-click="vm.upload(vm.avatar.croppedDataUrl, vm.avatar.picFile.name)">{{ \'SAVE\' | translate }}</button></div></div>');
$templateCache.put('app/components/compose-header/compose-header.html','<div class="inbox-header font-sizer--bigger-15"><div class="inbox-header__row"><!--<div class="inbox-header__item">--><!--<a class="inbox-header__link" href ui-sref="mail.inbox">--><!--<span class="icon-redo inbox-header__icon inbox-header__icon&#45;&#45;green"></span>--><!--<span class="inbox-header__name">\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C</span>--><!--</a>--><!--</div>--><!--        <div class="inbox-header__item pull-right">\n            <a class="inbox-header__link" href>\n                <span class="icon-redo inbox-header__icon inbox-header__icon&#45;&#45;green"></span>\n                <span class="inbox-header__name">\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C</span>\n            </a>\n        </div>--></div></div>');
$templateCache.put('app/components/compose-popup/compose-popup.html','<div class="popup__compose-title">{{ \'NEW_MESSAGE\' | translate }}</div><div class="popup__compose-control-button" compose-trigger><button class="btn--not-style popup__compose-button popup__compose-roll-up-button" type="button" ng-click="collapse();"></button> <button class="btn--not-style popup__compose-button popup__compose-minimize-button" type="button" ng-click="minimize();"></button> <button class="btn--not-style popup__compose-button popup__compose-close-button icon-remove-thick" ng-click="vm.close(); close(); setPosition()"></button></div><form class="compose" name="sendForm" ng-submit="vm.send(sendForm)" novalidate><div class="compose__header flex--inline align-items--cn"><div class="compose-from"><div class="compose-from__item font__size13" ng-if="vm.params.template"><button class="btn btn--size_s btn--yellow btn--border-yellow btn--act--y-shw width--inh" type="button" ng-click="vm.saveTemplate()">{{ \'BTN_CREATE_TEMPLATE\' | translate }}</button></div><div class="compose-from__item font__size13"><button class="btn btn--size_s btn--yellow btn--border-yellow btn--act--y-shw width--inh" type="submit">{{ !vm.isTranslate ? \'SEND\' : \'SEND_TRANSLATE\' | translate }}</button></div><div class="compose-from__item font__size13">{{ \'FROM_WHOM\' | translate }}:</div><div class="compose-from__item font__size15"><div class="avatar avatar--size28"><img class="avatar__image" src="/images/avatar.png"></div></div><div class="compose-from__item compose-from__item--connection font__size15 width--inh"><ui-select ng-model="vm.sendForm.model.from_connection" class="select-list select-list--compose select-list--size_l select-list--no-border select-list--not-border-of-sides select-list--not-bg width-inh" theme="select2" on-select="vm.pasteSign()" search-enabled="false"><ui-select-match class="select-list__body select-list--size_l width-inh"><div class="select-list--dots"><span class="padding--right5" ng-if="$select.selected.isDefault"><input type="text" edit-inline class="input--bottom-line font-sizer--bigger-17 padding--left2" ng-model="$select.selected.user_name" ng-click="vm.isNameFocus = true; $event.stopPropagation();" ng-blur="vm.isNameFocus = false; vm.updateConnectionName($select.selected)"> </span><span ng-if="$select.selected.user_name">({{ $select.selected.email }}) </span><span ng-if="!$select.selected.user_name">{{ $select.selected.email }}</span></div></ui-select-match><ui-select-choices repeat="connection.id as connection in vm.connections.items" ng-value="$select.selected.id"><div ng-bind="connection.email"></div></ui-select-choices></ui-select></div></div></div><div class="compose__main-info"><div class="compose__content-header"><div class="input-line input-line--full"><label class="input-line__label"><a class="link link--gray link--hv-red font__size13" href="">{{ \'TO\' | translate }}</a></label><div class="input-line__links"><a class="link link--violet link--hv-red font__size13 mrg__right4" ng-click="vm.isSms = true">{{ \'SMS\' | translate }} </a><a class="link link--violet link--hv-red font__size13 mrg__right4" ng-click="vm.isCopy = true">{{ \'IS_COPY\' | translate }} </a><a class="link link--violet link--hv-red font__size13 mrg__right4" ng-click="vm.isCopyHidden = true">{{ \'IS_HIDDEN_COPY\' | translate }}</a></div><contact-to-add-select addresses="vm.sendForm.model.to" required="true" name="to" is-phone-button="true"></contact-to-add-select></div><div class="input-line__error" ng-if="sendForm.to.$invalid && sendForm.$submitted">{{ \'IS_NOT_FIELD_ENTER_ADDRESS\' | translate }}.</div><div class="input-line input-line--full" ng-if="vm.isCopy"><label class="input-line__label"><a class="link link--gray link--hv-re font__size13" href="">{{ \'IS_COPY\' | translate }}</a></label><contact-to-add-select addresses="vm.sendForm.model.toCopy" is-autofocus="true"></contact-to-add-select></div><div class="input-line input-line--full" ng-if="vm.isCopyHidden"><label class="input-line__label"><a class="link link--gray link--hv-re font__size13" href="">{{ \'HIDDEN\' | translate }}</a></label><contact-to-add-select addresses="vm.sendForm.model.toCopyHidden" is-autofocus="true"></contact-to-add-select></div><div class="input-line input-line--full" ng-if="vm.isSms"><label class="input-line__label"><a class="link link--gray link--hv-re font__size13" href>SMS</a> <a class="link link--hv-re font__size14" href ng-if="vm.sendForm.model.to.length < 2 || !vm.sendForm.model.to.length">+420</a></label><phone-to-add phones="vm.smsForm.model.phones" is-autofocus="true" ng-if="!vm.sendForm.model.to.length || vm.sendForm.model.to.length < 2"></phone-to-add><div class="input-line__phone-no" ng-if="vm.sendForm.model.to.length > 1">{{ \'NOT_SEND_SMS\' | translate }}.</div></div><div class="input-line input-line--full"><div class="input-line__body"><label class="input-line__label"><a class="link link--gray link--hv-re font__size13" href="">{{ \'SUBJECT\' | translate }}</a></label><div class="input-line__links"><a class="link link--violet link--hv-red font__size13" href uib-popover-template="\'app/components/template-list/template-list-popover.html\'" popover-class="popover--template-list" popover-placement="bottom-right" popover-animation="true" popover-trigger="\'outsideClick\'">{{ \'TEMPLATE\' | translate }}</a></div><input class="input-line__input" type="text" ng-model="vm.sendForm.model.subject"></div></div><div class="compose__mode-tabs"><button class="compose__mode-tab btn btn--not-style btn--size_l btn--not-events btn--compose icon-compose-document" ng-class="{\'compose__mode-tab--active\': vm.view === \'mail\'}" type="button" ng-click="vm.view = \'mail\'"></button> <button class="compose__mode-tab btn btn--not-style btn--size_l btn--not-events btn--compose icon-icon-screpka" ng-class="{\'compose__mode-tab--active\': vm.view === \'attach\'}" type="button" ng-click="vm.view = \'attach\'"></button></div></div></div><div class="compose__content"><button class="compose__add-signature" type="button" show-on-mousemove uib-popover-template="\'app/components/sign-list/sign-list-popover.html\'" popover-class="popover--sign-list popover--no-arrow" popover-placement="right" popover-animation="true" popover-trigger="\'outsideClick\'" popover-is-open="vm.isSignPopoverOpen"><span class="icon-select-arrow"></span></button><div ng-show="vm.view === \'mail\'" message-textarea message-textarea-is-translate="vm.isTranslate" message-textarea-is-translate-show="true" message-textarea-html="vm.sendForm.model.body" message-textarea-html-translate="vm.sendForm.model.bodyTranslate" message-textarea-html-sign="vm.sign" message-textarea-html-fwd="vm.modelFwd" message-textarea-html-re="vm.modelRe" message-textarea-time-load="0" ng-model="vm.sendForm.model.body"></div><div ng-show="vm.view === \'attach\'"><div class="mrg__top40"><attach-upload attachments-data="vm.sendForm.model.attachmentsData" is-show-add="true" message="vm.sendForm" is-uploading="vm.isUploading" attachments-conf="vm.sendForm.model.attachmentsConf" on-click-upload="vm.upload($files, $invalidFiles)"></attach-upload></div></div></div><div class="compose__resend-list" ng-if="vm.fwd.items.length >= 2"><div ng-repeat="fwd in vm.fwd.items"><div class="inbox-message__checked"><div class="checkbox-y checkbox-y--size14" ng-click="$event.stopPropagation();"><label class="checkbox-y__label"><input class="checkbox-y__input" type="checkbox" data-checklist-model="vm.fwd.checked" data-checklist-value="fwd"><div class="checkbox-y__body"><span class="checkbox-y__icon"></span></div><div class="checkbox-y__text">{{ \'SEND_IN_ATTACH\' | translate }} \xAB<a ui-sref="mail.message({id: fwd.number, mbox: fwd.mbox, connection_id: fwd.connection_id})" target="_blank">{{ fwd.Subject ? fwd.Subject : \'NOT_TITLE\'| translate }}\xBB</a> {{ \'SEND_IN_ATTACH_1\' | translate }}</div></label></div></div></div></div><div class="compose__footer flex--inline align-items--cn just-content--sp-btw"><div class="compose__footer-left"><div class="compose-send"><div class="btn-group compose-send__item mrg__right4"><button class="btn-group__btn btn btn--size_l btn--yellow btn--border-yellow btn--act--y-shw" type="submit">{{ \'SEND\' | translate }}<to-date date-unix="vm.sendForm.model.sdate" is-send-time="true"></to-date></button> <button class="btn-group__btn btn btn--size_l btn--yellow btn--border-yellow flex padding--left10 padding--right10" type="button" uib-popover-template="\'app/components/time-send/time-send-popover.html\'" popover-class="popover--time-send popover--no-arrow" popover-placement="top-left" popover-animation="true" popover-trigger="\'outsideClick\'" popover-is-open="vm.isOpen"><span class="icon-clock mrg__auto"></span></button></div><button class="btn btn--not-style btn--attach btn--size_l btn--not-events icon-icon-screpka font__size16 compose-send__item btn--compose" type="file" multiple="multiple" accept="**/*" ngf-max-size="10MB" ngf-select="vm.upload($files, $invalidFiles)"></button><div class="compose-send__item" ng-if="vm.isUploading"><div class="spinner"></div></div></div></div><div class="compose__footer-right"><div class="compose__footer-massage" ng-if="vm.sendForm.id && vm.sendForm.model.date">{{ \'SAVED_TO_NOTE\' | translate }}<to-date date="vm.sendForm.model.date.date"></to-date></div><button class="compose__remove-button btn--not-style btn--size_m icon-bin" ng-click="vm.destroy()" type="button"></button></div></div></form>');
$templateCache.put('app/components/contact-add/contact-add-popup.html','<div><div class="popup__close" ng-click="cancel()">\xD7</div><contact-add on-close="cancel()" email="email"></contact-add></div>');
$templateCache.put('app/components/contact-add/contact-add.html','<div class="contact-group-create"><div class="add-contact"><form name="contactForm" ng-submit="vm.create(contactForm)" novalidate><div class="add-contact__header"><span class="">{{ \'ADD_NEW_CONTACTS\' | translate }}</span></div><div class="add-contact__content"><div class="add-contact__column"><div class="add-contact__avatar"><div class="avatar avatar--settings avatar--size50 avatar--second-style"><img class="avatar__image" src="/images/avatar-personal.svg"></div></div><div class="add-contact__fio-data"><input class="input input--size_sm input--up-shadow width--size168 mrg__right10" type="text" name="last_name" ng-model="vm.contactForm.model.last_name" placeholder="{{ \'INPUT_PLACEHOLDER_LAST_MANE\' | translate }}"> <input class="input input--size_sm input--up-shadow width--size168 mrg__right10" type="text" name="first_name" ng-model="vm.contactForm.model.first_name" placeholder="{{ \'INPUT_PLACEHOLDER_NAME\' | translate }}"> <input class="input input--size_sm input--up-shadow width--size168" type="text" name="middle_name" ng-model="vm.contactForm.model.middle_name" placeholder="{{ \'INPUT_PLACEHOLDER_MIDDLE_NAME\' | translate }}"></div></div><div class="add-contact__column"><hr class="hr hr--top"><div class="add-contact__left"><div class="add-contact__item"><span class="add-contact__icon"><span class="icon-mail-contact2 svg-icon"></span><!--<svg class="svg-icon">--><!--<use xlink:href="#conact-icon-mail"></use>--><!--</svg>--> </span><input class="input input--size_xs input--up-shadow mrg__right10 width--size220" type="text" name="email" ng-model="vm.contactForm.model.email" placeholder="{{ \'INPUT_PLACEHOLDER_ADD_EMAIL_ADDRESS\' | translate }}" required></div><div class="add-contact__item"><span class="add-contact__icon"><span class="icon-phone-contact svg-icon"></span><!--<svg class="svg-icon">--><!--<use xlink:href="#contact-phone"></use>--><!--</svg>--> </span><input class="input input--size_xs input--up-shadow mrg__right10 width--size220" type="text" name="phone" ng-model="vm.contactForm.model.phone" placeholder="{{ \'INPUT_PLACEHOLDER_ADD_PHONE\' | translate }}"></div><div class="add-contact__item"><span class="add-contact__icon"><span class="icon-birth-day2 svg-icon"></span><!--<svg class="svg-icon">--><!--<use xlink:href="#contact-birthday"></use>--><!--</svg>--></span><div class="field-style flex--inline flex--row-wrap just-content--sp-btw width--size220"><ui-select ng-model="vm.contactForm.model.bDay" class="select-list select-list--size_xs select-list--not-border-of-sides width--size50 select-list--if-less" style="width: 50px!important" theme="select2" title="Choose a person"><ui-select-match class="select-list__body select-list--size_xs width--size50" placeholder="{{ \'DAY\' | translate }}">{{ $select.selected.name }}</ui-select-match><ui-select-choices repeat="day in vm.days"><div ng-bind-html="day.name"></div></ui-select-choices></ui-select><ui-select ng-model="vm.contactForm.model.bMonth" class="select-list select-list--size_xs select-list--not-border-of-sides width--size90 select-list--if-less" style="width: 90px!important" theme="select2" title="Choose a person"><ui-select-match class="select-list__body select-list--size_xs width--size90" placeholder="{{ \'MONTH\' | translate }}">{{ $select.selected }}</ui-select-match><ui-select-choices repeat="month in vm.months"><div ng-bind-html="month"></div></ui-select-choices></ui-select><ui-select ng-model="vm.contactForm.model.bYear" class="select-list select-list--size_xs select-list--not-border-of-sides width--size65 select-list--if-less" style="width: 65px!important" theme="select2" title="Choose a person"><ui-select-match class="select-list__body select-list--size_xs width--size65" placeholder="{{ \'YEAR\' | translate }}">{{ $select.selected.name }}</ui-select-match><ui-select-choices repeat="year in vm.years"><div ng-bind-html="year.name"></div></ui-select-choices></ui-select></div></div></div><div class="add-contact__right"><div class="add-contact__item align-items--st"><span class="add-contact__icon"><span class="icon-comment-contact svg-icon"></span><!--<svg class="svg-icon">--><!--<use xlink:href="#conact-comment"></use>--><!--</svg>--></span><textarea class="add-contact__text-field textarea textarea--normal textarea--size_sm textarea--not-resize textarea--input-yellow-focus textarea--up-shadow" name="comment" ng-model="vm.contactForm.model.comment" placeholder="{{ \'INPUT_PLACEHOLDER_COMMENT_CONTACT\' | translate }}"></textarea></div></div></div><hr class="hr hr--bottom"></div><div class="add-contact__footer"><button class="btn btn--normal btn--size_l width--aut float--left" type="submit">{{ \'ADD_IN_CONTACTS\' | translate }}</button></div></form></div></div>');
$templateCache.put('app/components/contact-edit/contact-edit-popup.html','<div><div class="popup__close" ng-click="cancel()">\xD7</div><contact-edit contact="contact" on-cancel="cancel()" on-close="close(result)"></contact-edit></div>');
$templateCache.put('app/components/contact-edit/contact-edit.html','<div class="contact-group-create"><div class="edit-contact"><form name="contactForm" novalidate><div class="edit-contact__header"><span class="">{{ \'EDIT_CONTACT\' | translate }}</span></div><div class="edit-contact__content"><div class="edit-contact__column"><div class="edit-contact__avatar"><div class="avatar avatar--settings avatar--size50 avatar--second-style"><img class="avatar__image" src="/images/avatar-personal.svg"></div></div><div class="edit-contact__fio-data"><input class="input input--size_sm input--up-shadow width--size168 mrg__right10" type="text" name="last_name" placeholder="{{ \'INPUT_PLACEHOLDER_LAST_MANE\' | translate }}" ng-model="vm.contactForm.model.last_name"> <input class="input input--size_sm input--up-shadow width--size168 mrg__right10" type="text" name="first_name" ng-model="vm.contactForm.model.first_name" placeholder="{{ \'INPUT_PLACEHOLDER_NAME\' | translate }}"> <input class="input input--size_sm width--size168 input--up-shadow" type="text" name="middle_name" ng-model="vm.contactForm.model.middle_name" placeholder="{{ \'INPUT_PLACEHOLDER_MIDDLE_NAME\' | translate }}"></div></div><div class="edit-contact__column"><hr class="hr hr--top"><div class="edit-contact__left mrg__right10"><div class="edit-contact__item"><span class="edit-contact__icon"><span class="icon-mail-contact2 svg-icon"></span><!--<svg class="svg-icon">--><!--<use xlink:href="#conact-icon-mail"></use>--><!--</svg>--></span><contact-emails emails="vm.contactForm.model.emails"></contact-emails></div><!-- \u0422\u0443\u0442 \u0432\u0432\u043E\u0434\u0438\u0442\u0441\u044F \u0433\u0440\u0443\u043F\u043F\u044B--><div class="edit-contact__item" ng-repeat="contactGroup in contactGroups"><span class="edit-contact__icon"><svg class="svg-icon"><use xlink:href="#conacts-add-group"></use></svg> </span><!-- \u0441\u043F\u0438\u0441\u043E\u043A--><div class="edit-contact__groups"><span class="edit-contact__group-item"><span class="remove-data-input remove-data-input--small"><svg class="remove-data-input__icon"><use xlink:href="#icon-close"></use></svg> </span><svg class="edit-contact__group-item__icon group-icon group-pall--c-1"><use xlink:href="#grid-square"></use></svg> {{ contactGroup.name }}</span></div></div><!-- \u0422\u0443\u0442 \u0432\u0432\u043E\u0434\u0438\u0442\u0441\u044F \u043D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430--><div class="edit-contact__item"><span class="edit-contact__icon"><span class="icon-phone-contact svg-icon"></span><!--<svg class="svg-icon">--><!--<use xlink:href="#contact-phone"></use>--><!--</svg>--></span><contact-phones phones="vm.contactForm.model.phones"></contact-phones></div><!-- \u0434\u0430\u0442\u0430 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F--><div class="edit-contact__item"><span class="edit-contact__icon"><span class="icon-birth-day2 svg-icon"></span><!--<svg class="svg-icon">--><!--<use xlink:href="#contact-birthday"></use>--><!--</svg>--></span><div class="field-style flex--inline flex--row-wrap just-content--sp-btw width--size220"><ui-select ng-model="vm.contactForm.model.bDay" class="select-list select-list--size_xs select-list--not-border-of-sides width--size50 select-list--if-less" style="width: 50px!important" theme="select2" title="Choose a person"><ui-select-match class="select-list__body select-list--size_xs width--size50" placeholder="{{ \'DAY\' | translate }}">{{ $select.selected.name }}</ui-select-match><ui-select-choices repeat="day in vm.days"><div ng-bind-html="day.name"></div></ui-select-choices></ui-select><ui-select ng-model="vm.contactForm.model.bMonth" class="select-list select-list--size_xs select-list--not-border-of-sides width--size90 select-list--if-less" style="width: 90px!important" theme="select2" title="Choose a person"><ui-select-match class="select-list__body select-list--size_xs width--size90" placeholder="{{ \'MONTH\' | translate }}">{{ $select.selected }}</ui-select-match><ui-select-choices repeat="month in vm.months"><div ng-bind-html="month"></div></ui-select-choices></ui-select><ui-select ng-model="vm.contactForm.model.bYear" class="select-list select-list--size_xs select-list--not-border-of-sides width--size65 select-list--if-less" style="width: 65px!important" theme="select2" title="Choose a person"><ui-select-match class="select-list__body select-list--size_xs width--size65" placeholder="{{ \'YEAR\' | translate }}">{{ $select.selected.name }}</ui-select-match><ui-select-choices repeat="year in vm.years"><div ng-bind-html="year.name"></div></ui-select-choices></ui-select></div></div></div><div class="edit-contact__right"><div class="edit-contact__item align-items--st"><span class="edit-contact__icon"><span class="icon-comment-contact svg-icon"></span><!--<svg class="svg-icon">--><!--<use xlink:href="#conact-comment"></use>--><!--</svg>--></span><textarea class="edit-contact__text-field textarea textarea--normal textarea--size_sm textarea--not-resize textarea--input-yellow-focus textarea--up-shadow" placeholder="{{ \'INPUT_PLACEHOLDER_COMMENT_CONTACT\' | translate }}" ng-model="vm.contactForm.model.comment"></textarea></div></div></div><hr class="hr hr--bottom"></div><div class="edit-contact__footer"><button class="btn btn--normal btn--size_l width--size220 float--left" type="button" ng-click="vm.cancel()">{{ \'BTN_CANCEL\' | translate }}</button> <button class="btn btn--yellow btn--size_l width--size220 float--left" type="button" ng-click="vm.update(contactForm)">{{ \'SAVE_CHANGES\' | translate }}</button></div></form></div></div>');
$templateCache.put('app/components/contact-emails/contact-emails.html','<div><div class="edit-contact__add-data edit-contact__add-data--added" ng-repeat="email in vm.emails"><span class="remove-data-input" ng-click="vm.remove(email)"><svg class="remove-data-input__icon"><use xlink:href="#icon-close"></use></svg> </span><input class="input input--size_xs input--up-shadow width--size220" type="text" name="email" ng-model="email.value"></div><ng-form name="emailForm" novalidate><div class="edit-contact__add-data mrg__top5"><span class="remove-data-input"><svg class="remove-data-input__icon"><use xlink:href="#icon-close"></use></svg> </span><input class="input input--size_xs input--up-shadow width--size220" type="email" name="email" ng-model="vm.emailForm.model.email" ng-keyup="vm.add(emailForm, $event.keyCode);" placeholder="{{ \'INPUT_PLACEHOLDER_ADD_EMAIL_ADDRESS\' | translate }}" required></div></ng-form></div>');
$templateCache.put('app/components/contact-draggable/contact-draggable.html','<div class="contacts-list-is-null"><!--\n        \u043A\u043B\u0441\u0441 \u043F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0430\u0442\u0435\u043B\u044C \u043F\u0440\u0438 \u043D\u0430\u0432\u0435\u0434\u0435\u043D\u0438\u0438 \u0444\u0430\u0439\u043B\u0430 contacts-list-is-null__content--is-hover-file\n    --><form class="contacts-list-is-null__content ng-pristine ng-valid" name="uploadForm" ng-submit="vm.upload(uploadForm)" ngf-drop ngf-select="vm.upload(uploadForm)" type="file" name="file" ng-model="vm.uploadForm.model.file" accept="text/x-vcard" ngf-max-size="2MB" ngf-model-invalid="vm.uploadForm.errors" ngf-allow-dir="true" ngf-drag-over-class="\'contacts-list-is-null__content--is-hover-file\'"><div class="contacts-list-is-null__adder hide-elm"><input class="contacts-list-is-null__drop-mode hide-elm" type="file" name="data"></div><div class="contacts-list-is-null__title">{{ \'DOWNLOAD_CONTACTS_FORM_FILE\' | translate }}</div><div class="contacts-list-is-null__text">{{ \'SUPPORTS_IMPORT\' | translate }}</div><div class="contacts-list-is-null__text-comment">{{ \'DRAG_THE_FILE_HERE\' | translate }}</div><div class="contacts-list-is-null__error-added-file" ngf-no-file-drop>{{ \'CONTACT_IMPORT_FAIL\' }}</div><button class="btn btn--normal btn--size_xs btn--silver-hover" type="file" name="file" ng-model="vm.uploadForm.model.file" ngf-select="vm.upload(uploadForm)" accept="text/x-vcard" ngf-max-size="2MB" ngf-model-invalid="vm.uploadForm.errors" required>{{ \'OR_SELECT_A_FILE\' | translate }}</button></form><div class="contacts-list-is-null__success hide-elm"><div class=""><span class="contacts-list-is-null__success-title icon-check-box-mark mrg__right5"></span> {{ \'CONTACTS_MOVER\' | translate }}</div></div></div>');
$templateCache.put('app/components/contact-export-file/contact-export-file-popup.html','<div><div class="popup__close" ng-click="cancel()">\xD7</div><contact-export-file on-close="cancel()"></contact-export-file></div>');
$templateCache.put('app/components/contact-export-file/contact-export-file.html','<div class="contact-import-file"><div class="load-contacts-from-file"><form name="uploadForm" ng-submit="vm.upload(uploadForm)" novalidate><div class="load-contacts-from-file__header"><span>{{ \'BTN_LOAD_CONTACT_0F_FILE\' | translate }}</span></div><div class="load-contacts-from-file__content load-contacts-from-file__content--minh"><!--<div class="load-contacts-from-file__title">--><!--Mail.CZ \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0438\u043C\u043F\u043E\u0440\u0442 \u0432\u0430\u0448\u0438\u0445 \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u043E\u0432 \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u043E\u0432,\u0438\u0437 \u0444\u0430\u0439\u043B\u043E\u0432 \u0432 \u0444\u043E\u0440\u043C\u0430\u0442\u0435 .csv \u0438--><!--vCard.--><!--</div>--><!--{{ \'CONTACT_EXPORT_MASSAGE\' | translate }}.--><div class="mrg__top10 font__size15 font__bold">{{ \'MAIL_CLIENT\' | translate }}</div><div class="mrg__top10 width--inh"><ui-select ng-model="vm.sieveForm.model.spam_accept" class="select-list select-list--size_xs select-list--not-border-of-sides mrg__right6 font__size14" theme="select2" search-enabled="false" ng-disabled="true"><ui-select-match class="select-list__body select-list--size_xs width--inh font__size14" placeholder="vCard">{{ $select.selected.name }}</ui-select-match><ui-select-choices repeat="item.value as item in vm.spamAccept.list" value="{{ $select.selected.value }}"><div ng-bind-html="item.name"></div></ui-select-choices></ui-select></div><!--\n                    is-loaded \u043E\u0442\u0432\u0435\u0447\u0430\u0435\u0442 \u0437\u0430 \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438 \u043E \u0430\u043D\u0430\u043B\u0438\u0437\u0438 \u0444\u0430\u0439\u043B\u0430\n                    accept="image/*"\n                --><div class="load-contacts-from-file__load-elements"><!--<button class="btn btn&#45;&#45;yellow btn&#45;&#45;size_sm width&#45;&#45;aut"--><!--type="button"--><!--ng-click="vm.exportContacts()">--><!--{{ \'EXPORT_CONTACTS\' | translate }}--><!--</button>--><!--<a class="btn btn&#45;&#45;yellow btn&#45;&#45;size_sm width&#45;&#45;aut"--><!--type="button"--><!--href="http://apimail.devogic.com/contact/export" target="_blank">--><!--\u042D\u043A\u0441\u043F\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u044B--><!--</a>--><!--<span class="load-contacts-from-file__attach-file" ng-if="vm.uploadForm.model.file">--><!--{{ vm.uploadForm.model.file.name }}--><!--<span class="remove-data-input remove-data-input&#45;&#45;small"--><!--ng-click="vm.uploadForm.model.file = \'\'">--><!--<svg class="remove-data-input__icon">--><!--<use xlink:href="#icon-close"></use>--><!--</svg>--><!--</span>--><!--</span>--><!--<div class="load-contacts-from-file__notif" ng-if="vm.uploadForm.model.file">--><!--\u0424\u0430\u0439\u043B \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043F\u0440\u043E\u0430\u043D\u0430\u043B\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u043D\u043E--><!--&lt;!&ndash;\u0438 \u043D\u0430\u0439\u0434\u0435\u043D\u043E <b class="font__bold color&#45;&#45;yellow font__size16">24</b> \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u0430&ndash;&gt;--><!--</div>--></div></div><div class="load-contacts-from-file__footer load-contacts-from-file__footer--height54"><!--<hr class="hr hr&#45;&#45;top">--> <button class="btn btn--normal btn--size_xs width--size108 mrg__right16" type="button" ng-click="vm.close()">{{ \'CANCEL\' | translate }}</button> <button class="btn btn--normal btn--size_xs width--size108" type="button" ng-click="vm.exportContacts()">{{ \'IS_DONE\' | translate }}</button></div></form></div></div>');
$templateCache.put('app/components/contact-group/contact-group.html','<div class="contacts-settings"><div class="tags-settings__title main-title-text">{{ \'GROUPS_CONTACTS\' | translate }}:</div><div class="tags-settings__content"><div class="tags-settings__fields"><div class="tags-settings__fields__title-block"><div class="tags-settings__item mrg__bottom5"><div class="tags-settings__title">{{ \'ALL\' | translate }}</div><div class="tags-settings__values">{{ vm.contactGroup.items.length }}</div></div></div><div class="tags-settings__item mrg__bottom5" ng-repeat="contact in vm.contactGroup.items" ng-class="{\'tags-settings__item--active\': contact.isSelected}" ng-click="vm.select(contact)"><div class="tags-settings__title">{{ contact.name }}</div><div class="tags-settings__values">2</div></div></div><div class="tags-settings__control"><div class="mrg__top"><!----> <button class="btn btn--normal btn--size_sm width--size150 mrg__bottom4" type="button" ng-click="vm.openContactGroupCreatePopup()">{{ \'CREATE_GROUP\' | translate }}</button> <button class="btn btn--normal btn--size_sm width--size150 mrg__bottom4" type="button" ng-disabled="!vm.selected" ng-click="vm.openContactGroupEditPopup()">{{ \'RENAME\' | translate }}</button> <button class="btn btn--normal btn--size_sm width--size150 mrg__bottom4" type="button" ng-disabled="!vm.selected" ng-click="vm.destroy()">{{ \'DELETE\' | translate }}</button></div></div></div><div class="form__field-item"></div></div>');
$templateCache.put('app/components/contact-group-add/contact-group-add-popup.html','<div><div class="popup__close" ng-click="cancel()">\xD7</div><contact-group-add on-close="cancel()"></contact-group-add></div>');
$templateCache.put('app/components/contact-group-add/contact-group-add.html','<div class="contact-group-create"><div class="add-group-contacts"><form name="form" ng-submit="vm.create(form)" novalidate><div class="add-group-contacts__header"><div class="add-group-contacts__left"><span class="add-group-contacts__header-title">{{ \'CREATE_GROUP\' | translate }}</span><div class="add-group-contacts__left-content"><label class="contacts-header__icon all-select-check mrg__right16" ng-class="{\'is-check\': vm.isAllChecked}"><input type="checkbox" style="display: none" ng-model="vm.isAllChecked" ng-change="vm.checkedAllContacts()" ng-disabled="!vm.contacts.items.length"> <span class="all-select-check__icon icon-check-box-mark"><!--<use xlink:href="#check-box-mark"></use>--></span></label><!-- \u0432\u044B\u0431\u043E\u0440 \u0433\u0440\u0443\u043F\u043F\u044B --><ui-select ng-model="vm.searchForm.group" class="select-list select-list--size_xs select-list--not-border-of-sides mrg__right10" style="width: 145px!important" theme="select2" search-enabled="false"><ui-select-match class="select-list__body select-list--size_xs width--all" placeholder="{{ \'INPUT_PLACEHOLDER_CHOOSE_GROUP\' | translate }}">{{ $select.selected.name }}</ui-select-match><!--<ui-select-choices>--><!--<div>\u0412\u0441\u0435 \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u044B</div>--><!--</ui-select-choices>--><ui-select-choices repeat="contactGroup in vm.contactGroup.items"><div ng-bind-html="contactGroup.name"></div></ui-select-choices></ui-select><!-- \u041F\u043E\u0438\u0441\u043A --> <input class="input input--size_xs width--size220" type="text" placeholder="{{ \'INPUT_PLACEHOLDER_SEARCH\' | translate }}" ng-model="vm.searchForm.query"></div></div><div class="add-group-contacts__right"><!-- \u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0433\u0440\u0443\u043F\u043F\u044B --> <input class="input input--size_xs width--inh mrg__bottom" type="text" name="name" placeholder="{{ \'INPUT_PLACEHOLDER_NAME_GROUP\' | translate }}" ng-model="vm.contactGroupForm.model.name" required></div></div><div class="add-group-contacts__content"><div class="add-group-contacts__left"><div class="add-group-contacts__contact-list"><!-- \u043A\u043E\u043D\u0442\u0430\u043A\u0442 --><label class="add-group-contacts__item" ng-repeat="contact in vm.contacts.items | filter: vm.searchForm.query"><input class="add-group-contacts__checkbox" type="checkbox" style="display: none" data-checklist-model="vm.contacts.checked" data-checklist-value="contact"><div class="add-group-contacts__checkbox-body"><!-- \u0410\u0432\u0430\u0442\u0430\u0440\u043A\u0430--><div class="add-group-contacts__contact-avatar"><div class="avatar avatar--settings avatar--size28 avatar--second-style"><avatar-name name="contact.first_name" email="contact.email"></avatar-name><div class="add-group-contacts__check-icon"><span class="all-select-check__icon icon-check-box-mark"><!--<use xlink:href="#check-box-mark"></use>--></span></div></div></div><!-- \u0418\u043C\u044F--><div class="add-group-contacts__contact-name"><span class="add-group-contacts__text">{{ contact.last_name }} {{ contact.first_name }}</span></div><!-- \u0410\u0434\u0440\u0435\u0441 \u043F\u043E\u0447\u0442\u044B--><div class="add-group-contacts__mail-adress"><span class="add-group-contacts__text">{{ contact.email }}</span></div></div></label></div></div><div class="add-group-contacts__right flex--colum"><div class="add-group-contacts__selected-contact-list"><div class="add-group-contacts__select-item" ng-repeat="contact in vm.contacts.checked"><div class="flex flex--colum"><span class="add-group-contacts__user-name">{{ contact.last_name }} {{ contact.first_name }} </span><span class="add-group-contacts__user-mail">{{ contact.email }}</span></div><button class="add-group-contacts__select-item-remove btn btn--not-style" type="button" ng-click="vm.removeChecked(contact)"><svg class="svg-icon"><use xlink:href="#icon-bold-removed"></use></svg></button></div></div><div class="add-group-contacts__footer"><button class="btn btn--size_l btn--not-style width--aut mrg__right10" type="button" ng-click="vm.close()">{{ \'BTN_CANCEL\' | translate }}</button> <button class="btn btn--normal btn--size_l width--aut" type="submit">{{ \'BTN_CREATE\' | translate }}</button></div></div></div></form></div></div>');
$templateCache.put('app/components/contact-group-create/contact-group-create-popup.html','<div><div class="popup__close" ng-click="cancel()">\xD7</div><contact-group-create on-close="cancel()"></contact-group-create></div>');
$templateCache.put('app/components/contact-group-create/contact-group-create.html','<div class="contact-group-create"><div class="contact-group-create__title">{{ \'CREATE_NEW_GROUP\' | translate }}</div><div class="mrg__top15"><form name="contactGroupForm" ng-submit="vm.create(contactGroupForm)" novalidate><div class="contact-group-create__input mrg__top15"><div class="mrg__right10"><span class="font__size13">{{ \'NAME\' | translate }}</span></div><div><input class="input input--size_s width--inh input--fc-sh-yellow" type="text" name="name" ng-model="vm.contactGroupForm.model.name" required></div></div><div class="contact-group-create__btn mrg__top10"><button class="btn-y btn-y--border" type="submit">{{ \'CREATE_GROUP\' | translate }}</button> <button class="btn-y btn-y--border" type="button" ng-click="vm.close()">{{ \'CANCEL\' | translate }}</button></div></form></div></div>');
$templateCache.put('app/components/contact-group-edit/contact-group-edit-popup.html','<div><div class="popup__close" ng-click="cancel()">\xD7</div><contact-group-edit model="model" on-close="cancel()"></contact-group-edit></div>');
$templateCache.put('app/components/contact-group-edit/contact-group-edit.html','<div class="contact-group-create"><div class="contact-group-create__title">{ \'CREATE_NEW_GROUP\' | translate }}</div><div class="mrg__top15"><form name="contactGroupForm" ng-submit="vm.create(contactGroupForm)" novalidate><div class="contact-group-create__input mrg__top15"><div class="mrg__right10"><span class="font__size13">{{ \'NAME\' | translate }}</span></div><div><input class="input input--size_s width--inh input--fc-sh-yellow" type="text" name="name" ng-model="vm.contactGroupForm.model.name" required></div></div><div class="contact-group-create__btn mrg__top10"><button class="btn-y btn-y--border" type="submit">{{ \'RENAME_GROUP\' | translate }}</button> <button class="btn-y btn-y--border" type="button" ng-click="vm.close()">{{ \'CANCEL\' | translate }}</button></div></form></div></div>');
$templateCache.put('app/components/contact-header/contact-header.html','<div class="contacts-header"><div class="contacts-header__menu"><div class="contacts-header__menu-item padding--left6 flex align-items--cn"><label class="contacts-header__link"><input type="checkbox" style="display: none" ng-model="vm.isAllChecked" ng-change="vm.checkedAllContacts()" ng-disabled="!vm.contacts.items.length"><div class="contacts-header__icon all-select-check" ng-class="{\'is-check\': vm.isAllChecked}"><span class="all-select-check__icon icon-check-box-mark"><!--<use xlink:href="#check-box-mark"></use>--></span></div></label></div><!-- \u0438\u0442\u0435\u043C--><!--<div class="contacts-header__menu-item">--><!--<a class="contacts-header__link">--><!--<span class="icon-write contacts-header__icon"></span>--><!--<span class="contacts-header__item-name">\u041D\u0430\u043F\u0438\u0441\u0430\u0442\u044C</span>--><!--</a>--><!--</div>--><div class="contacts-header__menu-item"><a class="contacts-header__link" href ng-click="vm.openContactAddPopup()"><span class="icon-add-contact contacts-header__icon"></span> <span class="contacts-header__item-name">{{ \'ADD_CONTACT\' | translate }}</span></a></div><div class="contacts-header__menu-item" ng-if="vm.contacts.checked.length"><a class="contacts-header__link" href ng-click="vm.destroy()"><span class="icon-bin contacts-header__icon color--light-red"></span> <span class="contacts-header__item-name">{{ \'DELETE\' | translate }}</span></a></div><div class="contacts-header__menu-item" ng-if="vm.contacts.checked.length"><a class="contacts-header__link" uib-popover-template="\'app/components/contact-group-list/contact-group-list-popover.html\'" popover-class="popover--folder-list" popover-placement="bottom" popover-animation="true" popover-trigger="\'outsideClick\'"><span class="icon-add-group-2 contacts-header__icon"></span> <span class="contacts-header__item-name">{{ \'ADD_TO_GROUP\' | translate }}</span></a></div><div class="contacts-header__menu-item"><a class="contacts-header__link" href ng-click="vm.openContactRestorePopup()"><span class="icon-add-contacts-2 contacts-header__icon"></span> <span class="contacts-header__item-name">{{ \'RECOVERY\' | translate }}</span></a></div><div class="contacts-header__menu-item" uib-popover-template="\'app/components/contact-other-list/contact-other-list-popover.html\'" popover-class="popover--contact-other-list" popover-placement="bottom" popover-animation="true" popover-trigger="\'outsideClick\'"><a class="contacts-header__link"><span class="icon-more contacts-header__icon"></span> <span class="contacts-header__item-name">{{ \'YET\' | translate }}</span></a></div></div></div>');
$templateCache.put('app/components/contact-group-list/contact-group-list-popover.html','<contact-group-list contacts="vm.contacts"></contact-group-list>');
$templateCache.put('app/components/contact-group-list/contact-group-list.html','<div class="folder-list"><div><a class="folder-list__link" href ng-repeat="contactGroup in vm.contactGroup.items" ng-click="vm.addContacts(contactGroup)"><span class="folder-list__name">{{ contactGroup.name }}</span></a></div><hr class="hr"><div><a class="folder-list__link folder-list__link--new" href ng-click="vm.openGroupAddPopup()"><span class="folder-list__name">{{ \'NEW_GROUP\' | translate }}...</span></a></div></div>');
$templateCache.put('app/components/contact-item-list/contact-item-list.html','<div class="contacts-list"><contact-item contact="contact" contacts="vm.contacts" ng-repeat="contact in vm.contacts.items"></contact-item></div>');
$templateCache.put('app/components/contact-item/contact-item.html','<div class="contacts-list__item pointer" ng-class="{\'is-check\': vm.contact.isChecked}" ng-click="vm.openContactViewPopup()"><!-- \u0410\u0432\u0430\u0442\u0430\u0440\u043A\u0430--><div class="contacts-list__contact-avatar"><div class="avatar avatar--settings avatar--size28 avatar--second-style"><img class="avatar__image" src="/images/avatar-personal.svg" ng-if="!vm.firstLetter && !vm.emailLetter"><div class="avatar__symbol-image" ng-if="vm.firstLetter || vm.emailLetter"><div class="avatar__first-name">{{ vm.firstLetter ? vm.firstLetter : vm.emailLetter }}</div><div class="avatar__last-name" ng-if="vm.lastLetter">{{ vm.lastLetter }}</div></div><label ng-click="$event.stopPropagation();"><div class="contacts-list__check-icon"><span class="all-select-check__icon icon-check-box-mark"><!--<use xlink:href="#check-box-mark"></use>--> </span><input type="checkbox" style="display: none" ng-model="vm.contact.isChecked" data-checklist-model="vm.contacts.checked" data-checklist-value="vm.contact"></div></label></div></div><!-- \u0418\u043C\u044F--><div class="contacts-list__contact-name"><div class="contacts-list__text" ng-if="vm.contact.last_name || vm.contact.first_name">{{ vm.contact.last_name }} {{ vm.contact.first_name }}</div><div class="contacts-list__text" ng-if="!vm.contact.last_name && !vm.contact.first_name">{{ vm.contact.emails[0].value }}</div></div><!-- \u0410\u0434\u0440\u0435\u0441 \u043F\u043E\u0447\u0442\u044B--><div class="contacts-list__mail-adress"><span class="contacts-list__text">{{ vm.contact.email }}</span></div><!-- \u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430--><div class="contacts-list__phone"><span class="contacts-list__text">{{ vm.contact.phone }}</span></div><!-- \u043A \u043A\u0430\u043A\u043E\u0439 \u0433\u0440\u0443\u043F\u043F\u0435 \u043F\u0440\u0438\u043D\u0430\u0434\u043B\u0435\u0436\u0438\u0442--><div class="contacts-list__group" ng-if="vm.contact.contactGroups.length"><div class="contacts-list__group-item" ng-repeat="contactGroup in vm.contact.contactGroups"><svg class="group-icon group-pall--c-8"><use xlink:href="#grid-square"></use></svg> <span class="contacts-list__group-label mrg__left5">{{ contactGroup.name }}</span></div><!--<div class="contacts-list__group-item">--><!--<svg class="group-icon group-pall&#45;&#45;c-3">--><!--<use xlink:href="#grid-square"></use>--><!--</svg>--><!--<span class="contacts-list__group-label mrg__left5">asdsad1</span>--><!--</div>--><!--<div class="contacts-list__group-item">--><!--<svg class="group-icon group-pall&#45;&#45;c-2">--><!--<use xlink:href="#grid-square"></use>--><!--</svg>--><!--<span class="contacts-list__group-label mrg__left5">1dasd</span>--><!--</div>--><!--<div class="contacts-list__group-item">--><!--<svg class="group-icon group-pall&#45;&#45;c-15">--><!--<use xlink:href="#grid-square"></use>--><!--</svg>--><!--<span class="contacts-list__group-label mrg__left5">asds1</span>--><!--</div>--><!--<div class="contacts-list__group-item">--><!--<svg class="group-icon group-pall&#45;&#45;c-4">--><!--<use xlink:href="#grid-square"></use>--><!--</svg>--><!--<span class="contacts-list__group-label mrg__left5">1dsadas</span>--><!--</div>--></div><!-- \u0411\u044B\u0441\u0442\u0440\u043E\u0435 \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u0435--><div class="contacts-list__quik-delete"><a class="contacts-list__link" ng-click="vm.destroy(vm.contact)"><span class="icon-bin contacts-list__icon color--light-red"></span></a></div><!-- \u0411\u044B\u0441\u0442\u0440\u044B\u0439 \u043E\u0442\u0432\u0435\u0442--><div class="contacts-list__new_message"><a class="contacts-list__link" ng-click="vm.openComposePopup(); $event.stopPropagation();"><span class="icon-write contacts-list__icon"></span></a></div></div>');
$templateCache.put('app/components/contact-import-file/contact-import-file-popup.html','<div><div class="popup__close" ng-click="cancel()">\xD7</div><contact-import-file on-close="cancel()"></contact-import-file></div>');
$templateCache.put('app/components/contact-import-file/contact-import-file.html','<div class="contact-import-file"><div class="load-contacts-from-file"><form name="uploadForm" ng-submit="vm.upload(uploadForm)" novalidate><div class="load-contacts-from-file__header"><span class="">{{ \'BTN_LOAD_CONTACT_0F_FILE\' | translate }}</span></div><div class="load-contacts-from-file__content"><div class="load-contacts-from-file__title">{{ \'CONTACT_EXPORT_MASSAGE\' | translate }}.</div><div class="load-contacts-from-file__load-elements" ng-class="{\'is-loaded\': vm.uploadForm.model.file}"><button class="btn btn--yellow btn--size_sm width--aut" type="file" name="file" ng-model="vm.uploadForm.model.file" ngf-select accept="text/x-vcard" ngf-max-size="2MB" ngf-model-invalid="vm.uploadForm.errors" required>{{ \'UPLOAD_FILES\' | translate }}</button> <span class="load-contacts-from-file__attach-file" ng-if="vm.uploadForm.model.file">{{ vm.uploadForm.model.file.name }} <span class="remove-data-input remove-data-input--small" ng-click="vm.uploadForm.model.file = \'\'"><svg class="remove-data-input__icon"><use xlink:href="#icon-close"></use></svg></span></span><div class="load-contacts-from-file__notif" ng-if="vm.uploadForm.model.file">{{ \'FILE_IS_ANALISE_SUCCESS\' | translate }}<!--\u0438 \u043D\u0430\u0439\u0434\u0435\u043D\u043E <b class="font__bold color&#45;&#45;yellow font__size16">24</b> \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u0430--></div></div></div><div class="load-contacts-from-file__footer"><hr class="hr hr--top"><button class="btn btn--normal btn--size_sm width--size129 mrg__right10" type="button" ng-click="vm.close()">{{ \'CANCEL\' | translate }}</button> <button class="btn btn--normal btn--size_sm width--size129" type="submit" ng-disabled="!vm.uploadForm.model.file">{{ \'SAVE\' | translate }}</button></div></form></div></div>');
$templateCache.put('app/components/contact-other-list/contact-other-list-popover.html','<contact-other-list></contact-other-list>');
$templateCache.put('app/components/contact-other-list/contact-other-list.html','<div class="contact-other-list"><div><a class="contact-other-list__link" href ng-click="vm.openContactImportFilePopup()"><span class="contact-other-list__name">{{ \'BTN_LOAD_CONTACT_0F_FILE\' | translate }} </span></a><a class="contact-other-list__link" href ng-click="vm.openContactExportFilePopup()"><span class="contact-other-list__name">{{ \'LOAD_CONTACT_IN_FILE\' | translate }}</span></a></div></div>');
$templateCache.put('app/components/contact-phones/contact-phones.html','<div><div class="edit-contact__add-data edit-contact__add-data--added" ng-repeat="phone in vm.phones"><span class="remove-data-input" ng-click="vm.remove(phone)"><svg class="remove-data-input__icon"><use xlink:href="#icon-close"></use></svg> </span><input class="input input--size_xs input--up-shadow width--size220" type="text" name="phone" ng-model="phone.value"></div><!-- \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0435\u0449\u0435 \u043D\u043E\u043C\u0435\u0440--><div class="edit-contact__add-data mrg__top5"><ng-form name="phoneForm" novalidate><span class="remove-data-input"><svg class="remove-data-input__icon"><use xlink:href="#icon-close"></use></svg> </span><input class="input input--size_xs input--up-shadow width--size220" type="text" name="phone" ng-model="vm.phoneForm.model.phone" ng-keyup="vm.add(phoneForm, $event.keyCode);" placeholder="{{ \'INPUT_PLACEHOLDER_ADD_PHONE\' | translate }}" required></ng-form></div></div>');
$templateCache.put('app/components/contact-restore/contact-restore-popup.html','<div><div class="popup__close" ng-click="cancel()">\xD7</div><contact-restore on-close="cancel()"></contact-restore></div>');
$templateCache.put('app/components/contact-restore/contact-restore.html','<div class="contact-group-create"><form name="restoreForm" ng-submit="vm.restoreArchive(restoreForm)" novalidate><div class="restore-contacts"><div class="restore-contacts__header"><span class="">{{ \'RECOVERY_CONTACTS\' | translate }}</span></div><div class="restore-contacts__content"><div ng-repeat="restore in vm.restore.items"><label style="display: block; margin: 0"><div class="restore-contacts__item" ng-class="{\'is-selected\': restore.isChecked}"><span class="restore-contacts__date">{{ restore.date }}</span> <span class="restore-contacts__count">{{ restore.count }}</span> <input type="checkbox" style="display: none" ng-model="restore.isChecked" data-checklist-model="vm.restore.checked" data-checklist-value="restore"></div></label><!--<span class="restore-contacts__date">11 \u0430\u043F\u0440\u0435\u043B\u044F 2017 5:08</span>--><!--<span class="restore-contacts__count">1 \u043A\u043E\u043D\u0442\u0430\u043A\u0442</span>--></div></div><div class="restore-contacts__footer"><hr class="hr hr--top"><button class="btn btn--normal btn--size_l width--aut float--left" type="submit" ng-disabled="!vm.restore.checked.length">{{ \'BTN_RECOVERY_CONTACT\' | translate }}</button></div></div></form></div>');
$templateCache.put('app/components/contact-to-add-select/contact-to-add-select.html','<tags-input class="tags-input" ng-model="vm.addresses" type="email" name="{{ vm.name }}" template="tag-template" template-scope="vm" display-property="first_name" on-tag-adding="vm.onTagAdding($tag)" key-property="id" replace-spaces-with-dashes="true" autofocus="vm.isAutofocus" ng-required="vm.required" ng-focus="isTagFocus = true" ng-blur="isTagFocus = false" disable-focus-on-blur tags-input-phone-button="{{ vm.isPhoneButton }}"><auto-complete source="vm.findContacts($query, isTagFocus)" min-length="0" load-on-focus="true" load-on-empty="false" max-results-to-show="5" auto-complete-after debounce-delay="0" template="autocomplete-template"></auto-complete></tags-input><script type="text/ng-template" id="tag-template"><div tag-input-edit ng-dblclick="editTag($event)">\n        <div class="tag-contact font-sizer--bigger-15 tag-contact__autocomplete-item"\n             uib-popover-template="\'app/components/contact-to-add-select-menu/contact-to-add-select-menu-popover.html\'"\n             popover-class="popover--tag-list"\n             popover-placement="bottom"\n             popover-animation="true"\n             popover-trigger="\'outsideClick\'"\n             ng-if="!data.isEdit"\n             ng-class="{\'pointer\': !data.isEdit}"\n             ng-click="$event.stopPropagation();">\n            <div class="avatar avatar--size20 mrg__right7">\n                <avatar-name name="data.first_name" email="data.emails[0].value"></avatar-name>\n            </div>\n            <div class="tag-contact__name" ng-if="data.first_name">\n                {{ data.last_name }}\n                {{ data.first_name }}\n            </div>\n            <div class="tag-contact__email" ng-if="!data.first_name">\n                {{ data.emails[0].value }}\n            </div>\n        </div>\n        <div class="tag-contact-edit"\n             ng-if="data.isEdit"\n             ng-blur="setEdit($event, data, newEditTag)"\n             ng-click="$event.stopPropagation();"\n             contenteditable="true">{{ tagEdit }}\n        </div>\n    </div></script><script type="text/ng-template" id="autocomplete-template"><div class="tag-contact">\n        <div class="avatar avatar--size28 mrg__right16 avatar--bg-color">\n            <avatar-name name="data.first_name" email="data.emails[0].value"></avatar-name>\n        </div>\n        <div class="tag-contact__name" ng-if="data.first_name">\n            {{ data.first_name }}\n            {{ data.last_name }}\n        </div>\n        <div class="tag-contact__email"\n             ng-class="{\'mrg__left10\': data.first_name}"\n             ng-if="data.emails[0].value">\n            {{ data.emails[0].value }}\n        </div>\n        <div class="tag-contact__phone"\n             ng-class="{\'mrg__left10\': data.first_name || data.emails[0].value}"\n             ng-if="data.phone">\n            {{ data.phone }}\n        </div>\n    </div></script><script type="text/ng-template" id="autocomplete-template-footer"><div class="tag-contact tag-contact--more pointer" ng-click="vm.openContactToAddPopup()">\n        <div class="avatar avatar--size28 mrg__right16 avatar--bg-color">\n            <avatar-name name="\'Contacts\'" email="\'Contacts\'"></avatar-name>\n        </div>\n        <div class="tag-contact__name">\n            {{ \'SHOW_ALL_CONTACTS\' | translate }}\n        </div>\n    </div></script>');
$templateCache.put('app/components/contact-view/contact-view-popup.html','<div><div class="popup__close" ng-click="cancel()">\xD7</div><contact-view contact="contact" on-close="cancel()"></contact-view></div>');
$templateCache.put('app/components/contact-view/contact-view.html','<div class="contact-group-create"><div class="viewed-contact"><div class="viewed-contact__header"><span class="">{{ \'ABOUT_CONTACTS\' | translate }}</span></div><div class="viewed-contact__content"><div class="viewed-contact__column"><div class="viewed-contact__avatar"><div class="avatar avatar--settings avatar--size50 avatar--second-style"><img class="avatar__image" src="/images/avatar-personal.svg"></div></div><div class="viewed-contact__caption"><div class="viewed-contact__contact-name">{{ vm.contact.last_name }} {{ vm.contact.first_name }}</div><div class="viewed-contact__control-elements"><button class="btn btn--normal btn--size_sm width--aut mrg__right7" type="button" ng-click="vm.close(); vm.openComposePopup()">{{ \'WRITE_LETTERS\' | translate }}</button> <button class="btn btn--normal btn--size_sm width--aut flex align-items--cn mrg__right7" type="button" ng-click="vm.close(); vm.openComposePopup()"><span class="icon-conacts-sends svg-icon"><!--<use xlink:href="#conacts-sort-message"></use>--> </span>{{ \'\' | translate }}</button> <button class="btn btn--normal btn--size_sm width--aut flex align-items--cn mrg__right7" type="button" ng-click="vm.addToBlackList()"><span class="icon-add-contact-back-list-2 svg-icon svg-icon--red"><!--<use xlink:href="#conacts-add-black-list"></use>--></span></button><!--<button class="btn btn&#45;&#45;normal btn&#45;&#45;size_sm width&#45;&#45;aut icon-attach font__size16"></button>--></div></div></div><div class="viewed-contact__column"><hr class="hr hr--top"><div class="viewed-contact__left"><!-- \u0410\u0434\u0440\u0435\u0441\u0430 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0439 \u043F\u043E\u0447\u0442\u044B--><div class="viewed-contact__item" ng-if="vm.contact.emails.length"><span class="viewed-contact__icon"><span class="icon-mail-contact2 svg-icon"></span><!--<svg class="svg-icon">--><!--<use xlink:href="#conact-icon-mail"></use>--><!--</svg>--> </span><!-- \u0441\u043F\u0438\u0441\u043E\u043A--><div class="viewed-contact__emails"><div ng-repeat="email in vm.contact.emails"><a class="viewed-contact__link" href>{{ email.value }}</a></div></div></div><!-- \u0422\u0443\u0442 \u0432\u0432\u043E\u0434\u0438\u0442\u0441\u044F \u0433\u0440\u0443\u043F\u043F\u044B--><div class="viewed-contact__item" ng-if="vm.contact.contactGroups.length"><span class="viewed-contact__icon"><!--<svg class="svg-icon">--><!--<use xlink:href="#conacts-add-group"></use>--><!--</svg>--> <span class="icon-group-conact2 svg-icon"></span> </span><!-- \u0441\u043F\u0438\u0441\u043E\u043A--><div class="viewed-contact__groups"><span class="viewed-contact__group-item" ng-repeat="contactGroup in vm.contact.contactGroups"><span class="icon-grid-square svg-icon"></span><!--<svg class="viewed-contact__group-item__icon group-icon group-pall&#45;&#45;c-1">--><!--<use xlink:href="#grid-square"></use>--><!--</svg>--> {{ contactGroup.name }}</span></div></div><!-- \u0422\u0443\u0442 \u0432\u0432\u043E\u0434\u0438\u0442\u0441 \u043D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430--><div class="viewed-contact__item" ng-if="vm.contact.phones.length"><span class="viewed-contact__icon"><span class="icon-phone-contact svg-icon"></span><!--<svg class="svg-icon">--><!--<use xlink:href="#contact-phone"></use>--><!--</svg>--> </span><!-- \u0441\u043F\u0438\u0441\u043E\u043A--><div class="viewed-contact__phones"><span class="viewed-contact__number-phone" ng-repeat="phone in vm.contact.phones">{{ phone.value }}</span></div></div><!-- \u0434\u0430\u0442\u0430 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F--><div class="viewed-contact__item" ng-if="vm.contact.birthday"><span class="viewed-contact__icon"><span class="icon-birth-day2 svg-icon"></span><!--<svg class="svg-icon">--><!--<use xlink:href="#contact-birthday"></use>--><!--</svg>--></span><div class="viewed-contact__birthday">{{ vm.getDate(vm.contact.birthday) }}</div></div></div><div class="viewed-contact__right"><div class="viewed-contact__item align-items--st" ng-if="vm.contact.comment"><span class="viewed-contact__icon"><span class="icon-comment-contact svg-icon"></span><!--<svg class="svg-icon">--><!--<use xlink:href="#conact-comment"></use>--><!--</svg>--></span><div class="viewed-contact__text-field"><span>{{ vm.contact.comment }}</span></div></div></div></div><hr class="hr hr--bottom"></div><div class="viewed-contact__footer"><button class="btn btn--normal btn--size_sm width--aut float--left" type="button" ng-click="vm.openContactEditPopup()">{{ \'CHANGE\' | translate }}</button></div></div></div>');
$templateCache.put('app/components/contact-to-add/contact-to-add-popup.html','<div><div class="popup__close" ng-click="cancel()">\xD7</div><contact-to-add on-cancel="cancel()" on-close="close(result)" addresses="addresses"></contact-to-add></div>');
$templateCache.put('app/components/contact-to-add/contact-to-add.html','<div class="contact-to-add"><div class="contact-to-add__header"><div class="contact-to-add__header-title mrg__top15 mrg__bottom10">{{ \'ADD_RECIPIENTS\' | translate }}</div><div class="contact-to-add__filters"><div><label class="contacts-header__icon all-select-check mrg__right16" ng-class="{\'is-check\': vm.isAllChecked}"><input type="checkbox" style="display: none" ng-model="vm.isAllChecked" ng-change="vm.checkedAllContacts()" ng-disabled="!vm.contacts.items.length"> <svg class="all-select-check__icon"><use xlink:href="#check-box-mark"></use></svg></label></div><!-- \u0432\u044B\u0431\u043E\u0440 \u0433\u0440\u0443\u043F\u043F\u044B --><ui-select ng-model="vm.searchForm.group" class="select-list select-list--size_xs select-list--not-border-of-sides mrg__right10" style="width: 145px!important" theme="select2" search-enabled="false"><ui-select-match class="select-list__body select-list--size_xs width--all" placeholder="{{ \'INPUT_PLACEHOLDER_CHOOSE_GROUP\' | translate }}">{{ $select.selected.name }}</ui-select-match><ui-select-choices repeat="contactGroup in vm.contactGroup.items"><div ng-bind-html="contactGroup.name"></div></ui-select-choices></ui-select><!-- \u041F\u043E\u0438\u0441\u043A --> <input class="input input--size_s width--size220" type="text" placeholder="{{ \'INPUT_PLACEHOLDER_SEARCH\' | translate }}" ng-model="vm.searchForm.query"></div></div><div class="contact-to-add__contact-list"><label class="contact-to-add__item" ng-repeat="contact in vm.contacts.items | filter: vm.searchForm.query || vm.searchForm.group.name"><input class="contact-to-add__checkbox" type="checkbox" style="display: none" data-checklist-model="vm.contacts.checked" data-checklist-value="contact"><div class="contact-to-add__checkbox-body"><!-- \u0410\u0432\u0430\u0442\u0430\u0440\u043A\u0430--><div class="contact-to-add__contact-avatar"><div class="avatar avatar--settings avatar--size28 avatar--second-style"><img class="avatar__image" src="/images/avatar-personal.svg" ng-if="!vm.firstLetter && !vm.emailLetter"><div class="avatar__symbol-image" ng-if="vm.firstLetter || vm.emailLetter"><div class="avatar__first-name">{{ vm.firstLetter ? vm.firstLetter : vm.emailLetter }}</div><div class="avatar__last-name" ng-if="vm.lastLetter">{{ vm.lastLetter }}</div></div><span class="contact-to-add__check-icon"><svg class="all-select-check__icon"><use xlink:href="#check-box-mark"></use></svg></span></div></div><!-- \u0418\u043C\u044F--><div class="contact-to-add__contact-name"><span class="contact-to-add__text">{{ contact.last_name }} {{ contact.first_name }}</span></div><!-- \u0410\u0434\u0440\u0435\u0441 \u043F\u043E\u0447\u0442\u044B--><div class="contact-to-add__mail-adress"><div class="contact-to-add__text">{{ contact.emails[0].value }}</div></div></div></label></div><div class="contact-to-add__footer"><hr class="hr hr--top"><button class="btn btn--not-style btn--size_l btn--not-events color--blue width--aut" type="button" ng-click="vm.cancel()">{{ \'BTN_CANCEL\' | translate }}</button> <button class="btn btn--normal btn--size_l width--aut" type="button" ng-click="vm.add()">{{ \'ADD\' | translate }}</button></div></div>');
$templateCache.put('app/components/contact-to-add-select-menu/contact-to-add-select-menu-popover.html','<contact-to-add-select-menu tag="data" on-remove="$removeTag()" addresses="$scope.addresses" on-edit="editTag(result)"></contact-to-add-select-menu>');
$templateCache.put('app/components/contact-to-add-select-menu/contact-to-add-select-menu.html','<div class="more-list"><div class="more-list__links"><!--        <div class="more-list__link more-list__link&#45;&#45;gray">\n            <span id="email-copy">{{ vm.tag.emails[0].value }}</span>\n        </div>--> <a class="more-list__link" href ngclipboard data-clipboard-text="{{ vm.tag.emails[0].value }}" ng-click="vm.close(); $event.stopPropagation()"><span class="more-list__name">{{ \'COPY\' | translate }}</span> </a><a class="more-list__link" ng-if="!vm.tag.id" ng-click="vm.openContactAddPopup()"><span class="more-list__name">{{ \'ADD_TO_ADDRESS_BOOK\' | translate }}</span></a><hr class="hr"><a class="more-list__link" href ng-click="vm.setEdit($event)"><span class="more-list__name">{{ \'EDIT\' | translate }}</span> </a><a class="more-list__link" href ng-click="vm.selectOnlyThis()"><span class="more-list__name">{{ \'SEND_ONLY_THIS_RECIPIENT\' | translate }}</span> </a><a class="more-list__link" href ng-click="vm.remove()"><span class="more-list__name">{{ \'REMOVE_FROM_RECIPIENTS\' | translate }}</span></a></div></div>');
$templateCache.put('app/components/date-sort/date-sort.html','<div class="date-sort"><div class="date-sort__title">{{ \'LETTERS_BY_MONTH\' | translate }}</div><div class="date-sort__row"><a class="date-sort__link" href ng-click="vm.selectDefault()">2017:</a> <a class="date-sort__link" href ng-repeat="month in vm.monthList" ng-click="vm.selectDate(month.monthNumber)">{{ month.month }}</a></div></div>');
$templateCache.put('app/components/email-add/email-add-popup.html','<div><div class="popup__close" ng-click="cancel()">\xD7</div><email-add on-close="close(result)" on-cancel="cancel()"></email-add></div>');
$templateCache.put('app/components/email-add/email-add.html','<div class="email-change"><div class="email-change__header"><span class="email-change__title">\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C email</span></div><div class="email-change__content"><form name="emailForm" ng-submit="vm.changeEmail(emailForm)" novalidate><div class="email-change__input"><div class="email-change__field-input"><div class="email-change__caption-input mrg__right10"><span class="font__size13">\u041D\u043E\u0432\u044B\u0439 Email</span></div><div><input class="input input--size_s width--size220 input--fc-sh-yellow" type="email" name="email" ng-model="vm.emailForm.model.email" required></div></div></div><!--Server error--><div>{{ vm.error }}</div><div class="email-change__footer position"><hr class="hr hr--top"><button class="btn btn--normal btn--size_l width--size168 mrg__right16" type="button" ng-click="vm.cancel()">\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C</button> <button class="btn btn--yellow btn--size_l width--size168" type="submit">\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C</button></div></form></div></div>');
$templateCache.put('app/components/example/example.html','<div class="card exp-parcel-card"><div class="card__header exp-parcel-card__header"><div class="row"><div class="col-md-7 col-sm-7 col-xs-7"><div class="exp-parcel-card__name pointer"><span>{{ \'NEW_ADDRESS\'| translate }}</span></div></div><div class="col-md-5 col-sm-5 col-xs-5"><a class="exp-parcel-card__button" href ng-click="vm.close()"><img class="svg svg--size16" src="/images/svg/products-warehouse/card/close.svg"></a></div></div></div><div class="card__body exp-parcel-card__body row"><form class="col-lg-12 col-md-12 col-sm-12 col-xs-12" name="addressForm" ng-submit="vm.add(addressForm)" novalidate><div class="row"><div class="col-md-6"><label class="form__label">{{ \'ASSIGN_RECIPIENT\' | translate}}:</label><recipient-select selected="vm.addressForm.recipient" model=""></recipient-select></div><div class="col-md-6 mobile-group--size10"><label class="form__label">{{ \'COUNTRY\' | translate}}:</label><country-select selected="vm.addressForm.country" name="country" params="{id: \'USA\'}" required="true" is-no-select="true" on-selected="vm.clearAfterCountry()"></country-select><tooltip-validation ng-if="addressForm.country.$invalid && (addressForm.$submitted || addressForm.country.$touched)" tooltip-placement="bottom" tooltip-validation-errors="addressForm.country.$error" tooltip-validation-messages="vm.address.validations.country"></tooltip-validation></div><div class="col-md-6 form__group--size10"><label class="form__label">{{ \'REGION\' | translate}}:</label><region-select name="region" selected="vm.addressForm.region" country-id="vm.addressForm.country.id" required="true" disabled="vm.addressForm.country.id" on-selected="vm.clearAfterRegion()"></region-select><tooltip-validation ng-if="addressForm.region.$invalid && (addressForm.$submitted || addressForm.region.$touched) && addressForm.country.$valid" tooltip-placement="bottom" tooltip-validation-errors="addressForm.region.$error" tooltip-validation-messages="vm.address.validations.region"></tooltip-validation></div><div class="col-md-6 form__group--size10"><label class="form__label">{{ \'CITY\' | translate }}:</label><city-select name="city" selected="vm.addressForm.city" region-id="vm.addressForm.region.id" disabled="vm.addressForm.region.id" required="true" on-selected="vm.clearAfterCity()"></city-select><tooltip-validation ng-if="addressForm.city.$invalid && (addressForm.$submitted || addressForm.city.$touched) && addressForm.region.$valid" tooltip-placement="bottom" tooltip-validation-errors="addressForm.city.$error" tooltip-validation-messages="vm.address.validations.city"></tooltip-validation></div><div class="col-md-6 form__group--size10"><label class="form__label">{{ \'CITY\' | translate }}:</label><input class="form__input" type="text" name="postalCode" ng-model="vm.addressForm.postalCode" required><tooltip-validation ng-if="addressForm.postalCode.$invalid && (addressForm.$submitted || addressForm.postalCode.$touched) && addressForm.city.$valid" tooltip-placement="bottom" tooltip-validation-errors="addressForm.postalCode.$error" tooltip-validation-messages="vm.address.validations.postalCode"></tooltip-validation></div><div class="col-md-6 form__group--size10"><label class="form__label">{{ \'STREET\' | translate}}:</label><input class="form__input" type="text" name="street" ng-model="vm.addressForm.street" required><tooltip-validation ng-if="addressForm.street.$invalid && (addressForm.$submitted || addressForm.street.$touched) && addressForm.postalCode.$valid" tooltip-placement="bottom" tooltip-validation-errors="addressForm.street.$error" tooltip-validation-messages="vm.address.validations.street"></tooltip-validation></div><div class="col-md-12 form__group--size10"><label class="form__label">{{ \'HOUSE\' | translate}}, {{ \'CORPUS\' | translate}}, {{ \'APARTMENT\' | translate}} :</label><div class="row-inputs clearfix"><div class="row-inputs__item w50"><input class="form__input" type="text" name="house" ng-model="vm.addressForm.house" required><tooltip-validation ng-if="addressForm.house.$invalid && (addressForm.$submitted || addressForm.house.$touched) && addressForm.street.$valid" tooltip-placement="bottom" tooltip-validation-errors="addressForm.house.$error" tooltip-validation-messages="vm.address.validations.house"></tooltip-validation></div><div class="row-inputs__item w25"><input class="form__input" type="text" name="building" ng-model="vm.addressForm.building"><tooltip-validation ng-if="addressForm.building.$invalid && (addressForm.$submitted || addressForm.building.$touched) && addressForm.house.$valid" tooltip-placement="bottom" tooltip-validation-errors="addressForm.building.$error" tooltip-validation-messages="vm.address.validations.building"></tooltip-validation></div><div class="row-inputs__item w25"><input class="form__input" type="text" name="apartment" ng-model="vm.addressForm.apartment"><tooltip-validation ng-if="addressForm.apartment.$invalid && (addressForm.$submitted || addressForm.apartment.$touched) && addressForm.building.$valid" tooltip-placement="bottom" tooltip-validation-errors="addressForm.apartment.$error" tooltip-validation-messages="vm.address.validations.apartment"></tooltip-validation></div></div></div></div><div class="col-md-12 form__buttons__group text-center"><button class="btn-round btn-round--grey" type="button" ng-click="vm.close()">{{ \'BTN_CANCEL\' | translate }}</button> <button class="btn-round btn-round--blue" type="submit">{{ \'ADD\' | translate }}</button></div></form></div></div>');
$templateCache.put('app/components/email-change/email-change-popup.html','<div><div class="popup__close" ng-click="cancel()">\xD7</div><email-change on-close="cancel()"></email-change></div>');
$templateCache.put('app/components/email-change/email-change.html','<div class="email-change"><div class="email-change__header"><span class="email-change__title">{{ \'CHANGE_MAIL\' | translate }}</span></div><div class="email-change__content"><form name="emailForm" ng-submit="vm.changeEmail(emailForm)" novalidate><div class="email-change__input"><div class="email-change__field-input"><div class="email-change__caption-input mrg__right10"><span class="font__size13">{{ \'NEW_MAIL\' | translate }}</span></div><div><input class="input input--size_s width--size220 input--fc-sh-yellow" type="email" name="email" ng-model="vm.emailForm.model.email" required></div></div></div><!--Server error--><div>{{ vm.error }}</div><div class="email-change__footer position"><hr class="hr hr--top"><button class="btn btn--normal btn--size_l width--size168 mrg__right16" type="button" ng-click="vm.close()">{{ \'CANCEL\' | translate }}</button> <button class="btn btn--yellow btn--size_l width--size168" type="submit">{{ \'BTN_CHANGE\' | translate }}</button></div></form></div></div>');
$templateCache.put('app/components/folder-create/folder-create-popup.html','<div><div class="popup__close" ng-click="cancel()">\xD7</div><folder-create on-\u0441lose="cancel()"></folder-create></div>');
$templateCache.put('app/components/folder-create/folder-create.html','<div class="folder-create"><div class="tag-create__title">{{ \'CREATED_FOLDER\' | translate }}</div><div class="mrg__top15"><form name="form" ng-submit="vm.create(form)" novalidate><div class="folder-create__input mrg__top15"><div class="mrg__right10"><span class="font__size13">{{ \'NAME\' | translate }}</span></div><div><input class="input input--size_s width--inh input--fc-sh-yellow" name="mboxnew" ng-model="vm.form.model.mboxnew" type="text" required><!--<a class="link link&#45;&#45;dotted link&#45;&#45;violet font__size13" href="">\u0412\u043B\u043E\u0436\u0438\u0442\u044C \u0432 \u0434\u0440\u0443\u0433\u0443\u044E \u043F\u0430\u043F\u043A\u0443</a>--></div></div><div class="folder-create__btn mrg__top40"><button class="btn-y btn-y--border" type="submit">{{ \'CREATE_FOLDER\' | translate }}</button> <button class="btn-y btn-y--border" type="button" ng-click="vm.close()">{{ \'CANCEL\' | translate }}</button></div></form></div></div>');
$templateCache.put('app/components/folder-edit/folder-edit-popup.html','<div><div class="popup__close" ng-click="cancel()">\xD7</div><folder-edit model="model" on-\u0441lose="cancel()"></folder-edit></div>');
$templateCache.put('app/components/folder-edit/folder-edit.html','<div class="folder-create"><div class="tag-create__title">{{ \'RENAME_FOLDER\' | translate }}</div><div class="mrg__top15"><form name="form" ng-submit="vm.update(form)" novalidate><div class="folder-create__input mrg__top15"><div class="mrg__right10"><span class="font__size13">{{ \'NAME\' | translate }}</span></div><div><input class="input input--size_s width--inh input--fc-sh-yellow" name="mboxnew" ng-model="vm.form.model.mboxnew" type="text" required><!--<a class="link link&#45;&#45;dotted link&#45;&#45;violet font__size13" href="">\u0412\u043B\u043E\u0436\u0438\u0442\u044C \u0432 \u0434\u0440\u0443\u0433\u0443\u044E \u043F\u0430\u043F\u043A\u0443</a>--></div></div><div class="folder-create__btn mrg__top40"><button class="btn-y btn-y--border" type="submit">{{ \'SAVE\' | translate }}</button> <button class="btn-y btn-y--border" type="button" ng-click="vm.close()">{{ \'CANCEL\' | translate }}</button></div></form></div></div>');
$templateCache.put('app/components/folder-list/folder-list-popover.html','<folder-list messages="vm.messages"></folder-list>');
$templateCache.put('app/components/folder-list/folder-list.html','<div class="folder-list"><div class="folder-list__body"><!--\u041F\u043E\u043A\u0430 \u0447\u0442\u043E \u0441\u043A\u0440\u044B\u0432\u0430\u0435\u043C--><!--<input type="text">--></div><div><a class="folder-list__link" href ng-repeat="folder in vm.folders.items" ng-click="vm.move(folder)" ng-class="{\n            \'folder-list__link--sub\': folder.isSub,\n            \'folder-list__link--disabled\': vm.$state.params.mbox === folder.name\n           }"><span class="folder-list__name">{{ folder.name | translate }}</span></a></div><hr class="hr"><div><a class="folder-list__link folder-list__link--new" href ng-click="vm.openFolderCreatePopup()"><span class="folder-list__name">{{ \'NEW_FOLDER\' | translate }}...</span></a></div></div>');
$templateCache.put('app/components/inbox-header/inbox-header.html','<div class="inbox-header font-sizer--bigger-15"><div class="inbox-header__row"><div class="inbox-header__item inbox-header__item--checked" ng-if="vm.$state.current.name === \'mail.inbox\'"><div class="checkbox-y checkbox-y--size14"><label class="checkbox-y__label"><input class="checkbox-y__input" type="checkbox" ng-model="vm.isAllChecked" ng-change="vm.checkedAllMessages()" ng-disabled="!vm.messages.items.length"><div class="checkbox-y__body"><span class="checkbox-y__icon"></span></div></label></div></div><!--<div class="inbox-header__item">--><!--<a class="inbox-header__link" ui-sref="mail.compose">--><!--<span class="icon-write inbox-header__icon inbox-header__icon&#45;&#45;blue"></span>--><!--<span class="inbox-header__name">\u041D\u0430\u043F\u0438\u0441\u0430\u0442\u044C</span>--><!--</a>--><!--</div>--><div class="inbox-header__item" ng-if="vm.$state.current.name === \'mail.message\'"><a class="inbox-header__link" href ng-click="vm.goToAnswer()"><span class="icon-write inbox-header__icon inbox-header__icon--blue"></span> <span class="inbox-header__name">{{ \'REPLAY\' | translate }}</span></a></div><!--<div class="inbox-header__item" ng-if="false">--><!--<a class="inbox-header__link" ng-click="vm.syncMail()">--><!--<span class="icon-redo inbox-header__icon inbox-header__icon&#45;&#45;green"></span>--><!--<span class="inbox-header__name">\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C</span>--><!--</a>--><!--</div>--><!--ui-sref="mail.compose({id: vm.messages.checked[0].number, mbox: vm.messages.checked[0].mbox})"--><div class="inbox-header__item"><a class="inbox-header__link" href ng-class="{\'inbox-header__link--disabled link--disabled\': !vm.messages.checked.length}" ng-click="vm.goToFwd()" ng-disabled="true"><span class="icon-forward inbox-header__icon inbox-header__icon--blue"></span> <span class="inbox-header__name">{{ \'FORWARD\' | translate }}</span></a></div><div class="inbox-header__item"><a class="inbox-header__link" href ng-class="{\'inbox-header__link--disabled link--disabled\': !vm.messages.checked.length}" ng-if="vm.$state.params.mbox !== \'Trash\'" ng-click="vm.move({name: \'Trash\', caption: \'\u041A\u043E\u0440\u0437\u0438\u043D\u0430\'})"><span class="icon-bin inbox-header__icon inbox-header__icon--red"></span> <span class="inbox-header__name">{{ \'DELETE\' | translate }}</span> </a><a class="inbox-header__link" href ng-class="{\'inbox-header__link--disabled link--disabled\': !vm.messages.checked.length}" ng-if="vm.$state.params.mbox === \'Trash\'" ng-click="vm.destroy({name: \'Trash\'})"><span class="icon-bin inbox-header__icon inbox-header__icon--red"></span> <span class="inbox-header__name">{{ \'DELETE\' | translate }}</span></a></div><div class="inbox-header__item"><a class="inbox-header__link" href ng-class="{\'inbox-header__link--disabled link--disabled\': !vm.messages.checked.length}" ng-if="vm.$state.params.mbox !== \'Junk\'" ng-click="vm.move({name: \'Junk\', caption: \'\u0421\u043F\u0430\u043C\'})"><span class="icon-spam inbox-header__icon inbox-header__icon--yellow"></span> <span class="inbox-header__name">{{ \'SPAM\' | translate }}</span> </a><a class="inbox-header__link" href ng-class="{\'inbox-header__link--disabled link--disabled\': !vm.messages.checked.length}" ng-if="vm.$state.params.mbox === \'Junk\'" ng-click="vm.move({name: \'Inbox\', caption: \'\u0412\u0445\u043E\u0434\u044F\u0449\u0438\u0435\'})"><span class="icon-redo inbox-header__icon inbox-header__icon--blue"></span> <span class="inbox-header__name">{{ \'NOT_SPAM\' | translate }}</span></a></div><div class="inbox-header__item"><a class="inbox-header__link" href ng-class="{\'inbox-header__link--disabled link--disabled\': !vm.messages.checked.length}" ng-click="vm.triggerSeen()"><span class="icon-unread inbox-header__icon inbox-header__icon--blue"></span> <span class="inbox-header__name" ng-if="vm.isSeen">{{ \'NOT_READ\' | translate }}</span> <span class="inbox-header__name" ng-if="!vm.isSeen">{{ \'READ\' | translate }}</span></a></div><div class="inbox-header__item"><a class="inbox-header__link" href ng-if="vm.messages.checked.length" uib-popover-template="\'app/components/tag-list/tag-list-popover.html\'" popover-class="popover--tag-list" popover-placement="bottom" popover-animation="true" popover-trigger="\'outsideClick\'" ng-class="{\'inbox-header__link--disabled link--disabled\': !vm.messages.checked.length}"><span class="icon-tag inbox-header__icon inbox-header__icon--blue"></span><div class="inbox-header__name">{{ \'LABEL\' | translate }} <span class="icon-arrow-down inbox-header__name-icon"></span></div></a><a class="inbox-header__link inbox-header__link--disabled link--disabled" ng-if="!vm.messages.checked.length"><span class="icon-tag inbox-header__icon inbox-header__icon--blue"></span><div class="inbox-header__name">{{ \'LABEL\' | translate }} <span class="icon-arrow-down inbox-header__name-icon opacity--0"></span></div></a></div><div class="inbox-header__item"><a class="inbox-header__link" href ng-if="vm.messages.checked.length" uib-popover-template="\'app/components/folder-list/folder-list-popover.html\'" popover-class="popover--folder-list" popover-placement="bottom" popover-animation="true" popover-trigger="\'outsideClick\'"><span class="icon-folder inbox-header__icon inbox-header__icon--blue"></span><div class="inbox-header__name">{{ \'IN_FOLDER\' | translate }} <span class="icon-arrow-down inbox-header__name-icon"></span></div></a><a class="inbox-header__link inbox-header__link--disabled link--disabled" ng-if="!vm.messages.checked.length"><span class="icon-folder inbox-header__icon inbox-header__icon--blue"></span><div class="inbox-header__name">{{ \'IN_FOLDER\' | translate }} <span class="icon-arrow-down inbox-header__name-icon opacity--0"></span></div></a></div><div class="inbox-header__item"><a class="inbox-header__link" href ng-class="{\'inbox-header__link--disabled link--disabled\': !vm.messages.checked.length}" ng-click="vm.move({name: \'Archive\', caption: \'\u0410\u0440\u0445\u0438\u0432\'})"><span class="icon-archive inbox-header__icon inbox-header__icon--blue"></span> <span class="inbox-header__name">{{ \'ARCHIVED\' | translate }}</span></a></div><!--<div class="inbox-header__item">--><!--<a class="inbox-header__link" href--><!--ng-class="{\'inbox-header__link&#45;&#45;disabled\': !vm.messages.checked.length}">--><!--<span class="icon-pin inbox-header__icon inbox-header__icon&#45;&#45;blue"></span>--><!--<span class="inbox-header__name">\u0417\u0430\u043A\u0440\u0435\u043F\u0438\u0442\u044C</span>--><!--</a>--><!--</div>--><div class="inbox-header__item" ng-if="vm.$state.current.name === \'mail.message\'"><a class="inbox-header__link" href ng-class="{\'inbox-header__link--disabled link--disabled\': !vm.messages.checked.length}" uib-popover-template="\'app/components/more-list/more-list-popover.html\'" popover-class="popover--more-list" popover-placement="bottom" popover-animation="true" popover-trigger="\'outsideClick\'"><span class="icon-more inbox-header__icon inbox-header__icon--blue"></span> <span class="inbox-header__name">{{ \'YET\' | translate }}</span></a></div></div></div>');
$templateCache.put('app/components/inbox-message/inbox-message.html','<div class="inbox-message pointer" ng-class="{\'inbox-message--importmant\': vm.message.important,\n                \'inbox-message--new\': !vm.message.seen,\n                \'inbox-message--is-checked\': vm.isChecked}" ng-mouseover="vm.message.hover = true" ng-mouseleave="vm.message.hover = false" inbox-message-hover ng-click="vm.openMessage()" dnd-list dnd-drop="vm.onDrop(event, index, item)" dnddragover="inbox-message--dragover"><div ng-click="vm.setImportant(); $event.stopPropagation();"><div class="inbox-message__importance pointer" ng-class="{\'opacity--0\': !vm.message.hover && !vm.message.important}"><span class="icon-important"></span></div></div><div><div class="inbox-message__checked"><div class="checkbox-y checkbox-y--size14" ng-click="$event.stopPropagation();"><label class="checkbox-y__label"><input class="checkbox-y__input" type="checkbox" data-checklist-model="vm.messages.checked" data-checklist-value="vm.message"><div class="checkbox-y__body"><span class="checkbox-y__icon"></span></div></label></div></div></div><div><div class="inbox-message__avatar"><avatar-name class="avatar avatar--settings avatar--size30 avatar--second-style mrg__auto" name="vm.message.from" email="vm.message.fromAddress" ng-if="vm.$state.params.mbox !== \'Sent\' && vm.$state.params.mbox !== \'Drafts\'"></avatar-name><avatar-name class="avatar avatar--settings avatar--size30 avatar--second-style mrg__auto" name="vm.message.to[0].name" email="vm.message.to[0].address" ng-if="vm.$state.params.mbox === \'Sent\' || vm.$state.params.mbox === \'Drafts\'"></avatar-name></div></div><div><div class="inbox-message__name" ng-if="vm.$state.params.mbox !== \'Sent\' && vm.$state.params.mbox !== \'Drafts\'">{{ vm.message.from || vm.message.fromAddress }}</div><div class="inbox-message__name" ng-if="vm.$state.params.mbox === \'Sent\' || vm.$state.params.mbox === \'Drafts\'">{{ vm.message.to[0].address }}</div></div><div><div class="inbox-message__round pointer" ng-click="vm.setSeen(); $event.stopPropagation();"><div class="round" ng-class="{\n                        \'round--border\': vm.message.hover,\n                        \'round--yellow\': !vm.message.seen\n                     }"></div></div></div><div ng-if="vm.messages.showSearchIcon"><div class="inbox-message__folder"><span class="{{ vm.getIconByFolderName(vm.message.mbox) }}"></span></div></div><div ng-if="!vm.messages.isSearch && (vm.message.answereddb || vm.message.forwardeddb || vm.message.sdate)"><div class="inbox-message__folder" ng-if="vm.message.answereddb && !vm.message.forwardeddb"><span class="icon-replied"></span></div><div class="inbox-message__folder" ng-if="vm.message.forwardeddb && !vm.message.answereddb"><span class="icon-forwarded"></span></div><div class="inbox-message__folder" ng-if="vm.message.forwardeddb && vm.message.answereddb"><span class="icon-circle"></span></div><div class="inbox-message__folder" ng-if="vm.message.sdate"><span class="icon-clock"></span></div></div><div><div class="inbox-message__labels"><div class="label-ydx inbox-message__label" ng-repeat="tag in vm.message.tags track by $index" style="background: {{ tag.bgcolor }}">{{ tag.tag_name }}</div></div></div><div class="inbox-message__text"><div class="inbox-message__subject">{{ vm.message.Subject }}</div><div class="inbox-message__message" ng-bind-html="vm.message.body"></div></div><div class="inbox-message__attach" ng-if="vm.message.attachments"><span class="icon-icon-screpka"></span></div><div><div class="inbox-message__data"><to-date date-unix="vm.message.sdate" is-small="true" ng-if="vm.message.sdate"></to-date><to-date date="vm.message.date.date" is-small="true" ng-if="!vm.message.sdate"></to-date></div></div></div>');
$templateCache.put('app/components/folder-settings/folder-settings-popover.html','<folder-list messages="vm.messages"></folder-list>');
$templateCache.put('app/components/folder-settings/folder-settings.html','<div class="tags-settings"><div class="tags-settings__title main-title-text">{{ \'FOLDERS\' | translate }}</div><div class="tags-settings__content"><div class="tags-settings__fields"><div ng-repeat="folder in vm.folders.items"><div class="tags-settings__item mrg__bottom5" ng-class="{\'tags-settings__item--active\': folder.isSelected}" ng-click="vm.select(folder)" ng-if="!folder.isSub"><div class="tags-settings__title">{{ folder.name | translate }}</div><div class="tags-settings__values">{{ folder.messagesCount }}</div></div><div class="tags-settings__item tags-settings__attach mrg__bottom5" ng-class="{\'tags-settings__item--active\': folder.isSelected}" ng-click="vm.select(folder)" ng-if="folder.isSub"><div class="tags-settings__item mrg__bottom5"><div class="tags-settings__title">{{ folder.name | translate }}</div><div class="tags-settings__values">{{ folder.messagesCount }}</div></div></div></div></div><div class="tags-settings__control"><div class="mrg__top"><!----> <button class="btn btn--normal btn--size_sm width--size150 mrg__bottom4" ng-click="vm.openFolderCreatePopup()">{{ \'NEW_FOLDER\' | translate }}</button><!--<button class="btn btn&#45;&#45;normal btn&#45;&#45;size_sm width&#45;&#45;size150 mrg__bottom4">\u0412\u043B\u043E\u0436\u0435\u043D\u043D\u0430\u044F \u043F\u0430\u043F\u043A\u0430</button>--> <button class="btn btn--normal btn--size_sm width--size150 mrg__bottom4" ng-disabled="!vm.selected.isSub || vm.selected.name === \'Archive\'" ng-click="vm.openFolderEditPopup()">{{ \'RENAME\' | translate }}</button> <button class="btn btn--normal btn--size_sm width--size150 mrg__bottom4" ng-disabled="!vm.selected.isSub || vm.selected.name === \'Archive\'" ng-click="vm.destroy()">{{ \'DELETE\' | translate }}</button><!--<button class="btn btn&#45;&#45;normal btn&#45;&#45;size_sm width&#45;&#45;size150 mrg__bottom4">\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043F\u0440\u0430\u0432\u0438\u043B\u043E</button>--></div><!--<div class="mrg__bottom">--><!--<div class="notific">--><!--\u041F\u043E\u043C\u0435\u0442\u0438\u0442\u044C \u0432\u0441\u0435 \u043F\u0438\u0441\u044C\u043C\u0430 \u0432 \u043F\u0430\u043F\u043A\u0435 \u043A\u0430\u043A <a class="notific__link notific__link&#45;&#45;dotted"--><!--href="">\u043F\u0440\u043E\u0447\u0438\u0442\u0430\u043D\u043D\u044B\u0435</a>--><!--</div>--><!--</div>--></div></div><div class="form__field-item"></div></div>');
$templateCache.put('app/components/inbox-message-list/inbox-message-list.html','<div class="inbox-message-list"><inbox-message messages="vm.messages" message="message" ng-repeat="message in vm.messages.items track by $index"></inbox-message></div>');
$templateCache.put('app/components/lang-list/lang-list-popover.html','<lang-list messages="vm.messages" use-lang="vm.useLang" on-close="vm.isOpenLangList = false"></lang-list>');
$templateCache.put('app/components/lang-list/lang-list.html','<div class="lang-list lang-list--auto-height"><div class="lang-list__links"><a class="lang-list__link" href ng-repeat="lang in vm.lang.items" ng-click="vm.selectLang(lang)"><img class="lang-list__country" src="images/country/{{ lang.icon }}"> <span class="lang-list__name">{{ lang.lang | translate }}</span></a></div></div>');
$templateCache.put('app/components/message-alert-send/message-alert-send.html','<div class="message-alert-send" ng-show="vm.isShow"><div class="message-alert-send__container"><span class="message-alert-send__validate-icon"></span> <span class="message-alert-send__notific" ng-bind-html="vm.message | translate:{folder: (vm.folder.name | translate)} "></span> <button class="message-alert-send__close btn--not-style icon-remove-thick btn--main-mobile-color" type="button" ng-click="vm.close()"></button></div></div><!----><!----><!--<div class="message-alert-send__message" ng-bind-html="vm.message"></div>--><!--<a class="message-alert-send__close" href ng-click="vm.close()">--><!--<span class="icon-close-thin"></span>--><!--</a>--><!--<div class="pop-up-notification pop-up-notification&#45;&#45;error-message pop-up-notification&#45;&#45;vg-style"--><!--ng-class="{\'is-show\': vm.notify.isOpen}">--><!--<div class="pop-up-notification__container">--><!--<span class="pop-up-notification__validate-icon"></span>--><!--<span class="pop-up-notification__notific" ng-bind-html="vm.notify.message">--><!--\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 \u0431\u044B\u043B\u043E \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043D\u043E.--><!--&lt;!&ndash;<a class="pop-up-notification__link"> \u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u043F\u043E\u0447\u0442\u0443</a>&ndash;&gt;--><!--</span>--><!--<button class="pop-up-notification__close btn&#45;&#45;not-style icon-remove-thick btn&#45;&#45;main-mobile-color"--><!--type="button"></button>--><!--</div>--><!--<hr class="hr hr&#45;&#45;header hr&#45;&#45;size-h1">--><!--</div>-->');
$templateCache.put('app/components/more-list/more-list-popover.html','<more-list messages="vm.messages"></more-list>');
$templateCache.put('app/components/more-list/more-list.html','<div class="more-list"><div class="more-list__links"><a class="more-list__link" href ng-click="vm.print()"><span class="more-list__name">{{ \'PRINT\' | translate }}</span> </a><a class="more-list__link" ui-sref="settings.ruleAdd({\n            subject: vm.messages.checked[0].Subject,\n            email: vm.messages.checked[0].fromAddress\n        })"><span class="more-list__name">{{ \'CREATE_RULE_2\' | translate }}</span> </a><a class="more-list__link" href><span class="more-list__name">{{ \'INFO_MAIL\' | translate }}</span></a></div></div>');
$templateCache.put('app/components/paginate-button/paginate-button.html','<button class="btn-y btn-y--border btn-y--size30 btn--act-y-only-shw" ng-if="vm.data._links.next" ng-click="vm.get(vm.data._links.next.href)">{{ \'YET_LETTERS\' | translate }}</button>');
$templateCache.put('app/components/password-change/password-change-popup.html','<div><div class="popup__close" ng-click="cancel()">\xD7</div><password-change on-close="cancel()"></password-change></div>');
$templateCache.put('app/components/password-change/password-change.html','<div class="password-change"><div class="password-change__header"><span class="password-change__title">{{ \'PASSWORD_CHANGE\' | translate }}</span></div><div class="password-change__content"><form name="passwordForm" ng-submit="vm.changePassword(passwordForm)" novalidate><div class="password-change__field-input mrg__top15"><div class="password-change__caption-input mrg__right10"><span class="font__size13">{{ \'NEW_PASSWORD\' | translate }}</span></div><div class="position"><input class="input input--size_s width--size220 input--fc-sh-yellow" type="{{ vm.type ? \'text\' : \'password\' }}" name="new_password" ng-model="vm.passwordForm.model.new_password" required> <button class="password-change__view btn btn--not-style btn--size_l view-pass" type="button" ng-click="vm.type = !vm.type"></button></div></div><div class="password-change__field-input mrg__top15 mrg__bottom25"><div class="password-change__caption-input mrg__right10" class="position"><span class="font__size13">{{ \'PASSWORD_REPLY\' | translate }}</span></div><div><input class="input input--size_s width--size220 input--fc-sh-yellow" type="{{ vm.type ? \'text\' : \'password\' }}" name="new_password_conf" ng-model="vm.passwordForm.model.new_password_conf" required></div></div><div>{{ vm.error }}</div><div class="password-change__footer position"><hr class="hr hr--top"><button class="btn btn--normal btn--size_l width--size168 mrg__right16" type="button" ng-click="vm.close()">{{ \'CANCEL\' | translate }}</button> <button class="btn btn--yellow btn--size_l width--size168" type="submit">{{ \'SAVES\' | translate }}</button></div></form></div></div>');
$templateCache.put('app/components/message-save/message-save-popup.html','<div><div class="popup__close" ng-click="cancel()">\xD7</div><message-save on-close="close(result)" on-cancel="cancel()"></message-save></div>');
$templateCache.put('app/components/message-save/message-save.html','<div class="folder-create"><div class="tag-create__title">{{ \'SAVE_CHANGES\' | translate }}?</div><div class="mrg__top15"><div class="folder-create__btn mrg__top40"><button class="btn-y btn--yellow btn-y--border" type="button" ng-click="vm.close({save: true})">{{ \'SAVE_AND_GO\' | translate }}</button> <button class="btn-y btn-y--border" type="button" ng-click="vm.close()">{{ \'NOT_SAVE\' | translate }}</button> <button class="btn-y btn-y--border" type="button" ng-click="vm.cancel()">{{ \'CANCEL\' | translate }}</button></div></div></div>');
$templateCache.put('app/components/paypal-tariff-button/paypal-tariff-button.html','<paypal-button style="vm.opts.style" env="vm.opts.env" client="vm.opts.client" payment="vm.opts.payment" commit="vm.opts.commit" on-authorize="vm.opts.onAuthorize"></paypal-button>');
$templateCache.put('app/components/phone-change/phone-change-popup.html','<div><div class="popup__close" ng-click="cancel()">\xD7</div><phone-change on-close="cancel()"></phone-change></div>');
$templateCache.put('app/components/phone-change/phone-change.html','<div class="phone-change"><div class="phone-change__header"><span class="phone-change__title">{{ \'CHANGE_PHONE\' | translate }}</span></div><div class="phone-change__content"><form name="phoneForm" ng-submit="vm.changePhone(phoneForm)" novalidate><div class="phone-change__input"><div class="phone-change__field-input"><div class="phone-change__caption-input mrg__right10"><span class="font__size13">{{ \'NEW_PHONE\' | translate }}</span></div><div><input class="input input--size_s width--size220 input--fc-sh-yellow" type="text" name="phone" ng-model="vm.phoneForm.model.phone" ui-mask-placeholder ui-mask-placeholder-char="x" ui-mask="+999 999-999-999" required></div></div></div><!--Server error--><div>{{ vm.error }}</div><div class="phone-change__footer position"><hr class="hr hr--top"><button class="btn btn--normal btn--size_l width--size168 mrg__right16" type="button" ng-click="vm.close()">{{ \'CANCEL\' | translate }}</button> <button class="btn btn--yellow btn--size_l width--size168" type="submit">{{ \'BTN_CHANGE\' | translate }}</button></div></form></div></div>');
$templateCache.put('app/components/phone-to-add/phone-to-add.html','<tags-input class="tags-input tags-input--phone" ng-model="vm.phones" type="text" name="{{ vm.name }}" template="tag-phone-template" template-scope="vm" max-length="9" min-length="9" max-tags="1" replace-spaces-with-dashes="true" allow-dblclick-to-edit="true" ng-required="vm.required" autofocus="vm.isAutofocus"></tags-input><script type="text/ng-template" id="tag-phone-template"><div tag-input-phone-edit ng-dblclick="editTag($event)">\n        <div class="tag-contact font-sizer--bigger-15 tag-contact__autocomplete-item"\n             uib-popover-template="\'app/components/phone-to-add-menu/phone-to-add-menu-popover.html\'"\n             popover-class="popover--tag-list"\n             popover-placement="bottom"\n             popover-animation="true"\n             popover-trigger="\'outsideClick\'"\n             ng-if="!data.isEdit"\n             ng-class="{\'pointer\': !data.isEdit}">\n            <div class="avatar avatar--size20 mrg__right7">\n                <avatar-name name="data.text" email="data.text"></avatar-name>\n            </div>\n            <div class="tag-contact__email" ng-if="data.text">\n                {{ data.text }}\n            </div>\n        </div>\n        <div class="tag-contact-edit"\n             ng-if="data.isEdit"\n             ng-blur="setEdit($event, data, newEditTag)"\n             ng-click="$event.stopPropagation();"\n             contenteditable="true">{{ tagEdit }}</div>\n    </div></script>');
$templateCache.put('app/components/phone-to-add-menu/phone-to-add-menu-popover.html','<phone-to-add-menu tag="data" on-remove="$removeTag()" phones="$scope.phones" on-edit="editTag(result)"></phone-to-add-menu>');
$templateCache.put('app/components/phone-to-add-menu/phone-to-add-menu.html','<div class="more-list"><div class="more-list__links"><a class="more-list__link" href ng-click="vm.setEdit($event)"><span class="more-list__name">\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C</span> </a><a class="more-list__link" href ng-click="vm.remove()"><span class="more-list__name">\u0423\u0434\u0430\u043B\u0438\u0442\u044C</span></a></div></div>');
$templateCache.put('app/components/photoswipe/ng-photoswipe.html','<div><div class="pswp" tabindex="-1" role="dialog" aria-hidden="true"><div class="pswp__bg"></div><div class="pswp__scroll-wrap"><div class="pswp__container"><div class="pswp__item"></div><div class="pswp__item"></div><div class="pswp__item"></div></div><div class="pswp__ui-custom"></div><div class="pswp__ui pswp__ui--hidden"><div class="pswp__top-bar"><div class="pswp__counter"></div><button class="pswp__button pswp__button--close" title="Close (Esc)"></button> <button class="pswp__button pswp__button--share" title="Share"></button> <button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button> <button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button><div class="pswp__preloader"><div class="pswp__preloader__icn"><div class="pswp__preloader__cut"><div class="pswp__preloader__donut"></div></div></div></div></div><div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap"><div class="pswp__share-tooltip"></div></div><button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></button> <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)"></button><div class="pswp__caption"><div class="pswp__caption__center"></div></div></div></div></div></div>');
$templateCache.put('app/components/photoswipe/photoswipe.html','<div ng-photoswipe slides="vm.slidesFormatted" open="vm.open" on-close="vm.closeGallery()" template="app/components/photoswipe/ng-photoswipe.html" options="vm.opts"></div>');
$templateCache.put('app/components/profile-form/profile-form.html','<form class="form" name="form" ng-submit="vm.save(form)"><div class="personal-info__user-name mrg__bottom45"><div class="personal-info__user-info-title main-title-text font__size16 font__bold">{{ \'YOUR_NAME\' | translate }}</div><div class="forms__field-item"><div class="field-style mrg__right18"><!--<label class="field-style__title">\u0412\u0430\u0448\u0435 \u0438\u043C\u044F:</label>--> <input class="input input--size_s width--inh font__size14" type="text" placeholder="{{ \'INPUT_PLACEHOLDER_YOUR_NAME\' | translate }}" ng-model="vm.profileForm.user_name"> <span class="notific mrg__top5 font__size15">{{ \'YOUR_LOGIN_NOT_CHANGED\' | translate }}</span></div></div></div><!--\n    <div class="personal-info__user-info-title main-title-text">{{ \'PERSONAL_DATA\' | translate }}</div>\n\n    <div class="form__fields">\n        <div class="form__field-item">\n            <div class="field-style field-style--max-wd260 mrg__right18">\n                <label class="field-style__title">{{ \'NAME_AND_MIDDLE_NAME\' | translate }}:</label>\n                <input class="input input--size_l width--inh" type="text"\n                       placeholder="{{ \'INPUT_PLACEHOLDER_YOUR_NAME\' | translate }}"\n                       ng-model="vm.profileForm.first_name"/>\n            </div>\n\n            <div class="field-style field-style--max-wd260">\n                <label class="field-style__title hide-elm">&nbsp;&nbsp;</label>\n                <input class="input input--size_l width--inh" type="text"\n                       placeholder="{{ \'INPUT_PLACEHOLDER_YOUR_MIDDLE_NAME\' | translate }}"\n                       ng-model="vm.profileForm.last_name"/>\n            </div>\n        </div>\n        <!--<div class="form__field-item">--><!--<div class="field-style field-style&#45;&#45;max-wd260 mrg__right18">--><!--<label class="field-style__title">\u0418\u043C\u044F \u043D\u0430 mail.cz:</label>--><!--<div class="select select_mode_radio select_theme_islands select_size_l i-bem width&#45;&#45;inh"--><!--data-bem=\'{"select":{"name":"select2"}}\'>--><!--<input class="select__control" type="hidden" name="select2"--><!--value="2" autocomplete="off"/>--><!--<button class="button button_size_l button_theme_islands button__control select__button i-bem"--><!--data-bem=\'{"button":{}}\' role="listbox" type="button"--><!--aria-owns="uniq148861608057241 uniq148861608057242 uniq148861608057243"--><!--aria-labelledby="uniq148861608057244">--><!--<span class="button__text"--><!--id="uniq148861608057244">@mail.cz</span>--><!--<span class="icon select__tick"></span>--><!--</button>--><!--<div class="popup popup_target_anchor popup_theme_islands popup_autoclosable i-bem"--><!--data-bem=\'{"popup":{"directions":["bottom-left","bottom-right","top-left","top-right"]}}\'--><!--aria-hidden="true">--><!--<div class="menu menu_size_l menu_theme_islands menu_mode_radio menu__control select__menu i-bem"--><!--data-bem=\'{"menu":{}}\'>--><!--<div class="menu__item menu__item_theme_islands"--><!--data-bem=\'{"menu__item":{"val":1}}\' role="option"--><!--id="uniq148861608057241" aria-checked="false">@mail.cz--><!--</div>--><!--<div class="menu__item menu__item_checked menu__item_theme_islands"--><!--data-bem=\'{"menu__item":{"val":2}}\' role="option"--><!--id="uniq148861608057242" aria-checked="true">@mail.cz--><!--</div>--><!--<div class="menu__item menu__item_theme_islands"--><!--data-bem=\'{"menu__item":{"val":3}}\' role="option"--><!--id="uniq148861608057243" aria-checked="false">@mail.cz--><!--</div>--><!--</div>--><!--</div>--><!--</div>--><!--</div>--><!--<div class="field-style field-style&#45;&#45;max-wd260">--><!--<label class="field-style__title hide-elm">&nbsp;&nbsp; </label>--><!--<input class="input input&#45;&#45;size_l width&#45;&#45;inh"--><!--type="text"--><!--name="username"--><!--placeholder="\u0412\u0430\u0448 \u043B\u043E\u0433\u0438\u043D \u043F\u043E\u0447\u0442\u044B"--><!--ng-model="vm.profileForm.username"/>--><!--</div>--><!--<div class="notific mrg__top7">--><!--\u042D\u0442\u043E \u0438\u043C\u044F \u0441\u043C\u043E\u0433\u0443\u0442 \u0432\u0438\u0434\u0435\u0442\u044C \u0434\u0440\u0443\u0433\u0438\u0435 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0438 Mail.cz \u2014 \u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, \u0438\u043C \u0431\u0443\u0434\u0435\u0442--><!--\u043F\u043E\u0434\u043F\u0438\u0441\u0430\u043D\u0430 \u0432\u0430\u0448\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430--><!--</div>--><!--</div>--><!--\n\n    <div class="form__field-item position--stat">\n\n        <div class="field-style field-style--max-wd260 mrg__right18">\n            <label class="field-style__title">{{ \'DATE_BIRTH\' | translate }}:</label>\n\n            <div class="field-style__container width--inh">\n\n                <input class="input input--size_l width--size65"\n                       type="text"\n                       placeholder="{{ \'DAY\' | translate }}"\n                       ng-model="vm.profileForm.bDay">\n\n                    <ui-select ng-model="vm.profileForm.bMonth"\n                               class="select-list select-list--size_l select-list--not-border-of-sides width-inh "\n                               theme="select2"\n                               title="Choose a person">\n                        <ui-select-match\n                                class="select-list__body select-list--size_l  width-inh"\n                                placeholder="{{ \'MONTH\' | translate }}">\n                            {{ $select.selected }}\n                        </ui-select-match>\n                        <ui-select-choices repeat="month in vm.monthList">\n                            <div ng-bind-html="month"></div>\n                        </ui-select-choices>\n                    </ui-select>\n\n                    <input class="input input--size_l width--size65"\n                           type="name"\n                           placeholder="{{ \'YEAR\' | translate }}"\n                           ng-model="vm.profileForm.bYear">\n                </div>\n            </div>\n\n            <div class="field-style field-style--max-wd260">\n                <label class="field-style__title">{{ \'FLOOR\' | translate }}:</label>\n                <div class="radiobutton main-switch radiobutton--size_l width--inh">\n                    <input class="main-switch__input"\n                           type="radio"\n                           name="gender"\n                           value="1"\n                           ng-model="vm.profileForm.gender">\n                    <span class="radiobutton--size_l main-switch__btn main-switch__btn--firs width--inh">{{ \'MALE\' | translate }}</span>\n                    <input class="main-switch__input"\n                           type="radio"\n                           name="gender"\n                           value="2"\n                           ng-model="vm.profileForm.gender">\n                    <span class="radiobutton--size_l main-switch__btn main-switch__btn--last width--inh">{{ \'FEMALE\' | translate }}</span>\n                </div>\n\n            </div>\n        </div>\n\n        <div class="form__field-item">\n            <div class="field-style field-style--max-wd260 mrg__right18">\n                <label class="field-style__title">{{ \'COUNTRY\' | translate }}</label>\n\n                <ui-select ng-model="vm.profileForm.country"\n                           class="select-list select-list--size_l width-inh"\n                           theme="select2"\n                           title="Choose a person">\n                    <ui-select-match\n                            class="select-list__body select-list--size_l width-inh"\n                            placeholder="{{ \'COUNTRY\' | translate }}">\n                        {{ $select.selected }}\n                    </ui-select-match>\n                    <ui-select-choices repeat="country in vm.countryList">\n                        <div ng-bind-html="country"></div>\n                    </ui-select-choices>\n                </ui-select>\n\n            </div>\n\n            <div class="field-style field-style--max-wd260">\n                <label class="field-style__title">{{ \'CITY\' | translate }}</label>\n                <input class="input input--size_l width--inh" type="text"\n                       placeholder="{{ \'INPUT_PLACEHOLDER_YOUR_NAME\' | translate }}"\n                       ng-model="vm.profileForm.city"/>\n            </div>\n        </div>\n\n           <p class="personal-info__user-info-title main-title-text">\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043E\u0431 \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u0435\u043B\u0435</p>\n\n        <div class="forms__field-item">\n            <div class="field-style field-style--max-wd260 mrg__right18">\n                <label class="field-style__title">\u0412\u0430\u0448\u0435 \u0438\u043C\u044F:</label>\n                <input class="input input--size_l width--inh" type="text" placeholder="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043C\u044F"\n                       ng-model="vm.profileForm.user_name"/>\n            </div>\n        </div>\n        --><!--\n        <div class="forms__field-item mrg__top40">\n\n            <div class="field-style field-style--max-wd260 mrg__right18">\n\n                <button class="btn btn--normal btn--size_l width--size168 float--left"\n                        type="button"\n                        ng-click="vm.resetForm()">{{ \'CANCEL\' | translate }}\n                </button>\n\n            </div>\n\n            <div class="field-style field-style--max-wd260">\n\n                <button class="btn btn--size_l btn--yellow width--size168 float--right"\n                        type="submit">{{ \'SAVE\' | translate }}\n                </button>\n\n            </div>\n\n        </div>\n        <div class="notific font__center mrg__top10 mrg__bottom45">\n            {{ \'PROFILE_FORM_TEXT_1\' | translate }}\n            <br>\n            <a class="notific__link" href="">{{ \'PROFILE_FORM_TEXT_2\' | translate }}.</a>\n        </div>\n    </div>\n    --></form>');
$templateCache.put('app/components/search-help/search-help-popover.html','<div class="search-filters"><div class="search-filters__item"><ui-select ng-model="vm.searchParts.selected" search-enabled="false" class="select-list select-list--size_m select-list--not-border-of-sides width--inh" theme="select2" on-select="vm.search()"><ui-select-match class="select-list__body select-list--size_m width--inh" placeholder="{{ \'INPUT_PLACEHOLDER_SEARCH_ALL_LETTERS\' | translate }}">{{ $select.selected.name }}</ui-select-match><ui-select-choices repeat="item in vm.searchParts.list track by $index"><div ng-bind-html="item.name"></div></ui-select-choices></ui-select></div><div class="search-filters__item"><ui-select ng-model="vm.folders.selected" class="select-list select-list--size_m select-list--not-border-of-sides width--inh" search-enabled="false" theme="select2" on-select="vm.search()"><ui-select-match class="select-list__body select-list--size_m width--inh">{{ $select.selected.caption }}</ui-select-match><ui-select-choices repeat="item in vm.folders.items track by $index"><div ng-class="{\'mrg__left10\': item.isSub}" ng-bind-html="item.caption"></div></ui-select-choices></ui-select></div><div class="search-filters__item"><ui-select ng-model="vm.tags.selected" search-enabled="false" class="select-list select-list--size_m select-list--not-border-of-sides width--inh" theme="select2" on-select="vm.search()"><ui-select-match class="select-list__body select-list--size_m width--inh" placeholder="{{ \'INPUT_PLACEHOLDER_SEARCH_ALL_LETTERS\' | translate }}">{{ $select.selected.tag_name }}</ui-select-match><ui-select-choices repeat="item in vm.tags.items track by $index">{{ item.tag_name }}</ui-select-choices></ui-select></div><div class="search-filters__item"><label class="checkbox-y__label checkbox-y checkbox-y--size15" for="isAttach"><input class="checkbox-y__input" id="isAttach" type="checkbox" name="isAttach" ng-model="vm.searchForm.isAttach" ng-change="vm.search()" value="important"><div class="checkbox-y__body"><span class="checkbox-y__icon"></span></div><span class="checkbox__text" role="presentation">{{ \'SEARCH_IS_ATTACH\' | translate }}</span></label></div><div ng-if="vm.isOpenDate"><div class="search-filters__item"><div class="">{{ \'SEARCH_IS_ARE_DATE\' | translate }}</div></div><div class="search-filters__item"><div class="search-filters__exact-date"><div class="dropdown"><a class="dropdown-toggle" id="dLabel" role="button" data-toggle="dropdown" data-target=".dropdown1" href="#"><input class="input input&--size_sm input--fc-sh-yellow width--all" type="text" name="start" placeholder="01.01.2000" ng-change="vm.search()" ng-model="vm.date.start | date:\'dd.MM.yyyy\'"></a><div class="dropdown-menu dropdown-menu--calendar" role="menu" aria-labelledby="dLabel"><datetimepicker class="ui-calendar" data-ng-model="vm.date.start" data-datetimepicker-config="{\n                                            dropdownSelector: \'.dropdown-toggle\',\n                                            minView: \'day\'\n                                        }"></datetimepicker></div></div><span class="search-filters__splitter"></span><div class="dropdown"><a class="dropdown-toggle" id="dLabel" role="button" data-toggle="dropdown" data-target=".dropdown2" href="#"><input class="input input&--size_sm input--fc-sh-yellow width--all" type="text" name="to" placeholder="01.01.2000" ng-change="vm.search()" ng-model="vm.date.end | date:\'dd.MM.yyyy\'"></a><div class="dropdown-menu dropdown-menu-right dropdown-menu--calendar" role="menu" aria-labelledby="dLabel"><datetimepicker class="ui-calendar" data-ng-model="vm.date.end" data-datetimepicker-config="{\n                                            dropdownSelector: \'.dropdown-toggle\',\n                                            minView: \'day\'\n                                        }"></datetimepicker></div></div></div></div></div><div class="search-filters__item"><a class="search-filters__link" ng-if="!vm.isOpenDate" ng-click="vm.isOpenDate = true; $event.stopPropagation();">{{ \'SEARCH_IS_ARE_DATE\' | translate }}</a> <a class="search-filters__link" ng-if="vm.isOpenDate" ng-click="vm.isOpenDate = false; $event.stopPropagation();">{{ \'LETTERS_BY_MONTH\' | translate }}</a></div></div>');
$templateCache.put('app/components/search-help/search-help.html','<div class="search-mail search-mail--open"><form name="searchForm" ng-submit="vm.search(searchForm)" novalidate><div class="search-mail__body"><div class="search-mail__group"><input class="input input--size_m input--fc-sh-yellow search-mail__input font--inh" placeholder="{{ \'INPUT_PLACEHOLDER_SEARCH_QUERY\' | translate }}" type="text" name="search" ng-model="vm.searchForm.model.q" ng-change="vm.onSearchChange()"><div class="position height--all"><button class="btn-y btn-y--border search-mail__button font--inh height--all" type="submit">{{ \'SEARCH\' | translate }}</button></div></div></div></form></div>');
$templateCache.put('app/components/settings-menu/settings-menu.html','<div class="settings-menu font-sizer--bigger-15"><div class="settings-menu__body"><a class="settings-menu__title font-sizer--bigger-18" ui-sref="settings.main">{{ \'ALL_SETTING\' | translate }}</a><div class="settings-menu__row mrg__top20"><div class="row row--size15 mrg__top20"><div class="col-xs-6 flex--inline align-items--cn"><span class="icon-profile color--blue font__size18 width--aut"></span> <a class="settings-menu__link" ui-sref="settings.main">{{ \'MANAGE_ACCOUNT\' | translate }}</a></div><div class="col-xs-6 flex--inline align-items--cn"><span class="icon-rules color--green font__size18 width--aut"></span> <a class="settings-menu__link" ui-sref="settings.rules">{{ \'PROCESSING_RULES\' | translate }}</a></div></div><div class="row row--size15 mrg__top20"><div class="col-xs-6 flex--inline align-items--cn"><span class="icon-folder-star color--yellow font__size18 width--aut"></span> <a class="settings-menu__link" ui-sref="settings.folders">{{ \'FOLDERS\' | translate }}</a></div><div class="col-xs-6 flex--inline align-items--cn"><span class="icon-tag-star color--yellow font__size18 width--aut"></span> <a class="settings-menu__link" ui-sref="settings.tags">{{ \'TAGS\' | translate }}</a></div></div><div class="row row--size15 mrg__top20"><div class="col-xs-6 flex--inline align-items--cn"><span class="icon-contacts color--green font__size18 width--aut"></span> <a class="settings-menu__link" ui-sref="settings.contacts">{{ \'SETTINGS_CONTACTS\' | translate }}</a></div><div class="col-xs-6 flex--inline align-items--cn"><span class="icon-other-mails color--blue font__size18 width--aut"></span> <a class="settings-menu__link" ui-sref="settings.accounts">{{ \'COLLECT_MAIL_FROM_OTHER_BOX\' | translate }}</a></div></div><!--<div class="row row&#45;&#45;size15 mrg__top20">--><!--<div class="col-xs-6 flex&#45;&#45;inline align-items&#45;&#45;cn">--><!--<span class="icon-mail-space color&#45;&#45;green font__size18 width&#45;&#45;aut"></span>--><!--<a class="settings-menu__link" ui-sref="storage">--><!--\u0423\u0432\u0435\u043B\u0438\u0447\u0435\u043D\u0438\u0435 \u043E\u0431\u044C\u0435\u043C\u0430 \u043F\u043E\u0447\u0442\u044B--><!--</a>--><!--</div>--><!--</div>--></div></div></div>');
$templateCache.put('app/components/sign-create/sign-create-popup.html','<div><div class="popup__close" ng-click="cancel()">\xD7</div><sign-create on-cancel="cancel()" on-close="close(result)"></sign-create></div>');
$templateCache.put('app/components/sign-create/sign-create.html','<div class="sign-create"><div class="sign-create__title">\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043F\u043E\u0434\u043F\u0438\u0441\u044C</div><div class="mrg__top15"><form name="form" ng-submit="vm.create(form)" novalidate><div><textarea class="textarea textarea--normal width--inh" name="sign" ng-model="vm.form.model.sign" rows="3"></textarea></div><div class="sign-create__btn mrg__top40"><button class="btn-y btn-y--border" type="submit">{{ \'SAVE\' | translate }}</button> <button class="btn-y btn-y--border" type="button" ng-click="vm.close()">{{ \'CANCEL\' | translate }}</button></div></form></div></div>');
$templateCache.put('app/components/sign-list/sign-list-popover.html','<sign-list signs="vm.signs" on-select="vm.pasteSignFromList(result); vm.getSigns()" on-close="vm.isSignPopoverOpen = false;"></sign-list>');
$templateCache.put('app/components/sign-list/sign-list.html','<div class="sign-list"><div class="sign-list__header flex"><button class="btn btn--normal btn--size_s mrg__auto" type="button" ng-click="vm.openCreateSignPopup()">{{ \'ADD_SIGNATURE\' | translate }}</button></div><hr class="hr"><div class="sign-list__items"><a class="sign-list__item link link--black" href ng-repeat="sign in vm.sign.items" ng-click="vm.select(sign)"><span class="sign-list__name" ng-bind-html="sign.sign"></span></a></div></div>');
$templateCache.put('app/components/spinner/spinner.html','<div class="spinner" ng-show="vm.isOpen"></div>');
$templateCache.put('app/components/search-mail/search-mail-popover.html','<div class="search-filters"><div class="search-filters__item"><ui-select ng-model="vm.searchParts.selected" search-enabled="false" class="select-list select-list--size_m select-list--not-border-of-sides width--inh" theme="select2" on-select="vm.search()"><ui-select-match class="select-list__body select-list--size_m width--inh" placeholder="{{ \'INPUT_PLACEHOLDER_SEARCH_ALL_LETTERS\' | translate }}">{{ $select.selected.name | translate }}</ui-select-match><ui-select-choices repeat="item in vm.searchParts.list track by $index"><div ng-bind="item.name | translate"></div></ui-select-choices></ui-select></div><div class="search-filters__item"><ui-select ng-model="vm.folders.selected" class="select-list select-list--size_m select-list--not-border-of-sides width--inh" search-enabled="false" theme="select2" on-select="vm.search()"><ui-select-match class="select-list__body select-list--size_m width--inh">{{ $select.selected.name | translate }}</ui-select-match><ui-select-choices repeat="item in vm.folders.items track by $index"><div ng-class="{\'mrg__left10\': item.isSub}" ng-bind-html="item.name | translate"></div></ui-select-choices></ui-select></div><div class="search-filters__item"><ui-select ng-model="vm.tags.selected" search-enabled="false" class="select-list select-list--size_m select-list--not-border-of-sides width--inh" theme="select2" on-select="vm.search()"><ui-select-match class="select-list__body select-list--size_m width--inh" placeholder="{{ \'INPUT_PLACEHOLDER_SEARCH_ALL_LETTERS\' | translate }}">{{ $select.selected.tag_name | translate }}</ui-select-match><ui-select-choices repeat="item in vm.tags.items track by $index">{{ item.tag_name | translate }}</ui-select-choices></ui-select></div><div class="search-filters__item"><label class="checkbox-y__label checkbox-y checkbox-y--size15" for="isAttach"><input class="checkbox-y__input" id="isAttach" type="checkbox" name="isAttach" ng-model="vm.searchForm.isAttach" ng-change="vm.search()" value="important"><div class="checkbox-y__body"><span class="checkbox-y__icon"></span></div><span class="checkbox__text" role="presentation">{{ \'SEARCH_IS_ATTACH\' | translate }}</span></label></div><div ng-if="vm.isOpenDate"><div class="search-filters__item"><div class="">{{ \'SEARCH_IS_ARE_DATE\' | translate }}</div></div><div class="search-filters__item"><div class="search-filters__exact-date"><div class="dropdown"><a class="dropdown-toggle" id="dLabel" role="button" data-toggle="dropdown" data-target=".dropdown1" href="#"><input class="input input&--size_sm input--fc-sh-yellow width--all" type="text" name="start" placeholder="01.01.2000" ng-change="vm.search()" ng-model="vm.date.start | date:\'dd.MM.yyyy\'"></a><div class="dropdown-menu dropdown-menu--calendar" role="menu" aria-labelledby="dLabel"><datetimepicker class="ui-calendar" data-ng-model="vm.date.start" data-datetimepicker-config="{\n                                            dropdownSelector: \'.dropdown-toggle\',\n                                            minView: \'day\'\n                                        }"></datetimepicker></div></div><span class="search-filters__splitter"></span><div class="dropdown"><a class="dropdown-toggle" id="dLabel" role="button" data-toggle="dropdown" data-target=".dropdown2" href="#"><input class="input input&--size_sm input--fc-sh-yellow width--all" type="text" name="to" placeholder="01.01.2000" ng-change="vm.search()" ng-model="vm.date.end | date:\'dd.MM.yyyy\'"></a><div class="dropdown-menu dropdown-menu-right dropdown-menu--calendar" role="menu" aria-labelledby="dLabel"><datetimepicker class="ui-calendar" data-ng-model="vm.date.end" data-datetimepicker-config="{\n                                            dropdownSelector: \'.dropdown-toggle\',\n                                            minView: \'day\'\n                                        }"></datetimepicker></div></div></div></div></div><div class="search-filters__item"><a class="search-filters__link" ng-if="!vm.isOpenDate" ng-click="vm.isOpenDate = true; $event.stopPropagation();">{{ \'SEARCH_IS_ARE_DATE\' | translate }}</a> <a class="search-filters__link" ng-if="vm.isOpenDate" ng-click="vm.isOpenDate = false; $event.stopPropagation();">{{ \'LETTERS_BY_MONTH\' | translate }}</a></div></div>');
$templateCache.put('app/components/search-mail/search-mail.html','<div class="search-mail search-mail--open"><form name="searchForm" ng-submit="vm.search(searchForm)" novalidate><div class="search-mail__body"><div class="search-mail__group"><div class="position width--all"><input class="input input--size_m input--fc-sh-yellow search-mail__input font--inh" placeholder="{{ \'INPUT_PLACEHOLDER_SEARCH_QUERY\' | translate }}" type="text" name="search" ng-model="vm.searchForm.model.search" ng-change="vm.onSearchChange()" ng-click="open()"> <button class="search-mail__filter btn btn--size_m btn--not-style btn--not-events font__size10" type="button" ng-class="{\'is-open\': vm.isOpenFilters}" uib-popover-template="\'app/components/search-mail/search-mail-popover.html\'" popover-class="popover--search-filters popover--no-arrow" popover-placement="bottom" popover-animation="true" popover-is-open="vm.isOpenFilters" popover-trigger="\'outsideClick\'"><span class="icon-select-arrow"></span></button></div><div class="position height--all"><button class="btn-y btn-y--border search-mail__button font--inh height--all height--min30" type="submit">{{ \'SEARCH\' | translate }}</button></div><!--<button class="btn-y btn-y&#45;&#45;border search-mail__button font&#45;&#45;inh"\n                        type="button"\n                        ng-if="!isOpen"\n                        ng-click="open()">\n\n                    {{ \'SEARCH\' | translate }}\n                </button>--> <button class="search-mail__reset btn btn--size_m btn--not-style btn--not-events" type="button" ng-if="isOpen && vm.searchForm.model.search && vm.searchForm.model.search !== \'\'" ng-click="vm.searchForm.model.search = \'\'"><span class="icon-close-thin"></span></button></div></div></form></div>');
$templateCache.put('app/components/storage-popup/storage-popup.html','<div><div class="popup__close" ng-click="vm.close()">\xD7</div><div class="flex just-content--center"><div class="storage"><div class="storage__plans"><div class="storage__header"><span class="font__center">{{ \'STORAGE_HEADER\' | translate }}</span></div><div class="storage__content mrg__top16"><div class="storage__item" ng-repeat="tariff in vm.tariff.items" ng-class="{\'is-check\': vm.tariff.selected === tariff}"><label ng-click="vm.createQuota(tariff)"><div class="storage__space-pie" ng-class="{\'storage__space-pie--yellow-orange\': vm.tariff.selected === tariff,\n                                \'storage__space-pie--light-blue\': vm.tariff.selected !== tariff}"><span class="storage__volume-text">{{ tariff.name }}</span></div><div class="storage__plan-price">{{ tariff.price }} {{ \'PRICE_PLAN\' | translate }}</div><div class="storage__chose-plan"><span class="icon-check-box-mark"></span></div><input style="display: none" name="tariff" type="radio" ng-model="vm.tariff.selected" ng-value="tariff"></label><div class="storage__pay-button radiobutton main-switch radiobutton--size_s width--size140 mrg__auto" ng-if="vm.tariff.selected === tariff"><input class="main-switch__input" type="radio" name="payType" value="sms" ng-model="vm.payType"> <span class="radiobutton--size_s main-switch__btn main-switch__btn--firs width--inh">SMS</span> <input class="main-switch__input" type="radio" name="payType" value="paypal" ng-model="vm.payType"> <span class="radiobutton--size_s main-switch__btn main-switch__btn--last width--inh">PayPal</span></div></div></div><div class="storage__footer"><span class="font__center mrg__top15" ng-if="vm.payType === \'sms\' && vm.tariff.selected">{{ \'STORAGE_TEXT_1\' | translate }}<b>&nbsp;{{ vm.tariff.selected.name }} &nbsp;</b>{{ \'STORAGE_TEXT_3\' | translate }}<b> "Mail {{ vm.quota.result.code }}"&nbsp;</b>{{ \'STORAGE_TEXT_4\' | translate }} {{ vm.tariff.selected.phone }}. {{ \'STORAGE_TEXT_5\' | translate }} {{ vm.tariff.selected.price }} {{ \'STORAGE_TEXT_6\' | translate }}.</span></div><div class="storage__footer" ng-if="vm.payType === \'paypal\' && vm.tariff.selected"><div class=""><paypal-tariff-button tariff="vm.tariff.selected"></paypal-tariff-button></div></div><!--        <div ng-if="vm.payType === \'sms\' && vm.tariff.selected">\n                            <form name="smsForm" ng-submit="vm.setSms()" novalidate>\n                                <input class="input input&#45;&#45;size_l"\n                                       type="text"\n                                       ng-model="vm.smsForm.model.code">\n                                <button>\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C</button>\n                            </form>\n                        </div>--></div><div class="storage__now-space"><div class="storage__header"><span>{{ \'MAY_SPACE\' | translate }}</span></div><div class="storage__content"><div class="storage__now-item"><div class="storage__space-pie pie storage__space-pie--my-space mrg__auto" storage-graph></div><div class="storage__free"><span ng-if="vm.user.profile.quota < 1000">{{ vm.isNominalValue(vm.user.profile.quota) ? (vm.user.profile.quota | number:0) : (vm.user.profile.quota | number:3) }} MB </span><span ng-if="vm.user.profile.quota >== 1000">{{ vm.isNominalValue(vm.user.profile.quota / 100) ? (vm.user.profile.quota / 1000 | number:0) : (vm.user.profile.quota / 1000 | number:3) }} GB</span></div><div class="storage__footer mrg__top15"><div class="storage__footer-content"><span ng-if="vm.user.profile.quota < 1000">{{ vm.isNominalValue(vm.user.profile.freeQuota) ? (vm.user.profile.freeQuota | number:0) : (vm.user.profile.freeQuota | number:3) }} MB </span><span ng-if="vm.user.profile.quota >== 1000">{{ vm.isNominalValue(vm.user.profile.freeQuota / 1000) ? (vm.user.profile.freeQuota / 1000 | number:0) : (vm.user.profile.freeQuota / 1000 | number:3) }} GB </span><span class="font__size15">{{ \'STORAGE_USED_SPACE\' | translate }}</span><div class="storage__hr"></div></div><div class="storage__footer-content storage__footer-content--green"><span ng-if="vm.user.profile.quota < 1000">{{ vm.isNominalValue(vm.user.profile.usedQuota) ? (vm.user.profile.usedQuota | number:0) : (vm.user.profile.usedQuota | number:3) }} MB </span><span ng-if="vm.user.profile.quota >== 1000">{{ vm.isNominalValue(vm.user.profile.usedQuota / 1000) ? (vm.user.profile.usedQuota / 1000 | number:0) : (vm.user.profile.usedQuota / 1000 | number:3) }} GB </span><span class="font__size15">{{ \'STORAGE_USED\' | translate }}</span></div></div></div></div></div></div></div></div>');
$templateCache.put('app/components/tag-create/tag-create-popup.html','<div><div class="popup__close" ng-click="cancel()">\xD7</div><tag-create messages="messages" on-close="cancel()"></tag-create></div>');
$templateCache.put('app/components/tag-create/tag-create.html','<div class="tag-create"><div class="tag-create__title">{{ \'CREATE_LABEL\' | translate }}</div><div class="mrg__top15"><form name="paletteForm" ng-submit="vm.create(paletteForm)" novalidate><div class="tag-create__input mrg__top15"><div class="mrg__right10"><span class="font__size13">{{ \'NAME\' | translate }}</span></div><div><input class="input input--size_s width--inh input--fc-sh-yellow" type="text" name="tag_name" ng-model="vm.paletteForm.model.tag_name" required></div></div><div class="palette-list tag-create__palette mrg__top30"><input type="hidden" name="palette" ng-model="vm.paletteForm.model.bgcolor" required><div class="palette-list__item" style="background-color: {{ palette.color }}" ng-repeat="palette in vm.palette.items track by $index" ng-click="vm.select(palette)"><span class="palette-list__icon icon-check-box-mark" ng-if="palette.color === vm.palette.selected.color"></span></div></div><div class="tag-create__btn mrg__top40"><button class="btn-y btn-y--border" type="submit">{{ \'CREATE_TAG\' | translate }}</button> <button class="btn-y btn-y--border" type="button" ng-click="vm.close()">{{ \'CANCEL\' | translate }}</button></div></form></div></div>');
$templateCache.put('app/components/tag-edit/tag-edit-popup.html','<div><div class="popup__close" ng-click="cancel()">\xD7</div><tag-edit model="model" on-close="cancel()"></tag-edit></div>');
$templateCache.put('app/components/tag-edit/tag-edit.html','<div class="tag-create"><div class="tag-create__title">{{ \'CREATE_LABEL\' | translate }}/div><div class="mrg__top15"><form name="paletteForm" ng-submit="vm.update(paletteForm)" novalidate><div class="tag-create__input mrg__top15"><div class="mrg__right10"><span class="font__size13">{{ \'NAME\' | translate }}</span></div><div><input class="input input--size_s width--inh input--fc-sh-yellow" type="text" name="tag_name" ng-model="vm.paletteForm.model.tag_name" required></div></div><div class="palette-list tag-create__palette mrg__top30"><input type="hidden" name="palette" ng-model="vm.paletteForm.model.bgcolor" required><div class="palette-list__item" style="background-color: {{ palette.bgcolor }}" ng-repeat="palette in vm.palette.items track by $index" ng-click="vm.select(palette)"><span class="palette-list__icon icon-check-box-mark" ng-if="palette.bgcolor === vm.palette.selected.bgcolor"></span></div></div><div class="tag-create__btn mrg__top40"><button class="btn-y btn-y--border" type="submit">{{ \'RELOAD_LABEL\' | translate }}</button> <button class="btn-y btn-y--border" type="button" ng-click="vm.close()">{{ \'CANCEL\' | translate }}</button></div></form></div></div></div>');
$templateCache.put('app/components/tag-settings/tag-settings-popover.html','<folder-list messages="vm.messages"></folder-list>');
$templateCache.put('app/components/tag-settings/tag-settings.html','<div class="tags-settings"><div class="tags-settings__title main-title-text">{{ \'TAGS\' | translate }}</div><div class="tags-settings__content"><div class="tags-settings__fields"><div class="tags-settings__fields__title-block"><div class="tags-settings__item mrg__bottom5"><div class="tags-settings__title">{{ \'IMPORTANT\' | translate }}</div><div class="tags-settings__values">10</div></div><div class="tags-settings__item mrg__bottom5"><div class="tags-settings__title">{{ \'UNREAD\' | translate }}</div><div class="tags-settings__values">2</div></div></div><div class="tags-settings__item" ng-repeat="tag in vm.tags.items" ng-class="{\'tags-settings__item--active\': tag.isSelected}" ng-click="vm.select(tag)"><div class="label-ydx inbox-message__label" style="background: {{ tag.bgcolor }}">{{ tag.tag_name }}</div><!--<div class="tags-settings__values">1 / 2</div>--></div></div><div class="tags-settings__control"><div class="mrg__top"><!----> <button class="btn btn--normal width--size150 mrg__bottom4 btn--size_sm" ng-click="vm.openTagCreatePopup()">{{ \'NEW_LABEL\' | translate }}</button> <button class="btn btn--normal width--size150 mrg__bottom4 btn--size_sm" ng-click="vm.openTagEditPopup()" ng-disabled="!vm.selected">{{ \'CHANGE\' | translate }}</button> <button class="btn btn--normal width--size150 mrg__bottom4 btn--size_sm" ng-disabled="!vm.selected" ng-click="vm.destroy()">{{ \'DELETE\' | translate }}</button><!--<button class="btn btn&#45;&#45;normal width&#45;&#45;size150 mrg__bottom4 btn&#45;&#45;size_sm">\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043F\u0440\u0430\u0432\u0438\u043B\u043E</button>\n                <button class="btn btn&#45;&#45;normal width&#45;&#45;size150 mrg__bottom4 btn&#45;&#45;size_sm">\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C</button>--></div><!--            <div class="mrg__bottom">\n                <div class="radiobutton">\n                    <input class="radiobutton__input" type="radio" id="r1" name="rr"/>\n                    <label class="radiobutton__label" for="r1">\n                                <span class="radiobutton__chek">\n                                    <span class="radiobutton__chek&#45;&#45;cheked"></span>\n                                </span>\n                        <span class="radiobutton__label__text">\u041F\u043E \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u0443 \u043F\u0438\u0441\u0435\u043C</span></label>\n                </div>\n\n                <div class="radiobutton radiobutton&#45;&#45;size13">\n                    <input class="radiobutton__input" type="radio" id="r2" name="rr"/>\n                    <label class="radiobutton__label" for="r2">\n                                <span class="radiobutton__chek">\n                                    <span class="radiobutton__chek&#45;&#45;cheked"></span>\n                                </span>\n                        <span class="radiobutton__label__text">\u041F\u043E \u0430\u043B\u0444\u0430\u0432\u0438\u0442\u0443</span>\n                    </label>\n                </div>\n            </div>--></div></div><div class="form__field-item"></div></div>');
$templateCache.put('app/components/tag-list/tag-list-popover.html','<tag-list messages="vm.messages"></tag-list>');
$templateCache.put('app/components/tag-list/tag-list.html','<div class="tag-list-popup"><div class="tag-list-popup__body"><input class="tag-list-popup__search input input--size_s input--fc-sh-yellow" type="text" ng-model="vm.search"></div><div class="tag-list-popup-popup__links"><a class="tag-list-popup__link tag-list-popup__link--underline tag-list-popup__link--unread" href ng-click="vm.setSeen()"><span class="tag-list-popup__name">{{ \'READ\' | translate }}</span> </a><a class="tag-list-popup__link tag-list-popup__link--underline tag-list-popup__link--unread" href ng-click="vm.setUnSeen()"><span class="tag-list-popup__name">{{ \'NOT_READ\' | translate }}</span> </a><a class="tag-list-popup__link" href ng-click="vm.setImportant()"><span class="tag-list-popup__name tag-list-popup__name--important">{{ \'IMPORTANT\' | translate }} </span></a><a class="tag-list-popup__link" href ng-repeat="tag in vm.tags.items | filter: vm.search" ng-click="vm.setTag(tag)"><span class="tag-list-popup__first-letter" style="background-color: {{ tag.bgcolor }}; color: {{ tag.color }}">{{ tag.tag_name[0] }} </span><span class="tag-list-popup__name">{{ tag.tag_name.slice(1); }}</span></a></div><hr class="hr"><div class="tag-list-popup__header">{{ \'REMOVED_SELECTION_TAG\' | translate }}:</div><div class="tag-list-popup__links"><a class="tag-list-popup__link" href ng-repeat="tag in vm.unTags.items | filter: vm.search" ng-click="vm.setUnTag(tag)"><span class="tag-list-popup__first-letter" style="background-color: {{ tag.bgcolor }}; color: {{ tag.color }}">{{ tag.tag_name[0] }} </span><span class="tag-list-popup__name">{{ tag.tag_name.slice(1); }}</span></a></div><hr class="hr"><div><a class="tag-list-popup__link" href ng-click="vm.openTagCreatePopup()"><span class="tag-list-popup__name">{{ \'NEW_LABEL\' | translate }}..</span></a></div></div>');
$templateCache.put('app/components/template-list/template-list-popover.html','<template-list on-save="vm.saveTemplate()" templates="vm.templates"></template-list>');
$templateCache.put('app/components/template-list/template-list.html','<div class="template-list"><div class="template-list__is-not-templates" ng-if="!vm.messages.items.length && !vm.messages.isLoading"><div class="padding--left12 padding--right12">{{ \'TEMPLATE_LIST_TEXT\' | translate }}.</div><div class="template-list__save-button"><button class="btn btn--normal btn--silver-hover btn--size_xs btn--silver-bg-y-shw" type="button" ng-click="vm.save()">{{ \'BTN_CREATE_TEMPLATE\' | translate }}</button></div></div><div class="template-list__there-is-templates" ng-if="vm.messages.items.length && !vm.messages.isLoading"><ul class="template-list__mail-template-list"><li class="template-list__mail-template-list-item" ng-repeat="message in vm.messages.items" ng-click="vm.openTemplateComposePopup({\n                    id: message.number,\n                    mbox: message.mbox,\n                    connection_id: message.connection_id,\n                    template: true\n                })"><a class="template-list__link" style="display: block" href><span class="template-list__template-name">{{ message.Subject || \'\u0411\u0435\u0437 \u0442\u0435\u043C\u044B\' }}</span></a></li></ul><hr class="hr"><div class="template-list__mail-template-list-item" type="button" ng-click="vm.openTemplateComposePopup()">{{ \'NEW_TEMPLATE\' | translate }}\u2026</div><hr class="hr"><div class="template-list__save-button"><button class="btn btn--normal btn--silver-hover btn--size_xs btn--silver-bg-y-shw" type="button" ng-click="vm.save()">{{ \'SAVE_TEMPLATE\' | translate }}</button></div></div></div>');
$templateCache.put('app/components/test-draggable/test-draggable.html','<div ng-repeat="list in vm.model" class="col-sm-6"><div class="panel panel-info"><div class="panel-heading"><h3 class="panel-title">List {{ $index + 1 }}</h3></div><div class="panel-body"><ul dnd-list dnd-drop="callback({targetList: list, targetIndex: index})"><li ng-repeat="item in list" dnd-draggable="null" dnd-callback="vm.onDrop(list, $index, targetList, targetIndex)">{{item.labelFunc($index)}}</li></ul></div></div></div>');
$templateCache.put('app/components/textarea-translate-menu/textarea-translate-menu-list-from.html','<div class="textarea-translate-menu-list"><div class="textarea-translate-menu-list__body" ng-repeat="itemsFormatted in vm.list.itemsFormatted"><div class="textarea-translate-menu-list__item" ng-repeat="item in itemsFormatted"><button class="textarea-translate-menu-list__button btn--normal btn--not-border" ng-class="{\'textarea-translate-menu-list__button--active\': item === vm.translateFrom}" type="button" ng-click="vm.selectFrom(item)">{{ item.name }}</button></div></div></div>');
$templateCache.put('app/components/textarea-translate-menu/textarea-translate-menu-list-to.html','<div class="textarea-translate-menu-list"><div class="textarea-translate-menu-list__body" ng-repeat="itemsFormatted in vm.list.itemsFormatted"><div class="textarea-translate-menu-list__item" ng-repeat="item in itemsFormatted"><button class="textarea-translate-menu-list__button btn--normal btn--not-border" ng-class="{\'textarea-translate-menu-list__button--active\': item === vm.translateTo}" type="button" ng-click="vm.selectTo(item)">{{ item.name }}</button></div></div></div>');
$templateCache.put('app/components/textarea-translate-menu/textarea-translate-menu.html','<div class="textarea-translate-menu"><button class="btn--normal btn--not-border textarea-translate-menu__button" type="button" uib-popover-template="\'app/components/textarea-translate-menu/textarea-translate-menu-list-from.html\'" popover-class="popover--textarea-translate-menu popover--no-arrow" popover-placement="bottom-center" popover-animation="true" popover-trigger="\'outsideClick\'" popover-is-open="vm.isOpenFrom">{{ vm.translateFrom.name }}</button> <span class="icon-next textarea-translate-menu__icon"></span> <button class="btn--normal btn--not-border textarea-translate-menu__button" type="button" uib-popover-template="\'app/components/textarea-translate-menu/textarea-translate-menu-list-to.html\'" popover-class="popover--textarea-translate-menu popover--no-arrow" popover-placement="bottom-center" popover-animation="true" popover-trigger="\'outsideClick\'" popover-is-open="vm.isOpenTo">{{ vm.translateTo.name }}</button></div>');
$templateCache.put('app/components/time-send/time-send-popover.html','<time-send sdate="vm.sendForm.model.sdate" on-close="vm.isOpen = false"></time-send>');
$templateCache.put('app/components/time-send/time-send.html','<div class="time-send" ng-class="{\'time-send--info-open\': vm.isInfoOpen}"><div class="time-send__close pointer" ng-click="vm.close()"><img class="img-responsive" src="/images/cancel.svg"></div><div class="time-send__content"><div class="time-send__info font__size13" ng-if="vm.isInfoOpen">{{ \'TIME_SEND_TEXT\' | translate }}.</div><div class="time-send__planing mrg__top10"><div class="time-send__planing-item flex"><div class="checkbox-y checkbox-y--size15"><label class="checkbox-y__label"><input class="checkbox-y__input" type="checkbox" name="isChecked" id="isChecked" ng-model="vm.isChecked"><div class="checkbox-y__body"><span class="checkbox-y__icon"></span></div></label></div></div><div class="time-send__planing-item font__size15"><div class="time-send__dropdown">{{ \'SEND\' | translate }} <button class="dropdown-toggle btn--not-style" id="dLabel" role="button" data-toggle="dropdown" data-target=".dropdown2" type="button" href ng-disabled="!vm.isChecked"><label class="time-send__text-underline pointer" for="isChecked">{{ vm.timeForm.model.date.name }}</label></button> <span ng-if="!vm.isChecked">{{ \'IN\' | translate }}</span><div class="dropdown-menu dropdown-menu--calendar" role="menu" aria-labelledby="dLabel"><datetimepicker class="ui-calendar" data-ng-model="vm.timeForm.model.date.value" data-datetimepicker-config="{\n                                            dropdownSelector: \'#dLabel\',\n                                            minView: \'day\'\n                                        }" data-before-render="vm.endDateBeforeRender($view, $dates, $leftDate, $upDate, $rightDate)"><hr class="hr ui-calendar__hr"></datetimepicker></div></div></div><div class="time-send__planing-item"><ui-select ng-model="vm.timeForm.model.time" class="select-list select-list--size_s select-list--not-border-of-sides width-inh" theme="select2" ng-click="$event.stopPropagation()" on-select="vm.close()" search-enabled="false" ng-disabled="!vm.isChecked"><ui-select-match class="select-list__body select-list--size_s width-inh" placeholder="{{ \'TIME\' | translate }}">{{ $select.selected }}</ui-select-match><ui-select-choices repeat="time in vm.timeList"><div ng-bind-html="time"></div></ui-select-choices></ui-select></div><div class="time-send__planing-item"><a class="link link--gray font__size18" href ng-click="vm.isInfoOpen = !vm.isInfoOpen"><span class="icon-info"></span></a></div></div></div></div>');
$templateCache.put('app/components/themes/themes.html','<div class="themes" ng-class="{\'themes--active\': vm.isThemeActive}"><div class="themes__right-content"><button class="btn--close btn--not-events" type="button" ng-click="vm.isThemeActive = false;"></button><div class="themes__title">{{ \'THE_TEMPLATES\' | translate }}</div><div class="themes__list"><div class="themes__item" ng-class="{\'themes__item--checked themes__item--additional\': theme === vm.themes.selected}" ng-repeat="theme in vm.themes.items" ng-if="theme.isColor" ng-click="vm.select(theme)"><div><span class="themes__name"><span class="themes__name-text">{{ theme.name | translate }}</span></span><div class="themes__preview"><img src="/images/colors.jpg"></div></div><div ng-if="theme === vm.themes.selected"><div class="themes__arrow-up"></div><div class="themes__item-additional"><div class="themes__item-additional-content"><div class="themes__item-colors" ng-class="{\'themes__item-colors--checked\': color === vm.themes.selected.colors.selected}" style="background: {{ color.color }}" ng-repeat="color in theme.colors.items" ng-click="vm.selectColor(color)"></div></div></div></div></div><div class="themes__item" ng-class="{\'themes__item--checked\': theme === vm.themes.selected}" ng-repeat="theme in vm.themes.items" ng-if="!theme.isColor" ng-click="vm.select(theme)"><span class="themes__name"><span class="themes__name-text">{{ theme.name | translate }}</span></span><div class="themes__preview"><img src="/images/themes/thumb/{{ theme.img }}" alt="{{ theme.name | translate }}"></div></div></div></div><button class="btn--closer" ng-click="vm.isThemeActive = false;"></button></div>');
$templateCache.put('app/components/to-date/to-date.html','<span>&nbsp;{{ vm.convertDate }}</span>');
$templateCache.put('app/components/timezone-list/timezone-list-popover.html','<timezone-list messages="vm.messages" on-close="vm.isOpen = false"></timezone-list>');
$templateCache.put('app/components/timezone-list/timezone-list.html','<div class="timezone-list timezone-list--height150"><div class="timezone-list__links"><a class="timezone-list__link" href ng-repeat="timezone in vm.timezoneList" ng-click="vm.setTimezone(timezone)"><span class="timezone-list__name">{{ timezone }}</span></a></div></div>');
$templateCache.put('app/components/to-folder-name/to-folder-name.html','<span>{{ vm.folderName }}</span>');
$templateCache.put('app/components/user-connection-default/user-connection-default.html','<div class="user-connection-default"><p class="user-connection-default__title main-title-text font__size16 font__bold additional-info__block__link"><strong>{{ \'SEND_MAIL_IS_ADDRESS\' | translate }}</strong></p><div class="user-connection-default__item" ng-repeat="connection in vm.connections.items"><div class="radiobutton-y" ng-class="{\'radiobutton-y--bold\': connection === vm.connections.selected}"><label class="radiobutton-y__label"><div class="radiobutton-y__radio"><input class="radiobutton-y__input" name="connection" type="radio" ng-change="vm.update(connection)" ng-model="vm.connections.selected" ng-value="connection"><div class="radiobutton-y__round"><div class="radiobutton-y__inside"></div></div></div><div class="radiobutton-y__text">{{ connection.email }}</div></label></div></div></div>');
$templateCache.put('app/components/to-tag-name/to-tag-name.html','<span>{{ vm.tagName }}</span>');
$templateCache.put('app/components/user-signatures/user-signatures.html','<div class="user-signatures"><div class="user-signatures__title main-title-text">{{ \'YOUR_SIGNATURE\' | translate }}</div><div class="row"><div class="col-md-6 width--min450"><div class="user-signatures__edit-text"><div message-textarea ng-model="vm.signatureForm.model.sign" message-textarea-html="vm.signatureForm.model.sign"></div></div><div class="mrg__top10 user-signatures__connection"><div class="checkbox-y checkbox-y--size14 mrg__right5"><label class="checkbox-y__label"><input class="checkbox-y__input ng-untouched ng-valid ng-not-empty ng-dirty ng-valid-parse" type="checkbox" ng-model="vm.signatureForm.model.isSignConnected"><div class="checkbox-y__body"><span class="checkbox-y__icon"></span></div><div class="checkbox-y__text">{{ \'BIND_TO_ADDRESS\' | translate }}</div></label></div><ui-select ng-model="vm.signatureForm.model.connection_id" class="select-list select-list--size_l" theme="select2" search-enabled="false"><ui-select-match class="select-list__body select-list--size_l">{{ $select.selected.email }}</ui-select-match><ui-select-choices repeat="connection.id as connection in vm.connections.items" ng-value="$select.selected.id"><div ng-bind="connection.email"></div></ui-select-choices></ui-select></div><div class="mrg__top10 mrg__bottom25"><button class="btn btn--normal btn--size_s" ng-click="vm.add()">{{ \'ADD_SIGNATURE\' | translate }}</button></div></div><div class="col-md-6" ng-if="vm.signatures.items.length"><div class="mrg__bottom20" ng-repeat="signature in vm.signatures.items"><div class="user-signatures__view" ng-if="!signature.isEdit"><div class="user-signatures__buttons"><button class="btn--not-style" ng-click="vm.edit(signature)"><span class="icon-edit"></span></button> <button class="btn--not-style" ng-click="vm.destroy(signature)"><span class="icon-delete"></span></button></div><div class="user-signatures__text"><span ng-bind-html="vm.getTrustHtml(signature.sign);"></span></div><span class="user-signatures__connection-email">{{ vm.getEmailBySign(signature) }}</span></div><div ng-if="signature.isEdit"><div class="user-signatures__edit-text"><div message-textarea message-textarea-html="signature.sign" ng-model="signature.sign"></div></div><div class="mrg__top10 user-signatures__connection"><div class="checkbox-y checkbox-y--size14 mrg__right5"><label class="checkbox-y__label"><input class="checkbox-y__input ng-untouched ng-valid ng-not-empty ng-dirty ng-valid-parse" type="checkbox" ng-model="signature.isSignConnected"><div class="checkbox-y__body"><span class="checkbox-y__icon"></span></div><div class="checkbox-y__text">{{ \'BIND_TO_ADDRESS\' | translate }}</div></label></div><ui-select ng-model="signature.connection_id" class="select-list select-list--size_l" theme="select2" search-enabled="false"><ui-select-match class="select-list__body select-list--size_l">{{ $select.selected.email }}</ui-select-match><ui-select-choices repeat="connection.id as connection in vm.connections.items" ng-value="$select.selected.id"><div ng-bind="connection.email"></div></ui-select-choices></ui-select></div><div class="mrg__top10"><button class="btn btn--normal btn--size_s" ng-click="vm.save(signature)">{{ \'UPDATE_SIGNATURE\' | translate }}</button></div></div></div></div></div></div>');
$templateCache.put('app/components/user-menu/user-menu-popover.html','<user-menu></user-menu>');
$templateCache.put('app/components/user-menu/user-menu.html','<div class="user-menu font-sizer--bigger-15"><div class="user-menu__body user-menu__body--bg-gray"><div class="user-menu__item"><a class="user-menu__link user-menu__link--red" href><avatar-name class="avatar avatar--size28" ng-if="!vm.user.profile.photo" name="vm.user.profile.first_name" email="vm.user.profile.email"></avatar-name><div class="avatar avatar--size28" ng-if="vm.user.profile.photo"><img class="avatar__image" media-url="vm.user.profile.photo"></div><div class="user-menu__title">{{ vm.user.profile.email }}</div></a></div><div class="user-menu__item" ng-repeat="profile in vm.profiles" ng-if="profile.profile.email !== vm.user.profile.email"><a class="user-menu__link user-menu__link--red" href ng-click="vm.setAuthProfile(profile)"><avatar-name class="avatar avatar--size28" ng-if="!profile.profile.photo" name="profile.profile.first_name" email="profile.profile.email"></avatar-name><div class="avatar avatar--size28" ng-if="profile.profile.photo"><img class="avatar__image" media-url="profile.profile.photo"></div><div class="user-menu__title">{{ profile.profile.email }}</div></a></div><div class="user-menu__item"><a class="user-menu__link" ui-sref="signIn()"><svg xmlns="http://www.w3.org/2000/svg" width="28px" height="28px" viewBox="0 0 28 28" class="dropdown-user-add-svg"><path d="M13.28,8 L14.72,8 L14.72,13.28 L20,13.28 L20,14.72 L14.72,14.72 L14.72,20 L13.28,20 L13.28,14.72 L8,14.72 L8,13.28 L13.28,13.28 L13.28,8 Z" id="+" fill-opacity="0.5"></path><path d="M28,14 C28,6.2680135 21.7319865,0 14,0 C6.2680135,0 0,6.2680135 0,14 C0,21.7319865 6.2680135,28 14,28 C21.7319865,28 28,21.7319865 28,14 Z M1,14 C1,6.82029825 6.82029825,1 14,1 C21.1797017,1 27,6.82029825 27,14 C27,21.1797017 21.1797017,27 14,27 C6.82029825,27 1,21.1797017 1,14 Z" id="Oval" fill-opacity="0.15"></path></svg><div class="user-menu__title">{{ \'ADD_USER\' | translate }}</div></a></div></div><div class="user-menu__body user-menu__body--no-mrg"><div class="user-menu__item"><a class="user-menu__link user-menu__link--hover-gray" ui-sref="settings.main"><div class="user-menu__title">{{ \'USER_MANAGE_ACCOUNT\' | translate }}</div></a></div><div class="user-menu__item"><a class="user-menu__link user-menu__link--hover-gray" ui-sref="help"><div class="user-menu__title">{{ \'HELP\' | translate }}</div></a></div><div class="user-menu__separator"></div><div class="user-menu__item"><a class="user-menu__link user-menu__link--hover-gray" ui-sref="settings.accounts"><div class="user-menu__title">{{ \'ADD_MAIL_BOX\' | translate }}</div></a></div><div class="user-menu__item"><a class="user-menu__link user-menu__link--hover-gray" ui-sref="settings.main"><div class="user-menu__title">{{ \'BTN_CHANGE_PASSWORD\' | translate }}</div></a></div><div class="user-menu__item"><a class="user-menu__link user-menu__link--hover-gray" href ng-click="vm.logout()"><div class="user-menu__title">{{ \'EXIT\' | translate }}</div></a></div></div></div>');
$templateCache.put('app/components/validation-errors/validation-errors.html','<div class="validation"><div ng-messages="vm.data.$error" ng-if="vm.data.$invalid"><div class="validation__message validation__message--red" ng-message="{{ key }}" ng-repeat="(key, value) in vm.messages">{{ value | translate }}</div></div><div class="validation__message validation__message--red" ng-repeat="error in vm.server" ng-if="error.field == vm.data.$name">{{ error.message }}</div></div>');
$templateCache.put('app/components/white-list/white-list.html','<div><div class="rules-settings__bl-wh-content__title">{{ \'WHITE_LIST\' | translate }}</div><span class="rules-settings__bl-wh-content__text">{{ \'WHITE_LIST_TEXT\' | translate }} <b><a class="rules-settings__bl-wh-content__link" href="">\xAB{{ \'SPAM\' | translate }}\xBB</a></b></span><form name="form" ng-submit="vm.add(form)" novalidate><div class="form__field-item mrg__bottom0"><div class="field-style flex--inline width--max460"><input class="input input--size_xs input--up-shadow width--inh input--bg-white mrg__right7 border--cl-bl-silver" type="email" name="email" ng-model="vm.form.model.email" placeholder="{{ \'INPUT_PLACEHOLDER_PLEASE_YOUR_EMAIL\' | translate }}" required> <button class="btn btn--normal btn--size_xs width--size150 border--cl-bl-silver" type="submit">{{ \'ADD\' | translate }}</button></div></div></form><div class="mrg__top20"><div class="mrg__top5 padding--top3 padding--bottom3" ng-repeat="item in vm.list.items" ng-if="item.wb === \'W\'"><div class="checkbox-y checkbox-y--size14"><label class="checkbox-y__label"><input class="checkbox-y__input" type="checkbox" data-checklist-model="vm.list.checked" data-checklist-value="item"><div class="checkbox-y__body"><span class="checkbox-y__icon"></span></div><div class="checkbox-y__text font-sizer--bigger-15 font__bold">{{ item.email }}</div></label></div></div></div><div class="mrg__top10"><button class="btn btn--size_xs btn--normal btn--hover-border btn--silver-bg-y-shw" type="button" ng-click="vm.remove()" ng-disabled="!vm.list.checked.length">{{ \'REMOVE_IS_LIST\' | translate }}</button></div></div>');
$templateCache.put('app/core/errors/404.html','404');
$templateCache.put('app/directives/message-textarea/message-textarea.html','<div class="message-textarea"><div class="{{ targetElement }} message-textarea"></div></div>');
$templateCache.put('app/layout/footer/footer.html','<div class="footer"><div class="footer__row"><div class="footer-left"><div class="footer__date-info">{{ \'FOOTER_LAST_SING_IN\' | translate }}<to-date class="mrg__left3" date-unix="vm.user.profile.last_login"></to-date></div></div><div class="footer-right"><!--<div class="footer-right__elemets">--><!--<a href="">\u041F\u043E\u043C\u043E\u0449\u044C</a>--><!--</div>--><div class="footer-right__elemets">\xA9 2017, Mail.cz</div><div class="footer-right__elemets"><choice-language></choice-language></div></div></div></div>');
$templateCache.put('app/help/main/help.html','<section class="layout"><div class="layout__header"><header></header></div><div class="help"><nav class="help__nav"><div class="help__nav-content"><div class="help__nav-item is-submenu is-open" ng-repeat="help in vm.help.list"><span class="help__nav-link" ng-class="{\'is-active\': help.isActive}" ng-click="vm.openMenu(help)"><button class="help__nav-switcher btn--not-style btn--not-events" type="button" ng-class="{\'icon-arrow-down\': !help.isActive, \'icon-arrow-up\': help.isActive}"></button> {{ help.title }}</span><div class="help__nav-content--l2" ng-if="help.isActive"><div class="help__nav-item--l2" ng-repeat="helpDesc in help.items" ng-click="vm.select(helpDesc)"><span class="help__nav-link help__nav-link--l2">{{ helpDesc.title }}</span></div></div></div><div class="hide-elm"><div class="help__nav-item is-submenu"><span class="help__nav-link"><button class="help__nav-switcher icon-arrow-down btn--not-style btn--not-events" type="button"></button> P\u0159ihl\xE1\u0161en\xED a odhl\xE1\u0161en\xED</span><div class="help__nav-content--l2"><div class="help__nav-item--l2"><span class="help__nav-link help__nav-link--l2"><!--<span class="help__nav-switcher icon-arrow-down"></span>--> P\u0159ihl\xE1\u0161en\xED</span></div><div class="help__nav-item--l2"><span class="help__nav-link help__nav-link--l2"><!--<span class="help__nav-switcher icon-arrow-down"></span>--> Odhl\xE1\u0161en\xED</span></div><div class="help__nav-item--l2"><span class="help__nav-link help__nav-link--l2"><!--<span class="help__nav-switcher icon-arrow-down"></span>--> Zm\u011Bna hesla</span></div></div></div><div class="help__nav-item is-submenu"><span class="help__nav-link"><button class="help__nav-switcher icon-arrow-down btn--not-style btn--not-events" type="button"></button> Pr\xE1ce s e-maily</span><div class="help__nav-content--l2"><div class="help__nav-item--l2"><span class="help__nav-link help__nav-link--l2"><!--<span class="help__nav-switcher icon-arrow-down"></span>--> Vytv\xE1\u0159en\xED zpr\xE1v a odes\xEDl\xE1n\xED</span></div></div><div class="help__nav-content--l2"><div class="help__nav-item--l2"><span class="help__nav-link help__nav-link--l2"><!--<span class="help__nav-switcher icon-arrow-down"></span>--> Odes\xEDl\xE1n\xED zpr\xE1v v\xEDce p\u0159\xEDjemc\u016F</span></div></div><div class="help__nav-content--l2"><div class="help__nav-item--l2"><span class="help__nav-link help__nav-link--l2"><!--<span class="help__nav-switcher icon-arrow-down"></span>--> Odes\xEDl\xE1n\xED zpr\xE1v z jin\xE9 adresy</span></div></div><div class="help__nav-content--l2"><div class="help__nav-item--l2"><span class="help__nav-link help__nav-link--l2"><!--<span class="help__nav-switcher icon-arrow-down"></span>--> Zpr\xE1va o doru\u010Den\xED</span></div></div><div class="help__nav-content--l2"><div class="help__nav-item--l2"><span class="help__nav-link help__nav-link--l2"><!--<span class="help__nav-switcher icon-arrow-down"></span>--> Odlo\u017Een\xED odesl\xE1n\xED</span></div></div><div class="help__nav-content--l2"><div class="help__nav-item--l2"><span class="help__nav-link help__nav-link--l2"><!--<span class="help__nav-switcher icon-arrow-down"></span>--> Probl\xE9my s odesl\xE1n\xEDm</span></div></div><div class="help__nav-content--l2"><div class="help__nav-item--l2"><span class="help__nav-link help__nav-link--l2"><!--<span class="help__nav-switcher icon-arrow-down"></span>--> P\u0159\xEDlohy</span></div></div><div class="help__nav-content--l2"><div class="help__nav-item--l2"><span class="help__nav-link help__nav-link--l2"><!--<span class="help__nav-switcher icon-arrow-down"></span>--> P\u0159id\xE1n\xED soubor\u016F k odpov\u011Bdi</span></div></div><div class="help__nav-content--l2"><div class="help__nav-item--l2"><span class="help__nav-link help__nav-link--l2"><!--<span class="help__nav-switcher icon-arrow-down"></span>--> P\u0159ijet\xED p\u0159\xEDlohy</span></div></div></div><div class="help__nav-item is-submenu"><span class="help__nav-link"><span class="help__nav-switcher icon-arrow-down btn--not-style btn--not-events" type="button"></span> Spr\xE1va e-mail\u016F</span><div class="help__nav-content--l2"><div class="help__nav-item--l2"><span class="help__nav-link help__nav-link--l2"><button class="help__nav-switcher icon-arrow-down btn--not-style btn--not-events" type="button"></button> Ozna\u010Den\xED zpr\xE1v</span></div><div class="help__nav-item--l2"><span class="help__nav-link help__nav-link--l2"><button class="help__nav-switcher icon-arrow-down btn--not-style btn--not-events" type="button"></button> Vyhled\xE1v\xE1n\xED zpr\xE1v</span></div></div></div><div class="help__nav-item is-submenu"><span class="help__nav-link"><button class="help__nav-switcher icon-arrow-down btn--not-style btn--not-events" type="button"></button> Slo\u017Eky</span><div class="help__nav-content--l2"><div class="help__nav-item--l2"><span class="help__nav-link help__nav-link--l2"><!--<span class="help__nav-switcher icon-arrow-down"></span>--> Probl\xE9my se slo\u017Ekami</span></div><div class="help__nav-item--l2"><span class="help__nav-link help__nav-link--l2"><!--<span class="help__nav-switcher icon-arrow-down"></span>--> \u0160t\xEDtky</span></div><div class="help__nav-item--l2"><span class="help__nav-link help__nav-link--l2"><!--<span class="help__nav-switcher icon-arrow-down"></span>--> Odstran\u011Bn\xED \u0161t\xEDtku</span></div><div class="help__nav-item--l2"><span class="help__nav-link help__nav-link--l2"><!--<span class="help__nav-switcher icon-arrow-down"></span>--> \xDAprava \u0161t\xEDtk\u016F</span></div></div></div><div class="help__nav-item is-submenu"><span class="help__nav-link"><span class="help__nav-switcher icon-arrow-down btn--not-style btn--not-events" type="button"></span> Import po\u0161ty z jin\xFDch str\xE1nek</span><div class="help__nav-content--l2"><div class="help__nav-item--l2"><span class="help__nav-link help__nav-link--l2"><!--<span class="help__nav-switcher icon-arrow-down"></span>--> Nastaven\xED</span></div><div class="help__nav-item--l2"><span class="help__nav-link help__nav-link--l2"><!--<span class="help__nav-switcher icon-arrow-down"></span>--> Konfigurace nastaven\xED po\u0161ty</span></div><div class="help__nav-item--l2"><span class="help__nav-link help__nav-link--l2"><!--<span class="help__nav-switcher icon-arrow-down"></span>--> Probl\xE9my s uschov\xE1n\xEDm e-mail\u016F</span></div><div class="help__nav-item--l2"><span class="help__nav-link help__nav-link--l2"><!--<span class="help__nav-switcher icon-arrow-down"></span>--> Informace o odes\xEDlateli</span></div></div></div><div class="help__nav-item is-submenu"><span class="help__nav-link"><span class="help__nav-switcher icon-arrow-down btn--not-style btn--not-events" type="button"></span> Podpis</span><div class="help__nav-content--l2"><div class="help__nav-item--l2"><span class="help__nav-link help__nav-link--l2"><!--<span class="help__nav-switcher icon-arrow-down"></span>--> Vytvo\u0159it</span></div><div class="help__nav-item--l2"><span class="help__nav-link help__nav-link--l2"><!--<span class="help__nav-switcher icon-arrow-down"></span>--> Odstran\u011Bn\xED podpis\u016F</span></div><div class="help__nav-item--l2"><span class="help__nav-link help__nav-link--l2"><!--<span class="help__nav-switcher icon-arrow-down"></span>--> Vlo\u017Eit portr\xE9t</span></div></div></div><div class="help__nav-item is-submenu"><span class="help__nav-link"><span class="help__nav-switcher icon-arrow-down btn--not-style btn--not-events" type="button"></span> Zabezpe\u010Den\xED po\u0161ty</span><div class="help__nav-content--l2"><div class="help__nav-item--l2"><span class="help__nav-link help__nav-link--l2"><!--<span class="help__nav-switcher icon-arrow-down"></span>--> Smazan\xE9 zpr\xE1vy</span></div><div class="help__nav-item--l2"><span class="help__nav-link help__nav-link--l2"><!--<span class="help__nav-switcher icon-arrow-down"></span>--> Potvrzen\xED \u010D\xEDsla mobiln\xEDho telefonu</span></div><div class="help__nav-item--l2"><span class="help__nav-link help__nav-link--l2"><!--<span class="help__nav-switcher icon-arrow-down"></span>--> Digit\xE1ln\xED podpis</span></div><div class="help__nav-item--l2"><span class="help__nav-link help__nav-link--l2"><!--<span class="help__nav-switcher icon-arrow-down"></span>--> Spam</span></div></div></div></div><div class="help__nav-item hide-elm"><span class="help__nav-link"><span class="help__nav-switcher icon-arrow-down btn--not-style btn--not-events" type="button"></span> \u0427\u0430\u0441\u0442\u044B\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u044B \u0432 MailCZ</span><div class="help__nav-content--l2"><div class="help__nav-item--l2"><span class="help__nav-link help__nav-link--l2"><span class="help__nav-switcher icon-arrow-down btn--not-style btn--not-events" type="button"></span> \u041F\u0440\u0430\u0432\u0438\u043B\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u043F\u0438\u0441\u0435\u043C</span></div></div></div></div></nav><main class="help__main-doc"><article class="help__main-doc-content flex flex--row-wrap"><section class="help__main-doc-item help__main-doc-item--half" ng-repeat="help in vm.help.list" ng-if="!vm.help.selected && !vm.searchForm.model.q"><div class="help__home-item-image"><img class="help__home-doc-icon" src="/images/supports-icon/{{ help.icon }}"></div><div class="help__doc-content-menu"><p class="help__p help__p--bold mrg__none">{{ help.title }}</p><div ng-repeat="helpDesc in help.items | limitTo:3"><p class="help__p"><a class="help__link" ng-click="vm.select(helpDesc)">{{ helpDesc.title }}</a></p></div></div></section><div class="help-search-results" ng-if="vm.help.selected && !vm.searchForm.model.q"><div class="help-search-results__preview"><div class="help-search-results__preview-wrapper"><main class="help-search-results__preview-content"><article class="help__text-text-style"><h1>{{ vm.help.selected.title }}</h1><div class="mrg__top30" ng-bind-html="vm.help.selected.body"></div></article></main></div></div></div><div class="help-search-results" ng-if="vm.searchForm.model.q"><div class="help-search-results__preview"><div class="help-search-results__preview-wrapper"><main class="help-search-results__preview-content" ng-repeat="help in vm.help.list | filter: vm.searchForm.model.q"><article class="help__text-text-style" ng-repeat="helpDesc in help.items | filter: vm.searchForm.model.q"><h1>{{ helpDesc.title }}</h1><div class="mrg__top30" ng-bind-html="helpDesc.body"></div></article></main></div></div></div><!--\n                                <section class="help__main-doc-item help__main-doc-item&#45;&#45;half">\n                                    <div class="help__home-item-image">\n                                        <img class="help__home-doc-icon" src="/images/supports-icon/spam.png" alt="">\n                                    </div>\n                                    <div class="help__doc-content-menu">\n                                        <p class="help__p help__p&#45;&#45;bold mrg__none">\u0421\u043F\u0430\u043C</p>\n                                        <p class="help__p"><a class="help__link">\u041D\u0443\u0436\u043D\u044B\u0435 \u043F\u0438\u0441\u044C\u043C\u0430 \u043F\u043E\u043F\u0430\u0434\u0430\u044E\u0442 \u0432 \u043F\u0430\u043F\u043A\u0443 \xAB\u0421\u043F\u0430\u043C\xBB</a></p>\n                                        <p class="help__p"><a class="help__link">\u041A\u0430\u043A \u0437\u0430\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043F\u0438\u0441\u044C\u043C\u0430 \u043E\u0442 \u043D\u0435\u0436\u0435\u043B\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0433\u043E\n                                            \u0430\u0434\u0440\u0435\u0441\u0430\u0442\u0430?</a></p>\n                                        <p class="help__p"><a class="help__link">\u041E\u0442\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F \u043E\u0442 \u0440\u0430\u0441\u0441\u044B\u043B\u043A\u0438</a></p>\n                                        <p class="help__p"><a class="help__link">\u041C\u043E\u044F \u0440\u0430\u0441\u0441\u044B\u043B\u043A\u0430 \u043F\u043E\u043F\u0430\u0434\u0430\u0435\u0442 \u0432 \u0441\u043F\u0430\u043C</a></p>\n                                    </div>\n                                </section>\n\n                                <section class="help__main-doc-item help__main-doc-item&#45;&#45;half">\n                                    <div class="help__home-item-image">\n                                        <img class="help__home-doc-icon" src="/images/supports-icon/mail-programs.png" alt="">\n                                    </div>\n                                    <div class="help__doc-content-menu">\n                                        <p class="help__p help__p&#45;&#45;bold mrg__none">\u041F\u043E\u0447\u0442\u043E\u0432\u044B\u0435 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u044B</p>\n                                        <p class="help__p"><a class="help__link">\u041A\u0430\u043A \u043D\u0430\u0441\u0442\u0440\u043E\u0438\u0442\u044C \u043F\u043E\u0447\u0442\u043E\u0432\u0443\u044E \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0443?</a></p>\n                                        <p class="help__p"><a class="help__link">\u041D\u0435 \u043F\u0440\u0438\u0445\u043E\u0434\u044F\u0442 \u0438 \u043D\u0435 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u043F\u0438\u0441\u044C\u043C\u0430</a></p>\n                                        <p class="help__p"><a class="help__link">\u041D\u0435 \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u044E\u0442\u0441\u044F \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0435 \u043F\u0438\u0441\u044C\u043C\u0430</a></p>\n                                        <p class="help__p"><a class="help__link">\u041D\u0435 \u0443\u0434\u0430\u043B\u044F\u044E\u0442\u0441\u044F \u043F\u0438\u0441\u044C\u043C\u0430</a></p>\n                                    </div>\n                                </section>\n\n                                <section class="help__main-doc-item help__main-doc-item&#45;&#45;half">\n                                    <div class="help__home-item-image">\n                                        <img class="help__home-doc-icon" src="/images/supports-icon/general-site-problems.png" alt="">\n                                    </div>\n                                    <div class="help__doc-content-menu">\n                                        <p class="help__p help__p&#45;&#45;bold mrg__none">\u041E\u0431\u0449\u0438\u0435 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u044B \u0441 \u0441\u0430\u0439\u0442\u043E\u043C</p>\n                                        <p class="help__p"><a class="help__link">\u041D\u0435 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u043F\u043E\u0438\u0441\u043A \u043F\u043E \u044F\u0449\u0438\u043A\u0443</a></p>\n                                        <p class="help__p"><a class="help__link">\u041D\u0435\u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u043E \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u0441\u0430\u0439\u0442 \u041F\u043E\u0447\u0442\u044B</a></p>\n                                        <p class="help__p"><a class="help__link">\u041F\u0440\u043E\u043F\u0430\u043B\u0438 \u043C\u043E\u0438 \u043F\u0430\u043F\u043A\u0438</a></p>\n                                        <p class="help__p"><a class="help__link">\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u0434\u043E\u043B\u0433\u043E \u0433\u0440\u0443\u0437\u0438\u0442\u0441\u044F</a></p>\n                                    </div>\n                                </section>\n\n                                <section class="help__main-doc-item help__main-doc-item&#45;&#45;half">\n                                    <div class="help__home-item-image">\n                                        <img class="help__home-doc-icon" src="/images/supports-icon/rules.png" alt="">\n                                    </div>\n                                    <div class="help__doc-content-menu">\n                                        <p class="help__p help__p&#45;&#45;bold mrg__none">\u041F\u0440\u0430\u0432\u0438\u043B\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u043F\u0438\u0441\u0435\u043C</p>\n                                        <p class="help__p"><a class="help__link">\u041A\u0430\u043A \u043D\u0430\u0441\u0442\u0440\u043E\u0438\u0442\u044C \u043F\u0435\u0440\u0435\u0441\u044B\u043B\u043A\u0443 \u043F\u0438\u0441\u0435\u043C?</a></p>\n                                        <p class="help__p"><a class="help__link">\u041D\u0435 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u043F\u0435\u0440\u0435\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u0434\u0440\u0443\u0433\u043E\u0439 \u0430\u0434\u0440\u0435\u0441</a></p>\n                                        <p class="help__p"><a class="help__link">\u041F\u0440\u043E\u043F\u0430\u043B\u0438 \u043F\u0438\u0441\u044C\u043C\u0430 \u0438\u0437 \u044F\u0449\u0438\u043A\u0430</a></p>\n                                        <p class="help__p"><a class="help__link">\u041D\u0435 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u043F\u0440\u0430\u0432\u0438\u043B\u043E</a></p>\n                                    </div>\n                                </section>\n\n                                <section class="help__main-doc-item help__main-doc-item&#45;&#45;half">\n                                    <div class="help__home-item-image">\n                                        <img class="help__home-doc-icon" src="/images/supports-icon/importing.png" alt="">\n                                    </div>\n                                    <div class="help__doc-content-menu">\n                                        <p class="help__p help__p&#45;&#45;bold mrg__none">\u0421\u0431\u043E\u0440 \u043F\u043E\u0447\u0442\u044B \u0441 \u0434\u0440\u0443\u0433\u043E\u0433\u043E \u044F\u0449\u0438\u043A\u0430</p>\n                                        <p class="help__p"><a class="help__link">\u0421\u0431\u043E\u0440\u0449\u0438\u043A \u043D\u0435 \u0441\u043E\u0431\u0438\u0440\u0430\u0435\u0442 \u043F\u0438\u0441\u044C\u043C\u0430</a></p>\n                                        <p class="help__p"><a class="help__link">\u041D\u0435 \u043C\u043E\u0433\u0443 \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0441\u0431\u043E\u0440\u0449\u0438\u043A</a></p>\n                                        <p class="help__p"><a class="help__link">\u0421\u0431\u043E\u0440\u0449\u0438\u043A \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u043C\u0435\u0434\u043B\u0435\u043D\u043D\u043E</a></p>\n                                        <p class="help__p"><a class="help__link">\u041D\u0435 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u0441\u0431\u043E\u0440\u0449\u0438\u043A \u0438\u0437 \u043C\u043E\u0435\u0433\u043E \u044F\u0449\u0438\u043A\u0430 \u0432 \u0434\u0440\u0443\u0433\u043E\u0439 \u044F\u0449\u0438\u043A</a>\n                                        </p>\n                                    </div>\n                                </section>\n\n                                <section class="help__main-doc-item help__main-doc-item&#45;&#45;half">\n                                    <div class="help__home-item-image">\n                                        <img class="help__home-doc-icon" src="/images/supports-icon/retrieve-mail.png" alt="">\n                                    </div>\n                                    <div class="help__doc-content-menu">\n                                        <p class="help__p help__p&#45;&#45;bold mrg__none">\u041E\u0442\u043F\u0440\u0430\u0432\u043A\u0430 \u0438 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u0435 \u043F\u0438\u0441\u0435\u043C</p>\n                                        <p class="help__p"><a class="help__link">\u041C\u043D\u0435 \u043D\u0435 \u043F\u0440\u0438\u0445\u043E\u0434\u044F\u0442 \u043F\u0438\u0441\u044C\u043C\u0430</a></p>\n                                        <p class="help__p"><a class="help__link">\u041E\u0442 \u043C\u0435\u043D\u044F \u043D\u0435 \u0434\u043E\u0445\u043E\u0434\u044F\u0442 \u043F\u0438\u0441\u044C\u043C\u0430</a></p>\n                                        <p class="help__p"><a class="help__link">\u041A\u0430\u043A \u0432\u044B\u0431\u0440\u0430\u0442\u044C \u0430\u0434\u0440\u0435\u0441 \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u0435\u043B\u044F?</a></p>\n                                    </div>\n                                </section>\n\n                                <section class="help__main-doc-item help__main-doc-item&#45;&#45;half">\n                                    <div class="help__home-item-image">\n                                        <img class="help__home-doc-icon" src="/images/supports-icon/sequrity.png" alt="">\n                                    </div>\n                                    <div class="help__doc-content-menu">\n                                        <p class="help__p help__p&#45;&#45;bold mrg__none">\u0421\u0431\u043E\u0440 \u043F\u043E\u0447\u0442\u044B \u0441 \u0434\u0440\u0443\u0433\u043E\u0433\u043E \u044F\u0449\u0438\u043A\u0430</p>\n                                        <p class="help__p"><a class="help__link">\u0421\u0431\u043E\u0440\u0449\u0438\u043A \u043D\u0435 \u0441\u043E\u0431\u0438\u0440\u0430\u0435\u0442 \u043F\u0438\u0441\u044C\u043C\u0430</a></p>\n                                        <p class="help__p"><a class="help__link">\u041D\u0435 \u043C\u043E\u0433\u0443 \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0441\u0431\u043E\u0440\u0449\u0438\u043A</a></p>\n                                        <p class="help__p"><a class="help__link">\u0421\u0431\u043E\u0440\u0449\u0438\u043A \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u043C\u0435\u0434\u043B\u0435\u043D\u043D\u043E</a></p>\n                                        <p class="help__p"><a class="help__link">\u041D\u0435 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u0441\u0431\u043E\u0440\u0449\u0438\u043A \u0438\u0437 \u043C\u043E\u0435\u0433\u043E \u044F\u0449\u0438\u043A\u0430 \u0432 \u0434\u0440\u0443\u0433\u043E\u0439 \u044F\u0449\u0438\u043A</a>\n                                        </p>\n                                    </div>\n                                </section>\n\n                                <section class="help__main-doc-item help__main-doc-item&#45;&#45;half">\n                                    <div class="help__home-item-image">\n                                        <img class="help__home-doc-icon" src="/images/supports-icon/mobile-access.png" alt="">\n                                    </div>\n                                    <div class="help__doc-content-menu">\n                                        <p class="help__p help__p&#45;&#45;bold mrg__none">\u0414\u043E\u0441\u0442\u0443\u043F \u0441 \u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0445 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432</p>\n                                        <p class="help__p"><a class="help__link">\u041C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0439 \u0441\u0430\u0439\u0442 \u041F\u043E\u0447\u0442\u044B</a></p>\n                                        <p class="help__p"><a class="help__link">\u041F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u0434\u043B\u044F Android \u0438 iOS</a></p>\n                                    </div>\n                                </section>\n                --></article><!--<aside class="help__useful-links-menu">\n                <span class="help__useful-links-menu-title">\u041F\u043E\u043B\u0435\u0437\u043D\u044B\u0435 \u0441\u0441\u044B\u043B\u043A\u0438</span>\n                <a class="help__useful-links-menu-link help__link">\u0422\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0441\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u0438\u043A</a>\n                <a class="help__useful-links-menu-link help__link">\u0413\u043E\u0440\u044F\u0447\u0438\u0435 \u043A\u043B\u0430\u0432\u0438\u0448\u0438</a>\n                <a class="help__useful-links-menu-link help__link">\u0411\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u044C \u0432 \u041F\u043E\u0447\u0442\u0435</a>\n                <a class="help__useful-links-menu-link help__link">\u041F\u0440\u043E\u0431\u043B\u0435\u043C\u0430 \u0441 \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435\u043C \u041F\u043E\u0447\u0442\u044B \u0434\u043B\u044F \u0434\u043E\u043C\u0435\u043D\u0430</a>\n            </aside>--></main><main class="help__main-doc hide-elm"><article class="help__main-doc-content"><h1 class="help__title help__title--h1 width--all">\u0427\u0430\u0441\u0442\u044B\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u044B \u0432</h1><!--<section class="help__main-doc-item help__main-doc-item&#45;&#45;half">--><!--</section>--></article><aside class="help__useful-links-menu"><span class="help__useful-links-menu-title">\u041F\u043E\u043B\u0435\u0437\u043D\u044B\u0435 \u0441\u0441\u044B\u043B\u043A\u0438</span> <a class="help__useful-links-menu-link help__link">\u0422\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0441\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u0438\u043A</a> <a class="help__useful-links-menu-link help__link">\u0413\u043E\u0440\u044F\u0447\u0438\u0435 \u043A\u043B\u0430\u0432\u0438\u0448\u0438</a> <a class="help__useful-links-menu-link help__link">\u0411\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u044C \u0432 \u041F\u043E\u0447\u0442\u0435</a> <a class="help__useful-links-menu-link help__link">\u041F\u0440\u043E\u0431\u043B\u0435\u043C\u0430 \u0441 \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435\u043C \u041F\u043E\u0447\u0442\u044B \u0434\u043B\u044F \u0434\u043E\u043C\u0435\u043D\u0430</a></aside></main><div class="help-search-results hide-elm"><div class="help-search-results__result-list hide-elm"><div class="help-search-results__result-content"><a class="help-search-results__result-item"><span class="help-search-results__title">\u0412\u0445\u043E\u0434\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435</span><p class="help-search-results__text">\u041E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u0435\u043C\u044B\u0445 \u0432 \u0437\u0430\u0434\u0430\u043D\u0438\u0438 (\u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0430, \u0442\u0435\u043A\u0441\u0442, \u043A\u0430\u0440\u0442\u0430). \u041A\u0430\u0436\u0434\u043E\u043C\u0443 \u043E\u0431\u044A\u0435\u043A\u0442\u0443 \u043D\u0443\u0436\u043D\u043E \u043F\u0440\u0438\u0441\u0432\u043E\u0438\u0442\u044C \u0438\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440, \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0438\u0442\u044C \u0442\u0438\u043F \u0434\u0430\u043D\u043D\u044B\u0445 \u0438 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C \u043E\u0431\u044A\u0435\u043A\u0442\u0430 \u0432 \u0437\u0430\u0434\u0430\u043D\u0438\u0438.</p></a><a class="help-search-results__result-item"><span class="help-search-results__title">\u0412\u0445\u043E\u0434\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435</span><p class="help-search-results__text">\u041E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u0435\u043C\u044B\u0445 \u0432 \u0437\u0430\u0434\u0430\u043D\u0438\u0438 (\u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0430, \u0442\u0435\u043A\u0441\u0442, \u043A\u0430\u0440\u0442\u0430). \u041A\u0430\u0436\u0434\u043E\u043C\u0443 \u043E\u0431\u044A\u0435\u043A\u0442\u0443 \u043D\u0443\u0436\u043D\u043E \u043F\u0440\u0438\u0441\u0432\u043E\u0438\u0442\u044C \u0438\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440, \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0438\u0442\u044C \u0442\u0438\u043F \u0434\u0430\u043D\u043D\u044B\u0445 \u0438 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C \u043E\u0431\u044A\u0435\u043A\u0442\u0430 \u0432 \u0437\u0430\u0434\u0430\u043D\u0438\u0438.</p></a></div></div><div class="help-search-results__preview"><div class="help-search-results__preview-wrapper"><!--<div class="help-search-results__preview-header">\n                        <button class="btn btn&#45;&#45;normal btn&#45;&#45;size_m">\u0427\u0438\u0442\u0430\u0442\u044C \u0426\u0435\u043B\u0438\u043A\u043E\u043C</button>\n                    </div>--><main class="help-search-results__preview-content"><article class="help__text-text-style"><div><h1 class="help__title help__title--h1">Registrace</h1><div><p><a class="help__link" href="">Vytvo\u0159en\xED \xFA\u010Dtu</a></p><p><a class="help__link" href="">Bezpe\u010Dn\xE9 heslo</a></p><p><a class="help__link" href="">Zm\u011Bna u\u017Eivatelsk\xE9ho jm\xE9na</a></p></div><h2 class="help__title help__title--h2">Vytvo\u0159en\xED \xFA\u010Dtu:</h2><ul class="help__ul"><li class="help__li">Otev\u0159ete registra\u010Dn\xED str\xE1nku.</li><li class="help__li">Zadejte sv\xE9 jm\xE9no a p\u0159\xEDjmen\xED</li><li class="help__li">Vytvo\u0159te jedine\u010Dn\xE9 u\u017Eivatelsk\xE9 jm\xE9no, kter\xE9 budete pou\u017E\xEDvat pro p\u0159ihl\xE1\u0161en\xED k \xFA\u010Dtu na www.mail.cz</li><li class="help__li">Vytvo\u0159te heslo pro p\u0159\xEDstup k Va\u0161emu \xFA\u010Dtu.</li><li class="help__li">Zadejte \u010D\xEDslo sv\xE9ho mobiln\xEDho telefonu, toto slou\u017E\xED k obnoven\xED zapomenut\xE9ho hesla.</li><li class="help__li">Zadejte znaky z obr\xE1zku (ochrana p\u0159ed registrac\xED roboty)</li><li class="help__li">Stiskn\u011Bte tla\u010D\xEDtko \u201ERegistrovat\u201C</li><li class="help__li">Po \xFAsp\u011B\u0161n\xE9 registraci se Va\u0161e e-mailov\xE1 adresa bude skl\xE1dat z u\u017Eivatelsk\xE9ho jm\xE9na, @ a dom\xE9ny mail.cz nap\u0159. xxx@mail.cz.</li></ul><h2 class="help__title help__title--h2">Bezpe\u010Dn\xE9 heslo</h2><ul class="help__ul"><li class="help__li">Jednoduch\xE9 heslo p\u0159edstavuje nejv\u011Bt\u0161\xED hrozbu pro V\xE1\u0161 \xFA\u010Det.</li><li class="help__li">Bezpe\u010Dn\xE9 heslo vytvo\u0159\xEDte kombinac\xED:</li><li class="help__li">Latinsk\xFDch p\xEDsmen (velk\xE1 i mal\xE1)</li><li class="help__li">\u010C\xEDsel</li><li class="help__li">Speci\xE1ln\xEDch znak\u016F nap\u0159. "@,- atd.</li></ul><h2 class="help__title help__title--h2">Zm\u011Bna u\u017Eivatelsk\xE9ho jm\xE9na</h2><ul class="help__ul"><li class="help__li">U\u017Eivatelsk\xE9 jm\xE9no nelze m\u011Bnit, m\u016F\u017Eete v\u0161ak vytvo\u0159it dal\u0161\xED a to po odhl\xE1\u0161en\xED ze st\xE1vaj\xEDc\xEDho \xFA\u010Dtu.</li></ul></div><!--  2 --><div class=""><h1 class="help__title help__title--h1">P\u0159ihl\xE1\u0161en\xED a odhl\xE1\u0161en\xED</h1><div class=""><p class="help__p"><a class="help__link" href="">P\u0159ihl\xE1\u0161en\xED</a></p><p class="help__p"><a class="help__link" href="">Odhl\xE1\u0161en\xED</a></p><p class="help__p"><a class="help__link" href="">Zm\u011Bna hesla</a></p></div><h2 class="help__title help__title--h2"></h2>p\u0159ihl\xE1\u0161en\xED<p class="help__p">P\u0159ihl\xE1\u0161en\xED m\u016F\u017Eete prov\xE9zt z libovoln\xE9ho za\u0159\xEDzen\xED p\u0159ipojen\xE9ho k internetu, zadejte pouze adresu www.mail.cz do sv\xE9ho prohl\xED\u017Ee\u010De, zadejte sv\xE9 u\u017Eivatelsk\xE9 jm\xE9no a heslo a stiskn\u011Bte tla\u010D\xEDtko \u201Ep\u0159ihl\xE1sit\u201C Pou\u017E\xEDv\xE1n\xED v\xEDce \xFA\u010Dt\u016F Pokud m\xE1te v\xEDce \xFA\u010Dt\u016F, m\u016F\u017Eete se mezi jednotliv\xFDmi \xFA\u010Dty p\u0159ip\xEDnat bez zad\xE1v\xE1n\xED dal\u0161\xEDch p\u0159ihla\u0161ovac\xEDch \xFAdaj\u016F.</p><h2 class="help__title help__title--h2"></h2>Odhl\xE1\u0161en\xED z po\u0161tovn\xED schr\xE1nky:<p class="help__p">Otev\u0159ete nab\xEDdku \xFA\u010Dtu v prav\xE9m horn\xEDm rohu a stiskn\u011Bte tla\u010D\xEDtko \u201Eodhl\xE1\u0161en\xED\u201C. Pokud jste se zapomn\u011Bli odhl\xE1sit z Va\u0161eho \xFA\u010Dtu a u\u017E\xEDv\xE1te za\u0159\xEDzen\xED jin\xE9 osoby, stiskn\u011Bte tla\u010D\xEDtko \u201Eodhl\xE1sit na v\u0161echna za\u0159\xEDzen\xED\u201C v nab\xEDdce sv\xE9ho \xFA\u010Dtu. POZOR! Po odhl\xE1\u0161en\xED bude vy\u017Eadov\xE1no k op\u011Btovn\xE9mu p\u0159ihl\xE1\u0161en\xED znovu heslo a u\u017Eivatelsk\xE9 jm\xE9no.</p><h2 class="help__title help__title--h2"></h2>Zm\u011Bna hesla:<p class="help__p">Chcete zm\u011Bnit heslo? Stiskn\u011Bte v prav\xE9m horn\xEDm rohu tla\u010D\xEDtko nab\xEDdky a tam tla\u010D\xEDtko \u201Ezm\u011Bnit heslo\u201C</p><p class="help__p">Zadejte sv\xE9 aktu\xE1ln\xED heslo a nov\xE9 heslo 2x potvr\u010Fte, zadejte znaky z obr\xE1zku a stiskn\u011Bte \u201Ehotovo\u201C POZOR! Po zm\u011Bn\u011B hesla, budete automaticky odhl\xE1\u0161en\xED.</p></div><!-- 3 --><div class=""><h1 class="help__title help__title--h1">Pr\xE1ce s e-maily:</h1><div><p><a class="help__link" href="">Vytv\xE1\u0159en\xED zpr\xE1v a odes\xEDl\xE1n\xED</a></p><p><a class="help__link" href="">Odes\xEDl\xE1n\xED zpr\xE1v v\xEDce p\u0159\xEDjemc\u016F</a></p><p><a class="help__link" href="">Odes\xEDl\xE1n\xED zpr\xE1v z jin\xE9 adresy</a></p><p><a class="help__link" href="">Zpr\xE1va o doru\u010Den\xED</a></p><p><a class="help__link" href="">Odlo\u017Een\xED odesl\xE1n\xED</a></p><p><a class="help__link" href="">Probl\xE9my s odesl\xE1n\xEDm</a></p><p><a class="help__link" href="">P\u0159\xEDlohy</a></p><p><a class="help__link" href="">P\u0159id\xE1n\xED soubor\u016F k odpov\u011Bdi</a></p><p><a class="help__link" href="">P\u0159ijet\xED p\u0159\xEDlohy</a></p></div><h2 class="help__title help__title--h2">Vytv\xE1\u0159en\xED a odes\xEDl\xE1n\xED zpr\xE1v</h2><p class="help__p">Pro vytvo\u0159en\xED nov\xE9 zpr\xE1vy stiskn\u011Bte tla\u010D\xEDtko v horn\xEDm menu po\u0161tovn\xED schr\xE1nky \u201Enov\xE1 zpr\xE1va\u201C Do pole \u201Ekomu\u201C zadejte adresu p\u0159\xEDjemce, nebo vyberte za adres\xE1\u0159e.</p><h2 class="help__title help__title--h2">Odes\xEDl\xE1n\xED zpr\xE1v v\xEDce p\u0159\xEDjemc\u016Fm:</h2><p class="help__p">Zpr\xE1vu m\u016F\u017Eete odeslat v\xEDce p\u0159\xEDjemc\u016Fm sou\u010Dasn\u011B. V p\u0159\xEDpad\u011B, \u017Ee chcete zadat v\xEDce p\u0159\xEDjemc\u016F, zadejte jejich adresy odd\u011Blen\xE9 \u010D\xE1rkami a mezerami nap\u0159. xxx@mail.cz , yvy@mail.cz , aaa@mail.cz atd.</p><p class="help__p">Pokud m\xE1te jednoho hlavn\xEDho p\u0159\xEDjemce zadejte jeho adresu do pole \u201Ekomu\u201C a zbyl\xE9 n\xE1sledn\u011B do pole \u201Ekopie\u201C \u2013 p\u0159\xEDjemci tak uvid\xED v\u0161echny adresy. V p\u0159\xEDpad\u011B, \u017Ee chcete, aby p\u0159\xEDjemc\u016Fm byli ostatn\xED p\u0159\xEDjemci skryti, pou\u017Eijte pole \u201Eskryt\xE1 kopie\u201C</p><h2 class="help__title help__title--h2">Odesl\xE1n\xED zpr\xE1vy z jin\xE9 adresy:</h2><p class="help__p">Chcete-li odeslat zpr\xE1vu z jin\xE9 e-mailov\xE9 adresy, zadejte na str\xE1nce e-mailov\xE9 adresy svou alternativn\xED adresu, po potvrzen\xED m\u016F\u017Eete v poli \u201EOd\u201C zm\u011Bnit svou adresu.</p><h2 class="help__title help__title--h2">Zpr\xE1va o doru\u010Den\xED:</h2><p class="help__p">Jestli\u017Ee chcete dostat zpr\xE1vu o doru\u010Den\xED po\u0161ty, stiskn\u011Bte tla\u010D\xEDtko \u201ENotify me\u201C p\u0159ed odesl\xE1n\xEDm e-mailu. POZOR! Potvrzen\xED je o doru\u010Den\xED nikoliv o p\u0159e\u010Dten\xED.</p><h2 class="help__title help__title--h2">Odlo\u017Een\xE9 odesl\xE1n\xED:</h2><p class="help__p">Pokud chcete, aby zpr\xE1va byla odesl\xE1na v ur\u010Dit\xFD den a \u010Das postupujte n\xE1sledovn\u011B: Stiskn\u011Bte ikonu s hodinami Povolte mo\u017Enost odeslat "when" at "what time" Nastavte datum a \u010Das pro odesl\xE1n\xED zpr\xE1vy</p><h2 class="help__title help__title--h2">Probl\xE9my s odesl\xE1n\xEDm:</h2><p class="help__p">Po\u0161ta ode\u0161la, ale p\u0159\xEDjemce ji nedostal:</p><ul class="help__ul"><li class="help__li">Zkontrolujte slo\u017Eku \u201Eodeslan\xE1\u201C \u2013 pokud zde e-mail nen\xED, mohlo doj\xEDt k chyb\u011B (ode\u0161lete znovu)</li><li class="help__li">D\u016Fvody nedoru\u010Den\xED:</li><li class="help__li">Adresa neexistuje</li><li class="help__li">Schr\xE1nka p\u0159\xEDjemce je p\u0159epln\u011Bn\xE1</li><li class="help__li">Adres\xE1t zablokoval svou schr\xE1nku</li><li class="help__li">Po\u0161tovn\xED server p\u0159\xEDjemce nep\u0159ij\xEDm\xE1 velk\xE9 zpr\xE1vy</li><li class="help__li">P\u0159\xEDjemce pova\u017Euje e-mail za spam</li><li class="help__li">Chyba p\u0159i ov\u011B\u0159en\xED odes\xEDlatele</li><li class="help__li">Nelze odeslat e-mail na @mail.cz</li><li class="help__li">\u017D\xE1dn\xFD takov\xFD u\u017Eivatel neexistuje</li><li class="help__li">Zpr\xE1va byla odm\xEDtnuta z d\u016Fvodu podez\u0159en\xED na spam</li><li class="help__li">Chyba: p\u0159\xEDli\u0161 mnoho p\u0159\xEDjemc\u016F</li><li class="help__li">Velikost zpr\xE1vy p\u0159ekra\u010Duje pevn\xFD limit</li><li class="help__li">Zpr\xE1va infikovan\xE1 virem</li><li class="help__li">C\xEDlov\xE1 adresa byla zablokov\xE1na kv\u016Fli poru\u0161en\xED z\xE1sad</li><li class="help__li">P\u0159\xEDjemce p\u0159ekro\u010Dil limit po\u010Dtu zpr\xE1v. Zkuste to pozd\u011Bji</li><li class="help__li">Velikost p\u0159ekro\u010Dena po\u0161tovn\xED schr\xE1nka</li><li class="help__li">Chyba: p\u0159ekro\u010Den\xED \u010Dasov\xE9ho limitu</li><li class="help__li">Chyba: p\u0159\xEDli\u0161 mnoho p\u0159ipojen\xED</li></ul><h2 class="help__title help__title--h2">P\u0159\xEDlohy:</h2><p class="help__p">Chcete ke zpr\xE1v\u011B p\u0159ipojit p\u0159\xEDlohu?</p><ul class="help__ul"><li class="help__li">Stiskn\u011Bte tla\u010D\xEDtko \u201Ep\u0159ipojit soubory\u201C</li><li class="help__li">Vyberte soubory, kter\xE9 chcete p\u0159ipojit a n\xE1sledn\u011B stiskn\u011Bte tla\u010D\xEDtko \u201Eotev\u0159\xEDt\u201C</li></ul><h2 class="help__title help__title--h2">P\u0159id\xE1n\xED soubor\u016F k odpov\u011Bdi:</h2><p class="help__p">Jestli\u017Ee obdr\u017E\xEDte zpr\xE1vu s p\u0159\xEDlohou, m\u016F\u017Eete na ni reagovat bez ztr\xE1ty t\xE9to p\u0159\xEDlohy. Vyberte mo\u017Enost \u201Ep\u0159idat soubory k odezv\u011B\u201C</p><h2 class="help__title help__title--h2">Prohl\xED\u017Een\xED dokument\u016F/soubor\u016F:</h2><p class="help__p">Vyberte soubor, kter\xFD si chcete prohl\xE9dnout, stiskn\u011Bte ho tla\u010D\xEDtkem my\u0161i, n\xE1sledn\u011B se soubor otev\u0159e v nov\xE9m okn\u011B. Nejde p\u0159ipojit soubor?</p></div><!-- 4 --><div class=""><h1 class="help__title help__title--h1">Spr\xE1va e-mail\u016F:</h1><div><p><a class="help__link" href="">Ozna\u010Den\xED zpr\xE1v</a></p><p><a class="help__link" href="">Vyhled\xE1v\xE1n\xED zpr\xE1v</a></p></div><p class="help__p">Ve v\xFDchoz\xEDm nastaven\xED je zobrazeno posledn\xEDch 30 zpr\xE1v, jestli\u017Ee chcete zobrazit p\u0159edchoz\xED zpr\xE1vy, stiskn\u011Bte tla\u010D\xEDtko \u201Edal\u0161\xED zpr\xE1vy\u201C</p><p class="help__p">Pro zm\u011Bnu po\u010Dtu zpr\xE1v postupujte n\xE1sledovn\u011B:</p><ul class="help__ul"><li class="help__li">Stiskn\u011Bte tla\u010D\xEDtko \u201Enastaven\xED\u201C -> ostatn\xED</li><li class="help__li">Stiskn\u011Bte tla\u010D\xEDtko \u201Eseznam zpr\xE1v\u201C zadejte po\u010Det</li></ul><h2 class="help__title help__title--h2">Ozna\u010Den\xED zpr\xE1v:</h2><p class="help__p">Zpr\xE1vy m\u016F\u017Eete r\u016Fzn\u011B ozna\u010Dit. M\u016F\u017Eete vybrat toto ozna\u010Den\xED:</p><ul class="help__ul"><li class="help__li">Ozna\u010Dit jako p\u0159e\u010Dten\xE9</li><li class="help__li">P\u0159esunout do jin\xE9 slo\u017Eky</li><li class="help__li">Pou\u017E\xEDt \u0161t\xEDtky</li><li class="help__li">Ozna\u010Dit jako spam</li><li class="help__li">Vymazat</li></ul></div><!-- 5 --><div class=""><h1 class="help__title help__title--h1">Slo\u017Eky:</h1><div class=""><p><a class="help__link" href="">Probl\xE9my se slo\u017Ekami</a></p><p><a class="help__link" href="">\u0160t\xEDtky</a></p><p><a class="help__link" href="">Odstran\u011Bn\xED \u0161t\xEDtku</a></p><p><a class="help__link" href="">\xDAprava \u0161t\xEDtk\u016F</a></p></div><ul class="help__ul"><li class="help__li">Doru\u010Den\xE1 po\u0161ta</li><li class="help__li">Odeslan\xE1</li><li class="help__li">Odstran\u011Bno</li><li class="help__li">Spam</li><li class="help__li">Koncepty</li><li class="help__li">Outbox</li><li class="help__li">Archiv</li></ul><h2 class="help__title help__title--h2">Probl\xE9my se slo\u017Ekami:</h2><p class="help__p">Nemohu p\u0159esunout e-mail \u2013 stiskn\u011Bte Ctrl + F5 n\xE1sledn\u011B vyma\u017Ete v\u0161echny soubory cookie</p><p class="help__p">Vytvo\u0159en\xE9 slo\u017Eky se nezobrazuj\xED v seznamu slo\u017Eek \u2013 jestli\u017Ee jsou spr\xE1vn\u011B vytvo\u0159eny a nezobrazuj\xED se, obsah je sbalen a je pot\u0159eba ho rozbalit.</p><p class="help__p">Je mo\u017En\xE9, \u017Ee je zapnut tzv. kompaktn\xED re\u017Eim prohl\xED\u017Een\xED, deaktivujte \u201Ezobrazen\xED\u201C -> kompaktn\xED re\u017Eim prohl\xED\u017Een\xED v prav\xE9m rohu obrazovky.</p><h2 class="help__title help__title--h2">\u0160t\xEDtky:</h2><p class="help__p">\u0160t\xEDtky pom\xE1haj\xED k lep\u0161\xED orientaci v po\u0161t\u011B. D\u016Fle\u017Eit\xE9 zpr\xE1vy jsou v seznamu zpr\xE1v ozna\u010Dov\xE1ny \u010Derven\u011B.</p><p class="help__p">V p\u0159\xEDpad\u011B, \u017Ee chcete pou\u017E\xEDt u e-mailu \u0161t\xEDtek, stiskn\u011Bte tla\u010D\xEDtko mo\u017Enosti \u201Eozna\u010Dit\u201C</p><h2 class="help__title help__title--h2">Odstran\u011Bn\xED \u0161t\xEDtku:</h2><ul class="help__ul"><li class="help__li">V otev\u0159en\xE9m e-mailu stiskn\u011Bte k\u0159\xED\u017Eek na p\u0159\xEDslu\u0161n\xE9m \u0161t\xEDtku</li><li class="help__li">V seznamu e-mail\u016F stiskn\u011Bte odkaz Label (vpravo naho\u0159e), vyberte n\xE1zev \u0161t\xEDtku, kter\xFD chcete odstranit a stiskn\u011Bte ho.</li></ul><h2 class="help__title help__title--h2">\xDAprava \u0161t\xEDtk\u016F:</h2><p class="help__p">Stisknout tla\u010D\xEDtko \u201ENastaven\xED\u201C -> \u201Eslo\u017Eky\u201C (vytv\xE1\u0159et \u0161t\xEDtky, zm\u011Bnit a odstranit \u0161t\xEDtky, t\u0159\xEDdit \u0161t\xEDtky, vytvo\u0159it pravidla automatick\xE9ho t\u0159\xEDd\u011Bn\xED \u0161t\xEDtk\u016F)</p></div><!-- 6 --><div class=""><h1 class="help__title help__title--h1">Import po\u0161ty z jin\xFDch str\xE1nek:</h1><div class=""><p class="help__p"><a class="help__link" href="">Nastaven\xED</a></p><p class="help__p"><a class="help__link" href="">Konfigurace nastaven\xED po\u0161ty</a></p><p class="help__p"><a class="help__link" href="">Probl\xE9my s uschov\xE1n\xEDm e-mail\u016F</a></p><p class="help__p"><a class="help__link" href="">Informace o odes\xEDlateli</a></p></div><p class="help__p">Sv\xE9 e-maily m\u016F\u017Eete p\u0159esm\u011Brovat z jin\xFDch po\u0161tovn\xEDch schr\xE1nek do Va\u0161\xED schr\xE1nky Mail.cz</p><h2 class="help__title help__title--h2">Nastaven\xED:</h2><p class="help__p">P\u0159ejd\u011Bte do nab\xEDdky nastaven\xED importovat po\u0161tu z ostatn\xEDch po\u0161tovn\xEDch schr\xE1nek V seznamu \u201Esb\u011Br emailu\u201C z bloku po\u0161tovn\xED schr\xE1nky zadejte u\u017Eivatelsk\xE9 jm\xE9no a heslo, kter\xE9 pou\u017E\xEDv\xE1te pro p\u0159ihl\xE1\u0161en\xED do jin\xE9 po\u0161tovn\xED schr\xE1nky. N\xE1sledn\u011B stiskn\u011Bte tla\u010D\xEDtko \u201Epovolit po\u0161tu\u201C Po \xFAsp\u011B\u0161n\xE9m p\u0159esm\u011Brov\xE1n\xED obdr\u017E\xEDte potvrzovac\xED e-mail.</p><h2 class="help__title help__title--h2">Konfigurace nastaven\xED po\u0161ty</h2><ul class="help__ul"><li class="help__li">Nab\xEDdka nastaven\xED importovat po\u0161tu z ostatn\xEDch po\u0161tovn\xEDch schr\xE1nek</li><li class="help__li">Stiskn\u011Bte n\xE1zev kolektrou po\u0161ty</li><li class="help__li">Postupujte dle odkazu Konfigurace, m\xE1te mo\u017Enost nakonfigurovat pravidla pro zpracov\xE1n\xED e-mail\u016F.</li><li class="help__li">Chcete-li prov\xE9zt z\xE1kaz, jd\u011Bte na Import po\u0161ty a stiskn\u011Bte \u201Ezak\xE1zat\u201C. Pokud kolektor ji\u017E nepot\u0159ebujete, m\u016F\u017Eete ho vymazat.</li></ul><h2 class="help__title help__title--h2">Probl\xE9my s uchov\xE1n\xEDm e-mail\u016F:</h2><p class="help__p">Heslo bylo zm\u011Bn\u011Bno na po\u0161tovn\xED schr\xE1nce, ze kter\xE9 jsou importov\xE1ny e-maily:</p><p class="help__p">Pokud jste heslo zm\u011Bnili, zvolte n\xE1sleduj\xEDc\xED postup:</p><ul class="help__ul"><li class="help__li">Nastaven\xED kolekce po\u0161ty</li><li class="help__li">Stiskn\u011Bte n\xE1zev na\u010Dten\xE9 po\u0161ty a stiskn\u011Bte tla\u010D\xEDtko \u201Ekonfigurovat\u201C</li><li class="help__li">Nastaven\xED p\u0159ipojen\xED k serveru</li><li class="help__li">Zadejte nov\xE9 heslo</li><li class="help__li">Ulo\u017Eit zm\u011Bny</li></ul><p class="help__p">P\u0159\xEDstup nebyl povolen p\u0159es p\u0159\xEDslu\u0161n\xFD protokol</p><ul class="help__ul"><li class="help__li">Ujist\u011Bte se, \u017Ee v nastaven\xED Va\u0161\xED po\u0161tovn\xED schr\xE1nky mail.cz je povolen p\u0159\xEDstup POP3 nebo IMAP.</li><li class="help__li">Otev\u0159ete nab\xEDdku nastaven\xED</li><li class="help__li">Vyberte e-mailov\xE9 klienty</li><li class="help__li">Vyberte po\u017Eadovan\xFD protokol</li></ul><p class="help__p">Prove\u010Fte kontrolu nastaven\xED po\u0161tovn\xED schr\xE1nky, ze kter\xE9 jsou e-maily importov\xE1ny a maj\xED aktivn\xED p\u0159\xEDstup POP3 nebo IMAPl.</p><p class="help__p">Sb\u011Bra\u010D po\u0161ty nedovoluje vybrat slo\u017Eku:</p><ul class="help__ul"><li class="help__li">Nelze vybrat slo\u017Eka pro kolekci zpr\xE1v, nakonfigurovali jste po\u0161tovn\xED kolektor pomoc\xED protokolu IMAP. Protokol neumo\u017E\u0148uje shroma\u017E\u010Fov\xE1n\xED e-mail\u016F do adres\xE1\u0159e.</li><li class="help__li">Import po\u0161ty</li><li class="help__li">Stiskn\u011Bte adresu po\u017Eadovan\xE9 po\u0161ty na\u010D\xEDt\xE1n\xED</li><li class="help__li">Konfigurovat -> nastaven\xED p\u0159ipojen\xED serveru</li><li class="help__li">Vyberte protokol POP v seznamu</li><li class="help__li">Ulo\u017Ete zm\u011Bny</li></ul><h2 class="help__title help__title--h2">Informace o odes\xEDlateli:</h2><ul class="help__li"><li class="help__li">Zm\u011Bna jm\xE9na:</li><li class="help__li">Nastaven\xED -> osobn\xED informace, podpis, portr\xE9t</li><li class="help__li">Zadat Va\u0161e jm\xE9no</li><li class="help__li">Ulo\u017Eit</li></ul></div><!-- 7 --><div class=""><h1 class="help__title help__title--h1">Podpis:</h1><div><p><a class="help__link" href="">Vytvo\u0159it</a></p><p><a class="help__link" href="">Odstran\u011Bn\xED podpis\u016F</a></p><p><a class="help__link" href="">Vlo\u017Eit portr\xE9t</a></p></div><h2 class="help__title help__title--h2">Vytvo\u0159it:</h2><ul class="hrlp__ul"><li class="help__li">M\u016F\u017Eete vytvo\u0159it jeden nebo v\xEDce podpis\u016F, tyto podpisy budou automaticky vkl\xE1d\xE1ny do zpr\xE1v.</li><li class="help__li">Nastaven\xED -> osobn\xED \xFAdaje, podpis, portr\xE9t</li><li class="help__li">Do sekce podpisov\xFD text zadejte podpis/y</li><li class="help__li">Jestli\u017Ee m\xE1te v\xEDce podpis\u016F, ur\u010Dete p\u0159i psan\xED e-mailu, kter\xFD podpis chcete pou\u017E\xEDt.</li><li class="help__li">P\u0159esunout kurzor nad aktu\xE1ln\xED podpis</li><li class="help__li">Stiskn\u011Bte tla\u010D\xEDtko</li><li class="help__li">Vyberte podpis</li></ul><h2 class="help__title help__title--h2">Odstran\u011Bn\xED podpisu:</h2><ul class="help__ul"><li class="help__li">P\u0159esunout kurzor nad prav\xFD horn\xED roh podpisu</li><li class="help__li">Stiskn\u011Bte tla\u010D\xEDtko</li></ul><h2 class="help__title help__title--h2">Vlo\u017Eit portr\xE9t:</h2><p class="help__p">Do e-mailu m\u016F\u017Eete vlo\u017Eit sv\u016Fj portr\xE9t:</p><p class="help__p">Nastaven\xED -> osobn\xED \xFAdaje, podpis, portr\xE9t -> stisknout tla\u010D\xEDtko \u201Est\xE1hnout portr\xE9t\u201C v M\u016Fj port\xE1l.</p><p class="help__p">Jestli\u017Ee m\xE1te profil na soci\xE1ln\xEDch s\xEDt\xEDch, budou p\u0159\xEDjemci e-mail\u016F vid\u011Bt odkaz v poli \u201EOd\u201C.</p></div><!-- 8 --><div class=""><h1 class="help__title help__title--h1">Zabezpe\u010Den\xED po\u0161ty:</h1><div class=""><p class="help__p"><a class="help__link" href="">Smazan\xE9 zpr\xE1vy</a></p><p class="help__p"><a class="help__link" href="">Potvrzen\xED \u010D\xEDsla mobiln\xEDho telefonu</a></p><p class="help__p"><a class="help__link" href="">Digit\xE1ln\xED podpis</a></p><p class="help__p"><a class="help__link" href="">Spam</a></p></div><p class="help__p">E-maily nejsou ve schr\xE1nce:</p><p class="help__p">Pokud sv\xE9 e-maily nenaleznete ve slo\u017Ece \u201Edoru\u010Den\xE1 po\u0161ta\u201C, pravd\u011Bpodobn\u011B byly p\u0159esunuty do jin\xE9 slo\u017Eky \u201Enap\u0159. odstran\u011Bn\xE1 po\u0161ta\u201C</p><h2 class="help__title help__title--h2">Smazan\xE9 zpr\xE1vy:</h2><p class="help__p">Jestli\u017Ee byla zpr\xE1va odstran\u011Bna p\u0159ed del\u0161\xED dobou ne\u017E je 1 m\u011Bs\xEDc, tuto zpr\xE1vu ji\u017E nelze dohledat, pokud byla zpr\xE1va odstran\u011Bna p\u0159ed m\xE9n\u011B ne\u017E 1 m\u011Bs\xEDcem, lze ji dohledat n\xE1sledovn\u011B:</p><ul class="help__ul"><li class="help__li">Vstupte do slo\u017Eky \u201Esmazan\xE9\u201C</li><li class="help__li">Vyberte po\u017Eadovanou zpr\xE1v</li><li class="help__li">Stiskn\u011Bte tla\u010D\xEDtko p\u0159esunout do slo\u017Eky a vyberte po\u017Eadovanou slo\u017Eku ze seznamu.</li></ul><h2 class="help__title help__title--h2">Potvrzen\xED \u010D\xEDsla mobiln\xEDho telefonu:</h2><p class="help__p">Pokud zapomenete heslo, bude V\xE1m nov\xE9 heslo zasl\xE1no na V\xE1\u0161 mobiln\xED telefon uveden p\u0159i registraci. Z bezpe\u010Dnostn\xEDch d\u016Fvod\u016F nen\xED jin\xE1 varianta mo\u017En\xE1.</p><h2 class="help__title help__title--h2">SPAM nebo-li nevy\u017E\xE1dan\xE1 po\u0161ta.</h2><p class="help__p">Mail.cz pou\u017E\xEDv\xE1 tzv. Anti-Spam, kter\xFD rozpozn\xE1 SPAM a automaticky podez\u0159el\xE9 zpr\xE1vy p\u0159esouv\xE1 do slo\u017Eky SPAM.</p><p class="help__p">Mail.cz antivirovou ochranou tak\xE9 odchoz\xED zpr\xE1vy, jestli\u017Ee bude odchoz\xED zpr\xE1va po\u0161kozena, nebude odesl\xE1na a odes\xEDlatel bude informov\xE1n.</p><p class="help__p">Pokud jste do slo\u017Eky \u201Edoru\u010Den\xE1 po\u0161ta\u201C obdr\u017Eeli po\u0161tu a je to SPMA klepn\u011Bte na zpr\xE1vu a ozna\u010Dte ji jako \u201Eje to spam\u201C, bude automaticky p\u0159esunuta do SPAMU a p\u0159\xEDslu\u0161n\xE9</p></div></article></main></div></div></div><!--        <div class="help__nav-pages">\n                    <button class="help__page-beck icon-arrow-down" type="button" disabled="disabled"></button>\n                    <button class="help__page-next icon-arrow-down" type="button"></button>\n                </div>--></div><footer class="footer--help"></footer></section>');
$templateCache.put('app/layout/header/header.html','<div class="header font-sizer--bigger-15"><div class="header__brand pointer" ui-sref="mail.inbox({mbox: \'INBOX\'})"><img class="header__logo" src="/images/logo.png" alt="Mail logo"></div><div><div class="header__spinner"><spinner is-global="true"></spinner></div></div><message-alert-send></message-alert-send><div class="header__left"><div class="header__search header__left-item"><search-mail ng-if="vm.$state.current.name !== \'help\'"></search-mail><search-help ng-if="vm.$state.current.name == \'help\'"></search-help></div><div class="header__left-item mrg__left20"><!--\u0422\u0443\u0442 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442 \u043C\u0435\u043D\u044E--><div class="navigation mrg__right10"><div class="navigation__row"><div class="navigation__item"><a class="navigation__link navigation__link--active" ui-sref="mail.inbox({mbox: \'INBOX\'})">{{ \'MAIL\' | translate }}</a></div><div class="navigation__item"><a class="navigation__link" ui-sref="contacts.main">{{ \'CONTACTS\' | translate }}</a></div><!--<div class="navigation__item">--><!--<a class="navigation__link" href="">\u0424\u0430\u0439\u043B\u044B</a>--><!--</div>--><!--<div class="navigation__item">--><!--<a class="navigation__link" href="">\u041D\u043E\u0432\u043E\u0441\u0442\u0438</a>--><!--</div>--><!--<div class="navigation__item">--><!--<a class="navigation__link" href="">\u0415\u0449\u0435</a>--><!--</div>--></div></div></div><!-- \u0422\u0435\u043C\u044B--><div class="header__settings header__left-item position"><!--<a class="header__settings-link">--> <button class="btn-y btn-y--settings pointer" ng-click="vm.isTheme = true;"><span class="icon-thems"></span></button></div><div class="header__settings header__left-item position"><!--<a class="header__settings-link">--> <button class="btn-y btn-y--settings pointer" uib-popover-template="\'app/components/settings-menu/settings-menu.html\'" popover-class="popover--settings" popover-placement="bottom-right" popover-animation="true" popover-trigger="\'outsideClick\'"><span class="icon-settings"></span></button></div><div class="header__avatar header__left-item mrg__none"><a class="header__avatar-link" href uib-popover-template="\'app/components/user-menu/user-menu-popover.html\'" popover-class="popover--user popover--no-arrow" popover-placement="bottom-right" popover-animation="true" popover-trigger="\'outsideClick\'"><div class="header__name">{{ vm.user.profile.email.split(\'@\')[0] }}</div><!--\u0422\u0443\u0442 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442 \u0430\u0432\u0430\u0442\u0430\u0440\u0430--><avatar-name class="avatar avatar--header avatar--size42" ng-if="!vm.user.profile.photo" name="vm.user.profile.first_name" email="vm.user.profile.email"></avatar-name><div class="avatar avatar--header avatar--size42" ng-if="vm.user.profile.photo"><img class="avatar__image" media-url="vm.user.profile.photo"></div></a></div></div></div><!--\n    \u0434\u043B\u044F \u0430\u043A\u0442\u0438\u0432\u0430\u0446\u0438\u0438 themes--active \u0434\u043E\u0431\u0430\u0432\u043B\u044F\u0435\u043C \u043A\u043B\u0430\u0441\u0441\n     \u0438 \u0435\u0449\u0435 \u0435\u0441\u043B\u0438 \u043C\u043E\u0436\u043D\u043E \u0442\u043E \u0434\u043E\u0431\u0430\u0432\u044C\n--><themes is-theme-active="vm.isTheme"></themes>');
$templateCache.put('app/layout/menu-contacts/menu-contacts.html','<div class="menu-contacts"><!--\u0425\u0435\u0434\u0435\u0440--><div class="menu-contacts__head"><a class="menu-contacts__link is-active" ui-sref="contacts.main({group_id: undefined})"><span class="">{{ \'ALL\' | translate }} </span><!--<span class="font__size12">10</span>--></a><hr class="hr menu-contacts__hr"></div><!--\u041E\u0441\u043D\u043E\u0432\u043D\u043E\u0439 \u043A\u043E\u043D\u0442\u0435\u043D\u0442--><div class="menu-contacts__content"><ul class="menu-main"><li class="menu-main__item menu-main__item" ng-repeat="contactGroup in vm.contactGroup.items"><button class="btn-y pointer font__size15" type="button" ui-sref="contacts.main({group_id: contactGroup.id})"><svg class="menu-main__icon group-icon group-pall--c-1"><use xlink:href="#grid-square"></use></svg> {{ contactGroup.name }}</button></li></ul><div class="group-setup"><div class="group-setup__row"><a class="group-setup__link" href ng-click="vm.openGroupAddPopup()">{{ \'CREATE_GROUP\' | translate }} </a><a class="group-setup__link" ui-sref="settings.contacts">{{ \'TUNE\' | translate }}...</a></div><hr class="hr"></div></div><!--<a href ng-click="vm.openContactImportFilePopup()">Import (for test)</a>--><!-- \u0424\u0443\u0442\u0435\u0440--><div class="menu-main-contacts__footer"></div></div>');
$templateCache.put('app/layout/menu-main/menu-main.html','<div class="menu-main-layout font-sizer--bigger-15"><div class="menu-main-layout__item"><div class="menu-main-layout__buttons"><button class="btn btn--red btn--size_l mrg__right5 flex--inline align-items--cn" ng-click="vm.openComposePopup({new: true})"><span class="icon-write"></span> <span class="menu-main-layout__btn-text mrg__left10">{{ \'WRITE\' | translate }}</span></button> <button class="menu-main-layout__buttons--btn-color btn btn--size_l btn--yellow mrg__right5 flex--inline align-items--cn padding" ng-click="vm.syncMail()"><span class="icon-spinner"></span></button> <button class="menu-main-layout__buttons--btn-color btn btn--size_l btn--yellow flex--inline align-items--cn padding" ui-sref="contacts.main"><span class="icon-contacts"></span></button></div><ul class="menu-main mrg__top20"><li class="menu-main__item" ng-repeat="folder in vm.folders.items" ng-hide="folder.name == \'Outbox\' && !folder.messagesCount"><a class="menu-main__link" ng-click="vm.goToUrl(folder)" ui-sref-active="menu-main__link--active" ng-class="{\'menu-main__link--gray\': !folder.messagesCount,\n                                \'menu-main__link--clear-btn-active\': (folder.name === \'Junk\' || folder.name === \'Trash\') && folder.messagesCount,\n                                \'menu-main__link--active\': vm.$state.params.mbox === folder.name\n                             }" ng-if="!folder.isSub && folder.name !== \'Templates\'"><!--icon-select-arrow--> <span class="is-nesting" ng-class="{\'is-nesting--open\': !folder.isOpen}" ng-if="folder.name === \'INBOX\' || folder.name === \'Drafts\'" ng-click="folder.isOpen = !folder.isOpen; $event.stopPropagation();"></span> <span class="{{ folder.icon }} menu-main__icon"></span> <span class="menu-main__link-caption">{{ folder.name | translate }}</span><div class="menu-main__additional-option"><button class="btn--clear-brush btn--not-style icon-brush font__size12" type="button" ng-click="vm.clearFolder($event, folder);"></button><div class="menu-main__counter" ng-if="folder.unseen && folder.name === \'INBOX\'"><span class="round round--yellow"></span> <strong class="color--white">{{ folder.unseen }}</strong></div></div></a><ul class="menu-main__sub menu-main" ng-if="folder.isOpen && folder.name !== \'Drafts\'"><li class="menu-main__item" ng-repeat="folder in vm.folders.items" ng-if="folder.isSub && folder.name !== \'Templates\'"><a class="menu-main__link" ui-sref="mail.inbox({mbox: folder.name, filter: undefined, tag_id: undefined})" ui-sref-active="menu-main__link--active" ng-class="{\'menu-main__link--gray\': !folder.messagesCount}"><span class="menu-main__link-caption" ng-if="folder.name !== \'Archive\'">{{ folder.caption }}</span> <span class="menu-main__link-caption" ng-if="folder.name === \'Archive\'">{{ folder.name | translate }}</span><!--<span class="icon-select-arrow is-nesting is-nesting&#45;&#45;open"></span>--><div class="menu-main__additional-option"><button class="btn--clear-brush btn--not-style icon-brush font__size12" type="button"></button><div class="menu-main__counter" ng-if="folder.unseen"><span class="round round--yellow"></span> <strong class="color--white">{{ folder.unseen }}</strong></div></div></a></li></ul><ul class="menu-main__sub menu-main" ng-if="folder.isOpen && folder.name === \'Drafts\'"><li class="menu-main__item" ng-repeat="folder in vm.folders.items" ng-if="folder.isSub && folder.name === \'Templates\'"><a class="menu-main__link" ui-sref="mail.inbox({mbox: folder.name, filter: undefined, tag_id: undefined})" ui-sref-active="menu-main__link--active" ng-class="{\'menu-main__link--gray\': !folder.messagesCount}"><span class="menu-main__link-caption" ng-if="folder.name !== \'Templates\'">{{ folder.caption }}</span> <span class="menu-main__link-caption" ng-if="folder.name === \'Templates\'">{{ folder.name | translate }}</span><!--<span class="icon-select-arrow is-nesting is-nesting&#45;&#45;open"></span>--></a></li></ul></li></ul><div class="menu-main-layout__item-content"><div class="folders-setup"><div class="folders-setup__row"><a class="folders-setup__link folders-setup__create" href ng-click="vm.openFolderCreatePopup()">{{ \'CREATE_FOLDER\' | translate }} </a><a class="folders-setup__link folders-setup__settings" ui-sref="settings.folders"><!--{{ \'TUNE\' | translate }}--> <span class="icon-settings font__size15"></span></a></div><hr class="hr folders-setup__hr"></div></div></div><div class="menu-main-layout__item mrg__top20"><div class="menu-main-layout__item-content padding--left10 padding--right10"><ul class="menu-main"><li class="menu-main__item"><button class="btn-y btn-y--active pointer font__size15" type="button" ui-sref="mail.inbox({mbox: undefined, filter: \'flagged\', tag_id: undefined})" ui-sref-active="btn-y--active"><span class="icon-icon-flag-light menu-main__icon"></span> <span class="menu-main__link-caption">{{ \'IMPORTANT\' | translate }}</span></button></li><li class="menu-main__item"><button class="btn-y pointer font__size15" type="button" ui-sref="mail.inbox({mbox: undefined, filter: \'unseen\', tag_id: undefined})" ui-sref-active="btn-y--active"><span class="icon-icon-mail-light menu-main__icon"></span> <span class="menu-main__link-caption">{{ \'UNREAD\' | translate }}</span></button></li><li class="menu-main__item"><button class="btn-y pointer font__size15" type="button" ui-sref="mail.inbox({mbox: undefined, filter: \'attach\', tag_id: undefined})" ui-sref-active="btn-y--active"><span class="icon-icon-screpka menu-main__icon"></span> <span class="menu-main__link-caption">{{ \'WITH_ATTACHMENT\' | translate }}</span></button></li></ul></div></div><div class="menu-main-layout__item mrg__top20"><div class="menu-main-layout__item-content padding--left10 padding--right10"><ul class="menu-main menu-main--tags"><li class="menu-main__item" ng-repeat="tag in vm.tags.items" dnd-draggable="tag"><button class="menu-main__tag btn-y pointer" type="button" ui-sref="mail.inbox({mbox: undefined, filter: undefined, tag_id: tag.id})" ui-sref-active="menu-main__link--active"><div class="square square--green btn-y__icon" style="background: {{ tag.bgcolor }}"></div>{{ tag.tag_name }}</button> <button class="menu-main__tag-minimize btn-y pointer btn--act--y-shw" type="button" ui-sref="mail.inbox({mbox: undefined, filter: undefined, tag_id: tag.id})" ui-sref-active="menu-main__link--active"><div class="square square--green btn-y__icon" style="background: {{ tag.bgcolor }}"><span class="square__text">{{ tag.tag_name }}</span></div></button></li></ul></div></div><div class="menu-main-layout__item menu-main-layout__settings-tags"><div class="menu-main-layout__item-content"><div class="folders-setup"><div class="folders-setup__row"><a class="folders-setup__link" href ng-click="vm.openTagCreatePopup()">{{ \'CREATE_TAG\' | translate }} </a><a class="folders-setup__link" ui-sref="settings.tags">{{ \'LIST_TAGS\' | translate }}...</a></div><hr class="hr folders-setup__hr"></div></div></div><div class="menu-main-layout__item mrg__top20"><div class="menu-main-layout__item-content"><button class="menu-main-layout__other-mails btn-y btn-y--size26 btn-y--border btn-y--image-icon btn-y--white pointer" type="button" ui-sref="settings.accounts"><span class="btn-y__name">{{ \'ADD_OTHER_MAIL\' | translate }} </span><img class="btn-y__icon" src="/images/gmail.png"> <img class="btn-y__icon" src="/images/yahoo-mail.png"></button> <a class="menu-main-layout__other-mails-minimize" ui-sref="settings.accounts"><span class="icon-other-mails color--blue"></span></a></div></div><!--<div class="menu-main-layout__item mrg__top20">--><!--<div class="menu-main-layout__item-content">--><!--<a class="menu-main-layout__button-tarif" ui-sref="storage">--><!--<img class="img-responsive" src="/images/tarif-button.png">--><!--</a>--><!--<a class="menu-main-layout__button-tarif-minimize" ui-sref="storage">--><!--<span class="icon-mail-space color&#45;&#45;green"></span>--><!--</a>--><!--</div>--><!--</div>--><div class="menu-main-layout__item mrg__top20"><div class="menu-main-layout__item-content"><div class="space-progress"><progress class="space-progress__bar" value="{{ vm.user.profile.usedQuota }}" max="{{  vm.user.profile.freeQuota }}" ng-click="vm.openStoragePopup()"></progress><div class="space-progress__content mrg__top5"><span class="menu-main-layout__button-tarif space-progress__used-space"><span class="menu-main-layout__button-tarif-dop">{{ vm.user.profile.usedQuota }} MB {{ \'OF_2\' | translate }} </span>{{ vm.user.profile.quota }} MB </span><button class="menu-main-layout__button-tarif btn btn--size_xs btn--yellow padding--left8 padding--right8" type="button" ng-click="vm.openStoragePopup()">{{ \'STORAGE_UP_SPACE\' | translate }}</button><!--<a class="menu-main-layout__button-tarif-minimize" ui-sref="storage">--><!--<span class="icon-mail-space color&#45;&#45;green"></span>--><!--</a>--> <a class="menu-main-layout__button-tarif-minimize" ng-click="vm.openStoragePopup()"><span class="icon-mail-space color--green"></span><progress class="space-progress__bar" value="{{ vm.user.profile.usedQuota }}" max="{{  vm.user.profile.quota }}"></progress></a></div></div></div></div><!--<test-draggable></test-draggable>--></div>');
$templateCache.put('app/mail/inbox/inbox.html','<inbox-header messages="vm.messages"></inbox-header><div class="inbox-templates font-sizer--bigger-15" ng-if="vm.$state.params.mbox === \'Templates\'"><div class="inbox-templates__new-template-message"><span class="inbox-templates__text-message">{{ \'INBOX_TEMPLATE_TEXT_MESSAGE_THIS_STORED\' | translate }} </span><button class="btn btn--normal btn--size_xs btn--silver-hover btn--silver-bg-y-shw width--aut mrg__top10" type="button" ng-click="vm.openComposePopup({template: true})">{{ \'BTN_CREATE_TEMPLATE\' | translate }}</button></div></div><div class="search-result" ng-if="vm.isNoResult"><strong>{{ \'SEARCH_RESULT\' | translate }}\xABinfo\xBB</strong></div><div class="search-result search-result--no-result" ng-if="(vm.messages.params.mbox === \'INBOX\' || !vm.messages.params.mbox) && !vm.messages.params.search && !vm.messages.params.tag_id && !vm.messages.params.filter &&!vm.messages.items.length">{{ \'YOU_IS_NOT_MESSAGE\' | translate }}.<div class="mrg__top10"><a class="link link--black link--underline" ng-click="vm.openComposePopup({new: true})">{{ \'WRITE_LETTERS\' | translate }}</a></div></div><div class="search-result search-result--no-result" ng-if="vm.messages.params.mbox && vm.messages.params.mbox !== \'INBOX\' && !vm.messages.params.search && !vm.messages.params.tag_id && !vm.messages.params.filter &&!vm.messages.items.length">{{ \'IN_FOLDERS_NOT_LETTERS_1\' | translate }} \xAB<to-folder-name name="vm.$state.params.mbox"></to-folder-name>\xBB {{ \'IN_FOLDERS_NOT_LETTERS_2\' | translate }}.<div class="mrg__top10"><a class="link link--black link--underline" ui-sref="mail.inbox({mbox: \'INBOX\'})">{{ \'GO_TO_INBOX\' | translate }}</a></div></div><div class="search-result search-result--no-result" ng-if="vm.messages.params.tag_id && !vm.messages.items.length">{{ \'LETTERS_TAG_NOT_1\' | translate }} \xAB<to-tag-name tag-id="vm.$state.params.tag_id"></to-tag-name>\xBB {{ \'LETTERS_TAG_NOT_2\' | translate }}.<div class="mrg__top10"><a class="link link--black link--underline" ui-sref="mail.inbox({mbox: \'INBOX\'})">{{ \'GO_TO_INBOX\' | translate }}</a></div></div><div class="search-result search-result--no-result" ng-if="vm.messages.params.filter === \'unseen\' && !vm.messages.items.length">{{ \'NOT_UNREAD_LETTERS\' | translate }}.<div class="mrg__top10"><a class="link link--black link--underline" ui-sref="mail.inbox({mbox: \'INBOX\'})">{{ \'GO_TO_INBOX\' | translate }}</a></div></div><div class="search-result search-result--no-result" ng-if="vm.messages.params.filter === \'flagged\' && !vm.messages.items.length">{{ \'LETTERS_TAG_IMPORTANT_IS_NOT\' | translate }}<div class="mrg__top10"><a class="link link--black link--underline" ui-sref="mail.inbox({mbox: \'INBOX\', filter: undefined, tag_id: undefined})">{{ \'GO_TO_INBOX\' | translate }}</a></div></div><div class="search-result search-result--no-result" ng-if="vm.messages.params.search && !vm.messages.items.length"><strong class="font__size18">{{ \'NOT_NOW_SEARCH_LETTERS\' | translate }}</strong><p class="color--gray mrg__top20">{{ \'RECOMMENDATIONS\' | translate }}:</p><ul class="list-dash list-dash--gray"><li class="list-dash__item">{{ \'MAKE_ARE_NOT_ERRORS\' | translate }}</li><li class="list-dash__item">{{ \'TRY_LENGTH_QUERY\' | translate }}</li><li class="list-dash__item">{{ \'IF_REMEMBER_SENDER_OR_OTHER\' | translate }}</li><li class="list-dash__item">{{ \'TRY_FIND_LETTER_MANUALLY\' | translate }}</li></ul></div><div class="main-plash" ng-if="vm.messages.items.length && vm.$state.params.mbox === \'Junk\'"><div class="main-plash__message"><div class="main-plash__text">{{ \'SPAM_PLASH_TEXT_THIS_FOLDER_CONTAINS\' | translate }}</div><button class="btn btn--normal btn--silver-hover btn--size_s btn--silver-bg-y-shw mrg__top8" type="button" ng-click="vm.clearFolder($event, {name: \'Junk\'})">{{ \'CLEAR_FOLDER\' | translate }}</button></div></div><div class="inbox-list"><inbox-message-list messages="vm.messages"></inbox-message-list><div class="inbox-list__pagination"><paginate-button data="vm.messages"></paginate-button></div></div><div class="inbox-footer mrg__top30"><div class="inbox-footer__row"><div><!--<div class="font__size13">--><!--\u0412\u044B \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u043B\u0438 \u0432\u0441\u0435 \u043F\u0438\u0441\u044C\u043C\u0430 \u0437\u0430 \u043C\u0430\u0440\u0442 2017 \u0433\u043E\u0434\u0430--><!--</div>--><!--<div class="mrg__top20">--><!--<a class="link link&#45;&#45;underline link&#45;&#45;next" href="">\u0430\u043F\u0440\u0435\u043B\u044C--><!--<span class="icon-next"></span></a>--><!--</div>--></div><date-sort from="vm.messages.params.search_start" to="vm.messages.params.search_end"></date-sort></div></div>');
$templateCache.put('app/layout/menu-settings/menu-settings.html','<div class="menu-settings-layout font-sizer--bigger-15"><div class="menu-settings"><div class="menu-settings__list"><div class="menu-settings__item"><a class="menu-settings__link" ui-sref="settings.main" ui-sref-active="menu-settings__link--active">{{ \'MANAGE_ACCOUNT\' | translate }}</a></div><div class="menu-settings__item"><a class="menu-settings__link" ui-sref="settings.folders" ui-sref-active="menu-settings__link--active">{{ \'FOLDERS\' | translate }}</a></div><div class="menu-settings__item"><a class="menu-settings__link" ui-sref="settings.tags" ui-sref-active="menu-settings__link--active">{{ \'TAGS\' | translate }}</a></div><div class="menu-settings__item"><a class="menu-settings__link" ui-sref="settings.rules" ui-sref-active="menu-settings__link--active">{{ \'PROCESSING_RULES\' | translate }}</a></div><div class="menu-settings__item"><a class="menu-settings__link" ui-sref="settings.accounts" ui-sref-active="menu-settings__link--active">{{ \'MAILS_FROM_OTHER_BOXES\' | translate }}</a></div></div></div><hr class="hr hr--dotted menu-settings-layout__hr"><div class="menu-settings"><div class="menu-settings__list"><div class="menu-settings__item"><a class="menu-settings__link" ui-sref="settings.contacts" ui-sref-active="menu-settings__link--active">{{ \'SETTINGS_CONTACTS\' | translate }}</a></div></div></div><hr class="hr hr--dotted menu-settings-layout__hr"><div class="menu-settings"><div class="menu-settings__list"><div class="menu-settings__item"><a class="menu-settings__link menu-settings__link--not-decoration" href uib-popover-template="\'app/components/lang-list/lang-list-popover.html\'" popover-class="popover--choose-lang" popover-placement="bottom" popover-animation="true" popover-trigger="\'outsideClick\'" popover-is-open="vm.isOpenLangList">{{ \'LANGUAGE\' | translate }}: <span class="menu-settings__link-choose-element"><img class="width--size20" src="images/country/{{ vm.useLang.icon }}"> {{ vm.useLang.lang | translate }}</span></a></div><div class="menu-settings__item mrg__top20"><a class="menu-settings__link menu-settings__link--timezone menu-settings__link--not-decoration" href uib-popover-template="\'app/components/timezone-list/timezone-list-popover.html\'" popover-class="popover--choose-time-zone" popover-placement="bottom" popover-animation="true" popover-trigger="\'outsideClick\'" popover-is-open="vm.isOpen">{{ \'CLOCK\' | translate }}:<span class="menu-settings__link-choose-element">{{ vm.user.profile.timezone }}</span></a></div></div></div><div class="menu-settings-layout__padding"><button class="btn-y btn-y--size26 btn-y--border pointer mrg__top20" type="button" href ng-click="vm.openPasswordChangePopup()">{{ \'BTN_CHANGE_PASSWORD\' | translate }}</button><p class="menu-settings-layout__pass-info mrg__top5">{{ \'SETTINGS_MENU_NOTIFIC_RECOMENDATION\' | translate }}.</p></div></div>');
$templateCache.put('app/mail/message/message.html','<inbox-header messages="vm.messages"></inbox-header><div class="mail-message"><!--<div class="mail-message__main-content">--><!--</div>--><!--\n<div class="mail-message__right-sidebar">\n    <div class="additional-mail-info">\n        <div class="additional-mail-info__letters-on-thems"\n             ng-class="{\'is-open\': vm.selectedPartInfo === \'subject\'}">\n            <div class="additional-mail-info__caption" ng-click="vm.getInfoMessage(\'subject\')">\n                 {{ \'LETTERS_ON_THEME\' | translate }}\n            </div>\n            <div class="additional-mail-info__list" ng-if="vm.selectedPartInfo === \'subject\'">\n                <div class="additional-mail-info__items">\n                    <a class="additional-mail-info__item"\n                       ng-class="{\'additional-mail-info__item--active\': (vm.message.model.number == message.number && vm.message.model.connection_id == message.connection_id)}"\n                       ng-repeat="message in vm.info.messages.items"\n                       ng-if="!vm.info.isLoading"\n                       ng-click="vm.goToUrl(message)">\n                        <div class="additional-mail-info__item-header">\n                            <span class="additional-mail-info__name">{{ message.from || message.fromAddress }}</span>\n                            <span class="additional-mail-info__date">\n                                <to-date data="message.from"></to-date>\n                            </span>\n                        </div>\n                        <div class="additional-mail-info__text-message">\n                            {{ message.Subject }}\n                        </div>\n                    </a>\n                </div>\n                <div class="additional-mail-info__items-spinner text-center" ng-if="vm.info.isLoading">\n                    <spinner is-global="false" is-open="true"></spinner>\n                </div>\n            </div>\n            <div class="text-left"\n                 ng-if="vm.selectedPartInfo === \'subject\' && !vm.info.messages.items.length && !vm.info.isLoading">\n                \u041F\u0438\u0441\u0435\u043C \u043D\u0435\u0442\n            </div>\n        </div>\n        <div class="additional-mail-info__attachments" ng-class="{\'is-open\': vm.selectedPartInfo === \'attach\'}">\n            <div class="additional-mail-info__caption" ng-click="vm.getInfoMessage(\'attach\')">\n                {{ \'ATTACHMENTS\' | translate }}\n            </div>\n            <div ng-if="vm.selectedPartInfo === \'attach\'">\n                <div class="additional-mail-info__list">\n                    <div class="additional-mail-info__items attachments flex--row-wrap just-content--sp-are">\n                        <span class="additional-mail-info__attach-item" ng-repeat="message in vm.info.messages.items">\n                            <div class="attachments__item" ng-repeat="attachment in message.attachmentsData">\n                                <attach-item attach="attachment" message="message"></attach-item>\n                            </div>\n                        </span>\n                    </div>\n                    <div class="additional-mail-info__items-spinner text-center" ng-if="vm.info.isLoading">\n                        <spinner is-global="false" is-open="true"></spinner>\n                    </div>\n                </div>\n                <div class="text-left" ng-if="!vm.info.isLoading && !vm.info.attachmentsData.length">\n                    \u0412\u043B\u043E\u0436\u0435\u043D\u0438\u0439 \u043D\u0435\u0442\n                </div>\n            </div>\n        </div>\n        <div class="additional-mail-info__letters-from" ng-class="{\'is-open\': vm.selectedPartInfo === \'from\'}">\n            <div class="additional-mail-info__caption"\n                 ng-click="vm.getInfoMessage(\'from\')">\n                {{ \'LETTERS_FROM\' | translate }} {{ vm.message.model.from || vm.message.model.fromAddress }}\n            </div>\n            <div class="additional-mail-info__list" ng-if="vm.selectedPartInfo === \'from\'">\n                <div class="additional-mail-info__items additional-mail-info__items--letters-from"\n                     ng-repeat="message in vm.info.messages.items"\n                     ng-if="!vm.info.isLoading">\n                    <a class="additional-mail-info__item"\n                       ng-class="{\'additional-mail-info__item--active\': (vm.message.model.number == message.number && vm.message.model.connection_id == message.connection_id)}"\n                       ng-click="vm.goToUrl(message)">\n                        <div class="additional-mail-info__item-header">\n                            <span class="additional-mail-info__name">{{ message.from || message.fromAddress }}</span>\n                            <span class="additional-mail-info__date">\n                                <to-date data="message.from"></to-date>\n                            </span>\n                        </div>\n                        <div class="additional-mail-info__text-message">\n                            {{ message.Subject }}\n                        </div>\n                    </a>\n                </div>\n                <div class="additional-mail-info__items-spinner text-center" ng-if="vm.info.isLoading">\n                    <spinner is-global="false" is-open="true"></spinner>\n                </div>\n            </div>\n            <div class="text-left"\n                 ng-if="vm.selectedPartInfo === \'from\' && !vm.info.messages.items.length && !vm.info.isLoading">\n                \u041F\u0438\u0441\u0435\u043C \u043D\u0435\u0442\n            </div>\n        </div>\n    </div>\n</div>\n    --><!-- \u0425\u0435\u0434\u0435\u0440 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F --><div class="mail-message__head"><div class="flex flex--colum"><div class="mail-message__title mrg-top18">{{ vm.message.model.Subject }}</div><div class="info-sender flex--inline" ng-mouseover="vm.message.hover = true" ng-mouseleave="vm.message.hover = false"><div class="mail-message__importance pointer" ng-class="{\'opacity--0\': !vm.message.hover && !vm.message.model.important}" ng-click="vm.setImportant()"><span class="icon-important" ng-class="{\'color--red\': vm.message.model.important}"></span></div><div class="info-sender__avatar flex"><avatar-name class="avatar avatar--settings avatar--size42 avatar--second-style mrg__auto" name="vm.message.model.from" email="vm.message.model.fromAddress"></avatar-name><!--<avatar-name class="avatar avatar&#45;&#45;settings avatar&#45;&#45;size42 avatar&#45;&#45;second-style mrg__auto"--><!--name="vm.message.model.to[0].name" email="vm.message.model.to[0].address"--><!--ng-if="vm.$state.params.mbox === \'Sent\'"></avatar-name>--></div><div class="info-sender__title"><div class="info-sender__from-whom"><a class="link--black" href ng-click="vm.openContactView(vm.message.model.fromAddress)">{{ vm.message.model.from }} </a><span class="info-sender__from-whom__mail-name">{{ vm.message.model.fromAddress }}</span></div><div class="info-sender__to-whom flex--inline"><span ng-if="vm.$state.params.mbox !== \'Sent\'">{{ \'YOU\' | translate }}: </span><span ng-if="vm.$state.params.mbox === \'Sent\'">{{ \'RECIPIENT\' | translate }}:</span><!-- <div class="avatar avatar&#45;&#45;settings avatar&#45;&#45;size20 avatar&#45;&#45;second-style mrg__left10"\n                              ng-if="vm.isFromOpen && vm.$state.params.mbox !== \'Sent\'">\n                             <img class="avatar__image" src="/images/avatar-personal.svg" alt="">\n                         </div>--><avatar-name class="avatar avatar--settings avatar--size20 avatar--second-style mrg__left10" name="vm.message.model.to[0].name" email="vm.message.model.to[0].address" ng-if="vm.isFromOpen && vm.$state.params.mbox !== \'Sent\'"></avatar-name><!--<div class="avatar avatar&#45;&#45;settings avatar&#45;&#45;size20 avatar&#45;&#45;second-style mrg__left10"--><!--ng-if="vm.isFromOpen && vm.$state.params.mbox === \'Sent\'">--><!--<img class="avatar__image" src="/images/avatar-personal.svg" alt="">--><!--</div>--><avatar-name class="avatar avatar--settings avatar--size20 avatar--second-style mrg__left10" name="vm.message.model.to[0].name" email="vm.message.model.to[0].address" ng-if="vm.isFromOpen && vm.$state.params.mbox === \'Sent\'"></avatar-name><span class="mrg__left5" ng-if="vm.isFromOpen && vm.$state.params.mbox !== \'Sent\'">{{ vm.message.model.to[0].address }} </span><span class="mrg__left5" ng-if="vm.isFromOpen && vm.$state.params.mbox === \'Sent\'">{{ vm.message.model.to[0].address }} </span><!--<button class="btn btn&#45;&#45;not-style btn&#45;&#45;not-events bth&#45;&#45;toggle-arrow icon-arrow-up font__size10 color&#45;&#45;gray"\n                                type="button"\n                                ng-click="vm.isFromOpen = !vm.isFromOpen"></button>--> <a class="font__size10 color--gray mrg__left10" href ng-class="{\'icon-arrow-up\': vm.isFromOpen, \'icon-arrow-down\': !vm.isFromOpen}" ng-click="vm.isFromOpen = !vm.isFromOpen"></a></div></div><div class="info-sender__date mrg__right"><to-date date="vm.message.model.date.date"></to-date></div></div></div></div><div class="mail-message__labels"><div class="mail-message__labels-content"><div class="letter-tags letter-tags--poss-remove" style="background: {{ tag.bgcolor }}; color: {{ tag.color }}" ng-repeat="tag in vm.message.model.tags"><span class="letter-tags__name">{{ tag.tag_name }}</span> <button class="btn btn--not-style btn--circle letter-tags__icon" ng-click="vm.setUnTag(tag)"><span class="icon-remove-thick"></span></button></div></div></div><!-- \u0422\u0435\u043B\u043E \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F --><div class="mail-message__body"><div class="flex flex--colum"><div class="body-message"><!--\u0421\u0430\u043C\u043E \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435--><div class="body-message__content" ng-bind-html="vm.getTrustHtml(vm.message.model.body)"></div></div></div></div><!-- \u041F\u0440\u0438\u043A\u0440\u0435\u043F\u043B\u0435\u043D\u043D\u044B\u0435 \u0444\u0430\u0439\u043B\u044B --><div class="mail-message__attachments" ng-if="vm.message.model.attachmentsData.length"><div class="mail-message__attachments-content attachments"><div class="attachments__item" ng-repeat="attachment in vm.message.model.attachmentsData"><attach-item attach="attachment" message="vm.message.model" index="$index" attachments="vm.message.model.attachmentsData"></attach-item></div><div class="attachments__item attachments__item--download" ng-if="vm.message.model.attachmentsData.length"><attach-button-upload message="vm.message.model"></attach-button-upload></div></div></div><!-- \u0411\u044B\u0441\u0442\u0440\u044B\u0439 \u043E\u0442\u0432\u0435\u0442--><div class="flex flex--colum"><div class="mail-message__reply flex--inline"><div class="mail-message__reply__avatar flex"><div class="avatar avatar--settings avatar--size42 avatar--second-style mrg__top"><img class="avatar__image" src="/images/avatar-personal.svg" alt=""></div></div><!-- \u043F\u043E\u043B\u0435 \u0434\u043B\u044F \u0432\u0432\u043E\u0434\u0430 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F \u0441 \u0434\u0432\u0443\u043C\u044F \u0441\u043E\u0442\u043E\u044F\u043D\u0438\u044F\u043C\u0438--><!--\n               **! \u042D\u0442\u043E\u0442 \u043A\u043B\u0430\u0441\u0441 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0430\u0442\u0435\u043B\u0435\u043C \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438 \u0434\u043B\u044F \u043F\u043E\u043B\u044F \u0432\u0432\u043E\u0434\u0430\n                   >>> quick-reply--used-input-message\n            --><div class="quick-reply" ng-click="vm.isSendTextOpen = true" ng-class="{\'quick-reply--used-input-message\': vm.isSendTextOpen}"><!-- \u0434\u043E \u043D\u0430\u0436\u0430\u0442\u0438\u044F--><div class="quick-reply__not-form-message"><div class="quick-reply__not-form-message__title">{{ \'MESSAGE_PLACEHOLDER_QUICK_REPLAY\' | translate }} <span class="quick-reply__not-form-message__title__method">{{ \'REPLAY\' | translate }}</span> {{ \'OR\' | translate }} <span class="quick-reply__not-form-message__title__method" ng-click="vm.goToFwd()"><span class="quick-reply__not-form-message__title__method">{{ \'FORWARD\' | translate }}</span></span></div></div><!-- \u043F\u043E\u0441\u043B\u0435 \u043D\u0430\u0436\u0430\u0442\u0438\u044F--><div class="quick-reply__form-message"><button class="quick-reply__form-message__btn-close btn btn--not-style btn-y--close btn--not-events font__size16" type="button" ng-click="vm.isSendTextOpen = false; $event.stopPropagation();"><img class="btn-y__icon" src="/images/cancel.svg"></button><!-- \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438\u044F \u043E \u0430\u0434\u0440\u0435\u0441\u0441\u0430\u0442\u0435--><div class="quick-reply__form-message__header to-whom"><span class="to-whom__title">{{ \'TO\' | translate }}:</span> <span class="to-whom__mail-recipient">{{ vm.message.model.from ? vm.message.model.from : vm.message.model.fromAddress }}</span></div><form class="message-input" name="form" ng-submit="vm.send(form)"><!-- \u041F\u043E\u043B\u0435 \u0432\u0432\u043E\u0434\u0430 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F--><div class="quick-reply__form-message__content"><!-- \u041F\u043E\u043B\u0435--><textarea class="textarea textarea--not-resize font__size14" name="massage" ng-if="vm.isSendTextOpen" set-focus msd-elastic placeholder="{{ \'INPUT_PLACEHOLDER_ENTER_YOUR_MESSAGE\' | translate }}" ng-model="vm.sendForm.model.body"></textarea></div><!-- \u041E\u0441\u043D\u043E\u0432\u043D\u0430\u044F \u043D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u044F \u043F\u043E \u0434\u0435\u0441\u0442\u0432\u0438\u044F\u043C--><div class="quick-reply__form-message__footer control-send-message"><button class="btn btn--yellow btn--act--y-shw btn--size_sm" type="submit">{{ \'SEND\' | translate }}</button> <button class="btn btn--not-style btn--attach btn--size_sm btn--not-events width--size28 icon-icon-screpka font__size16 mrg__left5" type="file" multiple="multiple" accept="**/*" ngf-select="vm.upload($files, $invalidFiles)"></button> <span class="quick-reply__form-message__footer__allform font__size15" ng-click="vm.goToAnswer()">{{ \'GO_TO_FULL_ANSWER_FORM\' | translate }}</span></div></form></div></div></div><div class="row mrg__top20"><div class="col-xs-12"><attach-upload attachments-data="vm.sendForm.model.attachmentsData" message="vm.sendForm" is-uploading="vm.isUploading"></attach-upload></div></div></div></div><div class="messages-nav"><a class="messages-nav__item mrg__left" ng-if="vm.paginate.next" ui-sref="mail.message({id: vm.paginate.next.number, connection_id: vm.paginate.next.connection_id, mbox: vm.paginate.next.mbox})"><span class="messages-nav__icon icon-preview"></span> <span class="messages-nav__avatar"><avatar-name class="avatar avatar--settings avatar--size28 avatar--second-style mrg__auto" name="vm.paginate.next.from" email="vm.paginate.next.fromAddress"></avatar-name></span><span class="messages-nav__message-title">{{ vm.paginate.next.from || vm.paginate.next.fromAddress }}</span> <span class="messages-nav__message-body">{{ vm.paginate.next.Subject }}</span> </a><a class="messages-nav__item mrg__right" ng-if="vm.paginate.prev" ui-sref="mail.message({id: vm.paginate.prev.number, connection_id: vm.paginate.prev.connection_id, mbox: vm.paginate.prev.mbox})"><span class="messages-nav__avatar"><avatar-name class="avatar avatar--settings avatar--size28 avatar--second-style mrg__auto" name="vm.paginate.prev.from" email="vm.paginate.prev.fromAddress"></avatar-name></span><span class="messages-nav__message-title">{{ vm.paginate.prev.from || vm.paginate.prev.fromAddress }}</span> <span class="messages-nav__message-body">{{ vm.paginate.prev.Subject }}</span> <span class="messages-nav__icon messages-nav__icon--next icon-next"></span></a></div>');
$templateCache.put('app/mail/compose/compose.html','<compose-header></compose-header><form class="compose" name="sendForm" ng-submit="vm.send(sendForm)" novalidate><div class="div"><div class="compose-from mrg__top20"><div class="compose-from__item font__size13" ng-if="vm.$state.params.template"><button class="btn btn--size_s btn--yellow btn--border-yellow btn--act--y-shw width--inh" type="button" ng-click="vm.saveTemplate()">{{ \'BTN_CREATE_TEMPLATE\' | translate }}</button></div><div class="compose-from__item font__size13"><button class="btn btn--size_s btn--yellow btn--border-yellow btn--act--y-shw width--inh" type="submit">{{ \'SEND\' | translate }}</button></div><div class="compose-from__item font__size13">{{ \'FROM_WHOM\' | translate }}:</div><div class="compose-from__item font__size15"><div class="avatar avatar--size28"><img class="avatar__image" src="/images/avatar.png"></div></div><div class="compose-from__item font__size15 width--inh"><ui-select ng-model="vm.sendForm.model.from_connection" class="select-list select-list--size_l select-list--no-border select-list--not-border-of-sides width-inh" theme="select2" search-enabled="false"><ui-select-match class="select-list__body select-list--size_l width-inh">{{ $select.selected.email }}</ui-select-match><ui-select-choices repeat="connection.id as connection in vm.connections.items" ng-value="$select.selected.id">s<div ng-bind="connection.email"></div></ui-select-choices></ui-select></div><!--<div class="compose-from__item font&#45;&#45;size13">--><!--<button class="btn-y" type="button">--><!--({{ vm.user.profile.email }})--><!--<span class="btn-y__icon btn-y__icon&#45;&#45;arrow icon-arrow-down"></span>--><!--</button>--><!--</div>--></div><div class="input-line input-line--full"><label class="input-line__label"><a class="link link--gray link--hv-red font__size13 mrg__right5" href>{{ \'TO\' | translate }}</a></label><div class="input-line__links"><a class="link link--violet link--hv-red font__size13 mrg__right5" href>\u0421\u041C\u0421 </a><a class="link link--violet link--hv-red font__size13 mrg__right5" href ng-click="vm.isCopy = true">{{ \'IS_COPY\' | translate }} </a><a class="link link--violet link--hv-red font__size13 mrg__right5" href="#" ng-click="vm.isCopyHidden = true">{{ \'IS_HIDDEN_COPY\' | translate }}</a></div><contact-to-add-select addresses="vm.sendForm.model.to" required="true" name="to"></contact-to-add-select></div><div class="input-line__error" ng-if="sendForm.to.$invalid && sendForm.$submitted">{{ \'IS_NOT_FIELD_ENTER_ADDRESS\' | translate }}.</div><div class="input-line input-line--full" ng-if="vm.isCopy"><label class="input-line__label"><a class="link link--gray link--hv-re font__size13" href="">{{ \'IS_COPY\' | translate }}</a></label><contact-to-add-select addresses="vm.sendForm.model.toCopy"></contact-to-add-select></div><div class="input-line input-line--full" ng-if="vm.isCopyHidden"><label class="input-line__label"><a class="link link--gray link--hv-re font__size13" href="">{{ \'HIDDEN\' |translate }}</a></label><contact-to-add-select addresses="vm.sendForm.model.toCopyHidden"></contact-to-add-select></div><div class="input-line input-line--full"><label class="input-line__label"><a class="link link--gray link--hv-re font__size13" href="">\u0421\u041C\u0421</a></label><contact-to-add-select addresses="vm.sendForm.model.toCopy"></contact-to-add-select></div><div class="input-line input-line--full"><div class="input-line__body"><label class="input-line__label"><a class="link link--gray link--hv-re font__size13" href="">{{ \'SUBJECT\' | translate }}</a></label><div class="input-line__links"><a class="link link--violet link--hv-red font__size13" href uib-popover-template="\'app/components/template-list/template-list-popover.html\'" popover-class="popover--template-list" popover-placement="bottom-right" popover-animation="true" popover-trigger="\'outsideClick\'">{{ \'TEMPLATE\' | translate }}</a></div><input class="input-line__input" type="text" ng-model="vm.sendForm.model.subject"></div></div><!--<div class="mrg__top20"> </div>--></div><div class="div"><div class="mrg__top20" message-textarea message-textarea-html="vm.sendForm.model.body" ng-model="vm.sendForm.model.body"></div><div class="row mrg__top20"><div class="col-xs-6"><!--<compose-send></compose-send>--><div class="compose-send"><div class="btn-group compose-send__item"><button class="btn-group__btn btn btn--size_l btn--yellow btn--border-yellow btn--act--y-shw" type="submit">{{ \'SEND\' | translate }}<to-date date-unix="vm.sendForm.model.sdate" is-send-time="true"></to-date></button> <button class="btn-group__btn btn btn--size_l btn--yellow btn--border-yellow flex padding--left10 padding--right10" type="button" uib-popover-template="\'app/components/time-send/time-send-popover.html\'" popover-class="popover--time-send popover--no-arrow" popover-placement="top" popover-animation="true" popover-trigger="\'outsideClick\'" popover-is-open="vm.isOpen"><span class="icon-clock mrg__auto"></span></button></div><button class="btn btn--not-style btn--attach btn--size_m btn--not-events width--size28 icon-attach font__size16 mrg__left5 compose-send__item" type="file" multiple="multiple" accept="**/*" ngf-select="vm.upload($files, $invalidFiles)"><!--<span class="icon-attach"></span>--></button></div></div><div class="col-xs-6"><p class="font__size13 pull-right" ng-if="vm.sendForm.id">{{ \'SAVED_AS_DRAFT_IN\' | translate }}<to-date date="vm.sendForm.model.date.date"></to-date></p></div></div><div class="row mrg__top20"><div class="col-xs-12"><attach-upload attachments-data="vm.sendForm.model.attachmentsData" message="vm.sendForm" is-uploading="vm.isUploading"></attach-upload></div></div><div class="row mrg__top20" ng-if="vm.fwd.items.length >= 2"><div class="col-xs-12"><div ng-repeat="fwd in vm.fwd.items"><div class="inbox-message__checked"><div class="checkbox-y checkbox-y--size14" ng-click="$event.stopPropagation();"><label class="checkbox-y__label"><input class="checkbox-y__input" type="checkbox" data-checklist-model="vm.fwd.checked" data-checklist-value="fwd"><div class="checkbox-y__body"><span class="checkbox-y__icon"></span></div><div class="checkbox-y__text">{{ \'SEND\' | translate }} \xAB<a ui-sref="mail.message({id: fwd.number, mbox: fwd.mbox, connection_id: fwd.connection_id})" target="_blank">{{ fwd.Subject ? fwd.Subject : \'NOT_TITLE\'| translate }}\xBB</a><!--target="_blank">{{ fwd.Subject ? fwd.Subject : \'(\' + {{ \'NOT_SUBJECT\' | translate }} + \')\' }}\xBB</a>--> {{ \'AN_ATTACHMENT\' | translate }}</div></label></div></div></div></div></div></div></form>');
$templateCache.put('app/marketing/home/home.html','<h1>Welcome to <a ui-sref="mail.inbox({mbox: \'INBOX\'})">mail</a></h1>');
$templateCache.put('app/settings/accounts/accounts.html','<div class="layout__bread-crumbs mrg__bottom15"><div class="bread-crumbs font-sizer--bigger-20"><a class="bread-crumbs__item" ui-sref="mail.inbox({mbox: \'INBOX\'})">{{ \'MAIL\' | translate }}</a> <a class="bread-crumbs__item" ui-sref="settings.main">{{ \'ALL_SETTING\' | translate }}</a> <a class="bread-crumbs__item bread-crumbs--active">{{ \'MAILS_FROM_OTHER_BOXES\' | translate }}</a></div></div><article class="layout-settings"><section class="layout-settings__row mrg__left"><!-- \u041F\u043E\u0447\u0442\u0430 \u0441 \u0434\u0440\u0443\u0433\u0438\u0445 \u044F\u0449\u0438\u043A\u043E\u0432 --><div class="accounts-settings"><!-- \u0412\u0435\u0440\u0445\u043D\u044F\u044F \u0447\u0430\u0441\u0442\u044C--><div class="accounts-settings__head"><div class="accounts-settings__notific notific--layout">{{ \'SETTINGS_ACCOUNTS_MESSAGE_OTHER_MAILS\' | translate }}.</div></div><!-- \u041E\u0441\u043D\u043E\u0432\u043D\u0430\u044F \u0447\u0430\u0441\u0442\u044C--><div class="accounts-settings__content"><div class="accounts-settings__list mrg__top20" ng-if="vm.accounts.items.length"><div class="accounts-settings__title">{{ \'CONNECTED_BOXES\' | translate }}</div><div class="accounts-settings__items"><div class="accounts-settings__item" ng-repeat="account in vm.accounts.items"><span class="accounts-settings__item--name-mail">{{ account.email }}</span><form class="option-icons just-content--f-en"><div class="radiobutton mrg__right16"><div class="radiobutton radiobutton__switch radiobutton--size72x28"><input class="radiobutton__switch__input" type="radio" name="toggle" ng-checked="{{ account.enable }}" ng-value="0" ng-model="account.enable" ng-change="vm.enableTrigger(account)"> <input class="radiobutton__switch__input" type="radio" name="toggle" ng-checked="{{ account.enable }}" ng-value="1" ng-model="account.enable" ng-change="vm.enableTrigger(account)"> <span class="radiobutton__switch__on-off" data-checked="{{ \'ON\' | translate }}" data-unchecked="{{ \'OF\' | translate }}"></span></div></div><button class="btn btn--not-style btn__icon--opahover" type="button" ng-click="vm.destroy(account)"><span class="icon-bin"></span></button></form></div><!--  \u0410\u043A\u043A\u0430\u0443\u043D\u0442 1--><!-- <span class="accounts-settings__item&#45;&#45;name-mail">{{ account.email }}</span>\n                            <form class="option-icons just-content&#45;&#45;f-en">\n                                &lt;!&ndash; \u041F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0430\u0442\u0435\u043B\u044C &ndash;&gt;\n                                <div class="radiobutton mrg__right16">\n                                    <div class="radiobutton radiobutton__switch radiobutton&#45;&#45;size72x28">\n                                        <input class="radiobutton__switch__input" type="radio" name="toggle"\n                                               ng-checked="{{ account.enable }}"\n                                               ng-value="0"\n                                               ng-model="account.enable"\n                                               ng-change="vm.enableTrigger(account)">\n                                        <input class="radiobutton__switch__input" type="radio" name="toggle"\n                                               ng-checked="{{ account.enable }}"\n                                               ng-value="1"\n                                               ng-model="account.enable"\n                                               ng-change="vm.enableTrigger(account)">\n                                        <span class="radiobutton__switch__on-off"></span>\n                                    </div>\n                                </div>\n                                &lt;!&ndash; \u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0437\u0430\u043F\u0438\u0441\u0438 &ndash;&gt;\n                                &lt;!&ndash;<button class="btn-group__btn btn btn&#45;&#45;size_s width&#45;&#45;size28 btn__icon&#45;&#45;opahover btn__icon&#45;&#45;edit"&ndash;&gt;\n                                &lt;!&ndash;type="button"></button>&ndash;&gt;\n                                &lt;!&ndash; \u0423\u0434\u0430\u043B\u0438\u0442\u044C &ndash;&gt;\n                                <button class="btn-group__btn btn btn&#45;&#45;size_s width&#45;&#45;size28 btn__icon&#45;&#45;opahover btn__icon&#45;&#45;remove"\n                                        type="button"\n                                        ng-click="vm.destroy(account)"></button>\n                            </form>--></div></div><div class="notific--layout-light mrg__top20" ng-if="vm.isConnected">{{ \'CONNECTED_SUCCESS_COLLECTION_OF_MAILS\' | translate }}.</div></div><form name="accountForm" ng-submit="vm.create(accountForm)"><div><div class="accounts-settings__pick-up-mail font-sizer--bigger-15"><div class="accounts-settings__title">{{ \'COLLECTION_OF_MAIL\' | translate }}</div><div class="form__field-item form__field-item--flex-start mrg__bottom10"><!-- \u0418\u043C\u044F \u043F\u043E\u0447\u0442\u044B--><div class="field-style flex--inline align-items--cn just-content--f-st mrg__bottom8"><label class="accounts-settings__label field-style__title">{{ \'MAIL\' | translate }}</label><input class="input input--size_s input--y-focus width--size295" type="email" name="email" ng-model="vm.accountForm.model.email" ng-blur="vm.getConf(accountForm)" placeholder="{{ \'INPUT_PLACEHOLDER_ENTER_EMAIL\' | translate }}" required></div><!-- \u041F\u0430\u0440\u043E\u043B\u044C--><div class="field-style flex--inline align-items--cn just-content--f-st mrg__bottom8"><label class="accounts-settings__label field-style__title">{{ \'INPUT_PLACEHOLDER_PASSWORD\' | translate }}</label><input class="input input--size_s input--y-focus width--size295" type="password" name="password" ng-model="vm.accountForm.model.password" placeholder="{{ \'INPUT_PLACEHOLDER_ENTER_PASSWORD\' | translate }}" required></div><div ng-if="!vm.accountsConf.selected && !vm.accountsConf.isFirst && vm.accountForm.model.email && vm.accountForm.model.password"><div class="accounts-settings__title">\u041F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B \u0432\u0430\u0448\u0435\u0433\u043E \u043F\u043E\u0447\u0442\u043E\u0432\u043E\u0433\u043E \u0441\u0435\u0440\u0432\u0435\u0440\u0430</div><!-- \u043F\u0440\u043E\u0442\u043E\u043A\u043E\u043B\n                                    <div class="field-style flex--inline align-items--cn just-content--f-st mrg__bottom8">\n                                        <label class="accounts-settings__label field-style__title">\u041F\u0440\u043E\u0442\u043E\u043A\u043E\u043B</label>\n                                        <ui-select ng-model=""\n                                                   class="select-list select-list--size_s select-list--not-border-of-sides mrg__left width--aut width--max126 "\n                                                   theme="select2"\n                                                   ng-disabled=""\n                                                   search-enabled="POP3">\n                                            <ui-select-match\n                                                    class="select-list__body select-list--size_xs width--inh"\n                                                    placeholder="POP3">\n                                                {{ $select.selected.caption }}\n                                            </ui-select-match>\n                                            <ui-select-choices repeat="item.name as item in vm.folders.items"\n                                                               value="{{ }}">\n                                                <div ng-bind-html=""></div>\n                                                <div ng-bind-html=""></div>\n                                            </ui-select-choices>\n                                        </ui-select>\n                                    </div>\n                                    --><div class="field-style flex--inline align-items--cn just-content--f-st mrg__bottom8"><label class="accounts-settings__label field-style__title">{{ \'INPUT_PLACEHOLDER_LOGIN\' | translate }}</label><input class="input input--size_s input--y-focus width--size295" type="text" name="login" ng-model="vm.accountForm.model.login" login-format placeholder="{{ \'INPUT_PLACEHOLDER_ENTER_LOGIN\' | translate }}" required></div><div class="field-style flex--inline align-items--cn just-content--f-st mrg__bottom8"><label class="accounts-settings__label field-style__title">\u0421\u0435\u0440\u0432\u0435\u0440</label><input class="input input--size_s input--y-focus width--size295" type="text" name="server" ng-model="vm.accountForm.model.server" placeholder="{{ \'INPUT_PLACEHOLDER_ENTER_SERVER_ADDRESS\' | translate }}" required></div><div class="field-style flex--inline align-items--cn just-content--f-st mrg__bottom8"><label class="accounts-settings__label field-style__title">\u041F\u043E\u0440\u0442</label><input class="input input--size_s input--y-focus width--size295" type="text" name="port" ng-model="vm.accountForm.model.port" placeholder="{{ \'INPUT_PLACEHOLDER_ENTER_PORT\' | translate }}" required></div></div></div><div class="color--red font__size13" ng-if="vm.error.message">{{ \'WRONG_LOGIN_OF_PASSWORD\' | translate }}</div></div></div><div class="accounts-settings__footer"><button class="btn btn--yellow width--auto btn--size_sm">{{ \'ENABLED_COLLECTOR\' | translate }}</button></div></form></div></section></article>');
$templateCache.put('app/settings/folders/folders.html','<div class="layout__bread-crumbs mrg__bottom15"><div class="bread-crumbs font-sizer--bigger-20"><a class="bread-crumbs__item" ui-sref="mail.inbox({mbox: \'INBOX\'})">{{ \'MAIL\' | translate }}</a> <a class="bread-crumbs__item" ui-sref="settings.main">{{ \'ALL_SETTING\' | translate }}</a> <a class="bread-crumbs__item bread-crumbs--active">{{ \'FOLDERS\' | translate }}</a></div></div><article class="layout-settings"><section class="layout-settings__col mrg__left"><!-- \u041F\u0430\u043F\u043A\u0438 --><folder-settings></folder-settings></section></article>');
$templateCache.put('app/settings/main/settings.html','<div class="layout__bread-crumbs mrg__bottom15"><div class="bread-crumbs font-sizer--bigger-20"><a class="bread-crumbs__item" ui-sref="mail.inbox({mbox: \'INBOX\'})">{{ \'MAIL\' | translate }}</a> <a class="bread-crumbs__item" ui-sref="settings.main">{{ \'ALL_SETTING\' | translate }}</a> <a class="bread-crumbs__item bread-crumbs--active" href>{{ \'MANAGE_ACCOUNT\' | translate }}</a></div></div><article class="layout-settings padding--bottom8"><section class="layout-settings__col width--aut"><!-- \u041F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 --><div class="personal-info"><div class="personal-info__user-avatar mrg__bottom45 flex flex--colum"><div class="personal-info__user-info-title main-title-text font__size16 font__bold">{{ \'YOUR_PHOTO\' | translate }}</div><div class="flex--inline align-items--cn"><div class="avatar avatar--settings avatar--size83 avatar--second-style"><!-- <div class="avatar__crop"\n                             ngf-drop ngf-pattern="image/*"\n                             ng-if="vm.avatar.picFile"\n                             style="width:283px;height:283px;">\n                            <img-crop image="vm.avatar.picFile | ngfDataUrl"\n                                      result-image="vm.avatar.croppedDataUrl"\n                                      ng-init="vm.avatar.croppedDataUrl=\'\'">\n                            </img-crop>\n                        </div>--> <img class="avatar__image" media-url="vm.user.profile.photo" fallback-src="/images/avatar-personal.svg" ng-if="!vm.avatar.picFile"><!--<span class="avatar__edit avatar__edit&#45;&#45;add"></span>--> <button class="btn--not-style btn--not-events btn--opacity position--all width--all" ng-click="vm.openAvatarUploadPopup()"></button> <button class="avatar__edit btn btn--not-style btn--size_xs color--silver mrg__top10" type="button" ng-if="vm.user.profile.photo" ng-click="vm.removeAvatar()">{{ \'DELETE\' | translate }}</button></div><div class="mrg__left13"><button class="btn btn--size_s btn--normal" ng-click="vm.openAvatarUploadPopup()">{{ \'AVATAR_LOAD_IMAGE\' | translate }}</button><p class="font__size14 color--gray mrg__top10 width--size295">{{ \'AVATAR_UPLOAD_TEXT_NOTYF\' | translate }}</p></div></div></div><div class="personal-info__user-info"><profile-form></profile-form></div></div></section><!----><section class="layout-settings__col width--aut"><!-- \u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0431\u043B\u043E\u043A \u0441 \u043F\u0440\u0430\u0432\u0430 --><div class="additional-info"><!-- \u0411\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u044C \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u0430 --><div class="additional-info__block"><div class="main-title-text main-title-text__icon"><img class="main-title-text__icon--size27" src="images/safety-g.svg" alt=""> {{ \'ACCOUNT_SECURITY\' | translate }}</div><!--<div class="additional-info__block__option">--><!--<a class="additional-info__block__link link&#45;&#45;disabled" href="#">\u0410\u043A\u043A\u0430\u0443\u043D\u0442 \u0434\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u043E \u0437\u0430\u0449\u0438\u0449\u0435\u043D</a>--><!--<a class="additional-info__block__link" href="#">\u0421\u043C\u0435\u043D\u0438\u0442\u044C \u043F\u0430\u0440\u043E\u043B\u044C</a>--><!--<a class="additional-info__block__link" href="#">\u041F\u0440\u0438\u0432\u044F\u0437\u0430\u0442\u044C \u0437\u0430\u043F\u0430\u0441\u043D\u043E\u0439 e-mail</a>--><!--<a class="additional-info__block__link" href="#">\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430</a>--><!--</div>--><div class="additional-info__block__option"><a class="additional-info__block__link link link--disabled" href="#">{{ \'ACCOUNT_IS_VERY_SECURITY\' | translate }} </a><a class="additional-info__block__link link mrg__bottom10" href ng-click="vm.openPasswordChangePopup()">{{ \'BTN_CHANGE_PASSWORD\' | translate }} </a><a class="additional-info__block__link link mrg__bottom10" href ng-if="!user.profile.additionalMails.length" ng-click="vm.openEmailAddPopup()">{{ \'BTN_CHANGE_EMAIL\' | translate }}</a><!--                    <div class="additional-info__block__link">\n                                            <span class="additional-info__block__title">{{ user.profile.email }}</span>\n                                            <button class="additional-info__block__link link btn btn&#45;&#45;not-style"\n                                                    ng-if="!user.profile.additionalMails.length"\n                                                    ng-click="vm.openEmailAddPopup()">\n                                                \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u043F\u0430\u0441\u043D\u043E\u0439 \u0435\u043C\u0435\u0439\u043B\n                                            </button>\n                                        </div>--><div class="additional-info__block__link mrg__bottom10" ng-if="user.profile.additionalMails.length"><span class="additional-info__block__title">{{ user.profile.additionalMails[0].email }}</span></div><div class="additional-info__block__link"><span class="additional-info__block__title">+{{ user.profile.phone }}</span> <button class="additional-info__block__link link btn btn--not-style" ng-click="vm.openPhoneChangePopup()">{{ \'BTN_CHANGE_PHONE\' | translate }}</button></div></div></div><!-- \u0414\u0440\u0443\u0433\u0438\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 --><div class="additional-info__block"><div class="main-title-text main-title-text__icon"><img class="main-title-text__icon--size27" src="images/other-settings.svg" alt=""> {{ \'OTHER_SETTINGS\' | translate }}</div><div class="additional-info__block__option"><a class="additional-info__block__link" href ng-click="vm.destroy()">{{ \'DELETE_ACCOUNT\' | translate }}</a><div class="mrg__top30"><user-connection-default></user-connection-default></div></div></div></div></section><section class="layout-settings__row separate--top mrg__top30"><!-- \u0412\u0430\u0448\u0438 \u043F\u043E\u0434\u043F\u0438\u0441\u0438 --><user-signatures></user-signatures></section></article><!--<article class="layout-settings">--><!--<section class="layout-settings__col width&#45;&#45;aut">--><!--&lt;!&ndash; \u041F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 &ndash;&gt;--><!--<div class="personal-info">--><!--<div class="personal-info__user-avatar mrg__bottom45 flex flex&#45;&#45;colum">--><!--<div class="avatar avatar&#45;&#45;settings avatar&#45;&#45;size140 avatar&#45;&#45;second-style"--><!--ng-click="vm.openAvatarUploadPopup()">--><!--<img class="avatar__image"--><!--media-url="vm.user.profile.photo"--><!--fallback-src="/images/avatar-personal.svg">--><!--<span class="avatar__edit avatar__edit&#45;&#45;add"></span>--><!--</div>--><!--<button class="btn btn&#45;&#45;not-style btn&#45;&#45;size_s color&#45;&#45;silver mrg__top10">\u0423\u0434\u0430\u043B\u0438\u0442\u044C</button>--><!--</div>--><!--<div class="personal-info__user-info">--><!--<div class="personal-info__user-info-title main-title-text">{{ \'PERSONAL_DATA\' | translate }}</div>--><!--<profile-form></profile-form>--><!--</div>--><!--</div>--><!--</section>--><!--&lt;!&ndash;&ndash;&gt;--><!--<section class="layout-settings__col width&#45;&#45;aut">--><!--<div class="mrg__bottom20">--><!--<user-connection-default></user-connection-default>--><!--</div>--><!--&lt;!&ndash; \u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0431\u043B\u043E\u043A \u0441 \u043F\u0440\u0430\u0432\u0430 &ndash;&gt;--><!--<div class="additional-info">--><!--&lt;!&ndash; \u0411\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u044C \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u0430 &ndash;&gt;--><!--<div class="additional-info__block ">--><!--<div class="main-title-text main-title-text__icon">--><!--<img class=" main-title-text__icon&#45;&#45;size27" src="images/safety-g.svg" alt="">--><!--{{ \'ACCOUNT_SECURITY\' | translate }}--><!--</div>--><!--&lt;!&ndash;<div class="additional-info__block__option">&ndash;&gt;--><!--&lt;!&ndash;<a class="additional-info__block__link link&#45;&#45;disabled" href="#">\u0410\u043A\u043A\u0430\u0443\u043D\u0442 \u0434\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u043E \u0437\u0430\u0449\u0438\u0449\u0435\u043D</a>&ndash;&gt;--><!--&lt;!&ndash;<a class="additional-info__block__link" href="#">\u0421\u043C\u0435\u043D\u0438\u0442\u044C \u043F\u0430\u0440\u043E\u043B\u044C</a>&ndash;&gt;--><!--&lt;!&ndash;<a class="additional-info__block__link" href="#">\u041F\u0440\u0438\u0432\u044F\u0437\u0430\u0442\u044C \u0437\u0430\u043F\u0430\u0441\u043D\u043E\u0439 e-mail</a>&ndash;&gt;--><!--&lt;!&ndash;<a class="additional-info__block__link" href="#">\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430</a>&ndash;&gt;--><!--&lt;!&ndash;</div>&ndash;&gt;--><!--<div class="additional-info__block__option">--><!--<a class="additional-info__block__link link link&#45;&#45;disabled" href="#">--><!--{{ \'\' | translate }}\u0410\u043A\u043A\u0430\u0443\u043D\u0442 \u0434\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u043E \u0437\u0430\u0449\u0438\u0449\u0435\u043D--><!--</a>--><!--<a class="additional-info__block__link link mrg__bottom10" href--><!--ng-click="vm.openPasswordChangePopup()">--><!--{{ \'BTN_CHANGE_PASSWORD\' | translate }}--><!--</a>--><!--<a class="additional-info__block__link link mrg__bottom10" href--><!--ng-if="!user.profile.additionalMails.length"--><!--ng-click="vm.openEmailAddPopup()">{{ \'BTN_CHANGE_EMAIL\' | translate }}</a>--><!--&lt;!&ndash;                    <div class="additional-info__block__link">--><!--<span class="additional-info__block__title">{{ user.profile.email }}</span>--><!--<button class="additional-info__block__link link btn btn&#45;&#45;not-style"--><!--ng-if="!user.profile.additionalMails.length"--><!--ng-click="vm.openEmailAddPopup()">--><!--\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u043F\u0430\u0441\u043D\u043E\u0439 \u0435\u043C\u0435\u0439\u043B--><!--</button>--><!--</div>&ndash;&gt;--><!--<div class="additional-info__block__link mrg__bottom10"--><!--ng-if="user.profile.additionalMails.length">--><!--<span class="additional-info__block__title">--><!--{{ user.profile.additionalMails[0].email }}--><!--</span>--><!--</div>--><!--<div class="additional-info__block__link">--><!--<span class="additional-info__block__title">+{{ user.profile.phone }}</span>--><!--<button class="additional-info__block__link link btn btn&#45;&#45;not-style"--><!--ng-click="vm.openPhoneChangePopup()">--><!--{{ \'BTN_CHANGE_PHONE\' | translate }}--><!--</button>--><!--</div>--><!--</div>--><!--</div>--><!--&lt;!&ndash; \u0414\u0440\u0443\u0433\u0438\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 &ndash;&gt;--><!--<div class="additional-info__block ">--><!--<div class="main-title-text main-title-text__icon">--><!--<img class=" main-title-text__icon&#45;&#45;size27" src="images/other-settings.svg" alt="">--><!--{{ \'OTHER_SETTINGS\' | translate }}--><!--</div>--><!--<div class="additional-info__block__option">--><!--<a class="additional-info__block__link" href ng-click="vm.destroy()">--><!--{{ \'DELETE_ACCOUNT\' | translate }}--><!--</a>--><!--</div>--><!--</div>--><!--&lt;!&ndash; \u041F\u0440\u0438\u0432\u044F\u0437\u0430\u0442\u044C \u043F\u0440\u043E\u0444\u0438\u043B\u044C&ndash;&gt;--><!--&lt;!&ndash;--><!--<div class="additional-info__block">--><!--<div class="main-title-text main-title-text__icon">--><!--<img class=" main-title-text__icon&#45;&#45;size27 hide-elm" src="images/other-settings.svg"--><!--alt="">--><!--\u041F\u0440\u0438\u0432\u044F\u0437\u0430\u0442\u044C \u043F\u0440\u043E\u0444\u0438\u043B\u044C--><!--</div>--><!--<div class="additional-info__block__snap-profile ">--><!--<div class="social-icons">--><!--<button class="social-icons__icon social-icons&#45;&#45;vk-icon social-icons&#45;&#45;btn-tied btn"--><!--type="button"></button>--><!--<button class="social-icons__icon social-icons&#45;&#45;fb-icon btn"--><!--type="button"></button>--><!--<button class="social-icons__icon social-icons&#45;&#45;tw-icon btn"--><!--type="button"></button>--><!--<button class="social-icons__icon social-icons&#45;&#45;gp-icon btn"--><!--type="button"></button>--><!--</div>--><!--</div>--><!--</div>--><!--&ndash;&gt;--><!--&lt;!&ndash; \u0427\u0435\u043A\u0431\u043E\u043A\u0441\u044B &ndash;&gt;--><!--&lt;!&ndash;--><!--<div class="additional-info__block">--><!--<div class="font__bold font__size13">--><!--{{ \'SETTINGS_ACCESS_OK\' | translate }}--><!--</div>--><!--<form class="additional-info__allow form" action="">--><!--<label class="checkbox-y__label checkbox-y" for="isChecked1">--><!--<input class="checkbox-y__input"--><!--id="isChecked1"--><!--type="checkbox"--><!--name="isChecked"--><!--ng-model="isChecked">--><!--<div class="checkbox-y__body">--><!--<span class="checkbox-y__icon">--><!--</span>--><!--</div>--><!--<span class="checkbox__text " role="presentation">--><!--{{ \'WITH_PROTOCOL_IMAP\' | translate }}--><!--</span>--><!--</label>--><!--<label class="checkbox-y__label checkbox-y" for="isChecked2">--><!--<input class="checkbox-y__input"--><!--id="isChecked2"--><!--type="checkbox"--><!--name="isChecked"--><!--ng-model="isChecked">--><!--<div class="checkbox-y__body">--><!--<span class="checkbox-y__icon">--><!--</span>--><!--</div>--><!--<span class="checkbox__text " role="presentation">--><!--{{ \'WITH_PROTOCOL_POP3\' | translate }}--><!--</span>--><!--</label>--><!--</form>--><!--</div>--><!--&ndash;&gt;--><!--</div>--><!--</section>--><!--<section class="layout-settings__row separate&#45;&#45;top mrg__top30">--><!--&lt;!&ndash; \u0412\u0430\u0448\u0438 \u043F\u043E\u0434\u043F\u0438\u0441\u0438 &ndash;&gt;--><!--<user-signatures></user-signatures>--><!--</section>--><!--</article>-->');
$templateCache.put('app/settings/rule-add/rule-add.html','<div class="layout__bread-crumbs mrg__bottom15"><div class="bread-crumbs font-sizer--bigger-20"><a class="bread-crumbs__item" ui-sref="mail.inbox({mbox: \'INBOX\'})">{{ \'MAIL\' | translate }}</a> <a class="bread-crumbs__item" ui-sref="settings.main">{{ \'ALL_SETTING\' | translate }}</a> <a class="bread-crumbs__item" ui-sref="settings.rules">{{ \'PROCESSING_RULES\' | translate }}</a> <a class="bread-crumbs__item bread-crumbs--active" ui-sref="settings.ruleAdd">{{ \'CREATE_RULE\' | translate }}</a></div></div><article class="layout-settings width--inh"><section class="layout-settings__col mrg__left"><!-- \u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u043F\u0440\u0430\u0432\u0438\u043B\u0430 --><div class="rule-add"><div class="form"><div class="rule-add__item mrg__bottom20 font-sizer--bigger-15"><div class="field-style flex--inline just-content--sp-btw align-items--cn mrg__bottom8"><span class="rule-add__name">{{ \'NAME\' | translate }}</span> <input class="input input--size_xs width--size527 input--bg-white input--fc-sh-yellow font__size14" type="text" name="name" placeholder="{{ \'INPUT_PLACEHOLDER_NAME_RULE\' | translate }}" ng-model="vm.sieveForm.model.name" required></div><div class="field-style flex--inline just-content--sp-btw align-items--cn mrg__bottom8"><span class="rule-add__name">{{ \'IS_APPLY\' | translate }}</span><div class="flex--inline just-content--sp-btw align-items--cn width--all width--max527"><ui-select ng-model="vm.sieveForm.model.spam_accept" class="select-list select-list--size_xs select-list--not-border-of-sides mrg__right6 font__size14" theme="select2" search-enabled="false"><ui-select-match class="select-list__body select-list--size_xs width--inh font__size14" placeholder="{{ \'RULE_ADD_SELECT_FOR_ALL_LETTERS\' | translate }}">{{ $select.selected.name | translate }}</ui-select-match><ui-select-choices repeat="item.value as item in vm.spamAccept.list" value="{{ $select.selected.value }}"><div ng-bind-html="item.name | translate"></div></ui-select-choices></ui-select><ui-select ng-model="vm.sieveForm.model.attachment_accept" class="select-list select-list--size_xs select-list--not-border-of-sides font__size14" theme="select2" search-enabled="false"><ui-select-match class="select-list__body select-list--size_xs width--inh font__size14" placeholder="{{ \'RULE_ADD_SELECT_IS_ATTACH_0R_NOT\' | translate }}">{{ $select.selected.name | translate }}</ui-select-match><ui-select-choices repeat="item.value as item in vm.attachmentAccept.list" value="{{ $select.selected.value }}"><div ng-bind-html="item.name | translate"></div></ui-select-choices></ui-select></div></div></div><div class="rule-add__item mrg__bottom20"><div class="rule-add__item-title font__size15">{{ \'IF\' | translate }}</div><div class="rule-add__condition"><div class="rule-add__condition-item" ng-repeat="rule in vm.sieveForm.model.sieveRules"><div class="field-style flex--inline just-content--sp-btw align-items--cn mrg__bottom8"><ui-select ng-model="rule.type" class="select-list select-list--if-less300 select-list--size_xs select-list--not-border-of-sides mrg__right6 width--size80 font__size14" theme="select2" search-enabled="false"><ui-select-match class="select-list__body select-list--size_xs width--inh font__size14" placeholder="{{ \'FROM_WHOM_U\' | translate }}">{{ $select.selected.name | translate }}</ui-select-match><ui-select-choices repeat="item.value as item in vm.sieveRules.list" value="{{ $select.selected.value }}"><div ng-bind-html="item.name | translate"></div></ui-select-choices></ui-select><ui-select ng-model="rule.compare_type" class="select-list select-list--if-less200 select-list--size_xs select-list--not-border-of-sides width--size108 mrg__right6 font__size14" theme="select2" search-enabled="false"><ui-select-match class="select-list__body select-list--size_xs width--inh font__size14" placeholder="{{ \'RULE_ADD_SELECT_IS_COINCIDES\' | translate }}">{{ $select.selected.name | translate }}</ui-select-match><ui-select-choices repeat="item.value as item in vm.compareTypes.list" value="{{ $select.selected.value }}"><div ng-bind-html="item.name | translate"></div></ui-select-choices></ui-select><input class="input input--size_xs width--inh input--bg-white input--fc-sh-yellow font__size14" type="text" ng-model="rule.value" placeholder="{{ \'INPUT_PLACEHOLDER_NAME_RULE\' | translate }}" required></div><button class="rule-add__condition-remove btn btn--not-style btn--not-events btn--remove icon-close-thin" type="button" ng-click="vm.removeRule(rule)"></button></div></div><button class="btn btn--normal btn--size_xs width--size150 border--cl-bl-silver font__size13" type="button" ng-click="vm.addRule()">{{ \'ADD_CONDITION\' | translate }}</button></div><div class="rule-add__item mrg__bottom20"><div class="rule-add__item-title font__size15">{{ \'RUN_ACTION\' | translate }}</div><div class="field-style flex--inline align-items--cn mrg__bottom6"><label class="checkbox-y__label checkbox-y width--min190"><input class="checkbox-y__input" type="checkbox" data-checklist-model="vm.sieveForm.model.sieveActions" data-checklist-value="{ \'type\': \'delete\' }" checklist-comparator=".type"><div class="checkbox-y__body"><span class="checkbox-y__icon"></span></div><span class="checkbox__text" role="presentation">{{ \'DELETE\' | translate }}</span></label></div><div class="field-style flex--inline align-items--cn mrg__bottom6"><label class="checkbox-y__label checkbox-y width--min190"><input class="checkbox-y__input" type="checkbox" data-checklist-model="vm.sieveForm.model.sieveActions" data-checklist-value="{ \'type\': \'read\' }" checklist-comparator=".type"><div class="checkbox-y__body"><span class="checkbox-y__icon"></span></div><span class="checkbox__text" role="presentation">{{ \'MARK_AS_READ\' | translate }}</span></label></div><div class="field-style flex--inline align-items--cn mrg__bottom6"><label class="checkbox-y__label checkbox-y width--min190"><input class="checkbox-y__input" type="checkbox" ng-model="vm.isFolder" data-checklist-model="vm.sieveForm.model.sieveActions" data-checklist-value="vm.sieveActions.move" checklist-comparator=".type"><div class="checkbox-y__body"><span class="checkbox-y__icon"></span></div><span class="checkbox__text" role="presentation">{{ \'PUT_IN_FOLDER\' | translate }}</span></label><ui-select ng-model="vm.sieveActions.move.value" class="select-list select-list--if-less200 select-list--size_xs select-list--not-border-of-sides mrg__right6 width--aut width--max126 font__size14" theme="select2" ng-disabled="!vm.isFolder" search-enabled="false"><ui-select-match class="select-list__body select-list--size_xs width--inh font__size14" placeholder="{{ \'CHOOSE\' | translate }}">{{ $select.selected.name | translate }}</ui-select-match><ui-select-choices repeat="item.name as item in vm.folders.items" value="{{ $select.selected.name }}"><div ng-bind-html="item.name | translate"></div></ui-select-choices></ui-select></div><!--\n\n                    <div class="field-style flex--inline align-items--cn mrg__bottom6">\n                        <label class="checkbox-y__label checkbox-y width--min190">\n                            <input class="checkbox-y__input" type="checkbox"\n                                   ng-model="vm.isFlag"\n                                   data-checklist-model="vm.sieveForm.model.sieveActions"\n                                   data-checklist-value="vm.sieveActions.flag"\n                                   checklist-comparator=".type">\n                            <div class="checkbox-y__body">\n                                <span class="checkbox-y__icon">\n                                </span>\n                            </div>\n                            <span class="checkbox__text" role="presentation">\n                                {{ \'SET_TAG\' | translate }}\n                            </span>\n                        </label>\n                        <ui-select ng-model="vm.sieveActions.flag.value"\n                                   class="select-list select-list--if-less200 select-list--size_xs select-list--not-border-of-sides mrg__right6 width--aut width--max126 font__size14"\n                                   theme="select2"\n                                   title="Choose a person"\n                                   ng-disabled="!vm.isFlag"\n                                   search-enabled="false">\n                            <ui-select-match\n                                    class="select-list__body select-list--size_xs width--inh font__size14"\n                                    placeholder="{{ \'CHOOSE\' | translate }}">\n                                {{ $select.selected.tag_name }}\n                            </ui-select-match>\n                            <ui-select-choices repeat="item.tag_name as item in vm.tags.items"\n                                               value="{{ $select.selected.tag_name }}">\n                                <div ng-bind-html="item.tag_name"></div>\n                            </ui-select-choices>\n                        </ui-select>\n                    </div>\n                    --><div class="rule-add__notif">{{ \'RULE_ADD_MESSAGE_WHEN_ACTIVE_RULE\' | translate }}.</div><div class="field-style flex--inline align-items--st mrg__bottom6"><label class="align-items-st checkbox-y__label checkbox-y width--min190"><input class="checkbox-y__input" type="checkbox" ng-model="vm.isResend" data-checklist-model="vm.sieveForm.model.sieveActions" data-checklist-value="vm.sieveActions.resend" checklist-comparator=".type"><div class="checkbox-y__body"><span class="checkbox-y__icon"></span></div><span class="checkbox__text" role="presentation">{{ \'FORWARD_TO\' | translate }}</span></label><div class="width--inh"><input class="input input--size_xs width--inh input--bg-white input--fc-sh-yellow font__size14 font__arial" type="text" placeholder="{{ \'INPUT_PLACEHOLDER_NAME_RULE\' | translate }}" ng-model="vm.sieveActions.resend.value" ng-disabled="!vm.isResend" required><label class="checkbox-y__label checkbox-y width--inh"><input class="checkbox-y__input" type="checkbox" data-checklist-model="vm.sieveForm.model.sieveActions" data-checklist-value="vm.sieveActions.option" ng-disabled="!vm.isResend" checklist-comparator=".type"><div class="checkbox-y__body"><span class="checkbox-y__icon"></span></div><span class="checkbox__text" role="presentation">{{ \'RULE_ADD_MESSAGE_SAVE_COPY\' | translate }}</span></label></div></div><div class="field-style flex--inline align-items--cn mrg__bottom6"><label class="align-items-st checkbox-y__label checkbox-y width--min190"><input class="checkbox-y__input" type="checkbox" ng-model="vm.isNotify" data-checklist-model="vm.sieveForm.model.sieveActions" data-checklist-value="vm.sieveActions.notify" checklist-comparator=".type"><div class="checkbox-y__body"><span class="checkbox-y__icon"></span></div><span class="checkbox__text" role="presentation">{{ \'RULE_ADD_MESSAGE_NOTIFY_BY_EMAIL\' | translate }}</span></label><input class="input input--size_xs width--inh input--bg-white input--fc-sh-yellow font__size14 font__arial" type="text" ng-model="vm.sieveActions.notify.value" ng-disabled="!vm.isNotify" placeholder="{{ \'INPUT_PLACEHOLDER_NAME_RULE\' | translate }}" required></div><div class="field-style align-items--cn mrg__bottom6"><label class="align-items-st checkbox-y__label checkbox-y width--inh"><input class="checkbox-y__input" type="checkbox" ng-model="vm.isAnswer" data-checklist-model="vm.sieveForm.model.sieveActions" data-checklist-value="vm.sieveActions.answer" checklist-comparator=".type"><div class="checkbox-y__body"><span class="checkbox-y__icon"></span></div><span class="checkbox__text" role="presentation">{{ \'RULE_ADD_MESSAGE_REPLY_TEXT\' | translate }}</span></label><textarea class="rule-add__field-text textarea--normal width--inh font__size13 mrg__top5" name="" id="" cols="10" rows="10" placeholder="{{ \'INPUT_PLACEHOLDER_ENTER_MESSAGE_TEXT\' | translate }}" ng-model="vm.sieveActions.answer.value" ng-disabled="!vm.isAnswer"></textarea></div><div class="field-style align-items--cn mrg__bottom6"><label class="align-items-st checkbox-y__label checkbox-y width--inh"><input class="checkbox-y__input" type="checkbox" data-checklist-model="vm.sieveForm.model.sieveActions" data-checklist-value="{ \'type\': \'stop\' }" checklist-comparator=".type"><div class="checkbox-y__body"><span class="checkbox-y__icon"></span></div><span class="checkbox__text" role="presentation">{{ \'RULE_ADD_MESSAGE_DONOT_NOT_APPLY_RULE\' | translate }}</span></label></div><div class="field-style mrg__bottom6"><div class="rule-add__notif mer">{{ \'RULE_ADD_MESSAGE_VIEW_LIST_RULES\' | translate }} <a href="">{{ \'RULE_ADD_MESSAGE_VIEW_LIST_RULES_1\' | translate }}</a>, {{ \'RULE_ADD_MESSAGE_VIEW_LIST_RULES_2\' | translate }}</div><div class="flex--inline align-items--cn mrg__top15"><button class="btn btn--yellow btn--size_sm mrg__right10" type="button" ng-click="vm.add()" ng-if="!vm.sieveForm.model.id">{{ \'CREATE_RULE\' | translate }}</button> <button class="btn btn--yellow btn--size_sm mrg__right10" type="button" ng-click="vm.update()" ng-if="vm.sieveForm.model.id">{{ \'BTN_SAVE_CHANGE\' | translate }}</button><!--<button class="btn btn&#45;&#45;normal btn&#45;&#45;size_sm mrg__right10"--><!--type="button">--><!--{{ \'BTN_APPLY_TO_EXISTING_EMAILS\' | translate }}--><!--</button>--> <button class="btn btn--size_sm btn--link-style mrg__none mrg__left10" type="button" ui-sref="settings.rules">{{ \'BTN_CANCEL\' | translate }}</button></div></div></div></div></div></section></article>');
$templateCache.put('app/settings/contacts/contacts.html','<div class="layout__bread-crumbs mrg__bottom15"><div class="bread-crumbs font-sizer--bigger-20"><a class="bread-crumbs__item" ui-sref="mail.inbox({mbox: \'INBOX\'})">{{ \'MAIL\' | translate }}</a> <a class="bread-crumbs__item" ui-sref="settings.main">{{ \'ALL_SETTING\' | translate }}</a> <a class="bread-crumbs__item bread-crumbs--active">{{ \'SETTINGS_CONTACTS\' | translate }}</a></div></div><article class="layout-settings"><section class="layout-settings__col mrg__left"><div class="mrg__bottom20"><button class="btn-y btn-y--border" type="button" ng-click="vm.openContactImportFilePopup()">{{ \'BTN_LOAD_CONTACT_0F_FILE\' | translate }}</button> <button class="btn-y btn-y--border" type="button" ng-click="vm.openContactExportFilePopup()">{{ \'BTN_SAVE_CONTACT_IN_FILE\' | translate }}</button></div><!-- \u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B --><contact-group></contact-group></section></article>');
$templateCache.put('app/settings/rules/rules.html','<div class="layout__bread-crumbs mrg__bottom15"><div class="bread-crumbs font-sizer--bigger-20"><a class="bread-crumbs__item" ui-sref="mail.inbox({mbox: \'INBOX\'})">{{ \'MAIL\' | translate }}</a> <a class="bread-crumbs__item" ui-sref="settings.main">{{ \'ALL_SETTING\' | translate }}</a> <a class="bread-crumbs__item bread-crumbs--active" href="#">{{ \'PROCESSING_RULES\' | translate }}</a></div></div><article class="layout-settings width--inh"><section class="layout-settings__row mrg__left"><div class="rules-settings"><div class="rules-settings__head"><div class="rules-settings__left"><div class="rules-settings__notific notific--layout">{{ \'RULES_MESSAGE_IS_HELP_RULES_WE\' | translate }}.</div><div class="width--inh mrg__left mrg__top20"><button class="btn btn--yellow mrg__bottom4 btn--size_sm" ui-sref="settings.ruleAdd">{{ \'CREATE_RULE\' | translate }}</button></div></div><!--\n                 <div class="rules-settings__right">\n\n                    <div class="rules-settings__notific mrg__bottom10">{{ \'RULES_MESSAGE_IS_HELP_RULES_WE_CREATE\' | translate }}:</div>\n                    <div class="rules-settings__nav">\n                        <a class="rules-settings__nav-item" href="">{{ \'RULES_MESSAGE_IS_HELP_RULES_WE_MOVE\' | translate }},</a>\n                        <a class="rules-settings__nav-item" href="">{{ \'RULES_MESSAGE_IS_HELP_RULES_WE_SELECTED\' | translate }},</a>\n                        <a class="rules-settings__nav-item" href="">{{ \'RULES_MESSAGE_IS_HELP_RULES_WE_DELETE\' | translate }}.</a>\n                    </div>\n                </div>\n                --></div><!-- \u041F\u0440\u0430\u0432\u0438\u043B\u0430 --><div class="rules-settings__rules mrg__top25"><div class="rules-settings__rules--title notific--layout-light">{{ \'YOUR_CREATED_RULES\' | translate }}</div><!-- \u0421\u043F\u0438\u0441\u043E\u043A \u043F\u0440\u0430\u0432\u0438\u043B--><!-- \u041F\u0440\u0430\u0432\u0438\u043B\u043E 1--><form class="rules-settings__rule" ng-repeat="sieve in vm.sieve.items"><div class="rules-settings__rule__postpone mrg__right16"></div><div class="rules-settings__rule__description"><span class="rules-settings__rule__name">{{ sieve.name }}</span><!--<span class="rules-settings__rule__descript">{{ \'RULES_IF_WHOM_OR_COPY\' | translate }} \u201Cmail@gmail.com\u201D</span>--></div><div class="rules-settings__rule__option-icons"><!-- \u041F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0430\u0442\u0435\u043B\u044C --><div class="radiobutton mrg__right16"><div class="radiobutton radiobutton__switch radiobutton--size72x28"><input class="radiobutton__switch__input" type="radio" name="toggle" ng-checked="{{ sieve.enable }}" ng-value="0" ng-model="sieve.enable" ng-change="vm.enableTrigger(sieve)"> <input class="radiobutton__switch__input" type="radio" name="toggle" ng-checked="{{ sieve.enable }}" ng-value="1" ng-model="sieve.enable" ng-change="vm.enableTrigger(sieve)"> <span class="radiobutton__switch__on-off" data-checked="{{ \'ON\' | translate }}" data-unchecked="{{ \'OF\' | translate }}"></span></div></div><!-- \u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0437\u0430\u043F\u0438\u0441\u0438 --> <button class="btn-group__btn btn btn--size_s width--size28 btn__icon--opahover btn__icon--edit mrg__right16" ui-sref="settings.ruleAdd({id: sieve.id})"></button><!-- \u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043F\u0440\u0430\u0432\u0438\u043B\u043E --> <button class="btn-group__btn btn btn--size_s width--size28 btn__icon--opahover btn__icon--remove mrg__right16" ng-click="vm.remove(sieve)"></button></div></form></div><!-- C\u043F\u0438\u0441\u043A\u0438 \u0447\u0435\u0440\u043D\u044B\u0439/\u0431\u0435\u043B\u044B\u0439 --><div class="rules-settings__bl-wh-list"><span class="rules-settings__notific width--all mrg__top25">{{ \'RULES_WE_MANAGE_MAILS\' | translate }}.</span><!-- \u0427\u0435\u0440\u043D\u044B\u0439 \u0441\u043F\u0438\u0441\u043E\u043A--><div class="rules-settings__bl-wh-content rules-settings__bl-wh-content--black"><black-list></black-list></div><!-- \u0411\u0435\u043B\u044B\u0439 \u0441\u043F\u0438\u0441\u043E\u043A--><div class="rules-settings__bl-wh-content rules-settings__bl-wh-content--white mrg__top10"><white-list></white-list><!--<div class="rules-settings__bl-wh-content__title">\u0411\u0435\u043B\u044B\u0439 \u0441\u043F\u0438\u0441\u043E\u043A</div>--><!--<span class="rules-settings__bl-wh-content__text">\u0412\u0441\u044F \u043F\u043E\u0447\u0442\u0430 \u0441 \u0430\u0434\u0440\u0435\u0441\u043E\u0432, \u0437\u0430\u043D\u0435\u0441\u0451\u043D\u043D\u044B\u0445 \u0432 \u0431\u0435\u043B\u044B\u0439 \u0441\u043F\u0438\u0441\u043E\u043A, \u043D\u0435 \u0431\u0443\u0434\u0435\u0442 \u043F\u043E\u043F\u0430\u0434\u0430\u0442\u044C \u0432 \u043F\u0430\u043F\u043A\u0443 <b>--><!--<a class="rules-settings__bl-wh-content__link" href="">\xAB\u0421\u043F\u0430\u043C\xBB</a></b></span>--><!--<div class="form__field-item mrg__bottom0">--><!--<div class="field-style flex&#45;&#45;inline ">--><!--<input class="input input&#45;&#45;size_xs input&#45;&#45;up-shadow width&#45;&#45;inh input&#45;&#45;bg-white mrg__right7"--><!--type="text"--><!--name="rules"--><!--placeholder="\u0423\u043A\u0430\u0436\u0438\u0442\u0435 e-mail \u0430\u0434\u0440\u0435\u0441"--><!--required>--><!--<button class="btn btn&#45;&#45;normal btn&#45;&#45;size_xs width&#45;&#45;size150">\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C</button>--><!--</div>--><!--</div>--></div></div></div></section></article>');
$templateCache.put('app/settings/tags/tags.html','<div class="layout__bread-crumbs mrg__bottom15"><div class="bread-crumbs font-sizer--bigger-20"><a class="bread-crumbs__item" ui-sref="mail.inbox({mbox: \'INBOX\'})">{{ \'MAIL\' | translate }}</a> <a class="bread-crumbs__item" ui-sref="settings.main">{{ \'ALL_SETTING\' | translate }}</a> <a class="bread-crumbs__item bread-crumbs--active">{{ \'TAGS\' | translate }}</a></div></div><article class="layout-settings"><!----><section class="layout-settings__col mrg__left"><!-- \u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u043D\u0430\u0441\u0442\u0440\u043E\u0435\u043A \u043C\u0435\u0442\u043A\u0438 --><tag-settings></tag-settings></section></article>');
$templateCache.put('app/storage/main/storage.html','<!--<<<<<<< HEAD--><!--<div class="layout__header">--><!--<header></header>--><!--=======--><!--<div class="header">--><!--<div class="header__brand pointer" ui-sref="mail.inbox">--><!--<img class="header__logo" src="/images/logo.png" alt="Mail logo">--><!--</div>--><!--<div>--><!--<div class="header__spinner">--><!--<spinner></spinner>--><!--</div>--><!--</div>--><!--<div class="header__navigation">--><!--&lt;!&ndash;\u0422\u0443\u0442 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442 \u043C\u0435\u043D\u044E&ndash;&gt;--><!--<div class="navigation">--><!--<div class="navigation__row">--><!--<div class="navigation__item">--><!--<a class="navigation__link navigation__link&#45;&#45;active" ui-sref="mail.inbox">{{ \'MAIL\' | translate }}</a>--><!--</div>--><!--<div class="navigation__item">--><!--<a class="navigation__link" ui-sref="contacts.main">{{ \'CONTACTS\' | translate }}</a>--><!--</div>--><!--&lt;!&ndash;<div class="navigation__item">&ndash;&gt;--><!--&lt;!&ndash;<a class="navigation__link" href="">\u0424\u0430\u0439\u043B\u044B</a>&ndash;&gt;--><!--&lt;!&ndash;</div>&ndash;&gt;--><!--&lt;!&ndash;<div class="navigation__item">&ndash;&gt;--><!--&lt;!&ndash;<a class="navigation__link" href="">\u041D\u043E\u0432\u043E\u0441\u0442\u0438</a>&ndash;&gt;--><!--&lt;!&ndash;</div>&ndash;&gt;--><!--&lt;!&ndash;<div class="navigation__item">&ndash;&gt;--><!--&lt;!&ndash;<a class="navigation__link" href="">\u0415\u0449\u0435</a>&ndash;&gt;--><!--&lt;!&ndash;</div>&ndash;&gt;--><!--</div>--><!--</div>--><!--</div>--><!--<div class="header__left">--><!--&lt;!&ndash;<div class="header__search header__left-item">&ndash;&gt;--><!--&lt;!&ndash;<search-mail></search-mail>&ndash;&gt;--><!--&lt;!&ndash;</div>&ndash;&gt;--><!--&lt;!&ndash;<div class="header__settings header__left-item">&ndash;&gt;--><!--&lt;!&ndash;&lt;!&ndash;<a class="header__settings-link">&ndash;&gt;&ndash;&gt;--><!--&lt;!&ndash;<button class="btn-y btn-y&#45;&#45;settings pointer"&ndash;&gt;--><!--&lt;!&ndash;uib-popover-template="\'app/components/settings-menu/settings-menu.html\'"&ndash;&gt;--><!--&lt;!&ndash;popover-class="popover&#45;&#45;settings"&ndash;&gt;--><!--&lt;!&ndash;popover-placement="bottom-right"&ndash;&gt;--><!--&lt;!&ndash;popover-animation="true"&ndash;&gt;--><!--&lt;!&ndash;popover-trigger="\'outsideClick\'">&ndash;&gt;--><!--&lt;!&ndash;<span class="icon-settings"></span>&ndash;&gt;--><!--&lt;!&ndash;</button>&ndash;&gt;--><!--&lt;!&ndash;</div>&ndash;&gt;--><!--<div class="header__avatar header__left-item">--><!--<a class="header__avatar-link" href--><!--uib-popover-template="\'app/components/user-menu/user-menu-popover.html\'"--><!--popover-class="popover&#45;&#45;user popover&#45;&#45;no-arrow"--><!--popover-placement="bottom-right"--><!--popover-animation="true"--><!--popover-trigger="\'outsideClick\'">--><!--<div class="header__name">--><!--{{ vm.user.profile.email.split(\'@\')[0] }}--><!--</div>--><!--&lt;!&ndash;\u0422\u0443\u0442 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442 \u0430\u0432\u0430\u0442\u0430\u0440\u0430&ndash;&gt;--><!--<div class="avatar avatar&#45;&#45;header avatar&#45;&#45;size42">--><!--<img class="avatar__image"--><!--ng-src="{{ vm.user.profile.photo }}"--><!--fallback-src="{{\'/images/avatar.png\'}}">--><!--</div>--><!--</a>--><!--</div>--><!--</div>--><!--&gt;>>>>>> translate--><!--</div>--><!--<div class="storage">--><!--<div class="storage__plans">--><!--<div class="storage__header">--><!--<span class="font__center">{{ \'STORAGE_HEADER\' | translate }}</span>--><!--</div>--><!--<div class="storage__content">--><!--<div class="storage__item"--><!--ng-repeat="tariff in vm.tariff.items"--><!--ng-class="{\'is-check\': vm.tariff.selected === tariff}">--><!--<label ng-click="vm.createQuota(tariff)">--><!--<div class="storage__space-pie"--><!--ng-class="{\'storage__space-pie&#45;&#45;yellow-orange\': $index === 0,--><!--\'storage__space-pie&#45;&#45;light-blue\': $index === 1,--><!--\'storage__space-pie&#45;&#45;blue\': $index === 2}">--><!--<span class="storage__volume-text">{{ tariff.name }}</span>--><!--</div>--><!--<div class="storage__plan-price">{{ tariff.price }} {{ \'PRICE_PLAN\' | translate }}</div>--><!--<div class="storage__chose-plan">--><!--<span class="icon-check-box-mark"></span>--><!--</div>--><!--&lt;!&ndash;{{ tariff.isCheck }}&ndash;&gt;--><!--<input style="display: none" name="tariff" type="radio" ng-model="vm.tariff.selected"--><!--ng-value="tariff">--><!--</label>--><!--<div class="radiobutton main-switch radiobutton&#45;&#45;size_s width&#45;&#45;size140 mrg__top10"--><!--ng-if="vm.tariff.selected === tariff">--><!--<input class="main-switch__input"--><!--type="radio"--><!--name="payType"--><!--value="sms"--><!--ng-model="vm.payType">--><!--<span class="radiobutton&#45;&#45;size_s main-switch__btn main-switch__btn&#45;&#45;firs width&#45;&#45;inh">SMS</span>--><!--<input class="main-switch__input"--><!--type="radio"--><!--name="payType"--><!--value="paypal"--><!--ng-model="vm.payType">--><!--<span class="radiobutton&#45;&#45;size_s main-switch__btn main-switch__btn&#45;&#45;last width&#45;&#45;inh">PayPal</span>--><!--</div>--><!--</div>--><!--</div>--><!--<<<<<<< HEAD--><!--<div class="storage__footer" ng-if="vm.payType === \'sms\' && vm.tariff.selected">--><!--<span class="font__center mrg__top15">Pro roz\u0161\xED\u0159en\xED o<b>&nbsp;1 GB &nbsp;</b>po\u0161lete SMS ve tvaru<b> {{ vm.quota.result.code }}&nbsp;</b>na telefonn\xED \u010D\xEDslo {{ vm.tariff.selected.phone }}. Cena je {{ vm.tariff.selected.price }} K\u010D.</span>--><!--=======--><!--<div class="storage__footer" ng-if="vm.tariff.selected">--><!--<span class="font__center mrg__top15">{{ \'STORAGE_TEXT_1\' | translate }}<b>&nbsp;{{ \'STORAGE_TEXT_2\' | translate }}&nbsp;</b>{{ \'STORAGE_TEXT_3\' | translate }}&nbsp;<b> {{ vm.quota.result.code }}&nbsp;</b>{{ \'STORAGE_TEXT_4\' | translate }} {{ vm.tariff.selected.phone }}. {{ \'STORAGE_TEXT_5\' | translate }}{{ vm.tariff.selected.price }} {{ \'STORAGE_TEXT_6\' | translate }}.</span>--><!--&gt;>>>>>> translate--><!--</div>--><!--<div class="storage__footer" ng-if="vm.payType === \'paypal\' && vm.tariff.selected">--><!--<div class="mrg__top15">--><!--<paypal-tariff-button tariff="vm.tariff.selected"></paypal-tariff-button>--><!--</div>--><!--</div>--><!--&lt;!&ndash;        <div ng-if="vm.payType === \'sms\' && vm.tariff.selected">--><!--<form name="smsForm" ng-submit="vm.setSms()" novalidate>--><!--<input class="input input&#45;&#45;size_l"--><!--type="text"--><!--ng-model="vm.smsForm.model.code">--><!--<button>\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C</button>--><!--</form>--><!--</div>&ndash;&gt;--><!--</div>--><!--<div class="storage__now-space">--><!--<div class="storage__header">--><!--<span>{{ \'MAY_SPACE\' | translate }}</span>--><!--</div>--><!--<div class="storage__content">--><!--<div class="storage__now-item">--><!--<div class="storage__space-pie pie storage__space-pie&#45;&#45;my-space mrg__auto"--><!--storage-graph></div>--><!--<div class="storage__footer mrg__top15">--><!--<div class="storage__footer-content">--><!--<<<<<<< HEAD--><!--{{ (vm.user.profile.freeQuota - vm.user.profile.usedQuota) }} MB--><!--<span class="font__size15">\u0421\u0432\u043E\u0431\u043E\u0434\u043D\u043E</span>--><!--<div class="storage__hr "></div>--><!--</div>--><!--<div class="storage__footer-content storage__footer-content&#45;&#45;green ">--><!--{{ vm.user.profile.usedQuota }} MB--><!--<span class=" font__size15">\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u043E</span>--><!--</div>--><!--=======--><!--400 MB--><!--<span class="font__size15">{{ \'STORAGE_USED_SPACE\' | translate }}</span>--><!--<div class="storage__hr "></div>--><!--</div>--><!--<div class="storage__footer-content storage__footer-content&#45;&#45;green">--><!--600 MB--><!--<span class=" font__size15">{{ \'STORAGE_USED\' | translate }}</span>--><!--</div>--><!--&lt;!&ndash; \u0441\u043A\u0440\u0438\u043F\u0442 \u0434\u043B\u044F \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F \u043E\u043A\u0440\u0443\u0436\u043D\u043E\u0441\u0442\u0435\u0439&ndash;&gt;--><!--<script>--><!--function $$(selector, context) {--><!--context = context || document;--><!--var elements = context.querySelectorAll(selector);--><!--return Array.prototype.slice.call(elements);--><!--}--><!--$$(\'.storage__space-pie&#45;&#45;my-space\').forEach(function (pie) {--><!--var spaceDisk = 60;--><!--pie.style.animationDelay = \'-\' + parseFloat(spaceDisk) + \'s\';--><!--});--><!--console.log(\'eror\');--><!--</script>--><!--&lt;!&ndash;  end&ndash;&gt;--><!--&gt;>>>>>> translate--><!--</div>--><!--</div>--><!--</div>--><!--</div>--><!--</div>-->');
$templateCache.put('app/template/main/template.html','<section class="layout"><div class="layout__header"><header></header></div><div class="layout__inner" layout-height><div class="layout__left"><div class="layout__menu"><menu-main folder="vm.folder"></menu-main></div></div><div class="layout__content"><div class="template-header"><div class="template-header__menu"><!-- \u0438\u0442\u0435\u043C--><div class="template-header__menu-item padding--left19 padding--right10 flex align-items--cn"><div class="checkbox-y checkbox-y--size15"><label class="checkbox-y__label"><input class="checkbox-y__input" type="checkbox" ng-model="" ng-change="" ng-disabled=""><div class="checkbox-y__body"><span class="checkbox-y__icon"></span></div></label></div></div><!-- \u0438\u0442\u0435\u043C--><div class="template-header__menu-item"><a class="template-header__link" href ng-click=""><span class="icon-add-template template-header__icon"></span> <span class="template-header__item-name">{{ \'BTN_CREATE_TEMPLATE\' | translate }}</span></a></div><!-- \u0438\u0442\u0435\u043C--><div class="template-header__menu-item"><a class="template-header__link" href ng-click=""><span class="icon-bin template-header__icon color--light-red"></span> <span class="template-header__item-name">{{ \'DELETE\' | translate }}</span></a></div><!-- \u0438\u0442\u0435\u043C--><div class="template-header__menu-item"><a class="template-header__link" href ng-click=""><span class="icon-tag template-header__icon"></span> <span class="template-header__item-name">\u041C\u0435\u0442\u043A\u0430 <span class="icon-arrow-down template-header__item-name-icon"></span></span></a></div><!-- \u0438\u0442\u0435\u043C--><div class="template-header__menu-item"><a class="template-header__link" href ng-click=""><span class="icon-folder template-header__icon"></span><div class="template-header__item-name">\u0412 \u043F\u0430\u043F\u043A\u0443 <span class="icon-arrow-down template-header__item-name-icon"></span></div></a></div><!-- \u0438\u0442\u0435\u043C--><div class="template-header__menu-item"><a class="template-header__link"><span class="icon-more template-header__icon"></span> <span class="template-header__item-name">{{ \'YET\' | translate }}</span></a></div></div></div><div class="template-list"><div class="template-list__item pointer" ng-class="{\'inbox-message--importmant\': vm.message.important, \'inbox-message--new\': !vm.message.seen}" ng-mouseover="vm.message.hover = true" ng-mouseleave="vm.message.hover = false" inbox-message-hover ng-click="vm.goToUrl()"><div><div class="template-list__importance pointer" ng-class="{\'opacity--0\': !vm.message.hover && !vm.message.important}" ng-click="vm.setImportant(); $event.stopPropagation();"><span class="icon-important"></span></div></div><div><div class="template-list__checked"><div class="checkbox-y checkbox-y--size15" ng-click="$event.stopPropagation();"><label class="checkbox-y__label"><input class="checkbox-y__input" type="checkbox" data-checklist-model="vm.messages.checked" data-checklist-value="vm.message"><div class="checkbox-y__body"><span class="checkbox-y__icon"></span></div></label></div></div></div><div><div class="template-list__avatar"><!--<div class="avatar avatar&#45;&#45;size30">--><!--<img class="avatar__image" src="/images/avatar.png">--><!--</div>--><avatar-name class="avatar avatar--settings avatar--size30 avatar--second-style mrg__auto" name="vm.message.from" email="vm.message.fromAddress" ng-if="vm.$state.params.mbox !== \'Sent\' && vm.$state.params.mbox !== \'Drafts\'"></avatar-name><avatar-name class="avatar avatar--settings avatar--size30 avatar--second-style mrg__auto" name="vm.message.to[0].name" email="vm.message.to[0].address" ng-if="vm.$state.params.mbox === \'Sent\' || vm.$state.params.mbox === \'Drafts\'"></avatar-name></div></div><div><div class="template-list__name" ng-if="vm.$state.params.mbox !== \'Sent\'">{{ vm.message.from }}</div><div class="template-list__name" ng-if="vm.$state.params.mbox === \'Sent\' || vm.$state.params.mbox === \'Drafts\'">{{ vm.message.to[0].address }}</div></div><div><!--ng-click="vm.message.active = !vm.message.active; $event.stopPropagation();">--><div class="template-list__round"><div class="template-list__round pointer" ng-click="vm.setSeen(); $event.stopPropagation();"><div class="round" ng-class="{\n                        \'round&#45;&#45;border\': vm.message.hover,\n                        \'round&#45;&#45;yellow\': !vm.message.seen\n                     }"></div></div></div></div><div><div class="template-list__folder"><span class="icon-incoming"></span></div></div><div><div class="template-list__labels"><div class="label-ydx template-list__label" ng-repeat="tag in vm.message.tags track by $index" style="background: {{ tag.bgcolor }}">{{ tag.tag_name }}</div></div></div><div class="template-list__text"><div class="template-list__subject">{{ vm.message.Subject }}</div><div class="template-list__message" ng-bind-html="vm.message.body"></div></div><div><div class="template-list__data">{{ vm.getDate(vm.message.date.date) }}</div></div></div></div><div class="template-footer"></div><div class="layout__footer"><footer></footer></div></div></div></section>');
$templateCache.put('app/terms/main/terms.html','<!-- \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u0443\u0432\u0435\u043B\u0438\u0447\u0435\u043D\u0438\u044F \u043C\u0435\u0441\u0442\u0430\u043D\u0430 \u0434\u0438\u0441\u043A\u0435--><div class="header"><div class="header__brand pointer" ui-sref="mail.inbox"><img class="header__logo" src="/images/logo.png" alt="Mail logo"></div><div><div class="header__spinner"><spinner></spinner></div></div><div class="header__navigation"><!--\u0422\u0443\u0442 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442 \u043C\u0435\u043D\u044E--><div class="navigation font-sizer--bigger-15"><div class="navigation__row"><div class="navigation__item"><a class="navigation__link navigation__link--active" ui-sref="mail.inbox({mbox: \'INBOX\'})">{{ \'MAIL\' | translate }}</a></div><div class="navigation__item"><a class="navigation__link" ui-sref="contacts.main">{{ \'CONTACTS\' | translate }}</a></div><!--<div class="navigation__item">--><!--<a class="navigation__link" href="">\u0424\u0430\u0439\u043B\u044B</a>--><!--</div>--><!--<div class="navigation__item">--><!--<a class="navigation__link" href="">\u041D\u043E\u0432\u043E\u0441\u0442\u0438</a>--><!--</div>--><!--<div class="navigation__item">--><!--<a class="navigation__link" href="">\u0415\u0449\u0435</a>--><!--</div>--></div></div></div><div class="header__left"><!--<div class="header__search header__left-item">--><!--<search-mail></search-mail>--><!--</div>--><!--<div class="header__settings header__left-item">--><!--&lt;!&ndash;<a class="header__settings-link">&ndash;&gt;--><!--<button class="btn-y btn-y&#45;&#45;settings pointer"--><!--uib-popover-template="\'app/components/settings-menu/settings-menu.html\'"--><!--popover-class="popover&#45;&#45;settings"--><!--popover-placement="bottom-right"--><!--popover-animation="true"--><!--popover-trigger="\'outsideClick\'">--><!--<span class="icon-settings"></span>--><!--</button>--><!--</div>--><div class="header__avatar header__left-item"><a class="header__avatar-link" href uib-popover-template="\'app/components/user-menu/user-menu-popover.html\'" popover-class="popover--user popover--no-arrow" popover-placement="bottom-right" popover-animation="true" popover-trigger="\'outsideClick\'"><div class="header__name">{{ vm.user.profile.email.split(\'@\')[0] }}</div><!--\u0422\u0443\u0442 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442 \u0430\u0432\u0430\u0442\u0430\u0440\u0430--><div class="avatar avatar--header avatar--size42"><img class="avatar__image" ng-src="{{ vm.user.profile.photo }}" fallback-src="{{\'/images/avatar.png\'}}"></div></a></div></div></div><div class="terms"><div class="terms__content"><h1 class="terms__title">Podm\xEDnky u\u017E\xEDv\xE1n\xED slu\u017Eeb mail.cz</h1><ol class="terms__list terms__list--first-level"><li class="terms__item-list mrg__top54">\xDAVODN\xCD USTANOVEN\xCD<ol class="terms__list terms__list--second-level"><li class="terms__item-list">Spole\u010Dnost Mail.cz Group, a.s. I\u010C: 05466725, se s\xEDdlem Opletalova 29, 110 00, Praha 1, zapsan\xE1 v obchodn\xEDm rejst\u0159\xEDku u M\u011Bstsk\xE9ho soudu v Praze (d\xE1le jen \u201EPoskytovatel\u201C), je poskytovatelem slu\u017Eeb, internetov\xFDch str\xE1nek, software a aplikac\xED pro registrovan\xE9 u\u017Eivatele za n\xED\u017Ee uveden\xFDch podm\xEDnek, kter\xE9 jsou na webov\xE9m serveru mail.cz (d\xE1le jen \u201ESlu\u017Eby\u201C)</li><li class="terms__item-list">Vztah mezi poskytovatelem a u\u017Eivateli se \u0159\xEDd\xED V\u0161eobecn\xFDmi smluvn\xEDmi podm\xEDnkami (d\xE1le jen \u201EPodm\xEDnky) nestanov\xED-li zvl\xE1\u0161tn\xED podm\xEDnky k dan\xE9 slu\u017Eb\u011B jinak.</li></ol></li><li class="terms__item-list mrg__top54">V\xDDKLAD POJM\u016E<ol class="terms__list terms__list--second-level"><li class="terms__item-list">Poskytovatel. Poskytovatelem je spole\u010Dnost Mail.cz Group, a.s. I\u010C: 05466725, se s\xEDdlem Opletalova 29, 110 00, Praha 1, zapsan\xE1 v obchodn\xEDm rejst\u0159\xEDku u M\u011Bstsk\xE9ho soudu v Praze.</li><li class="terms__item-list">U\u017Eivatel. U\u017Eivatelem se st\xE1v\xE1 ka\u017Ed\xE1 osoba, kter\xE1 uskute\u010Dnila registraci a to v souladu s t\u011Bmito Podm\xEDnkami.</li><li class="terms__item-list">T\u0159et\xED osoba. T\u0159et\xED osobou se rozum\xED subjekt, kter\xFD je odli\u0161n\xFD od Poskytovatele a U\u017Eivatele.</li><li class="terms__item-list">Slu\u017Eby. Slu\u017Ebami se rozum\xED Slu\u017Eby, software, internetov\xE9 str\xE1nky, aplikace Poskytovan\xE9 poskytovatelem pro U\u017Eivatele um\xEDst\u011Bn\xFDch na registrovan\xFDch dom\xE9n\xE1ch Poskytovatele zejm\xE9na mail.cz</li><li class="terms__item-list">U\u017E\xEDv\xE1n\xED Slu\u017Eeb. U\u017E\xEDv\xE1n\xEDm slu\u017Eeb se rozum\xED jak\xE1koliv \u010Dinnost u\u017Eivatele, kterou u\u017Eivatel prov\xE1d\xED na dom\xE9n\xE1ch Poskytovatele.</li><li class="terms__item-list">U\u017Eivatelsk\xFD \xFA\u010Det. U\u017Eivatelsk\xFD \xFA\u010Det vznik\xE1 okam\u017Eikem dokon\u010Den\xED \xFAsp\u011B\u0161n\xE9 registrace, kter\xE1 obsahuje p\u0159\xEDslu\u0161n\xE9 parametry (nap\u0159. U\u017Eivatelsk\xE9 jm\xE9no, emailovou adresu atd.)</li><li class="terms__item-list">PUS \u2013 Podm\xEDnky u\u017E\xEDv\xE1n\xED slu\u017Eeb</li></ol></li><li class="terms__item-list mrg__top54">REGISTRACE U\u017DIVATEL<ol class="terms__list terms__list--second-level"><li class="terms__item-list">Registrace. Pro u\u017E\xEDv\xE1n\xED slu\u017Eeb je nutnost, aby u\u017Eivatel provedl registraci. Jestli\u017Ee kter\xE1koliv slu\u017Eba registraci nepo\u017Eaduje, pro u\u017E\xEDv\xE1n\xED slu\u017Eby se \u0159\xEDd\xED t\u011Bmito v\u0161eobecn\xFDmi podm\xEDnkami. U\u017E\xEDv\xE1n\xEDm slu\u017Eeb u\u017Eivatel souhlas\xED s t\u011Bmito Podm\xEDnkami v opa\u010Dn\xE9m p\u0159\xEDpad\u011B je povinen neu\u017E\xEDvat slu\u017Eby.</li><li class="terms__item-list">Registra\u010Dn\xED formul\xE1\u0159. Registrace je prov\xE1d\u011Bna pomoc\xED registra\u010Dn\xEDho formul\xE1\u0159e, kter\xFD se vypln\xED a ode\u0161le. Opr\xE1vn\u011Bnou osobou pro registraci je osoba sv\xE9pr\xE1vn\xE1</li><li class="terms__item-list">Registra\u010Dn\xED \xFAdaje. P\u0159i vypln\u011Bn\xED registra\u010Dn\xEDho formul\xE1\u0159e je u\u017Eivatel povinen vyplnit \xFAdaje ozna\u010Den\xE9 jako \u201Epovinn\xE9\u201C, bez vypln\u011Bn\xED t\u011Bchto \xFAdaj\u016F nelze registraci dokon\u010Dit. Ostatn\xED \xFAdaje jsou poskytovan\xE9 u\u017Eivatelem dobrovoln\u011B. \xDAdaje poskytnut\xE9 u\u017Eivatelem lze kdykoliv upravit. U\u017Eivatel bere na v\u011Bdom\xED, \u017Ee sd\u011Bluje tak\xE9 \xFAdaje osobn\xEDho charakteru dle z\xE1kona \u010D. 101/2000Sb. O ochran\u011B osobn\xEDch \xFAdaj\u016F. V takov\xE9m p\u0159\xEDpad\u011B se vztahuje na tyto \xFAdaje ustanoven\xED viz n\xED\u017Ee.</li><li class="terms__item-list">U\u017Eivatel bere na v\u011Bdom\xED, \u017Ee na 1 telefonn\xED \u010D\xEDslo, kter\xE9 ud\xE1 p\u0159i registraci, lze zalo\u017Eit maxim\xE1ln\u011B 3 u\u017Eivatelsk\xE9 \xFA\u010Dty.</li><li class="terms__item-list">Souhlas s PUS. P\u0159ed dokon\u010Den\xEDm u\u017Eivatelsk\xE9 registrace je nezbytnou podm\xEDnkou vyd\xE1n\xED souhlasu s t\u011Bmito podm\xEDnkami.</li><li class="terms__item-list">Vznik smluvn\xEDho vztahu. Okam\u017Eikem dokon\u010Den\xED registrace vznik\xE1 mezi u\u017Eivatelem a poskytovatelem smluvn\xED vztah, kter\xFD se \u0159\xEDd\xED t\u011Bmito podm\xEDnkami.</li><li class="terms__item-list">U\u017Eivatelsk\xFD \xFA\u010Det. U\u017Eivatelsk\xFD \xFA\u010Det je zalo\u017Een dokon\u010Den\xEDm registrace.</li><li class="terms__item-list">Roz\u0161\xED\u0159en\xED \xFAdaj\u016F. Poskytovatel si vyhrazuje pr\xE1vo na zm\u011Bnu rozsahu povinn\xFDch \xFAdaj\u016F v souvislosti s u\u017E\xEDv\xE1n\xEDm slu\u017Eeb.V p\u0159\xEDpad\u011B, \u017Ee u\u017Eivatel nedopln\xED tyto \xFAdaje, je poskytovatel opr\xE1vn\u011Bn zru\u0161it takov\xFD \xFA\u010Det.</li></ol></li><li class="terms__item-list mrg__top54">PR\xC1VA A POVINNOSTI<ol class="terms__list terms__list--second-level"><li class="terms__item-list">U\u017Eivatel prohla\u0161uje, \u017Ee:</li><li class="terms__item-list">je sv\xE9pr\xE1vn\xFD v rozsahu pot\u0159ebn\xE9m pro ve\u0161ker\xE1 pr\xE1vn\xED jedn\xE1n\xED ve smyslu Podm\xEDnek,</li><li class="terms__item-list">jeho sv\xE9pr\xE1vnost nebyla nijak omezena,</li><li class="terms__item-list">ve\u0161ker\xE9 \xFAdaje p\u0159i registraci u\u017Eivatel poskytl pravdiv\u011B,</li><li class="terms__item-list">p\u0159ed zah\xE1jen\xEDm u\u017E\xEDv\xE1n\xEDm slu\u017Eeb byl sezn\xE1men s t\u011Bmito podm\xEDnkami a souhlas\xED s nimi.</li><li class="terms__item-list">Bere na v\u011Bdom\xED mo\u017Enost do\u010Dasn\xE9 \u010Di trval\xE9 ztr\xE1ty obsahu v souvislosti se zm\u011Bnou \u010Di pozastaven\xEDm poskytov\xE1n\xED slu\u017Eeb.</li><li class="terms__item-list">U\u017Eivatel se zavazuje, \u017Ee:</li><li class="terms__item-list">neprovede registraci v p\u0159\xEDpad\u011B, \u017Ee by t\xEDm zap\u0159\xED\u010Dinil poru\u0161en\xED pr\xE1vn\xEDch p\u0159edpis\u016F jin\xFDch st\xE1t\u016F ne\u017E \u010CR ze strany u\u017Eivatele.</li><li class="terms__item-list">Nepou\u017Eije slu\u017Eby v p\u0159\xEDpad\u011B, \u017Ee by t\xEDm zap\u0159\xED\u010Dinil poru\u0161en\xED pr\xE1vn\xEDch p\u0159edpis\u016F jin\xFDch st\xE1t\u016F ne\u017E \u010CR ze strany u\u017Eivatele.</li><li class="terms__item-list">Nebude u\u017E\xEDvat slu\u017Eby, jejich\u017E u\u017E\xEDv\xE1n\xED je omezeno minim\xE1ln\xED v\u011Bkovou hranic\xED a u\u017Eivatel se pohybuje pod touto v\u011Bkovou hranic\xED (zejm\xE9na hranice 18 let) ,</li><li class="terms__item-list">zajist\xED ml\u010Denlivost o ve\u0161ker\xFDch \xFAdaj\xEDch slou\u017E\xEDc\xEDch k identifikaci a hesel slou\u017E\xEDc\xEDch pro p\u0159ihl\xE1\u0161en\xED a nebude sd\u011Blovat \u017E\xE1dn\xE9 t\u0159et\xED osob\u011B,</li><li class="terms__item-list">bez zbyte\u010Dn\xE9ho odkladu nahl\xE1s\xED poskytovateli, pokud dojde ke zneu\u017Eit\xED identifika\u010Dn\xEDch \xFAdaj\u016F,</li><li class="terms__item-list">v souvislosti s u\u017E\xEDv\xE1n\xEDm slu\u017Eeb bude dodr\u017Eovat pr\xE1vn\xED p\u0159edpisy \u010CR</li><li class="terms__item-list">nebude \u010Dinit takov\xE9 kroky, kter\xE9 by mohly v\xE9zt k naru\u0161en\xED nebo po\u0161kozen\xED slu\u017Eeb poskytovan\xFDmi poskytovatelem.</li><li class="terms__item-list">Poskytovatel je opr\xE1vn\u011Bn:</li><li class="terms__item-list">prov\xE1d\u011Bt zm\u011Bny v poskytov\xE1n\xED slu\u017Eby, zm\u011Bnu pozastavit \u010Di omezit a to kdykoliv bez p\u0159edchoz\xEDho ozn\xE1men\xED. \xDAkony se mohu vztahovat na v\u0161echny u\u017Eivatele nebo pouze ve vztahu k n\u011Bkter\xFDm u\u017Eivatel\u016Fm a to v\u010Detn\u011B odstran\u011Bn\xED nebo znep\u0159\xEDstupn\u011Bn\xED obsahu u\u017Eivatele, nebo je poskytovatel opr\xE1vn\u011Bn rovn\u011B\u017E bez p\u0159edchoz\xEDho informov\xE1n\xED ukon\u010Dit poskytov\xE1n\xED jak\xE9koliv slu\u017Eby.</li><li class="terms__item-list">Zru\u0161it, omezit \u010Di zablokovat u\u017Eivatelsk\xFD \xFA\u010Det a to kdykoliv bez p\u0159edchoz\xEDho informov\xE1n\xED.</li><li class="terms__item-list">Pr\xE1va k ochran\u011B vlastnictv\xED poskytovatele. U\u017Eivatel souhlas\xED s t\xEDm, \u017Ee nen\xED opr\xE1vn\u011Bn, na z\xE1klad\u011B t\u011Bchto podm\xEDnek, u\u017E\xEDvat jakkoliv obchodn\xED firmu poskytovatele, loga, \u010Di jak\xE9koliv obchodn\xED prvky poskytovatele.</li><li class="terms__item-list">Podm\xEDnky registrace.</li><li class="terms__item-list">Registrace u\u017Eivatele \u010Di vyu\u017E\xEDv\xE1n\xED slu\u017Eeb v z\xE1kladn\xEDm rozsahu je poskytov\xE1no zdarma.</li><li class="terms__item-list">V p\u0159\xEDpad\u011B dopl\u0148kov\xFDch funkc\xED nad r\xE1mec z\xE1kladn\xEDho u\u017E\xEDv\xE1n\xED slu\u017Eeb. Tyto dopl\u0148kov\xE9 funkce mohou b\xFDt zpoplatn\u011Bny. Takovou dopl\u0148kovou funkc\xED se rozum\xED funkce, kter\xE1 nen\xED bezpodm\xEDne\u010Dn\u011B nutn\xFDm p\u0159edpokladem pro vyu\u017E\xEDv\xE1n\xED z\xE1kladn\xEDch funkc\xED slu\u017Eeb. U\u017E\xEDv\xE1n\xED dopl\u0148kov\xFDch funkc\xED se \u0159\xEDd\xED aktu\xE1ln\u011B platn\xFDm cen\xEDkem.</li><li class="terms__item-list">Odpov\u011Bdnost u\u017Eivatele.</li><li class="terms__item-list">U\u017Eivatele bere na v\u011Bdom\xED, \u017Ee s\xE1m nese odpov\u011Bdnost za sv\xE9 jedn\xE1n\xED spojen\xE9 s u\u017E\xEDv\xE1n\xEDm slu\u017Eeb, z\xE1rove\u0148 souhlas\xED, \u017Ee slu\u017Eby nebude vyu\u017E\xEDvat k \u010Dinnostem vedouc\xEDm k poru\u0161ov\xE1n\xED pr\xE1vn\xEDch p\u0159edpis\u016F \u010CR, jin\xFDch st\xE1t\u016F, pravidel pou\u017E\xEDv\xE1n\xED slu\u017Eeb poskytovatele, t\u011Bchto podm\xEDnek, obecn\u011B uzn\xE1van\xFDch z\xE1sad po\u017E\xEDv\xE1n\xED internetu.</li><li class="terms__item-list">U\u017Eivatel je povinen v\u017Edy respektovat pr\xE1va poskytovatele.</li><li class="terms__item-list" class="unnumer bold">U\u017Eivatel zejm\xE9na nesm\xED:</li><li class="terms__item-list">u\u017E\xEDvat slu\u017Eby poskytovatele v rozporu s t\u011Bmito podm\xEDnkami,</li><li class="terms__item-list">u\u017E\xEDvat slu\u017Eby za komer\u010Dn\xEDm \xFA\u010Delem, kter\xFD by vedl k po\u0161kozen\xED poskytovatele,</li><li class="terms__item-list">prov\xE1d\u011Bt kroky k z\xEDsk\xE1n\xED p\u0159ihla\u0161ovac\xEDch \xFAdaj\u016F jin\xFDch u\u017Eivatel\u016F slu\u017Eeb,</li><li class="terms__item-list">zneu\u017E\xEDvat, blokovat, modifikovat \u010Di jinak m\u011Bnit jakoukoliv sou\u010D\xE1st Slu\u017Eby, nebo se i jen pokusit naru\u0161it stabilitu, chod nebo data Slu\u017Eeb,</li><li class="terms__item-list">u\u017E\xEDvat u\u017Eivatelsk\xFD \xFA\u010Det k rozes\xEDl\xE1n\xED nevy\u017E\xE1dan\xE9 po\u0161ty v jak\xE9koliv podob\u011B, vir\u016F \u010Di jak\xE9hokoliv obsahu vedouc\xED k poru\u0161ov\xE1n\xED pr\xE1vn\xEDch p\u0159edpis\u016F.,</li><li class="terms__item-list">poru\u0161ovat etick\xE1, mor\xE1ln\xED pravidla a to i p\u0159i registraci, u\u017E\xEDv\xE1n\xED u\u017Eivatelsk\xFDch jmen apod.,</li><li class="terms__item-list">jak\xFDmkoliv zp\u016Fsobem poru\u0161ovat pr\xE1va poskytovatele nebo t\u0159et\xEDch osob,</li><li class="terms__item-list">jednat jak\xFDmkoliv protipr\xE1vn\xEDm zp\u016Fsobem</li><li class="terms__item-list">U\u017Eivateli se d\xE1le v\xFDslovn\u011B zakazuje jakkoliv \u0161\xED\u0159it Obsah U\u017Eivatele, kter\xFD zejm\xE9na:</li><li class="terms__item-list">Poru\u0161uje pr\xE1va du\u0161evn\xEDho vlastnictv\xED,</li><li class="terms__item-list">vede k nekal\xE9 sout\u011B\u017Ei, m\u016F\u017Ee po\u0161kodit rozvoj z\xE1vodu nebo jeho chod,</li><li class="terms__item-list">obsahuje nez\xE1konn\xE9 u\u017Eit\xED ochrann\xFDch prvk\u016F, zn\xE1mek, obchodn\xEDch jmen apod.,</li><li class="terms__item-list">obsahuje jak\xE9koli podn\u011Bty nav\xE1d\u011Bj\xEDc\xED k poru\u0161ov\xE1n\xED \u010Di nepln\u011Bn\xED z\xE1konn\xE9 povinnosti, u\u017E\xEDv\xE1n\xED n\xE1vykov\xFDch l\xE1tek, vyhro\u017Eov\xE1n\xEDm jin\xFDm osob\xE1m nebo skupin\u011B osob ubl\xED\u017Een\xEDm na zdrav\xED \u010Di usmrcen\xEDm, nebo jin\xFDm po\u0161kozen\xEDm, hanoben\xED n\xE1roda, rasy, jazyka \u010Di etnick\xE9 skupiny, popla\u0161nou zpr\xE1vu, pornografick\xE1 d\xEDla, nepravdiv\xFD \xFAdaj o jin\xE9m,</li><li class="terms__item-list">poskytuje p\u0159\xEDstup k pornografick\xFDm materi\xE1l\u016Fm osob\xE1m mlad\u0161\xEDm 18 let,</li><li class="terms__item-list">propaguje hnut\xED potla\u010Duj\xEDc\xED pr\xE1va a svobody \u010Dlov\u011Bka, hl\xE1s\xE1 n\xE1rodnostn\xED, rasovou, n\xE1bo\u017Eenskou nesn\xE1\u0161enlivost,</li><li class="terms__item-list">pop\xEDr\xE1, zpochyb\u0148uje, schvaluje nebo se sna\u017E\xED ospravedlnit nacistick\xE9 nebo komunistick\xE9 genocidy nebo jin\xE9 zlo\u010Diny proti lidskosti,</li><li class="terms__item-list">kter\xFD je v rozporu s dobr\xFDmi mravy</li><li class="terms__item-list">Neaktivn\xED U\u017Eivatelsk\xFD \xFA\u010Det. Jestli\u017Ee u\u017Eivatel nen\xED p\u0159ihl\xE1\u0161en ke sv\xE9mu \xFA\u010Dtu d\xE9le ne\u017E 12 m\u011Bs\xEDc\u016F, je opr\xE1vn\u011Bn poskytovatel zru\u0161it takov\xFD \xFA\u010Det.</li></ol></li><li class="terms__item-list mrg__top54">OCHRANA OSOBN\xCDCH \xDADAJ\u016EOCHRANA OSOBN\xCDCH \xDADAJ\u016E<ol class="terms__list terms__list--second-level"><li class="terms__item-list">Osobn\xED \xFAdaje. Definice osobn\xEDch \xFAdaj\u016F dle z\xE1kona \u010D. 101/2000 Sb. O ochran\u011B osobn\xEDch \xFAdaj\u016F.</li><li class="terms__item-list">Osobn\xED \xFAdaje. V souladu s \u010Dl. 3 Podm\xEDnek vy\u017Eaduje Poskytovatel p\u0159i registraci povinn\xE9 osobn\xED \xFAdaje.</li><li class="terms__item-list">Citliv\xE9 \xFAdaje. U\u017Eivatel poskytuje jak\xE9koliv citliv\xE9 \xFAdaje dobrovoln\u011B a jejich poskytnut\xED nen\xED povinn\xE9.</li><li class="terms__item-list">Ochrana Osobn\xEDch \xFAdaj\u016F. Poskytovatel shroma\u017E\u010Fuje a uchov\xE1v\xE1 U\u017Eivatelem zadan\xE9 Osobn\xED \xFAdaje dle z\xE1kona \u010D. 101/2000Sb. O ochran\u011B osobn\xEDch \xFAdaj\u016F.</li><li class="terms__item-list">Poskytovatel nenese odpov\u011Bdnost za p\u0159\xEDpadn\xE9 neopr\xE1vn\u011Bn\xE9 z\xE1sahy t\u0159et\xEDch osob, p\u0159i kter\xFDch tyto osoby z\xEDskaj\xED p\u0159\xEDstupy k osobn\xEDm \xFAdaj\u016Fm u\u017Eivatel\u016F nebo datab\xE1ze poskytovatele a toto zneu\u017Eij\xED.</li><li class="terms__item-list">U\u017Eivatel bere na v\u011Bdom\xED riziko, kter\xE9 vypl\xFDv\xE1 z neopr\xE1vn\u011Bn\xFDch z\xE1sah\u016F.</li><li class="terms__item-list">Zpracov\xE1n\xED osobn\xEDch \xFAdaj\u016F. U\u017Eivatel souhlas\xED s pr\xE1vem poskytovatele zpracov\xE1vat, shroma\u017E\u010Fovat a sledovat osobn\xED \xFAdaje u\u017Eivatel\u016F pro vlastn\xED pot\u0159ebu a statistick\xE9 \xFA\u010Dely.</li><li class="terms__item-list">Souhlas u\u017Eivatele se zpracov\xE1n\xEDm Osobn\xEDch \xFAdaj\u016F. Dokon\u010Den\xEDm registrace u\u017Eivatel souhlas\xED se zpracov\xE1n\xEDm osobn\xEDch \xFAdaj\u016F v souladu se z\xE1konem \u010D. 101/2000Sb. O ochran\u011B osobn\xEDch \xFAdaj\u016F. Z\xE1rove\u0148 ud\u011Bluje souhlas k dal\u0161\xEDm marketingov\xFDm \xFA\u010Del\u016Fm, c\xEDlen\xED reklamy a zas\xEDl\xE1n\xED obchodn\xEDch sd\u011Blen\xED.</li><li class="terms__item-list">Doba ud\u011Blen\xED souhlasu. U\u017Eivatel ud\u011Bluje v\xFD\u0161e uveden\xE9 souhlasy na dobu neur\u010Ditou. Nedojde-li k odvol\xE1n\xED tohoto souhlasu u\u017Eivatelem p\xEDsemn\u011B.</li><li class="terms__item-list">Zpracovatel. Poskytovatel je opr\xE1vn\u011Bn pov\u011B\u0159it zpracov\xE1n\xEDm osobn\xEDch \xFAdaj\u016F t\u0159et\xED osobu..</li><li class="terms__item-list">Odvol\xE1n\xED souhlasu. Souhlas se zpracov\xE1n\xEDm osobn\xEDch \xFAdaj\u016F u\u017Eivatel odvol\xE1v\xE1 p\xEDsemn\u011B na adresu poskytovatele, v takov\xE9m p\u0159\xEDpad\u011B bez zbyte\u010Dn\xE9ho odkladu poskytovatel odstran\xED \xFAdaje z datab\xE1z\xED a u\u017Eivatelsk\xFDch \xFA\u010Dt\u016F a nebudou d\xE1le zpracov\xE1v\xE1ny.</li><li class="terms__item-list">P\u0159\xEDstup k \xFAdaj\u016Fm. U\u017Eivatel m\xE1 pr\xE1vo k z\xEDsk\xE1n\xED informace o nakl\xE1d\xE1n\xED s jeho osobn\xEDmi \xFAdaji, po\u017E\xE1dat o informaci m\u016F\u017Ee p\xEDsemn\u011B na adresu poskytovatele a ujistit se tak, \u017Ee poskytovatel zpracov\xE1v\xE1 osobn\xED \xFAdaje v souladu se z\xE1konem 101/2000 Sb. O ochran\u011B osobn\xEDch \xFAdaj\u016F.</li><li class="terms__item-list">Poskytnut\xED osobn\xEDch \xFAdaj\u016F. U\u017Eivatel si je v\u011Bdom povinnosti poskytovatele p\u0159edat osobn\xED \xFAdaje z povinnosti, kterou poskytovateli ukl\xE1d\xE1 z\xE1kon (nap\u0159. V r\xE1mci soudn\xEDch \u010Di spr\xE1vn\xEDch \u0159\xEDzen\xED).</li></ol></li><li class="terms__item-list mrg__top54">OCHRANA OSOBN\xCDCH \xDADAJ\u016E<ol class="terms__list terms__list--second-level"><li class="terms__item-list">Osobn\xED \xFAdaje. Definice osobn\xEDch \xFAdaj\u016F dle z\xE1kona \u010D. 101/2000 Sb. O ochran\u011B osobn\xEDch \xFAdaj\u016F.</li><li class="terms__item-list">Osobn\xED \xFAdaje. V souladu s \u010Dl. 3 Podm\xEDnek vy\u017Eaduje Poskytovatel p\u0159i registraci povinn\xE9 osobn\xED \xFAdaje.</li><li class="terms__item-list">Citliv\xE9 \xFAdaje. U\u017Eivatel poskytuje jak\xE9koliv citliv\xE9 \xFAdaje dobrovoln\u011B a jejich poskytnut\xED nen\xED povinn\xE9.</li><li class="terms__item-list">Ochrana Osobn\xEDch \xFAdaj\u016F. Poskytovatel shroma\u017E\u010Fuje a uchov\xE1v\xE1 U\u017Eivatelem zadan\xE9 Osobn\xED \xFAdaje dle z\xE1kona \u010D. 101/2000Sb. O ochran\u011B osobn\xEDch \xFAdaj\u016F.</li><li class="terms__item-list">Poskytovatel nenese odpov\u011Bdnost za p\u0159\xEDpadn\xE9 neopr\xE1vn\u011Bn\xE9 z\xE1sahy t\u0159et\xEDch osob, p\u0159i kter\xFDch tyto osoby z\xEDskaj\xED p\u0159\xEDstupy k osobn\xEDm \xFAdaj\u016Fm u\u017Eivatel\u016F nebo datab\xE1ze poskytovatele a toto zneu\u017Eij\xED.</li><li class="terms__item-list">U\u017Eivatel bere na v\u011Bdom\xED riziko, kter\xE9 vypl\xFDv\xE1 z neopr\xE1vn\u011Bn\xFDch z\xE1sah\u016F.</li><li class="terms__item-list">Zpracov\xE1n\xED osobn\xEDch \xFAdaj\u016F. U\u017Eivatel souhlas\xED s pr\xE1vem poskytovatele zpracov\xE1vat, shroma\u017E\u010Fovat a sledovat osobn\xED \xFAdaje u\u017Eivatel\u016F pro vlastn\xED pot\u0159ebu a statistick\xE9 \xFA\u010Dely.</li><li class="terms__item-list">Souhlas u\u017Eivatele se zpracov\xE1n\xEDm Osobn\xEDch \xFAdaj\u016F. Dokon\u010Den\xEDm registrace u\u017Eivatel souhlas\xED se zpracov\xE1n\xEDm osobn\xEDch \xFAdaj\u016F v souladu se z\xE1konem \u010D. 101/2000Sb. O ochran\u011B osobn\xEDch \xFAdaj\u016F. Z\xE1rove\u0148 ud\u011Bluje souhlas k dal\u0161\xEDm marketingov\xFDm \xFA\u010Del\u016Fm, c\xEDlen\xED reklamy a zas\xEDl\xE1n\xED obchodn\xEDch sd\u011Blen\xED.</li><li class="terms__item-list">Doba ud\u011Blen\xED souhlasu. U\u017Eivatel ud\u011Bluje v\xFD\u0161e uveden\xE9 souhlasy na dobu neur\u010Ditou. Nedojde-li k odvol\xE1n\xED tohoto souhlasu u\u017Eivatelem p\xEDsemn\u011B.</li><li class="terms__item-list">Zpracovatel. Poskytovatel je opr\xE1vn\u011Bn pov\u011B\u0159it zpracov\xE1n\xEDm osobn\xEDch \xFAdaj\u016F t\u0159et\xED osobu..</li><li class="terms__item-list">Odvol\xE1n\xED souhlasu. Souhlas se zpracov\xE1n\xEDm osobn\xEDch \xFAdaj\u016F u\u017Eivatel odvol\xE1v\xE1 p\xEDsemn\u011B na adresu poskytovatele, v takov\xE9m p\u0159\xEDpad\u011B bez zbyte\u010Dn\xE9ho odkladu poskytovatel odstran\xED \xFAdaje z datab\xE1z\xED a u\u017Eivatelsk\xFDch \xFA\u010Dt\u016F a nebudou d\xE1le zpracov\xE1v\xE1ny.</li><li class="terms__item-list">P\u0159\xEDstup k \xFAdaj\u016Fm. U\u017Eivatel m\xE1 pr\xE1vo k z\xEDsk\xE1n\xED informace o nakl\xE1d\xE1n\xED s jeho osobn\xEDmi \xFAdaji, po\u017E\xE1dat o informaci m\u016F\u017Ee p\xEDsemn\u011B na adresu poskytovatele a ujistit se tak, \u017Ee poskytovatel zpracov\xE1v\xE1 osobn\xED \xFAdaje v souladu se z\xE1konem 101/2000 Sb. O ochran\u011B osobn\xEDch \xFAdaj\u016F.</li><li class="terms__item-list">Poskytnut\xED osobn\xEDch \xFAdaj\u016F. U\u017Eivatel si je v\u011Bdom povinnosti poskytovatele p\u0159edat osobn\xED \xFAdaje z povinnosti, kterou poskytovateli ukl\xE1d\xE1 z\xE1kon (nap\u0159. V r\xE1mci soudn\xEDch \u010Di spr\xE1vn\xEDch \u0159\xEDzen\xED).</li></ol></li><li class="terms__item-list mrg__top54">REKLAMA A MARKETING<ol class="terms__list terms__list--second-level"><li class="terms__item-list">Reklama v r\xE1mci Slu\u017Eeb. U\u017Eivatel bere na v\u011Bdom\xED, \u017Ee v r\xE1mci poskytov\xE1n\xED slu\u017Eeb je poskytovatel opr\xE1vn\u011Bn zobrazovat reklamy nebo propaga\u010Dn\xED sd\u011Blen\xED (d\xE1le jen \u201Ereklama\u201C). Rozsah takov\xE9to reklamy ur\u010Duje poskytovatel. Obsah reklamy je sou\u010D\xE1st\xED obsahu t\u0159et\xEDch osob a tak poskytovatel nen\xED odpov\u011Bdn\xFD za obsah reklamy. Z\xE1rove\u0148 poskytovatel prohla\u0161uje, \u017Ee neodpov\xEDd\xE1 za jakoukoliv \u0161kodu, kter\xE1 vznikne u\u017Eivateli v souvislosti s jakoukoliv reklamou.Reklama v r\xE1mci Slu\u017Eeb. U\u017Eivatel bere na v\u011Bdom\xED, \u017Ee v r\xE1mci poskytov\xE1n\xED slu\u017Eeb je poskytovatel opr\xE1vn\u011Bn zobrazovat reklamy nebo propaga\u010Dn\xED sd\u011Blen\xED (d\xE1le jen \u201Ereklama\u201C). Rozsah takov\xE9to reklamy ur\u010Duje poskytovatel. Obsah reklamy je sou\u010D\xE1st\xED obsahu t\u0159et\xEDch osob a tak poskytovatel nen\xED odpov\u011Bdn\xFD za obsah reklamy. Z\xE1rove\u0148 poskytovatel prohla\u0161uje, \u017Ee neodpov\xEDd\xE1 za jakoukoliv \u0161kodu, kter\xE1 vznikne u\u017Eivateli v souvislosti s jakoukoliv reklamou.</li><li class="terms__item-list">Obchodn\xED sd\u011Blen\xED. U\u017Eivatel v souladu se z\xE1konem \u010D. 480/2004 Sb. o n\u011Bkter\xFDch slu\u017Eb\xE1ch informa\u010Dn\xED spole\u010Dnosti a o zm\u011Bn\u011B n\u011Bkter\xFDch z\xE1kon\u016F souhlas\xED, aby poskytovatel zas\xEDlal u\u017Eivateli na emailov\xE9 adresy u\u017Eivatele obchodn\xED sd\u011Blen\xED \u010Di informace o novink\xE1ch v r\xE1mci slu\u017Eeb. Z\xE1rove\u0148 souhlas\xED s pou\u017Eit\xEDm reklamn\xEDch pati\u010Dek v r\xE1mci emailov\xFDch adres.Obchodn\xED sd\u011Blen\xED. U\u017Eivatel v souladu se z\xE1konem \u010D. 480/2004 Sb. o n\u011Bkter\xFDch slu\u017Eb\xE1ch informa\u010Dn\xED spole\u010Dnosti a o zm\u011Bn\u011B n\u011Bkter\xFDch z\xE1kon\u016F souhlas\xED, aby poskytovatel zas\xEDlal u\u017Eivateli na emailov\xE9 adresy u\u017Eivatele obchodn\xED sd\u011Blen\xED \u010Di informace o novink\xE1ch v r\xE1mci slu\u017Eeb. Z\xE1rove\u0148 souhlas\xED s pou\u017Eit\xEDm reklamn\xEDch pati\u010Dek v r\xE1mci emailov\xFDch adres.</li></ol></li><li class="terms__item-list mrg__top54">VYLOU\u010CEN\xCD ODPOV\u011ADNOSTI<ol class="terms__list terms__list--second-level"><li class="terms__item-list">Vylou\u010Den\xED z\xE1ruk. Poskytovatel neposkytuje \u017E\xE1dn\xE9 z\xE1ruky na slu\u017Eby, kter\xE9 jsou poskytovan\xE9 prost\u0159ednictv\xEDm mail.cz. Zejm\xE9na se jedn\xE1 o to, \u017Ee:</li><li class="terms__item-list">slu\u017Eby budou v provozu nep\u0159etr\u017Eit\u011B 24 hodin denn\u011B, 7 dn\xED v t\xFDdnu,</li><li class="terms__item-list">Slu\u017Eby budou fungovat bez jak\xE9hokoliv omezen\xED po celou dobu dostupnosti Slu\u017Eeb,</li><li class="terms__item-list">Obsah Poskytovatele \u010Di obsah t\u0159et\xEDch osob je celistv\xFD, spr\xE1vn\xFD a p\u0159esn\xFD, z\xE1rove\u0148 tak\xE9 poskytovatel neru\u010D\xED za to, \u017Ee nebudou poru\u0161ena pr\xE1va t\u0159et\xEDch osob.</li><li class="terms__item-list">Toto ustanoven\xED se nevztahuje na poskytov\xE1n\xED z\xE1konn\xFDch z\xE1ruk.</li><li class="terms__item-list">Odpov\u011Bdnost za \u0161kodu. U\u017Eivatel bere na v\u011Bdom\xED, \u017Ee byl sezn\xE1men se skute\u010Dnost\xED, \u017Ee poskytovatel neposkytuje v r\xE1mci poskytovan\xFDch slu\u017Eeb \u017E\xE1dn\xE9 z\xE1ruky a proto akceptuje ur\u010Ditou m\xEDru rizika a zavazuje se u\u010Dinit kroky takov\xE9, aby vylou\u010Dil nebo omezil mo\u017Enost vzniku \xFAjmy.</li></ol></li><li class="terms__item-list mrg__top54">U\u017DIVATEL SE ZAVAZUJE ZEJM\xC9NA:<ol class="terms__list terms__list--second-level"><li class="terms__item-list">Pravideln\u011B z\xE1lohovat data,</li><li class="terms__item-list">\u010Dinit dal\u0161\xED opat\u0159en\xED vedouc\xED k minimalizaci rizika \xFAjmy.</li><li class="terms__item-list">U\u017Eivatel bere na v\u011Bdom\xED, \u017Ee poskytovatel neodpov\xEDd\xE1 za \u017E\xE1dnou p\u0159\xEDmou \u010Di nep\u0159\xEDmou \xFAjmu spojenou s u\u017E\xEDv\xE1n\xEDm slu\u017Eeb,obsahu poskytovatele \u010Di obsahu t\u0159et\xEDch osob a to zejm\xE9na poskytovatel neodpov\xEDd\xE1 za:</li><li class="terms__item-list">\u0161patnou dostupnost, nefunk\u010Dnost nebo nedostupnost jak\xE9koliv slu\u017Eby.</li><li class="terms__item-list">Nedoru\u010Den\xED zpr\xE1vy, doru\u010Den\xED ne\xFApln\xE9 nebo jak\xFDmkoliv zp\u016Fsobem po\u0161kozen\xE9 zpr\xE1vy,</li><li class="terms__item-list">odesl\xE1n\xED po\u0161kozen\xED zpr\xE1vy nebo neodesl\xE1n\xED zpr\xE1vy,</li><li class="terms__item-list">za po\u0161kozen\xED, ztr\xE1tu nebo neulo\u017Een\xED dat, kter\xE1 jsou sou\u010D\xE1st\xED obsahu u\u017Eivatele,</li><li class="terms__item-list">n\xE1sledky nespr\xE1vn\u011B, nep\u0159esn\u011B \u010Di ne\xFApln\u011B uveden\xFDch \xFAdaj\u016F p\u0159i registraci u\u017Eivatele</li><li class="terms__item-list">poskytovatel i u\u017Eivatel souhlas\xED s omezen\xEDm odpov\u011Bdnosti poskytovatele v\u016F\u010Di u\u017Eivateli.</li><li class="terms__item-list">Odpov\u011Bdnost podle zvl\xE1\u0161tn\xEDch p\u0159edpis\u016F. Poskytovatel v souladu s ustanoven\xEDm \xA7 3, 4 a 5 z\xE1kona \u010D. 480/2004 Sb., o n\u011Bkter\xFDch slu\u017Eb\xE1ch informa\u010Dn\xED spole\u010Dnosti, v platn\xE9m zn\u011Bn\xED, za \u017E\xE1dn\xFDch okolnost\xED neodpov\xEDd\xE1 za obsah Obsahu U\u017Eivatele.</li><li class="terms__item-list">Od\u0161kodn\u011Bn\xED. U\u017Eivatel bere z\xE1vazn\u011B na v\u011Bdom\xED povinnost od\u0161kodnit poskytovatele za ve\u0161kerou \xFAjmu, kter\xE1 mu vznikne v d\u016Fsledku poru\u0161en\xED t\u011Bchto podm\xEDnek u\u017Eivatelem.</li></ol></li><li class="terms__item-list mrg__top54">SOUHLAS S PODM\xCDNKAMI<ol class="terms__list terms__list--second-level"><li class="terms__item-list">Souhlas s Podm\xEDnkami. Ka\u017Ed\xFD u\u017Eivatel m\xE1 za povinnost sezn\xE1mit se s t\u011Bmito podm\xEDnkami p\u0159ed zah\xE1jen\xEDm vyu\u017E\xEDv\xE1n\xED slu\u017Eeb a vyslovit souhlas s t\u011Bmito podm\xEDnkami. Pokud u\u017Eivatel nesouhlas\xED s podm\xEDnkami je povinen zdr\u017Eet se u\u017E\xEDv\xE1n\xED slu\u017Eeb.</li><li class="terms__item-list">Zm\u011Bny a \xFA\u010Dinnost zm\u011Bn Podm\xEDnek</li><li class="terms__item-list">Zm\u011Bny podm\xEDnek. Poskytovatel je opr\xE1vn\u011Bn m\u011Bnit podm\xEDnky jednostrann\u011B, kdykoliv a zm\u011Bnu poskytovatel sd\u011Blit u\u017Eivateli prost\u0159ednictv\xEDm u\u017Eivatelsk\xE9ho \xFA\u010Dtu, kter\xFD je registrovan\xFD na www.mail.cz.</li><li class="terms__item-list">\xDA\u010Dinnost zm\u011Bn Podm\xEDnek. \xDA\u010Dinnost podm\xEDnek a jejich zm\u011Bn nast\xE1v\xE1 dnem, kter\xFD ur\u010D\xED poskytovatel a u\u017Eivatel s nimi souhlas\xED, za takov\xFD souhlas se pova\u017Euje i pokra\u010Dov\xE1n\xED ve vyu\u017E\xEDv\xE1n\xED slu\u017Eeb u\u017Eivatelem, jemu\u017E zm\u011Bna podm\xEDnek byla sd\u011Blena v souladu s t\xEDmto \u010Dl\xE1nkem.</li><li class="terms__item-list">U\u017Eivatel vyjad\u0159uje souhlas s platebn\xEDmi podm\xEDnkami v\u0161ech slu\u017Eeb, kter\xE9 vyu\u017E\xEDv\xE1, dle aktu\xE1ln\xEDho cen\xEDku, kter\xFD je zve\u0159ejn\u011Bn\xFD na webov\xFDch str\xE1nk\xE1ch www.mail.cz</li><li class="terms__item-list">U\u017Eivatel vyjad\u0159uje souhlas poskytovateli p\u0159ipojit k u\u017Eivatelsk\xE9mu \xFA\u010Dtu dal\u0161\xED slu\u017Eby, kter\xE9 poskytoatel bude v budoucnu poskytovat, z\xE1rove\u0148 souhlas\xED, \u017Ee poskytovatel tak m\u016F\u017Ee \u010Dinit automaticky.</li></ol></li><li class="terms__item-list mrg__top54">VZTAHY K T\u0158ET\xCDM OSOB\xC1M:<ol class="terms__list terms__list--second-level"><li class="terms__item-list">Obsah t\u0159et\xEDch osob. Poskytovatel nenese \u017E\xE1dnou odpov\u011Bdnost za obsah t\u0159et\xEDch osob, kter\xFD je zobrazov\xE1n u\u017Eivatel\u016Fm v n\xE1vaznosti na poskytovan\xE9 slu\u017Eby. Zejm\xE9na pak poskytovatel neodpov\xEDd\xE1 za mo\u017Enost z\xE1sahu obsahu t\u0159et\xEDch stran do pr\xE1v jin\xFDch osob. Poskytovatel sou\u010Dasn\u011B neodpov\xEDd\xE1 za servery \u010Di slu\u017Eby t\u0159et\xEDch strany a nejsou ze strany poskytovatele kontrolov\xE1ny, poskytovatel nenese odpov\u011Bdnost za jakoukoliv formu p\u0159enosu p\u0159ijat\xE9ho ze serveru t\u0159et\xEDch osob.</li></ol></li><li class="terms__item-list mrg__top54">Z\xC1V\u011ARE\u010CN\xC1 USTANOVEN\xCD<ol class="terms__list terms__list--second-level"><li class="terms__item-list">Komunikace. Komunikace mezi poskytovatelem a u\u017Eivatelem prob\xEDh\xE1 p\xEDsemn\u011B na adresu poskytovatele (zas\xEDl\xE1 u\u017Eivatel) \u010Di adresu u\u017Eivatele (zas\xEDl\xE1 poskytovatel), emailem (pro doru\u010Den\xED poskytovateli e-mail: info@mail.cz) Poskytovatel m\xE1 tak\xE9 mo\u017Enost vyu\u017E\xEDt ke komunikaci s u\u017Eivatelem nebo u\u017Eivateli pro doru\u010Den\xED sd\u011Blen\xED sv\xE9 internetov\xE9 str\xE1nky, na kter\xE9 sd\u011Blen\xED vyv\u011Bs\xED. Poskytovatel m\u016F\u017Ee pro komunikaci tak\xE9 vyu\u017E\xEDt \u010D\xEDslo uveden\xE9 u\u017Eivatelem p\u0159i registraci.</li><li class="terms__item-list">Rozhodn\xE9 pr\xE1vo a kolizn\xED normy. Ve\u0161ker\xE9 podm\xEDnky v\u010Detn\u011B ve\u0161ker\xFDch pr\xE1vn\xEDch vztah\u016F, kter\xE9 vznikly nebo vzniknou mezi poskytovatelem a u\u017Eivatelem se \u0159\xEDd\xED pr\xE1vn\xEDm \u0159\xE1dem \u010Cesk\xE9 Republiky.</li><li class="terms__item-list">\u0158e\u0161en\xED spor\u016F. Spory jsou \u0159e\u0161eny p\u0159ed soudy \u010CR.</li><li class="terms__item-list">Jazykov\xE1 verze. Forma jazykov\xE9 verze podm\xEDnek je v \u010Desk\xE9m jazyce a je tak z\xE1vazn\xE1, ostatn\xED jazykov\xE9 verze jsou pouze informa\u010Dn\xEDho charakteru.</li><li class="terms__item-list">Salv\xE1torsk\xE1 klauzule. Pokud jak\xE9koliv ustanoven\xED t\u011Bchto Podm\xEDnek je nebo se stane neplatn\xFDm nebo nevymahateln\xFDm jako celek nebo jeho \u010D\xE1st, je pln\u011B odd\u011Bliteln\xFDm od ostatn\xEDch ustanoven\xED t\u011Bchto Podm\xEDnek a takov\xE1 neplatnost nebo nevymahatelnost nebude m\xEDt \u017E\xE1dn\xFD vliv na platnost a vymahatelnost jak\xFDchkoliv ostatn\xEDch ustanoven\xED t\u011Bchto Podm\xEDnek. Poskytovatel v takov\xE9m p\u0159\xEDpad\u011B nahrad\xED takov\xE9 neplatn\xE9 nebo nevymahateln\xE9 ustanoven\xED jin\xFDm ustanoven\xEDm, kter\xE9 bude v nejvy\u0161\u0161\xED mo\u017En\xE9 m\xED\u0159e odpov\xEDdat obsahu p\u016Fvodn\xEDho ustanoven\xED.</li></ol></li><!--<li class="terms__item-list mrg__top54">--><!--<ol class="terms__list terms__list&#45;&#45;second-level">--><!--<li class="terms__item-list">--><!--</li>--><!--<li class="terms__item-list">--><!--</li>--><!--<li class="terms__item-list">--><!--</li>--><!--<li class="terms__item-list">--><!--</li>--><!--<li class="terms__item-list">--><!--</li>--><!--<li class="terms__item-list">--><!--</li>--><!--</ol>--><!--</li>--></ol></div></div><div class="layout__footer"><div class="footer"><div class="footer__row position--left"><div class="footer-left"><div class="footer__date-info">\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0439 \u0432\u0445\u043E\u0434 31 \u043C\u0430\u0440\u0442\u0430 2017 \u0433\u043E\u0434\u0430 \u0432 17:30</div></div><div class="footer-right"><!--<div class="footer-right__elemets">--><!--<a href="">\u041F\u043E\u043C\u043E\u0449\u044C</a>--><!--</div>--><div class="footer-right__elemets">\xA9 2017, Mail.cz</div><div class="footer-right__elemets"><!-- \u042F\u0437\u044B\u043A\u043E\u0432\u043E\u0435 \u043C\u0435\u043D\u044E--><div class="choice-language choice-language--main-footer"><a class="choice-language__link choice-language--active" href=""><img class="choice-language__country" src="images/country/albania.svg" alt=""></a><!----> <a class="choice-language__link" href=""><img class="choice-language__country" src="images/country/bosnia.svg" alt=""></a><!----> <a class="choice-language__link" href=""><img class="choice-language__country" src="images/country/croatia.svg" alt=""></a><!----> <a class="choice-language__link" href=""><img class="choice-language__country" src="images/country/cz.svg" alt=""></a><!----> <a class="choice-language__link" href=""><img class="choice-language__country" src="images/country/macedonia.svg" alt=""></a><!----> <a class="choice-language__link" href=""><img class="choice-language__country" src="images/country/russia.svg" alt=""></a><!----> <a class="choice-language__link" href=""><img class="choice-language__country" src="images/country/serbia.svg" alt=""></a><!----> <a class="choice-language__link" href=""><img class="choice-language__country" src="images/country/slovakia.svg" alt=""></a><!----> <a class="choice-language__link" href=""><img class="choice-language__country" src="images/country/Slovenia.svg" alt=""></a><!----> <a class="choice-language__link" href=""><img class="choice-language__country" src="images/country/uk.svg" alt=""></a><!----> <a class="choice-language__link" href=""><img class="choice-language__country" src="images/country/ukraine.svg" alt=""></a></div></div></div></div></div></div>');
$templateCache.put('app/theme/main/main.html','<h1>Theme</h1>');}]);