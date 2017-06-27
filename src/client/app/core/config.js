(function () {
    'use strict';

    moment.locale('ru');

    var core = angular.module('app.core');

    core.config(function ($translateProvider) {
        // $translateProvider
        //     .useStaticFilesLoader({
        //         files: [
        //             {
        //                 prefix: 'i18n/',
        //                 suffix: '.json'
        //             }
        //         ]
        //     });

        $translateProvider.useStaticFilesLoader({
            prefix: 'i18n/',
            suffix: '.json'
        });

        $translateProvider.fallbackLanguage('ru');
        $translateProvider.preferredLanguage('ru');
        $translateProvider.useLocalStorage();
        $translateProvider.useLoaderCache('$translationCache');
    });

    core.config(function (tagsInputConfigProvider) {
        tagsInputConfigProvider.setDefaults('tagsInput', {placeholder: ''});
    });

    core.config(function ($uibTooltipProvider) {
        $uibTooltipProvider.setTriggers({'open': 'close'});
    });

    core.config(function ($authProvider, CONFIG) {
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

    });
})();
