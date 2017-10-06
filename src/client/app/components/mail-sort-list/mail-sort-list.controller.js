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
                name: 'По дате',
                value: 'date',
                isReverse: 0
            },
            {
                name: 'По размеру',
                value: 'size',
                isReverse: 0
            },
            {
                name: 'От А до Я по отправителю',
                value: 'from',
                isReverse: 0
            },
            {
                name: 'От А до Я по теме',
                value: 'subject',
                isReverse: 0
            },
            {
                name: 'Непрочитанные',
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
