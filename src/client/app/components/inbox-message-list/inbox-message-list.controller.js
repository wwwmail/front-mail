(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('InboxMessageListController', InboxMessageListController);

    InboxMessageListController.$inject = [];
    /* @ngInject */
    function InboxMessageListController() {
        var vm = this;

        vm.messages = [
            {
                "date": {
                    "date": "2017-04-09 18:57:22.000000",
                    "timezone_type": 1,
                    "timezone": "+03:00"
                },
                "Subject": "План разработки",
                "from": "Обушко Ярослав",
                "fromAddress": "fopobushko@gmail.com",
                "to": [
                    {
                        "name": null,
                        "address": "test@devogic.com"
                    }
                ],
                "messageId": "<CAO8wiXo0sNAhGbGgHNVjgoBROL8_NeCQXnvwy6eQ5Khz_6guFw@mail.gmail.com>",
                "number": 1,
                "size": "3328",
                "seen": true,
                "answered": false,
                "deleted": false,
                "attachments": 0
            },
            {
                "date": {
                    "date": "2017-04-09 19:07:47.000000",
                    "timezone_type": 1,
                    "timezone": "+03:00"
                },
                "Subject": "Еще одно письмо",
                "from": "Обушко Ярослав",
                "fromAddress": "fopobushko@gmail.com",
                "to": [
                    {
                        "name": null,
                        "address": "test@devogic.com"
                    }
                ],
                "messageId": "<CAO8wiXpcK=gXED_5Oru8hyEArW2K4oi0M1Svty78fstz5N6D_A@mail.gmail.com>",
                "number": 2,
                "size": "3345",
                "seen": true,
                "answered": false,
                "deleted": false,
                "attachments": 0
            },
            {
                "date": {
                    "date": "2017-04-11 13:27:11.000000",
                    "timezone_type": 1,
                    "timezone": "+03:00"
                },
                "Subject": "Re: testmail",
                "from": "Обушко Ярослав",
                "fromAddress": "fopobushko@gmail.com",
                "to": [
                    {
                        "name": "test",
                        "address": "test@devogic.com"
                    }
                ],
                "messageId": "<CAO8wiXpShEmiBKhFCsWVB9YhrGpAcEmb2dzmQQEouOqYCBL5Xw@mail.gmail.com>",
                "number": 3,
                "size": "3817",
                "seen": true,
                "answered": false,
                "deleted": false,
                "attachments": 0
            },
            {
                "date": {
                    "date": "2017-04-11 14:45:17.000000",
                    "timezone_type": 1,
                    "timezone": "+03:00"
                },
                "Subject": "Re: test3",
                "from": "Обушко Ярослав",
                "fromAddress": "fopobushko@gmail.com",
                "to": [
                    {
                        "name": "test",
                        "address": "test@devogic.com"
                    }
                ],
                "messageId": "<CAO8wiXpiOCPrkCTfiyKMAX2r+bWSaUS95K47N=y5LVW-L6UKnA@mail.gmail.com>",
                "number": 4,
                "size": "3810",
                "seen": true,
                "answered": false,
                "deleted": false,
                "attachments": 0
            }
        ];
    }
})();
