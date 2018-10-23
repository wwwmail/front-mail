(function () {
    'use strict';

    angular
        .module('app.directives')
        .directive('chatCode', chatCode);

    chatCode.$inject = ['$compile', '$timeout', 'CONFIG'];

    /* @ngInject */
    function chatCode($compile, $timeout, CONFIG) {
        var directive = {
            link: link,
            restrict: 'EA'
        };
        return directive;

        function link(scope, element, attrs) {
            var html = [
                "<script type=\"text/javascript\">",
                "var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();",
                "(function () {",
                "var s1 = document.createElement(\"script\"), s0 = document.getElementsByTagName(\"script\")[0];",
                "s1.async = true;",
                "s1.src = 'https://embed.tawk.to/5a30ecb25d3202175d9b7f4f/default';",
                "s1.charset = 'UTF-8';",
                "s1.setAttribute('crossorigin', '*');",
                "s0.parentNode.insertBefore(s1, s0);",
                "})();",
                "</script>"
            ].join(" ");

            activate();

            ////

            function activate() {
                if (CONFIG.domainZone === 'md') {
                    pasteHtml(html);
                }
            }

            function pasteHtml(html) {
                $timeout(function () {
                    element.html(html);
                });
            }
        }
    }

})();
