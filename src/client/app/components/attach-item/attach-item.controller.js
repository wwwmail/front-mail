(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('AttachItemController', AttachItemController);

    AttachItemController.$inject = ['$uibModal', '$auth', '$http', 'CONFIG', 'gallery'];
    /* @ngInject */
    function AttachItemController($uibModal, $auth, $http, CONFIG, gallery) {
        var vm = this;

        vm.assocFormats = [
            {
                id: 1,
                name: 'doc'
            },
            {
                id: 2,
                name: 'xlsx'
            },
            {
                id: 3,
                name: 'eml'
            }
        ];

        vm.formats = [
            {name: 'accdb'},
            {name: 'avi'},
            {name: 'bat'},
            {name: 'bmp'},
            {name: 'CDA'},
            {name: 'chm'},
            {name: 'css'},
            {name: 'djvu'},
            {
                name: 'doc',
                assocId: 1
            },
            {
                name: 'docx',
                assocId: 1
            },
            {
                name: 'msword',
                assocId: 1
            },
            {
                name: 'vnd.openxmlformats-officedocument.wordprocessingml.document',
                assocId: 1
            },
            {name: 'eps'},
            {name: 'exe'},
            {name: 'fb2'},
            {name: 'gif'},
            {name: 'hlp'},
            {name: 'htm'},
            {name: 'html'},
            {name: 'jpeg'},
            {name: 'jpg'},
            {name: 'mdb'},
            {name: 'mdv'},
            {name: 'mov'},
            {name: 'mp3'},
            {name: 'mpeg'},
            {name: 'mpg'},
            {name: 'odp'},
            {name: 'ods'},
            {name: 'odt'},
            {name: 'other'},
            {name: 'pdf'},
            {name: 'png'},
            {name: 'ppt'},
            {name: 'pptx'},
            {name: 'rar'},
            {name: 'rtf'},
            {name: 'svg+xml'},
            {name: 'tiff'},
            {name: 'ttf'},
            {name: 'txt'},
            {name: 'wav'},
            {name: 'wma'},
            {name: 'xls'},
            {name: 'xlsx'},
            {name: 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', assocId: 2},
            {name: 'zip'},
            {name: 'eml'},
            {name: 'rfc822', assocId: 3}
        ];

        vm.fileFormat = null;

        vm.viewAppUrl = 'https://view.officeapps.live.com/op/view.aspx?src=';


        vm.openGallery = openGallery;
        vm.openAttach = openAttach;
        

        activate();

        ////

        function activate() {
            vm.user = $auth.user;
            vm.CONFIG = CONFIG;

            findFormat();
        }

        function openGallery() {
            gallery.openGallery({
                attachIndex: vm.index,
                attach: vm.attach,
                attachments: vm.attachments,
                message: vm.message
            });
        }

        function findFormat() {
            var result = _.find(vm.formats, function (item) {
                return item.name === vm.attach.mime.split('/')[1];
            });

            if (result) {
                if (result.assocId) {
                    vm.fileFormat = _.result(_.find(vm.assocFormats, {id: result.assocId}), 'name');
                    console.log('vm.fileFormat', vm.fileFormat);
                    return;
                }
                vm.fileFormat = result.name;
                return;
            }

            return vm.fileFormat = 'other';
        }

        function openAttach() {
            vm.url = vm.CONFIG.AttachUrl + vm.message.number + '?mbox=' + vm.message.mbox + '&part=attach&filename=' + vm.attach.fileName + '&token=' + vm.user.access_token + '&connection_id=' + vm.message.connection_id;

            if (vm.attach.mime === 'application/pdf') {
                window.open(vm.url + '&screen=true', '_blank');
                return;
            }

            if (vm.attach.mime === 'message/rfc822') {
                openEmlPopup();
                return;
            }

            if (vm.attach.mime !== 'image/png' && vm.attach.mime !== 'image/jpeg') {
                window.open(vm.viewAppUrl + encodeURIComponent(vm.url), '_blank');
                return;
            }

            if (vm.attach.mime === 'image/png' || vm.attach.mime === 'image/jpeg') {
                vm.openGallery();
                return;
            }
        }

        function openEmlPopup() {
            var modalInstance = $uibModal.open({
                animation: false,
                template: '<eml-popup on-cancel="cancel()" on-close="close()" message="message"></eml-popup>',
                controller: function ($uibModalInstance, $scope, message) {

                    $scope.close = close;
                    $scope.cancel = cancel;

                    activate();

                    ////

                    function activate() {
                        $scope.message = message.data.data;
                    }

                    function cancel() {
                        $uibModalInstance.dismiss('cancel');
                    }

                    function close() {
                        $uibModalInstance.close();
                    }

                    console.log('message', $scope.message);
                },
                resolve: {
                    message: function () {
                        return $http.get(vm.url + '&emlPreview=1');
                    }
                },
                size: 'lg',
                keyboard: false,
                windowClass: 'popup popup--eml'
            });
        }
    }
})();
