(function () {
    'use strict';

    angular
        .module('mail.message')
        .controller('MessageController', MessageController);

    MessageController.$inject = ['mail', '$state', '$sce', 'message', 'tag'];
    /* @ngInject */
    function MessageController(mail, $state, $sce, message, tag) {
        var vm = this;

        vm.message = {};

        vm.messages = {
            checked: []
        };

        vm.isSendTextOpen = false;
        vm.isFromOpen = false;

        vm.getDate = getDate;
        vm.getTrustHtml = getTrustHtml;
        vm.setUnTag = setUnTag;

        activate();

        function activate() {
            vm.$state = $state;
            // getMessage();

            message.$promise
                .then(function (response) {
                    vm.message.model = response.data;
                    vm.messages.checked.push(vm.message.model);

                    getTags();
                });
        }

        function getMessage() {
            mail.getById({id: $state.params.id, mbox: $state.params.mbox, part: 'headnhtml'}).then(function (response) {
                vm.message.model = response.data;
                vm.messages.checked.push(vm.message.model);
                // console.log('message', vm.message.model);
                // console.log('messages', vm.messages);
            });
        }

        function getTags() {
            tag.getTagsByMessage({}, {
                mbox: vm.message.model.mbox,
                id: vm.message.model.number
            }).then(function (response) {
                vm.message.model.tags = response.data;
            })
        }

        function setUnTag(item) {
            var ids = [];

            _.remove(vm.message.model.tags, function (tag) {
                return tag.id === item.id;
            });

            ids.push(vm.message.model.number);

            tag.deleteTagFromMessages({}, {
                ids: ids,
                mbox: vm.message.model.mbox,
                tag_id: item.id
            }).then(function (response) {
                // vm.messages.checked = [];
            });
        }

        function getDate(date) {
            var newDate = new Date(date);
            return moment(newDate).format("MMM Do YY");
        }
        
        function getTrustHtml(html) {
            return $sce.trustAsHtml(html);
        }
    }
})();
