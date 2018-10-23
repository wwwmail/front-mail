(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('ToTagNameController', ToTagNameController);

    ToTagNameController.$inject = ['$scope', 'tag'];
    /* @ngInject */
    function ToTagNameController($scope, tag) {
        var vm = this;

        vm.tags = {};

        vm.tagName = '';

        activate();

        function activate() {
            vm.tags = tag.getCacheList();
            getName();
        }

        function getName() {
            _.forEach(vm.tags, function (item) {
                if (item.id == vm.tagId) {
                    vm.tagName = item.tag_name;
                }
            });
        }

    }
})();
