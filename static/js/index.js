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

    // json for welcome image
    $('#welcome_image').css('background-image', 'url(' + index_text["welcome_image"] + ')');

    // json for other text
    for (id in index_text) {
        if (id != 'body_color' && id != 'header_color' && id != 'welcome_image') {
            $('#' + id).text(index_text[id]);
        }
    }

    // json for footer
    for (media in footer) {
        if (media == 'aacf_email') {
            $('#' + media).attr('href', 'mailto:' + footer[media]);
        } else {
            $('#' + media).attr('href', footer[media]);
        }
    }

});