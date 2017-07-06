(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('PhotoswipeController', PhotoswipeController);

    PhotoswipeController.$inject = ['$scope', '$auth', '$timeout', 'CONFIG'];
    /* @ngInject */
    function PhotoswipeController($scope, $auth, $timeout, CONFIG) {
        var vm = this;

        vm.CONFIG = CONFIG;
        vm.user = $auth.user;
        vm.slidesFormatted = [];

        vm.opts = {
            index: 0,
            history: false,
            showHideOpacity: true,
            closeEl: true,
            captionEl: true,
            fullscreenEl: true,
            zoomEl: true,
            shareEl: false,
            counterEl: true,
            arrowEl: true,
            preloaderEl: true,
            getThumbBoundsFn: false
        };

        $scope.$watch('vm.index', function (data, oldData) {
            if (data) {
                showGallery(data);
            }
        });

        $scope.$watch('vm.slides', function (data, oldData) {
            if (data) {
                console.log('slides', data);
                formatted(data);
            }
        });

        $scope.$on('gallery:open', function (e, data) {
            console.log('gallery:open', data);
            vm.message = data.message;
            vm.attachments = data.attachments;

            formatted(vm.attachments);

            $timeout(function () {
                showGallery(data.attachIndex);
            }, 750);
        });

        vm.closeGallery = closeGallery;

        ////

        activate();

        function activate() {
        }

        function showGallery(i) {
            if (angular.isDefined(i)) {
                vm.opts.index = i;
            }
            vm.open = true;
        }

        function closeGallery() {
            vm.open = false;
            vm.index = undefined;
        }

        function formatted(attaches) {
            vm.slidesFormatted = [];
            _.forEach(attaches, function (attach) {
                vm.slidesFormatted.push(getFormattedItem(attach));
            });
        }

        function getFormattedItem(attach) {
            var item = {};
            var src = [
                vm.CONFIG.AttachUrl,
                vm.message.number,
                '?mbox=',
                vm.message.mbox || 'Drafts',
                '&part=attach&screen=true&filename=',
                attach.fileName,
                '&token=',
                vm.user.access_token,
                '&connection_id=',
                vm.message.connection_id || vm.user.profile.default_connection_id
            ].join('');

            item.src = src;

            var img = new Image();
            img.src = src;

            img.onload = function () {
                item.w = img.naturalWidth;
                item.h = img.naturalHeight;
            };

            item.title = attach.fileName;

            return item;
        }

    }
})();
