(function () {
    'use strict';

    angular
        .module('app.layout')
        .controller('FooterController', FooterController);

    FooterController.$inject = ['$auth', '$http', '$translatePartialLoader', '$translate', 'localStorageService'];

    /* @ngInject */
    function FooterController() {
        var vm = this;
    }
})();
