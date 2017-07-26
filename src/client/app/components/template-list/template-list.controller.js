(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('TemplateListController', TemplateListController);

    TemplateListController.$inject = ['$state', '$uibModal'];
    /* @ngInject */
    function TemplateListController($state, $uibModal) {
        var vm = this;

        vm.messages = {
            isLoading: true,
            params: {
                'per-page': 20,
                'len': 100
            }
        };

        vm.save = save;
        vm.openTemplateComposePopup = openTemplateComposePopup;

        /////

        activate();

        function activate() {
            vm.$state = $state;
            vm.messages = vm.templates;
        }

        function save() {
            vm.onSave({
                result: {
                    template: true,
                    isClose: true
                }
            })
        }

        function openTemplateComposePopup(message) {
            var params = {
                template: true,
                id: message.number,
                mbox: message.mbox,
                connection_id: message.connection_id
            };

            $uibModal.open({
                animation: false,
                templateUrl: 'app/components/compose-popup/compose-popup.html',
                controller: 'ComposePopupController',
                controllerAs: 'vm',
                resolve: {
                    params: function () {
                        return params;
                    }
                },
                size: 'lg',
                windowClass: 'popup popup--compose popup--compose-minimize hide-elm'
            });
        }
    }
})();
