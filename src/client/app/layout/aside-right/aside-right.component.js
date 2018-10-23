(function () {
    'use strict';

    angular
        .module('app.layout')
        .component('asideRight', {
            bindings: {},
            templateUrl: 'app/layout/aside-right/aside-right.html',
            controller: 'AsideRightController',
            controllerAs: 'vm'
        });
})();