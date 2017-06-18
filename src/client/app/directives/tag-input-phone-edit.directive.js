(function () {
    'use strict';

    angular
        .module('app.directives')
        .directive('tagInputPhoneEdit', tagInputPhoneEdit);

    tagInputPhoneEdit.$inject = ['$timeout'];

    /* @ngInject */
    function tagInputPhoneEdit($timeout) {
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element, attrs) {
            var tag = {};

            scope.newEditTag = '';


            scope.setEdit = setEdit;
            scope.editTag = editTag;

            function editTag(e) {
                tag = scope.$parent.data;

                var tagEdit = tag.text;

                tag.isEdit = true;

                scope.tagEdit = tagEdit;

                $timeout(function () {
                    element.find('.tag-contact-edit').trigger('focus');
                }, 50);

                e.preventDefault();
            }

            function setEdit($event, data) {
                data.isEdit = false;
                data.text = $event.target.innerText;
            }
        }
    }

})();
