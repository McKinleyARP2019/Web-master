$(document).ready(function () {
    addScrolled();
});
$(window).scroll(function () {
    addScrolled();
});

function addScrolled() {
    let navHeight = $('#main-nav').outerHeight();
    let actualPos = $(window).scrollTop();
    if (actualPos > navHeight) {
        $('#main-nav').addClass('scrolled');
    }else{
          $('#main-nav').removeClass('scrolled');
    }

}
