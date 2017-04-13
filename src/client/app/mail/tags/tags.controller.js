(function () {
    'use strict';

    angular
        .module('mail.tags')
        .controller('TagsController', TagsController);

    TagsController.$inject = [];
    /* @ngInject */
    function TagsController() {
        var vm = this;
    }
})();
