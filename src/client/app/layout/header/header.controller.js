(function () {
    'use strict';

    angular
        .module('app.layout')
        .controller('HeaderController', HeaderController);

    HeaderController.$inject = ['profile'];

    /* @ngInject */
    function HeaderController(profile) {
        var vm = this;
        vm.title = 'Header';

        activate();

        function activate() {
            vm.profile = profile.getCurrent();
        }
    }
})();
