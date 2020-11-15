// run these functions when the website is loaded
$(document).ready(function() {
    // json for page banner
    $('#page_banner').css('background-image', 'url(' + index_text["page_banner"] + ')');

    // json for group photo
    $('#group_photo').attr('src', index_text["group_photo"]);

    // json for other text
    for (id in index_text) {
        if (id != 'page_banner' && id != 'group_photo') {
            $('#' + id).text(index_text[id]);
        }
    }

    // json for social media
    for (media in social_media) {
        if (media == 'aacf_email') {
            $('#' + media).attr('href', 'mailto:' + social_media[media]);
        } else {
            $('#' + media).attr('href', social_media[media]);
        }
    }
});