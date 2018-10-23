(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('AttachUploadController', AttachUploadController);

    AttachUploadController.$inject = ['$scope', '$auth', '$state', 'CONFIG', 'gallery'];
    /* @ngInject */
    function AttachUploadController($scope, $auth, $state, CONFIG, gallery) {
        var vm = this;

        vm.isThumbLoaded = false;


        vm.getLink = getLink;
        vm.remove = remove;
        vm.getPreviewLink = getPreviewLink;
        vm.upload = upload;
        vm.openGallery = openGallery;


        activate();

        ////

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
                CONFIG.AttachUrl,
                vm.message.model.number,
                "?mbox=",
                vm.message.model.mbox || 'Drafts',
                "&part=attach&filename=",
                attachment.fileName,
                "&token=",
                vm.user.access_token,
                "&connection_id=",
                vm.message.model.connection_id
            ].join("");

            return link;
        }

        function remove(attachment) {
            _.remove(vm.attachmentsData, function (item) {
                return item === attachment;
            });
        }

        function upload($files, $invalidFiles) {
            vm.onClickUpload({
                $files: $files,
                $invalidFiles: $invalidFiles
            });
        }

        function openGallery(i) {
            gallery.openGallery({
                attachIndex: i,
                attachments: vm.attachmentsData,
                message: vm.message.model
            });
        }
    }
})();
