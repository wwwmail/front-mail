(function () {
    'use strict';

    angular
        .module('app.components')
        .component('aboutUs', {
            bindings: {
                onClose: '&',
                model: '='
            },
            templateUrl: 'app/components/about-us/about-us.html',
            controller: 'AboutUsController',
            controllerAs: 'vm'
        });
})();