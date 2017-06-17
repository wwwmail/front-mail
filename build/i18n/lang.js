(function(module) {
try {
  module = angular.module('app.i18n');
} catch (e) {
  module = angular.module('app.i18n', []);
}
module.run(['$translationCache', function($translationCache) {
  $translationCache.put('i18n/RU.json',
    '{"INPUT_PLACEHOLDER_NAME":"Имя","INPUT_PLACEHOLDER_LAST_MANE":"Фамилия","INPUT_PLACEHOLDER_MAIL_NAME":"Имя почты","INPUT_PLACEHOLDER_PASSWORD":"Пароль","INPUT_PLACEHOLDER_PASSWORD_CONFIRMATION":"Подтверждение пароля","AUTH_CREATE_A_USER_NAME":"Придумайте имя пользователя","BTN_TO_GET_THE_CODE":"Получить код","AUTH_NOTIFIC_PHONE_1":"На номер","AUTH_NOTIFIC_PHONE_2":"был отправлен код проверки","INPUT_PLACEHOLDER_ENTER_SMS_CODE":"Введите код из смс","AUTH_CHECKBOX_CONFORMING_1":"Подтверждая регистрацию вы принимаете правила описанные в","AUTH_CHECKBOX_CONFORMING_2":"Пользовательском соглашении","BTN_SING_UP_NOW":"Зарегистрироваться","SING_IN":"Войти","REMEMBER_ME":"Запомнить меня","CONTACTS":"Контакты","INPUT_PLACEHOLDER_LOGIN":"Логин","FORGOT_YOUR_PASSWORD":"Забыли пароль?","CHECK_IN":"Регистрация","ACCESS_RECOVERY":"Восстановление доступа","INPUT_PLACEHOLDER_ENTER_NEW_PASSWORD":"Введите новый пароль","INPUT_PLACEHOLDER_CONFIRM_NEW_PASSWORD":"Подтвердите новый пароль","BTN_SAVE_AND_CONTINUE":"Сохранить и продолжить","AUTH_SPECIFY_LOGIN":"Укажите логин, для которого хотите восстановить пароль","INPUT_PLACEHOLDER_LOGIN_OR_EMAIL":"Логин или email","BTN_FURTHER":"Далее","DELETE":"Удалить","DOWNLOAD":"Скачать","CANCEL":"Отменить","SAVE":"Сохранить","SAVES":"Сохранять","CHOOSE":"Выбрать","BTN_CANCEL":"Отмена","NAME":"Название","ARCHIVE":"Архив","BASKET":"Корзина","TEMPLATES":" Шаблоны","DRAFTS":" Черновики","SENT":" Отправленные","INPUT_PLACEHOLDER_SEARCH_QUERY":"Введите запрос","SAVE_CHANGES":"Сохранить изменения","AVATAR_LOAD_IMAGE":"Загрузите изображение","AVATAR_UPLOAD_TEXT_NOTYF":"Можно загрузить картинку в формате png, jpg и gif. Размеры не меньше 200 × 200 точек, объём файла не больше 7 МБ","CHANGE_MAIL":"Сменить email ","BTN_CHANGE":"Сменить","BLACK_LIST":"Черный список","BLACK_LIST_TEXT_ALL_MAILS_IS_BLACK_LIST":"Вся почта с адресов, занесённых в чёрный список, не будет поступать в ваш почтовый ящик","INPUT_PLACEHOLDER_PLEASE_YOUR_EMAIL":"Укажите e-mail адрес","ADD":"Добавить","REMOVE_IS_LIST":"Удалить из списка","ADD_NEW_CONTACTS":"Добавить новый контакт","INPUT_PLACEHOLDER_MIDDLE_NAME":"Отчество","INPUT_PLACEHOLDER_ADD_EMAIL_ADDRESS":"Добавить электронный адрес","INPUT_PLACEHOLDER_ADD_PHONE":"Добавить телефон","DAY":"День","MONTH":"Месяц","YEAR":"Год","INPUT_PLACEHOLDER_COMMENT_CONTACT":"Комментарий контакту","ADD_IN_CONTACTS":"Добавить в контакты","ADD_RECIPIENTS":"Добавить получателей","EDIT_CONTACT":"Редактирование информации о контакте","EXPORT_CONTACTS":"Экспортировать контакты","CONTACT_EXPORT_MASSAGE":"Mail.CZ поддерживает импорт ваших контактов контактов,из файлов в формате .csv и vCard","IS_DONE":"Готово","INPUT_PLACEHOLDER_SEARCH_ALL_LETTERS":"Искать по всему письму","GROUPS_CONTACTS":"Группы контактов","INPUT_PLACEHOLDER_CHOOSE_GROUP":"Выберите группу","SEARCH":"Поиск","INPUT_PLACEHOLDER_SEARCH":"Поиск","INPUT_PLACEHOLDER_NAME_GROUP":"Название группы","CREATE":"Создать","BTN_CREATE":"Создать","CREATE_NEW_GROUP":"Создать новую группу","RENAME_GROUP":"Переименовать группу","NEW_GROUP":"Новая группа","YET":"Еще","RECOVERY":"Восстановить","ADD_TO_GROUP":"Добавить в группу","ADD_CONTACT":"Добавить контакт","UPLOAD_FILES":"Загрузить файлы","FILE_IS_ANALISE_SUCCESS":"Файл успешно проанализировано","LOAD_CONTACT_IN_FILE":"Загрузить контакты в файл","RECOVERY_CONTACTS":"Восстановление контактов","BTN_RECOVERY_CONTACT":"Восстановить контакты","SHOW_ALL_CONTACTS":"Показать все контакты","ABOUT_CONTACTS":"Информации о контакте","CORRESPONDENCE":"Переписка","CHANGE":"Изменить","NEW_MAIL":"Новый Email","NEW_ADDRESS":"Новый адрес","ASSIGN_RECIPIENT":"Привязать получателя","CITY":"Город","INDEX":"Индекс","REGION":"Регион","STREET":"Улица","HOUSE":"Дом","CORPUS":"корпус","APARTMENT":"квартира","COUNTRY":"Страна","CREATED_FOLDER":"Создаём папку","RENAME_FOLDER":"Переименовать папку","NEW_FOLDER":"Новая папка","SPAM":"Спам","NOT_SPAM":"Не спам","READ":"Прочитано","NOT_READ":"Не прочитано","LABEL":"Метка","IN_FOLDER":"В папку","ARCHIVED":"Архивировать","LETTERS_SENDS":"Письмо отправленно","YET_LETTERS":" Еще письма","PASSWORD_CHANGE":"ИЗМЕНЕНИЕ ПАРОЛЯ","PASSWORD_REPLY":"Повторить пароль","CHANGE_PHONE":"Сменить phone","INPUT_PLACEHOLDER_YOUR_NAME":"Введите имя","INPUT_PLACEHOLDER_YOUR_MIDDLE_NAME":"Ваша Фамилия","NAME_AND_MIDDLE_NAME":"Имя и фамилия","DATE_BIRTH":"Дата рождения","MALE":"Мужской","FEMALE":"Женский","FLOOR":"Пол","PROFILE_FORM_TEXT_1":"Mail.cz ни при каких обстоятельствах не предоставляет третьим лицам никаких персональных данных своих пользователей, кроме случаев, прямо предусмотренных в","PROFILE_FORM_TEXT_2":"Политике Конфиденциальности","COLLECT_MAIL_FROM_OTHER_BOX":" Сбор почты с других ящиков","CREATE_LABEL":"Создаем метку","RELOAD_LABEL":"Обновить метку","REMOVED_SELECTION_TAG":"Снять метки","NEW_LABEL":"Новая метка","SAVE_TEMPLATE":"Сохранить шаблон","NEW_TEMPLATE":"Новый шаблон","TEMPLATE_LIST_TEXT":"Часто отправляете похожие письма? Сохраните это письмо как шаблон, чтобы не писать его каждый раз заново","TIME_SEND_TEXT":"Вы можете указать дату и время, когда письмо должно быть отправлено. Отправку письма можно отложить не более чем на один год с текущей даты","TIME":"Время","ADD_USER":"Добавить пользователя","USER_MANAGE_ACCOUNT":"Управление акаунтом","HELP":"Помощь","ADD_MAIL_BOX":"Добавить ящик","EXIT":"Выход","WHITE_LIST":"Белый список","WHITE_LIST_TEXT":"Вся почта с адресов, занесённых в белый список, не будет попадать в папку","CONTACTS_LIST_TITLE_UPLOAD_IS_FILE":"Загрузить контакты из файла","CONTACTS_LIST_TEXT_SUPPORTS_IMPORT_CONTACTS":"Mail.CZ поддерживает импорт контактов, сохранённых в форматах .csv и vCard.","CONTACTS_LIST_TEXT_MOVE_THIS_FILE":"Перетащите файл сюда","CONTACTS_LIST_TEXT_ERROR_ADDED_FILE":"Не удалось добавить контакты. Убедитесь, что загружаете файл формата .csv или vCard.","BTN_CHOOSE_FILE":"или выберите файл","CONTACTS_LIST_MESSAGE_SUCCESS_MOVE":"Контакты перенесены.","CONTACTS_MESSAGE_IN_NOT_CONTACT_ON_GROUP_1":"В группе","CONTACTS_MESSAGE_IN_NOT_CONTACT_ON_GROUP_2":"нет ни одного контакта","HELP_SEARCH":"Поиск в помощи","LETTERS_ON_THEME":"ПИСЬМА НА ТЕМУ","ATTACHMENTS":"Вложения","LETTERS_FROM":"Письма от","YOU":"Вам","RECIPIENT":"Получатель","MESSAGE_PLACEHOLDER_QUICK_REPLAY":"Нажмите здесь, чтобы","REPLAY":"Ответить","FORWARD":"Переслать","TO":"Кому","INPUT_PLACEHOLDER_ENTER_YOUR_MESSAGE":"Введите ваше сообщение","SEND":"Отправить","GO_TO_FULL_ANSWER_FORM":"Перейти в полную форму ответа","OUR_MAIL_TEAM":"Команда Mail.CZ","OR":"или","INBOX_TEMPLATE_TEXT_MESSAGE_THIS_STORED":"В этой папке хранятся шаблоны, которые можно использовать как основу для написания повторяющихся писем","BTN_CREATE_TEMPLATE":"Создать шаблон","SEARCH_RESULT":"Результаты поиска","YOU_IS_NOT_MESSAGE":"У вас нет сообщений","WRITE_LETTERS":"Написать письмо","IN_FOLDERS_NOT_LETTERS_1":"В папке","IN_FOLDERS_NOT_LETTERS_2":"нет писем","GO_TO_INBOX":"Перейти в папку «Входящие»","LETTERS_TAG_NOT_1":"Писем с меткой","LETTERS_TAG_NOT_2":"пока нет","NOT_UNREAD_LETTERS":"Непрочитанных писем нет","LETTERS_TAG_IMPORTANT_IS_NOT":"Писем с меткой «Важные» пока нет","NOT_NOW_SEARCH_LETTERS":"Не нашлось ни одного письма. Попробуйте сформулировать запрос иначе","RECOMMENDATIONS":"Рекоммендации","MAKE_ARE_NOT_ERRORS":"Убедитесь, что в запросе нет ошибок","TRY_LENGTH_QUERY":"Попробуйте уменьшить дилнну запроса","IF_REMEMBER_SENDER_OR_OTHER":"Если вы помните отправителя, получателя, названия файлов или их тип, попробуйте воспользоваться расширеным поиском или языком запросов","TRY_FIND_LETTER_MANUALLY":"Попробуйте найти нужное письмо вручную","LETTERS_BY_MONTH":"Письма по месяцам","FROM_WHOM":"от кого","FROM_WHOM_U":"Oт кого","IS_COPY":"Копия","IS_HIDDEN_COPY":"Скрытая копия","IS_NOT_FIELD_ENTER_ADDRESS":"Поле не заполнено. Необходимо ввести адрес","HIDDEN":"Скрытая","SUBJECT":"Тема","SAVED_AS_DRAFT_IN":"Сохранено как черновик в","NOT_SUBJECT":"Без темы","AN_ATTACHMENT":"в виде вложения","ALL_SETTING":"Все настройки","SETTINGS_ACCOUNTS_MESSAGE_OTHER_MAILS":"Вы можете перенаправлять входящую почту с других ваших почтовых ящиков в ваш ящик на Яндексе. Для этого настройте соединения с вашими почтовыми ящиками на серверах, поддерживающих протокол POP3 или IMAP","CONNECTED_BOXES":"Подключенные ящики","CONNECTED_SUCCESS_COLLECTION_OF_MAILS":"Соединение установленно. Сбор почты начнется в течение нескольких минут","COLLECTION_OF_MAIL":"Забирать почту из ящика","INPUT_PLACEHOLDER_ENTER_EMAIL":"Введите email","INPUT_PLACEHOLDER_ENTER_PASSWORD":"Введите пароль","INPUT_PLACEHOLDER_ENTER_LOGIN":"Введите логин","INPUT_PLACEHOLDER_ENTER_SERVER_ADDRESS":"Введите адрес сервера","INPUT_PLACEHOLDER_ENTER_PORT":"Введите порт","ENABLED_COLLECTOR":"Включить сборщик","BTN_LOAD_CONTACT_0F_FILE":"Загрузить контакты из файла","BTN_SAVE_CONTACT_IN_FILE":"Сохранить контакты в файл","PERSONAL_DATA":"Персональные данные","ACCOUNT_SECURITY":"Безопасность аккаунта","BTN_CHANGE_PASSWORD":"Поменять пароль","BTN_CHANGE_PHONE":"Изменить номер телефона","BTN_CHANGE_EMAIL":"Изменить e-mail","OTHER_SETTINGS":"Другие настройки","DELETE_ACCOUNT":"Удалить аккаунт","SETTINGS_ACCESS_OK":"Разрешить доступ к почтовому ящику с помощью почтовых клиентов","WITH_PROTOCOL_IMAP":"С сервера imap.mail.cz по протоколу IMAP","WITH_PROTOCOL_POP3":"С сервера pop.mail.cz по протоколу POP3","YOUR_SIGNATURE":"Ваши подписи","ADD_SIGNATURE":"Добавить подпись","CREATE_RULE":"Создать правило","INPUT_PLACEHOLDER_NAME_RULE":"Укажите название правила","RULE_ADD_SELECT_FOR_ALL_LETTERS":"ко всем письмам, кроме спама","RULE_ADD_SELECT_IS_ATTACH_0R_NOT":"c вложениями и без вложений","RULE_ADD_SELECT_IS_COINCIDES":"совпадает с","ADD_CONDITION":"Добавить условие","RUN_ACTION":"Выполнить действие","MARK_AS_READ":"Пометить прочитанным","PUT_IN_FOLDER":"Положить в папку","SET_TAG":"Поставить метку","FORWARD_TO":"Переслать по адресу","RULE_ADD_MESSAGE_SAVE_COPY":"сохранить копию при пересылке","RULE_ADD_MESSAGE_NOTIFY_BY_EMAIL":"Уведомить по адресу","RULE_ADD_MESSAGE_WHEN_ACTIVE_RULE":"При активации правил пересылки писем потребуется ввести пароль","RULE_ADD_MESSAGE_REPLY_TEXT":"Ответить следующим текстом","INPUT_PLACEHOLDER_ENTER_MESSAGE_TEXT":"Введите текст сообщения","RULE_ADD_MESSAGE_DONOT_NOT_APPLY_RULE":"Не применять остальные правила","RULE_ADD_MESSAGE_VIEW_LIST_RULES":"Также вы можете","RULE_ADD_MESSAGE_VIEW_LIST_RULES_1":"указать название","RULE_ADD_MESSAGE_VIEW_LIST_RULES_2":"которое будет отображаться в списке правил","BTN_SAVE_CHANGE":"Сохранить изменени","BTN_APPLY_TO_EXISTING_EMAILS":"Применить к существующим письмам","RULES_MESSAGE_IS_HELP_RULES_WE":"С помощью правил вы сможете раскладывать входящую почту по папкам, пересылать письма на другой адрес,получать уведомления о новых письмах, установить автоответчик и даже удалять некоторые письма при получении","RULES_MESSAGE_IS_HELP_RULES_WE_CREATE":"Вы можете создать правило, чтобы","RULES_MESSAGE_IS_HELP_RULES_WE_MOVE":"перемещать письма в отдельную папку","RULES_MESSAGE_IS_HELP_RULES_WE_SELECTED":"отмечать письма определённой меткой","RULES_MESSAGE_IS_HELP_RULES_WE_DELETE":"удалять ненужные письма при получении","YOUR_CREATED_RULES":"Созданные вами правила","RULES_IF_WHOM_OR_COPY":"Если “Кому или копия” совпадают с","RULES_WE_MANAGE_MAILS":"Кроме того, вы можете управлять входящей почтой с помощью черного и белого списков","STORAGE_HEADER":"Выберите тарифный план","PRICE_PLAN":"Kč","MAY_SPACE":"Kč","STORAGE_USED":"Использовано","STORAGE_USED_SPACE":"Свободно","STORAGE_TEXT_1":"Pro rozšíření o","STORAGE_TEXT_2":"1 GB ","STORAGE_TEXT_3":"pošlete SMS ve tvaru","STORAGE_TEXT_4":"na telefonní číslo","STORAGE_TEXT_5":"Cena je","STORAGE_TEXT_6":"Kč","FOOTER":"Футер","FOOTER_LAST_SING_IN":"Последний вход","MAIL":"Почта","All":"Все","TUNE":"настроить","CREATE_GROUP":"Создать группу","MANAGE_ACCOUNT":"Управление аккаунтом","FOLDERS":"Папки","TAGS":"Метки","PROCESSING_RULES":"Правила обработки","MAILS_FROM_OTHER_BOXES":"Почта с других ящиков","SETTINGS_CONTACTS":"Настройки контактов","LANGUAGE":"Язык","CLOCK":"Часы","SETTINGS_MENU_NOTIFIC_RECOMENDATION":"Рекомендуем вам в целях безопасности менять пароль каждые 6 месяцев, а также указать дополнительные данные о себе — это поможет восстановить пароль, если вы его забудете","WRITE":"Написать","CREATE_FOLDER":"Создать папку","UNREAD":"Непрочитанные","WITH_ATTACHMENT":"С Вложением","IMPORTANT":"Важные","CREATE_TAG":"Создать метку","LIST_TAGS":"Список меток","ADD_OTHER_MAIL":"Добавить другой ящик"}');
}]);
})();

