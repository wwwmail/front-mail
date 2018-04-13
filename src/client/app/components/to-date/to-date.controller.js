(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('ToDateController', ToDateController);

    ToDateController.$inject = ['$rootScope', '$scope', '$translate'];
    /* @ngInject */
    function ToDateController($rootScope, $scope, $translate) {
        var vm = this;

        vm.convertDate = '';

        vm.calendarFormat = {};

        vm.calendarSmallFormat = {};

        vm.sendTimeFormat = {};

        vm.getConvert = getConvert;

        $rootScope.$on('$translateChangeSuccess', function() {
            activate();

            if (vm.date) {
                vm.convertDate = getConvert(vm.date);
                // console.log('vm.convertDate', vm.convertDate);
            }

            if (vm.dateUnix) {
                // console.log('vm.convertDate', vm.dateUnix);
                vm.convertDate = getUnixConvert(vm.dateUnix);
            }
        });

        $scope.$watch('vm.date', function (data, newData) {
            if (data) {
                // console.log('data', data);
                var newDate = moment(data);
                vm.convertDate = getConvert(newDate);
            }
        });

        $scope.$watch('vm.dateUnix', function (data, newData) {
            if (data) {
                vm.convertDate = getUnixConvert(data);
            }
        });

        activate();

        function activate() {
            // console.log('activate');

            if (vm.isSmall) {
                moment.locale('ru', {
                    calendar: {
                        sameDay: 'HH:mm',
                        lastDay: 'D MMM',
                        nextDay: '[завтра]',
                        nextWeek: 'dddd HH:mm',
                        lastWeek: 'D MMM',
                        sameElse: 'D MMM'
                    }
                });

                moment.locale('en', {
                    calendar: {
                        sameDay: 'HH:mm',
                        lastDay: 'D MMM',
                        nextDay: '[tomorrow at]',
                        nextWeek: 'dddd HH:mm',
                        lastWeek: 'D MMM',
                        sameElse: 'D MMM'
                    }
                });

                moment.locale('cs', {
                    calendar: {
                        sameDay: 'HH:mm',
                        lastDay: 'D MMM',
                        nextDay: '[zítra]',
                        nextWeek: 'dddd HH:mm',
                        lastWeek: 'D MMM',
                        sameElse: 'D MMM'
                    }
                });

                moment.locale('sk', {
                    calendar: {
                        sameDay: 'HH:mm',
                        lastDay: 'D MMM',
                        nextDay: '[zítra]',
                        nextWeek: 'dddd HH:mm',
                        lastWeek: 'D MMM',
                        sameElse: 'D MMM'
                    }
                });

                moment.locale('uk', {
                    calendar: {
                        sameDay: 'HH:mm',
                        lastDay: 'D MMM',
                        nextDay: '[завтра]',
                        nextWeek: 'dddd HH:mm',
                        lastWeek: 'D MMM',
                        sameElse: 'D MMM'
                    }
                });

                moment.locale($translate.use());

                return;
            }

            if (vm.isSendTime) {
                moment.locale('ru', {
                    calendar: {
                        sameDay: '[сегодня в] HH:mm',
                        lastDay: '[вчера] hh:mm',
                        nextDay: '[завтра]',
                        nextWeek: 'dddd HH:mm',
                        lastWeek: 'DD MMMM YYYY [в] hh:mm',
                        sameElse: 'DD MMMM YYYY [в] hh:mm'
                    }
                });

                moment.locale('en', {
                    calendar: {
                        sameDay: '[today] HH:mm',
                        lastDay: '[yesterday] hh:mm',
                        nextDay: '[tomorrow at]',
                        nextWeek: 'dddd HH:mm',
                        lastWeek: 'DD MMMM YYYY [at] hh:mm',
                        sameElse: 'DD MMMM YYYY [at] hh:mm'
                    }
                });

                moment.locale('cs', {
                    calendar: {
                        sameDay: '[dnes] HH:mm',
                        lastDay: '[včera] hh:mm',
                        nextDay: '[zítra]',
                        nextWeek: 'dddd HH:mm',
                        lastWeek: 'DD MMMM YYYY [v] hh:mm',
                        sameElse: 'DD MMMM YYYY [v] hh:mm'
                    }
                });

                moment.locale('sk', {
                    calendar: {
                        sameDay: '[dnes] HH:mm',
                        lastDay: '[včera] hh:mm',
                        nextDay: '[zítra]',
                        nextWeek: 'dddd HH:mm',
                        lastWeek: 'DD MMMM YYYY [v] hh:mm',
                        sameElse: 'DD MMMM YYYY [v] hh:mm'
                    }
                });

                moment.locale('uk', {
                    calendar: {
                        sameDay: '[сьогодні] HH:mm',
                        lastDay: '[вчора] hh:mm',
                        nextDay: '[завтра]',
                        nextWeek: 'dddd HH:mm',
                        lastWeek: 'DD MMMM YYYY [в] hh:mm',
                        sameElse: 'DD MMMM YYYY [в] hh:mm'
                    }
                });

                moment.locale($translate.use());

                return
            }

            moment.locale('ru', {
                calendar: {
                    sameDay: 'HH:mm',
                    lastDay: 'DD.MM.YYYY [в] hh:mm',
                    nextDay: '[завтра]',
                    nextWeek: 'dddd HH:mm',
                    lastWeek: 'DD MMMM YYYY [в] hh:mm',
                    sameElse: 'DD MMMM YYYY [в] hh:mm'
                }
            });

            moment.locale('en', {
                calendar: {
                    sameDay: 'HH:mm',
                    lastDay: 'DD.MM.YYYY [at] hh:mm',
                    nextDay: '[tomorrow at]',
                    nextWeek: 'dddd HH:mm',
                    lastWeek: 'DD MMMM YYYY [at] hh:mm',
                    sameElse: 'DD MMMM YYYY [at] hh:mm'
                }
            });

            moment.locale('cs', {
                calendar: {
                    sameDay: 'HH:mm',
                    lastDay: 'DD.MM.YYYY [v] hh:mm',
                    nextDay: '[zítra]',
                    nextWeek: 'dddd HH:mm',
                    lastWeek: 'DD MMMM YYYY [v] hh:mm',
                    sameElse: 'DD MMMM YYYY [v] hh:mm'
                }
            });

            moment.locale('sk', {
                calendar: {
                    sameDay: 'HH:mm',
                    lastDay: 'DD.MM.YYYY [v] hh:mm',
                    nextDay: '[zítra]',
                    nextWeek: 'dddd HH:mm',
                    lastWeek: 'DD MMMM YYYY [v] hh:mm',
                    sameElse: 'DD MMMM YYYY [v] hh:mm'
                }
            });

            moment.locale('uk', {
                calendar: {
                    sameDay: 'HH:mm',
                    lastDay: 'DD.MM.YYYY [в] hh:mm',
                    nextDay: '[завтра]',
                    nextWeek: 'dddd HH:mm',
                    lastWeek: 'DD MMMM YYYY [в] hh:mm',
                    sameElse: 'DD MMMM YYYY [в] hh:mm'
                }
            });

            moment.locale($translate.use());
        }

        function getConvert(date) {
            return moment(date).calendar();
        }

        function getUnixConvert(date) {
            return moment.unix(date).calendar();
        }
    }
})();
