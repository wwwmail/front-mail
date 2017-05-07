(function () {
    'use strict';

    angular
        .module('app.services')
        .factory('mail', mail);

    mail.$inject = ['CONFIG', '$resource', '$http', '$auth'];

    function mail(CONFIG, $resource, $http, $auth) {
        var API_URL = CONFIG.APIHost + '/mail';

        var resource = $resource(API_URL,
            {},
            {
                get: {
                    method: 'GET',
                    url: API_URL,
                    params: {
                        connection_id: $auth.retrieveData('profile').profile.default_connection_id
                    }
                },
                post: {
                    method: 'POST',
                    url: API_URL,
                    params: {
                        connection_id: $auth.retrieveData('profile').profile.default_connection_id
                    }
                },
                put: {
                    method: 'PUT',
                    url: API_URL + '/:id',
                    params: {
                        id: '@id',
                        connection_id: $auth.retrieveData('profile').profile.default_connection_id
                    }
                },
                getById: {
                    method: 'GET',
                    url: API_URL + '/:id',
                    params: {
                        connection_id: $auth.retrieveData('profile').profile.default_connection_id
                    }
                },
                move: {
                    method: 'POST',
                    url: CONFIG.APIHost + '/mails/move',
                    params: {
                        connection_id: $auth.retrieveData('profile').profile.default_connection_id
                    }
                },
                destroy: {
                    method: 'DELETE',
                    url: API_URL + '/:id',
                    hasBody: true,
                    params: {
                        id: '@id',
                        connection_id: $auth.retrieveData('profile').profile.default_connection_id
                    }
                },
                flag: {
                    method: 'POST',
                    url: CONFIG.APIHost + '/mails/flag',
                    params: {
                        connection_id: $auth.retrieveData('profile').profile.default_connection_id
                    }
                },
                deflag: {
                    method: 'POST',
                    url: CONFIG.APIHost + '/mails/deflag',
                    params: {
                        connection_id: $auth.retrieveData('profile').profile.default_connection_id
                    }
                }
            }
        );

        // var messages = [];
        function getDefaultConnection() {
            return $auth.user.profile.default_connection_id;
        }

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

        function move(params, data) {
            return resource.move(params, data).$promise;
        }

        function flag(params, data) {
            return resource.flag(params, data).$promise;
        }

        function deflag(params, data) {
            return resource.deflag(params, data).$promise;
        }

        function destroy(params, data) {
            return $http({
                url: API_URL + '/' + data.id,
                method: 'DELETE',
                data: data,
                headers: {
                    "Content-Type": "application/json;charset=utf-8"
                }
            });
            // return resource.destroy(params, data).$promise;
        }

        function setSeen(data) {
            var messages = angular.copy(data);

            if (messages.isLoading || !messages.checked.length) return;

            var ids = [];

            _.forEach(messages.checked, function (checked) {
                ids.push(checked.number);
                _.forEach(messages.items, function (item) {
                    if (checked.number == item.number) {
                        item.seen = true;
                    }
                });
            });

            messages.checked = [];

            _.forEach(messages.items, function (item) {
                _.forEach(ids, function (id) {
                    if (item.number === id) {
                        messages.checked.push(item);
                    }
                });
            });

            messages.isLoading = true;

            flag({}, {
                ids: ids,
                flag: 'Seen'
            }).then(function (response) {
                messages.isLoading = false;
            });

            return messages;
        }

        function setUnSeen(data) {
            var messages = angular.copy(data);

            if (messages.isLoading || !messages.checked.length) return;

            var ids = [];

            _.forEach(messages.checked, function (checked) {
                ids.push(checked.number);
                _.forEach(messages.items, function (item) {
                    if (checked.number == item.number) {
                        item.seen = false;
                    }
                });
            });

            messages.checked = [];

            _.forEach(messages.items, function (item) {
                _.forEach(ids, function (id) {
                    if (item.number === id) {
                        messages.checked.push(item);
                    }
                });
            });

            messages.isLoading = true;

            deflag({}, {
                ids: ids,
                flag: 'Seen'
            }).then(function (response) {
                messages.isLoading = false;
            });

            return messages;
        }

        function setImportant(data) {
            var messages = angular.copy(data);

            if (messages.isLoading || !messages.checked.length) return;

            var ids = [];

            _.forEach(messages.checked, function (checked) {
                ids.push(checked.number);
                _.forEach(messages.items, function (item) {
                    if (checked.number == item.number) {
                        item.important = true;
                    }
                });
            });

            messages.checked = [];

            _.forEach(messages.items, function (item) {
                _.forEach(ids, function (id) {
                    if (item.number === id) {
                        messages.checked.push(item);
                    }
                });
            });

            messages.isLoading = true;

            flag({}, {
                ids: ids,
                flag: 'Flagged'
            }).then(function (response) {
                messages.isLoading = false;
            });

            return messages;
        }

        function setUnImportant(data) {
            var messages = angular.copy(data);

            if (messages.isLoading || !messages.checked.length) return;

            var ids = [];

            _.forEach(messages.checked, function (checked) {
                ids.push(checked.number);
                _.forEach(messages.items, function (item) {
                    if (checked.number == item.number) {
                        item.important = false;
                    }
                });
            });

            messages.checked = [];

            _.forEach(messages.items, function (item) {
                _.forEach(ids, function (id) {
                    if (item.number === id) {
                        messages.checked.push(item);
                    }
                });
            });

            messages.isLoading = true;

            deflag({}, {
                ids: ids,
                flag: 'Flagged'
            }).then(function (response) {
                messages.isLoading = false;
            });

            return messages;
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
            setUnImportant: setUnImportant
        }
    }

})();