(function () {
    'use strict';

    angular
        .module('app.directives')
        .directive('storageMailsPosition', storageMailsPosition);

    storageMailsPosition.$inject = ['$q', '$document', '$window', '$parse', '$timeout', '$rootScope', 'mail'];

    /* @ngInject */
    function storageMailsPosition($q, $document, $window, $parse, $timeout, $rootScope, mail) {
        var directive = {
            link: link,
            restrict: 'A',
            scope: {
                messages: '=?'
            }
        };
        return directive;

        function link(scope, element, attrs) {

            scope.$watch('messages', function (data, oldData) {
                if (data !== oldData) {
                    _.debounce(function () {
                        mail.setStorageMessages(data);
                    }, 1000, false)();
                }
            }, true);

            activate();

            ////

            function activate() {}
        }
    }

})();
