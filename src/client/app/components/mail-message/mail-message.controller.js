(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('MailMessageController', MailMessageController);

    MailMessageController.$inject = ['$state', '$scope', 'mail', 'tag', '$rootScope', '$uibModal'];

    /* @ngInject */
    function MailMessageController($state, $scope, mail, tag, $rootScope, $uibModal) {
        var vm = this;

        activate();

        function activate() {
        }
    }
})();
