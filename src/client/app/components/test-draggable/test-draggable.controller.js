(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('TestDraggableController', TestDraggableController);

    TestDraggableController.$inject = ['$scope'];
    /* @ngInject */
    function TestDraggableController($scope) {
        var vm = this;

        activate();

        function activate() {

        }

        vm.model = [generateList(1), generateList(2)];

        vm.onDrop = function(srcList, srcIndex, targetList, targetIndex) {
            // Copy the item from source to target.
            targetList.splice(targetIndex, 0, srcList[srcIndex]);
            // Remove the item from the source, possibly correcting the index first.
            // We must do this immediately, otherwise ng-repeat complains about duplicates.
            if (srcList == targetList && targetIndex <= srcIndex) srcIndex++;
            srcList.splice(srcIndex, 1);
            // By returning true from dnd-drop we signalize we already inserted the item.
            return true;
        };

        function generateList(id) {
            return ['A', 'B', 'C'].map(function(letter) {
                // angular-drag-and-drop-lists usually serializes the objects to drag, thus we
                // can not transfer functions on the objects. However, as this fiddle uses dnd-callback
                // to move the objects directly without serialization, we can use a function reference
                // on the item here.
                return {
                    labelFunc: function(index) {
                        return "Item " + id + letter + " at index " + index;
                    }
                };
            });
        }
    }
})();
