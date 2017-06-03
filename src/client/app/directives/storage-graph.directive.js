(function () {
    'use strict';

    angular
        .module('app.directives')
        .directive('storageGraph', storageGraph);

    storageGraph.$inject = ['$auth', '$compile', '$timeout', '$templateRequest'];

    /* @ngInject */
    function storageGraph($auth, $compile, $timeout, $templateRequest) {
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element, attrs) {

            function $$(selector, context) {
                context = context || document;
                var elements = context.querySelectorAll(selector);
                return Array.prototype.slice.call(elements);
            }

            $$('.storage__space-pie--my-space').forEach(function (pie) {
                var spaceDisk = $auth.user.profile.freeQuota;
                pie.style.animationDelay = '-' + parseFloat(spaceDisk) + 's';
            });
            console.log('eror');

        }
    }

})();
