(function () {
    'use strict';

    angular
        .module('app.directives')
        .directive('tagsInputPhoneButton', tagsInputPhoneButton);

    tagsInputPhoneButton.$inject = ['$translate', '$timeout', '$compile', 'config'];

    /* @ngInject */
    function tagsInputPhoneButton($translate, $timeout, $compile, config) {
        var directive = {
            require: "ngModel",
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element, attrs, ngModel) {
            var conf = config.getConfig();

            if (!conf.smsEnable) return;

            scope.pasteSms = pasteSms;

            scope.$watch(function () {
                return ngModel.$modelValue;
            }, function (newValue) {
                $timeout(function () {
                    var isSet = element.find('.tag-item--phone').is('.tag-item--phone');
                    if (newValue && newValue.length === 1 && !scope.$parent.vm.isSms && attrs.tagsInputPhoneButton && !isSet) {
                        var tagList = angular.element(element.find('.tag-list'));
                        var html = '<li class="tag-item tag-item--phone" ng-click="pasteSms()">{{ \'COPY_IN_SMS\' | translate }}<li>';
                        tagList.append($compile(html)(scope));
                    } else {
                        angular.element(element.find('.tag-item--phone')).remove();
                    }
                }, 50);
            }, true);

            function pasteSms() {
                angular.element(element.find('.tag-item--phone')).remove();
                scope.$parent.vm.isSms = true;
            }
        }
    }

})();
