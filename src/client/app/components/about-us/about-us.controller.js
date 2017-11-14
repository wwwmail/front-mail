(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('AboutUsController', AboutUsController);

    AboutUsController.$inject = ['$scope','$timeout', 'profile'];
    /* @ngInject */
    function AboutUsController($scope, $timeout, profile) {
        var vm = this;

        vm.passwordForm = {
            model: {}
        };

        vm.tabs = {
            active: 'About'
        };


        vm.map = {
            settings: {
                center: {
                    latitude: 50.0836945,
                    longitude: 14.4322849
                },
                zoom: 16
            },
            options: {
                scrollwheel: false
            }
        };

        vm.marker = {
            id: 0,
            coords: {
                latitude: 50.0836945,
                longitude: 14.4322849
            },
            options: {
                draggable: false
            }
        };

        vm.changePassword = changePassword;
        vm.close = close;

        activate();

        function activate() {
        }

        function changePassword(form) {
            console.log('vm.passwordForm', vm.passwordForm.model, form);

            if (form.$invalid) return;

            profile.changePassword({}, vm.passwordForm.model)
                .then(function (response) {
                    close();
                }, function(response) {
                    vm.error = response.data.data.message;
                });
        }

        function close() {
            vm.onClose();
        }
    }
})();
