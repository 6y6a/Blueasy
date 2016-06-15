$(document).ready(function(){
    function bluesyMenu() {
        var trigger = $('.toggled'),
            menu = $('.toggle-menu');

        trigger.click(function () {
            $(this).next(menu).slideToggle();
        });

        $(window).resize(function(){
            if ($(window).width() >= 992){
                menu.removeAttr('style');
            }
        });
    }
    bluesyMenu();
});