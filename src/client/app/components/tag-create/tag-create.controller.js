(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('TagCreateController', TagCreateController);

    TagCreateController.$inject = ['$rootScope', '$timeout', 'tag', 'list'];
    /* @ngInject */
    function TagCreateController($rootScope, $timeout, tag, list) {
        var vm = this;

        vm.paletteForm = {
            model: {
                color: '#fff'
            }
        };

        vm.palette = {
            items: []
        };

        vm.create = create;
        vm.select = select;
        vm.close = close;

        ////

        activate();

        function activate() {
            // console.log('vm', list.getColors());
            getColors();
        }

        function getColors() {
            _.forEach(list.getColors(), function (color) {
               vm.palette.items.push({
                   active: false,
                   color: color
               });
            });
        }

        function select(palette) {
            $timeout(function () {
                vm.palette.selected = palette;
                vm.paletteForm.model.bgcolor = palette.color;
            });
        }

        function create(form) {

            if (form.$invalid) return;

            tag.create({}, vm.paletteForm.model).then(function (response) {
                tag.setTag(response.data, vm.messages, true).then(function () {
                    $rootScope.$broadcast('mail:sync');
                    vm.onClose();
                });
            });
        }

        function close() {
            vm.onClose();
        }
    }
})();
