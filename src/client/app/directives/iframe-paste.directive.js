(function () {
    'use strict';

    angular
        .module('app.directives')
        .directive('iframePaste', iframePaste);

    iframePaste.$inject = ['$sce', '$auth'];

    function iframePaste($sce, $auth) {
        var directive = {
            template: '<iframe id="iframe--{{ action }}" ng-if="url" ng-src="{{ url }}" style="display: none;"></iframe>',
            link: link,
            restrict: 'E',
            scope: {
                action: '='
            }
        };
        return directive;

        function link(scope, element, attrs, form) {
            scope.user = $auth.user;

            scope.$watch('user.access_token', function (data) {
                console.log('token', scope.user.access_token);
                getIframe();
            }, true);

            function getIframe() {
                var url = undefined;

                if (scope.action === 'signIn') {
                    url = 'https://mail.cz?aToken=' + '' + scope.user.access_token;
                }

                if (scope.action === 'logout') {
                    url = 'https://mail.cz?logout';
                }

                if (url) {
                    scope.url = $sce.trustAsResourceUrl(url);
                }
            }
        }
    }

})();
