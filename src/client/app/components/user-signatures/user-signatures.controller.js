(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('UserSignaturesController', UserSignaturesController);

    UserSignaturesController.$inject = ['$auth', '$state', '$sce', 'profile', 'sign', 'connection'];
    /* @ngInject */
    function UserSignaturesController($auth, $state, $sce, profile, sign, connection) {
        var vm = this;

        vm.signatureForm = {
            model: {
                sign: ""
            }
        };

        vm.signatures = {
            items: []
        };

        vm.connections = {};

        vm.updateSign = updateSign;
        vm.getTrustHtml = getTrustHtml;
        vm.save = save;
        vm.add = add;
        vm.edit = edit;
        vm.destroy = destroy;

        ////

        activate();

        function activate() {
            vm.user = $auth.user;
            getList();
            getConnectionsList();
        }

        function getList() {
            sign.get().then(function (response) {
                vm.signatures.items = response.data;
                vm.signatures.items.reverse();
                console.log('signatures', vm.signatures.items);
            });
        }

        function add() {
            var data = {};

            data.sign = vm.signatureForm.model.sign;

            if (vm.signatureForm.model.isSignConnected) {
                data.connection_id = vm.signatureForm.model.connection_id;
                updateConnectionSign(data);
            }

            sign.post({}, data).then(function (response) {
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
            var data = {};

            data.sign = model.sign;

            if (model.isSignConnected) {
                data.connection_id = model.connection_id;
                updateConnectionSign(data);
            }

            sign.put({}, {sign: data.sign}).then(function (response) {
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

        function getConnectionsList() {
            vm.connections.items = [];

            var userConnection = {
                id: vm.user.profile.default_connection_id,
                email: vm.user.profile.email
            };

            vm.connections.items.push(userConnection);

            vm.connections.items = vm.connections.items.concat(vm.user.profile.connections);

            _.forEach(vm.connections.items, function (connection) {
                if (vm.user.profile.selected_connection_id === connection.id) {
                    vm.connections.selected = connection;
                }
            });

            if (!vm.user.profile.selected_connection_id) {
                vm.connections.selected = userConnection;
            }

            vm.signatureForm.model.connection_id = vm.connections.selected.id;
        }

        function updateConnectionSign(data) {
            if (vm.user.profile.default_connection_id === data.connection_id) {
                profile.put({}, {
                    sign: data.sign
                });
                return;
            }
            connection.update({id: data.connection_id}, {sign: data.sign});
        }
    }
})();
