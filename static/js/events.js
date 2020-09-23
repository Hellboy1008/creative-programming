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