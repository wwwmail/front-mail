(function () {
    'use strict';

    angular
        .module('mail.message')
        .controller('MessageController', MessageController);

    MessageController.$inject = ['mail', '$scope', '$state', '$sce', 'message', 'tag', '$rootScope', '$auth', '$uibModal', 'contact'];
    /* @ngInject */
    function MessageController(mail, $scope, $state, $sce, message, tag, $rootScope, $auth, $uibModal, contact) {
        var vm = this;

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
            getTags();
        });

        $scope.$on('tag:message:delete:success', function (e, data) {
            getTags();
        });

        activate();

        function activate() {
            vm.$state = $state;

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
            copyReMessage();
            $state.go('mail.inbox', {mbox: 'INBOX'});
        }

        function copyReMessage() {
            var data = {
                id: $state.params.id,
                mboxfrom: $state.params.mbox,
                connection_id: $state.params.connection_id,
                cmd: 'reply'
            };
            mail.post({}, data).then(function (response) {
                pasteRe(response.data.id);
            });
        }

        function pasteRe(id) {
            mail.getById({
                id: id,
                mbox: 'Drafts',
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
                vm.sendForm.model.body += html;

                vm.sendForm.model.to = message.fromAddress;

                var data = getFormattedData();

                console.log('vm.sendForm', data);

                data.cmd = 'send';
                mail.post({}, data).then(function (response) {
                    console.log('response', response);
                });
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
                part: 'head',
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
            var data = mail.getAnswerData();

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
                    controller: function ($scope, $uibModalInstance, model) {
                        $scope.cancel = cancel;

                        $scope.contact = model;

                        function cancel() {
                            $uibModalInstance.dismiss('cancel');
                        }
                    },
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
