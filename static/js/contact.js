// run these functions when the website is loaded
$(document).ready(function() {
    // json for header/body text
    for (id in contact_text) {
        if (id != 'leaders') {
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
            card_div = '<div class="column"><div class="card" id="' + leaders + '"><img class="leaders-img"><div class="leaders-details"><h2 class="leaders-name"></h2><p class="leaders-position"></p><p class="leaders-info"></p><p class="leaders-contact"></p></div></div></div>';
            $(team_id).append(card_div);
            $('#' + leaders + '> .leaders-img').attr("src", contact_text.leaders[teams][leaders].image);
            $('#' + leaders + '> .leaders-details >.leaders-name').text(contact_text.leaders[teams][leaders].name);
            $('#' + leaders + '> .leaders-details >.leaders-position').text(contact_text.leaders[teams][leaders].position);
            $('#' + leaders + '> .leaders-details >.leaders-info').text(contact_text.leaders[teams][leaders].year);
            $('#' + leaders + '> .leaders-details >.leaders-info').append('<br>' + contact_text.leaders[teams][leaders].major);
            $('#' + leaders + '> .leaders-details >.leaders-contact').text(contact_text.leaders[teams][leaders].contact);
        }
    }

    // json for footer
    for (media in social_media) {
        if (media == 'aacf_email') {
            $('#' + media).attr('href', 'mailto:' + social_media[media]);
        } else {
            $('#' + media).attr('href', social_media[media]);
        }
    }
});