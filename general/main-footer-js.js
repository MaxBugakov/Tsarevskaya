$(document).ready( function(){
    // Выпадающее меню.
    let click_menu_flag=false;
    // Переменная для корректной анимации меню.
    let continue_menu_animation=false;
    $(".nav__menu-button").on("click", function() {
        if (continue_menu_animation==false) {
            if (click_menu_flag==false) {
                continue_menu_animation=true;
                $('#drop-menu').addClass('open-menu');
                setTimeout(() => { $('.drop-menu-wrapper').addClass('open-menu-animation'); }, 1);
                setTimeout(() => { $('.drop-menu-first-wrapper').addClass('open-menu-animation2'); }, 1);
                setTimeout(() => { $('.drop-menu-second-wrapper').addClass('open-menu-animation2'); }, 1);
                click_menu_flag=true;
                $('.test-wrapper').css('z-index', '7');
                var replaced = $("#menu").html().replace('Menu','Close');
                $("#menu").html(replaced);
                setTimeout(() => { continue_menu_animation=false; }, 300);
            }
            else {
                continue_menu_animation=true;
                $('.drop-menu-wrapper').removeClass('open-menu-animation');
                $('.drop-menu-first-wrapper').removeClass('open-menu-animation2');
                $('.drop-menu-second-wrapper').removeClass('open-menu-animation2');
                setTimeout(() => { $('#drop-menu').removeClass('open-menu'); }, 300);
                click_menu_flag=false;
                $('.test-wrapper').css('z-index', '-1');
                var replaced = $("#menu").html().replace('Close','Menu');
                $("#menu").html(replaced);
                setTimeout(() => { continue_menu_animation=false; }, 300);
            }
        }
    });
    $(".test-wrapper").on("click", function() {
        continue_menu_animation=true;
        $('.drop-menu-wrapper').removeClass('open-menu-animation');
        $('.drop-menu-first-wrapper').removeClass('open-menu-animation2');
        $('.drop-menu-second-wrapper').removeClass('open-menu-animation2');
        setTimeout(() => { $('#drop-menu').removeClass('open-menu'); }, 300);
        click_menu_flag=false;
        $('.test-wrapper').css('z-index', '-1');
        var replaced = $("#menu").html().replace('Close','Menu');
        $("#menu").html(replaced);
        setTimeout(() => { continue_menu_animation=false; }, 300);
    });
    // Анимация логотипа при скроле.
    var logo = $('.nav1__logo');
    var dot = $('.nav1__dot');
    let scroll_flag=false;
    if ($(window).width()>425) {
        $(document).scroll(function() {
            if (scroll_flag==true && $(this).scrollTop()<=100) {
                logo.css("bottom", "0px");
                dot.css("bottom", "19px");
                dot.css("right", "1px")
                dot.css("transform", "scale(1)")
                scroll_flag=false;
            }
            if ($(this).scrollTop()>100 && scroll_flag==false) {
                logo.css("bottom", "50px");
                dot.css("bottom", "calc(50% - 2px)");
                dot.css("right", "calc(50% - 2px)")
                dot.css("transform", "scale(12)")
                scroll_flag=true;
            }
        });
    } else {
        dot.css("width", "3px");
        dot.css("height", "3px");
        dot.css("bottom", "21px");
        $(document).scroll(function() {
            if (scroll_flag==true && $(this).scrollTop()<=100) {
                logo.css("bottom", "0px");
                dot.css("bottom", "21px");
                dot.css("right", "1px")
                dot.css("transform", "scale(1)")
                scroll_flag=false;
            }
            if ($(this).scrollTop()>100 && scroll_flag==false) {
                logo.css("bottom", "50px");
                dot.css("bottom", "calc(50% - 1px)");
                dot.css("right", "calc(50% - 1px)")
                dot.css("transform", "scale(14)")
                scroll_flag=true;
            }
        });
    }
    
});