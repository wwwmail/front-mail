(function () {
    'use strict';

    angular
        .module('app.core', [
            'ngSanitize',
            'ngResource',
            'ui.router',
            'ui.bootstrap',
            'ui.mask',
            'toastr',
            'checklist-model',
            'blocks.logger',
            'blocks.router',
            'ng-token-auth',
            'ngFileUpload',
            'ngImgCrop',
            'ui.select',
            'dcbImgFallback',
            'ui.bootstrap.datetimepicker',
            'ngFileSaver',
            'monospaced.elastic',
            'ngTagsInput',
            'LocalStorageModule',
            'pascalprecht.translate',
            'dndLists',
            'content-editable',
            'paypal-button',
            'ngCookies',
            'ngclipboard'
        ]);
})();
