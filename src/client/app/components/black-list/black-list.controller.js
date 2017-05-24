(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('BlackListController', BlackListController);

    BlackListController.$inject = ['$auth', 'wb'];
    /* @ngInject */
    function BlackListController($auth, wb) {
        var vm = this;

        vm.form = {
            model: {}
        };

        vm.list = {
            checked: [],
            items: []
        };

        vm.add = add;
        vm.remove = remove;

        ////

        activate();

        function activate() {
            vm.user = $auth.user;

            get();
        }

        function add(form) {
            if (form.$invalid) return;

            wb.post({}, {
                email: vm.form.model.email,
                list: 'B'
            });

            vm.list.items.push({
                email: vm.form.model.email,
                wb: 'B'
            });

            vm.form.model.email = '';
        }

        function get() {
            wb.get().then(function (response) {
                vm.list.items = response.data;
            });
        }

        function remove() {
            _.forEach(vm.list.checked, function(checked) {

                wb.destroy({}, {
                    email: checked.email,
                    list: 'B'
                });

                _.remove(vm.list.items, function(item) {
                    return checked === item;
                });
            });
        }
    }
})();
