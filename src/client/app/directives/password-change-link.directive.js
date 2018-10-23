(function () {
    'use strict';

    angular
        .module('app.directives')
        .directive('passwordChangeLink', passwordChangeLink);

    passwordChangeLink.$inject = ['$auth', '$translate', 'CONFIG'];

    /* @ngInject */
    function passwordChangeLink($auth, $translate, CONFIG) {
        var directive = {
            link: link,
            restrict: 'A',
            scope: {
                tab: '@?'
            }
        };
        return directive;

        function link(scope, element, attrs) {
            var url = CONFIG.passportLink + '?token=' + $auth.user.access_token.split(' ')[1] + '&lang=' + $translate.use() + '&from=' + CONFIG.domainZone

            if (scope.tab) {
                url += '&tab=' + scope.tab;
            }

            element.click(function () {
                window.open(url, '_blank');
            });
        }
    }

})();
