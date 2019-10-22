$(document).ready(function () {
    $('.restoran-body').hover(function(){
        $(this).children('.restoran-dark').children('.restoran-desc').css({"height": "35%"}, {"margin-bottom": "60px"});
        $(this).children('.restoran-dark').children('.new_slidelink').css({"height": "20%"}, {"margin-bottom": "30px"} );
        $(this).children('.restoran-dark').css({"background": "rgba(0, 0, 0, 0.5)"});             
    },
    function(){
        $(this).children('.restoran-dark').children('.restoran-desc').css({"height": "0"});
        $(this).children('.restoran-dark').children('.new_slidelink').css({"height": "0"});
        $(this).children('.restoran-dark').css({"background": "rgba(0, 0, 0, 0.0)"});          
    });
});


$(document).ready(function () {
    $('.restoran-sliders').slick({
        arrows: true,
        dots: false,
        infinite: false,
        slidesToShow: 1,
        variableWidth: true,
        prevArrow: '<button type="button" class="slick-prev"><span class="mdi mdi-chevron-left"></span></button>',
        nextArrow: '<button type="button" class="slick-next"><span class="mdi mdi-chevron-right"></span></button>',
    });

    var leftmarg = (($(window).width() - $('.container').width()) / 2) - (-15);
    $('.restoran-sliders').css('padding-left', leftmarg);

    // news slider arrow
    $('.restoran .slick-next.slick-arrow').css('right', leftmarg - 150);
    $('.restoran .slick-prev.slick-arrow').css('right', leftmarg - 125);
    if ($(window).width() < 1300) {
        $('.restoran .slick-next.slick-arrow').css('right', leftmarg - 100);
        $('.restoran .slick-prev.slick-arrow').css('right', leftmarg - 80);
    }
    if ($(window).width() < 992) {
        $('.restoran .slick-next.slick-arrow').css('right', leftmarg - 100);
        $('.restoran .slick-prev.slick-arrow').css('right', leftmarg - 80);
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
        var leftmarg = (($(window).width() - $('.container').width()) / 2) - 5;
        $('.restoran-sliders').css('padding-left', leftmarg);

        // news slider arrow
        $('.restoran .slick-next.slick-arrow').css('right', leftmarg - 10);
        $('.restoran .slick-prev.slick-arrow').css('right', leftmarg + 25);
        if ($(window).width() < 1300) {
            $('.restoran .slick-next.slick-arrow').css('right', leftmarg - 0);
            $('.restoran .slick-prev.slick-arrow').css('right', leftmarg + 30);
        }
        if ($(window).width() < 576) {
            var leftmarg = (($(window).width() - $('.container').width()) / 2);
            $('.restoran-slider').css('padding-left', leftmarg);
        }

        if ($(window).width() < 576) {
            var leftmarg = (($(window).width() - $('.container').width()) / 2);
            $('.restoran-slider').css('padding-left', leftmarg);
        }
        if ($(window).height() < 501) {
            var leftmarg = (($(window).width() - $('.container').width()) / 2);
            $('.restoran-slider').css('padding-left', leftmarg);
        }

    });

    // filter category 
	$(".filter-my").click(function() {
		let category = $(this).attr("id");
		console.log(category);
		if (category === "all") {
			$(".filter-this")
				.fadeOut(400)
				.addClass("hide")
				.removeClass("flex-auto");
			setTimeout(function() {
				$(".filter-this")
					.fadeIn(400)
					.removeClass("hide");
			}, 500);
		} else {
			$(".filter-this")
				.fadeOut(400)
				.addClass("hide")
				.removeClass("flex-auto");
			setTimeout(function() {
				$("." + category)
					.fadeIn(400)
					.removeClass("hide")
					.addClass("flex-auto");
			}, 500);
		}
    });

});