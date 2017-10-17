(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('InfoSenderMenuController', InfoSenderMenuController);

    InfoSenderMenuController.$inject = ['$uibModal', '$state', 'tag', 'mail'];
    /* @ngInject */
    function InfoSenderMenuController($uibModal, $state, tag, mail) {
        var vm = this;
        //
        // vm.tags = {};
        // vm.unTags = {
        //     items: []
        // };
        //
        // vm.openTagCreatePopup = openTagCreatePopup;
        // vm.setTag = setTag;
        // vm.setUnTag = setUnTag;
        // vm.setSeen = setSeen;
        // vm.setUnSeen = setUnSeen;
        // vm.setImportant = setImportant;
        //
        // activate();
        //
        // function activate() {
        //     get();
        // }
        //
        // function get() {
        //     tag.get().then(function (response) {
        //         vm.tags.items = response.data;
        //         getFormattedTags();
        //     });
        // }
        //
        // function getFormattedTags() {
        //     var unTags = [];
        //
        //     _.forEach(vm.messages.checked, function (messageChecked) {
        //         unTags = unTags.concat(messageChecked.tags);
        //     });
        //
        //     vm.unTags.items = _.uniqBy(unTags, 'id');
        // }
        //
        // function setTag(item) {
        //     vm.messages = tag.setTag(item, vm.messages, {
        //         saveChecked: $state.current.name === 'mail.message'
        //     });
        //
        //     getFormattedTags();
        // }
        //
        // function setUnTag(item) {
        //     vm.messages = tag.setUnTag(item, vm.messages, {
        //         saveChecked: $state.current.name === 'mail.message'
        //     });
        //
        //     getFormattedTags();
        // }
        //
        // function setSeen() {
        //     vm.messages = mail.setSeen(vm.messages, {
        //         saveChecked: $state.current.name === 'mail.message'
        //     });
        // }
        //
        // function setUnSeen() {
        //     vm.messages = mail.setUnSeen(vm.messages, {
        //         saveChecked: $state.current.name === 'mail.message'
        //     });
        // }
        //
        // function setImportant() {
        //     if (_.find(vm.messages.checked, {important: false})) {
        //         vm.messages = mail.setImportant(vm.messages, {
        //             saveChecked: $state.current.name === 'mail.message'
        //         });
        //         return;
        //     }
        //
        //     vm.messages = mail.setUnImportant(vm.messages, {
        //         saveChecked: $state.current.name === 'mail.message'
        //     });
        // }
        //
        // function openTagCreatePopup() {
        //     var modalInstance = $uibModal.open({
        //         animation: true,
        //         templateUrl: 'app/components/tag-create/tag-create-popup.html',
        //         controller: function ($scope, $uibModalInstance, messages) {
        //             $scope.cancel = cancel;
        //
        //             $scope.messages = messages;
        //
        //             function cancel() {
        //                 $uibModalInstance.dismiss('cancel');
        //             }
        //         },
        //         resolve: {
        //           messages: function () {
        //               return vm.messages;
        //           }
        //         },
        //         // controllerAs: 'vm',
        //         size: 'sm',
        //         windowClass: 'popup popup--tag-create'
        //     });
        // }

    }
})();
