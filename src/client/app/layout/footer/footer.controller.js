(function () {
    'use strict';

    angular
        .module('app.layout')
        .controller('FooterController', FooterController);

    FooterController.$inject = ['$auth', '$http', '$translatePartialLoader', '$translate', 'localStorageService'];

    /* @ngInject */
    function FooterController($auth, $http, $translatePartialLoader, $translate, localStorageService) {
        var vm = this;

        // $translatePartialLoader.addPart('layout/footer');
        // $translate.refresh();


    }
})();
