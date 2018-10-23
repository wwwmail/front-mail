(function () {
    'use strict';

    angular
        .module('template.main')
        .controller('TemplateController', TemplateController);

    TemplateController.$inject = [];
    /* @ngInject */
    function TemplateController() {
        var vm = this;
    }
})();
