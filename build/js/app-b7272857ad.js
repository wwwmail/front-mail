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
        'help'
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

(function () {
    'use strict';

    angular.module('contacts', [
        'contacts.main'
    ]);
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
            'ngTagsInput'
        ]);
})();

(function() {
    'use strict';

    angular.module('app.directives', []);
})();

(function() {
  'use strict';

  angular.module('app.components', []);
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

(function () {
    'use strict';

    angular.module('mail', [
        'mail.inbox',
        'mail.compose',
        'mail.message'
    ]);
})();
(function() {
  'use strict';

  angular.module('app.services', [
      'app.core'
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

    angular.module('auth.passwordReset', [
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

    angular.module('auth.signIn', [
        'app.core',
        'app.components'
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

  angular.module('blocks.router', [
    'ui.router',
    'blocks.logger'
  ]);
})();

(function() {
  'use strict';

  angular.module('blocks.logger', []);
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

    angular.module('mail.compose', []);
})();

(function () {
    'use strict';

    angular.module('mail.inbox', []);
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

    angular.module('settings.contacts', []);
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

    angular.module('settings.ruleAdd', []);
})();

(function () {
    'use strict';

    angular.module('settings.rules', []);
})();

(function() {
  'use strict';

  angular.module('storage.main', [
    'app.core',
    'app.components'
  ]);
})();

(function () {
    'use strict';

    angular.module('settings.tags', []);
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
    
    moment.locale('ru');

    var core = angular.module('app.core');

    // core.config(function (toastrConfig) {
    //     angular.extend(toastrConfig, {
    //         timeOut: 2000,
    //         toastClass: 'toast toast--extend'
    //     });
    // });

    core.config(["tagsInputConfigProvider", function (tagsInputConfigProvider) {
        tagsInputConfigProvider.setDefaults('tagsInput', {placeholder: ''});
    }]);

    core.config(["$authProvider", "CONFIG", function ($authProvider, CONFIG) {

        // the following shows the default values. values passed to this method
        // will extend the defaults using angular.extend

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
            },
            proxyUrl: '/proxy',
            omniauthWindowType: 'sameWindow',
            authProviderPaths: {
                github: '/auth/github',
                facebook: '/auth/facebook',
                google: '/auth/google'
            },
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
            handleLoginResponse: function (response, $auth) {
                $auth.persistData('auth_headers', {
                    'Authorization': response.data.access_token
                });

                $auth.persistData('profile', {
                    'profile': response.data.profile
                });

                console.log('$auth', $auth);

                return response.data;
            },
            handleAccountUpdateResponse: function (response) {
                return response.data;
            },
            handleTokenValidationResponse: function (response, $auth) {

                console.log('$auth', $authProvider);
                // $auth.persistData('auth_headers', {
                //     'Authorization': response.data.access_token
                // });

                // $auth.persistData('user', {
                //     'profile': response.data.profile
                // });

                return response.data;
            }
        });
    }])

})();

(function () {
    'use strict';

    angular
        .module('app.core')
        .constant('CONFIG',
            {
                DebugMode: true,
                APIHost: 'http://apimail.devogic.com',
                MediaUrl: 'http://apimail.devogic.com/'
            }
        );
})();

(function () {
    'use strict';

    appRun.$inject = ["routerHelper"];
    angular
        .module('app.core')
        .run(appRun);

    /* @ngInject */
    function appRun(routerHelper) {
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
                    element.css({width: 260});
                    return;
                }
                element.addClass('is-menu-minimize');
                element.removeClass('is-menu-middle');
                element.css({width: 60});
            }

            interact('.resize-menu')
                .draggable({
                    onmove: window.dragMoveListener
                })
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

                    console.log('event,' , event);

                    var target = event.target,
                        x = (parseFloat(target.getAttribute('data-x')) || 0),
                        y = (parseFloat(target.getAttribute('data-y')) || 0);

                    // update the element's style
                    target.style.width  = event.rect.width + 'px';
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
                    } else if (event.pageX >= 220)  {
                        element.removeClass('is-menu-middle');
                        element.removeClass('is-menu-minimize');
                    }
                });

            function dragMoveListener (event) {
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
            console.log('scope', scope.searchForm);

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
        .directive('uiSelectChoicesStatic', uiSelectChoicesStatic);

    uiSelectChoicesStatic.$inject = ['$compile', '$timeout'];

    /* @ngInject */
    function uiSelectChoicesStatic($compile, $timeout) {
        var directive = {
            link: link,
            restrict: 'EA',
            scope: true
        };
        return directive;

        function link(scope, element, attrs) {
            var html = element.html();
            // element.html('');

            var compileHtml = $compile(html);

            pasteHtml(compileHtml(scope));

            function pasteHtml(html) {
                $timeout(function () {
                    $('.ui-select-choices-group').append(html);
                }, 250);
            }


        }
    }

})();

(function () {
    'use strict';

    angular
        .module('mail')
        .controller('MailController', MailController);

    MailController.$inject = ['folder', 'tagResolve'];
    /* @ngInject */
    function MailController(folder, tagResolve) {
        var vm = this;

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

    connection.$inject = ['CONFIG', '$resource'];

    function connection(CONFIG, $resource) {
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
            if (confirm("Вы хотите удалить ящик?")) {
               return resource.destroy(params, data).$promise;
            }
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
                    method: 'GET',
                    url: API_URL + '/find/:q'
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
            sync: sync
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
            return resource.get(params, data).$promise;
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

    mail.$inject = ['CONFIG', '$resource', '$http', '$rootScope', 'Upload'];

    function mail(CONFIG, $resource, $http, $rootScope, Upload) {
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
                }
            }
        );

        function post(params, data) {
            return resource.post(params, data).$promise
                .then(function (response) {
                    console.log('params', data);
                    if (data.cmd === 'send') {
                        $rootScope.$broadcast('mail:send:success');
                    }
                    return response;
                });
        }

        function get(params, data) {
            return resource.get(params, data).$promise;
        }

        function put(params, data) {
            return resource.put(params, data).$promise;
        }

        function upload(params, data, files) {
            var foramttedData = {
                to: data.to,
                body: data.body,
                cmd: 'add-attach'
            };

            _.forEach(files, function (file, i){
                var name = 'file' + i;
                foramttedData[name] = file;
            });

            return Upload.upload({
                url: CONFIG.APIHost + '/mails/add-attach',
                data: foramttedData
            });
        }

        function getById(params, data) {
            return resource.getById(params, data).$promise;
        }

        function move(params, data) {
            return resource.move(params, data).$promise;
        }

        function moveToFolder(folder, data) {
            var messages = angular.copy(data);

            if (messages.isLoading || !messages.checked.length) return;

            move({}, {
                messages: messages.checked,
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
                    messages: messages.checked
                },
                headers: {
                    "Content-Type": "application/json;charset=utf-8"
                }
            });

            messages.checked = [];

            return messages;
        }

        function setSeen(data) {
            var messages = angular.copy(data);

            if (messages.isLoading || !messages.checked.length) return;

            messages.isLoading = true;

            flag({}, {
                messages: messages.checked,
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
                messages: messages.checked,
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
                messages: messages.checked,
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
                messages: messages.checked,
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
            fwdData = data;
        }

        function getFwdData() {
            return fwdData;
        }

        return {
            get: get,
            post: post,
            put: put,
            getById: getById,
            move: move,
            destroy: destroy,
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
            getFwdData: getFwdData
        }
    }

})();
(function () {
    'use strict';

    angular
        .module('app.services')
        .factory('profile', profile);

    profile.$inject = ['CONFIG', '$resource', 'Upload', '$rootScope', '$auth', '$state'];

    function profile(CONFIG, $resource, Upload, $rootScope, $auth, $state) {
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
            data.photo = CONFIG.MediaUrl + data.photo;

            if (data.birthday) {
                var date = moment(data.birthday);
                data.bMonth = moment.months()[date.month()];
                data.bDay = date.day() + 1;
                data.bYear = date.year();
            }

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
            if (confirm("Вы хотите удалить аккаунт?")) {
                resource.destroy(params, data).$promise
                    .then(function (response) {
                        $auth.signOut().then(function () {
                            $state.go('signIn');
                        });
                    });
            }
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

        return {
            get: get,
            post: post,
            put: put,
            uploadAvatar: uploadAvatar,
            getCurrent: getCurrent,
            destroy: destroy,
            changePassword: changePassword
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
            if (confirm('Удалить правило')) {
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
        .factory('tag', tag);

    tag.$inject = ['CONFIG', '$resource', '$http', '$rootScope', '$auth'];

    function tag(CONFIG, $resource, $http, $rootScope, $auth) {
        var API_URL = CONFIG.APIHost + '/tag';

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
            return resource.get(params, data).$promise;
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
                messages: messages.checked,
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
                messages: messages.checked,
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

        return {
            get: get,
            create: create,
            update: update,
            destroy: destroy,
            getTagsByMessage: getTagsByMessage,
            addTagToMessages: addTagToMessages,
            deleteTagFromMessages: deleteTagFromMessages,
            setTag: setTag,
            setUnTag: setUnTag
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
                        },
                        user: function (profile) {
                            return profile.get();
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
                    'required': 'Введите email или логин'
                }
            }
        };

        vm.requestPasswordReset = requestPasswordReset;

        function requestPasswordReset(form) {
            if (form.$invalid) return;
            // console.log(vm.userForm);
            vm.userForm.isLoading = true;
            $auth.requestPasswordReset(vm.userForm.model)
                .then(function (response) {
                    vm.userForm.isLoading = false;
                    $state.go('passwordUpdate', {
                        username: vm.userForm.model.username
                    });
                })
                .catch(function (response) {
                    // handle error response
                    vm.userForm.errors = response.data.data;
                    console.log('error',vm.userForm.errors);
                });
        }

        // function sendCode() {
        //     if (!vm.userForm.model.phone) return;
        //
        //     var phone = '420' + vm.userForm.model.phone.replace(/\s{2,}/g, ' ');
        //
        //     // console.log('vm.userForm.model.phone', phone);
        //     authService.sendCode({}, {phone: phone})
        //         .then(function (response) {
        //             console.log('response', response);
        //             vm.codeResult = response;
        //         })
        //         .catch(function (response) {
        //             vm.userForm.errors = response.data;
        //             console.log('error', response);
        //         });
        // }
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
        .module('auth.signUp')
        .controller('SignUpController', SignUpController);

    SignUpController.$inject = ['$state', '$auth', '$timeout', 'authService'];
    /* @ngInject */
    function SignUpController($state, $auth, $timeout, authService) {
        var vm = this;

        vm.userForm = {
            isLoading: false,
            model: {
                phone: '420'
            },
            validations: {
                phone: {
                    // 'required': 'Введите номер'
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
                    console.log('error', response);
                });
        }

        function sendCode() {
            var phone = vm.userForm.model.phone.replace(/\s{2,}/g, ' ');
            // console.log('vm.userForm.model.phone', phone);
            authService.sendCode({}, {phone: phone})
                .then(function (response) {
                    console.log('response', response);
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

        function login() {
            console.log(vm.userForm);
            vm.userForm.isLoading = true;
            $auth.submitLogin(vm.userForm.model)
                .then(function (response) {
                    vm.userForm.isLoading = false;
                    $state.go('mail.inbox', {mbox: 'INBOX'});
                })
                .catch(function (response) {
                    vm.userForm.errors = "Не правильный логин или пароль";
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
                    url: '/sign-in',
                    templateUrl: 'app/auth/sign-in/sign-in.html',
                    controller: 'SignInController',
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
                    'required': 'Введите код'
                },
                newpassword: {
                    'required': 'Введите новый пароль'
                },
                passwordConf: {
                    'required': 'Повторите новый пароль'
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
        RouterHelper.$inject = ['$location', '$rootScope', '$state', '$timeout', 'logger'];
        /* @ngInject */
        function RouterHelper($location, $rootScope, $state, $timeout, logger) {
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
                        logger.warning(msg, [toState]);
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
                        var title = config.docTitle + ' ' + (toState.title || '');
                        $rootScope.title = title; // data bind to <title>
                    }
                );
            }
        }
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

(function () {
    'use strict';

    angular
        .module('contacts.main')
        .controller('ContactsMainController', ContactsMainController);

    ContactsMainController.$inject = ['$scope', '$state', '$uibModal', 'contact', 'contactGroup'];
    /* @ngInject */
    function ContactsMainController($scope, $state, $uibModal, contact, contactGroup) {
        var vm = this;

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
        .module('app.directives')
        .directive('messageTextarea', messageTextarea);

    messageTextarea.$inject = ['$sce'];

    /* @ngInject */
    function messageTextarea($sce) {
        var directive = {
            template: '<div class="message-textarea"><div class="summernote message-textarea"></div></div>',
            link: link,
            require: '?ngModel',
            restrict: 'EA',
            scope: true,
            replace: true
        };
        return directive;

        function link(scope, element, attrs, ngModel) {
            var isLoadedModel = false;

            scope.$watch(function () {
                return ngModel.$modelValue;
            }, function (newValue) {
                // console.log('newValue', newValue);
                if (newValue && !isLoadedModel) {
                    // var html =  $sce.parseAsHtml(ngModel.$viewValue);

                    // console.log('$viewValue', ngModel.$viewValue);
                    // console.log('html', $sce.trustAsHtml(ngModel.$viewValue));
// return;
                    $('.summernote').summernote('code', ngModel.$viewValue);
                    isLoadedModel = true;
                }
            });

            var $el = $('.summernote').summernote({
                minHeight: 400,
                dialogsInBody: true,
                callbacks: {
                    onChange: function (contents, $editable) {
                        console.log('onChange:', contents, $editable, ngModel);
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
                    bold: 'icon-bold',
                    italic: 'icon-italic',
                    underline: 'icon-underlay',
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
        }
    }

})();

(function () {
    'use strict';

    angular
        .module('app.components')
        .component('attachButton', {
            bindings: {
                data: '='
            },
            templateUrl: 'app/components/attach-button/attach-button.html',
            controller: 'AttachButtonController',
            controllerAs: 'vm'
        });
})();
(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('AttachButtonController', AttachButtonController);

    AttachButtonController.$inject = ['$auth'];
    /* @ngInject */
    function AttachButtonController($auth) {
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
        .module('app.components')
        .component('attachItem', {
            bindings: {
                attach: '=',
                message: '='
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

    AttachItemController.$inject = ['$auth'];
    /* @ngInject */
    function AttachItemController($auth) {
        var vm = this;

        activate();

        function activate() {
            vm.user = $auth.user;

            console.log('attach', vm.attach);
            console.log('message', vm.message);
            console.log('user', vm.user);
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
        .component('attachUpload', {
            bindings: {
                attachmentsData: '=',
                message: '=',
                isUploading: '='
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

    AttachUploadController.$inject = ['$auth', '$state'];
    /* @ngInject */
    function AttachUploadController($auth, $state) {
        var vm = this;

        vm.getLink = getLink;
        vm.remove = remove;

        activate();

        function activate() {
            vm.user = $auth.user;
            vm.$state = $state;
        }

        function getLink(attachment) {
            var link = [
                "http://apimail.devogic.com/mail/",
                attachment.number,
                "?mbox=",
                vm.$state.params.mbox ? vm.$state.params.mbox : 'Drafts',
                "&part=attach&filename=",
                attachment.fileName,
                "&token=",
                vm.user.access_token,
                "&connection_id=",
                vm.message.model.connection_id
            ].join("");

            console.log('link', link);

            return link;
        }

        function remove(attachment) {
            _.remove(vm.attachmentsData, function (item) {
                return item === attachment;
            });
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

    AvatarUploadController.$inject = ['$timeout', 'Upload', 'profile'];
    /* @ngInject */
    function AvatarUploadController($timeout, Upload, profile) {
        var vm = this;

        vm.avatar = {};

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

    BlackListController.$inject = ['$auth'];
    /* @ngInject */
    function BlackListController($auth) {
        var vm = this;

        vm.form = {
            model: {}
        };

        vm.list = {
            checked: [],
            items: ['test@gmail.com']
        };

        vm.add = add;
        vm.remove = remove;

        ////

        activate();

        function activate() {
            vm.user = $auth.user;
        }

        function add(form) {
            if (form.$invalid) return;
            vm.list.items.push(vm.form.model.email);
            vm.form.model.email = '';
        }
        
        function remove() {
            _.forEach(vm.list.checked, function(checked) {
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
        .component('contactAdd', {
            bindings: {
                onClose: '&'
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

    ContactAddController.$inject = ['contact', 'list'];
    /* @ngInject */
    function ContactAddController(contact, list) {
        var vm = this;

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
                var date = moment(vm.contactForm.model.bDay.name + ' ' + vm.contactForm.model.bMonth + ' ' + vm.contactForm.model.bYear.name);
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

            // console.log('vm.contactForm.model', vm.contactForm.model);

            if (vm.contactForm.model.birthday) {
                parseDate();
            }
        }

        function update(form) {
            // if (form.$invalid) return;

            console.log('vm.contactForm', vm.contactForm.model, form);

            if (vm.contactForm.model.bDay && vm.contactForm.model.bMonth && vm.contactForm.model.bYear) {
                var date = moment(vm.contactForm.model.bDay.name + ' ' + vm.contactForm.model.bMonth + ' ' + vm.contactForm.model.bYear.name);
                vm.contactForm.model.birthday = date.format('YYYY-MM-DD');
            }

            contact.update({id: vm.contactForm.model.id}, vm.contactForm.model)
                .then(function (response) {

                });

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

    ContactExportFileController.$inject = ['contact', 'FileSaver'];
    /* @ngInject */
    function ContactExportFileController(contact, FileSaver) {
        var vm = this;

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

    ContactGroupController.$inject = ['$scope', '$uibModal', 'contactGroup'];
    /* @ngInject */
    function ContactGroupController($scope, $uibModal, contactGroup) {
        var vm = this;

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

    ContactGroupAddController.$inject = ['$scope', 'contactGroup', 'contact'];
    /* @ngInject */
    function ContactGroupAddController($scope, contactGroup, contact) {
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

    ContactGroupEditController.$inject = ['contactGroup'];
    /* @ngInject */
    function ContactGroupEditController(contactGroup) {
        var vm = this;

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

    ContactImportFileController.$inject = ['contact', 'Upload'];
    /* @ngInject */
    function ContactImportFileController(contact, Upload) {
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

    ContactOtherListController.$inject = ['$scope', '$state', '$uibModal', 'contactGroup', 'contact'];
    /* @ngInject */
    function ContactOtherListController($scope, $state, $uibModal, contactGroup, contact) {
        var vm = this;

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
                addresses: '='
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

    ContactToAddSelectController.$inject = ['$uibModal', '$scope', 'contact'];
    /* @ngInject */
    function ContactToAddSelectController($uibModal, $scope, contact) {
        var vm = this;

        vm.contacts = {
            items: {}
        };

        // vm.addresses = [];

        vm.selectContact = {};

        vm.getContacts = getContacts;
        vm.findContacts = findContacts;
        vm.makeContact = makeContact;
        vm.openContactToAddPopup = openContactToAddPopup;

        // $scope.$watch('vm.contacts.items', function (data) {
        //
        // }, true);

        activate();

        function activate() {
            getContacts();
        }

        function getContacts() {
            contact.get().then(function (response) {
                vm.contacts.items = response.data;

                // vm.contacts.items.push({isMore: true});

                // console.log(vm.contacts.items);
            });
        }

        function findContacts(q) {
            if (q) {
                contact.get({q: q}).then(function (response) {
                    vm.contacts.items = response.data;
                });
            }

            getContacts();
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

    ContactViewController.$inject = ['$scope', '$uibModal'];
    /* @ngInject */
    function ContactViewController($scope, $uibModal) {
        var vm = this;

        vm.close = close;
        vm.openContactEditPopup = openContactEditPopup;
        vm.getDate = getDate;

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

    InboxHeaderController.$inject = ['$state', '$scope', 'mail'];
    /* @ngInject */
    function InboxHeaderController($state, $scope, mail) {
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
        }, true);

        activate();

        function activate() {
            vm.$state = $state;
            console.log('vm.state', vm.$state.current.name);
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
            vm.messages = [];
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
            $state.go('mail.compose', {
                // to: data.fromAddress,
                connection_id: data.connection_id,
                mbox: data.mbox,
                id: data.number,
                re: true
            });
        }

        function goToFwd() {
            console.log('vm.messages.checked', vm.messages.checked);
            var ids = [];

            _.forEach(vm.messages.checked, function (item) {
                ids.push(item.number);
            });

            console.log('ids', ids);

            mail.setFwdData(vm.messages.checked);

            $state.go('mail.compose', {
                ids: ids,
                fwd: true
            });
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

    InboxMessageController.$inject = ['$state', '$scope', 'mail', 'tag', '$rootScope'];
    /* @ngInject */
    function InboxMessageController($state, $scope, mail, tag, $rootScope) {
        var vm = this;

        vm.getDate = getDate;
        vm.goToUrl = goToUrl;
        vm.setSeen = setSeen;
        vm.setImportant = setImportant;

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

        function goToUrl() {
            if ($state.params.mbox === 'Drafts') {
                $state.go('mail.compose', {
                    id: vm.message.number,
                    mbox: vm.message.mbox,
                    connection_id: vm.message.connection_id
                });
                return;
            }

            if ($state.params.mbox === 'Templates') {
                $state.go('mail.compose', {
                    id: vm.message.number,
                    mbox: vm.message.mbox,
                    connection_id: vm.message.connection_id,
                    template: true
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
        
        function getTags() {
            tag.getTagsByMessage({}, {
                mbox: vm.message.mbox,
                id: vm.message.number
            }).then(function (response) {
                vm.message.tags = response.data;
            })
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

        vm.close = close;

        $scope.$on('mail:send:success', function () {
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
                city: vm.profileForm.city
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

    SearchMailController.$inject = ['$scope', '$rootScope', 'tag', 'mailBox'];
    /* @ngInject */
    function SearchMailController($scope, $rootScope, tag, mailBox) {
        var vm = this;

        vm.isOpenDate = false;

        vm.tags = {
            selected: {
                tag_name: 'Все метки',
                id: undefined
            },
            items: [{
                tag_name: 'Все тэги',
                id: undefined
            }]
        };

        vm.date = {};

        vm.standartFolders = [
            {
                caption: 'Все папки',
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
                caption: 'Все папки',
                name: 'ALL',
                icon: 'icon-incoming'
            }
        };

        vm.searchParts = {
            selected: {
                'name': 'Искать по всему письму',
                'value': 'all'
            },
            list: [
                {
                    'name': 'Искать по всему письму',
                    'value': 'all'
                },
                {
                    'name': 'в поле "Отправитель"',
                    'value': 'from'
                },
                {
                    'name': 'в поле "Получатель"',
                    'value': 'to'
                },
                {
                    'name': 'в теле письма',
                    'value': 'body'
                },
                {
                    'name': 'в тексте письма',
                    'value': 'text'
                }
            ]
        };

        vm.searchForm = {
            model: {}
        };

        vm.title = "Search component";

        vm.search = search;

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

            $rootScope.$broadcast('search:mail', {
                search: data
            });
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

    SettingsMenuController.$inject = [];
    /* @ngInject */
    function SettingsMenuController() {
        var vm = this;

        vm.name = "Example component"
    }
})();

(function () {
    'use strict';

    angular
        .module('app.components')
        .component('spinner', {
            bindings: {
                isGlobal: '=',
                isOpen: '=?'
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

            if (form.$invalid) return;

            tag.create({}, vm.paletteForm.model).then(function (response) {
                tag.setTag(response.data, vm.messages, true).then(function () {
                    $rootScope.$broadcast('mail:sync');
                    vm.onClose();
                });
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
            vm.messages = mail.setImportant(vm.messages);
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
                onSave: '&'
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

    TemplateListController.$inject = ['$state', 'mail'];
    /* @ngInject */
    function TemplateListController($state, mail) {
        var vm = this;

        vm.messages = {
            isLoading: true,
            params: {
                'per-page': 20,
                'len': 100
            },
            defaultParams: {
                'per-page': 20,
                'len': 100
            }
        };

        vm.save = save;

        /////

        activate();

        function activate() {
            vm.$state = $state;

            vm.messages.params.mbox = 'Templates';

            get();
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
    }
})();

(function () {
    'use strict';

    angular
        .module('app.components')
        .component('timeSend', {
            bindings: {
                sdate: '='
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

    TimeSendController.$inject = ['$uibTooltip', '$scope'];
    /* @ngInject */
    function TimeSendController($uibTooltip, $scope) {
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

        $scope.$watch('vm.timeForm.model.time', function (data) {
            if (vm.isChecked) {
                getTimestampAllDate();
            }
        });

        $scope.$watch('vm.timeForm.model.date.value', function (data) {
            if (vm.isChecked) {
                getTimestampAllDate();
            }
        });

        ////

        activate();

        function activate() {
            getTimeList();

            vm.timeForm.model.date = {
                value: moment().toDate(),
                name: moment().format('[сегодня]')
            };
        }

        function getTimestampAllDate() {
            if (vm.timeForm.model.time) {
                var parseTime = vm.timeForm.model.time.split(':');
                var date = moment(vm.timeForm.model.date.value).set({hour: parseTime[0], minute: parseTime[1]});

                console.log('moment', date, date.unix());

                vm.timeForm.model.date.name = date.calendar();

                vm.sdate = date.unix();
            }
        }

        function getFormattedDate(date) {
            return moment(date).calendar();
        }

        function close() {
            console.log('$uibTooltip', $uibTooltip());
            $uibTooltip.setTriggers({'openTrigger': 'closeTrigger'});
        }

        function getTimeList() {
            for (var i = 0; i < 24; i++) {

                if (i < 10) {
                    vm.timeList.push('0' + i + ':00');
                } else {
                    vm.timeList.push(i + ':00');
                }
            }

            vm.timeForm.model.time = vm.timeList[0];
        }

        function endDateBeforeRender($view, $dates) {
            var activeDate = moment();
            $dates.filter(function (date) {
                return date.localDateValue() < activeDate.valueOf()
            }).forEach(function (date) {
                date.selectable = false;
            })
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
                isSmall: '=?'
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

    ToDateController.$inject = ['$scope'];
    /* @ngInject */
    function ToDateController($scope) {
        var vm = this;

        vm.convertDate = '';

        vm.calendarFormat = {
            sameDay: 'hh:mm',
            nextDay: '[завтра]',
            nextWeek: 'dddd',
            lastDay: '[вчера] hh:mm',
            lastWeek: 'DD [го] MMMM YYYY [в] hh:mm',
            sameElse: 'DD [го] MMMM YYYY [в] hh:mm'
        };

        vm.calendarSmallFormat = {
            sameDay: 'hh:mm',
            nextDay: '[Tomorrow]',
            nextWeek: 'dddd',
            lastDay: 'D MMM',
            lastWeek: 'D MMM YY',
            sameElse: 'D MMM YY'
        };

        vm.getConvert = getConvert;

        $scope.$watch('vm.date', function (data, newData) {
            if (data) {
                var newDate = new Date(data);
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
            // moment().format('LLL');  // 11 мая 2017 г., 22:14
        }

        function getConvert(date) {
            if (vm.isSmall) {
                return moment(date).calendar(null, vm.calendarSmallFormat);
            }
            return moment(date).calendar(null, vm.calendarFormat);
        }

        function getUnixConvert(date) {
            if (vm.isSmall) {
                return moment.unix(date).calendar(null, vm.calendarSmallFormat);
            }
            return moment.unix(date).calendar(null, vm.calendarFormat);
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

    UserMenuController.$inject = ['$auth', '$state', '$uibModal'];
    /* @ngInject */
    function UserMenuController($auth, $state, $uibModal) {
        var vm = this;

        vm.user = $auth.user;

        vm.logout = logout;
        vm.openPasswordChangePopup = openPasswordChangePopup;

        activate();

        function activate() {}

        function logout() {
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
        .module('help.main')
        .controller('HelpController', HelpController);

    HelpController.$inject = [];
    /* @ngInject */
    function HelpController() {
        var vm = this;

        activate();

        function activate() {

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
                    title: 'help'
                }
            }
        ];
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

    WhiteListController.$inject = ['$auth'];
    /* @ngInject */
    function WhiteListController($auth) {
        var vm = this;

        vm.form = {
            model: {}
        };

        vm.list = {
            checked: [],
            items: ['test@gmail.com']
        };

        vm.add = add;
        vm.remove = remove;

        ////

        activate();

        function activate() {
            vm.user = $auth.user;
        }

        function add(form) {
            if (form.$invalid) return;
            vm.list.items.push(vm.form.model.email);
            vm.form.model.email = '';
        }
        
        function remove() {
            _.forEach(vm.list.checked, function(checked) {
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

    HeaderController.$inject = ['$auth'];

    /* @ngInject */
    function HeaderController($auth) {
        var vm = this;
        vm.title = 'Header';

        activate();

        function activate() {
            vm.user = $auth.user;
        }
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

        vm.title = "Footer";

        activate();

        function activate() {
            vm.user = $auth.user;
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

    MenuContactsController.$inject = ['$uibModal', '$scope', 'contactGroup'];

    /* @ngInject */
    function MenuContactsController($uibModal, $scope, contactGroup) {
        var vm = this;

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

    MenuMainController.$inject = ['$scope', '$rootScope', '$uibModal', '$state', 'mailBox', 'tag'];

    /* @ngInject */
    function MenuMainController($scope, $rootScope, $uibModal, $state, mailBox, tag) {
        var vm = this;

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
                name: 'Templates',
                icon: 'icon-draft'
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

        activate();

        function activate() {
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
            });

            sortFolder();
        }

        function sortFolder() {
            vm.folders.items = _.sortBy(vm.folders.items, [
                {'name': 'INBOX'},
                {'isSub': true},
                {'name': 'Sent'},
                {'name': 'Trash'},
                {'name': 'Junk'},
                {'name': 'Drafts'},
                {'name': 'Templates'}
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

    MenuSettingsController.$inject = ['$uibModal'];

    /* @ngInject */
    function MenuSettingsController($uibModal) {
        var vm = this;
        vm.title = 'Menu';

        vm.openPasswordChangePopup = openPasswordChangePopup;

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
        .module('mail.compose')
        .controller('ComposeController', ComposeController);

    ComposeController.$inject = ['mail', '$interval', '$state', '$rootScope', '$auth', 'contact', '$uibModal', 'Upload'];
    /* @ngInject */
    function ComposeController(mail, $interval, $state, $rootScope, $auth, contact, $uibModal, Upload) {
        var vm = this;

        vm.interval = {};

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

        vm.send = send;
        vm.save = save;
        vm.upload = upload;
        vm.saveTemplate = saveTemplate;

        $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
            $interval.cancel(vm.interval);
        });

        activate();

        function activate() {
            vm.user = $auth.user;
            vm.$state = $state;

            vm.interval = $interval(function () {
                if (vm.sendForm.model.to && !vm.$state.params.template) {
                    save();
                }
            }, 250 * 60);

            if ($state.params.id && $state.params.mbox && !$state.params.fwd && !$state.params.re) {
                vm.sendForm.id = $state.params.id;
                getMessage();
            }

            if ($state.params.to) {
                vm.sendForm.model.to = $state.params.to;
            }

            if ($state.params.ids && $state.params.fwd) {
                pasteFwd();
            }

            if ($state.params.id && $state.params.re) {
                pasteRe();
            }

            pasteSign();
        }

        function send(form) {
            if (form.$invalid) return;

            var data = getFormattedData();

            data.cmd = 'send';

            if (vm.sendForm.id) {
                mail.put({id: vm.sendForm.id}, data);
            } else {
                mail.post({}, data);
            }

            $state.go('mail.inbox', {mbox: 'INBOX'});
        }

        function save(options) {
            // console.log(options);
            var data = getFormattedData();

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
                console.log('response', response);
                if (response.success) {
                    vm.sendForm.id = response.data.id;

                    vm.sendForm.model.date = {
                        date: setNowTime()
                    };

                    if (vm.$state.params.template || (options && options.template)) {
                        saveTemplate();
                    }
                }
            });
        }

        function saveTemplate() {
            var data = getFormattedData();

            data.mbox = 'Drafts';
            data.number = vm.sendForm.id;
            data.connection_id = vm.user.profile.default_connection_id;

            mail.move({}, {
                mboxnew: 'Templates',
                messages: [data]
            }).then(function () {
                $state.go('mail.inbox', {
                    mbox: 'Templates'
                });
            });
        }

        function getMessage() {
            mail.getById({id: $state.params.id, mbox: $state.params.mbox}).then(function (response) {
                vm.sendForm.model = response.data;
                vm.sendForm.model.subject = vm.sendForm.model.Subject;
                vm.sendForm.model.to = [{
                    first_name: vm.sendForm.model.to[0].address,
                    emails: [{value: vm.sendForm.model.to[0].address}]
                }];
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

            if (vm.sendForm.model.attaches) {
                data.attaches = vm.sendForm.model.attaches;
            }

            vm.sendForm.model.connection_id = vm.user.profile.default_connection_id;

            return data;
        }

        function getMailsFromContact(data) {
            var to = [];

            _.forEach(data, function (item) {
                to.push(item.emails[0].value);
            });

            return to;
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

        function pasteSign() {
            if (vm.user.profile.sign && !vm.sendForm.model.body && !$state.params.fwd && !$state.params.re) {
                vm.sendForm.model.body = '<br><br>' + vm.user.profile.sign;
            }
        }

        function pasteFwd() {
            var messages = mail.getFwdData();
            _.forEach(messages, function (message) {
                getFwdMessageById(message);
            });
        }

        function pasteOneFwd(message) {
            console.log('message fwd', message);
            var fwd = '';
            fwd += '-------- Пересылаемое сообщение--------<br>';
            fwd += message.date.date + ' ' + message.from + ' ' + '<br>';
            fwd += message.body + '<br>';
            fwd += '-------- Конец пересылаемого сообщения --------';
            fwd += '<br><br>' + vm.user.profile.sign;
            vm.sendForm.model.body = fwd;
            vm.sendForm.model.subject = 'Fwd: ' + message.Subject;

            // vm.sendForm.model.attachmentsData = message.attachmentsData;
            // vm.sendForm.model.mbox = message.mbox;
            // vm.sendForm.model.connection_id = message.connection_id;

            console.log('one', vm.sendForm.model);
        }

        function getFwdMessageById(message) {
            return mail.getById({
                id: message.number,
                mbox: message.mbox,
                connection_id: message.connection_id
            })
                .then(function (response) {
                    vm.fwd.items.push(response.data);
                    vm.fwd.checked.push(response.data);

                    if ($state.params.ids.length < 2) {
                        pasteOneFwd(vm.fwd.items[0]);
                    }
                });
        }

        function pasteRe() {
            mail.getById({
                id: $state.params.id,
                mbox: $state.params.mbox,
                connection_id: $state.params.connection_id
            }).then(function (response) {
                var message = response.data;
                console.log('message re: ', message);
                var fwd = '<br><br>';
                fwd += message.date.date + ' ' + message.from + ' ' + '<br>';
                fwd += message.body + '<br>';
                fwd += '<br>' + vm.user.profile.sign;
                vm.sendForm.model.body = fwd;
                vm.sendForm.model.subject = 'Re: ' + message.Subject;

                vm.sendForm.model.attachmentsData = message.attachmentsData;
                // vm.sendForm.model.mbox = message.mbox;
                // vm.sendForm.model.connection_id = message.connection_id;

                console.log('one', vm.sendForm.model);
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
                    title: 'Compose'
                }
            },
            {
                state: 'mail.composeDraft',
                config: {
                    url: '/compose?id&mbox&connection_id',
                    templateUrl: 'app/mail/compose/compose.html',
                    controller: 'ComposeController',
                    controllerAs: 'vm',
                    title: 'Compose'
                }
            }
        ];
    }
})();

(function () {
    'use strict';

    angular
        .module('mail.inbox')
        .controller('InboxController', InboxController);

    InboxController.$inject = ['$rootScope', '$state', 'mail', 'mailBox', 'profile', 'messages'];
    /* @ngInject */
    function InboxController($rootScope, $state, mail, mailBox, profile, messages) {
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

        $rootScope.$on('mail:sync', function () {
            get();
        });

        $rootScope.$on('search:mail', function (e, data) {
            vm.messages.params = data.search;
            // _.merge(vm.messages.params, data.search);
            get();
        });

        $rootScope.$on('search:close', function (e, data) {
            vm.messages.params = angular.copy(vm.messages.defaultParams);
            vm.messages.params.mbox = $state.params.mbox;

            console.log('vm.messages.params', vm.messages.params);

            get();
        });

        activate();

        function activate() {
            vm.$state = $state;

            if ($state.params.filter) {
                vm.messages.params.filter = $state.params.filter;
            }

            if ($state.params.mbox) {
                vm.messages.params.mbox = $state.params.mbox;
            }

            if ($state.params.tag_id) {
                vm.messages.params.tag_id = $state.params.tag_id;
            }

            // get();
            getMailBox();

            console.log('messages', messages.$promise);

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
            });
        }

        function getMailBox() {
            mailBox.get().then(function (response) {
                vm.folders = _.assign(vm.folders, response.data);
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
                    url: '/inbox?mbox&filter&tag_id',
                    templateUrl: 'app/mail/inbox/inbox.html',
                    controller: 'InboxController',
                    controllerAs: 'vm',
                    title: 'Inbox',
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
        .module('mail.message')
        .controller('MessageController', MessageController);

    MessageController.$inject = ['mail', '$scope', '$state', '$sce', 'message', 'tag', '$rootScope', '$auth'];
    /* @ngInject */
    function MessageController(mail, $scope, $state, $sce, message, tag, $rootScope, $auth) {
        var vm = this;

        vm.message = {};

        vm.messages = {
            checked: []
        };

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
                    $state.go('mail.inbox');
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
                    url: '/',
                    templateUrl: 'app/marketing/home/home.html',
                    controller: 'HomeController',
                    controllerAs: 'vm',
                    title: 'Главная страница'
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

    AccountsController.$inject = ['connection'];
    /* @ngInject */
    function AccountsController(connection) {
        var vm = this;

        vm.accountForm = {
            model: {
                enable: 0
            }
        };

        vm.accounts = {
            items: []
        };

        vm.create = create;
        vm.destroy = destroy;
        vm.enableTrigger = enableTrigger;

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
        .module('settings.contacts')
        .controller('СontactsController', СontactsController);

    СontactsController.$inject = ['$uibModal'];
    /* @ngInject */
    function СontactsController($uibModal) {
        var vm = this;

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
        .module('settings.folders')
        .controller('FoldersController', FoldersController);

    FoldersController.$inject = [];
    /* @ngInject */
    function FoldersController() {
        var vm = this;
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

    SettingsController.$inject = ['$uibModal', '$sce', '$auth', 'profile'];
    /* @ngInject */
    function SettingsController($uibModal, $sce, $auth, profile) {
        var vm = this;

        vm.openAvatarUploadPopup = openAvatarUploadPopup;
        vm.openPasswordChangePopup = openPasswordChangePopup;
        vm.openEmailChangePopup = openEmailChangePopup;
        vm.openPhoneChangePopup = openPhoneChangePopup;
        vm.destroy = destroy;
        vm.getTrustHtml = getTrustHtml;
        vm.updateSign = updateSign;

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

        function openEmailChangePopup() {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'app/components/email-change/email-change-popup.html',
                controller: ["$scope", "$uibModalInstance", function ($scope, $uibModalInstance) {
                    $scope.cancel = cancel;

                    function cancel() {
                        $uibModalInstance.dismiss('cancel');
                    }
                }],
                size: 'sm',
                windowClass: 'popup popup--email-change'
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
        .module('settings.ruleAdd')
        .controller('RuleAddController', RuleAddController);

    RuleAddController.$inject = ['sieve', '$state', 'mailBox', 'tag'];
    /* @ngInject */
    function RuleAddController(sieve, $state, mailBox, tag) {
        var vm = this;

        vm.$state = $state;

        vm.tags = {};

        vm.folders = {};

        vm.spamAccept = {
            // selected: {},
            list: [
                {
                    name: 'только к спаму',
                    value: 'only'
                },
                {
                    name: 'ко всем письмам, кроме спама',
                    value: 'except'
                },
                {
                    name: 'ко всем письмам, включая спам',
                    value: 'include'
                }
            ]
        };

        vm.attachmentAccept = {
            // selected: {},
            list: [
                {
                    name: 'с вложениями и без вложений',
                    value: 'all'
                },
                {
                    name: 'с вложениями',
                    value: 'with'
                },
                {
                    name: 'без вложений',
                    value: 'without'
                }
            ]
        };

        vm.sieveRules = {
            list: [
                {
                    name: 'Название вложения',
                    value: 'attachment'
                },
                {
                    name: 'Тело письма',
                    value: 'body'
                },
                {
                    name: 'Копия',
                    value: 'copy'
                },
                {
                    name: 'От кого',
                    value: 'from'
                },
                {
                    name: 'От кого',
                    value: 'from'
                },
                {
                    name: 'Заголовок',
                    value: 'header',
                    options: {
                        "header": "some header"
                    }
                },
                {
                    name: 'Тема',
                    value: 'subject'
                },
                {
                    name: 'Кому',
                    value: 'to'
                },
                {
                    name: 'Кому или копия',
                    value: 'to_copy'
                }
            ]
        };

        vm.compareTypes = {
            list: [
                {
                    name: 'содержит',
                    value: 'contain'
                },
                {
                    name: 'совпадает c',
                    value: 'match'
                },
                {
                    name: 'не содержит',
                    value: 'not_contain'
                },
                {
                    name: 'не совпадает c',
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

            getTags();
            getFolders();
        }

        function setSieveActions() {
            _.forEach(vm.sieveActions, function (item) {
                _.forEach(vm.sieveForm.model.sieveActions, function (itemServer) {
                    if (itemServer.type === item.type) {

                        item.value = itemServer.value;

                        console.log('sieveActions', itemServer, item);
                    }

                });

                // console.log('sieveActions server', item);
            });

            console.log('sieveActions', vm.sieveActions);
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
                    url: '/rule-add?id',
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

    RulesController.$inject = ['$state', 'sieve'];
    /* @ngInject */
    function RulesController($state, sieve) {
        var vm = this;

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
        .module('storage.main')
        .controller('StorageController', StorageController);

    StorageController.$inject = ['tariff', 'tariffResult'];
    /* @ngInject */
    function StorageController(tariff, tariffResult) {
        var vm = this;

        vm.tariff = {
            items: []
        };

        vm.quota = {
            result: {}
        };

        vm.createQuota = createQuota;

        activate();

        function activate() {
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
        .module('settings.tags')
        .controller('TagsController', TagsController);

    TagsController.$inject = [];
    /* @ngInject */
    function TagsController() {
        var vm = this;
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
$templateCache.put('app/mail/mail.html','<section class="layout"><div class="layout__header"><header></header></div><div class="layout__inner" layout-height><div class="layout__left"><div class="layout__menu resize-menu" resize-menu><button class="layout__menu-switch btn--not-style" type="button" ng-click="close()"></button><menu-main folder="vm.folder"></menu-main></div></div><div class="layout__content"><ui-view class="height-flex--content"></ui-view><div class="layout__footer"><footer></footer></div></div></div></section>');
$templateCache.put('app/settings/settings.html','<section class="layout"><div class="layout__header"><header></header></div><div class="layout__inner" layout-height><div class="layout__left"><div class="layout__menu layout__menu--settings"><menu-settings></menu-settings></div></div><div class="layout__content"><ui-view class="height-flex--content"></ui-view><div class="layout__footer height-flex--bot"><footer></footer></div></div></div></section>');
$templateCache.put('app/auth/password-reset/password-reset.html','<div class="password-reset-layout"><div class="password-reset-layout__content"><div class="password-reset-layout__form"><div class="card"><div class="auth-form"><div class="main-title-text">\u0412\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435 \u0434\u043E\u0441\u0442\u0443\u043F\u0430</div><form class="form" name="userForm" ng-submit="vm.requestPasswordReset(userForm)" novalidate><!-- \u0412\u0430\u0448 \u043C\u0430\u0439\u043B--><div class="form__field-item form__field-item--flex-start mrg__bottom10"><div class="field-style"><label class="field-style__title font__size13">\u0423\u043A\u0430\u0436\u0438\u0442\u0435 \u043B\u043E\u0433\u0438\u043D, \u0434\u043B\u044F \u043A\u043E\u0442\u043E\u0440\u043E\u0433\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u043F\u0430\u0440\u043E\u043B\u044C</label><div class="field-style__group"><input class="input input--size_l input--up-shadow width--size328" type="text" name="username" ng-model="vm.userForm.model.username" placeholder="\u041B\u043E\u0433\u0438\u043D \u0438\u043B\u0438 email" required><validation-errors data="userForm.username" server="vm.userForm.errors" messages="vm.userForm.validations.username"></validation-errors><!-- <div class="validation">\n                                         <div class="validation__message validation__message&#45;&#45;red">\n                                             \u042D\u0442\u043E \u0438\u043C\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u0443\u0436\u0435 \u0437\u0430\u043D\u044F\u0442\u043E. \u041F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435\n                                             \u0434\u0440\u0443\u0433\u043E\u0435\n                                         </div>\n                                     </div>--></div></div></div><!-- \u0421\u041C\u0421 \u0432\u0430\u043B\u0438\u0434\u0430\u0446\u0438\u044F --><!--<div class="form__field-item form__field-item&#45;&#45;flex-start mrg__bottom10 mrg__top16 sms-bg flex&#45;&#45;inline flex&#45;&#45;just-s-a">--><!--<div class="width&#45;&#45;size328 mrg__right30">--><!--<div class="flex&#45;&#45;inline">--><!--<div class="field-style mrg__right5 width&#45;&#45;size201">--><!--<input class="input input&#45;&#45;size_l input&#45;&#45;up-shadow width&#45;&#45;inh"--><!--type="text"--><!--name="phone"--><!--ng-model="vm.userForm.model.phone"--><!--placeholder="+420 xxx xxx xxx"--><!--ui-mask="+420 999-999-999"--><!--required>--><!--</div>--><!--<div class="field-style width&#45;&#45;size121 ">--><!--<button class="btn btn&#45;&#45;size_l btn&#45;&#45;normal btn&#45;&#45;s-gradient width&#45;&#45;inh" type="button"--><!--ng-click="vm.sendCode()">\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043A\u043E\u0434--><!--</button>--><!--</div>--><!--</div>--><!--<validation-errors data="userForm.phone"--><!--server="vm.userForm.errors"--><!--messages="vm.userForm.validations.phone"></validation-errors>--><!--<span class="notific notific&#45;&#45;auth mrg__top5" ng-if="vm.codeResult">--><!--\u041D\u0430 \u043D\u043E\u043C\u0435\u0440 +420 xxx xxx xxx \u0431\u044B\u043B \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D \u043A\u043E\u0434 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0438 (\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E)--><!--<span class="color&#45;&#45;red">{{ vm.codeResult }}</span>--><!--</span>--><!--</div>--><!--<span class="notific notific&#45;&#45;auth mrg__top5" ng-if="vm.codeResult">--><!--\u041D\u0430 \u043D\u043E\u043C\u0435\u0440 +420 xxx xxx xxx \u0431\u044B\u043B \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D \u043A\u043E\u0434 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0438 (\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E)--><!--<span class="color&#45;&#45;red">{{ vm.codeResult }}</span>--><!--</span>--><!--<div class="width&#45;&#45;size328">--><!--<div class="flex&#45;&#45;inline">--><!--<div class="field-style mrg__right5 width&#45;&#45;size201">--><!--<input class="input input&#45;&#45;size_l input&#45;&#45;up-shadow width&#45;&#45;inh"--><!--type="text"--><!--name="code"--><!--ng-model="vm.userForm.model.code"--><!--placeholder="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u0434 \u0438\u0437 \u0441\u043C\u0441"--><!--required>--><!--</div>--><!--<div class="field-style width&#45;&#45;size121">--><!--<button class="btn btn&#45;&#45;size_l btn&#45;&#45;normal btn&#45;&#45;s-gradient width&#45;&#45;inh " type="button">\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C--><!--</button>--><!--</div>--><!--</div>--><!--<validation-errors data="userForm.code"--><!--server="vm.userForm.errors"--><!--messages="vm.userForm.validations.code">--><!--</validation-errors>--><!--</div>--><!--</div>--><div class="form__field-item form__field-item--flex-start mrg__top25"><div class="field-style"><button class="btn btn--size_l btn--yellow" type="submit">\u0414\u0430\u043B\u0435\u0435</button></div></div></form></div></div></div><!-- \u0444\u0443\u0442\u0442\u0435\u0440 \u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435 \u0430\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u0438--><div class="footer footer__auth"><!-- \u041A\u043E\u043F\u0438\u0440\u0430\u0439\u0442--><div class="footer__copyright"><span class="">\xA9 2001\u20142017 \xABMail.cz\xBB Group a.s.</span></div><!-- \u041E\u0441\u043D\u043E\u0432\u043D\u043E\u0435 \u043C\u0435\u043D\u044E--><div class="footer__menu"><div class="navigation"><div class="navigation__row"><div class="navigation__item"><!--<a class="navigation__link navigation__link&#45;&#45;footer-a" href="">\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B</a>--></div></div></div></div><!-- \u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043C\u0435\u043D\u044E \u0441 \u0432\u044B\u0431\u043E\u0440\u043E\u043C \u044F\u0437\u044B\u043A\u0430--><div class="footer__right-menu mrg__right"><div class="navigation"><div class="navigation__row"><div class="navigation__item position width--size28"><!-- \u042F\u0437\u044B\u043A\u043E\u0432\u043E\u0435 \u043C\u0435\u043D\u044E--><div class="choice-language"><a class="choice-language__link choice-language--active" href=""><img class="choice-language__country" src="images/country/albania.svg" alt=""></a><!----> <a class="choice-language__link" href=""><img class="choice-language__country" src="images/country/bosnia.svg" alt=""></a><!----> <a class="choice-language__link" href=""><img class="choice-language__country" src="images/country/croatia.svg" alt=""></a><!----> <a class="choice-language__link" href=""><img class="choice-language__country" src="images/country/cz.svg" alt=""></a><!----> <a class="choice-language__link" href=""><img class="choice-language__country" src="images/country/macedonia.svg" alt=""></a><!----> <a class="choice-language__link" href=""><img class="choice-language__country" src="images/country/russia.svg" alt=""></a><!----> <a class="choice-language__link" href=""><img class="choice-language__country" src="images/country/serbia.svg" alt=""></a><!----> <a class="choice-language__link" href=""><img class="choice-language__country" src="images/country/slovakia.svg" alt=""></a><!----> <a class="choice-language__link" href=""><img class="choice-language__country" src="images/country/Slovenia.svg" alt=""></a><!----> <a class="choice-language__link" href=""><img class="choice-language__country" src="images/country/uk.svg" alt=""></a><!----> <a class="choice-language__link" href=""><img class="choice-language__country" src="images/country/ukraine.svg" alt=""></a></div></div><div class="navigation__item"><a class="navigation__link" href="">\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B</a></div><!--<div class="navigation__item"><a class="navigation__link" href="">\u0420\u0435\u043A\u043B\u0430\u043C\u0430</a></div>--></div></div></div></div></div><div class="auth-layout__bg"></div></div>');
$templateCache.put('app/auth/password-update/password-update.html','<div class="auth-layout"><div class="password-reset-layout__content"><div class="password-reset-layout__form"><div class="card"><div class="auth-form"><div class="main-title-text">\u0412\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435 \u0434\u043E\u0441\u0442\u0443\u043F\u0430</div><form class="form" name="userForm" ng-submit="vm.resetPassword(userForm)" novalidate><div class="form__field-item mrg__bottom6"><div class="field-style"><div class="field-style__group"><input class="input input--size_l input--up-shadow width--size328 font__center" type="text" name="code" ng-model="vm.userForm.model.code" placeholder="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u0434 \u0438\u0437 \u0441\u043C\u0441" required><validation-errors ng-if="userForm.$submitted" data="userForm.code" server="vm.userForm.errors" messages="vm.userForm.validations.code"></validation-errors></div></div></div><!-- \u041F\u0430\u0440\u043E\u043B\u044C--><div class="form__field-item mrg__bottom6"><div class="field-style"><div class="field-style__group"><input class="input input--size_l input--up-shadow width--size328 font__center" type="password" name="newpassword" ng-model="vm.userForm.model.newpassword" placeholder="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u043E\u0432\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C" required><validation-errors ng-if="userForm.$submitted" data="userForm.newpassword" server="vm.userForm.errors" messages="vm.userForm.validations.newpassword"></validation-errors></div></div></div><!-- \u041F\u0430\u0440\u043E\u043B\u044C 2--><div class="form__field-item"><div class="field-style"><div class="field-style__group"><input class="input input--size_l input--up-shadow width--size328 font__center" type="password" name="passwordConf" ng-model="vm.userForm.model.passwordConf" placeholder="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u043E\u0432\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C" required><validation-errors ng-if="userForm.$submitted" data="userForm.passwordConf" server="vm.userForm.errors" messages="vm.userForm.validations.passwordConf"></validation-errors></div></div></div><!-- \u043A\u043D\u043E\u043F\u043A\u0430 \u0414\u0430\u043B\u0435\u0435 --><div class="form__field-item mrg__top25"><div class="field-style"><button class="btn btn--size_l btn--yellow width--inh" type="submit">\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0438 \u043F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C</button></div></div></form></div></div></div><!-- \u0444\u0443\u0442\u0442\u0435\u0440 \u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435 \u0430\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u0438--><div class="footer footer__auth"><!-- \u041A\u043E\u043F\u0438\u0440\u0430\u0439\u0442--><div class="footer__copyright"><span class="">\xA9 2001\u20142017 \xABMail.cz\xBB Group a.s.</span></div><!-- \u041E\u0441\u043D\u043E\u0432\u043D\u043E\u0435 \u043C\u0435\u043D\u044E--><div class="footer__menu"><div class="navigation"><div class="navigation__row"><div class="navigation__item"><!--<a class="navigation__link navigation__link&#45;&#45;footer-a" href="">\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B</a>--></div></div></div></div><!-- \u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043C\u0435\u043D\u044E \u0441 \u0432\u044B\u0431\u043E\u0440\u043E\u043C \u044F\u0437\u044B\u043A\u0430--><div class="footer__right-menu mrg__right"><div class="navigation"><div class="navigation__row"><div class="navigation__item position width--size28"><!-- \u042F\u0437\u044B\u043A\u043E\u0432\u043E\u0435 \u043C\u0435\u043D\u044E--><div class="choice-language"><a class="choice-language__link choice-language--active" href=""><img class="choice-language__country" src="images/country/albania.svg" alt=""></a><!----> <a class="choice-language__link" href=""><img class="choice-language__country" src="images/country/bosnia.svg" alt=""></a><!----> <a class="choice-language__link" href=""><img class="choice-language__country" src="images/country/croatia.svg" alt=""></a><!----> <a class="choice-language__link" href=""><img class="choice-language__country" src="images/country/cz.svg" alt=""></a><!----> <a class="choice-language__link" href=""><img class="choice-language__country" src="images/country/macedonia.svg" alt=""></a><!----> <a class="choice-language__link" href=""><img class="choice-language__country" src="images/country/russia.svg" alt=""></a><!----> <a class="choice-language__link" href=""><img class="choice-language__country" src="images/country/serbia.svg" alt=""></a><!----> <a class="choice-language__link" href=""><img class="choice-language__country" src="images/country/slovakia.svg" alt=""></a><!----> <a class="choice-language__link" href=""><img class="choice-language__country" src="images/country/Slovenia.svg" alt=""></a><!----> <a class="choice-language__link" href=""><img class="choice-language__country" src="images/country/uk.svg" alt=""></a><!----> <a class="choice-language__link" href=""><img class="choice-language__country" src="images/country/ukraine.svg" alt=""></a></div></div><div class="navigation__item"><a class="navigation__link" href="">\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B</a></div><!--<div class="navigation__item"><a class="navigation__link" href="">\u0420\u0435\u043A\u043B\u0430\u043C\u0430</a></div>--></div></div></div></div></div><div class="auth-layout__bg"></div></div>');
$templateCache.put('app/auth/sign-in/sign-in.html','<div class="auth-layout"><div class="auth-layout__content"><div class="auth-layout__form"><div class="card"><div class="auth-form"><div class="auth-form__logo mrg__bottom16"><img class="img-responsive mrg__auto" src="/images/logo.png"><hr class="hr hr--auth mrg__top16"></div><form class="form" name="userForm" ng-submit="vm.login(userForm)" novalidate><!-- \u043B\u043E\u0433\u0438\u043D --><div class="form__field-item mrg__bottom10"><div class="field-style"><input class="input input--size_l input--up-shadow width--inh" type="text" ng-model="vm.userForm.model.username" required placeholder="\u041B\u043E\u0433\u0438\u043D"><validation-errors data="userForm.username" messages="vm.userForm.validations.username"></validation-errors></div></div><!-- \u043F\u0430\u0440\u043E\u043B\u044C --><div class="form__field-item mrg__bottom10"><div class="field-style"><input class="input input--size_l input--up-shadow width--inh" type="password" ng-model="vm.userForm.model.password" required placeholder="\u041F\u0430\u0440\u043E\u043B\u044C"></div><validation-errors data="userForm.password" messages="vm.userForm.validations.password"></validation-errors></div><!-- \u0432\u043E\u0439\u0442\u0438 --><div class="form__field-item mrg__bottom10"><div class="field-style"><button class="btn btn--size_l btn--yellow width--inh" type="submit">\u0412\u043E\u0439\u0442\u0438</button></div></div><div class="validation mrg__bottom10"><div class="validation__message validation__message--red">{{ vm.userForm.errors }}</div></div><!-- \u0437\u0430\u043F\u043E\u043C\u043D\u0438\u0442\u044C / \u0437\u0430\u0431\u044B\u043B\u0438--><div class="form__field-item mrg__bottom10 flex flex--just-s-a"><div class="field-style widtn--inh"><!--\u043D\u0430\u0448 \u0447\u0435\u043A\u0431\u043E\u043A\u0441 --><label class="checkbox-y__label checkbox-y" for="isChecked"><input class="checkbox-y__input" id="isChecked" type="checkbox" name="isChecked" ng-model="isChecked"><div class="checkbox-y__body"><span class="checkbox-y__icon"></span></div><span class="checkbox__text" role="presentation">\u0417\u0430\u043F\u043E\u043C\u043D\u0438\u0442\u044C \u043C\u0435\u043D\u044F</span></label></div><div class="field-style widtn--inh font__right"><a class="link link-aith" ui-sref="passwordReset">\u0417\u0430\u0431\u044B\u043B\u0438 \u043F\u0430\u0440\u043E\u043B\u044C?</a></div></div></form><hr class="hr hr--auth"><button class="btn btn--size_l btn--normal width--inh btn--s-gradient" ui-sref="signUp">\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F</button></div></div></div><!-- \u0444\u0443\u0442\u0442\u0435\u0440 \u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435 \u0430\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u0438--><div class="footer footer__auth"><!-- \u041A\u043E\u043F\u0438\u0440\u0430\u0439\u0442--><div class="footer__copyright"><span class="">\xA9 2001\u20142017 \xABMail.cz\xBB Group a.s.</span></div><!-- \u041E\u0441\u043D\u043E\u0432\u043D\u043E\u0435 \u043C\u0435\u043D\u044E--><div class="footer__menu"><div class="navigation"><div class="navigation__row"><div class="navigation__item"><!--<a class="navigation__link navigation__link&#45;&#45;footer-a" href="">\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B</a>--></div></div></div></div><!-- \u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043C\u0435\u043D\u044E \u0441 \u0432\u044B\u0431\u043E\u0440\u043E\u043C \u044F\u0437\u044B\u043A\u0430--><div class="footer__right-menu mrg__right"><div class="navigation"><div class="navigation__row"><div class="navigation__item position width--size28"><!-- \u042F\u0437\u044B\u043A\u043E\u0432\u043E\u0435 \u043C\u0435\u043D\u044E--><div class="choice-language"><a class="choice-language__link choice-language--active" href=""><img class="choice-language__country" src="images/country/albania.svg" alt=""></a><!----> <a class="choice-language__link" href=""><img class="choice-language__country" src="images/country/bosnia.svg" alt=""></a><!----> <a class="choice-language__link" href=""><img class="choice-language__country" src="images/country/croatia.svg" alt=""></a><!----> <a class="choice-language__link" href=""><img class="choice-language__country" src="images/country/cz.svg" alt=""></a><!----> <a class="choice-language__link" href=""><img class="choice-language__country" src="images/country/macedonia.svg" alt=""></a><!----> <a class="choice-language__link" href=""><img class="choice-language__country" src="images/country/russia.svg" alt=""></a><!----> <a class="choice-language__link" href=""><img class="choice-language__country" src="images/country/serbia.svg" alt=""></a><!----> <a class="choice-language__link" href=""><img class="choice-language__country" src="images/country/slovakia.svg" alt=""></a><!----> <a class="choice-language__link" href=""><img class="choice-language__country" src="images/country/Slovenia.svg" alt=""></a><!----> <a class="choice-language__link" href=""><img class="choice-language__country" src="images/country/uk.svg" alt=""></a><!----> <a class="choice-language__link" href=""><img class="choice-language__country" src="images/country/ukraine.svg" alt=""></a></div></div><div class="navigation__item"><a class="navigation__link" href="">\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B</a></div><!--<div class="navigation__item"><a class="navigation__link" href="">\u0420\u0435\u043A\u043B\u0430\u043C\u0430</a></div>--></div></div></div></div></div><div class="auth-layout__bg"></div></div>');
$templateCache.put('app/auth/sign-up/sign-up.html','<div class="auth-layout"><div class="auth-layout__content"><div class="auth-layout__form auth-layout__form--wd388"><div class="card"><div class="auth-form"><div class="auth-form__logo mrg__bottom16"><img class="img-responsive mrg__auto" src="/images/logo.png"><hr class="hr hr--auth mrg__top16"></div><form class="form" name="userForm" ng-submit="vm.signUp(userForm)" novalidate><!-- \u0438\u043C\u044F \u0438 \u0444\u0430\u043C\u0438\u043B\u0438\u044F --><div class="form__field-item mrg__bottom20 flex--inline"><div class="field-style mrg__right5"><input class="input input--size_l input--up-shadow width--inh" type="text" name="first_name" ng-model="vm.userForm.model.first_name" placeholder="\u0418\u043C\u044F" required><validation-errors data="userForm.first_name" server="vm.userForm.errors" messages="vm.userForm.validations.first_name"></validation-errors></div><div class="field-style"><input class="input input--size_l input--up-shadow width--inh" type="text" ng-model="vm.userForm.model.last_name" placeholder="\u0424\u0430\u043C\u0438\u043B\u0438\u044F" required><validation-errors data="userForm.last_name" server="vm.userForm.errors" messages="vm.userForm.validations.last_name"></validation-errors></div></div><!-- \u043B\u043E\u0433\u0438\u043D \u0432 \u0431\u0430\u0437\u0435 --><div class="form__field-item mrg__bottom10"><div class="field-style"><label class="field-style__title font__size13">\u041F\u0440\u0438\u0434\u0443\u043C\u0430\u0439\u0442\u0435 \u0438\u043C\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F</label><div class="field-style__group"><div class="width--inh position"><span class="input-plash input-plash--top13 font__size13">@mail.cz</span> <input class="input input--size_l input--up-shadow width--inh" type="text" name="username" ng-model="vm.userForm.model.username" placeholder="\u0418\u043C\u044F \u043F\u043E\u0447\u0442\u044B" required></div><validation-errors data="userForm.username" server="vm.userForm.errors" messages="vm.userForm.validations.username"></validation-errors><!-- <div class="validation">\n                                         <div class="validation__message validation__message&#45;&#45;red">\n                                             \u042D\u0442\u043E \u0438\u043C\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u0443\u0436\u0435 \u0437\u0430\u043D\u044F\u0442\u043E. \u041F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435\n                                             \u0434\u0440\u0443\u0433\u043E\u0435\n                                         </div>\n                                     </div>--></div><!--<div class="input-data-valide-test mrg__top10 mrg__bottom10 ">--><!--\u0421\u0432\u043E\u0431\u043E\u0434\u043D\u043E: <span class="input-data-valide-test__we-offer">abc779736</span>--><!--</div>--></div></div><!-- \u043F\u0430\u0440\u043E\u043B\u044C --><div class="form__field-item mrg__bottom6"><div class="field-style"><input class="input input--size_l input--up-shadow width--inh" type="password" name="password" ng-model="vm.userForm.model.password" placeholder="\u041F\u0430\u0440\u043E\u043B\u044C" required><validation-errors data="userForm.password" server="vm.userForm.errors" messages="vm.userForm.validations.password"></validation-errors></div></div><!-- \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u0435 \u043F\u0430\u0440\u043E\u043B\u044F --><div class="form__field-item mrg__bottom10"><div class="field-style"><input class="input input--size_l input--up-shadow width--inh" type="password" name="passwordConf" ng-model="vm.userForm.model.passwordConf" placeholder="\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u0435 \u043F\u0430\u0440\u043E\u043B\u044F" required><validation-errors data="userForm.passwordConf" server="vm.userForm.errors" messages="vm.userForm.validations.passwordConf"></validation-errors></div></div><!-- \u0421\u041C\u0421 \u0432\u0430\u043B\u0438\u0434\u0430\u0446\u0438\u044F --><div class="form__field-item mrg__bottom25 mrg__top30 flex flex--row-wrap"><div class="field-style mrg__right5 width--size177"><input class="input input--size_l input--up-shadow width--inh" type="text" name="phone" ng-model="vm.userForm.model.phone" ui-mask-placeholder ui-mask-placeholder-char="x" ui-mask="+999 999-999-999" ui-options="{allowInvalidValue: true, clearOnBlur: false}" required></div><div class="field-style width--inh width--max126"><button class="btn btn--size_l btn--normal width--inh btn--s-gradient" type="button" ng-click="vm.sendCode()">\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043A\u043E\u0434</button></div><validation-errors data="userForm.phone" server="vm.userForm.errors" messages="vm.userForm.validations.phone"></validation-errors><div ng-repeat="error in vm.userForm.errors" ng-if="!vm.codeResult"><span class="color--red" ng-if="error.field === \'code\'">{{ error.message }}</span></div><span class="notific notific--auth" ng-if="vm.codeResult && vm.userForm.model.phone">\u041D\u0430 \u043D\u043E\u043C\u0435\u0440 +{{ vm.userForm.model.phone }} \u0431\u044B\u043B \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D \u043A\u043E\u0434 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0438</span></div><!-- \u0421\u041C\u0421 \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u0435 \u043A\u043E\u0434\u0430 --><div class="form__field-item mrg__bottom20 mrg__top16 flex flex--row-wrap" ng-if="vm.codeResult.code"><div class="width-inh flex--inline align-items--cn"><div class="field-style mrg__right5 width--size177"><input class="input input--size_l input--up-shadow width--inh" type="text" name="code" ng-model="vm.userForm.model.code" placeholder="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u0434 \u0438\u0437 \u0441\u043C\u0441" required></div><!--<div class="field-style width&#45;&#45;aut">--><!--&lt;!&ndash;<button class="btn btn&#45;&#45;size_l btn&#45;&#45;normal width&#45;&#45;inh btn&#45;&#45;s-gradient" type="button">\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C&ndash;&gt;--><!--&lt;!&ndash;</button>&ndash;&gt;--><!--<span class="ok-validates width&#45;&#45;inh">\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D</span>--><!--</div>--></div><validation-errors data="userForm.code" server="vm.userForm.errors" messages="vm.userForm.validations.code"></validation-errors></div><!-- \u0421\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u0435 --><div class="form__field-item mrg__bottom10"><div class="field-style widtn--inh"><!--\u043D\u0430\u0448 \u0447\u0435\u043A\u0431\u043E\u043A\u0441 --><label class="checkbox-y__label checkbox-y--size15 checkbox-y checkbox-y--chek-top" for="isChecked"><input class="checkbox-y__input" id="isChecked" type="checkbox" name="isChecked" ng-model="isChecked"><div class="checkbox-y__body"><span class="checkbox-y__icon"></span></div><span class="checkbox__text font__size12 color--silver" role="presentation">\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0430\u044F \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044E \u0432\u044B \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0435\u0442\u0435 \u043F\u0440\u0430\u0432\u0438\u043B\u0430 \u043E\u043F\u0438\u0441\u0430\u043D\u043D\u044B\u0435 \u0432 <a class="link link-aith" ui-sref="terms" target="_blank">\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u043E\u043C \u0441\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u0438</a></span></label></div></div><!-- \u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u0441\u044F --><div class="form__field-item mrg__bottom10"><hr class="hr hr--auth"><div class="field-style text-center"><button class="btn btn--size_l btn--yellow width--inh" type="submit" ng-if="!vm.userForm.isLoading">\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F</button><!--<div ng-if="vm.userForm.isLoading">--><spinner is-global="false" is-open="vm.userForm.isLoading"></spinner><!--</div>--></div></div></form><!--<hr class="hr hr&#45;&#45;auth ">--> <button class="btn btn--size_l btn--link-style" ui-sref="signIn">\u0412\u043E\u0439\u0442\u0438</button></div></div></div><!-- \u0444\u0443\u0442\u0442\u0435\u0440 \u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435 \u0430\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u0438--><div class="footer footer__auth"><!-- \u041A\u043E\u043F\u0438\u0440\u0430\u0439\u0442--><div class="footer__copyright"><span class="">\xA9 2001\u20142017 \xABMail.cz\xBB Group a.s.</span></div><!-- \u041E\u0441\u043D\u043E\u0432\u043D\u043E\u0435 \u043C\u0435\u043D\u044E--><div class="footer__menu"><div class="navigation"><div class="navigation__row"><div class="navigation__item"><!--<a class="navigation__link navigation__link&#45;&#45;footer-a" href="">\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B</a>--></div></div></div></div><!-- \u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043C\u0435\u043D\u044E \u0441 \u0432\u044B\u0431\u043E\u0440\u043E\u043C \u044F\u0437\u044B\u043A\u0430--><div class="footer__right-menu mrg__right"><div class="navigation"><div class="navigation__row"><div class="navigation__item position width--size28"><!-- \u042F\u0437\u044B\u043A\u043E\u0432\u043E\u0435 \u043C\u0435\u043D\u044E--><div class="choice-language"><a class="choice-language__link choice-language--active" href=""><img class="choice-language__country" src="images/country/albania.svg" alt=""></a><!----> <a class="choice-language__link" href=""><img class="choice-language__country" src="images/country/bosnia.svg" alt=""></a><!----> <a class="choice-language__link" href=""><img class="choice-language__country" src="images/country/croatia.svg" alt=""></a><!----> <a class="choice-language__link" href=""><img class="choice-language__country" src="images/country/cz.svg" alt=""></a><!----> <a class="choice-language__link" href=""><img class="choice-language__country" src="images/country/macedonia.svg" alt=""></a><!----> <a class="choice-language__link" href=""><img class="choice-language__country" src="images/country/russia.svg" alt=""></a><!----> <a class="choice-language__link" href=""><img class="choice-language__country" src="images/country/serbia.svg" alt=""></a><!----> <a class="choice-language__link" href=""><img class="choice-language__country" src="images/country/slovakia.svg" alt=""></a><!----> <a class="choice-language__link" href=""><img class="choice-language__country" src="images/country/Slovenia.svg" alt=""></a><!----> <a class="choice-language__link" href=""><img class="choice-language__country" src="images/country/uk.svg" alt=""></a><!----> <a class="choice-language__link" href=""><img class="choice-language__country" src="images/country/ukraine.svg" alt=""></a></div></div><div class="navigation__item"><a class="navigation__link" href="">\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B</a></div><!--<div class="navigation__item"><a class="navigation__link" href="">\u0420\u0435\u043A\u043B\u0430\u043C\u0430</a></div>--></div></div></div></div></div><div class="auth-layout__bg"></div></div>');
$templateCache.put('app/components/attach-button/attach-button.html','<button></button>');
$templateCache.put('app/components/attach-item/attach-item.html','<div class="attach-item"><a href="http://apimail.devogic.com/mail/{{ vm.message.model.number }}?part=attach&filename={{ vm.attach.fileName }}&token={{ vm.user.access_token }}&connection_id={{ vm.message.model.connection_id }}" target="_blank"><div><div class="attach-item__name" ng-if="vm.attach.mime !== \'image/png\' && vm.attach.mime !== \'image/jpeg\'">{{ vm.attach.fileName }}</div><div class="attach-item__type">{{ vm.attach.mime.split(\'/\')[1]; }}</div><div class="attach-item__buttons"><button class="attach-item__button"><span class="icon-eye"></span></button> <button class="attach-item__button"><span class="icon-upload"></span></button></div><img class="attach-item__image" ng-if="vm.attach.mime === \'image/png\' || vm.attach.mime === \'image/jpeg\'" ng-src="http://apimail.devogic.com/mail/{{ vm.message.model.number }}?part=attach&filename={{ vm.attach.fileName }}&token={{ vm.user.access_token }}&connection_id={{ vm.message.model.connection_id }}"></div></a></div>');
$templateCache.put('app/components/attach-upload/attach-upload.html','<div class="attach-upload"><div class="attach-upload__list"><div class="attach-upload__item" ng-repeat="attachment in vm.attachmentsData"><div class="attach-upload__image" ng-class="{\'attach-upload__image--shadow\': attachment.mime === \'image/jpeg\' || attachment.mime === \'image/png\'}"><img ng-src="{{ vm.getLink(attachment) }}" fallback-src="{{\'/images/upload-image.png\'}}" ng-if="attachment.mime === \'image/jpeg\' || attachment.mime === \'image/png\'"> <img src="/images/upload-file.png" ng-if="attachment.mime !== \'image/jpeg\' && attachment.mime !== \'image/png\'"></div><div class="attach-upload__name">{{ attachment.fileName }}</div><div class="text-center"><spinner is-global="false" is-open="true" ng-if="vm.isUploading"></spinner></div><div class="attach-upload__links" ng-if="!vm.isUploading"><a class="attach-upload__link" href="{{ vm.getLink(attachment) }}" target="_blank">\u0421\u043A\u0430\u0447\u0430\u0442\u044C</a> <a class="attach-upload__link" href ng-click="vm.remove(attachment)">\u0423\u0434\u0430\u043B\u0438\u0442\u044C</a></div></div></div></div>');
$templateCache.put('app/components/avatar-name/avatar-name.html','<img class="avatar__image" src="/images/avatar-personal.svg" alt="" ng-if="!vm.firstLetter && !vm.emailLetter"><div class="avatar__symbol-image" ng-if="vm.firstLetter || vm.emailLetter"><div class="avatar__first-name">{{ vm.firstLetter ? vm.firstLetter : vm.emailLetter }}</div><div class="avatar__last-name" ng-if="vm.lastLetter">{{ vm.lastLetter }}</div></div>');
$templateCache.put('app/components/avatar-upload/avatar-upload-popup.html','<div><div class="popup__close" ng-click="cancel()">\xD7</div><avatar-upload on-close="cancel()"></avatar-upload></div>');
$templateCache.put('app/components/avatar-upload/avatar-upload.html','<div class="avatar-upload"><div class="avatar-upload__header"><span class="avatar-upload__title">\u041F\u043E\u0440\u0442\u0440\u0435\u0442 \u043F\u0440\u043E\u0444\u0438\u043B\u044F</span></div><div class="avatar-upload__body"><div class="col-xs-6"><div class="flex just-content--center mrg__right10"><div class="avatar-upload__crop" ngf-drop ngf-pattern="image/*" ng-if="vm.avatar.picFile" style="width:283px;height:283px"><img-crop image="vm.avatar.picFile | ngfDataUrl" result-image="vm.avatar.croppedDataUrl" ng-init="vm.avatar.croppedDataUrl=\'\'"></img-crop></div><img class="avatar-upload__default img-responsive" style="width:260px;height:260px" src="/images/avatar-300.png" ng-if="!vm.avatar.picFile"></div></div><div class="col-xs-6 flex flex--colum just-content--center"><button class="btn btn--size_l btn--normal" ngf-select accept="image/*" ng-model="vm.avatar.picFile">\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435</button><p class="font__size12 color--gray mrg__top10">\u041C\u043E\u0436\u043D\u043E \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0443 \u0432 \u0444\u043E\u0440\u043C\u0430\u0442\u0435 png, jpg \u0438 gif. \u0420\u0430\u0437\u043C\u0435\u0440\u044B \u043D\u0435 \u043C\u0435\u043D\u044C\u0448\u0435 200 \xD7 200 \u0442\u043E\u0447\u0435\u043A, \u043E\u0431\u044A\u0451\u043C \u0444\u0430\u0439\u043B\u0430 \u043D\u0435 \u0431\u043E\u043B\u044C\u0448\u0435 7 \u041C\u0411.</p></div><!--<hr class="hr hr&#45;&#45;bottom">--></div><div class="avatar-upload__footer"><button class="btn btn--size_l btn--normal pull-left" ng-click="vm.close()">\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C</button> <button class="btn btn--size_l btn--yellow pull-right" type="button" ng-click="vm.upload(vm.avatar.croppedDataUrl, vm.avatar.picFile.name)">\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C</button></div></div>');
$templateCache.put('app/components/black-list/black-list.html','<div><div class="rules-settings__bl-wh-content__title">\u0427\u0435\u0440\u043D\u044B\u0439 \u0441\u043F\u0438\u0441\u043E\u043A</div><span class="rules-settings__bl-wh-content__text">\u0412\u0441\u044F \u043F\u043E\u0447\u0442\u0430 \u0441 \u0430\u0434\u0440\u0435\u0441\u043E\u0432, \u0437\u0430\u043D\u0435\u0441\u0451\u043D\u043D\u044B\u0445 \u0432 \u0447\u0451\u0440\u043D\u044B\u0439 \u0441\u043F\u0438\u0441\u043E\u043A, \u043D\u0435 \u0431\u0443\u0434\u0435\u0442 \u043F\u043E\u0441\u0442\u0443\u043F\u0430\u0442\u044C \u0432 \u0432\u0430\u0448 \u043F\u043E\u0447\u0442\u043E\u0432\u044B\u0439 \u044F\u0449\u0438\u043A.</span><form name="form" ng-submit="vm.add(form)" novalidate><div class="form__field-item mrg__bottom0"><div class="field-style flex--inline width--max460"><input class="input input--size_xs input--up-shadow width--inh input--bg-white mrg__right7 border--cl-bl-silver" type="email" name="email" ng-model="vm.form.model.email" placeholder="\u0423\u043A\u0430\u0436\u0438\u0442\u0435 e-mail \u0430\u0434\u0440\u0435\u0441" required> <button class="btn btn--normal btn--size_xs width--size150 border--cl-bl-silver" type="submit">\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C</button></div></div></form><div class="mrg__top20"><div class="mrg__top5 padding--top3 padding--bottom3" ng-repeat="item in vm.list.items"><div class="checkbox-y checkbox-y--size14"><label class="checkbox-y__label"><input class="checkbox-y__input" type="checkbox" data-checklist-model="vm.list.checked" data-checklist-value="item"><div class="checkbox-y__body"><span class="checkbox-y__icon"></span></div><div class="checkbox-y__text font-sizer--bigger-15 font__bold">{{ item }}</div></label></div></div></div><div class="mrg__top10"><button class="btn btn--size_xs btn--normal btn--hover-border btn--silver-bg-y-shw" type="button" ng-click="vm.remove()" ng-disabled="!vm.list.checked.length">\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0438\u0437 \u0441\u043F\u0438\u0441\u043A\u0430</button></div></div>');
$templateCache.put('app/components/compose-header/compose-header.html','<div class="inbox-header font-sizer--bigger-15"><div class="inbox-header__row"><!--<div class="inbox-header__item">--><!--<a class="inbox-header__link" href ui-sref="mail.inbox">--><!--<span class="icon-redo inbox-header__icon inbox-header__icon&#45;&#45;green"></span>--><!--<span class="inbox-header__name">\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C</span>--><!--</a>--><!--</div>--><!--        <div class="inbox-header__item pull-right">\n            <a class="inbox-header__link" href>\n                <span class="icon-redo inbox-header__icon inbox-header__icon&#45;&#45;green"></span>\n                <span class="inbox-header__name">\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C</span>\n            </a>\n        </div>--></div></div>');
$templateCache.put('app/components/contact-emails/contact-emails.html','<div><div class="edit-contact__add-data edit-contact__add-data--added" ng-repeat="email in vm.emails"><span class="remove-data-input" ng-click="vm.remove(email)"><svg class="remove-data-input__icon"><use xlink:href="#icon-close"></use></svg> </span><input class="input input--size_xs input--up-shadow width--size220" type="text" name="email" ng-model="email.value"></div><ng-form name="emailForm" novalidate><div class="edit-contact__add-data mrg__top5"><span class="remove-data-input"><svg class="remove-data-input__icon"><use xlink:href="#icon-close"></use></svg> </span><input class="input input--size_xs input--up-shadow width--size220" type="email" name="email" ng-model="vm.emailForm.model.email" ng-keyup="vm.add(emailForm, $event.keyCode);" placeholder="\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u044B\u0439 \u0430\u0434\u0440\u0435\u0441" required></div></ng-form></div>');
$templateCache.put('app/components/contact-edit/contact-edit-popup.html','<div><div class="popup__close" ng-click="cancel()">\xD7</div><contact-edit contact="contact" on-cancel="cancel()" on-close="close(result)"></contact-edit></div>');
$templateCache.put('app/components/contact-edit/contact-edit.html','<div class="contact-group-create"><div class="edit-contact"><form name="contactForm" novalidate><div class="edit-contact__header"><span class="">\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438 \u043E \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u0435</span></div><div class="edit-contact__content"><div class="edit-contact__column"><div class="edit-contact__avatar"><div class="avatar avatar--settings avatar--size50 avatar--second-style"><img class="avatar__image" src="/images/avatar-personal.svg"></div></div><div class="edit-contact__fio-data"><input class="input input--size_sm input--up-shadow mrg__right10" type="text" name="last_name" placeholder="\u0424\u0430\u043C\u0438\u043B\u0438\u044F" ng-model="vm.contactForm.model.last_name"> <input class="input input--size_sm input--up-shadow mrg__right10" type="text" name="first_name" ng-model="vm.contactForm.model.first_name" placeholder="\u0418\u043C\u044F"> <input class="input input--size_sm input--up-shadow" type="text" name="middle_name" ng-model="vm.contactForm.model.middle_name" placeholder="\u041E\u0442\u0447\u0435\u0441\u0442\u0432\u043E"></div></div><div class="edit-contact__column"><hr class="hr hr--top"><div class="edit-contact__left mrg__right10"><div class="edit-contact__item"><span class="edit-contact__icon"><svg class="svg-icon"><use xlink:href="#conact-icon-mail"></use></svg></span><contact-emails emails="vm.contactForm.model.emails"></contact-emails></div><!-- \u0422\u0443\u0442 \u0432\u0432\u043E\u0434\u0438\u0442\u0441\u044F \u0433\u0440\u0443\u043F\u043F\u044B--><div class="edit-contact__item" ng-repeat="contactGroup in contactGroups"><span class="edit-contact__icon"><svg class="svg-icon"><use xlink:href="#conacts-add-group"></use></svg> </span><!-- \u0441\u043F\u0438\u0441\u043E\u043A--><div class="edit-contact__groups"><span class="edit-contact__group-item"><span class="remove-data-input remove-data-input--small"><svg class="remove-data-input__icon"><use xlink:href="#icon-close"></use></svg> </span><svg class="edit-contact__group-item__icon group-icon group-pall--c-1"><use xlink:href="#grid-square"></use></svg> {{ contactGroup.name }}</span></div></div><!-- \u0422\u0443\u0442 \u0432\u0432\u043E\u0434\u0438\u0442\u0441\u044F \u043D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430--><div class="edit-contact__item"><span class="edit-contact__icon"><svg class="svg-icon"><use xlink:href="#contact-phone"></use></svg></span><contact-phones phones="vm.contactForm.model.phones"></contact-phones></div><!-- \u0434\u0430\u0442\u0430 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F--><div class="edit-contact__item"><span class="edit-contact__icon"><svg class="svg-icon"><use xlink:href="#contact-birthday"></use></svg></span><div class="field-style flex--inline flex--row-wrap just-content--sp-btw width--size220"><ui-select ng-model="vm.contactForm.model.bDay" class="select-list select-list--size_xs select-list--not-border-of-sides width--size50 select-list--if-less" style="width: 50px!important" theme="select2" title="Choose a person"><ui-select-match class="select-list__body select-list--size_xs width--size50" placeholder="\u0414\u0435\u043D\u044C">{{ $select.selected.name }}</ui-select-match><ui-select-choices repeat="day in vm.days"><div ng-bind-html="day.name"></div></ui-select-choices></ui-select><ui-select ng-model="vm.contactForm.model.bMonth" class="select-list select-list--size_xs select-list--not-border-of-sides width--size90 select-list--if-less" style="width: 90px!important" theme="select2" title="Choose a person"><ui-select-match class="select-list__body select-list--size_xs width--size90" placeholder="\u041C\u0435\u0441\u044F\u0446">{{ $select.selected }}</ui-select-match><ui-select-choices repeat="month in vm.months"><div ng-bind-html="month"></div></ui-select-choices></ui-select><ui-select ng-model="vm.contactForm.model.bYear" class="select-list select-list--size_xs select-list--not-border-of-sides width--size65 select-list--if-less" style="width: 65px!important" theme="select2" title="Choose a person"><ui-select-match class="select-list__body select-list--size_xs width--size65" placeholder="\u0413\u043E\u0434">{{ $select.selected.name }}</ui-select-match><ui-select-choices repeat="year in vm.years"><div ng-bind-html="year.name"></div></ui-select-choices></ui-select></div></div></div><div class="edit-contact__right"><div class="edit-contact__item align-items--st"><span class="edit-contact__icon"><svg class="svg-icon"><use xlink:href="#conact-comment"></use></svg></span><textarea class="edit-contact__text-field textarea textarea--normal textarea--size_sm textarea--not-resize textarea--input-yellow-focus textarea--up-shadow" placeholder="\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439 \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u0443" ng-model="vm.contactForm.model.comment"></textarea></div></div></div><hr class="hr hr--bottom"></div><div class="edit-contact__footer"><button class="btn btn--normal btn--size_l width--size220 float--left" type="button" ng-click="vm.cancel()">\u041E\u0442\u043C\u0435\u043D\u0430</button> <button class="btn btn--yellow btn--size_l width--size220 float--left" type="button" ng-click="vm.update(contactForm)">\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F</button></div></form></div></div>');
$templateCache.put('app/components/contact-add/contact-add-popup.html','<div><div class="popup__close" ng-click="cancel()">\xD7</div><contact-add on-close="cancel()"></contact-add></div>');
$templateCache.put('app/components/contact-add/contact-add.html','<div class="contact-group-create"><div class="add-contact"><form name="contactForm" ng-submit="vm.create(contactForm)" novalidate><div class="add-contact__header"><span class="">\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043D\u043E\u0432\u044B\u0439 \u043A\u043E\u043D\u0442\u0430\u043A\u0442</span></div><div class="add-contact__content"><div class="add-contact__column"><div class="add-contact__avatar"><div class="avatar avatar--settings avatar--size50 avatar--second-style"><img class="avatar__image" src="/images/avatar-personal.svg"></div></div><div class="add-contact__fio-data"><input class="input input--size_sm input--up-shadow mrg__right10" type="text" name="last_name" ng-model="vm.contactForm.model.last_name" placeholder="\u0424\u0430\u043C\u0438\u043B\u0438\u044F"> <input class="input input--size_sm input--up-shadow mrg__right10" type="text" name="first_name" ng-model="vm.contactForm.model.first_name" placeholder="\u0418\u043C\u044F"> <input class="input input--size_sm input--up-shadow" type="text" name="middle_name" ng-model="vm.contactForm.model.middle_name" placeholder="\u041E\u0442\u0447\u0435\u0441\u0442\u0432\u043E"></div></div><div class="add-contact__column"><hr class="hr hr--top"><div class="add-contact__left"><div class="add-contact__item"><span class="add-contact__icon"><svg class="svg-icon"><use xlink:href="#conact-icon-mail"></use></svg> </span><input class="input input--size_xs input--up-shadow mrg__right10 width--size220" type="text" name="email" ng-model="vm.contactForm.model.email" placeholder="\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u044B\u0439 \u0430\u0434\u0440\u0435\u0441" required></div><div class="add-contact__item"><span class="add-contact__icon"><svg class="svg-icon"><use xlink:href="#contact-phone"></use></svg> </span><input class="input input--size_xs input--up-shadow mrg__right10 width--size220" type="text" name="phone" ng-model="vm.contactForm.model.phone" placeholder="\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0442\u0435\u043B\u0435\u0444\u043E\u043D"></div><div class="add-contact__item"><span class="add-contact__icon"><svg class="svg-icon"><use xlink:href="#contact-birthday"></use></svg></span><div class="field-style flex--inline flex--row-wrap just-content--sp-btw width--size220"><ui-select ng-model="vm.contactForm.model.bDay" class="select-list select-list--size_xs select-list--not-border-of-sides width--size50 select-list--if-less" style="width: 50px!important" theme="select2" title="Choose a person"><ui-select-match class="select-list__body select-list--size_xs width--size50" placeholder="\u0414\u0435\u043D\u044C">{{ $select.selected.name }}</ui-select-match><ui-select-choices repeat="day in vm.days"><div ng-bind-html="day.name"></div></ui-select-choices></ui-select><ui-select ng-model="vm.contactForm.model.bMonth" class="select-list select-list--size_xs select-list--not-border-of-sides width--size90 select-list--if-less" style="width: 90px!important" theme="select2" title="Choose a person"><ui-select-match class="select-list__body select-list--size_xs width--size90" placeholder="\u041C\u0435\u0441\u044F\u0446">{{ $select.selected }}</ui-select-match><ui-select-choices repeat="month in vm.months"><div ng-bind-html="month"></div></ui-select-choices></ui-select><ui-select ng-model="vm.contactForm.model.bYear" class="select-list select-list--size_xs select-list--not-border-of-sides width--size65 select-list--if-less" style="width: 65px!important" theme="select2" title="Choose a person"><ui-select-match class="select-list__body select-list--size_xs width--size65" placeholder="\u0413\u043E\u0434">{{ $select.selected.name }}</ui-select-match><ui-select-choices repeat="year in vm.years"><div ng-bind-html="year.name"></div></ui-select-choices></ui-select></div></div></div><div class="add-contact__right"><div class="add-contact__item align-items--st"><span class="add-contact__icon"><svg class="svg-icon"><use xlink:href="#conact-comment"></use></svg></span><textarea class="add-contact__text-field textarea textarea--normal textarea--size_sm textarea--not-resize textarea--input-yellow-focus textarea--up-shadow" name="comment" ng-model="vm.contactForm.model.comment" placeholder="\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439 \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u0443"></textarea></div></div></div><hr class="hr hr--bottom"></div><div class="add-contact__footer"><button class="btn btn--normal btn--size_l width--aut float--left" type="submit">\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432 \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u044B</button></div></form></div></div>');
$templateCache.put('app/components/contact-export-file/contact-export-file-popup.html','<div><div class="popup__close" ng-click="cancel()">\xD7</div><contact-export-file on-close="cancel()"></contact-export-file></div>');
$templateCache.put('app/components/contact-export-file/contact-export-file.html','<div class="contact-import-file"><div class="load-contacts-from-file"><form name="uploadForm" ng-submit="vm.upload(uploadForm)" novalidate><div class="load-contacts-from-file__header"><span class="">\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u044B \u0438\u0437 \u0444\u0430\u0439\u043B\u0430</span></div><div class="load-contacts-from-file__content"><div class="load-contacts-from-file__title">Mail.CZ \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0438\u043C\u043F\u043E\u0440\u0442 \u0432\u0430\u0448\u0438\u0445 \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u043E\u0432 \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u043E\u0432,\u0438\u0437 \u0444\u0430\u0439\u043B\u043E\u0432 \u0432 \u0444\u043E\u0440\u043C\u0430\u0442\u0435 .csv \u0438 vCard.</div><!--\n                    is-loaded \u043E\u0442\u0432\u0435\u0447\u0430\u0435\u0442 \u0437\u0430 \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438 \u043E \u0430\u043D\u0430\u043B\u0438\u0437\u0438 \u0444\u0430\u0439\u043B\u0430\n                    accept="image/*"\n                --><div class="load-contacts-from-file__load-elements"><button class="btn btn--yellow btn--size_sm width--aut" type="button" ng-click="vm.exportContacts()">\u042D\u043A\u0441\u043F\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u044B</button><!--<a class="btn btn&#45;&#45;yellow btn&#45;&#45;size_sm width&#45;&#45;aut"--><!--type="button"--><!--href="http://apimail.devogic.com/contact/export" target="_blank">--><!--\u042D\u043A\u0441\u043F\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u044B--><!--</a>--><!--<span class="load-contacts-from-file__attach-file" ng-if="vm.uploadForm.model.file">--><!--{{ vm.uploadForm.model.file.name }}--><!--<span class="remove-data-input remove-data-input&#45;&#45;small"--><!--ng-click="vm.uploadForm.model.file = \'\'">--><!--<svg class="remove-data-input__icon">--><!--<use xlink:href="#icon-close"></use>--><!--</svg>--><!--</span>--><!--</span>--><!--<div class="load-contacts-from-file__notif" ng-if="vm.uploadForm.model.file">--><!--\u0424\u0430\u0439\u043B \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043F\u0440\u043E\u0430\u043D\u0430\u043B\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u043D\u043E--><!--&lt;!&ndash;\u0438 \u043D\u0430\u0439\u0434\u0435\u043D\u043E <b class="font__bold color&#45;&#45;yellow font__size16">24</b> \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u0430&ndash;&gt;--><!--</div>--></div></div><div class="load-contacts-from-file__footer"><hr class="hr hr--top"><button class="btn btn--normal btn--size_sm width--size129 mrg__right10" type="button" ng-click="vm.close()">\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C</button> <button class="btn btn--normal btn--size_sm width--size129" type="button" ng-click="vm.close()">\u0413\u043E\u0442\u043E\u0432\u043E</button></div></form></div></div>');
$templateCache.put('app/components/contact-group/contact-group.html','<div class="contacts-settings"><div class="tags-settings__title main-title-text">\u0413\u0440\u0443\u043F\u043F\u044B \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u043E\u0432:</div><div class="tags-settings__content"><div class="tags-settings__fields"><div class="tags-settings__fields__title-block"><div class="tags-settings__item mrg__bottom5"><div class="tags-settings__title">\u0412\u0441\u0435</div><div class="tags-settings__values">{{ vm.contactGroup.items.length }}</div></div></div><div class="tags-settings__item mrg__bottom5" ng-repeat="contact in vm.contactGroup.items" ng-class="{\'tags-settings__item--active\': contact.isSelected}" ng-click="vm.select(contact)"><div class="tags-settings__title">{{ contact.name }}</div><div class="tags-settings__values">2</div></div></div><div class="tags-settings__control"><div class="mrg__top"><!----> <button class="btn btn--normal btn--size_sm width--size150 mrg__bottom4" type="button" ng-click="vm.openContactGroupCreatePopup()">\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0433\u0440\u0443\u043F\u043F\u0443</button> <button class="btn btn--normal btn--size_sm width--size150 mrg__bottom4" type="button" ng-disabled="!vm.selected" ng-click="vm.openContactGroupEditPopup()">\u041F\u0435\u0440\u0435\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u0442\u044C</button> <button class="btn btn--normal btn--size_sm width--size150 mrg__bottom4" type="button" ng-disabled="!vm.selected" ng-click="vm.destroy()">\u0423\u0434\u0430\u043B\u0438\u0442\u044C</button></div></div></div><div class="form__field-item"></div></div>');
$templateCache.put('app/components/contact-group-add/contact-group-add-popup.html','<div><div class="popup__close" ng-click="cancel()">\xD7</div><contact-group-add on-close="cancel()"></contact-group-add></div>');
$templateCache.put('app/components/contact-group-add/contact-group-add.html','<div class="contact-group-create"><div class="add-group-contacts"><form name="form" ng-submit="vm.create(form)" novalidate><div class="add-group-contacts__header"><div class="add-group-contacts__left"><span class="add-group-contacts__header-title">\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0433\u0440\u0443\u043F\u043F\u0443</span><div class="add-group-contacts__left-content"><label class="contacts-header__icon all-select-check mrg__right16" ng-class="{\'is-check\': vm.isAllChecked}"><input type="checkbox" style="display: none" ng-model="vm.isAllChecked" ng-change="vm.checkedAllContacts()" ng-disabled="!vm.contacts.items.length"> <svg class="all-select-check__icon"><use xlink:href="#check-box-mark"></use></svg></label><!-- \u0432\u044B\u0431\u043E\u0440 \u0433\u0440\u0443\u043F\u043F\u044B --><ui-select ng-model="vm.searchForm.group" class="select-list select-list--size_xs select-list--not-border-of-sides mrg__right10" style="width: 145px!important" theme="select2" title="Choose a person"><ui-select-match class="select-list__body select-list--size_xs width--all" placeholder="\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0433\u0440\u0443\u043F\u043F\u0443">{{ $select.selected.name }}</ui-select-match><!--<ui-select-choices>--><!--<div>\u0412\u0441\u0435 \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u044B</div>--><!--</ui-select-choices>--><ui-select-choices repeat="contactGroup in vm.contactGroup.items"><div ng-bind-html="contactGroup.name"></div></ui-select-choices></ui-select><!-- \u041F\u043E\u0438\u0441\u043A --> <input class="input input--size_xs width--size220" type="text" placeholder="\u041F\u043E\u0438\u0441\u043A" ng-model="vm.searchForm.query"></div></div><div class="add-group-contacts__right"><!-- \u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0433\u0440\u0443\u043F\u043F\u044B --> <input class="input input--size_xs width--inh mrg__bottom" type="text" name="name" placeholder="\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0433\u0440\u0443\u043F\u043F\u044B" ng-model="vm.contactGroupForm.model.name" required></div></div><div class="add-group-contacts__content"><div class="add-group-contacts__left"><div class="add-group-contacts__contact-list"><!-- \u043A\u043E\u043D\u0442\u0430\u043A\u0442 --><label class="add-group-contacts__item" ng-repeat="contact in vm.contacts.items | filter: vm.searchForm.query"><input class="add-group-contacts__checkbox" type="checkbox" style="display: none" data-checklist-model="vm.contacts.checked" data-checklist-value="contact"><div class="add-group-contacts__checkbox-body"><!-- \u0410\u0432\u0430\u0442\u0430\u0440\u043A\u0430--><div class="add-group-contacts__contact-avatar"><div class="avatar avatar--settings avatar--size28 avatar--second-style"><avatar-name name="contact.first_name" email="contact.email"></avatar-name><span class="add-group-contacts__check-icon"><svg class="all-select-check__icon"><use xlink:href="#check-box-mark"></use></svg></span></div></div><!-- \u0418\u043C\u044F--><div class="add-group-contacts__contact-name"><span class="add-group-contacts__text">{{ contact.last_name }} {{ contact.first_name }}</span></div><!-- \u0410\u0434\u0440\u0435\u0441 \u043F\u043E\u0447\u0442\u044B--><div class="add-group-contacts__mail-adress"><span class="add-group-contacts__text">{{ contact.email }}</span></div></div></label></div></div><div class="add-group-contacts__right flex--colum"><div class="add-group-contacts__selected-contact-list"><div class="add-group-contacts__select-item" ng-repeat="contact in vm.contacts.checked"><div class="flex flex--colum"><span class="add-group-contacts__user-name">{{ contact.last_name }} {{ contact.first_name }} </span><span class="add-group-contacts__user-mail">{{ contact.email }}</span></div><button class="add-group-contacts__select-item-remove btn btn--not-style" type="button" ng-click="vm.removeChecked(contact)"><svg class="svg-icon"><use xlink:href="#icon-bold-removed"></use></svg></button></div></div><div class="add-group-contacts__footer"><button class="btn btn--size_l btn--not-style width--aut mrg__right10" type="button" ng-click="vm.close()">\u041E\u0442\u043C\u0435\u043D\u0430</button> <button class="btn btn--normal btn--size_l width--aut" type="submit">\u0421\u043E\u0437\u0434\u0430\u0442\u044C</button></div></div></div></form></div></div>');
$templateCache.put('app/components/contact-group-create/contact-group-create-popup.html','<div><div class="popup__close" ng-click="cancel()">\xD7</div><contact-group-create on-close="cancel()"></contact-group-create></div>');
$templateCache.put('app/components/contact-group-create/contact-group-create.html','<div class="contact-group-create"><div class="contact-group-create__title">\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043D\u043E\u0432\u0443\u044E \u0433\u0440\u0443\u043F\u043F\u0443</div><div class="mrg__top15"><form name="contactGroupForm" ng-submit="vm.create(contactGroupForm)" novalidate><div class="contact-group-create__input mrg__top15"><div class="mrg__right10"><span class="font__size13">\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435</span></div><div><input class="input input--size_s width--inh input--fc-sh-yellow" type="text" name="name" ng-model="vm.contactGroupForm.model.name" required></div></div><div class="contact-group-create__btn mrg__top10"><button class="btn-y btn-y--border" type="submit">\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0433\u0440\u0443\u043F\u043F\u0443</button> <button class="btn-y btn-y--border" type="button" ng-click="vm.close()">\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C</button></div></form></div></div>');
$templateCache.put('app/components/contact-group-edit/contact-group-edit-popup.html','<div><div class="popup__close" ng-click="cancel()">\xD7</div><contact-group-edit model="model" on-close="cancel()"></contact-group-edit></div>');
$templateCache.put('app/components/contact-group-edit/contact-group-edit.html','<div class="contact-group-create"><div class="contact-group-create__title">\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043D\u043E\u0432\u0443\u044E \u0433\u0440\u0443\u043F\u043F\u0443</div><div class="mrg__top15"><form name="contactGroupForm" ng-submit="vm.create(contactGroupForm)" novalidate><div class="contact-group-create__input mrg__top15"><div class="mrg__right10"><span class="font__size13">\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435</span></div><div><input class="input input--size_s width--inh input--fc-sh-yellow" type="text" name="name" ng-model="vm.contactGroupForm.model.name" required></div></div><div class="contact-group-create__btn mrg__top10"><button class="btn-y btn-y--border" type="submit">\u041F\u0435\u0440\u0435\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u0442\u044C \u0433\u0440\u0443\u043F\u043F\u0443</button> <button class="btn-y btn-y--border" type="button" ng-click="vm.close()">\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C</button></div></form></div></div>');
$templateCache.put('app/components/contact-group-list/contact-group-list-popover.html','<contact-group-list contacts="vm.contacts"></contact-group-list>');
$templateCache.put('app/components/contact-group-list/contact-group-list.html','<div class="folder-list"><div><a class="folder-list__link" href ng-repeat="contactGroup in vm.contactGroup.items" ng-click="vm.addContacts(contactGroup)"><span class="folder-list__name">{{ contactGroup.name }}</span></a></div><hr class="hr"><div><a class="folder-list__link folder-list__link--new" href ng-click="vm.openGroupAddPopup()"><span class="folder-list__name">\u041D\u043E\u0432\u0430\u044F \u0433\u0440\u0443\u043F\u043F\u0430...</span></a></div></div>');
$templateCache.put('app/components/contact-header/contact-header.html','<div class="contacts-header"><div class="contacts-header__menu"><!-- \u0438\u0442\u0435\u043C--><div class="contacts-header__menu-item padding--left6 flex align-items--cn"><label class="contacts-header__link"><input type="checkbox" style="display: none" ng-model="vm.isAllChecked" ng-change="vm.checkedAllContacts()" ng-disabled="!vm.contacts.items.length"> <span class="contacts-header__icon all-select-check" ng-class="{\'is-check\': vm.isAllChecked}"><svg class="all-select-check__icon"><use xlink:href="#check-box-mark"></use></svg></span></label></div><!-- \u0438\u0442\u0435\u043C--><!--<div class="contacts-header__menu-item">--><!--<a class="contacts-header__link">--><!--<span class="icon-write contacts-header__icon"></span>--><!--<span class="contacts-header__item-name">\u041D\u0430\u043F\u0438\u0441\u0430\u0442\u044C</span>--><!--</a>--><!--</div>--><!-- \u0438\u0442\u0435\u043C--><div class="contacts-header__menu-item"><a class="contacts-header__link" href ng-click="vm.openContactAddPopup()"><span class="icon-add-contact contacts-header__icon"></span> <span class="contacts-header__item-name">\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043A\u043E\u043D\u0442\u0430\u043A\u0442</span></a></div><!-- \u0438\u0442\u0435\u043C--><div class="contacts-header__menu-item" ng-if="vm.contacts.checked.length"><a class="contacts-header__link" href ng-click="vm.destroy()"><span class="icon-bin contacts-header__icon color--light-red"></span> <span class="contacts-header__item-name">\u0423\u0434\u0430\u043B\u0438\u0442\u044C</span></a></div><!-- \u0438\u0442\u0435\u043C--><div class="contacts-header__menu-item" ng-if="vm.contacts.checked.length"><a class="contacts-header__link" uib-popover-template="\'app/components/contact-group-list/contact-group-list-popover.html\'" popover-class="popover--folder-list" popover-placement="bottom" popover-animation="true" popover-trigger="\'outsideClick\'"><span class="icon-add-group-2 contacts-header__icon"></span> <span class="contacts-header__item-name">\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432 \u0433\u0440\u0443\u043F\u043F\u0443</span></a></div><!-- \u0438\u0442\u0435\u043C--><div class="contacts-header__menu-item"><a class="contacts-header__link" href ng-click="vm.openContactRestorePopup()"><span class="icon-add-contacts-2 contacts-header__icon"></span> <span class="contacts-header__item-name">\u0412\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C</span></a></div><!-- \u0438\u0442\u0435\u043C--><div class="contacts-header__menu-item" uib-popover-template="\'app/components/contact-other-list/contact-other-list-popover.html\'" popover-class="popover--contact-other-list" popover-placement="bottom" popover-animation="true" popover-trigger="\'outsideClick\'"><a class="contacts-header__link"><span class="icon-more contacts-header__icon"></span> <span class="contacts-header__item-name">\u0415\u0449\u0435</span></a></div></div></div>');
$templateCache.put('app/components/contact-item/contact-item.html','<div class="contacts-list__item pointer" ng-class="{\'is-check\': vm.contact.isChecked}" ng-click="vm.openContactViewPopup()"><!-- \u0410\u0432\u0430\u0442\u0430\u0440\u043A\u0430--><div class="contacts-list__contact-avatar"><div class="avatar avatar--settings avatar--size28 avatar--second-style"><img class="avatar__image" src="/images/avatar-personal.svg" ng-if="!vm.firstLetter && !vm.emailLetter"><div class="avatar__symbol-image" ng-if="vm.firstLetter || vm.emailLetter"><div class="avatar__first-name">{{ vm.firstLetter ? vm.firstLetter : vm.emailLetter }}</div><div class="avatar__last-name" ng-if="vm.lastLetter">{{ vm.lastLetter }}</div></div><label ng-click="$event.stopPropagation();"><span class="contacts-list__check-icon"><svg class="all-select-check__icon"><use xlink:href="#check-box-mark"></use></svg> <input type="checkbox" style="display: none" ng-model="vm.contact.isChecked" data-checklist-model="vm.contacts.checked" data-checklist-value="vm.contact"></span></label></div></div><!-- \u0418\u043C\u044F--><div class="contacts-list__contact-name"><span class="contacts-list__text">{{ vm.contact.last_name }} {{ vm.contact.first_name }}</span></div><!-- \u0410\u0434\u0440\u0435\u0441 \u043F\u043E\u0447\u0442\u044B--><div class="contacts-list__mail-adress"><span class="contacts-list__text">{{ vm.contact.email }}</span></div><!-- \u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430--><div class="contacts-list__phone"><span class="contacts-list__text">{{ vm.contact.phone }}</span></div><!-- \u043A \u043A\u0430\u043A\u043E\u0439 \u0433\u0440\u0443\u043F\u043F\u0435 \u043F\u0440\u0438\u043D\u0430\u0434\u043B\u0435\u0436\u0438\u0442--><div class="contacts-list__group" ng-if="vm.contact.contactGroups.length"><div class="contacts-list__group-item" ng-repeat="contactGroup in vm.contact.contactGroups"><svg class="group-icon group-pall--c-8"><use xlink:href="#grid-square"></use></svg> <span class="contacts-list__group-label mrg__left5">{{ contactGroup.name }}</span></div><!--<div class="contacts-list__group-item">--><!--<svg class="group-icon group-pall&#45;&#45;c-3">--><!--<use xlink:href="#grid-square"></use>--><!--</svg>--><!--<span class="contacts-list__group-label mrg__left5">asdsad1</span>--><!--</div>--><!--<div class="contacts-list__group-item">--><!--<svg class="group-icon group-pall&#45;&#45;c-2">--><!--<use xlink:href="#grid-square"></use>--><!--</svg>--><!--<span class="contacts-list__group-label mrg__left5">1dasd</span>--><!--</div>--><!--<div class="contacts-list__group-item">--><!--<svg class="group-icon group-pall&#45;&#45;c-15">--><!--<use xlink:href="#grid-square"></use>--><!--</svg>--><!--<span class="contacts-list__group-label mrg__left5">asds1</span>--><!--</div>--><!--<div class="contacts-list__group-item">--><!--<svg class="group-icon group-pall&#45;&#45;c-4">--><!--<use xlink:href="#grid-square"></use>--><!--</svg>--><!--<span class="contacts-list__group-label mrg__left5">1dsadas</span>--><!--</div>--></div><!-- \u0411\u044B\u0441\u0442\u0440\u043E\u0435 \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u0435--><div class="contacts-list__quik-delete"><a class="contacts-list__link" ng-click="vm.destroy(vm.contact)"><span class="icon-bin contacts-list__icon color--light-red"></span></a></div><!-- \u0411\u044B\u0441\u0442\u0440\u044B\u0439 \u043E\u0442\u0432\u0435\u0442--><div class="contacts-list__new_message"><a class="contacts-list__link" ui-sref="mail.compose({to: vm.contact.email})" ng-click="$event.stopPropagation();"><span class="icon-write contacts-list__icon"></span></a></div></div>');
$templateCache.put('app/components/contact-import-file/contact-import-file-popup.html','<div><div class="popup__close" ng-click="cancel()">\xD7</div><contact-import-file on-close="cancel()"></contact-import-file></div>');
$templateCache.put('app/components/contact-import-file/contact-import-file.html','<div class="contact-import-file"><div class="load-contacts-from-file"><form name="uploadForm" ng-submit="vm.upload(uploadForm)" novalidate><div class="load-contacts-from-file__header"><span class="">\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u044B \u0438\u0437 \u0444\u0430\u0439\u043B\u0430</span></div><div class="load-contacts-from-file__content"><div class="load-contacts-from-file__title">Mail.CZ \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0438\u043C\u043F\u043E\u0440\u0442 \u0432\u0430\u0448\u0438\u0445 \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u043E\u0432 \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u043E\u0432,\u0438\u0437 \u0444\u0430\u0439\u043B\u043E\u0432 \u0432 \u0444\u043E\u0440\u043C\u0430\u0442\u0435 .csv \u0438 vCard.</div><div class="load-contacts-from-file__load-elements" ng-class="{\'is-loaded\': vm.uploadForm.model.file}"><button class="btn btn--yellow btn--size_sm width--aut" type="file" name="file" ng-model="vm.uploadForm.model.file" ngf-select accept="text/x-vcard" ngf-max-size="2MB" ngf-model-invalid="vm.uploadForm.errors" required>\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0444\u0430\u0439\u043B\u044B</button> <span class="load-contacts-from-file__attach-file" ng-if="vm.uploadForm.model.file">{{ vm.uploadForm.model.file.name }} <span class="remove-data-input remove-data-input--small" ng-click="vm.uploadForm.model.file = \'\'"><svg class="remove-data-input__icon"><use xlink:href="#icon-close"></use></svg></span></span><div class="load-contacts-from-file__notif" ng-if="vm.uploadForm.model.file">\u0424\u0430\u0439\u043B \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043F\u0440\u043E\u0430\u043D\u0430\u043B\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u043D\u043E<!--\u0438 \u043D\u0430\u0439\u0434\u0435\u043D\u043E <b class="font__bold color&#45;&#45;yellow font__size16">24</b> \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u0430--></div></div></div><div class="load-contacts-from-file__footer"><hr class="hr hr--top"><button class="btn btn--normal btn--size_sm width--size129 mrg__right10" type="button" ng-click="vm.close()">\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C</button> <button class="btn btn--normal btn--size_sm width--size129" type="submit" ng-disabled="!vm.uploadForm.model.file">\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C</button></div></form></div></div>');
$templateCache.put('app/components/contact-item-list/contact-item-list.html','<div class="contacts-list"><contact-item contact="contact" contacts="vm.contacts" ng-repeat="contact in vm.contacts.items"></contact-item></div>');
$templateCache.put('app/components/contact-other-list/contact-other-list-popover.html','<contact-other-list></contact-other-list>');
$templateCache.put('app/components/contact-other-list/contact-other-list.html','<div class="contact-other-list"><div><a class="contact-other-list__link" href ng-click="vm.openContactImportFilePopup()"><span class="contact-other-list__name">\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u044B \u0438\u0437 \u0444\u0430\u0439\u043B\u0430 </span></a><a class="contact-other-list__link" href ng-click="vm.openContactExportFilePopup()"><span class="contact-other-list__name">\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u044B \u0432 \u0444\u0430\u0439\u043B</span></a></div></div>');
$templateCache.put('app/components/contact-phones/contact-phones.html','<div><div class="edit-contact__add-data edit-contact__add-data--added" ng-repeat="phone in vm.phones"><span class="remove-data-input" ng-click="vm.remove(phone)"><svg class="remove-data-input__icon"><use xlink:href="#icon-close"></use></svg> </span><input class="input input--size_xs input--up-shadow width--size220" type="text" name="phone" ng-model="phone.value"></div><!-- \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0435\u0449\u0435 \u043D\u043E\u043C\u0435\u0440--><div class="edit-contact__add-data mrg__top5"><ng-form name="phoneForm" novalidate><span class="remove-data-input"><svg class="remove-data-input__icon"><use xlink:href="#icon-close"></use></svg> </span><input class="input input--size_xs input--up-shadow width--size220" type="text" name="phone" ng-model="vm.phoneForm.model.phone" ng-keyup="vm.add(phoneForm, $event.keyCode);" placeholder="\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0442\u0435\u043B\u0435\u0444\u043E\u043D" required></ng-form></div></div>');
$templateCache.put('app/components/contact-restore/contact-restore-popup.html','<div><div class="popup__close" ng-click="cancel()">\xD7</div><contact-restore on-close="cancel()"></contact-restore></div>');
$templateCache.put('app/components/contact-restore/contact-restore.html','<div class="contact-group-create"><form name="restoreForm" ng-submit="vm.restoreArchive(restoreForm)" novalidate><div class="restore-contacts"><div class="restore-contacts__header"><span class="">\u0412\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435 \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u043E\u0432</span></div><div class="restore-contacts__content"><div ng-repeat="restore in vm.restore.items"><label style="display: block; margin: 0"><div class="restore-contacts__item" ng-class="{\'is-selected\': restore.isChecked}"><span class="restore-contacts__date">{{ restore.date }}</span> <span class="restore-contacts__count">{{ restore.count }}</span> <input type="checkbox" style="display: none" ng-model="restore.isChecked" data-checklist-model="vm.restore.checked" data-checklist-value="restore"></div></label><!--<span class="restore-contacts__date">11 \u0430\u043F\u0440\u0435\u043B\u044F 2017 5:08</span>--><!--<span class="restore-contacts__count">1 \u043A\u043E\u043D\u0442\u0430\u043A\u0442</span>--></div></div><div class="restore-contacts__footer"><hr class="hr hr--top"><button class="btn btn--normal btn--size_l width--aut float--left" type="submit" ng-disabled="!vm.restore.checked.length">\u0412\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u044B</button></div></div></form></div>');
$templateCache.put('app/components/contact-to-add/contact-to-add-popup.html','<div><div class="popup__close" ng-click="cancel()">\xD7</div><contact-to-add on-cancel="cancel()" on-close="close(result)" addresses="addresses"></contact-to-add></div>');
$templateCache.put('app/components/contact-to-add/contact-to-add.html','<!--<div class="contact-to-add">--><!--</div>--><div class="contact-to-add"><!--<form name="form" novalidate>--><div class="contact-to-add__header"><div class="contact-to-add__header-title mrg__top15 mrg__bottom10">\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043F\u043E\u043B\u0443\u0447\u0430\u0442\u0435\u043B\u0435\u0439</div><div class="contact-to-add__filters"><div><label class="contacts-header__icon all-select-check mrg__right16" ng-class="{\'is-check\': vm.isAllChecked}"><input type="checkbox" style="display: none" ng-model="vm.isAllChecked" ng-change="vm.checkedAllContacts()" ng-disabled="!vm.contacts.items.length"> <svg class="all-select-check__icon"><use xlink:href="#check-box-mark"></use></svg></label></div><!-- \u0432\u044B\u0431\u043E\u0440 \u0433\u0440\u0443\u043F\u043F\u044B --><ui-select ng-model="vm.searchForm.group" class="select-list select-list--size_xs select-list--not-border-of-sides mrg__right10" style="width: 145px!important" theme="select2" title="Choose a person"><ui-select-match class="select-list__body select-list--size_xs width--all" placeholder="\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0433\u0440\u0443\u043F\u043F\u0443">{{ $select.selected.name }}</ui-select-match><ui-select-choices repeat="contactGroup in vm.contactGroup.items"><div ng-bind-html="contactGroup.name"></div></ui-select-choices></ui-select><!-- \u041F\u043E\u0438\u0441\u043A --> <input class="input input--size_s width--size220" type="text" placeholder="\u041F\u043E\u0438\u0441\u043A" ng-model="vm.searchForm.query"></div></div><div class="contact-to-add__contact-list"><label class="contact-to-add__item" ng-repeat="contact in vm.contacts.items | filter: vm.searchForm.query"><input class="contact-to-add__checkbox" type="checkbox" style="display: none" data-checklist-model="vm.contacts.checked" data-checklist-value="contact"><div class="contact-to-add__checkbox-body"><!-- \u0410\u0432\u0430\u0442\u0430\u0440\u043A\u0430--><div class="contact-to-add__contact-avatar"><div class="avatar avatar--settings avatar--size28 avatar--second-style"><img class="avatar__image" src="/images/avatar-personal.svg" ng-if="!vm.firstLetter && !vm.emailLetter"><div class="avatar__symbol-image" ng-if="vm.firstLetter || vm.emailLetter"><div class="avatar__first-name">{{ vm.firstLetter ? vm.firstLetter : vm.emailLetter }}</div><div class="avatar__last-name" ng-if="vm.lastLetter">{{ vm.lastLetter }}</div></div><span class="contact-to-add__check-icon"><svg class="all-select-check__icon"><use xlink:href="#check-box-mark"></use></svg></span></div></div><!-- \u0418\u043C\u044F--><div class="contact-to-add__contact-name"><span class="contact-to-add__text">{{ contact.last_name }} {{ contact.first_name }}</span></div><!-- \u0410\u0434\u0440\u0435\u0441 \u043F\u043E\u0447\u0442\u044B--><div class="contact-to-add__mail-adress"><span class="contact-to-add__text">{{ contact.email }}</span></div></div></label></div><div class="contact-to-add__footer"><hr class="hr hr--top"><button class="btn btn--not-style btn--size_l btn--not-events color--blue width--aut" type="button" ng-click="vm.cancel()">\u041E\u0442\u043C\u0435\u043D\u0430</button> <button class="btn btn--normal btn--size_l width--aut" type="button" ng-click="vm.add()">\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C</button></div><!--</form>--></div>');
$templateCache.put('app/components/contact-to-add-select/contact-to-add-select.html','<ui-select class="select-input-line" multiple="multiple" ng-model="vm.addresses" tagging="vm.makeContact" tagging-label="true" theme="bootstrap"><ui-select-match class="select-input-line__match-tags"><div class="select-input-line__match-item tag-contact font-sizer--bigger-15"><div class="avatar avatar--size20 mrg__right7"><avatar-name name="$item.first_name" email="$item.email"></avatar-name></div><div class="tag-contact__name">{{ $item.first_name }} {{ $item.last_name }}</div><div class="tag-contact__email">{{ $item.email }}</div></div></ui-select-match><ui-select-choices class="select-input-line__choices-tags font-sizer--bigger-15" refresh="vm.findContacts($select.search)" refresh-delay="500" repeat="contact in (vm.contacts.items | filter: $select.search) track by contact.id"><div class="select-input-line__choices-item tag-contact"><div class="avatar avatar--size28 mrg__right16 avatar--bg-color"><avatar-name name="contact.first_name" email="contact.email"></avatar-name></div><div class="tag-contact__name">{{ contact.first_name }} {{ contact.last_name }}</div><div class="tag-contact__email">{{ contact.email }}</div><div class="tag-contact__phone">{{ contact.phone }}</div></div></ui-select-choices><div ui-select-choices-static><div class="ui-select-choices-row pointer" ng-click="vm.openContactToAddPopup()"><div class="ui-select-choices-row-inner"><div class="select-input-line__choices-item tag-contact tag-contact--more"><div class="avatar avatar--size28 mrg__right16 avatar--bg-color"><avatar-name name="\'Contacts\'" email="\'Contacts\'"></avatar-name></div><div class="tag-contact__name"><a class="link">\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0432\u0441\u0435 \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u044B</a></div></div></div></div></div></ui-select>');
$templateCache.put('app/components/contact-view/contact-view-popup.html','<div><div class="popup__close" ng-click="cancel()">\xD7</div><contact-view contact="contact" on-close="cancel()"></contact-view></div>');
$templateCache.put('app/components/contact-view/contact-view.html','<div class="contact-group-create"><div class="viewed-contact"><div class="viewed-contact__header"><span class="">\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438 \u043E \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u0435</span></div><div class="viewed-contact__content"><div class="viewed-contact__column"><div class="viewed-contact__avatar"><div class="avatar avatar--settings avatar--size50 avatar--second-style"><img class="avatar__image" src="/images/avatar-personal.svg"></div></div><div class="viewed-contact__caption"><div class="viewed-contact__contact-name">{{ vm.contact.last_name }} {{ vm.contact.first_name }}</div><div class="viewed-contact__control-elements"><button class="btn btn--normal btn--size_sm width--aut mrg__right7" type="button" ui-sref="mail.compose({to: vm.contact.emails[0].value})" ng-click="vm.close()">\u041D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u043F\u0438\u0441\u044C\u043C\u043E</button> <button class="btn btn--normal btn--size_sm width--aut flex align-items--cn mrg__right7" type="button" ui-sref="mail.compose({to: vm.contact.emails[0].value})" ng-click="vm.close()"><svg class="svg-icon mrg__right10"><use xlink:href="#conacts-sort-message"></use></svg> \u041F\u0435\u0440\u0435\u043F\u0438\u0441\u043A\u0430</button> <button class="btn btn--normal btn--size_sm width--aut flex align-items--cn mrg__right7"><svg class="svg-icon svg-icon--red"><use xlink:href="#conacts-add-black-list"></use></svg></button> <button class="btn btn--normal btn--size_sm width--aut icon-attach font__size16"></button></div></div></div><div class="viewed-contact__column"><hr class="hr hr--top"><div class="viewed-contact__left"><!-- \u0410\u0434\u0440\u0435\u0441\u0430 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0439 \u043F\u043E\u0447\u0442\u044B--><div class="viewed-contact__item" ng-if="vm.contact.emails.length"><span class="viewed-contact__icon"><svg class="svg-icon"><use xlink:href="#conact-icon-mail"></use></svg> </span><!-- \u0441\u043F\u0438\u0441\u043E\u043A--><div class="viewed-contact__emails"><div ng-repeat="email in vm.contact.emails"><a class="viewed-contact__link" href>{{ email.value }}</a></div></div></div><!-- \u0422\u0443\u0442 \u0432\u0432\u043E\u0434\u0438\u0442\u0441\u044F \u0433\u0440\u0443\u043F\u043F\u044B--><div class="viewed-contact__item" ng-if="vm.contact.contactGroups.length"><span class="viewed-contact__icon"><svg class="svg-icon"><use xlink:href="#conacts-add-group"></use></svg> </span><!-- \u0441\u043F\u0438\u0441\u043E\u043A--><div class="viewed-contact__groups"><span class="viewed-contact__group-item" ng-repeat="contactGroup in vm.contact.contactGroups"><svg class="viewed-contact__group-item__icon group-icon group-pall--c-1"><use xlink:href="#grid-square"></use></svg> {{ contactGroup.name }}</span></div></div><!-- \u0422\u0443\u0442 \u0432\u0432\u043E\u0434\u0438\u0442\u0441 \u043D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430--><div class="viewed-contact__item" ng-if="vm.contact.phones.length"><span class="viewed-contact__icon"><svg class="svg-icon"><use xlink:href="#contact-phone"></use></svg> </span><!-- \u0441\u043F\u0438\u0441\u043E\u043A--><div class="viewed-contact__phones"><span class="viewed-contact__number-phone" ng-repeat="phone in vm.contact.phones">{{ phone.value }}</span></div></div><!-- \u0434\u0430\u0442\u0430 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F--><div class="viewed-contact__item" ng-if="vm.contact.birthday"><span class="viewed-contact__icon"><svg class="svg-icon"><use xlink:href="#contact-birthday"></use></svg></span><div class="viewed-contact__birthday">{{ vm.getDate(vm.contact.birthday) }}</div></div></div><div class="viewed-contact__right"><div class="viewed-contact__item align-items--st" ng-if="vm.contact.comment"><span class="viewed-contact__icon"><svg class="svg-icon"><use xlink:href="#conact-comment"></use></svg></span><div class="viewed-contact__text-field"><span>{{ vm.contact.comment }}</span></div></div></div></div><hr class="hr hr--bottom"></div><div class="viewed-contact__footer"><button class="btn btn--normal btn--size_sm width--aut float--left" type="button" ng-click="vm.openContactEditPopup()">\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C</button></div></div></div>');
$templateCache.put('app/components/email-change/email-change-popup.html','<div><div class="popup__close" ng-click="cancel()">\xD7</div><email-change on-close="cancel()"></email-change></div>');
$templateCache.put('app/components/email-change/email-change.html','<div class="email-change"><div class="email-change__header"><span class="email-change__title">\u0421\u043C\u0435\u043D\u0438\u0442\u044C email</span></div><div class="email-change__content"><form name="emailForm" ng-submit="vm.changeEmail(emailForm)" novalidate><div class="email-change__input"><div class="email-change__field-input"><div class="email-change__caption-input mrg__right10"><span class="font__size13">\u041D\u043E\u0432\u044B\u0439 Email</span></div><div><input class="input input--size_s width--size220 input--fc-sh-yellow" type="email" name="email" ng-model="vm.emailForm.model.email" required></div></div></div><!--Server error--><div>{{ vm.error }}</div><div class="email-change__footer position"><hr class="hr hr--top"><button class="btn btn--normal btn--size_l width--size168 mrg__right16" type="button" ng-click="vm.close()">\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C</button> <button class="btn btn--yellow btn--size_l width--size168" type="submit">\u0421\u043C\u0435\u043D\u0438\u0442\u044C</button></div></form></div></div>');
$templateCache.put('app/components/example/example.html','<div class="card exp-parcel-card"><div class="card__header exp-parcel-card__header"><div class="row"><div class="col-md-7 col-sm-7 col-xs-7"><div class="exp-parcel-card__name pointer"><span>\u041D\u043E\u0432\u044B\u0439 \u0430\u0434\u0440\u0435\u0441</span></div></div><div class="col-md-5 col-sm-5 col-xs-5"><a class="exp-parcel-card__button" href ng-click="vm.close()"><img class="svg svg--size16" src="/images/svg/products-warehouse/card/close.svg"></a></div></div></div><div class="card__body exp-parcel-card__body row"><form class="col-lg-12 col-md-12 col-sm-12 col-xs-12" name="addressForm" ng-submit="vm.add(addressForm)" novalidate><div class="row"><div class="col-md-6"><label class="form__label">\u041F\u0440\u0438\u0432\u044F\u0437\u0430\u0442\u044C \u043F\u043E\u043B\u0443\u0447\u0430\u0442\u0435\u043B\u044F:</label><recipient-select selected="vm.addressForm.recipient" model=""></recipient-select></div><div class="col-md-6 mobile-group--size10"><label class="form__label">\u0421\u0442\u0440\u0430\u043D\u0430:</label><country-select selected="vm.addressForm.country" name="country" params="{id: \'USA\'}" required="true" is-no-select="true" on-selected="vm.clearAfterCountry()"></country-select><tooltip-validation ng-if="addressForm.country.$invalid && (addressForm.$submitted || addressForm.country.$touched)" tooltip-placement="bottom" tooltip-validation-errors="addressForm.country.$error" tooltip-validation-messages="vm.address.validations.country"></tooltip-validation></div><div class="col-md-6 form__group--size10"><label class="form__label">\u0420\u0435\u0433\u0438\u043E\u043D:</label><region-select name="region" selected="vm.addressForm.region" country-id="vm.addressForm.country.id" required="true" disabled="vm.addressForm.country.id" on-selected="vm.clearAfterRegion()"></region-select><tooltip-validation ng-if="addressForm.region.$invalid && (addressForm.$submitted || addressForm.region.$touched) && addressForm.country.$valid" tooltip-placement="bottom" tooltip-validation-errors="addressForm.region.$error" tooltip-validation-messages="vm.address.validations.region"></tooltip-validation></div><div class="col-md-6 form__group--size10"><label class="form__label">\u0413\u043E\u0440\u043E\u0434:</label><city-select name="city" selected="vm.addressForm.city" region-id="vm.addressForm.region.id" disabled="vm.addressForm.region.id" required="true" on-selected="vm.clearAfterCity()"></city-select><tooltip-validation ng-if="addressForm.city.$invalid && (addressForm.$submitted || addressForm.city.$touched) && addressForm.region.$valid" tooltip-placement="bottom" tooltip-validation-errors="addressForm.city.$error" tooltip-validation-messages="vm.address.validations.city"></tooltip-validation></div><div class="col-md-6 form__group--size10"><label class="form__label">\u0418\u043D\u0434\u0435\u043A\u0441:</label><input class="form__input" type="text" name="postalCode" ng-model="vm.addressForm.postalCode" required><tooltip-validation ng-if="addressForm.postalCode.$invalid && (addressForm.$submitted || addressForm.postalCode.$touched) && addressForm.city.$valid" tooltip-placement="bottom" tooltip-validation-errors="addressForm.postalCode.$error" tooltip-validation-messages="vm.address.validations.postalCode"></tooltip-validation></div><div class="col-md-6 form__group--size10"><label class="form__label">\u0423\u043B\u0438\u0446\u0430:</label><input class="form__input" type="text" name="street" ng-model="vm.addressForm.street" required><tooltip-validation ng-if="addressForm.street.$invalid && (addressForm.$submitted || addressForm.street.$touched) && addressForm.postalCode.$valid" tooltip-placement="bottom" tooltip-validation-errors="addressForm.street.$error" tooltip-validation-messages="vm.address.validations.street"></tooltip-validation></div><div class="col-md-12 form__group--size10"><label class="form__label">\u0414\u043E\u043C, \u043A\u043E\u0440\u043F\u0443\u0441, \u043A\u0432\u0430\u0440\u0442\u0438\u0440\u0430:</label><div class="row-inputs clearfix"><div class="row-inputs__item w50"><input class="form__input" type="text" name="house" ng-model="vm.addressForm.house" required><tooltip-validation ng-if="addressForm.house.$invalid && (addressForm.$submitted || addressForm.house.$touched) && addressForm.street.$valid" tooltip-placement="bottom" tooltip-validation-errors="addressForm.house.$error" tooltip-validation-messages="vm.address.validations.house"></tooltip-validation></div><div class="row-inputs__item w25"><input class="form__input" type="text" name="building" ng-model="vm.addressForm.building"><tooltip-validation ng-if="addressForm.building.$invalid && (addressForm.$submitted || addressForm.building.$touched) && addressForm.house.$valid" tooltip-placement="bottom" tooltip-validation-errors="addressForm.building.$error" tooltip-validation-messages="vm.address.validations.building"></tooltip-validation></div><div class="row-inputs__item w25"><input class="form__input" type="text" name="apartment" ng-model="vm.addressForm.apartment"><tooltip-validation ng-if="addressForm.apartment.$invalid && (addressForm.$submitted || addressForm.apartment.$touched) && addressForm.building.$valid" tooltip-placement="bottom" tooltip-validation-errors="addressForm.apartment.$error" tooltip-validation-messages="vm.address.validations.apartment"></tooltip-validation></div></div></div></div><div class="col-md-12 form__buttons__group text-center"><button class="btn-round btn-round--grey" type="button" ng-click="vm.close()">\u041E\u0442\u043C\u0435\u043D\u0430</button> <button class="btn-round btn-round--blue" type="submit">\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C</button></div></form></div></div>');
$templateCache.put('app/components/folder-edit/folder-edit-popup.html','<div><div class="popup__close" ng-click="cancel()">\xD7</div><folder-edit model="model" on-\u0441lose="cancel()"></folder-edit></div>');
$templateCache.put('app/components/folder-edit/folder-edit.html','<div class="folder-create"><div class="tag-create__title">\u041F\u0435\u0440\u0435\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u0442\u044C \u043F\u0430\u043F\u043A\u0443</div><div class="mrg__top15"><form name="form" ng-submit="vm.update(form)" novalidate><div class="folder-create__input mrg__top15"><div class="mrg__right10"><span class="font__size13">\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435</span></div><div><input class="input input--size_s width--inh input--fc-sh-yellow" name="mboxnew" ng-model="vm.form.model.mboxnew" type="text" required><!--<a class="link link&#45;&#45;dotted link&#45;&#45;violet font__size13" href="">\u0412\u043B\u043E\u0436\u0438\u0442\u044C \u0432 \u0434\u0440\u0443\u0433\u0443\u044E \u043F\u0430\u043F\u043A\u0443</a>--></div></div><div class="folder-create__btn mrg__top40"><button class="btn-y btn-y--border" type="submit">\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C</button> <button class="btn-y btn-y--border" type="button" ng-click="vm.close()">\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C</button></div></form></div></div>');
$templateCache.put('app/components/folder-create/folder-create-popup.html','<div><div class="popup__close" ng-click="cancel()">\xD7</div><folder-create on-\u0441lose="cancel()"></folder-create></div>');
$templateCache.put('app/components/folder-create/folder-create.html','<div class="folder-create"><div class="tag-create__title">\u0421\u043E\u0437\u0434\u0430\u0451\u043C \u043F\u0430\u043F\u043A\u0443</div><div class="mrg__top15"><form name="form" ng-submit="vm.create(form)" novalidate><div class="folder-create__input mrg__top15"><div class="mrg__right10"><span class="font__size13">\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435</span></div><div><input class="input input--size_s width--inh input--fc-sh-yellow" name="mboxnew" ng-model="vm.form.model.mboxnew" type="text" required><!--<a class="link link&#45;&#45;dotted link&#45;&#45;violet font__size13" href="">\u0412\u043B\u043E\u0436\u0438\u0442\u044C \u0432 \u0434\u0440\u0443\u0433\u0443\u044E \u043F\u0430\u043F\u043A\u0443</a>--></div></div><div class="folder-create__btn mrg__top40"><button class="btn-y btn-y--border" type="submit">\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043F\u0430\u043F\u043A\u0443</button> <button class="btn-y btn-y--border" type="button" ng-click="vm.close()">\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C</button></div></form></div></div>');
$templateCache.put('app/components/folder-list/folder-list-popover.html','<folder-list messages="vm.messages"></folder-list>');
$templateCache.put('app/components/folder-list/folder-list.html','<div class="folder-list"><div class="folder-list__body"><!--\u041F\u043E\u043A\u0430 \u0447\u0442\u043E \u0441\u043A\u0440\u044B\u0432\u0430\u0435\u043C--><!--<input type="text">--></div><div><a class="folder-list__link" href ng-repeat="folder in vm.folders.items" ng-click="vm.move(folder)" ng-class="{\n            \'folder-list__link--sub\': folder.isSub,\n            \'folder-list__link--disabled\': vm.$state.params.mbox === folder.name\n           }"><span class="folder-list__name">{{ folder.caption }}</span></a></div><hr class="hr"><div><a class="folder-list__link folder-list__link--new" href ng-click="vm.openFolderCreatePopup()"><span class="folder-list__name">\u041D\u043E\u0432\u0430\u044F \u043F\u0430\u043F\u043A\u0430...</span></a></div></div>');
$templateCache.put('app/components/folder-settings/folder-settings-popover.html','<folder-list messages="vm.messages"></folder-list>');
$templateCache.put('app/components/folder-settings/folder-settings.html','<div class="tags-settings"><div class="tags-settings__title main-title-text">\u041F\u0430\u043F\u043A\u0438</div><div class="tags-settings__content"><div class="tags-settings__fields"><div ng-repeat="folder in vm.folders.items"><div class="tags-settings__item mrg__bottom5" ng-class="{\'tags-settings__item--active\': folder.isSelected}" ng-click="vm.select(folder)" ng-if="!folder.isSub"><div class="tags-settings__title">{{ folder.caption }}</div><div class="tags-settings__values">{{ folder.messagesCount }}</div></div><!--Sub--><div class="tags-settings__item tags-settings__attach mrg__bottom5" ng-class="{\'tags-settings__item--active\': folder.isSelected}" ng-click="vm.select(folder)" ng-if="folder.isSub"><div class="tags-settings__item mrg__bottom5"><div class="tags-settings__title">{{ folder.caption }}</div><div class="tags-settings__values">{{ folder.messagesCount }}</div></div></div></div><!--            <div class="tags-settings__item tags-settings__attach mrg__bottom5">\n                            <div class="tags-settings__item tags-settings__attach&#45;&#45;hide">\n                                <div class="tags-settings__title">\u041F\u0430\u043F\u043A\u0430</div>\n                                <div class="tags-settings__values">2</div>\n                            </div>\n\n                            <div class="tags-settings__attach">\n                                <div class="tags-settings__item mrg__bottom5">\n                                    <div class="tags-settings__title">\u0412\u043B\u043E\u0436\u0435\u043D\u043D\u0430\u044F \u043F\u0430\u043F\u043A\u0430</div>\n                                    <div class="tags-settings__values">2</div>\n                                </div>\n                            </div>\n                        </div>--><!--            <div class="tags-settings__item mrg__bottom5">\n                            <div class="tags-settings__title">\u041E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0435</div>\n                            <div class="tags-settings__values">2</div>\n                        </div>\n\n                        <div class="tags-settings__item mrg__bottom5">\n                            <div class="tags-settings__title">\u0423\u0434\u0430\u043B\u0435\u043D\u043D\u044B\u0435</div>\n                            <div class="tags-settings__values">2</div>\n                        </div>\n\n                        <div class="tags-settings__item mrg__bottom5">\n                            <div class="tags-settings__title">\u0421\u043F\u0430\u043C</div>\n                            <div class="tags-settings__values">6 / 7</div>\n                        </div>\n\n                        <div class="tags-settings__item mrg__bottom5">\n                            <div class="tags-settings__title">\u0427\u0435\u0440\u043D\u043E\u0432\u0438\u043A\u0438</div>\n                            <div class="tags-settings__values">-</div>\n                        </div>\n\n                        <div class="tags-settings__item mrg__bottom5">\n                            <div class="tags-settings__title">\u0418\u0441\u0445\u043E\u0434\u044F\u0449\u0438\u0435</div>\n                            <div class="tags-settings__values">2</div>\n                        </div>--></div><div class="tags-settings__control"><div class="mrg__top"><!----> <button class="btn btn--normal btn--size_sm width--size150 mrg__bottom4" ng-click="vm.openFolderCreatePopup()">\u041D\u043E\u0432\u0430\u044F \u043F\u0430\u043F\u043A\u0430</button><!--<button class="btn btn&#45;&#45;normal btn&#45;&#45;size_sm width&#45;&#45;size150 mrg__bottom4">\u0412\u043B\u043E\u0436\u0435\u043D\u043D\u0430\u044F \u043F\u0430\u043F\u043A\u0430</button>--> <button class="btn btn--normal btn--size_sm width--size150 mrg__bottom4" ng-disabled="!vm.selected.isSub || vm.selected.name === \'Archive\'" ng-click="vm.openFolderEditPopup()">\u041F\u0435\u0440\u0435\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u0442\u044C</button> <button class="btn btn--normal btn--size_sm width--size150 mrg__bottom4" ng-disabled="!vm.selected.isSub || vm.selected.name === \'Archive\'" ng-click="vm.destroy()">\u0423\u0434\u0430\u043B\u0438\u0442\u044C</button><!--<button class="btn btn&#45;&#45;normal btn&#45;&#45;size_sm width&#45;&#45;size150 mrg__bottom4">\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043F\u0440\u0430\u0432\u0438\u043B\u043E</button>--></div><!--<div class="mrg__bottom">--><!--<div class="notific">--><!--\u041F\u043E\u043C\u0435\u0442\u0438\u0442\u044C \u0432\u0441\u0435 \u043F\u0438\u0441\u044C\u043C\u0430 \u0432 \u043F\u0430\u043F\u043A\u0435 \u043A\u0430\u043A <a class="notific__link notific__link&#45;&#45;dotted"--><!--href="">\u043F\u0440\u043E\u0447\u0438\u0442\u0430\u043D\u043D\u044B\u0435</a>--><!--</div>--><!--</div>--></div></div><div class="form__field-item"></div></div>');
$templateCache.put('app/components/inbox-header/inbox-header.html','<div class="inbox-header font-sizer--bigger-15"><div class="inbox-header__row"><div class="inbox-header__item inbox-header__item--checked" ng-if="vm.$state.current.name == \'mail.inbox\'"><div class="checkbox-y checkbox-y--size14"><label class="checkbox-y__label"><input class="checkbox-y__input" type="checkbox" ng-model="vm.isAllChecked" ng-change="vm.checkedAllMessages()" ng-disabled="!vm.messages.items.length"><div class="checkbox-y__body"><span class="checkbox-y__icon"></span></div></label></div></div><!--<div class="inbox-header__item">--><!--<a class="inbox-header__link" ui-sref="mail.compose">--><!--<span class="icon-write inbox-header__icon inbox-header__icon&#45;&#45;blue"></span>--><!--<span class="inbox-header__name">\u041D\u0430\u043F\u0438\u0441\u0430\u0442\u044C</span>--><!--</a>--><!--</div>--><div class="inbox-header__item" ng-if="vm.$state.current.name === \'mail.message\'"><a class="inbox-header__link" href ng-click="vm.goToAnswer()"><span class="icon-write inbox-header__icon inbox-header__icon--blue"></span> <span class="inbox-header__name">\u041E\u0442\u0432\u0435\u0442\u0438\u0442\u044C</span></a></div><!--<div class="inbox-header__item" ng-if="false">--><!--<a class="inbox-header__link" ng-click="vm.syncMail()">--><!--<span class="icon-redo inbox-header__icon inbox-header__icon&#45;&#45;green"></span>--><!--<span class="inbox-header__name">\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C</span>--><!--</a>--><!--</div>--><!--ui-sref="mail.compose({id: vm.messages.checked[0].number, mbox: vm.messages.checked[0].mbox})"--><div class="inbox-header__item"><a class="inbox-header__link" href ng-class="{\'inbox-header__link--disabled\': !vm.messages.checked.length}" ng-click="vm.goToFwd()" ng-disabled="true"><span class="icon-forward inbox-header__icon inbox-header__icon--blue"></span> <span class="inbox-header__name">\u041F\u0435\u0440\u0435\u0441\u043B\u0430\u0442\u044C</span></a></div><div class="inbox-header__item"><a class="inbox-header__link" href ng-class="{\'inbox-header__link--disabled\': !vm.messages.checked.length}" ng-if="vm.$state.params.mbox !== \'Trash\'" ng-click="vm.move({name: \'Trash\'})"><span class="icon-bin inbox-header__icon inbox-header__icon--red"></span> <span class="inbox-header__name">\u0423\u0434\u0430\u043B\u0438\u0442\u044C</span> </a><a class="inbox-header__link" href ng-class="{\'inbox-header__link--disabled\': !vm.messages.checked.length}" ng-if="vm.$state.params.mbox === \'Trash\'" ng-click="vm.destroy({name: \'Trash\'})"><span class="icon-bin inbox-header__icon inbox-header__icon--red"></span> <span class="inbox-header__name">\u0423\u0434\u0430\u043B\u0438\u0442\u044C</span></a></div><div class="inbox-header__item"><a class="inbox-header__link" href ng-class="{\'inbox-header__link--disabled\': !vm.messages.checked.length}" ng-if="vm.$state.params.mbox !== \'Junk\'" ng-click="vm.move({name: \'Junk\'})"><span class="icon-spam inbox-header__icon inbox-header__icon--yellow"></span> <span class="inbox-header__name">\u0421\u043F\u0430\u043C</span> </a><a class="inbox-header__link" href ng-class="{\'inbox-header__link--disabled\': !vm.messages.checked.length}" ng-if="vm.$state.params.mbox === \'Junk\'" ng-click="vm.move({name: \'Inbox\'})"><span class="icon-redo inbox-header__icon inbox-header__icon--blue"></span> <span class="inbox-header__name">\u041D\u0435 \u0441\u043F\u0430\u043C</span></a></div><div class="inbox-header__item"><a class="inbox-header__link" href ng-class="{\'inbox-header__link--disabled\': !vm.messages.checked.length}" ng-click="vm.triggerSeen()"><span class="icon-unread inbox-header__icon inbox-header__icon--blue"></span> <span class="inbox-header__name" ng-if="vm.isSeen">\u041D\u0435 \u043F\u0440\u043E\u0447\u0438\u0442\u0430\u043D\u043E</span> <span class="inbox-header__name" ng-if="!vm.isSeen">\u041F\u0440\u043E\u0447\u0438\u0442\u0430\u043D\u043E</span></a></div><div class="inbox-header__item"><a class="inbox-header__link" href ng-if="vm.messages.checked.length" uib-popover-template="\'app/components/tag-list/tag-list-popover.html\'" popover-class="popover--tag-list" popover-placement="bottom" popover-animation="true" popover-trigger="\'outsideClick\'" ng-class="{\'inbox-header__link--disabled\': !vm.messages.checked.length}"><span class="icon-tag inbox-header__icon inbox-header__icon--blue"></span><div class="inbox-header__name">\u041C\u0435\u0442\u043A\u0430 <span class="icon-arrow-down inbox-header__name-icon"></span></div></a><a class="inbox-header__link inbox-header__link--disabled" ng-if="!vm.messages.checked.length"><span class="icon-tag inbox-header__icon inbox-header__icon--blue"></span><div class="inbox-header__name">\u041C\u0435\u0442\u043A\u0430 <span class="icon-arrow-down inbox-header__name-icon opacity--0"></span></div></a></div><div class="inbox-header__item"><a class="inbox-header__link" href ng-if="vm.messages.checked.length" uib-popover-template="\'app/components/folder-list/folder-list-popover.html\'" popover-class="popover--folder-list" popover-placement="bottom" popover-animation="true" popover-trigger="\'outsideClick\'"><span class="icon-folder inbox-header__icon inbox-header__icon--blue"></span><div class="inbox-header__name">\u0412 \u043F\u0430\u043F\u043A\u0443 <span class="icon-arrow-down inbox-header__name-icon"></span></div></a><a class="inbox-header__link inbox-header__link--disabled" ng-if="!vm.messages.checked.length"><span class="icon-folder inbox-header__icon inbox-header__icon--blue"></span><div class="inbox-header__name">\u0412 \u043F\u0430\u043F\u043A\u0443 <span class="icon-arrow-down inbox-header__name-icon opacity--0"></span></div></a></div><div class="inbox-header__item"><a class="inbox-header__link" href ng-class="{\'inbox-header__link--disabled\': !vm.messages.checked.length}" ng-click="vm.move({name: \'Archive\'})"><span class="icon-archive inbox-header__icon inbox-header__icon--blue"></span> <span class="inbox-header__name">\u0410\u0440\u0445\u0438\u0432\u0438\u0440\u043E\u0432\u0430\u0442\u044C</span></a></div><!--<div class="inbox-header__item">--><!--<a class="inbox-header__link" href--><!--ng-class="{\'inbox-header__link&#45;&#45;disabled\': !vm.messages.checked.length}">--><!--<span class="icon-pin inbox-header__icon inbox-header__icon&#45;&#45;blue"></span>--><!--<span class="inbox-header__name">\u0417\u0430\u043A\u0440\u0435\u043F\u0438\u0442\u044C</span>--><!--</a>--><!--</div>--><!--<div class="inbox-header__item">--><!--<a class="inbox-header__link" href--><!--ng-class="{\'inbox-header__link&#45;&#45;disabled\': !vm.messages.checked.length}">--><!--<span class="icon-more inbox-header__icon inbox-header__icon&#45;&#45;blue"></span>--><!--<span class="inbox-header__name">\u0415\u0449\u0435</span>--><!--</a>--><!--</div>--></div></div>');
$templateCache.put('app/components/inbox-message/inbox-message.html','<div class="inbox-message pointer" ng-class="{\'inbox-message--importmant\': vm.message.important, \'inbox-message--new\': !vm.message.seen}" ng-mouseover="vm.message.hover = true" ng-mouseleave="vm.message.hover = false" inbox-message-hover ng-click="vm.goToUrl()"><div ng-click="vm.setImportant(); $event.stopPropagation();"><div class="inbox-message__importance pointer" ng-class="{\'opacity--0\': !vm.message.hover && !vm.message.important}"><span class="icon-important"></span></div></div><div><div class="inbox-message__checked"><div class="checkbox-y checkbox-y--size14" ng-click="$event.stopPropagation();"><label class="checkbox-y__label"><input class="checkbox-y__input" type="checkbox" data-checklist-model="vm.messages.checked" data-checklist-value="vm.message"><div class="checkbox-y__body"><span class="checkbox-y__icon"></span></div></label></div></div></div><div><div class="inbox-message__avatar"><!--<div class="avatar avatar&#45;&#45;size30">--><!--<img class="avatar__image" src="/images/avatar.png">--><!--</div>--><avatar-name class="avatar avatar--settings avatar--size30 avatar--second-style mrg__auto" name="vm.message.from" email="vm.message.fromAddress" ng-if="vm.$state.params.mbox !== \'Sent\' && vm.$state.params.mbox !== \'Drafts\'"></avatar-name><avatar-name class="avatar avatar--settings avatar--size30 avatar--second-style mrg__auto" name="vm.message.to[0].name" email="vm.message.to[0].address" ng-if="vm.$state.params.mbox === \'Sent\' || vm.$state.params.mbox === \'Drafts\'"></avatar-name></div></div><div><div class="inbox-message__name" ng-if="vm.$state.params.mbox !== \'Sent\'">{{ vm.message.from }}</div><div class="inbox-message__name" ng-if="vm.$state.params.mbox === \'Sent\' || vm.$state.params.mbox === \'Drafts\'">{{ vm.message.to[0].address }}</div></div><div><!--ng-click="vm.message.active = !vm.message.active; $event.stopPropagation();">--><div class="inbox-message__round pointer" ng-click="vm.setSeen(); $event.stopPropagation();"><div class="round" ng-class="{\n                        \'round--border\': vm.message.hover,\n                        \'round--yellow\': !vm.message.seen\n                     }"></div></div></div><div ng-if="false"><div class="inbox-message__folder"><span class="icon-incoming"></span></div></div><div><div class="inbox-message__labels"><div class="label-ydx inbox-message__label" ng-repeat="tag in vm.message.tags track by $index" style="background: {{ tag.bgcolor }}">{{ tag.tag_name }}</div></div></div><div class="inbox-message__text"><div class="inbox-message__subject">{{ vm.message.Subject }}</div><div class="inbox-message__message" ng-bind-html="vm.message.body"></div></div><div class="inbox-message__attach" ng-if="vm.message.attachments"><span class="icon-attach"></span></div><div><div class="inbox-message__data"><to-date date="vm.message.date.date" is-small="true"></to-date></div></div></div>');
$templateCache.put('app/components/inbox-message-list/inbox-message-list.html','<div class="inbox-message-list"><inbox-message messages="vm.messages" message="message" ng-repeat="message in vm.messages.items"></inbox-message></div>');
$templateCache.put('app/components/message-alert-send/message-alert-send.html','<div class="message-alert-send" ng-show="vm.isShow"><div class="message-alert-send__message">\u041F\u0438\u0441\u044C\u043C\u043E \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043D\u043E</div><a class="message-alert-send__close" href ng-click="vm.close()"><span class="icon-close-thin"></span></a></div>');
$templateCache.put('app/components/paginate-button/paginate-button.html','<button class="btn-y btn-y--border btn-y--size30 btn--act-y-only-shw" ng-if="vm.data._links.next" ng-click="vm.get(vm.data._links.next.href)">\u0415\u0449\u0435 \u043F\u0438\u0441\u044C\u043C\u0430</button>');
$templateCache.put('app/components/password-change/password-change-popup.html','<div><div class="popup__close" ng-click="cancel()">\xD7</div><password-change on-close="cancel()"></password-change></div>');
$templateCache.put('app/components/password-change/password-change.html','<div class="password-change"><div class="password-change__header"><span class="password-change__title">\u0418\u0417\u041C\u0415\u041D\u0415\u041D\u0418\u0415 \u041F\u0410\u0420\u041E\u041B\u042F</span></div><div class="password-change__content"><form name="passwordForm" ng-submit="vm.changePassword(passwordForm)" novalidate><div class="password-change__field-input mrg__top15"><div class="password-change__caption-input mrg__right10"><span class="font__size13">\u041D\u043E\u0432\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C</span></div><div class="position"><input class="input input--size_s width--size220 input--fc-sh-yellow" type="password" name="new_password" ng-model="vm.passwordForm.model.new_password" required><div class="password-change__view btn btn--not-style btn--size_l btn--view-pass"></div></div></div><div class="password-change__field-input mrg__top15 mrg__bottom25"><div class="password-change__caption-input mrg__right10" class="position"><span class="font__size13">\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u044C \u043F\u0430\u0440\u043E\u043B\u044C</span></div><div><input class="input input--size_s width--size220 input--fc-sh-yellow" type="password" name="new_password_conf" ng-model="vm.passwordForm.model.new_password_conf" required></div></div><!--Server error--><div>{{ vm.error }}</div><div class="password-change__footer position"><hr class="hr hr--top"><button class="btn btn--normal btn--size_l width--size168 mrg__right16" type="button" ng-click="vm.close()">\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C</button> <button class="btn btn--yellow btn--size_l width--size168" type="submit">\u0421\u043E\u0445\u0440\u0430\u043D\u044F\u0442\u044C</button></div></form></div></div>');
$templateCache.put('app/components/phone-change/phone-change-popup.html','<div><div class="popup__close" ng-click="cancel()">\xD7</div><phone-change on-close="cancel()"></phone-change></div>');
$templateCache.put('app/components/phone-change/phone-change.html','<div class="phone-change"><div class="phone-change__header"><span class="phone-change__title">\u0421\u043C\u0435\u043D\u0438\u0442\u044C phone</span></div><div class="phone-change__content"><form name="phoneForm" ng-submit="vm.changePhone(phoneForm)" novalidate><div class="phone-change__input"><div class="phone-change__field-input"><div class="phone-change__caption-input mrg__right10"><span class="font__size13">\u041D\u043E\u0432\u044B\u0439 Email</span></div><div><input class="input input--size_s width--size220 input--fc-sh-yellow" type="text" name="phone" ng-model="vm.phoneForm.model.phone" ui-mask-placeholder ui-mask-placeholder-char="x" ui-mask="+999 999-999-999" required></div></div></div><!--Server error--><div>{{ vm.error }}</div><div class="phone-change__footer position"><hr class="hr hr--top"><button class="btn btn--normal btn--size_l width--size168 mrg__right16" type="button" ng-click="vm.close()">\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C</button> <button class="btn btn--yellow btn--size_l width--size168" type="submit">\u0421\u043C\u0435\u043D\u0438\u0442\u044C</button></div></form></div></div>');
$templateCache.put('app/components/search-mail/search-mail-popover.html','<div class="search-filters"><div class="search-filters__item"><ui-select ng-model="vm.searchParts.selected" search-enabled="false" class="select-list select-list--size_m select-list--not-border-of-sides width--inh" theme="select2" on-select="vm.search()"><ui-select-match class="select-list__body select-list--size_m width--inh" placeholder="\u0418\u0441\u043A\u0430\u0442\u044C \u043F\u043E \u0432\u0441\u0435\u043C\u0443 \u043F\u0438\u0441\u044C\u043C\u0443">{{ $select.selected.name }}</ui-select-match><ui-select-choices repeat="item in vm.searchParts.list track by $index"><div ng-bind-html="item.name"></div></ui-select-choices></ui-select></div><div class="search-filters__item"><ui-select ng-model="vm.folders.selected" class="select-list select-list--size_m select-list--not-border-of-sides width--inh" search-enabled="false" theme="select2" on-select="vm.search()"><ui-select-match class="select-list__body select-list--size_m width--inh">{{ $select.selected.caption }}</ui-select-match><ui-select-choices repeat="item in vm.folders.items track by $index"><div ng-class="{\'mrg__left10\': item.isSub}" ng-bind-html="item.caption"></div></ui-select-choices></ui-select></div><div class="search-filters__item"><ui-select ng-model="vm.tags.selected" search-enabled="false" class="select-list select-list--size_m select-list--not-border-of-sides width--inh" theme="select2" on-select="vm.search()"><ui-select-match class="select-list__body select-list--size_m width--inh" placeholder="\u0418\u0441\u043A\u0430\u0442\u044C \u043F\u043E \u0432\u0441\u0435\u043C\u0443 \u043F\u0438\u0441\u044C\u043C\u0443">{{ $select.selected.tag_name }}</ui-select-match><ui-select-choices repeat="item in vm.tags.items track by $index">{{ item.tag_name }}</ui-select-choices></ui-select></div><div class="search-filters__item"><label class="checkbox-y__label checkbox-y checkbox-y--size15" for="isAttach"><input class="checkbox-y__input" id="isAttach" type="checkbox" name="isAttach" ng-model="vm.searchForm.isAttach" ng-change="vm.search()" value="important"><div class="checkbox-y__body"><span class="checkbox-y__icon"></span></div><span class="checkbox__text" role="presentation">\u0421 \u0432\u043B\u043E\u0436\u0435\u043D\u0438\u044F\u043C\u0438</span></label></div><div ng-if="vm.isOpenDate"><div class="search-filters__item"><div class="">\u0423\u043A\u0430\u0437\u0430\u0442\u044C \u0442\u043E\u0447\u043D\u044B\u0435 \u0434\u0430\u0442\u044B</div></div><div class="search-filters__item"><div class="search-filters__exact-date"><div class="dropdown"><a class="dropdown-toggle" id="dLabel" role="button" data-toggle="dropdown" data-target=".dropdown1" href="#"><input class="input input&--size_sm input--fc-sh-yellow width--all" type="text" name="start" placeholder="01.01.2000" ng-change="vm.search()" ng-model="vm.date.start | date:\'dd.MM.yyyy\'"></a><div class="dropdown-menu dropdown-menu--calendar" role="menu" aria-labelledby="dLabel"><datetimepicker class="ui-calendar" data-ng-model="vm.date.start" data-datetimepicker-config="{\n                                            dropdownSelector: \'.dropdown-toggle\',\n                                            minView: \'day\'\n                                        }"></datetimepicker></div></div><span class="search-filters__splitter"></span><div class="dropdown"><a class="dropdown-toggle" id="dLabel" role="button" data-toggle="dropdown" data-target=".dropdown2" href="#"><input class="input input&--size_sm input--fc-sh-yellow width--all" type="text" name="to" placeholder="01.01.2000" ng-change="vm.search()" ng-model="vm.date.end | date:\'dd.MM.yyyy\'"></a><div class="dropdown-menu dropdown-menu-right dropdown-menu--calendar" role="menu" aria-labelledby="dLabel"><datetimepicker class="ui-calendar" data-ng-model="vm.date.end" data-datetimepicker-config="{\n                                            dropdownSelector: \'.dropdown-toggle\',\n                                            minView: \'day\'\n                                        }"></datetimepicker></div></div></div></div></div><div class="search-filters__item"><a class="search-filters__link" ng-if="!vm.isOpenDate" ng-click="vm.isOpenDate = true; $event.stopPropagation();">\u0423\u043A\u0430\u0437\u0430\u0442\u044C \u0442\u043E\u0447\u043D\u044B\u0435 \u0434\u0430\u0442\u044B</a> <a class="search-filters__link" ng-if="vm.isOpenDate" ng-click="vm.isOpenDate = false; $event.stopPropagation();">\u041F\u0438\u0441\u044C\u043C\u0430 \u043F\u043E \u043C\u0435\u0441\u044F\u0446\u0430\u043C</a></div></div>');
$templateCache.put('app/components/search-mail/search-mail.html','<div class="search-mail" search-mail-open><form name="searchForm" ng-submit="vm.search(searchForm)" novalidate><div class="search-mail__body"><div class="search-mail__close" ng-if="isOpen"><button class="btn-y btn-y--white btn-y--close" type="button" ng-click="close(); vm.searchForm.model.search = \'\'"><img class="btn-y__icon" src="/images/cancel.svg" alt="close search"></button></div><div class="search-mail__group"><input class="input input--size_m input--fc-sh-yellow search-mail__input font--inh" placeholder="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u0430\u043F\u0440\u043E\u0441" type="text" name="search" ng-model="vm.searchForm.model.search" ng-click="open()"> <button class="btn-y btn-y--border search-mail__button font--inh" type="submit" ng-if="isOpen">\u041F\u043E\u0438\u0441\u043A</button> <button class="btn-y btn-y--border search-mail__button font--inh" type="button" ng-if="!isOpen" ng-click="open()">\u041F\u043E\u0438\u0441\u043A</button> <button class="search-mail__reset btn btn--size_m btn--not-style btn--not-events" type="button" ng-if="isOpen" ng-click="vm.searchForm.model.search = \'\'"><span class="icon-close-thin"></span></button> <button class="search-mail__filter btn btn--size_m btn--not-style btn--not-events font__size10" type="button" ng-if="isOpen" ng-class="{\'is-open\': vm.isOpenFilters}" uib-popover-template="\'app/components/search-mail/search-mail-popover.html\'" popover-class="popover--search-filters popover--no-arrow" popover-placement="bottom" popover-animation="true" popover-is-open="vm.isOpenFilters" popover-trigger="\'outsideClick\'"><span class="icon-select-arrow"></span></button></div></div></form></div>');
$templateCache.put('app/components/profile-form/profile-form.html','<form class="form" name="form" ng-submit="vm.save(form)"><div class="form__fields"><!-- \u0418\u043C\u044F \u0438 \u0444\u0430\u043C\u0438\u043B\u0438\u044F --><div class="form__field-item"><div class="field-style field-style--max-wd260 mrg__right18"><label class="field-style__title">\u0418\u043C\u044F \u0438 \u0444\u0430\u043C\u0438\u043B\u0438\u044F:</label><input class="input input--size_l width--inh" type="text" placeholder="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043C\u044F" ng-model="vm.profileForm.first_name"></div><div class="field-style field-style--max-wd260"><label class="field-style__title hide-elm">&nbsp;&nbsp;</label><input class="input input--size_l width--inh" type="name" placeholder="\u0412\u0430\u0448\u0430 \u0424\u0430\u043C\u0438\u043B\u0438\u044F" ng-model="vm.profileForm.last_name"></div></div><!-- \u041B\u043E\u0433\u0438\u043D/\u0438\u043C\u044F \u0432 \u0431\u0430\u0437\u0435 --><!--<div class="form__field-item">--><!--<div class="field-style field-style&#45;&#45;max-wd260 mrg__right18">--><!--<label class="field-style__title">\u0418\u043C\u044F \u043D\u0430 mail.cz:</label>--><!--<div class="select select_mode_radio select_theme_islands select_size_l i-bem width&#45;&#45;inh"--><!--data-bem=\'{"select":{"name":"select2"}}\'>--><!--<input class="select__control" type="hidden" name="select2"--><!--value="2" autocomplete="off"/>--><!--<button class="button button_size_l button_theme_islands button__control select__button i-bem"--><!--data-bem=\'{"button":{}}\' role="listbox" type="button"--><!--aria-owns="uniq148861608057241 uniq148861608057242 uniq148861608057243"--><!--aria-labelledby="uniq148861608057244">--><!--<span class="button__text"--><!--id="uniq148861608057244">@mail.cz</span>--><!--<span class="icon select__tick"></span>--><!--</button>--><!--<div class="popup popup_target_anchor popup_theme_islands popup_autoclosable i-bem"--><!--data-bem=\'{"popup":{"directions":["bottom-left","bottom-right","top-left","top-right"]}}\'--><!--aria-hidden="true">--><!--<div class="menu menu_size_l menu_theme_islands menu_mode_radio menu__control select__menu i-bem"--><!--data-bem=\'{"menu":{}}\'>--><!--<div class="menu__item menu__item_theme_islands"--><!--data-bem=\'{"menu__item":{"val":1}}\' role="option"--><!--id="uniq148861608057241" aria-checked="false">@mail.cz--><!--</div>--><!--<div class="menu__item menu__item_checked menu__item_theme_islands"--><!--data-bem=\'{"menu__item":{"val":2}}\' role="option"--><!--id="uniq148861608057242" aria-checked="true">@mail.cz--><!--</div>--><!--<div class="menu__item menu__item_theme_islands"--><!--data-bem=\'{"menu__item":{"val":3}}\' role="option"--><!--id="uniq148861608057243" aria-checked="false">@mail.cz--><!--</div>--><!--</div>--><!--</div>--><!--</div>--><!--</div>--><!--<div class="field-style field-style&#45;&#45;max-wd260">--><!--<label class="field-style__title hide-elm">&nbsp;&nbsp; </label>--><!--<input class="input input&#45;&#45;size_l width&#45;&#45;inh"--><!--type="text"--><!--name="username"--><!--placeholder="\u0412\u0430\u0448 \u043B\u043E\u0433\u0438\u043D \u043F\u043E\u0447\u0442\u044B"--><!--ng-model="vm.profileForm.username"/>--><!--</div>--><!--<div class="notific mrg__top7">--><!--\u042D\u0442\u043E \u0438\u043C\u044F \u0441\u043C\u043E\u0433\u0443\u0442 \u0432\u0438\u0434\u0435\u0442\u044C \u0434\u0440\u0443\u0433\u0438\u0435 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0438 Mail.cz \u2014 \u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, \u0438\u043C \u0431\u0443\u0434\u0435\u0442--><!--\u043F\u043E\u0434\u043F\u0438\u0441\u0430\u043D\u0430 \u0432\u0430\u0448\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430--><!--</div>--><!--</div>--><!-- \u0414\u0430\u0442\u0430 / \u041F\u043E\u043B --><div class="form__field-item position--stat"><!--\u0414\u0430\u0442\u0430 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F--><div class="field-style field-style--max-wd260 mrg__right18"><label class="field-style__title">\u0414\u0430\u0442\u0430 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F:</label><div class="field-style__container width--inh"><!-- \u0414\u0435\u043D\u044C --> <input class="input input--size_l width--size65" type="text" placeholder="\u0414\u0435\u043D\u044C" ng-model="vm.profileForm.bDay"><!-- \u041C\u0435\u0441\u044F\u0446 --><ui-select ng-model="vm.profileForm.bMonth" class="select-list select-list--size_l select-list--not-border-of-sides width-inh" theme="select2" title="Choose a person"><ui-select-match class="select-list__body select-list--size_l width-inh" placeholder="\u041C\u0435\u0441\u044F\u0446">{{ $select.selected }}</ui-select-match><ui-select-choices repeat="month in vm.monthList"><div ng-bind-html="month"></div></ui-select-choices></ui-select><!-- \u0413\u043E\u0434 --> <input class="input input--size_l width--size65" type="name" placeholder="\u0413\u043E\u0434" ng-model="vm.profileForm.bYear"></div></div><!-- \u041F\u043E\u043B --><div class="field-style field-style--max-wd260"><label class="field-style__title">\u041F\u043E\u043B:</label><div class="radiobutton main-switch radiobutton--size_l width--inh"><input class="main-switch__input" type="radio" name="gender" value="1" ng-model="vm.profileForm.gender"> <span class="radiobutton--size_l main-switch__btn main-switch__btn--firs width--inh">\u041C\u0443\u0436\u0441\u043A\u043E\u0439</span> <input class="main-switch__input" type="radio" name="gender" value="2" ng-model="vm.profileForm.gender"> <span class="radiobutton--size_l main-switch__btn main-switch__btn--last width--inh">\u0416\u0435\u043D\u0441\u043A\u0438\u0439</span></div></div></div><!-- \u0421\u0442\u0440\u0430\u043D\u0430 / \u0413\u043E\u0440\u043E\u0434 --><div class="form__field-item"><div class="field-style field-style--max-wd260 mrg__right18"><label class="field-style__title">\u0421\u0442\u0440\u0430\u043D\u0430</label><!-- \u0421\u0442\u0440\u0430\u043D\u0430 --><ui-select ng-model="vm.profileForm.country" class="select-list select-list--size_l width-inh" theme="select2" title="Choose a person"><ui-select-match class="select-list__body select-list--size_l width-inh" placeholder="\u0421\u0442\u0440\u0430\u043D\u0430">{{ $select.selected }}</ui-select-match><ui-select-choices repeat="country in vm.countryList"><div ng-bind-html="country"></div></ui-select-choices></ui-select></div><div class="field-style field-style--max-wd260"><label class="field-style__title">\u0413\u043E\u0440\u043E\u0434</label><input class="input input--size_l width--inh" type="text" placeholder="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043C\u044F" ng-model="vm.profileForm.city"></div></div><!-- \u041F\u0440\u0438\u043C\u0435\u043D\u0438\u0442\u044C / \u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C  --><div class="forms__field-item mrg__top40"><div class="field-style field-style--max-wd260 mrg__right18"><button class="btn btn--normal btn--size_l width--size168 float--left" type="button" ng-click="vm.resetForm()">\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C</button><!-- bem \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442 --><!--<button class="button button_theme_islands button_size_l button__control i-bem width&#45;&#45;size168 float&#45;&#45;left"\n                        data-bem=\'{"button":{}}\' role="button" type="button"><span\n                        class="button__text">\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C</span></button>--></div><div class="field-style field-style--max-wd260"><button class="btn btn--size_l btn--yellow width--size168 float--right" type="submit">\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C</button><!-- bem \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442 --><!--<button class="button button_theme_islands button_size_l button__control i-bem width&#45;&#45;size168 btn&#45;&#45;red float&#45;&#45;right"\n                        data-bem=\'{"button":{}}\' role="button" type="button"><span\n                        class="button__text">\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C</span></button>--></div></div><div class="notific font__center mrg__top10 mrg__bottom45">Mail.cz \u043D\u0438 \u043F\u0440\u0438 \u043A\u0430\u043A\u0438\u0445 \u043E\u0431\u0441\u0442\u043E\u044F\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430\u0445 \u043D\u0435 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u0442\u0440\u0435\u0442\u044C\u0438\u043C \u043B\u0438\u0446\u0430\u043C \u043D\u0438\u043A\u0430\u043A\u0438\u0445 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u0441\u0432\u043E\u0438\u0445 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439, \u043A\u0440\u043E\u043C\u0435 \u0441\u043B\u0443\u0447\u0430\u0435\u0432, \u043F\u0440\u044F\u043C\u043E \u043F\u0440\u0435\u0434\u0443\u0441\u043C\u043E\u0442\u0440\u0435\u043D\u043D\u044B\u0445 \u0432<br><a class="notific__link" href="">\u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0435 \u041A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438.</a></div></div></form>');
$templateCache.put('app/components/spinner/spinner.html','<div class="spinner" ng-show="vm.isOpen"></div>');
$templateCache.put('app/components/settings-menu/settings-menu.html','<div class="settings-menu font-sizer--bigger-15"><div class="settings-menu__body"><a class="settings-menu__title font-sizer--bigger-18" ui-sref="settings.main">\u0412\u0441\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438</a><div class="settings-menu__row mrg__top20"><div class="row row--size15 mrg__top20"><div class="col-xs-6 flex--inline align-items--cn"><span class="icon-profile color--blue font__size18 width--aut"></span> <a class="settings-menu__link" ui-sref="settings.main">\u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u043E\u043C</a></div><div class="col-xs-6 flex--inline align-items--cn"><span class="icon-rules color--green font__size18 width--aut"></span> <a class="settings-menu__link" ui-sref="settings.rules">\u041F\u0440\u0430\u0432\u0438\u043B\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438</a></div></div><div class="row row--size15 mrg__top20"><div class="col-xs-6 flex--inline align-items--cn"><span class="icon-folder-star color--yellow font__size18 width--aut"></span> <a class="settings-menu__link" ui-sref="settings.folders">\u041F\u0430\u043F\u043A\u0438</a></div><div class="col-xs-6 flex--inline align-items--cn"><span class="icon-tag-star color--yellow font__size18 width--aut"></span> <a class="settings-menu__link" ui-sref="settings.tags">\u041C\u0435\u0442\u043A\u0438</a></div></div><div class="row row--size15 mrg__top20"><div class="col-xs-6 flex--inline align-items--cn"><span class="icon-contacts color--green font__size18 width--aut"></span> <a class="settings-menu__link" ui-sref="settings.contacts">\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u043E\u0432</a></div><div class="col-xs-6 flex--inline align-items--cn"><span class="icon-other-mails color--blue font__size18 width--aut"></span> <a class="settings-menu__link" ui-sref="settings.accounts">\u0421\u0431\u043E\u0440 \u043F\u043E\u0447\u0442\u044B \u0441 \u0434\u0440\u0443\u0433\u0438\u0445 \u044F\u0449\u0438\u043A\u043E\u0432</a></div></div><!--<div class="row row&#45;&#45;size15 mrg__top20">--><!--<div class="col-xs-6 flex&#45;&#45;inline align-items&#45;&#45;cn">--><!--<span class="icon-mail-space color&#45;&#45;green font__size18 width&#45;&#45;aut"></span>--><!--<a class="settings-menu__link" ui-sref="storage">--><!--\u0423\u0432\u0435\u043B\u0438\u0447\u0435\u043D\u0438\u0435 \u043E\u0431\u044C\u0435\u043C\u0430 \u043F\u043E\u0447\u0442\u044B--><!--</a>--><!--</div>--><!--</div>--></div></div></div>');
$templateCache.put('app/components/tag-create/tag-create-popup.html','<div><div class="popup__close" ng-click="cancel()">\xD7</div><tag-create messages="messages" on-close="cancel()"></tag-create></div>');
$templateCache.put('app/components/tag-create/tag-create.html','<div class="tag-create"><div class="tag-create__title">\u0421\u043E\u0437\u0434\u0430\u0435\u043C \u043C\u0435\u0442\u043A\u0443</div><div class="mrg__top15"><form name="paletteForm" ng-submit="vm.create(paletteForm)" novalidate><div class="tag-create__input mrg__top15"><div class="mrg__right10"><span class="font__size13">\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435</span></div><div><input class="input input--size_s width--inh input--fc-sh-yellow" type="text" name="tag_name" ng-model="vm.paletteForm.model.tag_name" required></div></div><div class="palette-list tag-create__palette mrg__top30"><input type="hidden" name="palette" ng-model="vm.paletteForm.model.bgcolor" required><div class="palette-list__item" style="background-color: {{ palette.color }}" ng-repeat="palette in vm.palette.items track by $index" ng-click="vm.select(palette)"><span class="palette-list__icon icon-check-box-mark" ng-if="palette.color === vm.palette.selected.color"></span></div></div><div class="tag-create__btn mrg__top40"><button class="btn-y btn-y--border" type="submit">\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043C\u0435\u0442\u043A\u0443</button> <button class="btn-y btn-y--border" type="button" ng-click="vm.close()">\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C</button></div></form></div></div>');
$templateCache.put('app/components/tag-edit/tag-edit-popup.html','<div><div class="popup__close" ng-click="cancel()">\xD7</div><tag-edit model="model" on-close="cancel()"></tag-edit></div>');
$templateCache.put('app/components/tag-edit/tag-edit.html','<div class="tag-create"><div class="tag-create__title">\u0421\u043E\u0437\u0434\u0430\u0435\u043C \u043C\u0435\u0442\u043A\u0443</div><div class="mrg__top15"><form name="paletteForm" ng-submit="vm.update(paletteForm)" novalidate><div class="tag-create__input mrg__top15"><div class="mrg__right10"><span class="font__size13">\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435</span></div><div><input class="input input--size_s width--inh input--fc-sh-yellow" type="text" name="tag_name" ng-model="vm.paletteForm.model.tag_name" required></div></div><div class="palette-list tag-create__palette mrg__top30"><input type="hidden" name="palette" ng-model="vm.paletteForm.model.bgcolor" required><div class="palette-list__item" style="background-color: {{ palette.bgcolor }}" ng-repeat="palette in vm.palette.items track by $index" ng-click="vm.select(palette)"><span class="palette-list__icon icon-check-box-mark" ng-if="palette.bgcolor === vm.palette.selected.bgcolor"></span></div></div><div class="tag-create__btn mrg__top40"><button class="btn-y btn-y--border" type="submit">\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C \u043C\u0435\u0442\u043A\u0443</button> <button class="btn-y btn-y--border" type="button" ng-click="vm.close()">\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C</button></div></form></div></div>');
$templateCache.put('app/components/tag-list/tag-list-popover.html','<tag-list messages="vm.messages"></tag-list>');
$templateCache.put('app/components/tag-list/tag-list.html','<div class="tag-list"><div class="tag-list__body"><!--\u041F\u043E\u043A\u0430 \u0447\u0442\u043E \u0441\u043A\u0440\u044B\u0432\u0430\u0435\u043C--><!--<input type="text">--></div><div class="tag-list__links"><a class="tag-list__link tag-list__link--underline tag-list__link--unread" href ng-click="vm.setSeen()"><span class="tag-list__name">\u041F\u0440\u043E\u0447\u0438\u0442\u0430\u043D\u043E</span> </a><a class="tag-list__link tag-list__link--underline tag-list__link--unread" href ng-click="vm.setUnSeen()"><span class="tag-list__name">\u041D\u0435 \u043F\u0440\u043E\u0447\u0438\u0442\u0430\u043D\u043E</span> </a><a class="tag-list__link" href ng-click="vm.setImportant()"><span class="tag-list__name tag-list__name--important">\u0412\u0430\u0436\u043D\u044B\u0435 </span></a><a class="tag-list__link" href ng-repeat="tag in vm.tags.items" ng-click="vm.setTag(tag)"><span class="tag-list__first-letter" style="background-color: {{ tag.bgcolor }}; color: {{ tag.color }}">{{ tag.tag_name[0] }} </span><span class="tag-list__name">{{ tag.tag_name.slice(1); }}</span></a></div><hr class="hr"><div class="tag-list__header">\u0421\u043D\u044F\u0442\u044C \u043C\u0435\u0442\u043A\u0438:</div><div class="tag-list__links"><a class="tag-list__link" href ng-repeat="tag in vm.unTags.items" ng-click="vm.setUnTag(tag)"><span class="tag-list__first-letter" style="background-color: {{ tag.bgcolor }}; color: {{ tag.color }}">{{ tag.tag_name[0] }} </span><span class="tag-list__name">{{ tag.tag_name.slice(1); }}</span></a></div><hr class="hr"><div><a class="tag-list__link" href ng-click="vm.openTagCreatePopup()"><span class="tag-list__name">\u041D\u043E\u0432\u0430\u044F \u043C\u0435\u0442\u043A\u0430..</span></a></div></div>');
$templateCache.put('app/components/tag-settings/tag-settings-popover.html','<folder-list messages="vm.messages"></folder-list>');
$templateCache.put('app/components/tag-settings/tag-settings.html','<div class="tags-settings"><div class="tags-settings__title main-title-text">\u041C\u0435\u0442\u043A\u0438</div><div class="tags-settings__content"><div class="tags-settings__fields"><div class="tags-settings__fields__title-block"><div class="tags-settings__item mrg__bottom5"><div class="tags-settings__title">\u0412\u0430\u0436\u043D\u044B\u0435</div><div class="tags-settings__values">10</div></div><div class="tags-settings__item mrg__bottom5"><div class="tags-settings__title">\u041D\u0435\u043F\u0440\u043E\u0447\u0438\u0442\u0430\u043D\u043D\u044B\u0435</div><div class="tags-settings__values">2</div></div></div><div class="tags-settings__item" ng-repeat="tag in vm.tags.items" ng-class="{\'tags-settings__item--active\': tag.isSelected}" ng-click="vm.select(tag)"><div class="label-ydx inbox-message__label" style="background: {{ tag.bgcolor }}">{{ tag.tag_name }}</div><!--<div class="tags-settings__values">1 / 2</div>--></div></div><div class="tags-settings__control"><div class="mrg__top"><!----> <button class="btn btn--normal width--size150 mrg__bottom4 btn--size_sm" ng-click="vm.openTagCreatePopup()">\u041D\u043E\u0432\u0430\u044F \u043C\u0435\u0442\u043A\u0430</button> <button class="btn btn--normal width--size150 mrg__bottom4 btn--size_sm" ng-click="vm.openTagEditPopup()" ng-disabled="!vm.selected">\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C</button> <button class="btn btn--normal width--size150 mrg__bottom4 btn--size_sm" ng-disabled="!vm.selected" ng-click="vm.destroy()">\u0423\u0434\u0430\u043B\u0438\u0442\u044C</button><!--<button class="btn btn&#45;&#45;normal width&#45;&#45;size150 mrg__bottom4 btn&#45;&#45;size_sm">\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043F\u0440\u0430\u0432\u0438\u043B\u043E</button>\n                <button class="btn btn&#45;&#45;normal width&#45;&#45;size150 mrg__bottom4 btn&#45;&#45;size_sm">\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C</button>--></div><!--            <div class="mrg__bottom">\n                <div class="radiobutton">\n                    <input class="radiobutton__input" type="radio" id="r1" name="rr"/>\n                    <label class="radiobutton__label" for="r1">\n                                <span class="radiobutton__chek">\n                                    <span class="radiobutton__chek&#45;&#45;cheked"></span>\n                                </span>\n                        <span class="radiobutton__label__text">\u041F\u043E \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u0443 \u043F\u0438\u0441\u0435\u043C</span></label>\n                </div>\n\n                <div class="radiobutton radiobutton&#45;&#45;size13">\n                    <input class="radiobutton__input" type="radio" id="r2" name="rr"/>\n                    <label class="radiobutton__label" for="r2">\n                                <span class="radiobutton__chek">\n                                    <span class="radiobutton__chek&#45;&#45;cheked"></span>\n                                </span>\n                        <span class="radiobutton__label__text">\u041F\u043E \u0430\u043B\u0444\u0430\u0432\u0438\u0442\u0443</span>\n                    </label>\n                </div>\n            </div>--></div></div><div class="form__field-item"></div></div>');
$templateCache.put('app/components/template-list/template-list-popover.html','<template-list on-save="vm.save(result)"></template-list>');
$templateCache.put('app/components/template-list/template-list.html','<div class="template-list"><div class="template-list__is-not-templates" ng-if="!vm.messages.items.length && !vm.messages.isLoading"><div class="padding--left12 padding--right12">\u0427\u0430\u0441\u0442\u043E \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u044F\u0435\u0442\u0435 \u043F\u043E\u0445\u043E\u0436\u0438\u0435 \u043F\u0438\u0441\u044C\u043C\u0430? \u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u0435 \u044D\u0442\u043E \u043F\u0438\u0441\u044C\u043C\u043E \u043A\u0430\u043A \u0448\u0430\u0431\u043B\u043E\u043D, \u0447\u0442\u043E\u0431\u044B \u043D\u0435 \u043F\u0438\u0441\u0430\u0442\u044C \u0435\u0433\u043E \u043A\u0430\u0436\u0434\u044B\u0439 \u0440\u0430\u0437 \u0437\u0430\u043D\u043E\u0432\u043E.</div><div class="template-list__save-button"><button class="btn btn--normal btn--silver-hover btn--size_xs btn--silver-bg-y-shw" ui-sref="mail.compose({\'template\': true, \'re\': undefined, id: undefined, connection_id: undefined})">\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0448\u0430\u0431\u043B\u043E\u043D</button></div></div><div class="template-list__there-is-templates" ng-if="vm.messages.items.length && !vm.messages.isLoading"><ul class="template-list__mail-template-list"><li class="template-list__mail-template-list-item" ng-repeat="message in vm.messages.items" ui-sref="mail.compose({\n                id: message.number,\n                mbox: message.mbox,\n                connection_id: message.connection_id,\n                template: true\n            })"><a class="template-list__link" href ng-repeat="message in vm.messages.items"><span class="template-list__template-name">{{ message.Subject }}</span></a></li></ul><hr class="hr"><div class="template-list__mail-template-list-item" type="button" ui-sref="mail.compose({\'template\': true, \'re\': undefined, id: undefined, connection_id: undefined})">\u041D\u043E\u0432\u044B\u0439 \u0448\u0430\u0431\u043B\u043E\u043D\u2026</div><hr class="hr"><div class="template-list__save-button"><button class="btn btn--normal btn--silver-hover btn--size_xs btn--silver-bg-y-shw" type="button" ng-click="vm.save()">\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0448\u0430\u0431\u043B\u043E\u043D</button></div></div></div>');
$templateCache.put('app/components/time-send/time-send-popover.html','<time-send sdate="vm.sendForm.model.sdate"></time-send>');
$templateCache.put('app/components/time-send/time-send.html','<div class="time-send" ng-class="{\'time-send--info-open\': vm.isInfoOpen}"><div class="time-send__close pointer" ng-click="vm.close()"><img class="img-responsive" src="/images/cancel.svg"></div><div class="time-send__content"><div class="time-send__info font__size13" ng-if="vm.isInfoOpen">\u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0443\u043A\u0430\u0437\u0430\u0442\u044C \u0434\u0430\u0442\u0443 \u0438 \u0432\u0440\u0435\u043C\u044F, \u043A\u043E\u0433\u0434\u0430 \u043F\u0438\u0441\u044C\u043C\u043E \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043E. \u041E\u0442\u043F\u0440\u0430\u0432\u043A\u0443 \u043F\u0438\u0441\u044C\u043C\u0430 \u043C\u043E\u0436\u043D\u043E \u043E\u0442\u043B\u043E\u0436\u0438\u0442\u044C \u043D\u0435 \u0431\u043E\u043B\u0435\u0435 \u0447\u0435\u043C \u043D\u0430 \u043E\u0434\u0438\u043D \u0433\u043E\u0434 \u0441 \u0442\u0435\u043A\u0443\u0449\u0435\u0439 \u0434\u0430\u0442\u044B.</div><div class="time-send__planing mrg__top10"><div class="time-send__planing-item flex"><div class="checkbox-y checkbox-y--size15"><label class="checkbox-y__label"><input class="checkbox-y__input" type="checkbox" name="isChecked" ng-model="vm.isChecked"><div class="checkbox-y__body"><span class="checkbox-y__icon"></span></div></label></div></div><div class="time-send__planing-item font__size15"><div class="dropdown dropup">\u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C <button class="dropdown-toggle btn--not-style" id="dLabel" role="button" data-toggle="dropdown" data-target=".dropdown2" href="#" ng-disabled="!vm.isChecked">{{ vm.timeForm.model.date.name }}</button> \u0432<div class="dropdown-menu dropdown-menu--calendar" role="menu" aria-labelledby="dLabel"><datetimepicker class="ui-calendar" data-ng-model="vm.timeForm.model.date.value" data-datetimepicker-config="{\n                                            dropdownSelector: \'.dropdown-toggle\',\n                                            minView: \'day\'\n                                        }" data-before-render="vm.endDateBeforeRender($view, $dates, $leftDate, $upDate, $rightDate)"><hr class="hr ui-calendar__hr"></datetimepicker></div></div></div><div class="time-send__planing-item"><ui-select ng-model="vm.timeForm.model.time" class="select-list select-list--size_s select-list--not-border-of-sides width-inh" theme="select2" ng-click="$event.stopPropagation();" search-enabled="false" ng-disabled="!vm.isChecked"><ui-select-match class="select-list__body select-list--size_s width-inh" placeholder="\u0412\u0440\u0435\u043C\u044F">{{ $select.selected }}</ui-select-match><ui-select-choices repeat="time in vm.timeList"><div ng-bind-html="time"></div></ui-select-choices></ui-select></div><div class="time-send__planing-item"><a class="link link--gray font__size18" href ng-click="vm.isInfoOpen = !vm.isInfoOpen"><span class="icon-info"></span></a></div></div></div></div>');
$templateCache.put('app/components/to-date/to-date.html','<span>&nbsp;{{ vm.convertDate }}</span>');
$templateCache.put('app/components/user-menu/user-menu-popover.html','<user-menu></user-menu>');
$templateCache.put('app/components/user-menu/user-menu.html','<div class="user-menu font-sizer--bigger-15"><div class="user-menu__body user-menu__body--bg-gray"><div class="user-menu__item"><a class="user-menu__link user-menu__link--red" href><div class="avatar avatar--size28"><img class="avatar__image" ng-src="{{ vm.user.profile.photo }}" fallback-src="{{\'/images/avatar.png\'}}"></div><div class="user-menu__title">{{ vm.user.profile.email }}</div></a></div><div class="user-menu__item"><a class="user-menu__link" ui-sref="settings.accounts"><svg xmlns="http://www.w3.org/2000/svg" width="28px" height="28px" viewBox="0 0 28 28" class="dropdown-user-add-svg"><path d="M13.28,8 L14.72,8 L14.72,13.28 L20,13.28 L20,14.72 L14.72,14.72 L14.72,20 L13.28,20 L13.28,14.72 L8,14.72 L8,13.28 L13.28,13.28 L13.28,8 Z" id="+" fill-opacity="0.5"></path><path d="M28,14 C28,6.2680135 21.7319865,0 14,0 C6.2680135,0 0,6.2680135 0,14 C0,21.7319865 6.2680135,28 14,28 C21.7319865,28 28,21.7319865 28,14 Z M1,14 C1,6.82029825 6.82029825,1 14,1 C21.1797017,1 27,6.82029825 27,14 C27,21.1797017 21.1797017,27 14,27 C6.82029825,27 1,21.1797017 1,14 Z" id="Oval" fill-opacity="0.15"></path></svg><div class="user-menu__title">\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F</div></a></div></div><div class="user-menu__body user-menu__body--no-mrg"><div class="user-menu__item"><a class="user-menu__link user-menu__link--hover-gray" ui-sref="settings.main"><div class="user-menu__title">\u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0430\u043A\u0430\u0443\u043D\u0442\u043E\u043C</div></a></div><div class="user-menu__item"><a class="user-menu__link user-menu__link--hover-gray" href=""><div class="user-menu__title">\u041F\u043E\u043C\u043E\u0449\u044C</div></a></div><div class="user-menu__separator"></div><div class="user-menu__item"><a class="user-menu__link user-menu__link--hover-gray" ui-sref="settings.accounts"><div class="user-menu__title">\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u044F\u0449\u0438\u043A</div></a></div><div class="user-menu__item"><a class="user-menu__link user-menu__link--hover-gray" ui-sref="settings.main"><div class="user-menu__title">\u0421\u043C\u0435\u043D\u0438\u0442\u044C \u043F\u0430\u0440\u043E\u043B\u044C</div></a></div><div class="user-menu__item"><a class="user-menu__link user-menu__link--hover-gray" href ng-click="vm.logout()"><div class="user-menu__title">\u0412\u044B\u0445\u043E\u0434</div></a></div></div></div>');
$templateCache.put('app/components/validation-errors/validation-errors.html','<div class="validation"><div ng-messages="vm.data.$error" ng-if="vm.data.$invalid"><div class="validation__message validation__message--red" ng-message="{{ key }}" ng-repeat="(key, value) in vm.messages">{{ value }}</div></div><div class="validation__message validation__message--red" ng-repeat="error in vm.server" ng-if="error.field == vm.data.$name">{{ error.message }}</div></div>');
$templateCache.put('app/components/white-list/white-list.html','<div><div class="rules-settings__bl-wh-content__title">\u0411\u0435\u043B\u044B\u0439 \u0441\u043F\u0438\u0441\u043E\u043A</div><span class="rules-settings__bl-wh-content__text">\u0412\u0441\u044F \u043F\u043E\u0447\u0442\u0430 \u0441 \u0430\u0434\u0440\u0435\u0441\u043E\u0432, \u0437\u0430\u043D\u0435\u0441\u0451\u043D\u043D\u044B\u0445 \u0432 \u0431\u0435\u043B\u044B\u0439 \u0441\u043F\u0438\u0441\u043E\u043A, \u043D\u0435 \u0431\u0443\u0434\u0435\u0442 \u043F\u043E\u043F\u0430\u0434\u0430\u0442\u044C \u0432 \u043F\u0430\u043F\u043A\u0443 <b><a class="rules-settings__bl-wh-content__link" href="">\xAB\u0421\u043F\u0430\u043C\xBB</a></b></span><form name="form" ng-submit="vm.add(form)" novalidate><div class="form__field-item mrg__bottom0"><div class="field-style flex--inline width--max460"><input class="input input--size_xs input--up-shadow width--inh input--bg-white mrg__right7 border--cl-bl-silver" type="email" name="email" ng-model="vm.form.model.email" placeholder="\u0423\u043A\u0430\u0436\u0438\u0442\u0435 e-mail \u0430\u0434\u0440\u0435\u0441" required> <button class="btn btn--normal btn--size_xs width--size150 border--cl-bl-silver" type="submit">\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C</button></div></div></form><div class="mrg__top20"><div class="mrg__top5 padding--top3 padding--bottom3" ng-repeat="item in vm.list.items"><div class="checkbox-y checkbox-y--size14"><label class="checkbox-y__label"><input class="checkbox-y__input" type="checkbox" data-checklist-model="vm.list.checked" data-checklist-value="item"><div class="checkbox-y__body"><span class="checkbox-y__icon"></span></div><div class="checkbox-y__text font-sizer--bigger-15 font__bold">{{ item }}</div></label></div></div></div><div class="mrg__top10"><button class="btn btn--size_xs btn--normal btn--hover-border btn--silver-bg-y-shw" type="button" ng-click="vm.remove()" ng-disabled="!vm.list.checked.length">\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0438\u0437 \u0441\u043F\u0438\u0441\u043A\u0430</button></div></div>');
$templateCache.put('app/core/errors/404.html','404');
$templateCache.put('app/contacts/main/contacts.html','<contact-header contacts="vm.contacts"></contact-header><div class="contacts-list"><contact-item-list contacts="vm.contacts"></contact-item-list></div><div class="contacts-list-is-null hide-elm"><!--\n        \u043A\u043B\u0441\u0441 \u043F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0430\u0442\u0435\u043B\u044C \u043F\u0440\u0438 \u043D\u0430\u0432\u0435\u0434\u0435\u043D\u0438\u0438 \u0444\u0430\u0439\u043B\u0430 contacts-list-is-null__content--is-hover-file\n    --><form class="contacts-list-is-null__content ng-pristine ng-valid" ngf-drop ngf-select ng-model="files" ngf-multiple="true" ngf-allow-dir="true" accept="contacts/csv" ngf-pattern="\'contacts/csv\'" ngf-drag-over-class="\'contacts-list-is-null__content--is-hover-file\'"><div class="contacts-list-is-null__adder hide-elm"><input class="contacts-list-is-null__drop-mode hide-elm" type="file" name="data"></div><div class="contacts-list-is-null__title">\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u044B \u0438\u0437 \u0444\u0430\u0439\u043B\u0430</div><div class="contacts-list-is-null__text">\u042F\u043D\u0434\u0435\u043A\u0441.\u041F\u043E\u0447\u0442\u0430 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0438\u043C\u043F\u043E\u0440\u0442 \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u043E\u0432, \u0441\u043E\u0445\u0440\u0430\u043D\u0451\u043D\u043D\u044B\u0445 \u0432 \u0444\u043E\u0440\u043C\u0430\u0442\u0430\u0445 .csv \u0438 vCard.</div><div class="contacts-list-is-null__text-comment">\u041F\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0442\u0435 \u0444\u0430\u0439\u043B \u0441\u044E\u0434\u0430</div><div class="contacts-list-is-null__error-added-file" ngf-no-file-drop>\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u044B. \u0423\u0431\u0435\u0434\u0438\u0442\u0435\u0441\u044C, \u0447\u0442\u043E \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u0442\u0435 \u0444\u0430\u0439\u043B \u0444\u043E\u0440\u043C\u0430\u0442\u0430 .csv \u0438\u043B\u0438 vCard.</div><button class="btn btn--normal btn--size_xs btn--silver-hover" type="file" name="data">\u0438\u043B\u0438 \u0432\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0444\u0430\u0439\u043B</button></form><div class="contacts-list-is-null__success hide-elm"><div class=""><span class="contacts-list-is-null__success-title icon-check-box-mark mrg__right5"></span> \u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B \u043F\u0435\u0440\u0435\u043D\u0435\u0441\u0435\u043D\u044B.</div></div></div><div class="contacts-footer" ng-if="!vm.contacts.items.length && vm.contactGroup.model.name && !vm.contacts.isLoading"><div class="contacts-footer__message">\u0412 \u0433\u0440\u0443\u043F\u043F\u0435 \xAB<span class="contacts-footer__name-group">{{ vm.contactGroup.model.name }}</span>\xBB \u043D\u0435\u0442 \u043D\u0438 \u043E\u0434\u043D\u043E\u0433\u043E \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u0430</div></div><div class="contacts-footer" ng-if="!vm.contacts.items.length && !vm.contactGroup.model.name"><div class="contacts-footer__message">\u0412 \u0433\u0440\u0443\u043F\u043F\u0435 \xAB<span class="contacts-footer__name-group">\u0412\u0441\u0435</span>\xBB \u043D\u0435\u0442 \u043D\u0438 \u043E\u0434\u043D\u043E\u0433\u043E \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u0430</div></div>');
$templateCache.put('app/directives/message-textarea/message-textarea.html','<div></div>');
$templateCache.put('app/help/main/help.html','<div class="header"><div class="header__brand pointer" ui-sref="mail.inbox"><img class="header__logo" src="/images/logo.png" alt="Mail logo"></div><div><div class="header__spinner"><spinner></spinner></div></div><div class="header__navigation"><!--\u0422\u0443\u0442 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442 \u043C\u0435\u043D\u044E--><div class="navigation"><div class="navigation__row"><div class="navigation__item"><a class="navigation__link navigation__link--active" ui-sref="mail.inbox">\u041F\u043E\u0447\u0442\u0430</a></div><div class="navigation__item"><a class="navigation__link" ui-sref="contacts.main">\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B</a></div><!--<div class="navigation__item">--><!--<a class="navigation__link" href="">\u0424\u0430\u0439\u043B\u044B</a>--><!--</div>--><!--<div class="navigation__item">--><!--<a class="navigation__link" href="">\u041D\u043E\u0432\u043E\u0441\u0442\u0438</a>--><!--</div>--><!--<div class="navigation__item">--><!--<a class="navigation__link" href="">\u0415\u0449\u0435</a>--><!--</div>--></div></div></div><div class="header__left"><!--<div class="header__search header__left-item">--><!--<search-mail></search-mail>--><!--</div>--><!--<div class="header__settings header__left-item">--><!--&lt;!&ndash;<a class="header__settings-link">&ndash;&gt;--><!--<button class="btn-y btn-y&#45;&#45;settings pointer"--><!--uib-popover-template="\'app/components/settings-menu/settings-menu.html\'"--><!--popover-class="popover&#45;&#45;settings"--><!--popover-placement="bottom-right"--><!--popover-animation="true"--><!--popover-trigger="\'outsideClick\'">--><!--<span class="icon-settings"></span>--><!--</button>--><!--</div>--><div class="header__avatar header__left-item"><a class="header__avatar-link" href uib-popover-template="\'app/components/user-menu/user-menu-popover.html\'" popover-class="popover--user popover--no-arrow" popover-placement="bottom-right" popover-animation="true" popover-trigger="\'outsideClick\'"><div class="header__name">{{ vm.user.profile.email.split(\'@\')[0] }}</div><!--\u0422\u0443\u0442 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442 \u0430\u0432\u0430\u0442\u0430\u0440\u0430--><div class="avatar avatar--header avatar--size42"><img class="avatar__image" ng-src="{{ vm.user.profile.photo }}" fallback-src="{{\'/images/avatar.png\'}}"></div></a></div></div></div><div class="help"><div class="help__nav"><div class="help__nav-content"><div class="help__nav-item"><div class="__nav-item-title"><span class="icon-arrow-down"></span> <span class="help__nav-caption">\u0427\u0430\u0441\u0442\u044B\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u044B \u0432 MailCZ</span></div><div class="help__sub-nav"><span class="help__sub-nav"></span></div></div></div></div><div class="help__main-container"><div class="help__center-content"><div class="help__content-title"></div><div class="help__mein-content"><div class="help__item"></div></div></div><div class="help__right-nav"><a href=""></a></div></div></div>');
$templateCache.put('app/layout/footer/footer.html','<div class="footer"><div class="footer__row"><div class="footer-left"><div class="footer__date-info">\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0439 \u0432\u0445\u043E\u0434<to-date class="mrg__left3" date-unix="vm.user.profile.last_login"></to-date></div></div><div class="footer-right"><!--<div class="footer-right__elemets">--><!--<a href="">\u041F\u043E\u043C\u043E\u0449\u044C</a>--><!--</div>--><div class="footer-right__elemets">\xA9 2017, Mail.cz</div><div class="footer-right__elemets"><!-- \u042F\u0437\u044B\u043A\u043E\u0432\u043E\u0435 \u043C\u0435\u043D\u044E--><div class="choice-language choice-language--main-footer"><a class="choice-language__link choice-language--active" href=""><img class="choice-language__country" src="images/country/albania.svg" alt=""></a><!----> <a class="choice-language__link" href=""><img class="choice-language__country" src="images/country/bosnia.svg" alt=""></a><!----> <a class="choice-language__link" href=""><img class="choice-language__country" src="images/country/croatia.svg" alt=""></a><!----> <a class="choice-language__link" href=""><img class="choice-language__country" src="images/country/cz.svg" alt=""></a><!----> <a class="choice-language__link" href=""><img class="choice-language__country" src="images/country/macedonia.svg" alt=""></a><!----> <a class="choice-language__link" href=""><img class="choice-language__country" src="images/country/russia.svg" alt=""></a><!----> <a class="choice-language__link" href=""><img class="choice-language__country" src="images/country/serbia.svg" alt=""></a><!----> <a class="choice-language__link" href=""><img class="choice-language__country" src="images/country/slovakia.svg" alt=""></a><!----> <a class="choice-language__link" href=""><img class="choice-language__country" src="images/country/Slovenia.svg" alt=""></a><!----> <a class="choice-language__link" href=""><img class="choice-language__country" src="images/country/uk.svg" alt=""></a><!----> <a class="choice-language__link" href=""><img class="choice-language__country" src="images/country/ukraine.svg" alt=""></a></div></div></div></div></div>');
$templateCache.put('app/layout/header/header.html','<div class="header font-sizer--bigger-15"><div class="header__brand pointer" ui-sref="mail.inbox({mbox: \'INBOX\'})"><img class="header__logo" src="/images/logo.png" alt="Mail logo"></div><div><div class="header__spinner"><spinner is-global="true"></spinner></div></div><message-alert-send></message-alert-send><div class="header__navigation"><!--\u0422\u0443\u0442 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442 \u043C\u0435\u043D\u044E--><div class="navigation"><div class="navigation__row"><div class="navigation__item"><a class="navigation__link navigation__link--active" ui-sref="mail.inbox({mbox: \'INBOX\'})">\u041F\u043E\u0447\u0442\u0430</a></div><div class="navigation__item"><a class="navigation__link" ui-sref="contacts.main">\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B</a></div><!--<div class="navigation__item">--><!--<a class="navigation__link" href="">\u0424\u0430\u0439\u043B\u044B</a>--><!--</div>--><!--<div class="navigation__item">--><!--<a class="navigation__link" href="">\u041D\u043E\u0432\u043E\u0441\u0442\u0438</a>--><!--</div>--><!--<div class="navigation__item">--><!--<a class="navigation__link" href="">\u0415\u0449\u0435</a>--><!--</div>--></div></div></div><div class="header__left"><div class="header__search header__left-item"><search-mail></search-mail></div><div class="header__settings header__left-item position"><!--<a class="header__settings-link">--> <button class="btn-y btn-y--settings pointer" uib-popover-template="\'app/components/settings-menu/settings-menu.html\'" popover-class="popover--settings" popover-placement="bottom-right" popover-animation="true" popover-trigger="\'outsideClick\'"><span class="icon-settings"></span></button></div><div class="header__avatar header__left-item"><a class="header__avatar-link" href uib-popover-template="\'app/components/user-menu/user-menu-popover.html\'" popover-class="popover--user popover--no-arrow" popover-placement="bottom-right" popover-animation="true" popover-trigger="\'outsideClick\'"><div class="header__name">{{ vm.user.profile.email.split(\'@\')[0] }}</div><!--\u0422\u0443\u0442 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442 \u0430\u0432\u0430\u0442\u0430\u0440\u0430--><div class="avatar avatar--header avatar--size42"><img class="avatar__image" ng-src="{{ vm.user.profile.photo }}" fallback-src="{{\'/images/avatar.png\'}}"></div></a></div></div></div>');
$templateCache.put('app/layout/menu-contacts/menu-contacts.html','<div class="menu-contacts"><!--\u0425\u0435\u0434\u0435\u0440--><div class="menu-contacts__head"><a class="menu-contacts__link is-active" ui-sref="contacts.main({group_id: undefined})"><span class="">\u0412\u0441\u0435</span><!--<span class="font__size12">10</span>--></a><hr class="hr menu-contacts__hr"></div><!--\u041E\u0441\u043D\u043E\u0432\u043D\u043E\u0439 \u043A\u043E\u043D\u0442\u0435\u043D\u0442--><div class="menu-contacts__content"><ul class="menu-main"><li class="menu-main__item menu-main__item" ng-repeat="contactGroup in vm.contactGroup.items"><button class="btn-y pointer font__size15" type="button" ui-sref="contacts.main({group_id: contactGroup.id})"><svg class="menu-main__icon group-icon group-pall--c-1"><use xlink:href="#grid-square"></use></svg> {{ contactGroup.name }}</button></li></ul><div class="group-setup"><div class="group-setup__row"><a class="group-setup__link" href ng-click="vm.openGroupAddPopup()">\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0433\u0440\u0443\u043F\u043F\u0443 </a><a class="group-setup__link" ui-sref="settings.contacts">\u043D\u0430\u0441\u0442\u0440\u043E\u0438\u0442\u044C...</a></div><hr class="hr"></div></div><!--<a href ng-click="vm.openContactImportFilePopup()">Import (for test)</a>--><!-- \u0424\u0443\u0442\u0435\u0440--><div class="menu-main-contacts__footer"></div></div>');
$templateCache.put('app/layout/menu-main/menu-main.html','<div class="menu-main-layout font-sizer--bigger-15"><div class="menu-main-layout__item"><div class="menu-main-layout__buttons"><button class="btn btn--red btn--size_l mrg__right5 flex--inline align-items--cn" ui-sref="mail.compose"><span class="icon-write"></span> <span class="menu-main-layout__btn-text mrg__left10">\u041D\u0430\u043F\u0438\u0441\u0430\u0442\u044C</span></button> <button class="menu-main-layout__buttons--btn-color btn btn--size_l btn--yellow mrg__right5 flex--inline align-items--cn" ng-click="vm.syncMail()"><span class="icon-spinner"></span></button> <button class="menu-main-layout__buttons--btn-color btn btn--size_l btn--yellow flex--inline align-items--cn" ui-sref="contacts.main"><span class="icon-contacts2"></span></button></div><ul class="menu-main mrg__top20"><li class="menu-main__item" ng-repeat="folder in vm.folders.items"><a class="menu-main__link" ui-sref="mail.inbox({mbox: folder.name, filter: undefined, tag_id: undefined})" ui-sref-active="menu-main__link--active" ng-class="{\'menu-main__link--gray\': !folder.messagesCount}" ng-if="!folder.isSub"><span class="icon-select-arrow is-nesting is-nesting--open"></span> <span class="{{ folder.icon }} menu-main__icon"></span> <span class="menu-main__link-caption">{{ folder.caption }}</span><div class="menu-main__counter" ng-if="folder.unseen && folder.name === \'INBOX\'"><span class="round round--yellow"></span> <strong class="color--white">{{ folder.unseen }}</strong></div></a><ul class="menu-main__sub menu-main" ng-if="folder.isSub"><li class="menu-main__item"><a class="menu-main__link" ui-sref="mail.inbox({mbox: folder.name, filter: undefined, tag_id: undefined})" ui-sref-active="menu-main__link--active" ng-class="{\'menu-main__link--gray\': !folder.messagesCount}"><span class="menu-main__link-caption">{{ folder.caption }}</span> <span class="icon-select-arrow is-nesting is-nesting--open"></span></a></li></ul></li></ul><div class="menu-main-layout__item-content"><div class="folders-setup"><div class="folders-setup__row"><a class="folders-setup__link folders-setup__create" href ng-click="vm.openFolderCreatePopup()">\u0441\u043E\u0437\u0434\u0430\u0442\u044C \u043F\u0430\u043F\u043A\u0443 </a><a class="folders-setup__link folders-setup__settings" ui-sref="settings.folders"><!--\u043D\u0430\u0441\u0442\u0440\u043E\u0438\u0442\u044C...--> <span class="icon-settings font__size15"></span></a></div><hr class="hr folders-setup__hr"></div></div></div><div class="menu-main-layout__item mrg__top20"><div class="menu-main-layout__item-content padding--left10 padding--right10"><ul class="menu-main"><li class="menu-main__item"><button class="btn-y btn-y--active pointer font__size15" type="button" ui-sref="mail.inbox({mbox: undefined, filter: \'flagged\', tag_id: undefined})" ui-sref-active="btn-y--active"><span class="icon-important menu-main__icon"></span> <span class="menu-main__link-caption">\u0412\u0430\u0436\u043D\u044B\u0435</span></button></li><li class="menu-main__item"><button class="btn-y pointer font__size15" type="button" ui-sref="mail.inbox({mbox: undefined, filter: \'unseen\', tag_id: undefined})" ui-sref-active="btn-y--active"><span class="icon-unread-solid menu-main__icon"></span> <span class="menu-main__link-caption">\u041D\u0435\u043F\u0440\u043E\u0447\u0438\u0442\u0430\u043D\u043D\u044B\u0435</span></button></li><li class="menu-main__item"><button class="btn-y pointer font__size15" type="button" ui-sref="mail.inbox({mbox: undefined, filter: \'attaches\', tag_id: undefined})" ui-sref-active="btn-y--active"><span class="icon-attach menu-main__icon"></span> <span class="menu-main__link-caption">\u0421 \u0412\u043B\u043E\u0436\u0435\u043D\u0438\u0435\u043C</span></button></li></ul></div><!--<div class="padding padding--right20 padding--left20">--><!--<div class="folders-setup">--><!--<div class="folders-setup__row">--><!--<a class="folders-setup__link pointer" href>--><!--\u0441\u043E\u0437\u0434\u0430\u0442\u044C \u043F\u0430\u043F\u043A\u0443--><!--</a>--><!--<a class="folders-setup__link pointer" href>--><!--\u043D\u0430\u0441\u0442\u0440\u043E\u0438\u0442\u044C...--><!--</a>--><!--</div>--><!--<hr class="hr folders-setup__hr">--><!--</div>--><!--</div>--></div><div class="menu-main-layout__item mrg__top20"><div class="menu-main-layout__item-content padding--left10 padding--right10"><ul class="menu-main menu-main--tags"><li class="menu-main__item" ng-repeat="tag in vm.tags.items"><button class="menu-main__tag btn-y pointer" type="button" ui-sref="mail.inbox({mbox: undefined, filter: undefined, tag_id: tag.id})" ui-sref-active="menu-main__link--active"><div class="square square--green btn-y__icon" style="background: {{ tag.bgcolor }}"></div>{{ tag.tag_name }}</button> <button class="menu-main__tag-minimize btn-y pointer" type="button" ui-sref="mail.inbox({mbox: undefined, filter: undefined, tag_id: tag.id})" ui-sref-active="menu-main__link--active"><div class="square square--green btn-y__icon" style="background: {{ tag.bgcolor }}"><span class="square__text">{{ tag.tag_name }}</span></div></button></li><!--<li class="menu-main__item">--><!--<button class="btn-y pointer" type="button">--><!--<div class="square square&#45;&#45;green btn-y__icon"></div>--><!--\u0422\u0435\u0433 2--><!--</button>--><!--</li>--><!--<li class="menu-main__item">--><!--<button class="btn-y pointer" type="button">--><!--<div class="square square&#45;&#45;green btn-y__icon"></div>--><!--\u0422\u0435\u0433 3--><!--</button>--><!--</li>--><!--<li class="menu-main__item">--><!--<button class="btn-y pointer" type="button">--><!--<div class="square square&#45;&#45;green btn-y__icon"></div>--><!--\u0422\u0435\u0433 4--><!--</button>--><!--</li>--><!--<li class="menu-main__item">--><!--<button class="btn-y pointer" type="button">--><!--<div class="square square&#45;&#45;green btn-y__icon"></div>--><!--\u041D\u043E\u0432\u0430\u044F--><!--</button>--><!--</li>--></ul></div></div><div class="menu-main-layout__item menu-main-layout__settings-tags"><div class="menu-main-layout__item-content"><div class="folders-setup"><div class="folders-setup__row"><a class="folders-setup__link" href ng-click="vm.openTagCreatePopup()">\u0441\u043E\u0437\u0434\u0430\u0442\u044C \u043C\u0435\u0442\u043A\u0443 </a><a class="folders-setup__link" ui-sref="settings.tags">\u0441\u043F\u0438\u0441\u043E\u043A \u043C\u0435\u0442\u043E\u043A...</a></div><hr class="hr folders-setup__hr"></div></div></div><div class="menu-main-layout__item mrg__top20"><div class="menu-main-layout__item-content"><button class="menu-main-layout__other-mails btn-y btn-y--size26 btn-y--border btn-y--image-icon btn-y--white pointer" type="button" ui-sref="settings.accounts"><span class="btn-y__name">\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0434\u0440\u0443\u0433\u043E\u0439 \u044F\u0449\u0438\u043A </span><img class="btn-y__icon" src="/images/gmail.png"> <img class="btn-y__icon" src="/images/yahoo-mail.png"></button> <a class="menu-main-layout__other-mails-minimize" ui-sref="settings.accounts"><span class="icon-other-mails color--blue"></span></a></div></div><div class="menu-main-layout__item mrg__top20"><div class="menu-main-layout__item-content"><a class="menu-main-layout__button-tarif" ui-sref="storage"><img class="img-responsive" src="/images/tarif-button.png"> </a><a class="menu-main-layout__button-tarif-minimize" ui-sref="storage"><span class="icon-mail-space color--green"></span></a></div></div></div>');
$templateCache.put('app/layout/menu-settings/menu-settings.html','<div class="menu-settings-layout font-sizer--bigger-15"><div class="menu-settings"><div class="menu-settings__list"><div class="menu-settings__item"><a class="menu-settings__link" ui-sref="settings.main" ui-sref-active="menu-settings__link--active">\u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u043E\u043C</a></div><div class="menu-settings__item"><a class="menu-settings__link" ui-sref="settings.folders" ui-sref-active="menu-settings__link--active">\u041F\u0430\u043F\u043A\u0438</a></div><div class="menu-settings__item"><a class="menu-settings__link" ui-sref="settings.tags" ui-sref-active="menu-settings__link--active">\u041C\u0435\u0442\u043A\u0438</a></div><div class="menu-settings__item"><a class="menu-settings__link" ui-sref="settings.rules" ui-sref-active="menu-settings__link--active">\u041F\u0440\u0430\u0432\u0438\u043B\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438</a></div><div class="menu-settings__item"><a class="menu-settings__link" ui-sref="settings.accounts" ui-sref-active="menu-settings__link--active">\u041F\u043E\u0447\u0442\u0430 \u0441 \u0434\u0440\u0443\u0433\u0438\u0445 \u044F\u0449\u0438\u043A\u043E\u0432</a></div></div></div><hr class="hr hr--dotted menu-settings-layout__hr"><div class="menu-settings"><div class="menu-settings__list"><div class="menu-settings__item"><a class="menu-settings__link" ui-sref="settings.contacts" ui-sref-active="menu-settings__link--active">\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u043E\u0432</a></div></div></div><hr class="hr hr--dotted menu-settings-layout__hr"><div class="menu-settings"><div class="menu-settings__list"><div class="menu-settings__item"><a class="menu-settings__link" href="">\u042F\u0437\u044B\u043A: \u0420\u0443\u0441\u0441\u043A\u0438\u0439</a></div><div class="menu-settings__item mrg__top20"><a class="menu-settings__link" href="">\u0427\u0430\u0441\u044B: (GMT+02:00) \u041A\u0438\u0435\u0432</a></div></div></div><div class="menu-settings-layout__padding"><button class="btn-y btn-y--size26 btn-y--border pointer mrg__top20" type="button" href ng-click="vm.openPasswordChangePopup()">\u041F\u043E\u043C\u0435\u043D\u044F\u0442\u044C \u043F\u0430\u0440\u043E\u043B\u044C</button><p class="menu-settings-layout__pass-info mrg__top5">\u0420\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u043C \u0432\u0430\u043C \u0432 \u0446\u0435\u043B\u044F\u0445 \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u0438 \u043C\u0435\u043D\u044F\u0442\u044C \u043F\u0430\u0440\u043E\u043B\u044C \u043A\u0430\u0436\u0434\u044B\u0435 6 \u043C\u0435\u0441\u044F\u0446\u0435\u0432, \u0430 \u0442\u0430\u043A\u0436\u0435 \u0443\u043A\u0430\u0437\u0430\u0442\u044C \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u043E \u0441\u0435\u0431\u0435 \u2014 \u044D\u0442\u043E \u043F\u043E\u043C\u043E\u0436\u0435\u0442 \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u043F\u0430\u0440\u043E\u043B\u044C, \u0435\u0441\u043B\u0438 \u0432\u044B \u0435\u0433\u043E \u0437\u0430\u0431\u0443\u0434\u0435\u0442\u0435.</p></div></div>');
$templateCache.put('app/mail/compose/compose.html','<compose-header></compose-header><div class="layout--padding20 mrg__right20"><form name="sendForm" ng-submit="vm.send(sendForm)" novalidate><div class="compose-from mrg__top20"><div class="compose-from__item font__size13" ng-if="vm.$state.params.template"><button class="btn btn--size_s btn--yellow width--inh" type="button" ng-click="vm.save()">\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0448\u0430\u0431\u043B\u043E\u043D</button></div><div class="compose-from__item font__size13"><button class="btn btn--size_s btn--yellow width--inh" type="submit">\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C</button></div><div class="compose-from__item font__size13">\u043E\u0442 \u043A\u043E\u0433\u043E:</div><div class="compose-from__item font__size15"><div class="avatar avatar--size28"><img class="avatar__image" src="/images/avatar.png"></div></div><div class="compose-from__item font__size15">{{ vm.user.profile.email }}</div><div class="compose-from__item font--size13"><button class="btn-y" type="button">({{ vm.user.profile.email }}) <span class="btn-y__icon btn-y__icon--arrow icon-arrow-down"></span></button></div></div><div class="input-line input-line--full mrg__top20 position"><label class="input-line__label"><a class="link link--gray link--hv-red font__size13" href="">\u041A\u043E\u043C\u0443</a></label><div class="input-line__links"><a class="link link--violet link--hv-red font__size15" href ng-click="vm.isCopy = true">\u041A\u043E\u043F\u0438\u044F </a><a class="link link--violet link--hv-red font__size15" href="#" ng-click="vm.isCopyHidden = true">\u0421\u043A\u0440\u044B\u0442\u0430\u044F \u043A\u043E\u043F\u0438\u044F</a></div><contact-to-add-select addresses="vm.sendForm.model.to"></contact-to-add-select></div><div class="input-line__error" ng-if="sendForm.to.$invalid && sendForm.$submitted">\u041F\u043E\u043B\u0435 \u043D\u0435 \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u043E. \u041D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0432\u0432\u0435\u0441\u0442\u0438 \u0430\u0434\u0440\u0435\u0441.</div><div class="input-line input-line--full position mrg__top10" ng-if="vm.isCopy"><label class="input-line__label"><a class="link link--gray link--hv-re font__size13" href="">\u041A\u043E\u043F\u0438\u044F</a></label><contact-to-add-select addresses="vm.sendForm.model.toCopy"></contact-to-add-select></div><div class="input-line input-line--full position mrg__top10" ng-if="vm.isCopyHidden"><label class="input-line__label"><a class="link link--gray link--hv-re font__size13" href="">\u0421\u043A\u0440\u044B\u0442\u0430\u044F</a></label><contact-to-add-select addresses="vm.sendForm.model.toCopyHidden"></contact-to-add-select></div><div class="input-line input-line--full mrg__top10"><div class="input-line__body"><label class="input-line__label"><a class="link link--gray link--hv-re font__size13" href="">\u0422\u0435\u043C\u0430</a></label><div class="input-line__links"><a class="link link--violet link--hv-red font__size13" href uib-popover-template="\'app/components/template-list/template-list-popover.html\'" popover-class="popover--template-list" popover-placement="bottom-right" popover-animation="true" popover-trigger="\'outsideClick\'">\u0428\u0430\u0431\u043B\u043E\u043D</a></div><input class="input-line__input" type="text" ng-model="vm.sendForm.model.subject"></div></div><div class="mrg__top20"><div message-textarea ng-model="vm.sendForm.model.body"></div></div><div class="row mrg__top20"><div class="col-xs-6"><!--<compose-send></compose-send>--><div class="compose-send"><div class="btn-group compose-send__item"><button class="btn-group__btn btn btn--size_m btn--yellow" type="submit">\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C<to-date date-unix="vm.sendForm.model.sdate"></to-date></button> <button class="btn-group__btn btn btn--size_m btn--yellow" type="button" uib-popover-template="\'app/components/time-send/time-send-popover.html\'" popover-class="popover--time-send popover--no-arrow" popover-placement="top" popover-animation="true" popover-trigger="\'outsideClick\'"><span class="icon-clock"></span></button></div><button class="btn btn--not-style btn--attach btn--size_m btn--not-events width--size28 icon-attach font__size16 mrg__left5 compose-send__item" type="file" multiple="multiple" accept="**/*" ngf-select="vm.upload($files, $invalidFiles)"><!--<span class="icon-attach"></span>--></button></div></div><div class="col-xs-6"><p class="font__size13 pull-right">\u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u043E \u043A\u0430\u043A \u0447\u0435\u0440\u043D\u043E\u0432\u0438\u043A \u0432<to-date date="vm.sendForm.model.date.date"></to-date></p></div></div><div class="row mrg__top20"><div class="col-xs-12"><attach-upload attachments-data="vm.sendForm.model.attachmentsData" message="vm.sendForm" is-uploading="vm.isUploading"></attach-upload></div></div><div class="row mrg__top20" ng-if="vm.fwd.items.length >= 2"><div class="col-xs-12"><div ng-repeat="fwd in vm.fwd.items"><div class="inbox-message__checked"><div class="checkbox-y checkbox-y--size14" ng-click="$event.stopPropagation();"><label class="checkbox-y__label"><input class="checkbox-y__input" type="checkbox" data-checklist-model="vm.fwd.checked" data-checklist-value="fwd"><div class="checkbox-y__body"><span class="checkbox-y__icon"></span></div><div class="checkbox-y__text">\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \xAB<a ui-sref="mail.message({id: fwd.number, mbox: fwd.mbox, connection_id: fwd.connection_id})" target="_blank">{{ fwd.Subject ? fwd.Subject : \'(\u0411\u0435\u0437 \u0442\u0435\u043C\u044B)\' }}\xBB</a> \u0432 \u0432\u0438\u0434\u0435 \u0432\u043B\u043E\u0436\u0435\u043D\u0438\u044F</div></label></div></div></div></div></div></form></div>');
$templateCache.put('app/mail/inbox/inbox.html','<inbox-header messages="vm.messages"></inbox-header><div class="inbox-templates font-sizer--bigger-15" ng-if="vm.$state.params.mbox === \'Templates\'"><div class="inbox-templates__new-template-message"><span class="inbox-templates__text-message">\u0412 \u044D\u0442\u043E\u0439 \u043F\u0430\u043F\u043A\u0435 \u0445\u0440\u0430\u043D\u044F\u0442\u0441\u044F \u0448\u0430\u0431\u043B\u043E\u043D\u044B, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043C\u043E\u0436\u043D\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u043A\u0430\u043A \u043E\u0441\u043D\u043E\u0432\u0443 \u0434\u043B\u044F \u043D\u0430\u043F\u0438\u0441\u0430\u043D\u0438\u044F \u043F\u043E\u0432\u0442\u043E\u0440\u044F\u044E\u0449\u0438\u0445\u0441\u044F \u043F\u0438\u0441\u0435\u043C</span> <button class="btn btn--normal btn--size_xs btn--silver-hover btn--silver-bg-y-shw width--aut mrg__top10" type="button" ui-sref="mail.compose({\'template\': true})">\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0448\u0430\u0431\u043B\u043E\u043D</button></div></div><div class="search-result" ng-if="vm.isNoResult"><strong>\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u044B \u043F\u043E\u0438\u0441\u043A\u0430 \xABinfo\xBB</strong></div><div class="search-result search-result--no-result" ng-if="(vm.messages.params.mbox === \'INBOX\' || !vm.messages.params.mbox) && !vm.messages.params.search && !vm.messages.params.tag_id && !vm.messages.params.filter &&!vm.messages.items.length">\u0423 \u0432\u0430\u0441 \u043D\u0435\u0442 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0439.<div class="mrg__top10"><a class="link link--black link--underline" ui-sref="mail.compose()">\u041D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u043F\u0438\u0441\u044C\u043C\u043E</a></div></div><div class="search-result search-result--no-result" ng-if="vm.messages.params.mbox && vm.messages.params.mbox !== \'INBOX\' && !vm.messages.params.search && !vm.messages.params.tag_id && !vm.messages.params.filter &&!vm.messages.items.length">\u0412 \u043F\u0430\u043F\u043A\u0435 \xAB{{ vm.$state.params.mbox }}\xBB \u043D\u0435\u0442 \u043F\u0438\u0441\u0435\u043C.<div class="mrg__top10"><a class="link link--black link--underline" ui-sref="mail.inbox({mbox: \'INBOX\'})">\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 \u043F\u0430\u043F\u043A\u0443 \xAB\u0412\u0445\u043E\u0434\u044F\u0449\u0438\u0435\xBB</a></div></div><div class="search-result search-result--no-result" ng-if="vm.messages.params.tag_id && !vm.messages.items.length">\u041F\u0438\u0441\u0435\u043C \u0441 \u043C\u0435\u0442\u043A\u043E\u0439 \xAB{{ vm.$state.params.tag_id }}\xBB \u043F\u043E\u043A\u0430 \u043D\u0435\u0442.<div class="mrg__top10"><a class="link link--black link--underline" ui-sref="mail.inbox({mbox: \'INBOX\'})">\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 \u043F\u0430\u043F\u043A\u0443 \xAB\u0412\u0445\u043E\u0434\u044F\u0449\u0438\u0435\xBB</a></div></div><div class="search-result search-result--no-result" ng-if="vm.messages.params.filter === \'unseen\' && !vm.messages.items.length">\u041D\u0435\u043F\u0440\u043E\u0447\u0438\u0442\u0430\u043D\u043D\u044B\u0445 \u043F\u0438\u0441\u0435\u043C \u043D\u0435\u0442.<div class="mrg__top10"><a class="link link--black link--underline" ui-sref="mail.inbox({mbox: \'INBOX\'})">\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 \u043F\u0430\u043F\u043A\u0443 \xAB\u0412\u0445\u043E\u0434\u044F\u0449\u0438\u0435\xBB</a></div></div><div class="search-result search-result--no-result" ng-if="vm.messages.params.filter === \'flagged\' && !vm.messages.items.length">\u041F\u0438\u0441\u0435\u043C \u0441 \u043C\u0435\u0442\u043A\u043E\u0439 \xAB\u0412\u0430\u0436\u043D\u044B\u0435\xBB \u043F\u043E\u043A\u0430 \u043D\u0435\u0442<div class="mrg__top10"><a class="link link--black link--underline" ui-sref="mail.inbox({mbox: \'INBOX\', filter: undefined, tag_id: undefined})">\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 \u043F\u0430\u043F\u043A\u0443 \xAB\u0412\u0445\u043E\u0434\u044F\u0449\u0438\u0435\xBB</a></div></div><div class="search-result search-result--no-result" ng-if="vm.messages.params.search && !vm.messages.items.length"><strong class="font__size18">\u041D\u0435 \u043D\u0430\u0448\u043B\u043E\u0441\u044C \u043D\u0438 \u043E\u0434\u043D\u043E\u0433\u043E \u043F\u0438\u0441\u044C\u043C\u0430. \u041F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0441\u0444\u043E\u0440\u043C\u0443\u043B\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0437\u0430\u043F\u0440\u043E\u0441 \u0438\u043D\u0430\u0447\u0435</strong><p class="color--gray mrg__top20">\u0420\u0435\u043A\u043E\u043C\u043C\u0435\u043D\u0434\u0430\u0446\u0438\u0438:</p><ul class="list-dash list-dash--gray"><li class="list-dash__item">\u0423\u0431\u0435\u0434\u0438\u0442\u0435\u0441\u044C, \u0447\u0442\u043E \u0432 \u0437\u0430\u043F\u0440\u043E\u0441\u0435 \u043D\u0435\u0442 \u043E\u0448\u0438\u0431\u043E\u043A</li><li class="list-dash__item">\u041F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0443\u043C\u0435\u043D\u044C\u0448\u0438\u0442\u044C \u0434\u0438\u043B\u043D\u043D\u0443 \u0437\u0430\u043F\u0440\u043E\u0441\u0430</li><li class="list-dash__item">\u0415\u0441\u043B\u0438 \u0432\u044B \u043F\u043E\u043C\u043D\u0438\u0442\u0435 \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u0435\u043B\u044F, \u043F\u043E\u043B\u0443\u0447\u0430\u0442\u0435\u043B\u044F, \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u044F \u0444\u0430\u0439\u043B\u043E\u0432 \u0438\u043B\u0438 \u0438\u0445 \u0442\u0438\u043F, \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0432\u043E\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043D\u044B\u043C \u043F\u043E\u0438\u0441\u043A\u043E\u043C \u0438\u043B\u0438 \u044F\u0437\u044B\u043A\u043E\u043C \u0437\u0430\u043F\u0440\u043E\u0441\u043E\u0432</li><li class="list-dash__item">\u041F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u043D\u0430\u0439\u0442\u0438 \u043D\u0443\u0436\u043D\u043E\u0435 \u043F\u0438\u0441\u044C\u043C\u043E \u0432\u0440\u0443\u0447\u043D\u0443\u044E</li></ul></div><div class="inbox-list"><inbox-message-list messages="vm.messages"></inbox-message-list><div class="inbox-list__pagination"><paginate-button data="vm.messages"></paginate-button></div></div><div class="inbox-footer mrg__top30"><div class="inbox-footer__row"><div><!--<div class="font__size13">--><!--\u0412\u044B \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u043B\u0438 \u0432\u0441\u0435 \u043F\u0438\u0441\u044C\u043C\u0430 \u0437\u0430 \u043C\u0430\u0440\u0442 2017 \u0433\u043E\u0434\u0430--><!--</div>--><!--<div class="mrg__top20">--><!--<a class="link link&#45;&#45;underline link&#45;&#45;next" href="">\u0430\u043F\u0440\u0435\u043B\u044C--><!--<span class="icon-next"></span></a>--><!--</div>--></div><div class="date-sort"><div class="date-sort__title">\u041F\u0438\u0441\u044C\u043C\u0430 \u043F\u043E \u043C\u0435\u0441\u044F\u0446\u0430\u043C:</div><div class="date-sort__row"><!--<a class="date-sort__link" href="">2017:</a>--> <a class="date-sort__link" href>\u043C\u0430\u0439</a><!--<a class="date-sort__link" href="">\u0430\u043F\u0440\u0435\u043B\u044C</a>--></div></div></div></div>');
$templateCache.put('app/mail/message/message.html','<inbox-header messages="vm.messages"></inbox-header><div class="mail-message"><div class="mail-message__main-content"></div><div class="mail-message__right-sidebar"><div class="additional-mail-info"><div class="additional-mail-info__letters-on-thems"><div class="additional-mail-info__caption">\u041F\u0418\u0421\u042C\u041C\u0410 \u041D\u0410 \u0422\u0415\u041C\u0423</div><div class="additional-mail-info__list"><div class="additional-mail-info__items"><a class="additional-mail-info__item"><div class="additional-mail-info__item-header"><span class="additional-mail-info__name">Bkmz Gfoer</span> <span class="additional-mail-info__date">15:00</span></div><div class="additional-mail-info__text-message">dsfdfddgdfg dfgdf gdf gdf gdf gdf gg fdg dfg</div></a><a class="additional-mail-info__item"><div class="additional-mail-info__item-header"><span class="additional-mail-info__name">Bkmz Gfoer</span> <span class="additional-mail-info__date">15:00</span></div><div class="additional-mail-info__text-message">dsfdfddgdfg dfgdf gdf gdf gdf gdf gg fdg dfg</div></a><a class="additional-mail-info__item"><div class="additional-mail-info__item-header"><span class="additional-mail-info__name">Bkmz Gfoer</span> <span class="additional-mail-info__date">15:00</span></div><div class="additional-mail-info__text-message">dsfdfddgdfg dfgdf gdf gdf gdf gdf gg fdg dfg</div></a></div><div class="additional-mail-info__items-spinner"><spinner is-global="true"></spinner></div></div></div><div class="additional-mail-info__attachments"><div class="additional-mail-info__caption">\u0412\u041B\u041E\u0416\u0415\u041D\u0418\u042F</div><div class="additional-mail-info__list"><div class="additional-mail-info__items attachments flex--row-wrap just-content--sp-are"><div class="attachments__item" ng-repeat="attachment in vm.message.model.attachmentsData"><attach-item attach="attachment" message="vm.message"></attach-item></div></div><div class="additional-mail-info__items-spinner"><spinner is-global="true"></spinner></div></div></div><!----><!--<div class="additional-mail-info__links">--><!--<div class="additional-mail-info__caption">--><!--\u0421\u0441\u044B\u043B\u043A\u0438--><!--</div>--><!--<div class="additional-mail-info__list">--><!--<div class="additional-mail-info__items attachments flex&#45;&#45;row-wrap just-content&#45;&#45;sp-are">--><!--<div class="attachments__item" ng-repeat="attachment in vm.message.model.attachmentsData">--><!--<attach-item attach="attachment" message="vm.message"></attach-item>--><!--</div>--><!--</div>--><!--<div class="additional-mail-info__items-spinner">--><!--<spinner is-global="true"></spinner>--><!--</div>--><!--</div>--><!--</div>--><!----><div class="additional-mail-info__letters-from is-open"><div class="additional-mail-info__caption">\u041F\u0418\u0421\u042C\u041C\u0410 \u041E\u0422 \u0418\u041B\u042C\u042F \u041F\u0410\u0429\u0423\u041A</div><div class="additional-mail-info__list"><div class="additional-mail-info__items additional-mail-info__items--letters-from"><a class="additional-mail-info__item additional-mail-info__item--active"><div class="additional-mail-info__item-header"><span class="additional-mail-info__name">Bkmz Gfoer</span> <span class="additional-mail-info__date">15:00</span></div><div class="additional-mail-info__text-message">dsfdfddgdfg dfgdf gdf gdf gdf gdf gg fdg dfg</div></a><a class="additional-mail-info__item"><div class="additional-mail-info__item-header"><span class="additional-mail-info__name">Bkmz Gfoer</span> <span class="additional-mail-info__date">15:00</span></div><div class="additional-mail-info__text-message">dsfdfddgdfg dfgdf gdf gdf gdf gdf gg fdg dfg</div></a><a class="additional-mail-info__item"><div class="additional-mail-info__item-header"><span class="additional-mail-info__name">Bkmz Gfoer</span> <span class="additional-mail-info__date">15:00</span></div><div class="additional-mail-info__text-message">dsfdfddgdfg dfgdf gdf gdf gdf gdf gg fdg dfg</div></a><a class="additional-mail-info__item"><div class="additional-mail-info__item-header"><span class="additional-mail-info__name">Bkmz Gfoer</span> <span class="additional-mail-info__date">15:00</span></div><div class="additional-mail-info__text-message">dsfdfddgdfg dfgdf gdf gdf gdf gdf gg fdg dfg</div></a></div><div class="additional-mail-info__items-spinner"><spinner is-global="true"></spinner></div></div></div></div></div><!-- \u0425\u0435\u0434\u0435\u0440 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F --><div class="mail-message__head"><div class="flex flex--colum"><div class="mail-message__title mrg-top18">{{ vm.message.model.Subject }}</div><div class="info-sender flex--inline" ng-mouseover="vm.message.hover = true" ng-mouseleave="vm.message.hover = false"><div class="mail-message__importance pointer" ng-class="{\'opacity--0\': !vm.message.hover && !vm.message.model.important}" ng-click="vm.setImportant()"><span class="icon-important" ng-class="{\'color--red\': vm.message.model.important}"></span></div><div class="info-sender__avatar flex"><avatar-name class="avatar avatar--settings avatar--size42 avatar--second-style mrg__auto" name="vm.message.model.from" email="vm.message.model.fromAddress"></avatar-name><!--<avatar-name class="avatar avatar&#45;&#45;settings avatar&#45;&#45;size42 avatar&#45;&#45;second-style mrg__auto"--><!--name="vm.message.model.to[0].name" email="vm.message.model.to[0].address"--><!--ng-if="vm.$state.params.mbox === \'Sent\'"></avatar-name>--></div><div class="info-sender__title"><div class="info-sender__from-whom">{{ vm.message.model.from }} <span class="info-sender__from-whom__mail-name">{{ vm.message.model.fromAddress }}</span></div><div class="info-sender__to-whom flex--inline"><span ng-if="vm.$state.params.mbox !== \'Sent\'">\u0412\u0430\u043C:</span> <span ng-if="vm.$state.params.mbox === \'Sent\'">\u041F\u043E\u043B\u0443\u0447\u0430\u0442\u0435\u043B\u044C:</span><!-- <div class="avatar avatar&#45;&#45;settings avatar&#45;&#45;size20 avatar&#45;&#45;second-style mrg__left10"\n                              ng-if="vm.isFromOpen && vm.$state.params.mbox !== \'Sent\'">\n                             <img class="avatar__image" src="/images/avatar-personal.svg" alt="">\n                         </div>--><avatar-name class="avatar avatar--settings avatar--size20 avatar--second-style mrg__left10" name="vm.message.model.to[0].name" email="vm.message.model.to[0].address" ng-if="vm.isFromOpen && vm.$state.params.mbox !== \'Sent\'"></avatar-name><!--<div class="avatar avatar&#45;&#45;settings avatar&#45;&#45;size20 avatar&#45;&#45;second-style mrg__left10"--><!--ng-if="vm.isFromOpen && vm.$state.params.mbox === \'Sent\'">--><!--<img class="avatar__image" src="/images/avatar-personal.svg" alt="">--><!--</div>--><avatar-name class="avatar avatar--settings avatar--size20 avatar--second-style mrg__left10" name="vm.message.model.to[0].name" email="vm.message.model.to[0].address" ng-if="vm.isFromOpen && vm.$state.params.mbox === \'Sent\'"></avatar-name><span class="mrg__left5" ng-if="vm.isFromOpen && vm.$state.params.mbox !== \'Sent\'">{{ vm.message.model.to[0].address }} </span><span class="mrg__left5" ng-if="vm.isFromOpen && vm.$state.params.mbox === \'Sent\'">{{ vm.message.model.to[0].address }} </span><!--<button class="btn btn&#45;&#45;not-style btn&#45;&#45;not-events bth&#45;&#45;toggle-arrow icon-arrow-up font__size10 color&#45;&#45;gray"\n                                type="button"\n                                ng-click="vm.isFromOpen = !vm.isFromOpen"></button>--> <a class="font__size10 color--gray mrg__left10" href ng-class="{\'icon-arrow-up\': vm.isFromOpen, \'icon-arrow-down\': !vm.isFromOpen}" ng-click="vm.isFromOpen = !vm.isFromOpen"></a></div></div><div class="info-sender__date mrg__right"><to-date date="vm.message.model.date.date"></to-date></div></div></div></div><div class="mail-message__labels"><div class="mail-message__labels-content"><div class="letter-tags letter-tags--poss-remove" style="background: {{ tag.bgcolor }}; color: {{ tag.color }}" ng-repeat="tag in vm.message.model.tags"><span class="letter-tags__name">{{ tag.tag_name }}</span> <button class="btn btn--not-style btn--circle letter-tags__icon" ng-click="vm.setUnTag(tag)"><span class="icon-remove-thick"></span></button></div></div></div><div class="flex flex--colum"><div class="mail-message__attachments attachments"><div class="attachments__item" ng-repeat="attachment in vm.message.model.attachmentsData"><attach-item attach="attachment" message="vm.message"></attach-item></div></div></div><!-- \u0422\u0435\u043B\u043E \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F --><div class="mail-message__body"><div class="flex flex--colum"><div class="body-message"><!--\u0421\u0430\u043C\u043E \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435--><div class="body-message__content" ng-bind-html="vm.getTrustHtml(vm.message.model.body)"></div></div></div></div><!-- \u0411\u044B\u0441\u0442\u0440\u044B\u0439 \u043E\u0442\u0432\u0435\u0442--><div class="flex flex--colum"><div class="mail-message__reply flex--inline"><div class="mail-message__reply__avatar flex"><div class="avatar avatar--settings avatar--size42 avatar--second-style mrg__top"><img class="avatar__image" src="/images/avatar-personal.svg" alt=""></div></div><!-- \u043F\u043E\u043B\u0435 \u0434\u043B\u044F \u0432\u0432\u043E\u0434\u0430 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F \u0441 \u0434\u0432\u0443\u043C\u044F \u0441\u043E\u0442\u043E\u044F\u043D\u0438\u044F\u043C\u0438--><!--\n               **! \u042D\u0442\u043E\u0442 \u043A\u043B\u0430\u0441\u0441 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0430\u0442\u0435\u043B\u0435\u043C \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438 \u0434\u043B\u044F \u043F\u043E\u043B\u044F \u0432\u0432\u043E\u0434\u0430\n                   >>> quick-reply--used-input-message\n            --><div class="quick-reply" ng-click="vm.isSendTextOpen = true" ng-class="{\'quick-reply--used-input-message\': vm.isSendTextOpen}"><!-- \u0434\u043E \u043D\u0430\u0436\u0430\u0442\u0438\u044F--><div class="quick-reply__not-form-message"><div class="quick-reply__not-form-message__title">\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u0437\u0434\u0435\u0441\u044C, \u0447\u0442\u043E\u0431\u044B <span class="quick-reply__not-form-message__title__method">\u041E\u0442\u0432\u0435\u0442\u0438\u0442\u044C</span> \u0438\u043B\u0438 <span class="quick-reply__not-form-message__title__method">\u041F\u0435\u0440\u0435\u0441\u043B\u0430\u0442\u044C</span></div></div><!-- \u043F\u043E\u0441\u043B\u0435 \u043D\u0430\u0436\u0430\u0442\u0438\u044F--><div class="quick-reply__form-message"><button class="quick-reply__form-message__btn-close btn btn--not-style btn-y--close font__size16" type="button" ng-click="vm.isSendTextOpen = false; $event.stopPropagation();"><img class="btn-y__icon" src="/images/cancel.svg"></button><!-- \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438\u044F \u043E \u0430\u0434\u0440\u0435\u0441\u0441\u0430\u0442\u0435--><div class="quick-reply__form-message__header to-whom"><span class="to-whom__title">\u041A\u043E\u043C\u0443:</span> <span class="to-whom__mail-recipient">{{ vm.message.model.from ? vm.message.model.from : vm.message.model.fromAddress }}</span></div><form class="message-input" name="form" ng-submit="vm.send(form)"><!-- \u041F\u043E\u043B\u0435 \u0432\u0432\u043E\u0434\u0430 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F--><div class="quick-reply__form-message__content"><!-- \u041F\u043E\u043B\u0435--><textarea class="textarea textarea--not-resize font__size14" name="massage" ng-if="vm.isSendTextOpen" set-focus msd-elastic placeholder="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435" ng-model="vm.sendForm.model.body"></textarea></div><!-- \u041E\u0441\u043D\u043E\u0432\u043D\u0430\u044F \u043D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u044F \u043F\u043E \u0434\u0435\u0441\u0442\u0432\u0438\u044F\u043C--><div class="quick-reply__form-message__footer control-send-message"><button class="btn btn--yellow btn--act--y-shw btn--size_sm" type="submit">\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C</button> <button class="btn btn--not-style btn--attach btn--size_sm btn--not-events width--size28 icon-attach font__size16 mrg__left5" type="file" multiple="multiple" accept="**/*" ngf-select="vm.upload($files, $invalidFiles)"></button> <span class="quick-reply__form-message__footer__allform font__size15" ui-sref="mail.compose({mbox: vm.message.model.mbox, id: vm.message.model.number, connection_id: vm.message.model.connection_id})">\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 \u043F\u043E\u043B\u043D\u0443\u044E \u0444\u043E\u0440\u043C\u0443 \u043E\u0442\u0432\u0435\u0442\u0430</span></div></form></div></div></div><div class="row mrg__top20"><div class="col-xs-12"><attach-upload attachments-data="vm.sendForm.model.attachmentsData" message="vm.sendForm" is-uploading="vm.isUploading"></attach-upload></div></div></div></div><div class="messages-nav"><a class="messages-nav__item"><span class="messages-nav__icon icon-preview"></span> <span class="messages-nav__avatar"><avatar-name class="avatar avatar--settings avatar--size28 avatar--second-style mrg__auto" name="vm.message.model.from" email="vm.message.model.fromAddress"></avatar-name></span><span class="messages-nav__message-title">\u041A\u043E\u043C\u0430\u043D\u0434\u0430 \u042F\u043D\u0434\u0435\u043A\u0441.\u041F\u043E\u0447\u0442\u044B</span> <span class="messages-nav__message-body">\u041A\u0430\u043A \u0447\u0438\u0442\u0430\u0442\u044C \u043F\u043E\u0447\u0442\u0443 \u0441 \u043C\u043E\u0431\u0438\u043B\u044C\u043D\u043E\u0433\u043E</span> </a><a class="messages-nav__item"><span class="messages-nav__avatar"><avatar-name class="avatar avatar--settings avatar--size28 avatar--second-style mrg__auto" name="vm.message.model.from" email="vm.message.model.fromAddress"></avatar-name></span><span class="messages-nav__message-title">\u041A\u043E\u043C\u0430\u043D\u0434\u0430 \u042F\u043D\u0434\u0435\u043A\u0441.\u041F\u043E\u0447\u0442\u044B</span> <span class="messages-nav__message-body">\u041A\u0430\u043A \u0447\u0438\u0442\u0430\u044C \u043F\u043E\u0447\u0442\u0443 \u0441 \u043C\u043E\u0431\u0438\u043B\u044C\u043D\u043E\u0433\u043E</span> <span class="messages-nav__icon messages-nav__icon--next icon-next"></span></a></div>');
$templateCache.put('app/marketing/home/home.html','<h1>Welcome to <a ui-sref="mail.inbox({mbox: \'INBOX\'})">mail</a></h1>');
$templateCache.put('app/settings/accounts/accounts.html','<div class="layout__bread-crumbs mrg__bottom15"><div class="bread-crumbs font-sizer--bigger-20"><a class="bread-crumbs__item" ui-sref="mail.inbox">\u041F\u043E\u0447\u0442\u0430</a> <a class="bread-crumbs__item" ui-sref="settings.main">\u0412\u0441\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438</a> <a class="bread-crumbs__item bread-crumbs--active">\u041F\u043E\u0447\u0442\u0430 \u0441 \u0434\u0440\u0443\u0433\u0438\u0445 \u044F\u0449\u0438\u043A\u043E\u0432</a></div></div><article class="layout-settings"><section class="layout-settings__row mrg__left"><!-- \u041F\u043E\u0447\u0442\u0430 \u0441 \u0434\u0440\u0443\u0433\u0438\u0445 \u044F\u0449\u0438\u043A\u043E\u0432 --><div class="accounts-settings"><!-- \u0412\u0435\u0440\u0445\u043D\u044F\u044F \u0447\u0430\u0441\u0442\u044C--><div class="accounts-settings__head"><div class="accounts-settings__notific notific--layout">\u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u043F\u0435\u0440\u0435\u043D\u0430\u043F\u0440\u0430\u0432\u043B\u044F\u0442\u044C \u0432\u0445\u043E\u0434\u044F\u0449\u0443\u044E \u043F\u043E\u0447\u0442\u0443 \u0441 \u0434\u0440\u0443\u0433\u0438\u0445 \u0432\u0430\u0448\u0438\u0445 \u043F\u043E\u0447\u0442\u043E\u0432\u044B\u0445 \u044F\u0449\u0438\u043A\u043E\u0432 \u0432 \u0432\u0430\u0448 \u044F\u0449\u0438\u043A \u043D\u0430 \u042F\u043D\u0434\u0435\u043A\u0441\u0435. \u0414\u043B\u044F \u044D\u0442\u043E\u0433\u043E \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u0442\u0435 \u0441\u043E\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u044F \u0441 \u0432\u0430\u0448\u0438\u043C\u0438 \u043F\u043E\u0447\u0442\u043E\u0432\u044B\u043C\u0438 \u044F\u0449\u0438\u043A\u0430\u043C\u0438 \u043D\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430\u0445, \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u044E\u0449\u0438\u0445 \u043F\u0440\u043E\u0442\u043E\u043A\u043E\u043B POP3 \u0438\u043B\u0438 IMAP.</div></div><!-- \u041E\u0441\u043D\u043E\u0432\u043D\u0430\u044F \u0447\u0430\u0441\u0442\u044C--><div class="accounts-settings__content"><div class="accounts-settings__list mrg__top20"><div class="main-title-text">\u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u043D\u044B\u0435 \u044F\u0449\u0438\u043A\u0438</div><div class="accounts-settings__items"><!--  \u0410\u043A\u043A\u0430\u0443\u043D\u0442 1--><div class="accounts-settings__item" ng-repeat="account in vm.accounts.items"><span class="accounts-settings__item--name-mail">{{ account.email }}</span><form class="option-icons just-content--f-en"><!-- \u041F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0430\u0442\u0435\u043B\u044C --><div class="radiobutton mrg__right16"><div class="radiobutton radiobutton__switch radiobutton--size72x28"><input class="radiobutton__switch__input" type="radio" name="toggle" ng-checked="{{ account.enable }}" ng-value="1" ng-model="account.enable" ng-change="vm.enableTrigger(account)"> <input class="radiobutton__switch__input" type="radio" name="toggle" ng-checked="{{ account.enable }}" ng-value="0" ng-model="account.enable" ng-change="vm.enableTrigger(account)"> <span class="radiobutton__switch__on-off"></span></div></div><!-- \u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0437\u0430\u043F\u0438\u0441\u0438 --><!--<button class="btn-group__btn btn btn&#45;&#45;size_s width&#45;&#45;size28 btn__icon&#45;&#45;opahover btn__icon&#45;&#45;edit"--><!--type="button"></button>--><!-- \u0423\u0434\u0430\u043B\u0438\u0442\u044C --> <button class="btn-group__btn btn btn--size_s width--size28 btn__icon--opahover btn__icon--remove" type="button" ng-click="vm.destroy(account)"></button></form></div></div><div class="notific--layout-light mrg__top20">\u0421\u043E\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u0435 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u043E. \u0421\u0431\u043E\u0440 \u043F\u043E\u0447\u0442\u044B \u043D\u0430\u0447\u043D\u0435\u0442\u0441\u044F \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u0438\u0445 \u043C\u0438\u043D\u0443\u0442.</div></div><form class="accountForm" ng-submit="vm.create(accountForm)"><div><div class="accounts-settings__pick-up-mail"><div class="main-title-text">\u0417\u0430\u0431\u0438\u0440\u0430\u0442\u044C \u043F\u043E\u0447\u0442\u0443 \u0438\u0437 \u044F\u0449\u0438\u043A\u0430</div><div class="form__field-item form__field-item--flex-start mrg__bottom10"><!-- \u0418\u043C\u044F \u043F\u043E\u0447\u0442\u044B--><div class="field-style flex--inline align-items--cn just-content--sp-btw mrg__bottom6"><label class="field-style__title font__size13">\u041F\u043E\u0447\u0442\u0430</label><input class="input input--size_l input--up-shadow width--size328" type="email" name="email" ng-model="vm.accountForm.model.email" placeholder="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 email" required></div><!-- \u041F\u0430\u0440\u043E\u043B\u044C--><div class="field-style flex--inline align-items--cn just-content--sp-btw mrg__bottom6"><label class="field-style__title font__size13">\u041F\u0430\u0440\u043E\u043B\u044C</label><input class="input input--size_l input--up-shadow width--size328" type="password" name="password" ng-model="vm.accountForm.model.password" placeholder="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C" required></div><div class="field-style flex--inline align-items--cn just-content--sp-btw mrg__bottom6"><label class="field-style__title font__size13">\u041B\u043E\u0433\u0438\u043D</label><input class="input input--size_l input--up-shadow width--size328" type="text" name="login" ng-model="vm.accountForm.model.login" placeholder="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043B\u043E\u0433\u0438\u043D" required></div><div class="field-style flex--inline align-items--cn just-content--sp-btw mrg__bottom6"><label class="field-style__title font__size13">\u0421\u0435\u0440\u0432\u0435\u0440</label><input class="input input--size_l input--up-shadow width--size328" type="text" name="server" ng-model="vm.accountForm.model.server" placeholder="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0430\u0434\u0440\u0435\u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u0430" required></div><div class="field-style flex--inline align-items--cn just-content--sp-btw mrg__bottom6"><label class="field-style__title font__size13">\u041F\u043E\u0440\u0442</label><input class="input input--size_l input--up-shadow width--size328" type="text" name="port" ng-model="vm.accountForm.model.port" placeholder="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043F\u043E\u0440\u0442" required></div></div><div class="color--red">{{ vm.error.message }}</div></div></div><!-- \u041D\u0438\u0436\u043D\u044F\u044F \u0447\u0430\u0441\u0442\u044C--><div class="accounts-settings__footer"><button class="btn btn--yellow width--auto btn--size_sm">\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0441\u0431\u043E\u0440\u0449\u0438\u043A</button></div></form></div></div></section></article>');
$templateCache.put('app/settings/contacts/contacts.html','<div class="layout__bread-crumbs mrg__bottom15"><div class="bread-crumbs font-sizer--bigger-20"><a class="bread-crumbs__item" ui-sref="mail.inbox">\u041F\u043E\u0447\u0442\u0430</a> <a class="bread-crumbs__item" ui-sref="settings.main">\u0412\u0441\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438</a> <a class="bread-crumbs__item bread-crumbs--active">\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u043E\u0432</a></div></div><article class="layout-settings"><section class="layout-settings__col mrg__left"><div class="mrg__bottom20"><button class="btn-y btn-y--border" type="button" ng-click="vm.openContactImportFilePopup()">\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u044B \u0438\u0437 \u0444\u0430\u0439\u043B\u0430</button> <button class="btn-y btn-y--border" type="button" ng-click="vm.openContactExportFilePopup()">\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u044B \u0432 \u0444\u0430\u0439\u043B</button></div><!-- \u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B --><contact-group></contact-group></section></article>');
$templateCache.put('app/settings/folders/folders.html','<div class="layout__bread-crumbs mrg__bottom15"><div class="bread-crumbs font-sizer--bigger-20"><a class="bread-crumbs__item" ui-sref="mail.inbox">\u041F\u043E\u0447\u0442\u0430</a> <a class="bread-crumbs__item" ui-sref="settings.main">\u0412\u0441\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438</a> <a class="bread-crumbs__item bread-crumbs--active">\u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u043E\u043C</a></div></div><article class="layout-settings"><section class="layout-settings__col mrg__left"><!-- \u041F\u0430\u043F\u043A\u0438 --><folder-settings></folder-settings></section></article>');
$templateCache.put('app/settings/main/settings.html','<div class="layout__bread-crumbs mrg__bottom15"><div class="bread-crumbs font-sizer--bigger-20"><a class="bread-crumbs__item" href="#">\u041F\u043E\u0447\u0442\u0430</a> <a class="bread-crumbs__item" href="#">\u0412\u0441\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438</a> <a class="bread-crumbs__item bread-crumbs--active" href="#">\u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u043E\u043C</a></div></div><article class="layout-settings"><section class="layout-settings__col width--aut"><!-- \u041F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 --><div class="personal-info"><div class="personal-info__user-avatar mrg__bottom45"><div class="avatar avatar--settings avatar--size203 avatar--second-style" ng-click="vm.openAvatarUploadPopup()"><img class="avatar__image" ng-src="{{ user.profile.photo }}" fallback-src="{{\'/images/avatar-personal.svg\'}}"> <span class="avatar__edit avatar__edit--add"></span></div></div><div class="personal-info__user-info"><div class="personal-info__user-info-title main-title-text">\u041F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435</div><profile-form></profile-form></div></div></section><!----><section class="layout-settings__col width--aut"><!-- \u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0431\u043B\u043E\u043A \u0441 \u043F\u0440\u0430\u0432\u0430 --><div class="additional-info"><!-- \u0411\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u044C \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u0430 --><div class="additional-info__block"><div class="main-title-text main-title-text__icon"><img class="main-title-text__icon--size27" src="images/safety-g.svg" alt=""> \u0411\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u044C \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u0430</div><!--<div class="additional-info__block__option">--><!--<a class="additional-info__block__link link&#45;&#45;disabled" href="#">\u0410\u043A\u043A\u0430\u0443\u043D\u0442 \u0434\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u043E \u0437\u0430\u0449\u0438\u0449\u0435\u043D</a>--><!--<a class="additional-info__block__link" href="#">\u0421\u043C\u0435\u043D\u0438\u0442\u044C \u043F\u0430\u0440\u043E\u043B\u044C</a>--><!--<a class="additional-info__block__link" href="#">\u041F\u0440\u0438\u0432\u044F\u0437\u0430\u0442\u044C \u0437\u0430\u043F\u0430\u0441\u043D\u043E\u0439 e-mail</a>--><!--<a class="additional-info__block__link" href="#">\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430</a>--><!--</div>--><div class="additional-info__block__option"><a class="additional-info__block__link link link--disabled" href="#">\u0410\u043A\u043A\u0430\u0443\u043D\u0442 \u0434\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u043E \u0437\u0430\u0449\u0438\u0449\u0435\u043D</a> <a class="additional-info__block__link link mrg__bottom10" href ng-click="vm.openPasswordChangePopup()">\u0421\u043C\u0435\u043D\u0438\u0442\u044C \u043F\u0430\u0440\u043E\u043B\u044C</a><div class="additional-info__block__link"><span class="additional-info__block__title">{{ user.profile.email }}</span> <button class="additional-info__block__link link btn btn--not-style" ng-click="vm.openEmailChangePopup()">\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C e-mail</button></div><div class="additional-info__block__link"><span class="additional-info__block__title">+{{ user.profile.phone }}</span> <button class="additional-info__block__link link btn btn--not-style" ng-click="vm.openPhoneChangePopup()">\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u043D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430</button></div></div></div><!-- \u0414\u0440\u0443\u0433\u0438\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 --><div class="additional-info__block"><div class="main-title-text main-title-text__icon"><img class="main-title-text__icon--size27" src="images/other-settings.svg" alt=""> \u0414\u0440\u0443\u0433\u0438\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438</div><div class="additional-info__block__option"><a class="additional-info__block__link" href ng-click="vm.destroy()">\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0430\u043A\u043A\u0430\u0443\u043D\u0442</a></div></div><!-- \u041F\u0440\u0438\u0432\u044F\u0437\u0430\u0442\u044C \u043F\u0440\u043E\u0444\u0438\u043B\u044C--><!--\n                        <div class="additional-info__block">\n                            <div class="main-title-text main-title-text__icon">\n                                <img class=" main-title-text__icon&#45;&#45;size27 hide-elm" src="images/other-settings.svg"\n                                     alt="">\n                                \u041F\u0440\u0438\u0432\u044F\u0437\u0430\u0442\u044C \u043F\u0440\u043E\u0444\u0438\u043B\u044C\n                            </div>\n\n                            <div class="additional-info__block__snap-profile ">\n                                <div class="social-icons">\n                                    <button class="social-icons__icon social-icons&#45;&#45;vk-icon social-icons&#45;&#45;btn-tied btn"\n                                            type="button"></button>\n                                    <button class="social-icons__icon social-icons&#45;&#45;fb-icon btn"\n                                            type="button"></button>\n                                    <button class="social-icons__icon social-icons&#45;&#45;tw-icon btn"\n                                            type="button"></button>\n                                    <button class="social-icons__icon social-icons&#45;&#45;gp-icon btn"\n                                            type="button"></button>\n                                </div>\n                            </div>\n                        </div>\n            --><!-- \u0427\u0435\u043A\u0431\u043E\u043A\u0441\u044B --><div class="additional-info__block"><div class="font__bold font__size13">\u0420\u0430\u0437\u0440\u0435\u0448\u0438\u0442\u044C \u0434\u043E\u0441\u0442\u0443\u043F \u043A \u043F\u043E\u0447\u0442\u043E\u0432\u043E\u043C\u0443 \u044F\u0449\u0438\u043A\u0443 \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u043F\u043E\u0447\u0442\u043E\u0432\u044B\u0445 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432</div><form class="additional-info__allow form" action=""><!--\u043D\u0430\u0448 \u0447\u0435\u043A\u0431\u043E\u043A\u0441 --><label class="checkbox-y__label checkbox-y" for="isChecked1"><input class="checkbox-y__input" id="isChecked1" type="checkbox" name="isChecked" ng-model="isChecked"><div class="checkbox-y__body"><span class="checkbox-y__icon icon-checked"></span></div><span class="checkbox__text" role="presentation">\u0421 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 imap.yandex.ru \u043F\u043E \u043F\u0440\u043E\u0442\u043E\u043A\u043E\u043B\u0443 IMAP</span></label><!--\u043D\u0430\u0448 \u0447\u0435\u043A\u0431\u043E\u043A\u0441 --><label class="checkbox-y__label checkbox-y" for="isChecked2"><input class="checkbox-y__input" id="isChecked2" type="checkbox" name="isChecked" ng-model="isChecked"><div class="checkbox-y__body"><span class="checkbox-y__icon icon-checked"></span></div><span class="checkbox__text" role="presentation">\u0421 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 pop.yandex.ru \u043F\u043E \u043F\u0440\u043E\u0442\u043E\u043A\u043E\u043B\u0443 POP3</span></label></form></div></div></section><section class="layout-settings__row separate--top mrg__top30"><!-- \u0412\u0430\u0448\u0438 \u043F\u043E\u0434\u043F\u0438\u0441\u0438 --><div class="user-signatures"><div class="user-signatures__title main-title-text">\u0412\u0430\u0448\u0438 \u043F\u043E\u0434\u043F\u0438\u0441\u0438</div><div class="row"><div class="user-signatures__edit-text col-md-6"><div message-textarea ng-model="vm.signature"></div></div><div class="user-signatures__view col-md-6" ng-if="vm.user.profile.sign"><span ng-bind-html="vm.getTrustHtml(vm.user.profile.sign)"></span></div></div><div class="mrg__top10"><button class="btn btn--normal btn--size_s" ng-click="vm.updateSign()">\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043F\u043E\u0434\u043F\u0438\u0441\u044C</button></div></div></section></article>');
$templateCache.put('app/settings/rule-add/rule-add.html','<div class="layout__bread-crumbs mrg__bottom15"><div class="bread-crumbs font-sizer--bigger-20"><a class="bread-crumbs__item" ui-sref="mail.inbox">\u041F\u043E\u0447\u0442\u0430</a> <a class="bread-crumbs__item" ui-sref="settings.main">\u0412\u0441\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438</a> <a class="bread-crumbs__item" ui-sref="settings.rules">\u041F\u0440\u0430\u0432\u0438\u043B\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438</a> <a class="bread-crumbs__item bread-crumbs--active" ui-sref="settings.ruleAdd">\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043F\u0440\u0430\u0432\u0438\u043B\u043E</a></div></div><article class="layout-settings width--inh"><section class="layout-settings__col mrg__left"><!-- \u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u043F\u0440\u0430\u0432\u0438\u043B\u0430 --><div class="rule-add"><div class="form"><div class="rule-add__item mrg__bottom20"><div class="field-style flex--inline just-content--sp-btw align-items--cn mrg__bottom8"><span class="font__size13">\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435</span> <input class="input input--size_xs width--size527 input--bg-white input--fc-sh-yellow" type="text" name="name" placeholder="\u0423\u043A\u0430\u0436\u0438\u0442\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043F\u0440\u0430\u0432\u0438\u043B\u0430" ng-model="vm.sieveForm.model.name" required></div><div class="field-style flex--inline just-content--sp-btw align-items--cn mrg__bottom8"><span class="font__size13">\u041F\u0440\u0438\u043C\u0435\u043D\u044F\u0442\u044C</span><div class="flex--inline just-content--sp-btw align-items--cn width--all width--max527"><ui-select ng-model="vm.sieveForm.model.spam_accept" class="select-list select-list--size_xs select-list--not-border-of-sides mrg__right6" theme="select2" search-enabled="false"><ui-select-match class="select-list__body select-list--size_xs width--inh" placeholder="\u043A\u043E \u0432\u0441\u0435\u043C \u043F\u0438\u0441\u044C\u043C\u0430\u043C, \u043A\u0440\u043E\u043C\u0435 \u0441\u043F\u0430\u043C\u0430">{{ $select.selected.name }}</ui-select-match><ui-select-choices repeat="item.value as item in vm.spamAccept.list" value="{{ $select.selected.value }}"><div ng-bind-html="item.name"></div></ui-select-choices></ui-select><ui-select ng-model="vm.sieveForm.model.attachment_accept" class="select-list select-list--size_xs select-list--not-border-of-sides" theme="select2" search-enabled="false"><ui-select-match class="select-list__body select-list--size_xs width--inh" placeholder="c \u0432\u043B\u043E\u0436\u0435\u043D\u0438\u044F\u043C\u0438 \u0438 \u0431\u0435\u0437 \u0432\u043B\u043E\u0436\u0435\u043D\u0438\u0439">{{ $select.selected.name }}</ui-select-match><ui-select-choices repeat="item.value as item in vm.attachmentAccept.list" value="{{ $select.selected.value }}"><div ng-bind-html="item.name"></div></ui-select-choices></ui-select></div></div></div><div class="rule-add__item mrg__bottom20"><div class="rule-add__item-title">\u0415\u0441\u043B\u0438</div><div class="rule-add__condition"><div class="rule-add__condition-item" ng-repeat="rule in vm.sieveForm.model.sieveRules"><div class="field-style flex--inline just-content--sp-btw align-items--cn mrg__bottom8"><ui-select ng-model="rule.type" class="select-list select-list--size_xs select-list--not-border-of-sides mrg__right6 width--size80" theme="select2" search-enabled="false"><ui-select-match class="select-list__body select-list--size_xs width--inh" placeholder="\u041E\u0442 \u043A\u043E\u0433\u043E">{{ $select.selected.name }}</ui-select-match><ui-select-choices repeat="item.value as item in vm.sieveRules.list" value="{{ $select.selected.value }}"><div ng-bind-html="item.name"></div></ui-select-choices></ui-select><ui-select ng-model="rule.compare_type" class="select-list select-list--size_xs select-list--not-border-of-sides width--size108 mrg__right6" theme="select2" search-enabled="false"><ui-select-match class="select-list__body select-list--size_xs width--inh" placeholder="\u0441\u043E\u0432\u043F\u0430\u0434\u0430\u0435\u0442 \u0441">{{ $select.selected.name }}</ui-select-match><ui-select-choices repeat="item.value as item in vm.compareTypes.list" value="{{ $select.selected.value }}"><div ng-bind-html="item.name"></div></ui-select-choices></ui-select><input class="input input--size_xs width--inh input--bg-white input--fc-sh-yellow" type="text" ng-model="rule.value" placeholder="\u0423\u043A\u0430\u0436\u0438\u0442\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043F\u0440\u0430\u0432\u0438\u043B\u0430" required></div><button class="rule-add__condition-remove btn btn--not-style btn--not-events btn--remove icon-close-thin" type="button" ng-click="vm.removeRule(rule)"></button></div></div><button class="btn btn--normal btn--size_xs width--size131 border--cl-bl-silver" type="button" ng-click="vm.addRule()">\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0443\u0441\u043B\u043E\u0432\u0438\u0435</button></div><div class="rule-add__item mrg__bottom20"><div class="rule-add__item-title">\u0412\u044B\u043F\u043E\u043B\u043D\u0438\u0442\u044C \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435</div><!--{{ vm.sieveForm.model.sieveActions }}--><div class="field-style flex--inline align-items--cn mrg__bottom6"><label class="checkbox-y__label checkbox-y width--min190"><input class="checkbox-y__input" type="checkbox" data-checklist-model="vm.sieveForm.model.sieveActions" data-checklist-value="{ \'type\': \'delete\' }" checklist-comparator=".type"><div class="checkbox-y__body"><span class="checkbox-y__icon"></span></div><span class="checkbox__text" role="presentation">\u0423\u0434\u0430\u043B\u0438\u0442\u044C</span></label></div><div class="field-style flex--inline align-items--cn mrg__bottom6"><label class="checkbox-y__label checkbox-y width--min190"><input class="checkbox-y__input" type="checkbox" data-checklist-model="vm.sieveForm.model.sieveActions" data-checklist-value="{ \'type\': \'read\' }" checklist-comparator=".type"><div class="checkbox-y__body"><span class="checkbox-y__icon"></span></div><span class="checkbox__text" role="presentation">\u041F\u043E\u043C\u0435\u0442\u0438\u0442\u044C \u043F\u0440\u043E\u0447\u0438\u0442\u0430\u043D\u043D\u044B\u043C</span></label></div><div class="field-style flex--inline align-items--cn mrg__bottom6"><label class="checkbox-y__label checkbox-y width--min190"><input class="checkbox-y__input" type="checkbox" ng-model="vm.isFolder" data-checklist-model="vm.sieveForm.model.sieveActions" data-checklist-value="vm.sieveActions.move" checklist-comparator=".type"><div class="checkbox-y__body"><span class="checkbox-y__icon"></span></div><span class="checkbox__text" role="presentation">\u041F\u043E\u043B\u043E\u0436\u0438\u0442\u044C \u0432 \u043F\u0430\u043F\u043A\u0443</span></label><ui-select ng-model="vm.sieveActions.move.value" class="select-list select-list--if-less200 select-list--size_xs select-list--not-border-of-sides mrg__right6 width--aut width--max126" theme="select2" ng-disabled="!vm.isFolder" search-enabled="false"><ui-select-match class="select-list__body select-list--size_xs width--inh" placeholder="\u0412\u044B\u0431\u0440\u0430\u0442\u044C">{{ $select.selected.caption }}</ui-select-match><ui-select-choices repeat="item.name as item in vm.folders.items" value="{{ $select.selected.name }}"><div ng-bind-html="item.caption"></div></ui-select-choices></ui-select></div><div class="field-style flex--inline align-items--cn mrg__bottom6"><label class="checkbox-y__label checkbox-y width--min190"><input class="checkbox-y__input" type="checkbox" ng-model="vm.isFlag" data-checklist-model="vm.sieveForm.model.sieveActions" data-checklist-value="vm.sieveActions.flag" checklist-comparator=".type"><div class="checkbox-y__body"><span class="checkbox-y__icon"></span></div><span class="checkbox__text" role="presentation">\u041F\u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u043C\u0435\u0442\u043A\u0443</span></label><ui-select ng-model="vm.sieveActions.flag.value" class="select-list select-list--if-less200 select-list--size_xs select-list--not-border-of-sides mrg__right6 width--aut width--max126" theme="select2" title="Choose a person" ng-disabled="!vm.isFlag" search-enabled="false"><ui-select-match class="select-list__body select-list--size_xs width--inh" placeholder="\u0412\u044B\u0431\u0440\u0430\u0442\u044C">{{ $select.selected.tag_name }}</ui-select-match><ui-select-choices repeat="item.tag_name as item in vm.tags.items" value="{{ $select.selected.tag_name }}"><div ng-bind-html="item.tag_name"></div></ui-select-choices></ui-select></div><div class="rule-add__notif">\u041F\u0440\u0438 \u0430\u043A\u0442\u0438\u0432\u0430\u0446\u0438\u0438 \u043F\u0440\u0430\u0432\u0438\u043B \u043F\u0435\u0440\u0435\u0441\u044B\u043B\u043A\u0438 \u043F\u0438\u0441\u0435\u043C \u043F\u043E\u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044F \u0432\u0432\u0435\u0441\u0442\u0438 \u043F\u0430\u0440\u043E\u043B\u044C.</div><div class="field-style flex--inline align-items--st mrg__bottom6"><label class="align-items-st checkbox-y__label checkbox-y width--min190"><input class="checkbox-y__input" type="checkbox" ng-model="vm.isResend" data-checklist-model="vm.sieveForm.model.sieveActions" data-checklist-value="vm.sieveActions.resend" checklist-comparator=".type"><div class="checkbox-y__body"><span class="checkbox-y__icon"></span></div><span class="checkbox__text" role="presentation">\u041F\u0435\u0440\u0435\u0441\u043B\u0430\u0442\u044C \u043F\u043E \u0430\u0434\u0440\u0435\u0441\u0443</span></label><div class="width--inh"><input class="input input--size_xs width--inh input--bg-white input--fc-sh-yellow" type="text" placeholder="\u0423\u043A\u0430\u0436\u0438\u0442\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043F\u0440\u0430\u0432\u0438\u043B\u0430" ng-model="vm.sieveActions.resend.value" ng-disabled="!vm.isResend" required><label class="checkbox-y__label checkbox-y width--inh"><input class="checkbox-y__input" type="checkbox" data-checklist-model="vm.sieveForm.model.sieveActions" data-checklist-value="vm.sieveActions.option" ng-disabled="!vm.isResend" checklist-comparator=".type"><div class="checkbox-y__body"><span class="checkbox-y__icon"></span></div><span class="checkbox__text" role="presentation">\u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u043A\u043E\u043F\u0438\u044E \u043F\u0440\u0438 \u043F\u0435\u0440\u0435\u0441\u044B\u043B\u043A\u0435</span></label></div></div><div class="field-style flex--inline align-items--cn mrg__bottom6"><label class="align-items-st checkbox-y__label checkbox-y width--min190"><input class="checkbox-y__input" type="checkbox" ng-model="vm.isNotify" data-checklist-model="vm.sieveForm.model.sieveActions" data-checklist-value="vm.sieveActions.notify" checklist-comparator=".type"><div class="checkbox-y__body"><span class="checkbox-y__icon"></span></div><span class="checkbox__text" role="presentation">\u0423\u0432\u0435\u0434\u043E\u043C\u0438\u0442\u044C \u043F\u043E \u0430\u0434\u0440\u0435\u0441\u0443</span></label><input class="input input--size_xs width--inh input--bg-white input--fc-sh-yellow" type="text" ng-model="vm.sieveActions.notify.value" ng-disabled="!vm.isNotify" placeholder="\u0423\u043A\u0430\u0436\u0438\u0442\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043F\u0440\u0430\u0432\u0438\u043B\u0430" required></div><div class="field-style align-items--cn mrg__bottom6"><label class="align-items-st checkbox-y__label checkbox-y width--inh"><input class="checkbox-y__input" type="checkbox" ng-model="vm.isAnswer" data-checklist-model="vm.sieveForm.model.sieveActions" data-checklist-value="vm.sieveActions.answer" checklist-comparator=".type"><div class="checkbox-y__body"><span class="checkbox-y__icon"></span></div><span class="checkbox__text" role="presentation">\u041E\u0442\u0432\u0435\u0442\u0438\u0442\u044C \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u043C \u0442\u0435\u043A\u0441\u0442\u043E\u043C</span></label><textarea class="rule-add__field-text textarea--normal width--inh font__size13 mrg__top5" name="" id="" cols="10" rows="10" placeholder="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043A\u0441\u0442 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F" ng-model="vm.sieveActions.answer.value" ng-disabled="!vm.isAnswer"></textarea></div><div class="field-style align-items--cn mrg__bottom6"><label class="align-items-st checkbox-y__label checkbox-y width--inh"><input class="checkbox-y__input" type="checkbox" data-checklist-model="vm.sieveForm.model.sieveActions" data-checklist-value="{ \'type\': \'stop\' }" checklist-comparator=".type"><div class="checkbox-y__body"><span class="checkbox-y__icon"></span></div><span class="checkbox__text" role="presentation">\u041D\u0435 \u043F\u0440\u0438\u043C\u0435\u043D\u044F\u0442\u044C \u043E\u0441\u0442\u0430\u043B\u044C\u043D\u044B\u0435 \u043F\u0440\u0430\u0432\u0438\u043B\u0430</span></label></div><div class="field-style mrg__bottom6"><div class="rule-add__notif mer">\u0422\u0430\u043A\u0436\u0435 \u0432\u044B \u043C\u043E\u0436\u0435\u0442\u0435 <a href="">\u0443\u043A\u0430\u0437\u0430\u0442\u044C \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435</a>, \u043A\u043E\u0442\u043E\u0440\u043E\u0435 \u0431\u0443\u0434\u0435\u0442 \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u0442\u044C\u0441\u044F \u0432 \u0441\u043F\u0438\u0441\u043A\u0435 \u043F\u0440\u0430\u0432\u0438\u043B</div><div class="flex--inline align-items--cn mrg__top15"><button class="btn btn--yellow btn--size_sm mrg__right10" type="button" ng-click="vm.add()" ng-if="!vm.sieveForm.model.id">\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043F\u0440\u0430\u0432\u0438\u043B\u043E</button> <button class="btn btn--yellow btn--size_sm mrg__right10" type="button" ng-click="vm.update()" ng-if="vm.sieveForm.model.id">\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438</button> <button class="btn btn--normal btn--size_sm mrg__right10" type="button">\u041F\u0440\u0438\u043C\u0435\u043D\u0438\u0442\u044C \u043A \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u043C \u043F\u0438\u0441\u044C\u043C\u0430\u043C</button> <button class="btn btn--size_sm btn--link-style mrg__none mrg__left10" type="button" ui-sref="settings.rules">\u041E\u0442\u043C\u0435\u043D\u0430</button></div></div></div></div></div></section></article>');
$templateCache.put('app/settings/rules/rules.html','<div class="layout__bread-crumbs mrg__bottom15"><div class="bread-crumbs font-sizer--bigger-20"><a class="bread-crumbs__item" href="#">\u041F\u043E\u0447\u0442\u0430</a> <a class="bread-crumbs__item" href="#">\u0412\u0441\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438</a> <a class="bread-crumbs__item bread-crumbs--active" href="#">\u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u043E\u043C</a></div></div><article class="layout-settings width--inh"><section class="layout-settings__row mrg__left"><div class="rules-settings"><div class="rules-settings__head"><div class="rules-settings__left"><div class="rules-settings__notific notific--layout">\u0421 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u043F\u0440\u0430\u0432\u0438\u043B \u0432\u044B \u0441\u043C\u043E\u0436\u0435\u0442\u0435 \u0440\u0430\u0441\u043A\u043B\u0430\u0434\u044B\u0432\u0430\u0442\u044C \u0432\u0445\u043E\u0434\u044F\u0449\u0443\u044E \u043F\u043E\u0447\u0442\u0443 \u043F\u043E \u043F\u0430\u043F\u043A\u0430\u043C, \u043F\u0435\u0440\u0435\u0441\u044B\u043B\u0430\u0442\u044C \u043F\u0438\u0441\u044C\u043C\u0430 \u043D\u0430 \u0434\u0440\u0443\u0433\u043E\u0439 \u0430\u0434\u0440\u0435\u0441, \u043F\u043E\u043B\u0443\u0447\u0430\u0442\u044C \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F \u043E \u043D\u043E\u0432\u044B\u0445 \u043F\u0438\u0441\u044C\u043C\u0430\u0445, \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u0430\u0432\u0442\u043E\u043E\u0442\u0432\u0435\u0442\u0447\u0438\u043A \u0438 \u0434\u0430\u0436\u0435 \u0443\u0434\u0430\u043B\u044F\u0442\u044C \u043D\u0435\u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043F\u0438\u0441\u044C\u043C\u0430 \u043F\u0440\u0438 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u0438.</div><div class="width--inh mrg__left mrg__top20"><button class="btn btn--yellow mrg__bottom4 btn--size_sm" ui-sref="settings.ruleAdd">\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043F\u0440\u0430\u0432\u0438\u043B\u043E</button></div></div><div class="rules-settings__right"><div class="rules-settings__notific mrg__bottom10">\u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0441\u043E\u0437\u0434\u0430\u0442\u044C \u043F\u0440\u0430\u0432\u0438\u043B\u043E, \u0447\u0442\u043E\u0431\u044B:</div><div class="rules-settings__nav"><a class="rules-settings__nav-item" href="">\u043F\u0435\u0440\u0435\u043C\u0435\u0449\u0430\u0442\u044C \u043F\u0438\u0441\u044C\u043C\u0430 \u0432 \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u0443\u044E \u043F\u0430\u043F\u043A\u0443,</a> <a class="rules-settings__nav-item" href="">\u043E\u0442\u043C\u0435\u0447\u0430\u0442\u044C \u043F\u0438\u0441\u044C\u043C\u0430 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0451\u043D\u043D\u043E\u0439 \u043C\u0435\u0442\u043A\u043E\u0439,</a> <a class="rules-settings__nav-item" href="">\u0443\u0434\u0430\u043B\u044F\u0442\u044C \u043D\u0435\u043D\u0443\u0436\u043D\u044B\u0435 \u043F\u0438\u0441\u044C\u043C\u0430 \u043F\u0440\u0438 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u0438.</a></div></div></div><!-- \u041F\u0440\u0430\u0432\u0438\u043B\u0430 --><div class="rules-settings__rules mrg__top25"><div class="rules-settings__rules--title notific--layout-light">\u0421\u043E\u0437\u0434\u0430\u043D\u043D\u044B\u0435 \u0432\u0430\u043C\u0438 \u043F\u0440\u0430\u0432\u0438\u043B\u0430</div><!-- \u0421\u043F\u0438\u0441\u043E\u043A \u043F\u0440\u0430\u0432\u0438\u043B--><!-- \u041F\u0440\u0430\u0432\u0438\u043B\u043E 1--><form class="rules-settings__rule" ng-repeat="sieve in vm.sieve.items"><div class="rules-settings__rule__postpone mrg__right16"></div><div class="rules-settings__rule__description"><span class="rules-settings__rule__name">{{ sieve.name }}</span> <span class="rules-settings__rule__descript">\u0415\u0441\u043B\u0438 \u201C\u041A\u043E\u043C\u0443 \u0438\u043B\u0438 \u043A\u043E\u043F\u0438\u044F\u201D \u0441\u043E\u0432\u043F\u0430\u0434\u0430\u044E\u0442 \u0441 \u201Cmail@gmail.com\u201D</span></div><div class="rules-settings__rule__option-icons"><!-- \u041F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0430\u0442\u0435\u043B\u044C --><div class="radiobutton mrg__right16"><div class="radiobutton radiobutton__switch radiobutton--size72x28"><input class="radiobutton__switch__input" type="radio" name="toggle" ng-checked="{{ sieve.enable }}" ng-value="1" ng-model="sieve.enable" ng-change="vm.enableTrigger(sieve)"> <input class="radiobutton__switch__input" type="radio" name="toggle" ng-checked="{{ sieve.enable }}" ng-value="0" ng-model="sieve.enable" ng-change="vm.enableTrigger(sieve)"> <span class="radiobutton__switch__on-off"></span></div></div><!-- \u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0437\u0430\u043F\u0438\u0441\u0438 --> <button class="btn-group__btn btn btn--size_s width--size28 btn__icon--opahover btn__icon--edit mrg__right16" ui-sref="settings.ruleAdd({id: sieve.id})"></button><!-- \u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043F\u0440\u0430\u0432\u0438\u043B\u043E --> <button class="btn-group__btn btn btn--size_s width--size28 btn__icon--opahover btn__icon--remove mrg__right16" ng-click="vm.remove(sieve)"></button></div></form></div><!-- C\u043F\u0438\u0441\u043A\u0438 \u0447\u0435\u0440\u043D\u044B\u0439/\u0431\u0435\u043B\u044B\u0439 --><div class="rules-settings__bl-wh-list"><span class="rules-settings__notific width--all mrg__top25">\u041A\u0440\u043E\u043C\u0435 \u0442\u043E\u0433\u043E, \u0432\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0443\u043F\u0440\u0430\u0432\u043B\u044F\u0442\u044C \u0432\u0445\u043E\u0434\u044F\u0449\u0435\u0439 \u043F\u043E\u0447\u0442\u043E\u0439 \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u0447\u0435\u0440\u043D\u043E\u0433\u043E \u0438 \u0431\u0435\u043B\u043E\u0433\u043E \u0441\u043F\u0438\u0441\u043A\u043E\u0432.</span><!-- \u0427\u0435\u0440\u043D\u044B\u0439 \u0441\u043F\u0438\u0441\u043E\u043A--><div class="rules-settings__bl-wh-content rules-settings__bl-wh-content--black"><black-list></black-list></div><!-- \u0411\u0435\u043B\u044B\u0439 \u0441\u043F\u0438\u0441\u043E\u043A--><div class="rules-settings__bl-wh-content rules-settings__bl-wh-content--white mrg__top10"><white-list></white-list><!--<div class="rules-settings__bl-wh-content__title">\u0411\u0435\u043B\u044B\u0439 \u0441\u043F\u0438\u0441\u043E\u043A</div>--><!--<span class="rules-settings__bl-wh-content__text">\u0412\u0441\u044F \u043F\u043E\u0447\u0442\u0430 \u0441 \u0430\u0434\u0440\u0435\u0441\u043E\u0432, \u0437\u0430\u043D\u0435\u0441\u0451\u043D\u043D\u044B\u0445 \u0432 \u0431\u0435\u043B\u044B\u0439 \u0441\u043F\u0438\u0441\u043E\u043A, \u043D\u0435 \u0431\u0443\u0434\u0435\u0442 \u043F\u043E\u043F\u0430\u0434\u0430\u0442\u044C \u0432 \u043F\u0430\u043F\u043A\u0443 <b>--><!--<a class="rules-settings__bl-wh-content__link" href="">\xAB\u0421\u043F\u0430\u043C\xBB</a></b></span>--><!--<div class="form__field-item mrg__bottom0">--><!--<div class="field-style flex&#45;&#45;inline ">--><!--<input class="input input&#45;&#45;size_xs input&#45;&#45;up-shadow width&#45;&#45;inh input&#45;&#45;bg-white mrg__right7"--><!--type="text"--><!--name="rules"--><!--placeholder="\u0423\u043A\u0430\u0436\u0438\u0442\u0435 e-mail \u0430\u0434\u0440\u0435\u0441"--><!--required>--><!--<button class="btn btn&#45;&#45;normal btn&#45;&#45;size_xs width&#45;&#45;size150">\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C</button>--><!--</div>--><!--</div>--></div></div></div></section></article>');
$templateCache.put('app/settings/tags/tags.html','<div class="layout__bread-crumbs mrg__bottom15"><div class="bread-crumbs font-sizer--bigger-20"><a class="bread-crumbs__item" ui-sref="mail.inbox">\u041F\u043E\u0447\u0442\u0430</a> <a class="bread-crumbs__item" ui-sref="settings.main">\u0412\u0441\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438</a> <a class="bread-crumbs__item bread-crumbs--active">\u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u043E\u043C</a></div></div><article class="layout-settings"><!----><section class="layout-settings__col mrg__left"><!-- \u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u043D\u0430\u0441\u0442\u0440\u043E\u0435\u043A \u043C\u0435\u0442\u043A\u0438 --><tag-settings></tag-settings></section></article>');
$templateCache.put('app/storage/main/storage.html','<div class="header"><div class="header__brand pointer" ui-sref="mail.inbox"><img class="header__logo" src="/images/logo.png" alt="Mail logo"></div><div><div class="header__spinner"><spinner></spinner></div></div><div class="header__navigation"><!--\u0422\u0443\u0442 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442 \u043C\u0435\u043D\u044E--><div class="navigation"><div class="navigation__row"><div class="navigation__item"><a class="navigation__link navigation__link--active" ui-sref="mail.inbox">\u041F\u043E\u0447\u0442\u0430</a></div><div class="navigation__item"><a class="navigation__link" ui-sref="contacts.main">\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B</a></div><!--<div class="navigation__item">--><!--<a class="navigation__link" href="">\u0424\u0430\u0439\u043B\u044B</a>--><!--</div>--><!--<div class="navigation__item">--><!--<a class="navigation__link" href="">\u041D\u043E\u0432\u043E\u0441\u0442\u0438</a>--><!--</div>--><!--<div class="navigation__item">--><!--<a class="navigation__link" href="">\u0415\u0449\u0435</a>--><!--</div>--></div></div></div><div class="header__left"><!--<div class="header__search header__left-item">--><!--<search-mail></search-mail>--><!--</div>--><!--<div class="header__settings header__left-item">--><!--&lt;!&ndash;<a class="header__settings-link">&ndash;&gt;--><!--<button class="btn-y btn-y&#45;&#45;settings pointer"--><!--uib-popover-template="\'app/components/settings-menu/settings-menu.html\'"--><!--popover-class="popover&#45;&#45;settings"--><!--popover-placement="bottom-right"--><!--popover-animation="true"--><!--popover-trigger="\'outsideClick\'">--><!--<span class="icon-settings"></span>--><!--</button>--><!--</div>--><div class="header__avatar header__left-item"><a class="header__avatar-link" href uib-popover-template="\'app/components/user-menu/user-menu-popover.html\'" popover-class="popover--user popover--no-arrow" popover-placement="bottom-right" popover-animation="true" popover-trigger="\'outsideClick\'"><div class="header__name">{{ vm.user.profile.email.split(\'@\')[0] }}</div><!--\u0422\u0443\u0442 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442 \u0430\u0432\u0430\u0442\u0430\u0440\u0430--><div class="avatar avatar--header avatar--size42"><img class="avatar__image" ng-src="{{ vm.user.profile.photo }}" fallback-src="{{\'/images/avatar.png\'}}"></div></a></div></div></div><div class="storage"><div class="storage__plans"><div class="storage__header"><span class="font__center">\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0442\u0430\u0440\u0438\u0444\u043D\u044B\u0439 \u043F\u043B\u0430\u043D</span></div><div class="storage__content"><div class="storage__item" ng-repeat="tariff in vm.tariff.items" ng-class="{\'is-check\': vm.tariff.selected === tariff}"><label ng-click="vm.createQuota(tariff)"><div class="storage__space-pie" ng-class="{\'storage__space-pie--yellow-orange\': $index === 0,\n                                \'storage__space-pie--light-blue\': $index === 1,\n                                \'storage__space-pie--blue\': $index === 2}"><span class="storage__volume-text">{{ tariff.name }}</span></div><div class="storage__plan-price">{{ tariff.price }} K\u010D</div><div class="storage__chose-plan"><span class="icon-check-box-mark"></span></div><!--{{ tariff.isCheck }}--> <input style="display: none" name="tariff" type="radio" ng-model="vm.tariff.selected" ng-value="tariff"></label></div></div><div class="storage__footer" ng-if="vm.tariff.selected"><span class="font__center mrg__top15">Pro roz\u0161\xED\u0159en\xED o<b>&nbsp;1 GB &nbsp;</b>po\u0161lete SMS ve tvaru<b> {{ vm.quota.result.code }}&nbsp;</b>na telefonn\xED \u010D\xEDslo {{ vm.tariff.selected.phone }}. Cena je {{ vm.tariff.selected.price }} K\u010D.</span></div></div><div class="storage__now-space"><div class="storage__header"><span>\u041C\u043E\u0435 \u043C\u0435\u0441\u0442\u043E</span></div><div class="storage__content"><div class="storage__now-item"><div class="storage__space-pie pie storage__space-pie--my-space mrg__auto"></div><div class="storage__footer"><div class="storage__footer-content">400 MB <span class="font__size15">\u0421\u0432\u043E\u0431\u043E\u0434\u043D\u043E</span><div class="storage__hr"></div></div><div class="storage__footer-content storage__footer-content--green">600 MB <span class="font__size15">\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u043E</span></div><!-- \u0441\u043A\u0440\u0438\u043F\u0442 \u0434\u043B\u044F \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F \u043E\u043A\u0440\u0443\u0436\u043D\u043E\u0441\u0442\u0435\u0439--><script>function $$(selector, context) {\n                            context = context || document;\n                            var elements = context.querySelectorAll(selector);\n                            return Array.prototype.slice.call(elements);\n                        }\n\n                        $$(\'.storage__space-pie--my-space\').forEach(function (pie) {\n                            var spaceDisk = 60;\n                            pie.style.animationDelay = \'-\' + parseFloat(spaceDisk) + \'s\';\n                        });\n                        console.log(\'eror\');</script><!--  end--></div></div></div></div></div>');
$templateCache.put('app/terms/main/terms.html','<!-- \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u0443\u0432\u0435\u043B\u0438\u0447\u0435\u043D\u0438\u044F \u043C\u0435\u0441\u0442\u0430\u043D\u0430 \u0434\u0438\u0441\u043A\u0435--><div class="header"><div class="header__brand pointer" ui-sref="mail.inbox"><img class="header__logo" src="/images/logo.png" alt="Mail logo"></div><div><div class="header__spinner"><spinner></spinner></div></div><div class="header__navigation"><!--\u0422\u0443\u0442 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442 \u043C\u0435\u043D\u044E--><div class="navigation font-sizer--bigger-15"><div class="navigation__row"><div class="navigation__item"><a class="navigation__link navigation__link--active" ui-sref="mail.inbox">\u041F\u043E\u0447\u0442\u0430</a></div><div class="navigation__item"><a class="navigation__link" ui-sref="contacts.main">\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B</a></div><!--<div class="navigation__item">--><!--<a class="navigation__link" href="">\u0424\u0430\u0439\u043B\u044B</a>--><!--</div>--><!--<div class="navigation__item">--><!--<a class="navigation__link" href="">\u041D\u043E\u0432\u043E\u0441\u0442\u0438</a>--><!--</div>--><!--<div class="navigation__item">--><!--<a class="navigation__link" href="">\u0415\u0449\u0435</a>--><!--</div>--></div></div></div><div class="header__left"><!--<div class="header__search header__left-item">--><!--<search-mail></search-mail>--><!--</div>--><!--<div class="header__settings header__left-item">--><!--&lt;!&ndash;<a class="header__settings-link">&ndash;&gt;--><!--<button class="btn-y btn-y&#45;&#45;settings pointer"--><!--uib-popover-template="\'app/components/settings-menu/settings-menu.html\'"--><!--popover-class="popover&#45;&#45;settings"--><!--popover-placement="bottom-right"--><!--popover-animation="true"--><!--popover-trigger="\'outsideClick\'">--><!--<span class="icon-settings"></span>--><!--</button>--><!--</div>--><div class="header__avatar header__left-item"><a class="header__avatar-link" href uib-popover-template="\'app/components/user-menu/user-menu-popover.html\'" popover-class="popover--user popover--no-arrow" popover-placement="bottom-right" popover-animation="true" popover-trigger="\'outsideClick\'"><div class="header__name">{{ vm.user.profile.email.split(\'@\')[0] }}</div><!--\u0422\u0443\u0442 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442 \u0430\u0432\u0430\u0442\u0430\u0440\u0430--><div class="avatar avatar--header avatar--size42"><img class="avatar__image" ng-src="{{ vm.user.profile.photo }}" fallback-src="{{\'/images/avatar.png\'}}"></div></a></div></div></div><div class="terms"><div class="terms__content"><h1 class="terms__title">Podm\xEDnky u\u017E\xEDv\xE1n\xED slu\u017Eeb mail.cz</h1><ol class="terms__list terms__list--first-level"><li class="terms__item-list mrg__top54">\xDAVODN\xCD USTANOVEN\xCD<ol class="terms__list terms__list--second-level"><li class="terms__item-list">Spole\u010Dnost Mail.cz Group, a.s. I\u010C: 05466725, se s\xEDdlem Opletalova 29, 110 00, Praha 1, zapsan\xE1 v obchodn\xEDm rejst\u0159\xEDku u M\u011Bstsk\xE9ho soudu v Praze (d\xE1le jen \u201EPoskytovatel\u201C), je poskytovatelem slu\u017Eeb, internetov\xFDch str\xE1nek, software a aplikac\xED pro registrovan\xE9 u\u017Eivatele za n\xED\u017Ee uveden\xFDch podm\xEDnek, kter\xE9 jsou na webov\xE9m serveru mail.cz (d\xE1le jen \u201ESlu\u017Eby\u201C)</li><li class="terms__item-list">Vztah mezi poskytovatelem a u\u017Eivateli se \u0159\xEDd\xED V\u0161eobecn\xFDmi smluvn\xEDmi podm\xEDnkami (d\xE1le jen \u201EPodm\xEDnky) nestanov\xED-li zvl\xE1\u0161tn\xED podm\xEDnky k dan\xE9 slu\u017Eb\u011B jinak.</li></ol></li><li class="terms__item-list mrg__top54">V\xDDKLAD POJM\u016E<ol class="terms__list terms__list--second-level"><li class="terms__item-list">Poskytovatel. Poskytovatelem je spole\u010Dnost Mail.cz Group, a.s. I\u010C: 05466725, se s\xEDdlem Opletalova 29, 110 00, Praha 1, zapsan\xE1 v obchodn\xEDm rejst\u0159\xEDku u M\u011Bstsk\xE9ho soudu v Praze.</li><li class="terms__item-list">U\u017Eivatel. U\u017Eivatelem se st\xE1v\xE1 ka\u017Ed\xE1 osoba, kter\xE1 uskute\u010Dnila registraci a to v souladu s t\u011Bmito Podm\xEDnkami.</li><li class="terms__item-list">T\u0159et\xED osoba. T\u0159et\xED osobou se rozum\xED subjekt, kter\xFD je odli\u0161n\xFD od Poskytovatele a U\u017Eivatele.</li><li class="terms__item-list">Slu\u017Eby. Slu\u017Ebami se rozum\xED Slu\u017Eby, software, internetov\xE9 str\xE1nky, aplikace Poskytovan\xE9 poskytovatelem pro U\u017Eivatele um\xEDst\u011Bn\xFDch na registrovan\xFDch dom\xE9n\xE1ch Poskytovatele zejm\xE9na mail.cz</li><li class="terms__item-list">U\u017E\xEDv\xE1n\xED Slu\u017Eeb. U\u017E\xEDv\xE1n\xEDm slu\u017Eeb se rozum\xED jak\xE1koliv \u010Dinnost u\u017Eivatele, kterou u\u017Eivatel prov\xE1d\xED na dom\xE9n\xE1ch Poskytovatele.</li><li class="terms__item-list">U\u017Eivatelsk\xFD \xFA\u010Det. U\u017Eivatelsk\xFD \xFA\u010Det vznik\xE1 okam\u017Eikem dokon\u010Den\xED \xFAsp\u011B\u0161n\xE9 registrace, kter\xE1 obsahuje p\u0159\xEDslu\u0161n\xE9 parametry (nap\u0159. U\u017Eivatelsk\xE9 jm\xE9no, emailovou adresu atd.)</li><li class="terms__item-list">PUS \u2013 Podm\xEDnky u\u017E\xEDv\xE1n\xED slu\u017Eeb</li></ol></li><li class="terms__item-list mrg__top54">REGISTRACE U\u017DIVATEL<ol class="terms__list terms__list--second-level"><li class="terms__item-list">Registrace. Pro u\u017E\xEDv\xE1n\xED slu\u017Eeb je nutnost, aby u\u017Eivatel provedl registraci. Jestli\u017Ee kter\xE1koliv slu\u017Eba registraci nepo\u017Eaduje, pro u\u017E\xEDv\xE1n\xED slu\u017Eby se \u0159\xEDd\xED t\u011Bmito v\u0161eobecn\xFDmi podm\xEDnkami. U\u017E\xEDv\xE1n\xEDm slu\u017Eeb u\u017Eivatel souhlas\xED s t\u011Bmito Podm\xEDnkami v opa\u010Dn\xE9m p\u0159\xEDpad\u011B je povinen neu\u017E\xEDvat slu\u017Eby.</li><li class="terms__item-list">Registra\u010Dn\xED formul\xE1\u0159. Registrace je prov\xE1d\u011Bna pomoc\xED registra\u010Dn\xEDho formul\xE1\u0159e, kter\xFD se vypln\xED a ode\u0161le. Opr\xE1vn\u011Bnou osobou pro registraci je osoba sv\xE9pr\xE1vn\xE1</li><li class="terms__item-list">Registra\u010Dn\xED \xFAdaje. P\u0159i vypln\u011Bn\xED registra\u010Dn\xEDho formul\xE1\u0159e je u\u017Eivatel povinen vyplnit \xFAdaje ozna\u010Den\xE9 jako \u201Epovinn\xE9\u201C, bez vypln\u011Bn\xED t\u011Bchto \xFAdaj\u016F nelze registraci dokon\u010Dit. Ostatn\xED \xFAdaje jsou poskytovan\xE9 u\u017Eivatelem dobrovoln\u011B. \xDAdaje poskytnut\xE9 u\u017Eivatelem lze kdykoliv upravit. U\u017Eivatel bere na v\u011Bdom\xED, \u017Ee sd\u011Bluje tak\xE9 \xFAdaje osobn\xEDho charakteru dle z\xE1kona \u010D. 101/2000Sb. O ochran\u011B osobn\xEDch \xFAdaj\u016F. V takov\xE9m p\u0159\xEDpad\u011B se vztahuje na tyto \xFAdaje ustanoven\xED viz n\xED\u017Ee.</li><li class="terms__item-list">U\u017Eivatel bere na v\u011Bdom\xED, \u017Ee na 1 telefonn\xED \u010D\xEDslo, kter\xE9 ud\xE1 p\u0159i registraci, lze zalo\u017Eit maxim\xE1ln\u011B 3 u\u017Eivatelsk\xE9 \xFA\u010Dty.</li><li class="terms__item-list">Souhlas s PUS. P\u0159ed dokon\u010Den\xEDm u\u017Eivatelsk\xE9 registrace je nezbytnou podm\xEDnkou vyd\xE1n\xED souhlasu s t\u011Bmito podm\xEDnkami.</li><li class="terms__item-list">Vznik smluvn\xEDho vztahu. Okam\u017Eikem dokon\u010Den\xED registrace vznik\xE1 mezi u\u017Eivatelem a poskytovatelem smluvn\xED vztah, kter\xFD se \u0159\xEDd\xED t\u011Bmito podm\xEDnkami.</li><li class="terms__item-list">U\u017Eivatelsk\xFD \xFA\u010Det. U\u017Eivatelsk\xFD \xFA\u010Det je zalo\u017Een dokon\u010Den\xEDm registrace.</li><li class="terms__item-list">Roz\u0161\xED\u0159en\xED \xFAdaj\u016F. Poskytovatel si vyhrazuje pr\xE1vo na zm\u011Bnu rozsahu povinn\xFDch \xFAdaj\u016F v souvislosti s u\u017E\xEDv\xE1n\xEDm slu\u017Eeb.V p\u0159\xEDpad\u011B, \u017Ee u\u017Eivatel nedopln\xED tyto \xFAdaje, je poskytovatel opr\xE1vn\u011Bn zru\u0161it takov\xFD \xFA\u010Det.</li></ol></li><li class="terms__item-list mrg__top54">PR\xC1VA A POVINNOSTI<ol class="terms__list terms__list--second-level"><li class="terms__item-list">U\u017Eivatel prohla\u0161uje, \u017Ee:</li><li class="terms__item-list">je sv\xE9pr\xE1vn\xFD v rozsahu pot\u0159ebn\xE9m pro ve\u0161ker\xE1 pr\xE1vn\xED jedn\xE1n\xED ve smyslu Podm\xEDnek,</li><li class="terms__item-list">jeho sv\xE9pr\xE1vnost nebyla nijak omezena,</li><li class="terms__item-list">ve\u0161ker\xE9 \xFAdaje p\u0159i registraci u\u017Eivatel poskytl pravdiv\u011B,</li><li class="terms__item-list">p\u0159ed zah\xE1jen\xEDm u\u017E\xEDv\xE1n\xEDm slu\u017Eeb byl sezn\xE1men s t\u011Bmito podm\xEDnkami a souhlas\xED s nimi.</li><li class="terms__item-list">Bere na v\u011Bdom\xED mo\u017Enost do\u010Dasn\xE9 \u010Di trval\xE9 ztr\xE1ty obsahu v souvislosti se zm\u011Bnou \u010Di pozastaven\xEDm poskytov\xE1n\xED slu\u017Eeb.</li><li class="terms__item-list">U\u017Eivatel se zavazuje, \u017Ee:</li><li class="terms__item-list">neprovede registraci v p\u0159\xEDpad\u011B, \u017Ee by t\xEDm zap\u0159\xED\u010Dinil poru\u0161en\xED pr\xE1vn\xEDch p\u0159edpis\u016F jin\xFDch st\xE1t\u016F ne\u017E \u010CR ze strany u\u017Eivatele.</li><li class="terms__item-list">Nepou\u017Eije slu\u017Eby v p\u0159\xEDpad\u011B, \u017Ee by t\xEDm zap\u0159\xED\u010Dinil poru\u0161en\xED pr\xE1vn\xEDch p\u0159edpis\u016F jin\xFDch st\xE1t\u016F ne\u017E \u010CR ze strany u\u017Eivatele.</li><li class="terms__item-list">Nebude u\u017E\xEDvat slu\u017Eby, jejich\u017E u\u017E\xEDv\xE1n\xED je omezeno minim\xE1ln\xED v\u011Bkovou hranic\xED a u\u017Eivatel se pohybuje pod touto v\u011Bkovou hranic\xED (zejm\xE9na hranice 18 let) ,</li><li class="terms__item-list">zajist\xED ml\u010Denlivost o ve\u0161ker\xFDch \xFAdaj\xEDch slou\u017E\xEDc\xEDch k identifikaci a hesel slou\u017E\xEDc\xEDch pro p\u0159ihl\xE1\u0161en\xED a nebude sd\u011Blovat \u017E\xE1dn\xE9 t\u0159et\xED osob\u011B,</li><li class="terms__item-list">bez zbyte\u010Dn\xE9ho odkladu nahl\xE1s\xED poskytovateli, pokud dojde ke zneu\u017Eit\xED identifika\u010Dn\xEDch \xFAdaj\u016F,</li><li class="terms__item-list">v souvislosti s u\u017E\xEDv\xE1n\xEDm slu\u017Eeb bude dodr\u017Eovat pr\xE1vn\xED p\u0159edpisy \u010CR</li><li class="terms__item-list">nebude \u010Dinit takov\xE9 kroky, kter\xE9 by mohly v\xE9zt k naru\u0161en\xED nebo po\u0161kozen\xED slu\u017Eeb poskytovan\xFDmi poskytovatelem.</li><li class="terms__item-list">Poskytovatel je opr\xE1vn\u011Bn:</li><li class="terms__item-list">prov\xE1d\u011Bt zm\u011Bny v poskytov\xE1n\xED slu\u017Eby, zm\u011Bnu pozastavit \u010Di omezit a to kdykoliv bez p\u0159edchoz\xEDho ozn\xE1men\xED. \xDAkony se mohu vztahovat na v\u0161echny u\u017Eivatele nebo pouze ve vztahu k n\u011Bkter\xFDm u\u017Eivatel\u016Fm a to v\u010Detn\u011B odstran\u011Bn\xED nebo znep\u0159\xEDstupn\u011Bn\xED obsahu u\u017Eivatele, nebo je poskytovatel opr\xE1vn\u011Bn rovn\u011B\u017E bez p\u0159edchoz\xEDho informov\xE1n\xED ukon\u010Dit poskytov\xE1n\xED jak\xE9koliv slu\u017Eby.</li><li class="terms__item-list">Zru\u0161it, omezit \u010Di zablokovat u\u017Eivatelsk\xFD \xFA\u010Det a to kdykoliv bez p\u0159edchoz\xEDho informov\xE1n\xED.</li><li class="terms__item-list">Pr\xE1va k ochran\u011B vlastnictv\xED poskytovatele. U\u017Eivatel souhlas\xED s t\xEDm, \u017Ee nen\xED opr\xE1vn\u011Bn, na z\xE1klad\u011B t\u011Bchto podm\xEDnek, u\u017E\xEDvat jakkoliv obchodn\xED firmu poskytovatele, loga, \u010Di jak\xE9koliv obchodn\xED prvky poskytovatele.</li><li class="terms__item-list">Podm\xEDnky registrace.</li><li class="terms__item-list">Registrace u\u017Eivatele \u010Di vyu\u017E\xEDv\xE1n\xED slu\u017Eeb v z\xE1kladn\xEDm rozsahu je poskytov\xE1no zdarma.</li><li class="terms__item-list">V p\u0159\xEDpad\u011B dopl\u0148kov\xFDch funkc\xED nad r\xE1mec z\xE1kladn\xEDho u\u017E\xEDv\xE1n\xED slu\u017Eeb. Tyto dopl\u0148kov\xE9 funkce mohou b\xFDt zpoplatn\u011Bny. Takovou dopl\u0148kovou funkc\xED se rozum\xED funkce, kter\xE1 nen\xED bezpodm\xEDne\u010Dn\u011B nutn\xFDm p\u0159edpokladem pro vyu\u017E\xEDv\xE1n\xED z\xE1kladn\xEDch funkc\xED slu\u017Eeb. U\u017E\xEDv\xE1n\xED dopl\u0148kov\xFDch funkc\xED se \u0159\xEDd\xED aktu\xE1ln\u011B platn\xFDm cen\xEDkem.</li><li class="terms__item-list">Odpov\u011Bdnost u\u017Eivatele.</li><li class="terms__item-list">U\u017Eivatele bere na v\u011Bdom\xED, \u017Ee s\xE1m nese odpov\u011Bdnost za sv\xE9 jedn\xE1n\xED spojen\xE9 s u\u017E\xEDv\xE1n\xEDm slu\u017Eeb, z\xE1rove\u0148 souhlas\xED, \u017Ee slu\u017Eby nebude vyu\u017E\xEDvat k \u010Dinnostem vedouc\xEDm k poru\u0161ov\xE1n\xED pr\xE1vn\xEDch p\u0159edpis\u016F \u010CR, jin\xFDch st\xE1t\u016F, pravidel pou\u017E\xEDv\xE1n\xED slu\u017Eeb poskytovatele, t\u011Bchto podm\xEDnek, obecn\u011B uzn\xE1van\xFDch z\xE1sad po\u017E\xEDv\xE1n\xED internetu.</li><li class="terms__item-list">U\u017Eivatel je povinen v\u017Edy respektovat pr\xE1va poskytovatele.</li><li class="terms__item-list" class="unnumer bold">U\u017Eivatel zejm\xE9na nesm\xED:</li><li class="terms__item-list">u\u017E\xEDvat slu\u017Eby poskytovatele v rozporu s t\u011Bmito podm\xEDnkami,</li><li class="terms__item-list">u\u017E\xEDvat slu\u017Eby za komer\u010Dn\xEDm \xFA\u010Delem, kter\xFD by vedl k po\u0161kozen\xED poskytovatele,</li><li class="terms__item-list">prov\xE1d\u011Bt kroky k z\xEDsk\xE1n\xED p\u0159ihla\u0161ovac\xEDch \xFAdaj\u016F jin\xFDch u\u017Eivatel\u016F slu\u017Eeb,</li><li class="terms__item-list">zneu\u017E\xEDvat, blokovat, modifikovat \u010Di jinak m\u011Bnit jakoukoliv sou\u010D\xE1st Slu\u017Eby, nebo se i jen pokusit naru\u0161it stabilitu, chod nebo data Slu\u017Eeb,</li><li class="terms__item-list">u\u017E\xEDvat u\u017Eivatelsk\xFD \xFA\u010Det k rozes\xEDl\xE1n\xED nevy\u017E\xE1dan\xE9 po\u0161ty v jak\xE9koliv podob\u011B, vir\u016F \u010Di jak\xE9hokoliv obsahu vedouc\xED k poru\u0161ov\xE1n\xED pr\xE1vn\xEDch p\u0159edpis\u016F.,</li><li class="terms__item-list">poru\u0161ovat etick\xE1, mor\xE1ln\xED pravidla a to i p\u0159i registraci, u\u017E\xEDv\xE1n\xED u\u017Eivatelsk\xFDch jmen apod.,</li><li class="terms__item-list">jak\xFDmkoliv zp\u016Fsobem poru\u0161ovat pr\xE1va poskytovatele nebo t\u0159et\xEDch osob,</li><li class="terms__item-list">jednat jak\xFDmkoliv protipr\xE1vn\xEDm zp\u016Fsobem</li><li class="terms__item-list">U\u017Eivateli se d\xE1le v\xFDslovn\u011B zakazuje jakkoliv \u0161\xED\u0159it Obsah U\u017Eivatele, kter\xFD zejm\xE9na:</li><li class="terms__item-list">Poru\u0161uje pr\xE1va du\u0161evn\xEDho vlastnictv\xED,</li><li class="terms__item-list">vede k nekal\xE9 sout\u011B\u017Ei, m\u016F\u017Ee po\u0161kodit rozvoj z\xE1vodu nebo jeho chod,</li><li class="terms__item-list">obsahuje nez\xE1konn\xE9 u\u017Eit\xED ochrann\xFDch prvk\u016F, zn\xE1mek, obchodn\xEDch jmen apod.,</li><li class="terms__item-list">obsahuje jak\xE9koli podn\u011Bty nav\xE1d\u011Bj\xEDc\xED k poru\u0161ov\xE1n\xED \u010Di nepln\u011Bn\xED z\xE1konn\xE9 povinnosti, u\u017E\xEDv\xE1n\xED n\xE1vykov\xFDch l\xE1tek, vyhro\u017Eov\xE1n\xEDm jin\xFDm osob\xE1m nebo skupin\u011B osob ubl\xED\u017Een\xEDm na zdrav\xED \u010Di usmrcen\xEDm, nebo jin\xFDm po\u0161kozen\xEDm, hanoben\xED n\xE1roda, rasy, jazyka \u010Di etnick\xE9 skupiny, popla\u0161nou zpr\xE1vu, pornografick\xE1 d\xEDla, nepravdiv\xFD \xFAdaj o jin\xE9m,</li><li class="terms__item-list">poskytuje p\u0159\xEDstup k pornografick\xFDm materi\xE1l\u016Fm osob\xE1m mlad\u0161\xEDm 18 let,</li><li class="terms__item-list">propaguje hnut\xED potla\u010Duj\xEDc\xED pr\xE1va a svobody \u010Dlov\u011Bka, hl\xE1s\xE1 n\xE1rodnostn\xED, rasovou, n\xE1bo\u017Eenskou nesn\xE1\u0161enlivost,</li><li class="terms__item-list">pop\xEDr\xE1, zpochyb\u0148uje, schvaluje nebo se sna\u017E\xED ospravedlnit nacistick\xE9 nebo komunistick\xE9 genocidy nebo jin\xE9 zlo\u010Diny proti lidskosti,</li><li class="terms__item-list">kter\xFD je v rozporu s dobr\xFDmi mravy</li><li class="terms__item-list">Neaktivn\xED U\u017Eivatelsk\xFD \xFA\u010Det. Jestli\u017Ee u\u017Eivatel nen\xED p\u0159ihl\xE1\u0161en ke sv\xE9mu \xFA\u010Dtu d\xE9le ne\u017E 12 m\u011Bs\xEDc\u016F, je opr\xE1vn\u011Bn poskytovatel zru\u0161it takov\xFD \xFA\u010Det.</li></ol></li><li class="terms__item-list mrg__top54">OCHRANA OSOBN\xCDCH \xDADAJ\u016EOCHRANA OSOBN\xCDCH \xDADAJ\u016E<ol class="terms__list terms__list--second-level"><li class="terms__item-list">Osobn\xED \xFAdaje. Definice osobn\xEDch \xFAdaj\u016F dle z\xE1kona \u010D. 101/2000 Sb. O ochran\u011B osobn\xEDch \xFAdaj\u016F.</li><li class="terms__item-list">Osobn\xED \xFAdaje. V souladu s \u010Dl. 3 Podm\xEDnek vy\u017Eaduje Poskytovatel p\u0159i registraci povinn\xE9 osobn\xED \xFAdaje.</li><li class="terms__item-list">Citliv\xE9 \xFAdaje. U\u017Eivatel poskytuje jak\xE9koliv citliv\xE9 \xFAdaje dobrovoln\u011B a jejich poskytnut\xED nen\xED povinn\xE9.</li><li class="terms__item-list">Ochrana Osobn\xEDch \xFAdaj\u016F. Poskytovatel shroma\u017E\u010Fuje a uchov\xE1v\xE1 U\u017Eivatelem zadan\xE9 Osobn\xED \xFAdaje dle z\xE1kona \u010D. 101/2000Sb. O ochran\u011B osobn\xEDch \xFAdaj\u016F.</li><li class="terms__item-list">Poskytovatel nenese odpov\u011Bdnost za p\u0159\xEDpadn\xE9 neopr\xE1vn\u011Bn\xE9 z\xE1sahy t\u0159et\xEDch osob, p\u0159i kter\xFDch tyto osoby z\xEDskaj\xED p\u0159\xEDstupy k osobn\xEDm \xFAdaj\u016Fm u\u017Eivatel\u016F nebo datab\xE1ze poskytovatele a toto zneu\u017Eij\xED.</li><li class="terms__item-list">U\u017Eivatel bere na v\u011Bdom\xED riziko, kter\xE9 vypl\xFDv\xE1 z neopr\xE1vn\u011Bn\xFDch z\xE1sah\u016F.</li><li class="terms__item-list">Zpracov\xE1n\xED osobn\xEDch \xFAdaj\u016F. U\u017Eivatel souhlas\xED s pr\xE1vem poskytovatele zpracov\xE1vat, shroma\u017E\u010Fovat a sledovat osobn\xED \xFAdaje u\u017Eivatel\u016F pro vlastn\xED pot\u0159ebu a statistick\xE9 \xFA\u010Dely.</li><li class="terms__item-list">Souhlas u\u017Eivatele se zpracov\xE1n\xEDm Osobn\xEDch \xFAdaj\u016F. Dokon\u010Den\xEDm registrace u\u017Eivatel souhlas\xED se zpracov\xE1n\xEDm osobn\xEDch \xFAdaj\u016F v souladu se z\xE1konem \u010D. 101/2000Sb. O ochran\u011B osobn\xEDch \xFAdaj\u016F. Z\xE1rove\u0148 ud\u011Bluje souhlas k dal\u0161\xEDm marketingov\xFDm \xFA\u010Del\u016Fm, c\xEDlen\xED reklamy a zas\xEDl\xE1n\xED obchodn\xEDch sd\u011Blen\xED.</li><li class="terms__item-list">Doba ud\u011Blen\xED souhlasu. U\u017Eivatel ud\u011Bluje v\xFD\u0161e uveden\xE9 souhlasy na dobu neur\u010Ditou. Nedojde-li k odvol\xE1n\xED tohoto souhlasu u\u017Eivatelem p\xEDsemn\u011B.</li><li class="terms__item-list">Zpracovatel. Poskytovatel je opr\xE1vn\u011Bn pov\u011B\u0159it zpracov\xE1n\xEDm osobn\xEDch \xFAdaj\u016F t\u0159et\xED osobu..</li><li class="terms__item-list">Odvol\xE1n\xED souhlasu. Souhlas se zpracov\xE1n\xEDm osobn\xEDch \xFAdaj\u016F u\u017Eivatel odvol\xE1v\xE1 p\xEDsemn\u011B na adresu poskytovatele, v takov\xE9m p\u0159\xEDpad\u011B bez zbyte\u010Dn\xE9ho odkladu poskytovatel odstran\xED \xFAdaje z datab\xE1z\xED a u\u017Eivatelsk\xFDch \xFA\u010Dt\u016F a nebudou d\xE1le zpracov\xE1v\xE1ny.</li><li class="terms__item-list">P\u0159\xEDstup k \xFAdaj\u016Fm. U\u017Eivatel m\xE1 pr\xE1vo k z\xEDsk\xE1n\xED informace o nakl\xE1d\xE1n\xED s jeho osobn\xEDmi \xFAdaji, po\u017E\xE1dat o informaci m\u016F\u017Ee p\xEDsemn\u011B na adresu poskytovatele a ujistit se tak, \u017Ee poskytovatel zpracov\xE1v\xE1 osobn\xED \xFAdaje v souladu se z\xE1konem 101/2000 Sb. O ochran\u011B osobn\xEDch \xFAdaj\u016F.</li><li class="terms__item-list">Poskytnut\xED osobn\xEDch \xFAdaj\u016F. U\u017Eivatel si je v\u011Bdom povinnosti poskytovatele p\u0159edat osobn\xED \xFAdaje z povinnosti, kterou poskytovateli ukl\xE1d\xE1 z\xE1kon (nap\u0159. V r\xE1mci soudn\xEDch \u010Di spr\xE1vn\xEDch \u0159\xEDzen\xED).</li></ol></li><li class="terms__item-list mrg__top54">OCHRANA OSOBN\xCDCH \xDADAJ\u016E<ol class="terms__list terms__list--second-level"><li class="terms__item-list">Osobn\xED \xFAdaje. Definice osobn\xEDch \xFAdaj\u016F dle z\xE1kona \u010D. 101/2000 Sb. O ochran\u011B osobn\xEDch \xFAdaj\u016F.</li><li class="terms__item-list">Osobn\xED \xFAdaje. V souladu s \u010Dl. 3 Podm\xEDnek vy\u017Eaduje Poskytovatel p\u0159i registraci povinn\xE9 osobn\xED \xFAdaje.</li><li class="terms__item-list">Citliv\xE9 \xFAdaje. U\u017Eivatel poskytuje jak\xE9koliv citliv\xE9 \xFAdaje dobrovoln\u011B a jejich poskytnut\xED nen\xED povinn\xE9.</li><li class="terms__item-list">Ochrana Osobn\xEDch \xFAdaj\u016F. Poskytovatel shroma\u017E\u010Fuje a uchov\xE1v\xE1 U\u017Eivatelem zadan\xE9 Osobn\xED \xFAdaje dle z\xE1kona \u010D. 101/2000Sb. O ochran\u011B osobn\xEDch \xFAdaj\u016F.</li><li class="terms__item-list">Poskytovatel nenese odpov\u011Bdnost za p\u0159\xEDpadn\xE9 neopr\xE1vn\u011Bn\xE9 z\xE1sahy t\u0159et\xEDch osob, p\u0159i kter\xFDch tyto osoby z\xEDskaj\xED p\u0159\xEDstupy k osobn\xEDm \xFAdaj\u016Fm u\u017Eivatel\u016F nebo datab\xE1ze poskytovatele a toto zneu\u017Eij\xED.</li><li class="terms__item-list">U\u017Eivatel bere na v\u011Bdom\xED riziko, kter\xE9 vypl\xFDv\xE1 z neopr\xE1vn\u011Bn\xFDch z\xE1sah\u016F.</li><li class="terms__item-list">Zpracov\xE1n\xED osobn\xEDch \xFAdaj\u016F. U\u017Eivatel souhlas\xED s pr\xE1vem poskytovatele zpracov\xE1vat, shroma\u017E\u010Fovat a sledovat osobn\xED \xFAdaje u\u017Eivatel\u016F pro vlastn\xED pot\u0159ebu a statistick\xE9 \xFA\u010Dely.</li><li class="terms__item-list">Souhlas u\u017Eivatele se zpracov\xE1n\xEDm Osobn\xEDch \xFAdaj\u016F. Dokon\u010Den\xEDm registrace u\u017Eivatel souhlas\xED se zpracov\xE1n\xEDm osobn\xEDch \xFAdaj\u016F v souladu se z\xE1konem \u010D. 101/2000Sb. O ochran\u011B osobn\xEDch \xFAdaj\u016F. Z\xE1rove\u0148 ud\u011Bluje souhlas k dal\u0161\xEDm marketingov\xFDm \xFA\u010Del\u016Fm, c\xEDlen\xED reklamy a zas\xEDl\xE1n\xED obchodn\xEDch sd\u011Blen\xED.</li><li class="terms__item-list">Doba ud\u011Blen\xED souhlasu. U\u017Eivatel ud\u011Bluje v\xFD\u0161e uveden\xE9 souhlasy na dobu neur\u010Ditou. Nedojde-li k odvol\xE1n\xED tohoto souhlasu u\u017Eivatelem p\xEDsemn\u011B.</li><li class="terms__item-list">Zpracovatel. Poskytovatel je opr\xE1vn\u011Bn pov\u011B\u0159it zpracov\xE1n\xEDm osobn\xEDch \xFAdaj\u016F t\u0159et\xED osobu..</li><li class="terms__item-list">Odvol\xE1n\xED souhlasu. Souhlas se zpracov\xE1n\xEDm osobn\xEDch \xFAdaj\u016F u\u017Eivatel odvol\xE1v\xE1 p\xEDsemn\u011B na adresu poskytovatele, v takov\xE9m p\u0159\xEDpad\u011B bez zbyte\u010Dn\xE9ho odkladu poskytovatel odstran\xED \xFAdaje z datab\xE1z\xED a u\u017Eivatelsk\xFDch \xFA\u010Dt\u016F a nebudou d\xE1le zpracov\xE1v\xE1ny.</li><li class="terms__item-list">P\u0159\xEDstup k \xFAdaj\u016Fm. U\u017Eivatel m\xE1 pr\xE1vo k z\xEDsk\xE1n\xED informace o nakl\xE1d\xE1n\xED s jeho osobn\xEDmi \xFAdaji, po\u017E\xE1dat o informaci m\u016F\u017Ee p\xEDsemn\u011B na adresu poskytovatele a ujistit se tak, \u017Ee poskytovatel zpracov\xE1v\xE1 osobn\xED \xFAdaje v souladu se z\xE1konem 101/2000 Sb. O ochran\u011B osobn\xEDch \xFAdaj\u016F.</li><li class="terms__item-list">Poskytnut\xED osobn\xEDch \xFAdaj\u016F. U\u017Eivatel si je v\u011Bdom povinnosti poskytovatele p\u0159edat osobn\xED \xFAdaje z povinnosti, kterou poskytovateli ukl\xE1d\xE1 z\xE1kon (nap\u0159. V r\xE1mci soudn\xEDch \u010Di spr\xE1vn\xEDch \u0159\xEDzen\xED).</li></ol></li><li class="terms__item-list mrg__top54">REKLAMA A MARKETING<ol class="terms__list terms__list--second-level"><li class="terms__item-list">Reklama v r\xE1mci Slu\u017Eeb. U\u017Eivatel bere na v\u011Bdom\xED, \u017Ee v r\xE1mci poskytov\xE1n\xED slu\u017Eeb je poskytovatel opr\xE1vn\u011Bn zobrazovat reklamy nebo propaga\u010Dn\xED sd\u011Blen\xED (d\xE1le jen \u201Ereklama\u201C). Rozsah takov\xE9to reklamy ur\u010Duje poskytovatel. Obsah reklamy je sou\u010D\xE1st\xED obsahu t\u0159et\xEDch osob a tak poskytovatel nen\xED odpov\u011Bdn\xFD za obsah reklamy. Z\xE1rove\u0148 poskytovatel prohla\u0161uje, \u017Ee neodpov\xEDd\xE1 za jakoukoliv \u0161kodu, kter\xE1 vznikne u\u017Eivateli v souvislosti s jakoukoliv reklamou.Reklama v r\xE1mci Slu\u017Eeb. U\u017Eivatel bere na v\u011Bdom\xED, \u017Ee v r\xE1mci poskytov\xE1n\xED slu\u017Eeb je poskytovatel opr\xE1vn\u011Bn zobrazovat reklamy nebo propaga\u010Dn\xED sd\u011Blen\xED (d\xE1le jen \u201Ereklama\u201C). Rozsah takov\xE9to reklamy ur\u010Duje poskytovatel. Obsah reklamy je sou\u010D\xE1st\xED obsahu t\u0159et\xEDch osob a tak poskytovatel nen\xED odpov\u011Bdn\xFD za obsah reklamy. Z\xE1rove\u0148 poskytovatel prohla\u0161uje, \u017Ee neodpov\xEDd\xE1 za jakoukoliv \u0161kodu, kter\xE1 vznikne u\u017Eivateli v souvislosti s jakoukoliv reklamou.</li><li class="terms__item-list">Obchodn\xED sd\u011Blen\xED. U\u017Eivatel v souladu se z\xE1konem \u010D. 480/2004 Sb. o n\u011Bkter\xFDch slu\u017Eb\xE1ch informa\u010Dn\xED spole\u010Dnosti a o zm\u011Bn\u011B n\u011Bkter\xFDch z\xE1kon\u016F souhlas\xED, aby poskytovatel zas\xEDlal u\u017Eivateli na emailov\xE9 adresy u\u017Eivatele obchodn\xED sd\u011Blen\xED \u010Di informace o novink\xE1ch v r\xE1mci slu\u017Eeb. Z\xE1rove\u0148 souhlas\xED s pou\u017Eit\xEDm reklamn\xEDch pati\u010Dek v r\xE1mci emailov\xFDch adres.Obchodn\xED sd\u011Blen\xED. U\u017Eivatel v souladu se z\xE1konem \u010D. 480/2004 Sb. o n\u011Bkter\xFDch slu\u017Eb\xE1ch informa\u010Dn\xED spole\u010Dnosti a o zm\u011Bn\u011B n\u011Bkter\xFDch z\xE1kon\u016F souhlas\xED, aby poskytovatel zas\xEDlal u\u017Eivateli na emailov\xE9 adresy u\u017Eivatele obchodn\xED sd\u011Blen\xED \u010Di informace o novink\xE1ch v r\xE1mci slu\u017Eeb. Z\xE1rove\u0148 souhlas\xED s pou\u017Eit\xEDm reklamn\xEDch pati\u010Dek v r\xE1mci emailov\xFDch adres.</li></ol></li><li class="terms__item-list mrg__top54">VYLOU\u010CEN\xCD ODPOV\u011ADNOSTI<ol class="terms__list terms__list--second-level"><li class="terms__item-list">Vylou\u010Den\xED z\xE1ruk. Poskytovatel neposkytuje \u017E\xE1dn\xE9 z\xE1ruky na slu\u017Eby, kter\xE9 jsou poskytovan\xE9 prost\u0159ednictv\xEDm mail.cz. Zejm\xE9na se jedn\xE1 o to, \u017Ee:</li><li class="terms__item-list">slu\u017Eby budou v provozu nep\u0159etr\u017Eit\u011B 24 hodin denn\u011B, 7 dn\xED v t\xFDdnu,</li><li class="terms__item-list">Slu\u017Eby budou fungovat bez jak\xE9hokoliv omezen\xED po celou dobu dostupnosti Slu\u017Eeb,</li><li class="terms__item-list">Obsah Poskytovatele \u010Di obsah t\u0159et\xEDch osob je celistv\xFD, spr\xE1vn\xFD a p\u0159esn\xFD, z\xE1rove\u0148 tak\xE9 poskytovatel neru\u010D\xED za to, \u017Ee nebudou poru\u0161ena pr\xE1va t\u0159et\xEDch osob.</li><li class="terms__item-list">Toto ustanoven\xED se nevztahuje na poskytov\xE1n\xED z\xE1konn\xFDch z\xE1ruk.</li><li class="terms__item-list">Odpov\u011Bdnost za \u0161kodu. U\u017Eivatel bere na v\u011Bdom\xED, \u017Ee byl sezn\xE1men se skute\u010Dnost\xED, \u017Ee poskytovatel neposkytuje v r\xE1mci poskytovan\xFDch slu\u017Eeb \u017E\xE1dn\xE9 z\xE1ruky a proto akceptuje ur\u010Ditou m\xEDru rizika a zavazuje se u\u010Dinit kroky takov\xE9, aby vylou\u010Dil nebo omezil mo\u017Enost vzniku \xFAjmy.</li></ol></li><li class="terms__item-list mrg__top54">U\u017DIVATEL SE ZAVAZUJE ZEJM\xC9NA:<ol class="terms__list terms__list--second-level"><li class="terms__item-list">Pravideln\u011B z\xE1lohovat data,</li><li class="terms__item-list">\u010Dinit dal\u0161\xED opat\u0159en\xED vedouc\xED k minimalizaci rizika \xFAjmy.</li><li class="terms__item-list">U\u017Eivatel bere na v\u011Bdom\xED, \u017Ee poskytovatel neodpov\xEDd\xE1 za \u017E\xE1dnou p\u0159\xEDmou \u010Di nep\u0159\xEDmou \xFAjmu spojenou s u\u017E\xEDv\xE1n\xEDm slu\u017Eeb,obsahu poskytovatele \u010Di obsahu t\u0159et\xEDch osob a to zejm\xE9na poskytovatel neodpov\xEDd\xE1 za:</li><li class="terms__item-list">\u0161patnou dostupnost, nefunk\u010Dnost nebo nedostupnost jak\xE9koliv slu\u017Eby.</li><li class="terms__item-list">Nedoru\u010Den\xED zpr\xE1vy, doru\u010Den\xED ne\xFApln\xE9 nebo jak\xFDmkoliv zp\u016Fsobem po\u0161kozen\xE9 zpr\xE1vy,</li><li class="terms__item-list">odesl\xE1n\xED po\u0161kozen\xED zpr\xE1vy nebo neodesl\xE1n\xED zpr\xE1vy,</li><li class="terms__item-list">za po\u0161kozen\xED, ztr\xE1tu nebo neulo\u017Een\xED dat, kter\xE1 jsou sou\u010D\xE1st\xED obsahu u\u017Eivatele,</li><li class="terms__item-list">n\xE1sledky nespr\xE1vn\u011B, nep\u0159esn\u011B \u010Di ne\xFApln\u011B uveden\xFDch \xFAdaj\u016F p\u0159i registraci u\u017Eivatele</li><li class="terms__item-list">poskytovatel i u\u017Eivatel souhlas\xED s omezen\xEDm odpov\u011Bdnosti poskytovatele v\u016F\u010Di u\u017Eivateli.</li><li class="terms__item-list">Odpov\u011Bdnost podle zvl\xE1\u0161tn\xEDch p\u0159edpis\u016F. Poskytovatel v souladu s ustanoven\xEDm \xA7 3, 4 a 5 z\xE1kona \u010D. 480/2004 Sb., o n\u011Bkter\xFDch slu\u017Eb\xE1ch informa\u010Dn\xED spole\u010Dnosti, v platn\xE9m zn\u011Bn\xED, za \u017E\xE1dn\xFDch okolnost\xED neodpov\xEDd\xE1 za obsah Obsahu U\u017Eivatele.</li><li class="terms__item-list">Od\u0161kodn\u011Bn\xED. U\u017Eivatel bere z\xE1vazn\u011B na v\u011Bdom\xED povinnost od\u0161kodnit poskytovatele za ve\u0161kerou \xFAjmu, kter\xE1 mu vznikne v d\u016Fsledku poru\u0161en\xED t\u011Bchto podm\xEDnek u\u017Eivatelem.</li></ol></li><li class="terms__item-list mrg__top54">SOUHLAS S PODM\xCDNKAMI<ol class="terms__list terms__list--second-level"><li class="terms__item-list">Souhlas s Podm\xEDnkami. Ka\u017Ed\xFD u\u017Eivatel m\xE1 za povinnost sezn\xE1mit se s t\u011Bmito podm\xEDnkami p\u0159ed zah\xE1jen\xEDm vyu\u017E\xEDv\xE1n\xED slu\u017Eeb a vyslovit souhlas s t\u011Bmito podm\xEDnkami. Pokud u\u017Eivatel nesouhlas\xED s podm\xEDnkami je povinen zdr\u017Eet se u\u017E\xEDv\xE1n\xED slu\u017Eeb.</li><li class="terms__item-list">Zm\u011Bny a \xFA\u010Dinnost zm\u011Bn Podm\xEDnek</li><li class="terms__item-list">Zm\u011Bny podm\xEDnek. Poskytovatel je opr\xE1vn\u011Bn m\u011Bnit podm\xEDnky jednostrann\u011B, kdykoliv a zm\u011Bnu poskytovatel sd\u011Blit u\u017Eivateli prost\u0159ednictv\xEDm u\u017Eivatelsk\xE9ho \xFA\u010Dtu, kter\xFD je registrovan\xFD na www.mail.cz.</li><li class="terms__item-list">\xDA\u010Dinnost zm\u011Bn Podm\xEDnek. \xDA\u010Dinnost podm\xEDnek a jejich zm\u011Bn nast\xE1v\xE1 dnem, kter\xFD ur\u010D\xED poskytovatel a u\u017Eivatel s nimi souhlas\xED, za takov\xFD souhlas se pova\u017Euje i pokra\u010Dov\xE1n\xED ve vyu\u017E\xEDv\xE1n\xED slu\u017Eeb u\u017Eivatelem, jemu\u017E zm\u011Bna podm\xEDnek byla sd\u011Blena v souladu s t\xEDmto \u010Dl\xE1nkem.</li><li class="terms__item-list">U\u017Eivatel vyjad\u0159uje souhlas s platebn\xEDmi podm\xEDnkami v\u0161ech slu\u017Eeb, kter\xE9 vyu\u017E\xEDv\xE1, dle aktu\xE1ln\xEDho cen\xEDku, kter\xFD je zve\u0159ejn\u011Bn\xFD na webov\xFDch str\xE1nk\xE1ch www.mail.cz</li><li class="terms__item-list">U\u017Eivatel vyjad\u0159uje souhlas poskytovateli p\u0159ipojit k u\u017Eivatelsk\xE9mu \xFA\u010Dtu dal\u0161\xED slu\u017Eby, kter\xE9 poskytoatel bude v budoucnu poskytovat, z\xE1rove\u0148 souhlas\xED, \u017Ee poskytovatel tak m\u016F\u017Ee \u010Dinit automaticky.</li></ol></li><li class="terms__item-list mrg__top54">VZTAHY K T\u0158ET\xCDM OSOB\xC1M:<ol class="terms__list terms__list--second-level"><li class="terms__item-list">Obsah t\u0159et\xEDch osob. Poskytovatel nenese \u017E\xE1dnou odpov\u011Bdnost za obsah t\u0159et\xEDch osob, kter\xFD je zobrazov\xE1n u\u017Eivatel\u016Fm v n\xE1vaznosti na poskytovan\xE9 slu\u017Eby. Zejm\xE9na pak poskytovatel neodpov\xEDd\xE1 za mo\u017Enost z\xE1sahu obsahu t\u0159et\xEDch stran do pr\xE1v jin\xFDch osob. Poskytovatel sou\u010Dasn\u011B neodpov\xEDd\xE1 za servery \u010Di slu\u017Eby t\u0159et\xEDch strany a nejsou ze strany poskytovatele kontrolov\xE1ny, poskytovatel nenese odpov\u011Bdnost za jakoukoliv formu p\u0159enosu p\u0159ijat\xE9ho ze serveru t\u0159et\xEDch osob.</li></ol></li><li class="terms__item-list mrg__top54">Z\xC1V\u011ARE\u010CN\xC1 USTANOVEN\xCD<ol class="terms__list terms__list--second-level"><li class="terms__item-list">Komunikace. Komunikace mezi poskytovatelem a u\u017Eivatelem prob\xEDh\xE1 p\xEDsemn\u011B na adresu poskytovatele (zas\xEDl\xE1 u\u017Eivatel) \u010Di adresu u\u017Eivatele (zas\xEDl\xE1 poskytovatel), emailem (pro doru\u010Den\xED poskytovateli e-mail: info@mail.cz) Poskytovatel m\xE1 tak\xE9 mo\u017Enost vyu\u017E\xEDt ke komunikaci s u\u017Eivatelem nebo u\u017Eivateli pro doru\u010Den\xED sd\u011Blen\xED sv\xE9 internetov\xE9 str\xE1nky, na kter\xE9 sd\u011Blen\xED vyv\u011Bs\xED. Poskytovatel m\u016F\u017Ee pro komunikaci tak\xE9 vyu\u017E\xEDt \u010D\xEDslo uveden\xE9 u\u017Eivatelem p\u0159i registraci.</li><li class="terms__item-list">Rozhodn\xE9 pr\xE1vo a kolizn\xED normy. Ve\u0161ker\xE9 podm\xEDnky v\u010Detn\u011B ve\u0161ker\xFDch pr\xE1vn\xEDch vztah\u016F, kter\xE9 vznikly nebo vzniknou mezi poskytovatelem a u\u017Eivatelem se \u0159\xEDd\xED pr\xE1vn\xEDm \u0159\xE1dem \u010Cesk\xE9 Republiky.</li><li class="terms__item-list">\u0158e\u0161en\xED spor\u016F. Spory jsou \u0159e\u0161eny p\u0159ed soudy \u010CR.</li><li class="terms__item-list">Jazykov\xE1 verze. Forma jazykov\xE9 verze podm\xEDnek je v \u010Desk\xE9m jazyce a je tak z\xE1vazn\xE1, ostatn\xED jazykov\xE9 verze jsou pouze informa\u010Dn\xEDho charakteru.</li><li class="terms__item-list">Salv\xE1torsk\xE1 klauzule. Pokud jak\xE9koliv ustanoven\xED t\u011Bchto Podm\xEDnek je nebo se stane neplatn\xFDm nebo nevymahateln\xFDm jako celek nebo jeho \u010D\xE1st, je pln\u011B odd\u011Bliteln\xFDm od ostatn\xEDch ustanoven\xED t\u011Bchto Podm\xEDnek a takov\xE1 neplatnost nebo nevymahatelnost nebude m\xEDt \u017E\xE1dn\xFD vliv na platnost a vymahatelnost jak\xFDchkoliv ostatn\xEDch ustanoven\xED t\u011Bchto Podm\xEDnek. Poskytovatel v takov\xE9m p\u0159\xEDpad\u011B nahrad\xED takov\xE9 neplatn\xE9 nebo nevymahateln\xE9 ustanoven\xED jin\xFDm ustanoven\xEDm, kter\xE9 bude v nejvy\u0161\u0161\xED mo\u017En\xE9 m\xED\u0159e odpov\xEDdat obsahu p\u016Fvodn\xEDho ustanoven\xED.</li></ol></li><!--<li class="terms__item-list mrg__top54">--><!--<ol class="terms__list terms__list&#45;&#45;second-level">--><!--<li class="terms__item-list">--><!--</li>--><!--<li class="terms__item-list">--><!--</li>--><!--<li class="terms__item-list">--><!--</li>--><!--<li class="terms__item-list">--><!--</li>--><!--<li class="terms__item-list">--><!--</li>--><!--<li class="terms__item-list">--><!--</li>--><!--</ol>--><!--</li>--></ol></div></div><div class="layout__footer"><div class="footer"><div class="footer__row position--left"><div class="footer-left"><div class="footer__date-info">\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0439 \u0432\u0445\u043E\u0434 31 \u043C\u0430\u0440\u0442\u0430 2017 \u0433\u043E\u0434\u0430 \u0432 17:30</div></div><div class="footer-right"><!--<div class="footer-right__elemets">--><!--<a href="">\u041F\u043E\u043C\u043E\u0449\u044C</a>--><!--</div>--><div class="footer-right__elemets">\xA9 2017, Mail.cz</div><div class="footer-right__elemets"><!-- \u042F\u0437\u044B\u043A\u043E\u0432\u043E\u0435 \u043C\u0435\u043D\u044E--><div class="choice-language choice-language--main-footer"><a class="choice-language__link choice-language--active" href=""><img class="choice-language__country" src="images/country/albania.svg" alt=""></a><!----> <a class="choice-language__link" href=""><img class="choice-language__country" src="images/country/bosnia.svg" alt=""></a><!----> <a class="choice-language__link" href=""><img class="choice-language__country" src="images/country/croatia.svg" alt=""></a><!----> <a class="choice-language__link" href=""><img class="choice-language__country" src="images/country/cz.svg" alt=""></a><!----> <a class="choice-language__link" href=""><img class="choice-language__country" src="images/country/macedonia.svg" alt=""></a><!----> <a class="choice-language__link" href=""><img class="choice-language__country" src="images/country/russia.svg" alt=""></a><!----> <a class="choice-language__link" href=""><img class="choice-language__country" src="images/country/serbia.svg" alt=""></a><!----> <a class="choice-language__link" href=""><img class="choice-language__country" src="images/country/slovakia.svg" alt=""></a><!----> <a class="choice-language__link" href=""><img class="choice-language__country" src="images/country/Slovenia.svg" alt=""></a><!----> <a class="choice-language__link" href=""><img class="choice-language__country" src="images/country/uk.svg" alt=""></a><!----> <a class="choice-language__link" href=""><img class="choice-language__country" src="images/country/ukraine.svg" alt=""></a></div></div></div></div></div></div>');
$templateCache.put('app/template/main/template.html','<section class="layout"><div class="layout__header"><header></header></div><div class="layout__inner" layout-height><div class="layout__left"><div class="layout__menu"><menu-main folder="vm.folder"></menu-main></div></div><div class="layout__content"><div class="template-header"><div class="template-header__menu"><!-- \u0438\u0442\u0435\u043C--><div class="template-header__menu-item padding--left19 padding--right10 flex align-items--cn"><div class="checkbox-y checkbox-y--size15"><label class="checkbox-y__label"><input class="checkbox-y__input" type="checkbox" ng-model="" ng-change="" ng-disabled=""><div class="checkbox-y__body"><span class="checkbox-y__icon"></span></div></label></div></div><!-- \u0438\u0442\u0435\u043C--><div class="template-header__menu-item"><a class="template-header__link" href ng-click=""><span class="icon-add-template template-header__icon"></span> <span class="template-header__item-name">\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0448\u0430\u0431\u043B\u043E\u043D</span></a></div><!-- \u0438\u0442\u0435\u043C--><div class="template-header__menu-item"><a class="template-header__link" href ng-click=""><span class="icon-bin template-header__icon color--light-red"></span> <span class="template-header__item-name">\u0423\u0434\u0430\u043B\u0438\u0442\u044C</span></a></div><!-- \u0438\u0442\u0435\u043C--><div class="template-header__menu-item"><a class="template-header__link" href ng-click=""><span class="icon-tag template-header__icon"></span> <span class="template-header__item-name">\u041C\u0435\u0442\u043A\u0430 <span class="icon-arrow-down template-header__item-name-icon"></span></span></a></div><!-- \u0438\u0442\u0435\u043C--><div class="template-header__menu-item"><a class="template-header__link" href ng-click=""><span class="icon-folder template-header__icon"></span><div class="template-header__item-name">\u0412 \u043F\u0430\u043F\u043A\u0443 <span class="icon-arrow-down template-header__item-name-icon"></span></div></a></div><!-- \u0438\u0442\u0435\u043C--><div class="template-header__menu-item"><a class="template-header__link"><span class="icon-more template-header__icon"></span> <span class="template-header__item-name">\u0415\u0449\u0435</span></a></div></div></div><div class="template-list"><div class="template-list__item pointer" ng-class="{\'inbox-message--importmant\': vm.message.important, \'inbox-message--new\': !vm.message.seen}" ng-mouseover="vm.message.hover = true" ng-mouseleave="vm.message.hover = false" inbox-message-hover ng-click="vm.goToUrl()"><div><div class="template-list__importance pointer" ng-class="{\'opacity--0\': !vm.message.hover && !vm.message.important}" ng-click="vm.setImportant(); $event.stopPropagation();"><span class="icon-important"></span></div></div><div><div class="template-list__checked"><div class="checkbox-y checkbox-y--size15" ng-click="$event.stopPropagation();"><label class="checkbox-y__label"><input class="checkbox-y__input" type="checkbox" data-checklist-model="vm.messages.checked" data-checklist-value="vm.message"><div class="checkbox-y__body"><span class="checkbox-y__icon"></span></div></label></div></div></div><div><div class="template-list__avatar"><!--<div class="avatar avatar&#45;&#45;size30">--><!--<img class="avatar__image" src="/images/avatar.png">--><!--</div>--><avatar-name class="avatar avatar--settings avatar--size30 avatar--second-style mrg__auto" name="vm.message.from" email="vm.message.fromAddress" ng-if="vm.$state.params.mbox !== \'Sent\' && vm.$state.params.mbox !== \'Drafts\'"></avatar-name><avatar-name class="avatar avatar--settings avatar--size30 avatar--second-style mrg__auto" name="vm.message.to[0].name" email="vm.message.to[0].address" ng-if="vm.$state.params.mbox === \'Sent\' || vm.$state.params.mbox === \'Drafts\'"></avatar-name></div></div><div><div class="template-list__name" ng-if="vm.$state.params.mbox !== \'Sent\'">{{ vm.message.from }}</div><div class="template-list__name" ng-if="vm.$state.params.mbox === \'Sent\' || vm.$state.params.mbox === \'Drafts\'">{{ vm.message.to[0].address }}</div></div><div><!--ng-click="vm.message.active = !vm.message.active; $event.stopPropagation();">--><div class="template-list__round"><div class="template-list__round pointer" ng-click="vm.setSeen(); $event.stopPropagation();"><div class="round" ng-class="{\n                        \'round&#45;&#45;border\': vm.message.hover,\n                        \'round&#45;&#45;yellow\': !vm.message.seen\n                     }"></div></div></div></div><div><div class="template-list__folder"><span class="icon-incoming"></span></div></div><div><div class="template-list__labels"><div class="label-ydx template-list__label" ng-repeat="tag in vm.message.tags track by $index" style="background: {{ tag.bgcolor }}">{{ tag.tag_name }}</div></div></div><div class="template-list__text"><div class="template-list__subject">{{ vm.message.Subject }}</div><div class="template-list__message" ng-bind-html="vm.message.body"></div></div><div><div class="template-list__data">{{ vm.getDate(vm.message.date.date) }}</div></div></div></div><div class="template-footer"></div><div class="layout__footer"><footer></footer></div></div></div></section>');
$templateCache.put('app/theme/main/main.html','<h1>Theme</h1>');}]);