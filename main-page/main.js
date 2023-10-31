$(document).ready( function(){
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



    let scroll_speed;
    if ($(window).width()>1440) {
        scroll_speed=6000;
    }
    else if ($(window).width()>1024) {
        scroll_speed=5000;
    }
    else if ($(window).width()>768) {
        scroll_speed=4000;
    }
    else if ($(window).width()>425) {
        scroll_speed=3000;
    } else {
        scroll_speed=2000;
    }

    $('.marquee-text').marquee({
        allowCss3Support: true,
        css3easing: 'linear',
        easing: 'linear',
        delayBeforeStart: 0,
        direction: 'left',
        duplicated: false,
        duration: scroll_speed,
        startVisible: false
    });
});