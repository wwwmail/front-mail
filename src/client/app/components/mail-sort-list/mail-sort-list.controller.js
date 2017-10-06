(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('MailSortListController', MailSortListController);

    MailSortListController.$inject = ['$stateParams', '$state'];
    /* @ngInject */
    function MailSortListController($stateParams, $state) {
        var vm = this;

        vm.sortList = [
            {
                name: 'BY_DATE',
                value: 'date',
                isReverse: 0
            },
            {
                name: 'BY_SIZE',
                value: 'size',
                isReverse: 0
            },
            {
                name: 'BY_SENDER',
                value: 'from',
                isReverse: 0
            },
            {
                name: 'BY_TITLE',
                value: 'subject',
                isReverse: 0
            },
            {
                name: 'BY_UNREAD',
                value: 'unread',
                isReverse: 0
            }
        ];

        vm.onClickSort = onClickSort;

        /////

        activate();

        function activate() {
            vm.$stateParams = $stateParams;
            console.log($stateParams);
        }

        function onClickSort(sort) {

            console.log('$stateParams', $stateParams.sortReverse);

            if ($stateParams.sortReverse == 1) {
                sort.isReverse = 0;
            } else {
                sort.isReverse = 1;
            }

            console.log('isReverse', sort.isReverse);

            $state.go('mail.inbox', {sort: sort.value, sortReverse: sort.isReverse});
        }
    }
})();
