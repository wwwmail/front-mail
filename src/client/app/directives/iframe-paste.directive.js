(function () {
    'use strict';

    angular
        .module('app.directives')
        .directive('iframePaste', iframePaste);

    iframePaste.$inject = ['$sce', '$auth'];

    function iframePaste($sce, $auth) {
        var directive = {
            template: '<iframe ng-if="url" ng-src="{{ url }}" style="display: none;"></iframe>',
            link: link,
            restrict: 'E',
            scope: {
                action: '='
            }
        };
        return directive;

        function link(scope, element, attrs, form) {
            var user = $auth.user;

            scope.$watch('action', function (data) {
                if (data) {
                    var url = undefined;

                    if (data === 'signIn') {
                        url = 'https://mail.cz?aToken=' + '' + user.access_token;
                    }

                    if (data === 'logout') {
                        url = 'https://mail.cz?logout';
                    }

                    if (url) {
                        scope.url = $sce.trustAsResourceUrl(url);
                    }
                }
            });
        }
    }

})();
