$(document).ready( function(){
    // Выпадающее меню.
    $('.blobk').hover(mouseEnter, mouseLeave);
    function mouseEnter() {
        $('#drop-menu').addClass('open-menu');
        $('#menu div').css('background', 'rgba(0, 0, 0, 0.2)');
        $('.nav').css('background', 'rgba(0, 0, 0, 0.025)')
    };
    function mouseLeave() {
        $('#drop-menu').removeClass('open-menu');
        $('#menu div').css('background', 'rgba(0, 0, 0, 0.0)');
        $('.nav').css('background', 'rgba(0, 0, 0, 0)')
    };

    // Цвет навигации при наведении на корзину.
    $('#shopping-bag').hover(mouseEnter1, mouseLeave1);
    function mouseEnter1() {
        $('.nav').css('background', 'rgba(0, 0, 0, 0.025)')
    };
    function mouseLeave1() {
        $('.nav').css('background', 'rgba(0, 0, 0, 0)')
    };

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
                breakpoint: 768,
                settings: {
                slidesToShow: 2,
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