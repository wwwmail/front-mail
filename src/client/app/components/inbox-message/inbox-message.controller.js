(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('InboxMessageController', InboxMessageController);

    InboxMessageController.$inject = ['$state', 'mail', '$scope'];
    /* @ngInject */
    function InboxMessageController($state, mail, $scope) {
        var vm = this;

        vm.getDate = getDate;
        vm.goToUrl = goToUrl;
        vm.setSeen = setSeen;
        vm.setImportant = setImportant;

        activate();

        function activate() {
            vm.$state = $state;
            console.log('activate', vm.message);
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

        function goToUrl() {
            console.log('state', $state.params.mbox);
            if ($state.params.mbox === 'Drafts') {
                $state.go('mail.compose', {
                    id: vm.message.number,
                    mbox: vm.message.mbox
                });
                return;
            }
            $state.go('mail.message', {
                id: vm.message.number,
                mbox: vm.message.mbox
            });
        }

        function setSeen() {
            if (vm.message.seen) {
                mail.deflag({}, {
                    ids: [vm.message.number],
                    flag: 'Seen'
                }).then(function () {
                    $scope.$emit('mail:sync');
                });
                return;
            }

            mail.flag({}, {
                ids: [vm.message.number],
                flag: 'Seen'
            }).then(function () {
                $scope.$emit('mail:sync');
            });
        }

        function setImportant() {
            if (vm.message.important) {
                mail.deflag({}, {
                    ids: [vm.message.number],
                    flag: 'Flagged'
                }).then(function () {
                    $scope.$emit('mail:sync');
                });
                return;
            }

            mail.flag({}, {
                ids: [vm.message.number],
                flag: 'Flagged'
            }).then(function () {
                $scope.$emit('mail:sync');
            });
        }
    }
})();
