(function () {
    'use strict';

    $(document).ready(function () {

        var $searchInput = $('.search input');
        var $form = $searchInput.parent();
        var $closeSearchBtn = $form.find('.close');
        var $sidebarNavitems = $('.sidebar__nav__item');
        var $tagItems = $('.tag__item');
        var $toggleSearchDropdown = $('[data-action="toggle-search-dropdown"]');
        var $dropBlock = $toggleSearchDropdown.siblings('.search__dropdown');

        function toggleActive($elems, className) {
            $elems.on('click', function (e) {
                var $this = $(this);
                $elems.map(function (index, $el) {
                    return $($el).removeClass(className);
                });
                $this.addClass(className);
            });
        }

        $searchInput.on('focus', function (e) {
            $toggleSearchDropdown.removeClass('hide').addClass('show');
            $closeSearchBtn.removeClass('hide').addClass('show');
            $(this).attr('placeholder', 'Введите текст из письма, его тему или имя отправителя');
            $form.hasClass('active') ? false : $form.addClass('active');
        });

        $closeSearchBtn.on('click', function (e) {
            $toggleSearchDropdown.removeClass('show').addClass('hide');
            $(this).removeClass('show').addClass('hide');
            $searchInput.attr('placeholder', '');
            $form.hasClass('active') ? $form.removeClass('active') : false;
            $dropBlock.hasClass('search__dropdown--active') ? $dropBlock.removeClass('search__dropdown--active') : $dropBlock.addClass('search__dropdown--active');
        });

        $toggleSearchDropdown.on('click', function (e) {
            var className = 'search__dropdown--active';
            var $this = $(this);
            $dropBlock.hasClass(className) ? $dropBlock.removeClass(className) : $dropBlock.addClass(className);
        });

        toggleActive($sidebarNavitems, 'sidebar__nav__item--active');
        toggleActive($tagItems, 'tag__item--active');

    });
})();