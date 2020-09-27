// run these functions when the website is loaded
$(document).ready(function() {
    // json for header/body text
    for (id in sg_text) {
        if (id != 'small_groups') {
            $('#' + id).text(sg_text[id]);
        }
    }

    // json for small groups
    var sg_div = '';
    var sg_id = '';
    for (sg in sg_text.small_groups) {
        sg_div = '<div class="small-group" id="' + sg + '"><div class="sg-info"><h1 class="sg-title"></h1><p class="sg-focus"></p><p class="sg-details"></p></div><div class="sg-image"><img></div></div>';
        sg_id = '#' + sg;
        $('#small-group-descriptions').append(sg_div);
        $(sg_id + '> .sg-info > .sg-title').text(sg_text.small_groups[sg].title);
        $(sg_id + '> .sg-info > .sg-focus').text(sg_text.small_groups[sg].focus);
        for (details in sg_text.small_groups[sg].details) {
            $(sg_id + '> .sg-info > .sg-details').append('<b>' + details + ': </b>');
            $(sg_id + '> .sg-info > .sg-details').append(sg_text.small_groups[sg].details[details].replace('&', '&<br>') + '<br>');
        }
        $(sg_id + '> .sg-image > img').attr('src', sg_text.small_groups[sg].image);
        $('#small-group-descriptions').append('<hr>');
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