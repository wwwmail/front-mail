(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('InboxMessageController', InboxMessageController);

    InboxMessageController.$inject = ['$state'];
    /* @ngInject */
    function InboxMessageController($state) {
        var vm = this;

        vm.getDate = getDate;
        vm.goToUrl = goToUrl;

        activate();

        function activate() {
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
            if ($state.params.mbox === 'INBOX.Drafts') {
                $state.go('mail.compose',{
                    id: vm.message.number,
                    mbox: vm.message.mbox
                });
                return;
            }
            $state.go('mail.message',{
                id: vm.message.number,
                mbox: vm.message.mbox
            });
        }
    }
})();
