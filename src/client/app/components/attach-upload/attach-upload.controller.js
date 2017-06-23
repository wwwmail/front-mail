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

        $scope.$watch('vm.attachmentsData', function (data) {
            if (vm.message.model) {
                _.forEach(data, function (attachment) {
                    attachment.fullLink = getLink(attachment, vm.message.model);
                });
            }
        });

        activate();

        function activate() {
            vm.user = $auth.user;
            vm.$state = $state;
        }

        function getLink(attachment, message) {
            console.log('message', message);
            console.log('attachment error', attachment);
            if (attachment.$error) {
                return window.URL.createObjectURL(attachment);
            }

            var link = [
                "http://apimail.devogic.com/mail/",
                message.number,
                "?mbox=",
                message.mbox || 'Drafts',
                "&part=attach&filename=",
                attachment.fileName,
                "&token=",
                vm.user.access_token,
                "&connection_id=",
                message.connection_id
            ].join("");

            return link;
        }

        function remove(attachment) {
            _.remove(vm.attachmentsData, function (item) {
                return item === attachment;
            });
        }
    }
})();
