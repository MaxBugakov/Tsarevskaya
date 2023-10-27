$(document).ready( function(){
    // Выпадающее меню.
    let click_menu_flag=false;
    $(".nav__menu-button").on("click", function() {
        if (click_menu_flag==false) {
            $('#drop-menu').addClass('open-menu');
            click_menu_flag=true;
            $('.test-wrapper').css('z-index', '7');
            var replaced = $("#menu").html().replace('Menu','Close');
            $("#menu").html(replaced);
        }
        else {
            $('#drop-menu').removeClass('open-menu');
            click_menu_flag=false;
            $('.test-wrapper').css('z-index', '-1');
            var replaced = $("#menu").html().replace('Close','Menu');
            $("#menu").html(replaced);
        }
    });
    $(".test-wrapper").on("click", function() {
        $('#drop-menu').removeClass('open-menu');
        click_menu_flag=false;
        $('.test-wrapper').css('z-index', '-1');
        var replaced = $("#menu").html().replace('Close','Menu');
        $("#menu").html(replaced);
    });

    // Анимация логотипа при скроле.
    var logo = $('.nav1__logo');
    var dot = $('.nav1__dot');
    let scroll_flag=false;
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
            dot.css("right", "50%")
            dot.css("transform", "scale(12)")
            scroll_flag=true;
        }
    });

   // Анимация блоков при скроле.
    function onEntry(entry) {
        entry.forEach(change => {
            if (change.isIntersecting) {
                change.target.classList.add('element-show');
            }
        });
    }
    let options = { threshold: [0.5] };
    let observer = new IntersectionObserver(onEntry, options);
    let elements = document.querySelectorAll('.element-animation');
    for (let elm of elements) {
        observer.observe(elm);
    }
   
   // Слайдер.
    $('.single-item').slick({
        infinite: true,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                slidesToShow: 3,
                }
            },
            {
                breakpoint: 480,
                settings: {
                slidesToShow: 1,
                }
            }
        ]
    });
   

});