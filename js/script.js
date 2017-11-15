// navbar mobilní
$(document).ready(function () {

    $(".navbar__cross").hide();
    $(".navbar__mobile").hide();
    $(".navbar__hamburger").click(function () {
        $(".navbar__mobile").slideToggle("slow", function () {
            $(".navbar__hamburger").hide();
            $(".navbar__cross").show();
        });
    });

    $(".navbar__cross").click(function () {
        $(".navbar__mobile").slideToggle("slow", function () {
            $(".navbar__cross").hide();
            $(".navbar__hamburger").show();
        });
    });

});
// slider
$('.slider').slick({
    appendArrows: $(".slider__control"),
    prevArrow: '<button type="button" class="slider__prev"></button>',
    nextArrow: '<button type="button" class="slider__next"></button>'
});
// graf
$(document).ready(function () {
    $("#bars li .bar").each(function (key, bar) {
        var percentage = $(this).data('percentage');

        if (percentage < 20) {
            $(this).css('background', '#ffc59b');
        }
        if (percentage >= 21 && percentage <= 39) {
            $(this).css('background', '#f88c6c');
        }
        if (percentage >= 40) {
            $(this).css('background', '#e84e0e');
        }
        $(this).animate({
            'height': percentage + '%'
        }, 1000);
    });
});
// omezení počtu znaků odstavec
var slider_p = $('.slider__text');
slider_p.text(slider_p.text().substring(0, 250))
// test chybovosti konzole
console.log("vse ok");
