(function () {
    'use strict';

    // angular
    //     .module('app')
    //     .run(function ($rootScope, $state, $stateParams, authentication) {
    //         $rootScope.$state = $state;
    //         $rootScope.$stateParams = $stateParams;
    //     })
    //     .config(function ($httpProvider) {
    //
    //     })
    //     .config(function (toastrConfig) {
    //         angular.extend(toastrConfig, {
    //             timeOut: 2000,
    //             toastClass: 'toast toast--extend'
    //         });
    //     });



    var core = angular.module('app.core');

    core.config(function (toastrConfig) {
        angular.extend(toastrConfig, {
            timeOut: 2000,
            toastClass: 'toast toast--extend'
        });
    });
})();
