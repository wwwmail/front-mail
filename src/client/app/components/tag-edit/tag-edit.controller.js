(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('TagEditController', TagEditController);

    TagEditController.$inject = ['$timeout', 'tag'];
    /* @ngInject */
    function TagEditController($timeout, tag) {
        var vm = this;

        vm.paletteForm = {
            model: {
                color: '#fff'
            }
        };

        vm.palette = {
            items: [
                {
                    active: true,
                    color: '#f44336'
                },
                {
                    active: false,
                    color: '#e91e63'
                },
                {
                    active: false,
                    color: '#ffc107'
                },
                {
                    active: false,
                    color: '#ffeb3b'
                },
                {
                    active: false,
                    color: '#4caf50'
                },
                {
                    active: false,
                    color: '#2196f3'
                },
                {
                    active: false,
                    color: '#3f51b5'
                },
                {
                    active: false,
                    color: '#9c27b0'
                },
                {
                    active: false,
                    color: '#607d8e'
                },
                {
                    active: false,
                    color: '#9e9e9e'
                }
            ]
        };

        vm.update = update;
        vm.select = select;
        vm.close = close;

        ////
        function activate() {

            console.log('vm.model', vm.model);

            return;
            vm.form.model.mbox = angular.copy(vm.model).name;
            vm.form.model.mboxnew = angular.copy(vm.model).name;

            // vm.form.model
            console.log('vm.form.model', vm.form.model);
        }

        function select(palette) {
            $timeout(function () {
                vm.palette.selected = palette;
                vm.paletteForm.model.bgcolor = palette.color;
            });
        }

        function update(form) {
            console.log('vm.paletteForm.model.bg_color', vm.paletteForm.model, form);

            if (form.$invalid) return;

            tag.update({}, vm.paletteForm.model).then(function (response) {
                vm.onClose();
            });
        }

        function close() {
            vm.onClose();
        }
    }
})();
