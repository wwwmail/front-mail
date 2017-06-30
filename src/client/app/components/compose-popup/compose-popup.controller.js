(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('ComposePopupController', ComposePopupController);

    ComposePopupController.$inject = ['mail', '$scope', '$interval', 'sign', '$rootScope', '$auth', '$uibModalInstance', 'params', 'sms', '$timeout', '$translate'];
    /* @ngInject */
    function ComposePopupController(mail, $scope, $interval, sign, $rootScope, $auth, $uibModalInstance, params, sms, $timeout, $translate) {
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
        vm.showSignButton = showSignButton;

        $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
            $interval.cancel(vm.interval);
        });

        $scope.$watch('vm.sendForm.model.body', function (data, oldData) {
            if (data) {
                if (params.mbox !== 'Drafts' && !vm.isSaveDraft && !params.fwd && !params.re && !params.template) {
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

            console.log('1', data);

            if (!vm.sendForm.id) {
                data.mbox = 'Templates';

                console.log('2', data);

                mail.post({}, data).then(function () {
                    console.log('3', data);
                    // $state.go('mail.inbox', {
                    //     mbox: 'Templates'
                    // });
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
            // console.log('invalidFiles', invalidFiles);
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
            if (params.new) {
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
            // html += '-------- Конец пересылаемого сообщения --------';
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
            vm.connections.items = [];

            var userConnection = {
                id: vm.user.profile.default_connection_id,
                email: vm.user.profile.email,
                sign: vm.user.profile.sign,
                user_name: vm.user.profile.user_name
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
            }, 720);
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

        var pageY = 0;

        function showSignButton(event) {
            return;
            if (pageY) {
                if (event.pageY == pageY) {
                    vm.isSignButtonShow = false;
                    // $addSigh.attr('style', "opacity: 0; transition: opacity 1s;" );
                    // $addSigh.mouseenter(function (event) {
                    //     $(this).attr('style', "opacity: 1;" );})
                } else {
                    vm.isSignButtonShow = true;
                    // $addSigh.attr('style', "opacity: 1; transition: opacity 0s;" );
                }
            }
            pageY = event.pageY;



            // console.log('event', event);
            // vm.isSignButtonShow = true;
            //
            // var tm = $timeout(function () {
            //     vm.isSignButtonShow = false;
            // }, 3000);
        }
    }
})();
