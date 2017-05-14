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

            if ($state.params.id && $state.params.mbox) {
                vm.sendForm.id = $state.params.id;
                getMessage();
            }

            if ($state.params.to) {
                vm.sendForm.model.to = $state.params.to;
            }
        }

        function send(form) {
            if (form.$invalid) return;

            var data = getFormattedData();

            data.cmd = 'send';
            mail.post({}, data).then(function (response) {
                // console.log('response', response);
                // if (response.success) {
                //     $state.go('mail.inbox');
                // }
            });

            $state.go('mail.inbox');
        }

        function save() {
            var data = getFormattedData();

            var result = {};

            if (!vm.sendForm.id) {
                result = mail.post({}, data);
            }

            if (vm.sendForm.id) {
                if ($state.params.template) {
                    data.mbox = $state.params.mbox;
                    data.mbox = $state.params.mbox;
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

                    if (vm.$state.params.template) {
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
            }).then(function() {
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

            vm.sendForm.model.attachmentsData = getFormattedAttach(files);

            vm.isUploading = true;

            mail.upload({id: vm.sendForm.id}, data, files).then(function (response) {
                console.log('result', response, files);

                vm.isUploading = false;

                vm.sendForm.id = response.data.data.id;
                vm.sendForm.model.number = vm.sendForm.id;

                if (!vm.sendForm.model.attaches) {
                    vm.sendForm.model.attaches = [];
                }

                _.forEach(files, function (file) {
                    vm.sendForm.model.attaches.push(file.name);
                });

            });
        }

        function getFormattedAttach(files) {
            _.forEach(files, function (file) {
                file.fileName = file.name;
                file.mime = file.type;
            });

            return files;
        }

    }
})();
