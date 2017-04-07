(function () {
    'use strict';

    angular
        .module('app.core', [
            'ngSanitize',
            'ngResource',
            'ui.router',
            'ui.bootstrap',
            'toastr',
            'checklist-model',
            'blocks.logger',
            'blocks.router'
        ]);
})();
