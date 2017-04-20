(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('AvatarNameController', AvatarNameController);

    AvatarNameController.$inject = [];
    /* @ngInject */
    function AvatarNameController() {
        var vm = this;

        vm.title = "AvatarNameController"
    }
})();
