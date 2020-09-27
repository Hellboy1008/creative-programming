// event listener for calendar
document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        eventClick: function(info) {
            info.jsEvent.preventDefault(); // don't let the browser navigate
            if (info.event.url) {
                window.open(info.event.url, '_blank');
            }
        },
        buttonText: {
            today: 'Today'
        }
    });
    calendar.render();

    // add events to calendar
    for (aacf_event in events["events"]) {
        calendar.addEvent(events["events"][aacf_event])
    }

});

// run these functions when the website is loaded
$(document).ready(function() {
    // json for header/body text
    for (id in events_text) {
        if (id != 'weekly_events') {
            $('#' + id).text(events_text[id]);
        }
    }

    // json for large group event
    var lg_div = '<div class="event-info"><h1 class="event-title" id="lg_title"></h1><p class="event-desc" id="lg_desc"></p><p class="event-details" id="lg_details"><a target="_blank"></a><\p><h1 class="event-title" id="pre_lg_title"><br></h1><p class="event-desc" id="pre_lg_desc"></p><p class="event-details" id="pre_lg_details"></p></div><div class="event-image"><img></div>';
    var lg_json = events_text.weekly_events.large_group;
    $('#event-descriptions').append('<div class="event" id="large_group"> </div>');
    $('#large_group').append(lg_div);
    $('#large_group > .event-image > img').attr('src', lg_json.image);
    $('#large_group > .event-info > #lg_title').text(lg_json.large_group.title);
    $('#large_group > .event-info > #lg_desc').text(lg_json.large_group.description);
    var details_str = '';
    for (details in lg_json.large_group.details) {
        details_str += '<b>' + details + ': </b>';
        details_str += lg_json.large_group.details[details] + '<br>'
    }
    $('#large_group > .event-info > #lg_details').prepend(details_str);
    $('#large_group > .event-info > #lg_details > a').attr('href', lg_json.large_group.sermon_link);
    $('#large_group > .event-info > #lg_details > a').text(lg_json.large_group.sermon_text);
    $('#large_group > .event-info > #pre_lg_title').append(lg_json.pre_large_group.title);
    $('#large_group > .event-info > #pre_lg_desc').text(lg_json.pre_large_group.description);
    for (details in lg_json.pre_large_group.details) {
        $('#large_group > .event-info > #pre_lg_details').append('<b>' + details + ': </b>');
        $('#large_group > .event-info > #pre_lg_details').append(lg_json.pre_large_group.details[details] + '<br>');
    }
    $('#event-descriptions').append('<hr>');

    // json for other events
    var event_div = '';
    var event_id = '';
    var weekly_events_json = events_text.weekly_events.other;
    for (w_events in weekly_events_json) {
        event_div = '<div class="event" id="' + w_events + '"><div class="event-info"><h1 class="event-title"></h1><p class="event-desc"></p><p class="event-details"><\p></div><div class="event-image"><img></div></div>';
        event_id = '#event-descriptions > #' + w_events;
        $('#event-descriptions').append(event_div);
        $(event_id + '> .event-info > .event-title').text(weekly_events_json[w_events].title);
        $(event_id + '> .event-info > .event-desc').text(weekly_events_json[w_events].description);
        for (details in weekly_events_json[w_events].details) {
            $(event_id + '> .event-info > .event-details').append('<b>' + details + ': </b>');
            $(event_id + '> .event-info > .event-details').append(weekly_events_json[w_events].details[details] + '<br>');
        }
        $(event_id + '> .event-image > img').attr('src', weekly_events_json[w_events].image);
        $('#event-descriptions').append('<hr>');
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