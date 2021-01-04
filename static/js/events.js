// run these functions when the website is loaded
$(document).ready(function() {
    // json for page banner
    $('#page_banner').css('background-image', 'url(' + events_text["page_banner"] + ')');

    // json for header/body text
    for (id in events_text) {
        if (id != 'page_banner') {
            $('#' + id).text(events_text[id]);
        }
    }

    // json for past and upcoming events
    var card_div = '';
    var event_type_id = '';
    for (event_type in events) {
        if (event_type == 'past_events') {
            event_type_id = '#past_events_list';
        } else {
            event_type_id = '#upcoming_events_list';
        }
        for (aacf_event in events[event_type]) {
            card_div = '<div class="event-column"><div class="event-card" id="' + aacf_event + '"><img class="event-img"><p class="event-time"></p><p class="event-title"></p><p class="event-description"></p><p class="event-details"></p></div></div>';
            $(event_type_id).append(card_div);
            $('#' + aacf_event + '> .event-img').attr("src", events[event_type][aacf_event].image);
            $('#' + aacf_event + '> .event-time').text(events[event_type][aacf_event].time);
            // account for fb event links
            if (events[event_type][aacf_event].fb_link == '') {
                $('#' + aacf_event + '> .event-title').text(events[event_type][aacf_event].title);
            } else {
                $('#' + aacf_event + '> .event-title').append('<a target="_blank" href="' + events[event_type][aacf_event].fb_link + '">' + events[event_type][aacf_event].title + '</a>');
            }
            // account for newline for events led by leaders
            description_text = events[event_type][aacf_event].description;
            if (description_text.indexOf('<br>') != -1) {
                $('#' + aacf_event + '> .event-description').text(description_text.substring(0, description_text.indexOf('<br>')));
                $('#' + aacf_event + '> .event-description').append('<br>' + description_text.substring(description_text.indexOf('<br>') + 4));
            } else {
                $('#' + aacf_event + '> .event-description').text(events[event_type][aacf_event].description);
            }
            // account for sermon link in large group
            if (aacf_event == 'large_group') {
                details_text = events[event_type][aacf_event].details;
                zoom_details = details_text.substring(0, details_text.indexOf('|') - 1);
                details_text = details_text.replace('Listen to our Sermons here!', '<a target="_blank" href="' + events[event_type][aacf_event].sermon_link +
                    '">Listen to our Sermons here!</a>');
                details_text = details_text.replace(zoom_details, '<a target="_blank" href="https://ucsd.zoom.us/j/' + zoom_details.substring(9).replaceAll('-', '') +
                    '">' + zoom_details + '</a>');
                $('#' + aacf_event + '> .event-details').append(details_text);
            } else if (events[event_type][aacf_event].details != undefined) {
                zoom_details = events[event_type][aacf_event].details;
                if (events[event_type][aacf_event].details.indexOf('Zoom ID') != -1) {
                    zoom_div = '<a target="_blank" href="https://ucsd.zoom.us/j/' + zoom_details.substring(9).replaceAll('-', '') +
                        '">' + zoom_details + '</a>';
                } else {
                    zoom_div = zoom_details;
                }
                $('#' + aacf_event + '> .event-details').append(zoom_div);
            }
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