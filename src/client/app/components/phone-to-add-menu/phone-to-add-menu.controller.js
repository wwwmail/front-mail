(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('PhoneToAddMenuController', PhoneToAddMenuController);

    PhoneToAddMenuController.$inject = [];
    /* @ngInject */
    function PhoneToAddMenuController() {
        var vm = this;

        vm.remove = remove;
        vm.setEdit = setEdit;

        ////

        activate();

        function activate() {
            // console.log('tag', vm.tag);
            // console.log('vm.phones', vm.phones);
        }

        function remove() {
            vm.onRemove();
        }

        function setEdit(e) {
            vm.onEdit({result: e});
        }
    }
})();
