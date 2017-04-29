(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('TagListController', TagListController);

    TagListController.$inject = ['$uibModal', 'tag', 'mail'];
    /* @ngInject */
    function TagListController($uibModal, tag, mail) {
        var vm = this;

        vm.tags = {};
        vm.unTags = {
            items: []
        };

        vm.openTagCreatePopup = openTagCreatePopup;
        vm.setTag = setTag;
        vm.setUnTag = setUnTag;
        vm.setSeen = setSeen;
        vm.setUnSeen = setUnSeen;
        vm.setImportant = setImportant;

        activate();

        function activate() {
            get();
        }

        function get() {
            tag.get().then(function (response) {
                vm.tags.items = response.data;
                getFormattedTags()
            });
        }
        
        function getFormattedTags() {
            var unTags = [];

            _.forEach(vm.messages.checked, function (messageChecked) {
                unTags = unTags.concat(messageChecked.tags);
            });

            vm.unTags.items = _.uniqBy(unTags, 'id');
        }

        function setTag(item) {
            var ids = [];

            console.log('checked tag', vm.messages.checked);

            _.forEach(vm.messages.checked, function (messageChecked) {
                ids.push(messageChecked.number);

                var isset = false;

                if (messageChecked.tags.length) {
                    _.forEach(messageChecked.tags, function (tag) {
                        console.log('tag', tag);
                        if (item.id === tag.id) {
                            isset = true;
                        }
                    });
                }

                if (!isset) {
                    _.forEach(vm.messages.items, function (message) {
                        if (messageChecked.number === message.number) {
                            message.tags.push(item);
                        }
                    });
                }

            });

            tag.addTagToMessages({}, {
                ids: ids,
                mbox: vm.messages.checked[0].mbox,
                tag_id: item.id
            }).then(function (response) {
                vm.messages.checked = [];
            });
        }

        function setUnTag(item) {
            var ids = [];

            console.log('checked tag', vm.messages.checked);

            _.forEach(vm.messages.checked, function (messageChecked) {
                ids.push(messageChecked.number);

                _.forEach(vm.messages.items, function (message) {
                    if (messageChecked.number === message.number) {
                        _.remove(message.tags, function (o) {
                            return o.id === item.id;
                        });
                    }
                });
            });

            tag.deleteTagFromMessages({}, {
                ids: ids,
                mbox: vm.messages.checked[0].mbox,
                tag_id: item.id
            }).then(function (response) {
                vm.messages.checked = [];
            });
        }

        function setSeen() {
            vm.messages = mail.setSeen(vm.messages);
        }

        function setUnSeen() {
            vm.messages = mail.setUnSeen(vm.messages);
        }

        function setImportant() {
            vm.messages = mail.setImportant(vm.messages);
        }

        function openTagCreatePopup() {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'app/components/tag-create/tag-create-popup.html',
                controller: function ($scope, $uibModalInstance) {
                    $scope.cancel = cancel;

                    function cancel() {
                        $uibModalInstance.dismiss('cancel');
                    }
                },
                // controllerAs: 'vm',
                size: 'sm',
                windowClass: 'popup popup--tag-create'
            });
        }

    }
})();
