(function ($) {
    'use strict';

    var $window = $(window);

    // :: Preloader Active Code
    $window.on('load', function () {
        $('#preloader').fadeOut('slow', function () {
            $(this).remove();
        });
    });


    // :: Fullscreen Active Code
    $window.on('resizeEnd', function () {
        $(".window-height").height($window.height());
    });

    $window.on('resize', function () {
        if (this.resizeTO) clearTimeout(this.resizeTO);
        this.resizeTO = setTimeout(function () {
            $(this).trigger('resizeEnd');
        }, 300);
    }).trigger("resize");


    // :: Nav Active Code
    $('#classyNav').classyNav({
        stickyNav: true,
        theme: "dark"
    });

    // :: Owl Carousel Active JS
    if ($.fn.owlCarousel) {

        var welcomeSlider = $('.welcome_slides');

        welcomeSlider.owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            smartSpeed: 1500,
            nav: true,
            navText: ["<i class='icofont icofont-arrow-left'</i>", "<i class='icofont icofont-arrow-right'</i>"],
            dots: true,
            animateIn: 'fadeIn',
            animateOut: 'fadeOut'
        })

        welcomeSlider.on('translate.owl.carousel', function () {
            var layer = $("[data-animation]");
            layer.each(function () {
                var anim_name = $(this).data('animation');
                $(this).removeClass('animated ' + anim_name).css('opacity', '0');
            });
        });

        $("[data-delay]").each(function () {
            var anim_del = $(this).data('delay');
            $(this).css('animation-delay', anim_del);
        });

        $("[data-duration]").each(function () {
            var anim_dur = $(this).data('duration');
            $(this).css('animation-duration', anim_dur);
        });

        welcomeSlider.on('translated.owl.carousel', function () {
            var layer = welcomeSlider.find('.owl-item.active').find("[data-animation]");
            layer.each(function () {
                var anim_name = $(this).data('animation');
                $(this).addClass('animated ' + anim_name).css('opacity', '1');
            });
        });

        $(".client_slides").owlCarousel({
            items: 3,
            loop: true,
            autoplay: true,
            smartSpeed: 700,
            margin: 15,
            center: true,
            nav: true,
            navText: ["<i class='pe-7s-angle-left'</i>", "<i class='pe-7s-angle-right'</i>"],
            dots: true,
            responsive: {
                320: {
                    items: 1
                },
                576: {
                    items: 2
                },
                1200: {
                    items: 3
                }
            }
        });
    }

    // :: ScrollUp Active JS
    if ($.fn.scrollUp) {
        $.scrollUp({
            scrollSpeed: 1500,
            scrollText: '<i class="fa fa-angle-up"></i>'
        });
    }

    // :: onePageNav Active JS
    if ($.fn.onePageNav) {
        $('#nav').onePageNav({
            currentClass: 'active',
            scrollSpeed: 1500,
            easing: 'easeOutQuad'
        });
    }

    // :: CounterUp Active JS
    if ($.fn.counterUp) {
        $('.counter').counterUp({
            delay: 10,
            time: 2000
        });
    }

    // :: matchHeight Active JS
    if ($.fn.matchHeight) {
        $('.equal-height').matchHeight();
    }

    // ::Magnific-popup Video Active Code
    if ($.fn.magnificPopup) {
        $('.video_button').magnificPopup({
            disableOn: 0,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: true,
            fixedContentPos: false
        });
        $('.gallery_img').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            },
            removalDelay: 300,
            mainClass: 'mfp-fade',
            preloader: true
        });
    }

    // :: Wow Active Code
    if ($window.width() > 767) {
        new WOW().init();
    }

    // :: Jarallax Active JS
    if ($.fn.jarallax) {
        $('.jarallax').jarallax({
            speed: 0.2
        });
    }

    // :: PreventDefault a Click
    $("a[href='#']").on('click', function ($) {
        $.preventDefault();
    });

})(jQuery);