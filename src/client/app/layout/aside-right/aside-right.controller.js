(function () {
    'use strict';

    angular
        .module('app.layout')
        .controller('AsideRightController', AsideRightController);

    AsideRightController.$inject = ['$auth','$timeout'];

    /* @ngInject */
    function AsideRightController($auth, $timeout) {
        var vm = this;

        activate();

        function activate() {
            vm.user = $auth.user;
        }

        function eventWidth() {
            $('.main-container__body').css({
                width: $('.main-layout__content').innerWidth() - $('aside-right').innerWidth()
            });
        }

        eventWidth();

        $(window).on('resize', function() {
            eventWidth();
        });

        $('.aside-right').on('resize', function() {
            eventWidth();
        });

        $timeout(function () {
            eventWidth();
        }, 20);
    }
})();
