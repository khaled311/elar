$(function() {


    // Toggle open
    $(".sideNav .drop span ,.sideNav .drop> i").on("click", function(e) {
        $(".subMenu").slideToggle();
        $(".drop .arr").toggleClass("open");
        e.stopPropagation();
    });


    // Toggle open
    $(".subMenu > li").on("click", function() {
        $(this).find(".arr-left").toggleClass("open");
    });


    // Toggle open
    // $(".subMenu > li").on("click", function() {
    //     $(this).find(".sub").slideToggle();
    
    // });


    // open Side Nav
    $(".menuTriger").on("click", function() {
        $(this).fadeOut();
        $(".sideNav").toggleClass("open");
        $(".navover").toggleClass("open");
        $("body").css("overflow", "hidden");
    });


    // Close Side Nav
    $(".navover, .close1").on("click", function() {
        if($(".sideNav").hasClass("open")){
            $(".menuTriger").fadeIn();
            $(".navover").removeClass("open");
            $(".sideNav").toggleClass("open");
            $("body").css("overflow", "auto");
        }
    });


    // Arrow
    $(window).on("scroll", function(){
        if($(window).scrollTop() > 2000){
            $(".toTop").addClass("scrolled");
        }else{
            $(".toTop").removeClass("scrolled");
        }
    })

    $(".toTop").on("click", function() {
        $("html, body").animate({
            scrollTop: 0
        }, 1000)
    })

    // Header Slider
    $('.car-sec .owl-carousel').owlCarousel({
        autoplay: true,
        rtl:true,
        loop:true,
        nav:true,
        items: 1,
        dots: true,
        smartSpeed: 1000
    });

    // Disc Slider
    $('.disc .owl-carousel').owlCarousel({
        autoplay: true,
        rtl:true,
        loop:true,
        nav:true,
        items: 5,
        dots: false,
        smartSpeed: 1000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            992:{
                items:3
            },
            1200:{
                items:5
            }
        }
    });

    // Disc Slider
    $('.clients .owl-carousel').owlCarousel({
        autoplay: true,
        rtl:true,
        loop:true,
        nav:true,
        items: 7,
        dots: false,
        smartSpeed: 1000,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:3
            },
            992:{
                items:5
            },
            1200:{
                items:7
            }
        },
        navText: ["<img src='images/arr-right.png'>","<img src='images/arr-left.png'>"]
    });

})