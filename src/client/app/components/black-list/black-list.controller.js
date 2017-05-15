(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('BlackListController', BlackListController);

    BlackListController.$inject = ['$auth'];
    /* @ngInject */
    function BlackListController($auth) {
        var vm = this;

        vm.form = {
            model: {}
        };

        vm.list = {
            checked: [],
            items: ['test@gmail.com']
        };

        vm.add = add;
        vm.remove = remove;

        ////

        activate();

        function activate() {
            vm.user = $auth.user;
        }

        function add(form) {
            if (form.$invalid) return;
            vm.list.items.push(vm.form.model.email);
            vm.form.model.email = '';
        }
        
        function remove() {
            _.forEach(vm.list.checked, function(checked) {
                _.remove(vm.list.items, function(item) {
                    return checked === item;
                });
            });
        }
    }
})();
