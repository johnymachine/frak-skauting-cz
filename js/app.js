var frak = function() {
    'use strict'
    $(document).ready(function() {
        $('#Carousel').carousel({
            interval: 5000
        });
    });

    $(window).load(function() {
        $(document.body).fadeIn(1000);
    });

    $('nav ul li a').each(function() {
        $(this).click(function(e) {
            $("html, body").animate({
                scrollTop: $($(this).attr('href')).offset().top
            }, 800);
            e.preventDefault();
        });
    });
}
frak();
