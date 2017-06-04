(function(module) {
try {
  module = angular.module('app.i18n');
} catch (e) {
  module = angular.module('app.i18n', []);
}
module.run(['$translationCache', function($translationCache) {
  $translationCache.put('app/layout/footer/i18n/RU.json',
    '{"FOOTER":"Футер"}');
}]);
})();

(function(module) {
try {
  module = angular.module('app.i18n');
} catch (e) {
  module = angular.module('app.i18n', []);
}
module.run(['$translationCache', function($translationCache) {
  $translationCache.put('app/layout/menu-main/i18n/RU.json',
    '{"WRITE":"Написать!"}');
}]);
})();

(function(module) {
try {
  module = angular.module('app.i18n');
} catch (e) {
  module = angular.module('app.i18n', []);
}
module.run(['$translationCache', function($translationCache) {
  $translationCache.put('app/layout/header/i18n/RU.json',
    '{"MAIL":"Почта","CONTACTS":"Контакты"}');
}]);
})();

(function(module) {
try {
  module = angular.module('app.i18n');
} catch (e) {
  module = angular.module('app.i18n', []);
}
module.run(['$translationCache', function($translationCache) {
  $translationCache.put('app/layout/footer/i18n/UA.json',
    '{"FOOTER":"Футер"}');
}]);
})();

(function(module) {
try {
  module = angular.module('app.i18n');
} catch (e) {
  module = angular.module('app.i18n', []);
}
module.run(['$translationCache', function($translationCache) {
  $translationCache.put('app/layout/menu-main/i18n/UA.json',
    '{"WRITE":"Написати"}');
}]);
})();

(function(module) {
try {
  module = angular.module('app.i18n');
} catch (e) {
  module = angular.module('app.i18n', []);
}
module.run(['$translationCache', function($translationCache) {
  $translationCache.put('app/layout/header/i18n/UA.json',
    '{"MAIL":"Почта","CONTACTS":"Контакти"}');
}]);
})();
