// run these functions when the website is loaded
$(document).ready(function() {
    $('.scroll-down').click(function(event) {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - $('.navbar').height()
        }, 500);
        return false;
    });
});