(function () {
    'use strict';

    angular
        .module('app.directives')
        .directive('seoTitle', seoTitle);

    seoTitle.$inject = ['$state'];

    /* @ngInject */
    function seoTitle($state) {
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element, attrs) {
            var titleStatic = 'Mailcz';
            var title;

            console.log('directive', $state);

            if ($state.current.name === 'mail.inbox' || $state.current.name === 'mail.message') {
                scope.$watch(attrs['seoTitle'], function (data, oldData) {
                    if (data) {
                        title = data + ' - ' + titleStatic;
                    }
                    element.html(title ? title : titleStatic);
                });
                return;
            }




        }
    }

})();
