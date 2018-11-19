/*----------------------------------------------------*/
/* Typing Animation
------------------------------------------------------ */

setTimeout(function(){
    // typing animation
    (function ($) {
        $.fn.writeText = function (content) {
            var contentArray = content.split(""),
                current = 0,
                elem = this;
            setInterval(function () {
                if (current < contentArray.length) {
                    elem.text(elem.text() + contentArray[current++]);
                }
            }, 130);
        };

    })(jQuery);

    // input text for typing animation
    $("#holder").writeText("GRAPHIC DESIGNER + WEB DEVELOPER");

}, 9500);


/*----------------------------------------------------
 Navigation


$(window).scroll(function () {

    if ($(window).scrollTop() > 200) {
        $('.main_nav').addClass('sticky');
    } else {
        $('.main_nav').removeClass('sticky');
    }
});

// Mobile Navigation
$('.mobile-toggle').click(function () {
    if ($('.main_nav').hasClass('open-nav')) {
        $('.main_nav').removeClass('open-nav');
    } else {
        $('.main_nav').addClass('open-nav');
    }
});

$('.main_nav li a').click(function () {
    if ($('.main_nav').hasClass('open-nav')) {
        $('.navigation').removeClass('open-nav');
        $('.main_nav').removeClass('open-nav');
    }
});



/*----------------------------------------------------*/
/* Portfolio
------------------------------------------------------ */

$('.gallery-item').hover(function () {
    $(this).find('p').stop().animate({
        opacity: '1',
        marginLeft: '220px'
    }, 300);
}, function () {
    $(this).find('p').stop().animate({
        opacity: '0',
        marginLeft: '0px'
    }, 100);
});

/*----------------------------------------------------*/
/* Chi
------------------------------------------------------ */

if (window.addEventListener) {
    var kkeys = [], konami = "38,38,40,40,37,39,37,39,66,65";
    window.addEventListener("keydown", function (e) {
        kkeys.push(e.keyCode);
        if (kkeys.toString().indexOf(konami) >= 0) {

            $("#popup").fadeToggle("slow");

        }
    }, true);
}











$(function() {
$('.portolio-right').vegas({
    slides: [
        { src: 'assets/images/jbm.png' },
        { src: 'assets/images/lapin.png' },
        { src: '/img/slide3.jpg' },
        { src: '/img/slide4.jpg' }
    ],
    init: function (globalSettings) {
        console.log("Init");
    },
    play: function (index, slideSettings) {
        console.log("Play");
    },
    walk: function (index, slideSettings) {
        console.log("Slide index " + index + " image " + slideSettings.src);
    }
});
});