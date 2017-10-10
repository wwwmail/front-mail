(function () {
    'use strict';

    angular
        .module('app.services')
        .factory('mail', mail);

    mail.$inject = ['CONFIG', '$timeout', '$resource', '$http', '$rootScope', '$state', 'Upload', 'localStorageService'];

    function mail(CONFIG, $timeout, $resource, $http, $rootScope, $state, Upload, localStorageService) {
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
                },
                getCount: {
                    method: 'POST',
                    url: CONFIG.APIHost + '/mails/count'
                }
            }
        );

        function get(params, data) {
            return resource.get(params, data).$promise;
        }

        function post(params, data) {
            return resource.post(params, data).$promise
                .then(function (response) {
                    if (data.cmd === 'send') {
                        $rootScope.$broadcast('mail:send:success');
                    }

                    $rootScope.$broadcast('mailBox:sync');
                    $rootScope.$broadcast('mail:sync');

                    return response;
                });
        }

        function put(params, data) {
            return resource.put(params, data).$promise
                .then(function (response) {
                    if (data.cmd === 'send') {
                        $rootScope.$broadcast('mail:send:success');
                    }

                    $rootScope.$broadcast('mailBox:sync');
                    $rootScope.$broadcast('mail:sync');

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

        function moveToFolder(folder, data, options) {
            options = options || {};

            var messages = angular.copy(data);

            if (messages.isLoading || !messages.checked.length) return;

            $rootScope.$broadcast('notify:message', {
                message: (messages.checked.length > 1 ? 'LETTERS_MOVED_TO_A_FOLDER' : 'LETTER_MOVED_TO_A_FOLDER'),
                folder: folder
            });

            move({}, {
                messages: filterMessage(messages.checked),
                mboxnew: folder.name
            }).then(function (response) {
                $rootScope.$broadcast('mailBox:sync');

                if (options.move && $state.current.name === 'mail.message') {
                    $timeout(function () {
                        $state.go('mail.message', {
                            mbox: folder.name,
                            id: response.data[0].newNum,
                            connection_id: response.data[0].connection_id
                        });
                    }, 250);
                }
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

        function setSeen(data, options) {
            options = options || {};

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

            if (!options.saveChecked) {
                messages.checked = [];
            }

            return messages;
        }

        function setUnSeen(data, options) {
            options = options || {};

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

            if (!options.saveChecked) {
                messages.checked = [];
            }

            return messages;
        }

        function setImportant(data, options) {
            options = options || {};

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

            if (!options.saveChecked) {
                messages.checked = [];
            }

            return messages;
        }

        function setUnImportant(data, options) {
            options = options || {};

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

            if (!options.saveChecked) {
                messages.checked = [];
            }

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

        function getCount(params, data) {
            return resource.getCount(params, data).$promise
                .then(function (response) {

                    $rootScope.$broadcast('mail:count:update', {count: response.data.count});

                    return response.data.count;
                });
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
            getMessagesCounters: getMessagesCounters,
            getCount: getCount
        }
    }

})();