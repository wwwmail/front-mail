(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('UserSignaturesController', UserSignaturesController);

    UserSignaturesController.$inject = ['$auth', '$state', '$sce', 'profile', 'sign'];
    /* @ngInject */
    function UserSignaturesController($auth, $state, $sce, profile, sign) {
        var vm = this;

        vm.signatureForm = {
            model: {
                sign: ""
            }
        };

        vm.signatures = {
            items: []
        };

        vm.updateSign = updateSign;
        vm.getTrustHtml = getTrustHtml;
        vm.save = save;
        vm.add = add;
        vm.edit = edit;
        vm.destroy = destroy;

        ////

        activate();

        function activate() {
            getList();
        }

        function getList() {
            sign.get().then(function (response) {
                vm.signatures.items = response.data;
                vm.signatures.items.reverse();
                console.log('signatures', vm.signatures.items);
            });
        }

        function add() {
            sign.post({}, vm.signatureForm.model).then(function (response) {
                vm.signatures.items.unshift(response.data);
                console.log('signatures', vm.signatures.items);
                vm.signatureForm.model.sign = '';
            });
        }

        function edit(model) {
            _.forEach(vm.signatures.items, function (item) {
                item.isEdit = false;
            });
            model.isEdit = true;
        }

        function save(model) {

            console.log('model', model);

            sign.put({}, {sign: model.sign}).then(function (response) {
                model.isEdit = false;
                // vm.signatures.items = response.data;
                // console.log('signatures', vm.signatures.items);
            });
        }

        function destroy(model) {
            sign.destroy({id: model.id}).then(function (response) {
                _.remove(vm.signatures.items, function (item) {
                    return model === item;
                });
            });
        }

        function getTrustHtml(html) {
            return $sce.trustAsHtml(html);
        }

        function updateSign() {
            vm.user.profile.sign = vm.signature ? vm.signature : '';

            var data = {};

            data.sign = '-- <br>' + angular.copy(vm.user.profile.sign);

            profile.put({}, data);
        }
    }
})();
