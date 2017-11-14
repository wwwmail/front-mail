(function () {
    'use strict';

    angular
        .module('app.directives')
        .directive('passwordChangeLink', passwordChangeLink);

    passwordChangeLink.$inject = ['$auth', 'CONFIG'];

    /* @ngInject */
    function passwordChangeLink($auth, CONFIG) {
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element, attrs) {
            element.click(function () {
                location.href = CONFIG.passportLink + '?token=' + $auth.user.access_token.split(' ')[1];
            });
        }
    }

})();
