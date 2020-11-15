// run these functions when the website is loaded
$(document).ready(function() {
    // json for page banner
    $('#page_banner').css('background-image', 'url(' + contact_text["page_banner"] + ')');

    // json for header/body text
    for (id in contact_text) {
        if (id != 'leaders' && id != 'page_banner') {
            $('#' + id).append(contact_text[id].replace('aacf.ucsd@aacf.org', '<a href="mailto:aacf.ucsd@aacf.org">aacf.ucsd@aacf.org</a>'));
        }
    }

    // json for leaders
    var card_div = '';
    var team_id = '';
    for (teams in contact_text.leaders) {
        if (teams == 'core') {
            team_id = '#core_team';
        } else {
            team_id = '#sg_team';
        }
        for (leaders in contact_text.leaders[teams]) {
            card_div = '<div class="contact-column"><div class="contact-card" id="' + leaders + '"><img class="leaders-img"><div class="leaders-details"><p class="leaders-position"></p><p class="leaders-name"></p><p class="leaders-info"></p></div></div></div>';
            $(team_id).append(card_div);
            $('#' + leaders + '> .leaders-img').attr("src", contact_text.leaders[teams][leaders].image);
            $('#' + leaders + '> .leaders-details >.leaders-name').text(contact_text.leaders[teams][leaders].name);
            $('#' + leaders + '> .leaders-details >.leaders-position').text(contact_text.leaders[teams][leaders].position);
            $('#' + leaders + '> .leaders-details >.leaders-info').text(contact_text.leaders[teams][leaders].year);
            $('#' + leaders + '> .leaders-details >.leaders-info').append('<br>' + contact_text.leaders[teams][leaders].major + '<br>' + contact_text.leaders[teams][leaders].contact);
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