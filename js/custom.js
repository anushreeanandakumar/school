/*global $, document, window
 */
$(document).ready(function ($) {
    'use strict';

    /*-----------------------------------
    Navbar
    -----------------------------------*/
    $('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
      var $el = $(this);
      var $parent = $(this).offsetParent(".dropdown-menu");
      if (!$(this).next().hasClass('show')) {
        $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
      }
      var $subMenu = $(this).next(".dropdown-menu");
      $subMenu.toggleClass('show');
      
      $(this).parent("li").toggleClass('show');

      $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function (e) {
        $('.dropdown-menu .show').removeClass("show");
      });
      
      if (!$parent.parent().hasClass('navbar-nav')) {
        $el.next().css({"top": $el[0].offsetTop, "left": $parent.outerWidth() - 4});
      }

      return false;

    });

    if($(window).width() < 991) {
      $(document).on('click', function(event) {
        var clickover = $(event.target);
        var _opened = $('#navbarSupportedContent').hasClass('show');
        if(_opened === true && !(clickover.is('.navbar-nav li, .navbar-search, .navbar-search *, .navbar-nav .dropdown *'))) {
          $('button.navbar-toggler').trigger('click');
        }
      });
    }

    /*-------------------------------------
    Nav Fixed
    -------------------------------------*/

    $(window).on('scroll', function () {
      var scroll = $(window).scrollTop();

      if (scroll >= 1) {
        $('.fixed-nav').addClass('fixed');
      } else {
        $('.fixed-nav').removeClass('fixed');
      }
    });


    /*-------------------------------------
    Language Toggle
    -------------------------------------*/
    function languageTogg() {
        if ($('#languageToggle').length > 0) {
            $('#languageToggle').on('click', function () {
                $('#language-select').slideToggle();
            });

            $(document).on('click', function (event) {
                var clickover = $(event.target);
                var _opened = $("#language-select").is(':visible');
                if (_opened === true && !(clickover.is('#languageToggle'))) {
                    $("#languageToggle").trigger('click');
                }
            });

            $("#languageToggle *").on('click', function (e) {
                e.stopPropagation();
            });
        }
    }

    languageTogg();

    /*-------------------------------------
    Header Search Toggle
    -------------------------------------*/
    function searchToggle() {
        if ($(window).width() > 991) {
            $('#navbar-search-toggle').unbind('click');
            $('#navbar-search-toggle').on('click', function () {
                $(this).children('.fa').toggleClass('fa-search fa-close');
                $('#navbar-searchform').slideToggle();
            });

            $(document).on('click', function (event) {
                var clickover = $(event.target);
                var _opened = $("#navbar-searchform").is(':visible');
                if (_opened === true && !(clickover.is('#navbar-search-toggle, #navbar-search-toggle *, #navbar-searchform, #navbar-searchform *'))) {
                    $("#navbar-search-toggle").trigger('click');
                }
            });
        }
    }

    searchToggle();

    /*-------------------------------------
    Generic Isotope
    -------------------------------------*/
    var $grid = $('.elh-grid').isotope({
        // options...
        itemSelector: '.elh-grid-item',
        // layoutMode:'fitRows'
    });

    $grid.imagesLoaded().progress(function () {
        $grid.isotope('layout');
    });


    $('.elh-grid-filter button').click(function(){
       $('.elh-grid-filter button').removeClass('active');
       $(this).addClass('active');
       var selector=$(this).attr('data-filter');
       $('.elh-grid').isotope({
         filter:selector
       });
       return false;
    });


    /*-------------------------------------
    Banner Slider
    -------------------------------------*/
    $('.banner-bg-slider').owlCarousel({
      loop:true,
      items: 1,
      autoplay: true,
      dots: false,
      nav:false,
    });

    $('.banner-slider').owlCarousel({
      loop:true,
      items: 1,
      autoplay: true,
      dots: false,
      nav: true,
      navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    });

    /*-------------------------------------
    Generic Carousel
    -------------------------------------*/

    $('.elh-generic-carousel').owlCarousel({
      loop:true,
      autoplay: true,
      autoplayHoverPause: true,
      dots: false,
      nav:true,
      navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
      margin: 30,
      responsive:{
        0:{
          items:1
        },
        768:{
          items:2
        },
        992: {
          items:3
        }
      }
    })

    $('.instructor-comment-carousel').owlCarousel({
        loop:true,
        items: 1,
        autoplay: true,
        autoplayHoverPause: true,
        dots: false,
        nav:false,
    });

    /*-------------------------------------
    Single Carousel
    -------------------------------------*/
    $('.elh-single-carousel').owlCarousel({
      loop:true,
      items: 1,
      autoplay: true,
      dots: false,
      nav: true,
      navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    });

    /*-------------------------------------
    Gallery Carousel
    -------------------------------------*/
    $('.elh-gallery-carousel').owlCarousel({
      loop:true,
      autoplay: true,
      autoplayHoverPause: true,
      dots: false,
      nav:false,
      items: 5,
      responsive:{
        0:{
          items:1
        },
        479:{
          items:2
        },
        991:{
          items:3
        },
        1199: {
          items:5
        }
      }
    });

    /*-------------------------------------
    Country Flag Carousel
    -------------------------------------*/
    $('.elh-country-flag-slider').owlCarousel({
        loop:true,
        autoplay: true,
        autoplayHoverPause: true,
        dots: false,
        nav:false,
        // items: 5,
        margin: 80,
        responsive:{
          0:{
            items:2,
            margin: 30
          },
          379:{
            items:3,
            margin: 20
          },
          479:{
            items:3,
            margin: 50
          },
          768:{
            items:4
          },
          991: {
            items:5
          },
          1199: {
            items: 6
          }
        }
    });

    /*-------------------------------------
    Instructors Carousel
    -------------------------------------*/
    $('.elh-instructor-carousel').owlCarousel({
        loop: true,
        autoplayHoverPause: true,
        autoplay: true,
        dots: false,
        nav: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive:{
          0:{
            items:1
          },
          440:{
            items:2
          },
          768:{
            items: 3
          },
          1199: {
            items: 4
          }
        }
    });

    /*-------------------------------------
    Testimonial Slick Carousel
    -------------------------------------*/
    $('.elh-testimonial-main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.elh-testimonial-nav-thumbs'
    });
    $('.elh-testimonial-nav-thumbs').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.elh-testimonial-main',
        dots: false,
        focusOnSelect: true,
        centerMode: true,
        centerPadding: '0px',
        arrows: false,
    });

    /*-------------------------------------
    Single Product Gallery
    -------------------------------------*/
    $('.elh-single-product-gallery').owlCarousel({
        loop:true,
        items: 1,
        autoplay: true,
        dots: false,
        nav: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    });

    /*-------------------------------------
    Count To
    -------------------------------------*/
    function animateCountTo(ct) {
        if ($.fn.visible && $(ct).visible() && !$(ct).hasClass('animated')) {
            $(ct).countTo({
                speed: 2000
            });
            $(ct).addClass('animated');
        }
    }

    function initCountTo() {
        var counter = $('.elh-count');
        counter.each(function () {
            animateCountTo(this);
        });
    }

    initCountTo();

    /*-------------------------------------
    Count Down
    -------------------------------------*/
    $('.countdown').each(function () {
        var endTime = $(this).data('time');
        $(this).countdown(endTime, function (tm) {
            var countTxt = '';
            countTxt += '<span class="section_count"><span class="section_count_data"><span class="count-data"><span class="tcount days">%D </span><span class="text">Days</span></span></span></span>';
            countTxt += '<span class="section_count"><span class="section_count_data"><span class="count-data"><span class="tcount hours">%H</span><span class="text">Hours</span></span></span></span>';
            countTxt += '<span class="section_count"><span class="section_count_data"><span class="count-data"><span class="tcount minutes">%M</span><span class="text">Minutes</span></span></span></span>';
            countTxt += '<span class="section_count"><span class="section_count_data"><span class="count-data"><span class="tcount seconds">%S</span><span class="text">Seconds</span></span></span></span>';

            $(this).html(tm.strftime(countTxt));
        });
    });

    /*--------------------------------------
    Plyr Video
    ---------------------------------------*/
    var player = new Plyr('#player');

    /*-------------------------------------
    Magnific Popup
    -------------------------------------*/
    $('.image-large, .elh-gallery').magnificPopup({
        type: 'image',
        delegate: 'a',
        gallery: {
            enabled: true
        }
    });
    $('.video-play, .open-map').magnificPopup({
        type: 'iframe'
    });
    $.extend(true, $.magnificPopup.defaults, {
        iframe: {
            patterns: {
                youtube: {
                    index: 'youtube.com/',
                    id: 'v=',
                    src: 'https://www.youtube.com/embed/%id%?autoplay=1'
                },
                vimeo: {
                    index: 'vimeo.com/',
                    id: '/',
                    src: '//player.vimeo.com/video/%id%?autoplay=1'
                },
                gmaps: {
                    index: '//maps.google.',
                    src: '%id%&output=embed'
                }
            }
        }
    });

    /*-------------------------------------
    Rating Form
    -------------------------------------*/
    function ratingChange(rc) {
        $('.elh-rating-inputs label').removeClass('elh-rate-on');
        $(rc).parent('label').prevAll().addBack().addClass('elh-rate-on');
    }
    $('input[name=rate-value]').on('click', function () {
        ratingChange(this);
    });

    /*-------------------------------------
    Sidebar Affix
    -------------------------------------*/
    if ($('#sidebar-affix').length > 0) {
        $('#sidebar-affix').affix({
            offset: {
                top: function () {
                    return (this.top = $('#course-sidebar').offset().top);
                },
                bottom: function () {
                    return (this.bottom = $('body').height() - $('#course-sidebar').offset().top - $('#elh-course-container').outerHeight(true));
                }
            }
        });
    }
    
    /*-----------------------------------
    Contact Form
    -----------------------------------*/
    // Function for email address validation
    function isValidEmail(emailAddress) {
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

        return pattern.test(emailAddress);

    }
    $("#contactForm").on('submit', function (e) {
        e.preventDefault();
        var data = {
            name: $("#name").val(),
            email: $("#email").val(),
            phone: $("#phone").val(),
            phone: $("#subject").val(),
            message: $("#message").val()
        };

        if (isValidEmail(data['email']) && (data['message'].length > 1) && (data['name'].length > 1) && (data['phone'].length > 1) && (data['phone'].length > 1)) {
            $.ajax({
                type: "POST",
                url: "sendmail.php",
                data: data,
                success: function () {
                    $('#contactForm .input-success').delay(500).fadeIn(1000);
                    $('#contactForm .input-error').fadeOut(500);
                }
            });
        } else {
            $('#contactForm .input-error').delay(500).fadeIn(1000);
            $('#contactForm .input-success').fadeOut(500);
        }

        return false;
    });
    
    /*-----------------------------------
    Subscription
    -----------------------------------*/
    $(".elh-subscribe-form").ajaxChimp({
        callback: mailchimpResponse,
        url: "http://codepassenger.us10.list-manage.com/subscribe/post?u=6b2e008d85f125cf2eb2b40e9&id=6083876991" // Replace your mailchimp post url inside double quote "".  
    });

    function mailchimpResponse(resp) {
        if (resp.result === 'success') {

            $('.newsletter-success').html(resp.msg).fadeIn().delay(3000).fadeOut();

        } else if (resp.result === 'error') {
            $('.newsletter-error').html(resp.msg).fadeIn().delay(3000).fadeOut();
        }
    }


    /*-------------------------------------
    Lesson Page
    -------------------------------------*/

    /*** Lesson show and hide ***/
    function lessonShowHide() {
        $('#lessonListWrap').toggleClass('lesson-list-showing');
    }

    $('#lessonListToggle').on('click', function () {
        lessonShowHide();
        $(this).children('.fa').toggleClass('fa-list fa-close');
        $('#lessonContent .plyr-video').css('max-width', $(window).height() * 1.7776);
    });

    $('#lessonContent .plyr-video').css('max-width', $(window).height() * 1.7776);
    
    var nlTimer;
    $('#lessonContentWrap').on('mousemove', function () {
        $('#navbar-lesson').addClass('show-navbar-lesson');
        try {
            clearTimeout(nlTimer);
        } catch (e) {}
        nlTimer = setTimeout(function () {
            $('#navbar-lesson').removeClass('show-navbar-lesson');
        }, 2000);
    });

    $('#lessonContentWrap').on('mouseout', function () {
        $('#navbar-lesson').removeClass('show-navbar-lesson');
    });


    /*** Lesson Change ***/
    function lessonVidChange(lessonVid) {
        var elhVidId = $(lessonVid).data('elhvideo');
        if ($(lessonVid).data('elhvidtype') == 'vimeo') {
            $('#lessonPlayer').html('<div id="player" data-plyr-provider="vimeo" data-plyr-embed-id="' + elhVidId + '"></div>');
        } else if ($(lessonVid).data('elhvidtype') == 'youtube') {
            $('#lessonPlayer').html('<div id="player" data-plyr-provider="youtube" data-plyr-embed-id="' + elhVidId + '"></div>');
        } else {
            $('#lessonPlayer').html('<video controls><source src="' + elhVidId + '" type="video/mp4"></video>');
        }
        var player = new Plyr('#player');
    }

    $('#lessonListWrap .elh-lesson-item > a').on('click', function (lessonClick) {
        lessonClick.preventDefault();
        lessonVidChange(this);
        $('#lessonListWrap .elh-lesson-item > a').removeClass('running-lesson');
        $(this).addClass('running-lesson');
    });

    lessonVidChange('#lessonListWrap .elh-lesson-item > .running-lesson');

    /*-------------------------------------
    Window Events
    -------------------------------------*/
    $(window).on('scroll', function () {
        initCountTo();
    });

    $(window).on('resize orientationchange', function () {
        $('#lessonContent .plyr-video').css('max-width', $(window).height() * 1.7776);
    });
});
