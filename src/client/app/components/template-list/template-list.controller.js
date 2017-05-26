(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('TemplateListController', TemplateListController);

    TemplateListController.$inject = ['$state', 'mail'];
    /* @ngInject */
    function TemplateListController($state, mail) {
        var vm = this;

        vm.messages = {
            isLoading: true,
            params: {
                'per-page': 20,
                'len': 100
            }
        };

        vm.save = save;

        /////

        activate();

        function activate() {
            vm.$state = $state;
            // vm.messages.params.mbox = 'Templates';
            vm.messages = vm.templates;
            // get();
            console.log('templates', vm.templates);
        }

        function get() {
            mail.get(vm.messages.params).then(function (response) {
                vm.messages.isLoading = false;
                vm.messages = _.assign(vm.messages, response.data);
            });
        }

        function save() {
            vm.onSave({
                result: {
                    template: true
                }
            })
        }
    }
})();
