(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('InboxMessageController', InboxMessageController);

    InboxMessageController.$inject = ['$state', '$scope', 'mail', 'tag', '$rootScope', '$uibModal'];
    /* @ngInject */
    function InboxMessageController($state, $scope, mail, tag, $rootScope, $uibModal) {
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
            },
            {
                name: 'Templates',
                icon: 'icon-draft'
            }
        ];

        vm.getDate = getDate;
        vm.openMessage = openMessage;
        vm.setSeen = setSeen;
        vm.setImportant = setImportant;
        vm.getIconByFolderName = getIconByFolderName;
        vm.onDrop = onDrop;
        vm.isChecked = isChecked;

        $scope.$watch('vm.messages.checked', function (data, oldData) {
            vm.isChecked = false;
            _.forEach(vm.messages.checked, function (checked) {
                if (vm.message.number === checked.number && vm.message.connection_id === checked.connection_id) {
                    vm.isChecked = true;
                }
            });
        }, true);

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

        function openMessage() {
            if ($state.params.mbox === 'Drafts') {
                var params = {
                    id: vm.message.number,
                    mbox: vm.message.mbox,
                    connection_id: vm.message.connection_id
                };

                $uibModal.open({
                    animation: true,
                    templateUrl: 'app/components/compose-popup/compose-popup.html',
                    controller: 'ComposePopupController',
                    controllerAs: 'vm',
                    resolve: {
                        params: function () {
                            return params;
                        }
                    },
                    size: 'lg',
                    windowClass: 'popup popup--compose'
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
                    animation: true,
                    templateUrl: 'app/components/compose-popup/compose-popup.html',
                    controller: 'ComposePopupController',
                    controllerAs: 'vm',
                    resolve: {
                        params: function () {
                            return params;
                        }
                    },
                    size: 'lg',
                    windowClass: 'popup popup--compose'
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

        // function getTags() {
        //     tag.getTagsByMessage({}, {
        //         mbox: vm.message.mbox,
        //         id: vm.message.number
        //     }).then(function (response) {
        //         vm.message.tags = response.data;
        //     })
        // }

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
            // message.isChecked = false;
            _.forEach(vm.messages.checked, function (checked) {
                if (message.number === checked.number) {
                    message.isChecked = true;
                }
            });
        }
    }
})();
