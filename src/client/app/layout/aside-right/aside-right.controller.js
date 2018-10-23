(function () {
    'use strict';

    angular
        .module('app.layout')
        .controller('AsideRightController', AsideRightController);

    AsideRightController.$inject = ['$auth', '$timeout'];

    /* @ngInject */
    function AsideRightController($auth, $timeout) {
        var vm = this;
        vm.isClosed = true;

        vm.closeBanner = closeBanner;

        activate();

        function activate() {
            vm.user = $auth.user;
        }

        function eventWidth() {
            $('.main-container__body').css({
                maxWidth: $('.main-layout__content').innerWidth() - $('.aside-right').innerWidth()
            });

            $('aside-right').css({
                minHeight: $('.main-layout__inner').outerHeight() - 61
            });
        }

        // eventWidth();

        function closeBanner() {
            vm.isClosed = false;
            $('.main-container__body').css({
                maxWidth: $('.main-layout__content').innerWidth()
            });
        }

        $(window).on('resize', function () {
            eventWidth();
        });

        $timeout(function () {
            eventWidth();
        }, 20);
    }
})();
