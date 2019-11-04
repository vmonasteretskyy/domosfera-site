$(document).ready(function () {
    $('.restoran-body').hover(function(){
        $(this).children('.restoran-dark').children('.restoran-desc').css({"height": "35%"}, {"margin-bottom": "60px"});
        $(this).children('.restoran-dark').children('.new_slidelink').css({"height": "20%"}, {"margin-bottom": "30px"} );
        $(this).children('.restoran-dark').css({"background": "rgba(0, 0, 0, 0.7)"});             
    },
    function(){
        $(this).children('.restoran-dark').children('.restoran-desc').css({"height": "0"});
        $(this).children('.restoran-dark').children('.new_slidelink').css({"height": "0"});
        $(this).children('.restoran-dark').css({"background": "rgba(0, 0, 0, 0.5)"});          
    });
});


$(document).ready(function () {
    $('.restoran-sliders.restoran-adapt').slick({
        arrows: true,
        dots: false,
        infinite: true,
        slidesToShow: 1,
        variableWidth: true,
        prevArrow: '<button type="button" class="slick-prev"><span class="mdi mdi-chevron-left"></span></button>',
        nextArrow: '<button type="button" class="slick-next"><span class="mdi mdi-chevron-right"></span></button>',
        responsive: [
            {
                breakpoint: 1024.8,
                settings: "unslick"
            }
        ]
    });

    $('.restoran-sliders.hub-slider').slick({
        arrows: true,
        dots: false,
        infinite: true,
        slidesToShow: 1,
        variableWidth: true,
        prevArrow: '<button type="button" class="slick-prev"><span class="mdi mdi-chevron-left"></span></button>',
        nextArrow: '<button type="button" class="slick-next"><span class="mdi mdi-chevron-right"></span></button>',
    });
    
    

    var leftmarg = (($(window).width() - $('.container').width()) / 2) - 45;
    $('.restoran-sliders').css('padding-left', leftmarg);
    if ($(window).width() < 1025) {
        var leftmarg = (($(window).width() - $('.container').width()) / 2);
        $('.restoran-sliders').css('padding-left', leftmarg);
        $('.restoran-sliders').css('padding-right', leftmarg);
    }

    // news slider arrow
    $('.restoran .slick-next.slick-arrow').css('right', leftmarg - 100);
    $('.restoran .slick-prev.slick-arrow').css('right', leftmarg - 75);
    if ($(window).width() < 1300) {
        $('.restoran .slick-next.slick-arrow').css('right', leftmarg - 80);
        $('.restoran .slick-prev.slick-arrow').css('right', leftmarg - 60);
    }
    if ($(window).width() < 1025) {
        $('.restoran .slick-next.slick-arrow').css('right', leftmarg - 20);
        $('.restoran .slick-prev.slick-arrow').css('right', leftmarg - 00);
    }
    if ($(window).width() < 576) {
        var leftmarg = (($(window).width() - $('.container').width()) / 2);
        $('.restoran-slider').css('padding-left', leftmarg);
    }
    if ($(window).height() < 501) {
        var leftmarg = (($(window).width() - $('.container').width()) / 2);
        $('.restoran-slider').css('padding-left', leftmarg);
    }

    $(window).resize(function () {
        var leftmarg = (($(window).width() - $('.container').width()) / 2) - 45;
        $('.restoran-sliders').css('padding-left', leftmarg);
        if ($(window).width() < 1025) {
            var leftmarg = (($(window).width() - $('.container').width()) / 2);
            $('.restoran-sliders').css('padding-left', leftmarg);
            $('.restoran-sliders').css('padding-right', leftmarg);
        }

        // news slider arrow
        $('.restoran .slick-next.slick-arrow').css('right', leftmarg - 10);
        $('.restoran .slick-prev.slick-arrow').css('right', leftmarg + 25);
        if ($(window).width() < 1300) {
            $('.restoran .slick-next.slick-arrow').css('right', leftmarg - 0);
            $('.restoran .slick-prev.slick-arrow').css('right', leftmarg + 30);
        }
        // if ($(window).width() < 576) {
        //     var leftmarg = (($(window).width() - $('.container').width()) / 2);
        //     $('.restoran-slider').css('padding-left', leftmarg);
        // }

        if ($(window).width() < 576) {
            var leftmarg = (($(window).width() - $('.container').width()) / 2);
            $('.restoran-slider').css('padding-left', leftmarg);
        }
        if ($(window).height() < 501) {
            var leftmarg = (($(window).width() - $('.container').width()) / 2);
            $('.restoran-slider').css('padding-left', leftmarg);
        }

    });

    $('.outlet-sliders').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.outlet-min-sliders'
      });
      $('.outlet-min-sliders').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.outlet-sliders',
        dots: false,
        arrows: true,
        infinite: true,
        // centerMode: true,
        variableWidth: true,
        focusOnSelect: true,
        prevArrow: '<button type="button" class="slick-prev"><span class="mdi mdi-trending-neutral"></span></button>',
        nextArrow: '<button type="button" class="slick-next"><span class="mdi mdi-trending-neutral"></span></button>',
      });
      

      $('.show-btn a').click(function(){
        $('.more-text').show(300);
        $('.shadow-text').hide(300);
        $('.show-btn').css("display", "none");
        $('.hide-btn').css("display", "block");
      });
      $('.hide-btn a').click(function(){
        $('.more-text').hide(300);
        $('.shadow-text').show(300);
        $('.show-btn').css("display", "block");
        $('.hide-btn').css("display", "none");
      });

      $('.hub-long-slider .restoran-body .new_slidelink a').click(function(){
        $('.outlet-sliders.hub-modals').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.outlet-min-sliders'
          });
          $('.outlet-min-sliders').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.outlet-sliders.hub-modals',
            dots: false,
            arrows: true,
            infinite: true,
            // centerMode: true,
            variableWidth: true,
            focusOnSelect: true,
            prevArrow: '<button type="button" class="slick-prev"><span class="mdi mdi-trending-neutral"></span></button>',
            nextArrow: '<button type="button" class="slick-next"><span class="mdi mdi-trending-neutral"></span></button>',
          });
    });

});

$(document).ready(function () {
    // $('.accordion button').click(function(){
    //     $('.card-header').removeClass('active');
    //     $(this).parents().addClass('active');
    // });

    $('.card').click(function () {
        $('.card').not($(this)).children('.card-header').removeClass('active');
        $(this).children('.card-header').toggleClass('active');
    });


    $('.outlet-sliders .outlet-slider img').click(function () {
        $('#gallery').fadeIn();
    });
    $('#gallery span.mdi').click(function () {
        $('#gallery').fadeOut();
    });
});


function openDesc(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("outlet-single-text");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

function openFloor(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("floor-block");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("floorlink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}