(function () {
    'use strict';

    angular
        .module('settings.ruleAdd')
        .controller('RuleAddController', RuleAddController);

    RuleAddController.$inject = ['sieve', '$state', 'mailBox', 'tag', '$translatePartialLoader', '$translate'];
    /* @ngInject */
    function RuleAddController(sieve, $state, mailBox, tag, $translatePartialLoader, $translate) {
        var vm = this;

        $translatePartialLoader.addPart('settings');
        $translate.refresh();

        vm.$state = $state;

        vm.tags = {};

        vm.folders = {};

        vm.spamAccept = {
            // selected: {},
            list: [
                {
                    name: 'RULE_FOR_ONLY_SPAM',
                    value: 'only'
                },
                {
                    name: 'RULE_ALL_NOT_SPAM',
                    value: 'except'
                },
                {
                    name: 'RULE_ALL_MAILS',
                    value: 'include'
                }
            ]
        };

        vm.attachmentAccept = {
            // selected: {},
            list: [
                {
                    name: 'RULE_IS_ALL_ATTACH',
                    value: 'all'
                },
                {
                    name: 'RULE_IS_ATTACH',
                    value: 'with'
                },
                {
                    name: 'RULE_IS_NOT_ATTACH',
                    value: 'without'
                }
            ]
        };

        vm.sieveRules = {
            list: [
                {
                    name: 'NAME_OF_ATTACHMENT',
                    value: 'attachment'
                },
                {
                    name: 'BODY_LETTER',
                    value: 'body'
                },
                {
                    name: 'IS_COPY',
                    value: 'copy'
                },
                {
                    name: 'FROM_WHOM_U',
                    value: 'from'
                },
                {
                    name: 'FROM_WHOM_U',
                    value: 'from'
                },
                {
                    name: 'HEADER',
                    value: 'header',
                    options: {
                        "header": "some header"
                    }
                },
                {
                    name: 'SUBJECT',
                    value: 'subject'
                },
                {
                    name: 'TO',
                    value: 'to'
                },
                {
                    name: 'TO_WHOM_OR_COPY',
                    value: 'to_copy'
                }
            ]
        };

        vm.compareTypes = {
            list: [
                {
                    name: 'CONTAINS',
                    value: 'contain'
                },
                {
                    name: 'MATCHES',
                    value: 'match'
                },
                {
                    name: 'NOT_CONTAINS',
                    value: 'not_contain'
                },
                {
                    name: 'NOT_MATCHES',
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
