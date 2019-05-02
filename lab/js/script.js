
$(document).ready(function() {
    $menu_icon = $('.menu_icon');

    $modal = $('.modal');
    $modal_close = $('.modal-close');

    $menu_icon.click(function() {
        $modal.addClass('modal--open');
    });

    $modal_close.click(function() {
        $modal.removeClass('modal--open');
    });

});