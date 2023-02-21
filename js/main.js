$(document).ready(($) => {
    // 'use strict';

    // Scrollax
    $.Scrollax();

    //////////////////////////////////////////////////
    //////////////////////////////////////////////////

    // Fixed Navbar
    const nav_offset_top = $('header').height() + 50;

    const navbarFixed = () => {
        if ($('.header_section').length) {
            $(window).scroll(() => {
                let scroll = $(window).scrollTop();
                if (scroll >= nav_offset_top) {
                    $('.header_section').addClass('navbar_fixed');
                } else {
                    $('.header_section').removeClass('navbar_fixed');
                }
            });
        };
    };

    navbarFixed();

    //////////////////////////////////////////////////
    //////////////////////////////////////////////////

    // loader
    const loader = () => {
        setTimeout(() => {
            if ($('.loader').length > 0) {
                $('.loader').removeClass('show');
                setTimeout(() => {
                    $('.loader').hide();
                }, 250);
            }
        }, 500);
    };

    loader();

    //////////////////////////////////////////////////
    //////////////////////////////////////////////////

    // Animation entry on down scrolling
    const counter = () => {
        $('#section-counter').waypoint(function (direction) {
            if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {
                const comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
                $('.number').each(function () {
                    const $this = $(this),
                    num = $this.data('number');
                    console.log(num);
                    $this.animateNumber(
                        {
                            number: num,
                            numberStep: comma_separator_number_step
                        }, 7000
                    );
                });
            }
        }, { offset: '95%' });
    };

    counter();

    const contentWayPoint = () => {
        let i = 0;
        $('.animation').waypoint(function (direction) {
            if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {
                i++;

                $(this.element).addClass('item-animate');
                setTimeout(() => {
                    $('body .animation.item-animate').each(function (k) {
                        let el = $(this);
                        setTimeout(function () {
                            let effect = el.data('animate-effect');
                            if (effect === 'fadeIn') {
                                el.addClass('fadeIn ftco-animated');
                            } else if (effect === 'fadeInLeft') {
                                el.addClass('fadeInLeft ftco-animated');
                            } else if (effect === 'fadeInRight') {
                                el.addClass('fadeInRight ftco-animated');
                            } else {
                                el.addClass('fadeInUp ftco-animated');
                            }
                            el.removeClass('item-animate');
                        }, k * 50, 'easeInOutExpo');
                    });
                }, 100);
            }
        }, { offset: '95%' });
    };

    contentWayPoint();

    //////////////////////////////////////////////////
    //////////////////////////////////////////////////

    // var pageProgress = function () {
    //     $(window).scroll(function () {
    //         var wintop = $(window).scrollTop(), docheight = $('.page').height(), winheight = $(window).height();
    //         // console.log(wintop);
    //         var totalScroll = (wintop / (docheight - winheight)) * 100;
    //         // console.log('total scroll' + totalScroll);
    //         $('.KW_progressBar').css('width', totalScroll + '%');
    //     });

    // };
    // pageProgress();

    $('.portfolio-filter ul li').on('click', function () {
        $('.portfolio-filter ul li').removeClass('active');
        $(this).addClass('active');
        const data = $(this).attr('data-filter');
        $workGrid.isotope({ filter: data });
    });
    if (document.getElementById('portfolio')) {
        var $workGrid = $('.portfolio-grid').isotope({
            itemSelector: '.all',
            percentPosition: true,
            masonry: { columnWidth: '.grid-sizer' }
        });
    };

    //////////////////////////////////////////////////
    //////////////////////////////////////////////////

    // Owl-Carousel
    if ($('.references-slider').length) {
        $('.references-slider').owlCarousel({
            // animateOut: 'fadeOut',
            // animateIn: 'fadeIn',
            loop: false,
            margin: 30,
            items: 1,
            autoplay: false,
            smartSpeed: 2500,
            dots: true
        });
    };

    $('.brand-carousel').owlCarousel({
        items: 1,
        autoplay: false,
        loop: true,
        nav: false,
        margin: 30,
        dots: false,
        responsive: {
            0: {
                items: 1,
            },
            420: {
                items: 1,
            },
            480: { items: 3, },
            768: { items: 3, },
            992: { items: 5, }
        }
    });

    //////////////////////////////////////////////////
    //////////////////////////////////////////////////

    const onScroll = () => {
        const scrollPos = $(document).scrollTop();
        $('#navbar-menu a').each(function () {
            const currLink = $(this);
            const refElement = $(currLink.attr('href'));
            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $('#navbar-menu ul li a').parent().removeClass('active');
                currLink.parent().addClass('active');
            };
        });
    };

    // Navbar Active Change Onscroll
    $(document).on('scroll', onScroll);

    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off('scroll');

        $('#navbar-menu a').each(function () {
            console.log($(this).parent())
            $(this).parent().removeClass('active');
        })
        $(this).parent().addClass('active');

        const target = this.hash,
        $target = $(target);
        console.log($target)
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top + 2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on('scroll', onScroll);
        });
    });

    //////////////////////////////////////////////////
    //////////////////////////////////////////////////

    // Experienced year
    const diff_years = (dt2, dt1) => {
        let diff = (dt2.getTime() - dt1.getTime()) / 1000;
        diff /= (60 * 60 * 24);
        return Math.abs(Math.round(diff / 365.25));
    }

    dt1 = new Date('March 16, 2020 09:00:00');
    dt2 = new Date();

    yearExpierenced.innerHTML = (diff_years(dt1, dt2));

    //////////////////////////////////////////////////
    //////////////////////////////////////////////////

    $('#submitButton').on('click', () => {
        $('#submitButton').prop("disabled", true);
        $('#subject').val('');
        $('#message').val('');
        $('#name').val('');
        $('#email').val('');
        $('#alertMessage').text('Thank you for your message. I will contact you back soon ;)');

        setTimeout(() => {
            $('#alertMessage').text('');
            $('#submitButton').prop("disabled", false);
        }, 5000);
    });
});