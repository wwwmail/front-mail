(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('AttachUploadController', AttachUploadController);

    AttachUploadController.$inject = ['$auth', '$state', '$scope'];
    /* @ngInject */
    function AttachUploadController($auth, $state, $scope) {
        var vm = this;

        vm.isThumbLoaded = false;

        vm.getLink = getLink;
        vm.remove = remove;
        vm.getPreviewLink = getPreviewLink;

        // $scope.$watch('vm.attachmentsData', function (data) {
        //     _.forEach(data, function (attachment) {
        //         attachment.fullLink = getLink(attachment, vm.message.model);
        //     });
        // });

        activate();

        function activate() {
            vm.user = $auth.user;
            vm.$state = $state;
        }
        
        function getPreviewLink(attachment) {
            var at = angular.copy(attachment);
            if (attachment.isPreview) return;
            attachment.isPreview = true;
            return window.URL.createObjectURL(at);
        }

        function getLink(attachment) {
            var link = [
                "http://apimail.devogic.com/mail/",
                vm.message.model.number,
                "?mbox=",
                vm.message.model.mbox || 'Drafts',
                // vm.$state.params.mbox ? vm.$state.params.mbox : 'Drafts',
                "&part=attach&filename=",
                attachment.fileName,
                "&token=",
                vm.user.access_token,
                "&connection_id=",
                vm.message.model.connection_id
            ].join("");

            return link;

            return link;
        }

        function remove(attachment) {
            _.remove(vm.attachmentsData, function (item) {
                return item === attachment;
            });
        }
    }
})();
