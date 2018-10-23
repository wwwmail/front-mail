(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('SearchMailController', SearchMailController);

    SearchMailController.$inject = ['$timeout', '$scope', '$rootScope', '$stateParams', '$state', 'tag', 'mailBox'];

    /* @ngInject */
    function SearchMailController($timeout, $scope, $rootScope, $stateParams, $state, tag, mailBox) {
        var vm = this;

        vm.isOpenDate = false;

        vm.date = {};

        vm.tags = {
            selected: {
                tag_name: 'ALL_TAGS',
                id: undefined
            },
            items: [{
                tag_name: 'ALL_TAGS',
                id: undefined
            }]
        };

        vm.standartFolders = [
            {
                caption: 'ALL_FOLDERS',
                name: 'ALL',
                icon: 'icon-inbox-old'
            },
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
            }
        ];

        vm.folders = {
            selected: {
                caption: 'ALL_FOLDERS',
                name: 'ALL',
                icon: 'icon-inbox-old'
            }
        };

        vm.searchParts = {
            selected: {
                'name': 'SEARCH_ENTIRE_LETTER',
                'value': 'all'
            },
            list: [
                {
                    'name': 'SEARCH_ENTIRE_LETTER',
                    'value': 'all'
                },
                {
                    'name': 'IN_THE_SENDER_FIELD',
                    'value': 'from'
                },
                {
                    'name': 'IN_THE_FIELD_RECIPIENT',
                    'value': 'to'
                },
                {
                    'name': 'IN_THE_BODY_OF_THE_LETTER',
                    'value': 'body'
                },
                {
                    'name': 'IN_THE_TEXT_OF_THE_LETTER',
                    'value': 'text'
                }
            ]
        };

        vm.searchForm = {
            model: {}
        };


        vm.search = search;
        vm.onSearchChange = onSearchChange;


        $scope.$watch('vm.isOpenDate', function (date, oldData) {
            if (!date) {
                setDefaultDate();
            }
        });

        /*$rootScope.$on('$stateChangeSuccess',
            function (event, toState, toParams, fromState, fromParams) {
                if (toParams.search && !toParams.mbox) {
                    vm.searchForm.model.search = toParams.search;
                    $timeout(function () {
                        search();
                    }, 250);
                }
            });*/

        activate();

        ////

        function activate() {
            getTags();

            getMailBox();

            var data = {};

            if ($state.params.search && !$state.params.mbox) {
                data.search = $state.params.search;
                vm.searchForm.model.search = data.search;
            }

            if ($state.params.search_part) {
                data.search_part = $state.params.search_part;
            }

            if ($state.params.search) {
                data.search = $state.params.search;
            }

            if ($state.params.search_tag_id) {
                data.search_tag_id = $state.params.search_tag_id;
            }

            if ($state.params.search_start) {
                data.search_start = $state.params.search_start;
            }

            if ($state.params.search_end) {
                data.search_end = $state.params.search_end;
            }

            if ($state.params.smbox) {
                data.smbox = $state.params.smbox;
            }

            /*if (data.search && data.search.length) {
                $rootScope.$broadcast('search:mail', {
                    search: data
                });
            }*/
        }

        function setDefaultDate() {
            vm.date.from = moment().startOf('month').toDate();
            vm.date.to = moment().endOf('month').toDate();
        }

        function search() {
            if ($state.current.name !== 'mail.inbox') {
                $state.go('mail.inbox', {mbox: 'INBOX'}).then(function () {
                    request();
                });
                return;
            }
            request();
        }

        function request() {
            var data = {};

            if (vm.folders.selected.name === 'ALL') {
                data.search_part = 'text';
            }

            if (vm.searchParts.selected.value && vm.searchParts.selected.value !== 'all') {
                data.search_part = vm.searchParts.selected.value;
            }

            if (vm.tags.selected.id) {
                data.search_tag_id = vm.tags.selected.id;
            }

            if (vm.searchForm.isAttach) {
                data.filter = 'attach';
            }

            if (vm.searchForm.model.search) {
                data.search = vm.searchForm.model.search;
            }

            if (vm.folders.selected.name && vm.folders.selected.name !== 'ALL') {
                data.smbox = vm.folders.selected.name;
            }

            if (vm.date.start && vm.date.end) {
                data.search_start = moment(vm.date.from).unix();
                data.search_end = moment(vm.date.to).unix();
            }

            data.mbox = undefined;

            $state.go('.', data, {notify: false});

            if (data.search && data.search.length) {
                $rootScope.$broadcast('search:mail', {
                    search: data
                });
                return;
            }

            $rootScope.$broadcast('search:close', {});
        }

        function getTags() {
            tag.get().then(function (response) {
                vm.tags.items = vm.tags.items.concat(response.data);
            });
        }

        function getMailBox() {
            mailBox.get().then(function (response) {
                vm.folders = _.assign(vm.folders, response.data);
                getMailBoxFormatted();
            });
        }

        function getMailBoxFormatted() {
            _.forEach(vm.folders.items, function (folder) {
                var isSub = true;

                _.forEach(vm.standartFolders, function (standartFolder) {
                    if (folder.name == standartFolder.name) {
                        isSub = false;
                    }
                });

                if (isSub) {
                    folder.isSub = true;
                } else {
                    folder.isSub = false;
                }
            });

            vm.folders.items.push(vm.standartFolders[0]);

            sortFolder();
        }

        function sortFolder() {
            vm.folders.items = _.sortBy(vm.folders.items, [
                {'name': 'ALL'},
                {'name': 'INBOX'},
                {'isSub': true},
                {'name': 'Sent'},
                {'name': 'Trash'},
                {'name': 'Junk'},
                {'name': 'Drafts'}
            ]).reverse();
        }

        function onSearchChange() {
            console.log('vm.searchForm.model.search', vm.searchForm.model.search);
            if (!vm.searchForm.model.search) {
                $rootScope.$broadcast('search:close', {});
            }
        }
    }
})();
