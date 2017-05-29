(function () {
    'use strict';

    angular
        .module('app.directives')
        .directive('selectOnBlur', selectOnBlur);

    selectOnBlur.$inject = [];

    /* @ngInject */
    function selectOnBlur() {
        var directive = {
            require: 'uiSelect',
            link: link,
            restrict: 'EA'
        };
        return directive;

        function link($scope, $element, attrs, $select) {
            var searchInput = $element.querySelectorAll('input.ui-select-search');
            if (searchInput.length !== 1) return;

            searchInput.on('blur', function () {
                var isset = false;

                _.forEach($select.items, function (item) {
                    console.log('item', item.emails[0].value);
                    console.log('$select.search', $select.search);

                    console.log('$select.items', $select.items);

                    if (item.emails[0].value === $select.search) {
                        isset = true;
                    }
                });

                return;

                // console.log('$select', $select.items[$select.activeIndex]);
                // console.log('$select.activeIndex', $select.activeIndex);
                console.log('$select', $select);
                console.log(' $select.search', $select.search);

                if (!isset) {
                    $scope.$apply(function () {
                        var item = {emails: [{value: $select.search}]};
                        $select.select(item);
                    });
                }
            });
        }
    }

})();
