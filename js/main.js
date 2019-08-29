$( document ).ready(function() {
   //show mobile menu
    $(".page-header__bars").click(function(e) {
       e.preventDefault();
       $(".page-header__navigation-list").toggleClass("show");
    })

    //slider banner
    $('.banner').slick({
        dots: true,
        arrows: false,
        infinite: false
    });

    //slider reviews
    if (screen.width < 768) {
        $('.reviews').slick({
            dots: true,
            arrows: false,
            infinite: false
        });
    }
});
