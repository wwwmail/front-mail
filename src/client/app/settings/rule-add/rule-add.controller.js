(function () {
    'use strict';

    angular
        .module('settings.ruleAdd')
        .controller('RuleAddController', RuleAddController);

    RuleAddController.$inject = ['sieve', '$state', 'mailBox', 'tag'];
    /* @ngInject */
    function RuleAddController(sieve, $state, mailBox, tag) {
        var vm = this;

        vm.$state = $state;

        vm.tags = {};

        vm.folders = {};

        vm.spamAccept = {
            // selected: {},
            list: [
                {
                    name: 'только к спаму',
                    value: 'only'
                },
                {
                    name: 'ко всем письмам, кроме спама',
                    value: 'except'
                },
                {
                    name: 'ко всем письмам, включая спам',
                    value: 'include'
                }
            ]
        };

        vm.attachmentAccept = {
            // selected: {},
            list: [
                {
                    name: 'с вложениями и без вложений',
                    value: 'all'
                },
                {
                    name: 'с вложениями',
                    value: 'with'
                },
                {
                    name: 'без вложений',
                    value: 'without'
                }
            ]
        };

        vm.sieveRules = {
            list: [
                {
                    name: 'Название вложения',
                    value: 'attachment'
                },
                {
                    name: 'Тело письма',
                    value: 'body'
                },
                {
                    name: 'Копия',
                    value: 'copy'
                },
                {
                    name: 'От кого',
                    value: 'from'
                },
                {
                    name: 'От кого',
                    value: 'from'
                },
                {
                    name: 'Заголовок',
                    value: 'header',
                    options: {
                        "header": "some header"
                    }
                },
                {
                    name: 'Тема',
                    value: 'subject'
                },
                {
                    name: 'Кому',
                    value: 'to'
                },
                {
                    name: 'Кому или копия',
                    value: 'to_copy'
                }
            ]
        };

        vm.compareTypes = {
            list: [
                {
                    name: 'содержит',
                    value: 'contain'
                },
                {
                    name: 'совпадает c',
                    value: 'match'
                },
                {
                    name: 'не содержит',
                    value: 'not_contain'
                },
                {
                    name: 'не совпадает c',
                    value: 'not_match'
                }
            ]
        };

        vm.ruleForms = [
            {
                "type": "attachment",
                "compare_type": "match",
                "value": "example@example.com"
            }
        ];

        vm.sieveActions = {
            move: {
                type: 'move'
            },
            flag: {
                type: 'flag'
            },
            resend: {
                type: 'resend'
            },
            notify: {
                type: 'notify'
            },
            answer: {
                type: 'answer'
            },
            option: {
                type: 'option'
            }
        };

        vm.sieve = {
            model: {}
        };

        vm.sieveForm = {
            model: {
                sieveRules: []
            }
        };

        vm.addRule = addRule;
        vm.removeRule = removeRule;
        vm.update = update;
        vm.add = add;
        // vm.getFolders = getFolders;
        // vm.getTags = getTags;

        activate();

        function activate() {
            if (vm.$state.params.id) {
                getById();
            }

            getTags();
            getFolders();
        }

        function setSieveActions() {
            _.forEach(vm.sieveActions, function (item) {
                _.forEach(vm.sieveForm.model.sieveActions, function (itemServer) {
                    if (itemServer.type === item.type) {

                        item.value = itemServer.value;

                        console.log('sieveActions', itemServer, item);
                    }

                });

                // console.log('sieveActions server', item);
            });

            console.log('sieveActions', vm.sieveActions);
        }

        function getById() {
            sieve.getById({id: vm.$state.params.id}).then(function (response) {
                vm.sieve.model = response.data;
                vm.sieveForm.model = response.data;

                setSieveActions();
            });
        }

        function addRule() {
            vm.sieveForm.model.sieveRules.push({
                "type": "",
                "compare_type": "",
                "value": ""
            });
        }

        function removeRule(rule) {
            _.remove(vm.sieveForm.model.sieveRules, function (item) {
                return rule === item;
            })
        }

        function add() {
            sieve.post({}, vm.sieveForm.model).then(function () {
                vm.$state.go('settings.rules');
            });
        }

        function update() {
            sieve.put({}, vm.sieveForm.model).then(function () {
                vm.$state.go('settings.rules');
            });
        }

        function getFolders() {
            mailBox.get().then(function (response) {
                vm.folders = response.data;
            });
        }

        function getTags() {
            tag.get().then(function (response) {
                vm.tags.items = response.data;
            });
        }
    }
})();
