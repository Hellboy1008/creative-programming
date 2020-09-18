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
    calendar.addEvent({ title: 'Summer Medium Groups', start: '2020-08-03T20:00:00', allDay: false });
    calendar.addEvent({ title: 'Summer Small Groups', start: '2020-08-10T20:00:00', allDay: false });
    calendar.addEvent({ title: 'Summer Medium Groups', start: '2020-08-17T20:00:00', allDay: false });
    calendar.addEvent({ title: 'Summer Small Groups', start: '2020-08-24T20:00:00', allDay: false });
    calendar.addEvent({ title: 'Summer Medium Groups', start: '2020-08-31T20:00:00', allDay: false });
    calendar.addEvent({ title: 'Summer Small Groups', start: '2020-09-07T20:00:00', allDay: false });
    calendar.addEvent({ title: 'Summer Medium Groups', start: '2020-09-14T20:00:00', allDay: false });
    calendar.addEvent({ title: 'Women\'s Hangout', start: '2020-09-17T20:00:00', allDay: false });
    calendar.addEvent({ title: 'Summer Small Groups', start: '2020-09-21T20:00:00', allDay: false });
});