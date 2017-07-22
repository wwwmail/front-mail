(function () {
    'use strict';

    angular
        .module('app.directives')
        .directive('iframePaste', iframePaste);

    iframePaste.$inject = ['$sce', '$auth', 'CONFIG'];

    function iframePaste($sce, $auth, CONFIG) {
        var directive = {
            template: '<iframe ng-src="{{ url }}" style="display: none;"></iframe>',
            link: link,
            restrict: 'E',
            scope: {
                action: '='
            }
        };
        return directive;

        function link(scope, element, attrs, form) {
            var user = $auth.user;

            scope.$watch('action', function (response) {
                var url = undefined;

                if (scope.action === 'signIn') {
                    url = 'https://mail.cz?aToken=' + '' + user.access_token;
                }

                if (scope.action === 'logout') {
                    url = 'https://mail.cz?logout';
                }

                scope.url = $sce.trustAsResourceUrl(url);
            });
        }
    }

})();
