$(document).ready(function () {
    var owl = $("#owl-demo");

    owl.owlCarousel({
        items: 10, //10 items above 1000px browser width
        itemsDesktop: [1000, 5], //5 items between 1000px and 901px
        itemsDesktopSmall: [900, 3], // betweem 900px and 601px
        itemsTablet: [600, 2], //2 items between 600 and 0
        itemsMobile: false // itemsMobile disabled - inherit from itemsTablet option
    });



    $(".owl-carousel").owlCarousel({
        autoplay: true,
        //   autoWidth: true,
        loop: true,
        autoplayTimeout: 5000,
        // autoplayHoverPause: true,
        slideBy: 2,


        responsive: {
            0: {
                items: 1,
                slideBy: 1,
                
            },
            425: {
                items: 2,
                slideBy: 1,
            },
            760: {
                items: 3,
                slideBy: 1,
            },
            1000: {
                items: 4,
            },
        }
    });
});