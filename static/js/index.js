// run these functions when the website is loaded
$(document).ready(function() {
    // smooth scroll
    $('.scroll-down').click(function(event) {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - $('.navbar').height()
        }, 500);
        return false;
    });
    // change height of picture depending on viewport
    $('.site-overlay').css('height', window.innerHeight);
    $('.welcome-screen').css('height', window.innerHeight);
});