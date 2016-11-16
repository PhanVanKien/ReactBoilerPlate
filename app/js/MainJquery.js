$(document).ready(function() {
    $("#toggleProductsCat").click(function () {
        $(this).parent("h4").next("ul").slideToggle("fast");
        return false;
    });
    $('.lienketCarousel').bxSlider({
        slideWidth: 275,
        minSlides: 8,
        maxSlides: 8,
        slideMargin: 10,
        pager: false,
        adaptiveHeight: true,
        moveSlides: 1,
        nextText: '',
        prevText: ''
    }).startAuto(); 
    $('.new_product_content').bxSlider({
        slideWidth: 300,
        minSlides: 1,
        maxSlides: 1,
        slideMargin: 10,
        pager: true,
        adaptiveHeight: true,
        moveSlides: 1,
        controls: false
    }).startAuto();
});