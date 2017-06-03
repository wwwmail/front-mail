(function () {
    'use strict';

    angular
        .module('app.directives')
        .directive('tagInputEdit', tagInputEdit);

    tagInputEdit.$inject = ['$sce', '$compile', '$timeout', '$templateRequest'];

    /* @ngInject */
    function tagInputEdit($sce, $compile, $timeout, $templateRequest) {
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element, attrs) {
            var tag = {};

            scope.newEditTag = '';

            scope.setEdit = setEdit;

            element.dblclick(function (e) {
                var tagEdit = '';
                var fullName = '';

                tag = scope.$parent.data;

                if (tag.last_name || tag.first_name) {
                    fullName += '"';
                    fullName += tag.last_name || '';
                    fullName += (tag.first_name && tag.last_name) ? ' ' : '';
                    fullName += tag.first_name || '';
                    fullName += '" ';
                    tagEdit += fullName;
                }

                tagEdit += tag.emails && tag.emails.length ? "\<" + tag.emails[0].value + "\>" : "\<" + tag.first_name + "\>";

                tag.isEdit = true;

                scope.tagEdit = tagEdit;

                $timeout(function () {
                    element.find('.tag-contact-edit').trigger('focus');
                }, 50);

                e.preventDefault();
            });

            function setEdit($event, data) {
                data.isEdit = false;

                var model = $event.target.innerText;


                console.log('$event', $event.target.innerText);
                console.log('model', model);

                if (model.match(/\"(.*)\"/)) {
                    var newFullName = model.match(/\"(.*)\"/)[1];
                }

                if (model.match(/\<(.*)\>/)) {
                    var email = model.match(/\<(.*)\>/)[1];
                }

                console.log('newFullName', newFullName);
                console.log('email', email);

                if (newFullName) {
                    var newNames = newFullName.split(' ');

                    if (newNames.length > 1) {
                        data.last_name = newNames[0];
                        data.first_name = newNames[1];
                    } else {
                        data.first_name = newNames[0];
                        data.last_name = '';
                    }

                    if (!email) {
                        data.emails[0].value = newNames[0];
                    }
                }

                if (email) {
                    data.emails[0].value = email;
                }

                // console.log('data', data);
            }
        }
    }

})();
