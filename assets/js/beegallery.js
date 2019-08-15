$(document).ready(function() {
$('.owl-carousel').owlCarousel({
    singleItem: true,
    items: 1,
    nav: true,
    slideSpeed: 300,
    paginationSpeed: 400,
    loop: true,
    navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"]
});
    let stickyNavTop = $('#mainNav').offset().top;

    let stickyNav = function(){
    let scrollTop = $(window).scrollTop();

    if(scrollTop > stickyNavTop){
         $('#mainNav').addClass('sticky');
    } else {
        $('#mainNav').removeClass('sticky');
    }
};
    stickyNav();
		$(window).scroll(function() {
            stickyNav();
        });

    
      
});