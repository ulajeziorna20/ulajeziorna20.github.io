$(document).ready(function() {

    console.log( $(`[href="#about"]`));

    $(`[href="#about"]`).click(function() {
        $(`html, body`).animate({
            scrollTop: $(`#about`).offset().top
        }, 2000);
    });


    $(`[href="#portwolio"]`).click(function() {
        $(`html, body`).animate({
            scrollTop: $(`#portwolio`).offset().top
        }, 2500);
    });


    $(`[href="#contact"]`).click(function() {
        $(`html, body`).animate({
            scrollTop: $(`#contact`).offset().top
        }, 3000);
    });
});