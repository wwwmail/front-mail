(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('TemplateListController', TemplateListController);

    TemplateListController.$inject = ['$scope', '$auth', '$state', '$uibModal', 'mailBox', 'mail'];
    /* @ngInject */
    function TemplateListController($scope, $auth, $state, $uibModal, mailBox, mail) {
        var vm = this;

        vm.messages = {
            params: {
                'per-page': 20,
                'len': 100
            },
            defaultParams: {
                'per-page': 20,
                'len': 100
            }
        };

        /////

        activate();

        function activate() {
            vm.$state = $state;

            vm.messages.params.mbox = 'Templates';

            get();
        }

        function get() {
            mail.get(vm.messages.params).then(function (response) {
                vm.messages = _.assign(vm.messages, response.data);
                console.log('vm.messages', vm.messages);
            });
        }
    }
})();
