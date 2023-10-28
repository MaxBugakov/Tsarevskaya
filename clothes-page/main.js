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
    
 
 });