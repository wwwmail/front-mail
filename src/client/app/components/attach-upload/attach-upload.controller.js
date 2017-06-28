(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('AttachUploadController', AttachUploadController);

    AttachUploadController.$inject = ['$scope', '$auth', '$state', 'CONFIG'];
    /* @ngInject */
    function AttachUploadController($scope, $auth, $state, CONFIG) {
        var vm = this;

        vm.isThumbLoaded = false;

        vm.getLink = getLink;
        vm.remove = remove;
        vm.getPreviewLink = getPreviewLink;

        $scope.$watch('vm.attachmentsConf.type', function (data) {
            // if (data && data.type === 'load') {
            //     _.forEach(vm.attachmentsData, function (item) {
            //         item.isLoaded = true;
            //     });
            // }
        });

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
                // MediaUrl
                CONFIG.AttachUrl,
                // "mail/",
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

            // return link;
        }

        function remove(attachment) {
            _.remove(vm.attachmentsData, function (item) {
                return item === attachment;
            });
        }
    }
})();
