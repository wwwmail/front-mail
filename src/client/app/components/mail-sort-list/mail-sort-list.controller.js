(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('MailSortListController', MailSortListController);

    MailSortListController.$inject = [];
    /* @ngInject */
    function MailSortListController() {
        var vm = this;

        vm.sortList = [
            {
                name: 'По дате <span class="icon-arrow-up"></span>',
                params: {'sort': 'date', 'sortReverse': 1}
            },
            {
                name: 'По дате <span class="icon-arrow-down"></span>',
                params: {'sort': 'date', 'sortReverse': 0}
            },
            {
                name: 'По размеру <span class="icon-arrow-up"></span>',
                params: {'sort': 'size', 'sortReverse': 1}
            },
            {
                name: 'По размеру <span class="icon-arrow-down"></span>',
                params: {'sort': 'size', 'sortReverse': 0}
            },
            {
                name: 'От А до Я по отправителю',
                params: {'sort': 'from', 'sortReverse': 0}
            },
            {
                name: 'От Я до А по отправителю',
                params: {'sort': 'from', 'sortReverse': 1}
            },
            {
                name: 'От А до Я по теме',
                params: {'sort': 'subject', 'sortReverse': 0}
            },
            {
                name: 'От Я до А по теме',
                params: {'sort': 'subject', 'sortReverse': 1}
            },
            {
                name: 'Непрочитанные <span class="icon-arrow-up"></span>',
                params: {'sort': 'unread', 'sortReverse': 1}
            },
            {
                name: 'Непрочитанные <span class="icon-arrow-down"></span>',
                params: {'sort': 'unread', 'sortReverse': 0}
            }
        ];

        /////

        activate();

        function activate() {
        }
    }
})();
