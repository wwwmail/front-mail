(function () {
    'use strict';

    angular
        .module('app.core', [
            'ngSanitize',
            'ngResource',
            'ui.router',
            'toastr',
            'checklist-model',
            'blocks.logger',
            'blocks.router'
        ]);
})();
