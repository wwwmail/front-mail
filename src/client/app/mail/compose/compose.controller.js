(function () {
    'use strict';

    angular
        .module('mail.compose')
        .controller('ComposeController', ComposeController);

    ComposeController.$inject = ['mail', '$interval', '$state', '$rootScope', '$auth', 'contact', '$uibModal'];
    /* @ngInject */
    function ComposeController(mail, $interval, $state, $rootScope, $auth, contact, $uibModal) {
        var vm = this;

        vm.interval = {};

        vm.isCopy = false;
        vm.isCopyHidden = false;

        vm.tags = [];

        vm.contacts = {
            items: {}
        };

        vm.selectContact = {};

        vm.sendForm = {
            model: {}
        };

        vm.toList = {
            model: {}
        };

        vm.send = send;
        vm.save = save;
        vm.findContacts = findContacts;
        vm.makeContact = makeContact;
        vm.openContactToAddPopup = openContactToAddPopup;

        $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
            $interval.cancel(vm.interval);
        });

        activate();

        function activate() {

            vm.user = $auth.user;

            console.log('vm.user+', vm.user);

            getContacts();

            vm.interval = $interval(function () {
                if (vm.sendForm.model.to) {
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

            if (!vm.sendForm.id) {
                mail.post({}, data).then(function (response) {
                    console.log('response', response);
                    if (response.success) {
                        vm.sendForm.id = response.data.id;
                    }
                });
                return;
            }

            mail.put({id: vm.sendForm.id}, data).then(function (response) {
                console.log('response', response);
                if (response.success) {
                    vm.sendForm.id = response.data.id;

                    if ($state.params.id) {
                        // $location.search('id', vm.sendForm.id);
                    }
                }
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

        function getFormattedData() {
            var data = {};

            if (vm.sendForm.model.to) {
                var to = [];

                _.forEach(vm.sendForm.model.to, function (item) {
                    to.push(item.emails[0].value);
                });

                data.to = to;
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

            if (vm.sendForm.model.sdate) {
                data.sdate = vm.sendForm.model.sdate;
            }

            return data;
        }

        function getContacts() {
            contact.get().then(function (response) {
                vm.contacts.items = response.data;
            });
        }

        function findContacts(q) {
            contact.get({q: q}).then(function (response) {
                vm.contacts.items = response.data;
            });
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
                controller: function ($scope, $uibModalInstance) {
                    $scope.cancel = cancel;
                    $scope.close = close;

                    function close(result) {
                        $uibModalInstance.close(result);
                    }

                    function cancel() {
                        $uibModalInstance.dismiss('cancel');
                    }
                },
                size: 'sm',
                windowClass: 'popup popup--contact-group-add'
            });

            modalInstance.result.then(function (response) {
                vm.sendForm.model.to = response;
                console.log('response', vm.contacts.checked);
            });
        }
    }
})();
