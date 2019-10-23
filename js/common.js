$(document).ready(function () {
    // animation init
    new WOW().init();
    // formstyler
    $(function () {
        $('.footer__checkfield input, select').styler();
    });
    // main slider
    $('.mainslider__sect').slick({
        arrows: false,
        slidesToShow: 1,
        dots: true,
        fade: true,
        asNavFor: '.mainsliderlittle__sect',
        // autoplay: true,
        autoplaySpeed: 8000,
    });

    // main slider (little)

    var $slickElement = $('.mainsliderlittle__sect');
    $slickElement.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.mainslider__sect',
        arrows: true,
        nextArrow: '<button type="button" class="slick-next"></button>',
        fade: true,
        dotsClass: 'custom_paging',
        focusOnSelect: true,
    });

    $('.mainsliderlittle__sect .slick-next.slick-arrow').mouseover(function () {
        $('.mainsliderlittle__cont .picbox').css('margin-left', '20px');
    });
    $('.mainsliderlittle__sect .slick-next.slick-arrow').mouseleave(function () {
        $('.mainsliderlittle__cont .picbox').css('margin-left', '0px');
    });


    // news slider

    $('.news-slider').slick({
        arrows: true,
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 2500,
        prevArrow: '<button type="button" class="slick-prev"><span class="mdi mdi-chevron-left"></span></button>',
        nextArrow: '<button type="button" class="slick-next"><span class="mdi mdi-chevron-right"></span></button>',
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    variableWidth: false,
                }
            }
        ]
    });

    // header search
    $('.header__searchbtn > span').click(function () {
        $('.header__searchbtn form').addClass('openheadsearch');
    });
    $('.header__searchbtn form .close-headsearch').click(function () {
        $('.header__searchbtn form').removeClass('openheadsearch');
    })
    // $(document).mouseup(function (e) { // событие клика по веб-документу
    //     var div = $(".header__searchbtn form"); // тут указываем ID элемента
    //     if (!div.is(e.target) // если клик был не по нашему блоку
    //         && div.has(e.target).length === 0) { // и не по его дочерним элементам
    //         div.removeClass('openheadsearch'); // скрываем его
    //     }
    // });


    // salons page

    $('.salons-section .salons__select-choosen text').click(function () {
        $('.salons-section .salons__select ul').slideToggle();
        $(this).next('span').toggleClass('rotatearr')
    });

    $(document).click(function (event) {
        if (!$(event.target).is(".salons-section .salons__select-choosen,.salons__select-choosen text, .salons__select, .salons-section .salons__select ul, .salons-section .salons__select ul li")) {
            $(".salons-section .salons__select ul").slideUp();
            $('.salons__select-choosen span').removeClass('rotatearr');
        }
    });
    $(document).on('click', '.salons-section .salons__select ul li', function (e) {
        var name = $(this).text();
        $(".salons-section .salons__select-choosen text").text(name);
    });

    $('.salons-section .salons__select ul li').click(function () {
        $('.salons-section .salons__select ul').slideUp();
        $('.salons__select-choosen span').removeClass('rotatearr');
    });


    // scroll to

    $(".fixed-leftsocial").on("click", "a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id = $(this).attr('href'),

            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;

        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({ scrollTop: top }, 1000);
    });

    // category list - block 
    $('.blocks-structure-list').click(function () {
        $('.blocks-structure > div').removeClass('active');
        $(this).addClass('active');
        $('.salons__content').removeClass('salons__content-blocks');
    });
    $('.blocks-structure-block').click(function () {
        $('.blocks-structure > div').removeClass('active');
        $(this).addClass('active');
        $('.salons__content').addClass('salons__content-blocks');
    });



});

// fix left arrow
$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('.tobott').hide();
        $('.toup').show();
    } else {
        $('.tobott').show();
        $('.toup').hide();
    }
});


// to left sect

$(document).ready(function () {
    var leftmarg = (($(window).width() - $('.container').width()) / 2) - 45;
    $('.news-slider').css('padding-left', leftmarg);


    // news slider arrow
    $('.news .slick-next.slick-arrow').css('right', leftmarg - 10);
    $('.news .slick-prev.slick-arrow').css('right', leftmarg + 25);
    if ($(window).width() < 1300) {
        $('.news .slick-next.slick-arrow').css('right', leftmarg - 0);
        $('.news .slick-prev.slick-arrow').css('right', leftmarg + 30);
    }
    if ($(window).width() < 576) {
        var leftmarg = (($(window).width() - $('.container').width()) / 2);
        $('.news-slider').css('padding-left', leftmarg);
    }
    if ($(window).height() < 501) {
        var leftmarg = (($(window).width() - $('.container').width()) / 2);
        $('.news-slider').css('padding-left', leftmarg);
    }



    $(window).resize(function () {
        var leftmarg = (($(window).width() - $('.container').width()) / 2) - 35;
        $('.news-slider').css('padding-left', leftmarg);

        // news slider arrow
        $('.news .slick-next.slick-arrow').css('right', leftmarg - 10);
        $('.news .slick-prev.slick-arrow').css('right', leftmarg + 25);
        if ($(window).width() < 1300) {
            $('.news .slick-next.slick-arrow').css('right', leftmarg - 0);
            $('.news .slick-prev.slick-arrow').css('right', leftmarg + 30);
        }
        if ($(window).width() < 576) {
            var leftmarg = (($(window).width() - $('.container').width()) / 2);
            $('.news-slider').css('padding-left', leftmarg);
        }

        if ($(window).width() < 576) {
            var leftmarg = (($(window).width() - $('.container').width()) / 2);
            $('.news-slider').css('padding-left', leftmarg);
        }
        if ($(window).height() < 501) {
            var leftmarg = (($(window).width() - $('.container').width()) / 2);
            $('.news-slider').css('padding-left', leftmarg);
        }

    });
});




// google map
if ($('*').is('#map')) {

    function initMap() {

        let lat1 = 50.343185, lng1 = 30.5520422;
        map = new google.maps.Map(document.getElementById("map"), {
            center: {
                lat: 50.343185, lng: 30.5520422
            }
            , zoom: 15, mapTypeId: "roadmap", panControl: !1, zoomControl: !1, scaleControl: !1, disableDefaultUI: !0, styles: [

            ]
        }
        );

        var features = [
            {
                position: new google.maps.LatLng(lat1, lng1),
                type: 'info'
            }
        ];

        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(lat1, lng1),
            map: map,
            icon: {
                url: "image/icons/marker.svg",
                scaledSize: new google.maps.Size(40, 60) // pixels
            }
        });
    }
}