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
                            $auth.signOut();
                            $state.go('signIn');
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

            _.remove(profiles, function (item) {
                return item.profile.email === user.profile.email;
            });

            profiles.push(user);

            localStorageService.set('profiles', profiles);

            console.log('profiles', user, profiles);
        }

        function destroyStorageProfile(user) {
            var profiles = getStorageProfiles();

            _.remove(profiles, function (item) {
                return user.profile.email === item.profile.email;
            });

            localStorageService.set('profiles', profiles);

            return profiles;
        }
        
        function isQuotaFull() {
            // console.log('isQuotaFull', $auth.user.profile.usedQuota <= $auth.user.profile.quota);
            return $auth.user.profile.usedQuota >= $auth.user.profile.quota;
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
            destroyStorageProfile: destroyStorageProfile,
            isQuotaFull: isQuotaFull
        }
    }

})();