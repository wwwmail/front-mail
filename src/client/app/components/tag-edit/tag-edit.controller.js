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
                    bgcolor: '#f44336'
                },
                {
                    active: false,
                    bgcolor: '#e91e63'
                },
                {
                    active: false,
                    bgcolor: '#ffc107'
                },
                {
                    active: false,
                    bgcolor: '#ffeb3b'
                },
                {
                    active: false,
                    bgcolor: '#4caf50'
                },
                {
                    active: false,
                    bgcolor: '#2196f3'
                },
                {
                    active: false,
                    bgcolor: '#3f51b5'
                },
                {
                    active: false,
                    bgcolor: '#9c27b0'
                },
                {
                    active: false,
                    bgcolor: '#607d8e'
                },
                {
                    active: false,
                    bgcolor: '#9e9e9e'
                }
            ]
        };

        vm.update = update;
        vm.select = select;
        vm.close = close;

        ////

        activate();

        function activate() {
            vm.palette.selected = angular.copy(vm.model);
            vm.paletteForm.model = angular.copy(vm.model);
            // select(vm.paletteForm.model);
            console.log('vm.palette.selected', vm.palette.selected);
        }

        function select(palette) {
            $timeout(function () {
                vm.palette.selected = palette;
                vm.paletteForm.model.bgcolor = palette.bgcolor;
            });
        }

        function update(form) {
            console.log('vm.paletteForm', vm.paletteForm.model, form);

            if (form.$invalid) return;

            tag.update({}, vm.paletteForm.model).then(function (response) {
                close();
            });
        }

        function close() {
            vm.onClose();
        }
    }
})();
