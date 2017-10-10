(function () {
    'use strict';

    angular
        .module('app.directives')
        .directive('googleBanner', googleBanner);

    googleBanner.$inject = ['$timeout'];

    function googleBanner($timeout) {
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element, attrs, form) {
            return $timeout(function() {
                console.log('set google banner');
                var adsbygoogle, html, rand;
                rand = Math.random();
                html = '<ins class="adsbygoogle" style="display:block;width:160px;height:600px" data-ad-client="a-pub-7169913763254428" data-ad-slot="6851262006" data-ad-format="auto"></ins>';
                $(element).append(html);
                return (adsbygoogle = window.adsbygoogle || []).push({});
            });
        }
    }

})();