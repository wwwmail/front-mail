(function () {
    'use strict';

    angular
        .module('app.directives')
        .directive('iframePaste', iframePaste);

    iframePaste.$inject = ['$sce', '$auth'];

    function iframePaste($sce, $auth) {
        var directive = {
            template: '<iframe ng-src="{{ url }}" style="display: none;"></iframe>',
            link: link,
            restrict: 'E'
        };
        return directive;

        function link(scope, element, attrs, form) {

            var user = $auth.user;

            var url = 'https://mail.cz?aToken=' + user.access_token;

            scope.url = $sce.trustAsResourceUrl(url);
        }
    }

})();
