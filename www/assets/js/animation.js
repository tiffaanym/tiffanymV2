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


/*----------------------------------------------------*/
/* Portfolio
------------------------------------------------------ */

$(function() {
    $('.portolio-right').vegas({
        slides: [
            { src: 'assets/images/jbm.png' },
            { src: 'assets/images/aas.png' },
            { src: '/img/jbm.jpg' },
            { src: '/img/cdj.jpg' }
        ],
        overlay: '/assets/images/01.png',

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