(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('InboxMessageController', InboxMessageController);

    InboxMessageController.$inject = ['$state', '$scope', '$stateParams', '$rootScope', '$uibModal', 'mail', 'tag'];

    /* @ngInject */
    function InboxMessageController($state, $scope, $stateParams, $rootScope, $uibModal, mail, tag) {
        var vm = this;

        vm.standartFolders = [
            {
                name: 'INBOX',
                icon: 'icon-inbox-old'
            },
            {
                name: 'Drafts',
                icon: 'icon-draft-line'
            },
            {
                name: 'Trash',
                icon: 'icon-basket'
            },
            {
                name: 'Sent',
                icon: 'icon-sent-old'
            },
            {
                name: 'Junk',
                icon: 'icon-spam'
            },
            {
                name: 'Templates',
                icon: 'icon-draft-line'
            }
        ];

        $scope.$watch('vm.messages.checked', function (data, oldData) {
            vm.isChecked = false;
            _.forEach(vm.messages.checked, function (checked) {
                if (vm.message.number === checked.number && vm.message.connection_id === checked.connection_id) {
                    vm.isChecked = true;
                }
            });
        }, true);


        vm.getDate = getDate;
        vm.openMessage = openMessage;
        vm.setSeen = setSeen;
        vm.setImportant = setImportant;
        vm.getIconByFolderName = getIconByFolderName;
        vm.onDrop = onDrop;
        vm.isChecked = isChecked;


        activate();

        ////

        function activate() {
            vm.$state = $state;
            vm.$stateParams = $stateParams;
            vm.massegeStyle = $rootScope.listViewStyle;

            vm.toArray = vm.message.to.concat(vm.message.cc);
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
            vm.message.seen = true;

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
                    keyboard: false,
                    windowClass: 'popup popup--compose popup--compose-minimize hide'
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
                    keyboard: false,
                    windowClass: 'popup popup--compose popup--compose-minimize hide'
                });
                return;
            }

            if ($rootScope.listViewStyle) {
                var params = {
                    id: vm.message.number,
                    connection_id: vm.message.connection_id,
                    mbox: vm.message.mbox
                };

                return $state.go('mail.inbox', params, {
                    notify: false
                });
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
            _.forEach(vm.messages.checked, function (checked) {
                if (message.number === checked.number) {
                    message.isChecked = true;
                }
            });
        }
    }
})();
