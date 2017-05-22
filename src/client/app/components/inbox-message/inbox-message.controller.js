(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('InboxMessageController', InboxMessageController);

    InboxMessageController.$inject = ['$state', '$scope', 'mail', 'tag', '$rootScope'];
    /* @ngInject */
    function InboxMessageController($state, $scope, mail, tag, $rootScope) {
        var vm = this;

        vm.getDate = getDate;
        vm.goToUrl = goToUrl;
        vm.setSeen = setSeen;
        vm.setImportant = setImportant;

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

        function goToUrl(index) {
            alert(index);
            if ($state.params.mbox === 'Drafts') {
                $state.go('mail.compose', {
                    id: vm.message.number,
                    mbox: vm.message.mbox,
                    connection_id: vm.message.connection_id
                });
                return;
            }

            if ($state.params.mbox === 'Templates') {
                $state.go('mail.compose', {
                    id: vm.message.number,
                    mbox: vm.message.mbox,
                    connection_id: vm.message.connection_id,
                    template: true
                });
                return;
            }

            var params = {
                id: vm.message.number,
                mbox: vm.message.mbox,
                connection_id: vm.message.connection_id
            };

            getNextId(index);

            $state.go('mail.message', params);
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
        
        function getTags() {
            tag.getTagsByMessage({}, {
                mbox: vm.message.mbox,
                id: vm.message.number
            }).then(function (response) {
                vm.message.tags = response.data;
            })
        }

        function getNextId(index) {
            alert(index);
            console.log('messages prev', vm.messages.items[index - 1]);
            console.log('current', vm.messages.items[index]);
            console.log('messages next', vm.messages.items[index + 1]);
        }
    }
})();