(function(module) {
try {
  module = angular.module('app.i18n');
} catch (e) {
  module = angular.module('app.i18n', []);
}
module.run(['$translationCache', function($translationCache) {
  $translationCache.put('app/layout/footer/i18n/RU.json',
    '{"FOOTER":"Футер","FOOTER_LAST_SING_IN":"Последний вход"}');
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
  $translationCache.put('app/layout/menu-contacts/i18n/RU.json',
    '{"All":"Все","TUNE":"настроить","CREATE_GROUP":"Создать группу"}');
}]);
})();

(function(module) {
try {
  module = angular.module('app.i18n');
} catch (e) {
  module = angular.module('app.i18n', []);
}
module.run(['$translationCache', function($translationCache) {
  $translationCache.put('app/layout/menu-settings/i18n/RU.json',
    '{"MANAGE_ACCOUNT":"Управление аккаунтом","FOLDERS":"Папки","TAGS":"Метки","PROCESSING_RULES":"Правила обработки","MAILS_FROM_OTHER_BOXES":"Почта с других ящиков","SETTINGS_CONTACTS":"Настройки контактов","LANGUAGE":"Язык","CLOCK":"Часы","BTN_CHANGE_PASSWORD":"Поменять пароль","SETTINGS_MENU_NOTIFIC_RECOMENDATION":"Рекомендуем вам в целях безопасности менять пароль каждые 6 месяцев, а также указать дополнительные данные о себе — это поможет восстановить пароль, если вы его забудете"}');
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
    '{"WRITE":"Написать","CREATE_FOLDER":"Создать папку","UNREAD":"Непрочитанные","WITH_ATTACHMENT":"С Вложением","IMPORTANT":"Важные","CREATE_TAG":"Создать метку","LIST_TAGS":"Список меток","ADD_OTHER_MAIL":"Добавить другой ящик"}');
}]);
})();

(function(module) {
try {
  module = angular.module('app.i18n');
} catch (e) {
  module = angular.module('app.i18n', []);
}
module.run(['$translationCache', function($translationCache) {
  $translationCache.put('app/layout/menu-contacts/i18n/UA.json',
    '{"MAIL":"Почта","CONTACTS":"Контакти"}');
}]);
})();
