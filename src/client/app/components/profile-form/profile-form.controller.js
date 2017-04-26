(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('ProfileFormController', ProfileFormController);

    ProfileFormController.$inject = ['$auth', '$state', 'profile'];
    /* @ngInject */
    function ProfileFormController($auth, $state, profile) {
        var vm = this;

        vm.profileForm = {};

        vm.monthList = moment.months();
        vm.countryList = ['Украина', 'Чехия'];
        vm.citiesList = ['Киев', 'Чернигов'];

        vm.logout = logout;
        vm.save = save;

        activate();

        function activate() {
            vm.profile = profile.getCurrent();
            vm.profileForm = angular.copy(vm.profile);
        }

        function logout() {
            $auth.signOut().then(function() {
                $state.go('signIn');
            });
        }

        function save() {
            var data = {
                first_name: vm.profileForm.first_name,
                last_name: vm.profileForm.last_name,
                gender: vm.profileForm.gender,
                // birthday: '06-07-1990',
                country: vm.profileForm.country,
                city: vm.profileForm.city
            };

            profile.put({}, data);
        }
    }
})();
