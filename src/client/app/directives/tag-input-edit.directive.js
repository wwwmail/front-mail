(function () {
    'use strict';

    angular
        .module('app.directives')
        .directive('tagInputEdit', tagInputEdit);

    tagInputEdit.$inject = ['$timeout'];

    /* @ngInject */
    function tagInputEdit($timeout) {
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element, attrs) {
            var tag = {};

            var $tagItem;

            scope.newEditTag = '';

            scope.setEdit = setEdit;
            scope.editTag = editTag;

            function editTag(e) {
                $tagItem = element.parent().parent().parent();
                $tagItem.addClass('tag-item--edit');

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
            }

            function setEdit($event, data) {
                data.isEdit = false;

                var model = $event.target.innerText;

                var email = undefined;

                if (model.match(/\"(.*)\"/)) {
                    var newFullName = model.match(/\"(.*)\"/)[1];
                }

                if (model.match(/\<(.*)\>/)) {
                    email = model.match(/\<(.*)\>/)[1];
                }

                if (isEmail(model)) {
                    console.log('isEmail', isEmail(model), model);
                    email = model;
                    data.first_name = model;
                }

                if (newFullName && !isEmail(model)) {
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

                console.log('data', data);

                $tagItem.removeClass('tag-item--edit');
            }

            function isEmail(email) {
                var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(email);
            }
        }
    }
})();
