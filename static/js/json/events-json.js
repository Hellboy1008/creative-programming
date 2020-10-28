/**
 * *************************
 * START JSON
 * *************************
 */

var events_text = {
    events_body: "Some of our activities do not have the same location or time every week, so we will be updating the calendar as frequently as we can. To receive the latest updates on these activities, join our Facebook page or email list!",
    events_header: "Weekly Events",
    schedule_body: "Times are displayed in PDT.",
    schedule_header: "Weekly Schedule",
    weekly_events: {
        large_group: {
            image: "images/Schedule/Large_Group.jpg",
            large_group: {
                title: "Large Group",
                description: "Gather together with the community for worship and learning!",
                details: {
                    "When": "Every Monday 8:00pm",
                    "Zoom Meeting ID": "988-4588-1773"
                },
                sermon_link: "https://drive.google.com/drive/folders/1aJXlQDJ9CxGYqr_Q-PBYsN86Ho576IH8?fbclid=IwAR0sS7HvmeMO1f4ebQQmbFuQBhizLWpTCagWLmtZH3nl8ISR0v2_AzW-ysE",
                sermon_text: "Listen to our Sermons here!"
            },
            pre_large_group: {
                title: "Pre-Large Group Dinner",
                description: "Join us before large group to eat and fellowship!",
                details: {
                    "When": "Every Monday 7:00pm",
                    "Where": "Cancelled due to Covid-19",
                    "Contact Person": ""
                },
            }
        },
        other: {
            /** Archived Events 
             * 
             *  hope: {
                    title: "HOPE",
                    description: "HOPE is an intentional time of prayer for each other, our campus, and the world. We will also be doing different types of prayer activities to broaden our horizon on prayer.",
                    details: {
                        "When": "TBD",
                        "Zoom Meeting ID": "TBD",
                        "Contact Person": ""
                    },
                    image: "images/Schedule/HOPE.jpg"
                }
             * 
             *
             */
            basketball: {
                title: "Basketball",
                description: "Come out and play or watch some basketball, or just hang out with one another!",
                details: {
                    "When": "Every Thursday 10:30pm",
                    "Where": "Cancelled due to Covid-19",
                    "Contact Person": ""
                },
                image: "images/Schedule/Basketball.jpg"
            },
            campus_ev: {
                title: "Campus Evangelism",
                description: "Partner up and spread the life-changing message of Jesus Christ to the campus!",
                details: {
                    "When": "Every Friday 10:00am",
                    "Where": "Cancelled due to Covid-19",
                    "Contact Person": ""
                },
                image: "images/Schedule/Campus_EV.jpg"
            },
            massive_lunch: {
                title: "Massive Lunch",
                description: "Looking for some company to eat with? Bring your lunch and come join us!",
                details: {
                    "When": "Every Tuesday 11:00am",
                    "Where": "Cancelled due to Covid-19",
                    "Contact Person": ""
                },
                image: "images/Schedule/Massive_Lunch.png"
            },
            prayer_meeting: {
                title: "Prayer Meeting",
                description: "Pray over the people of AACF, the campus, and the world together!",
                details: {
                    "When": "Friday October 30, 2020 2-3pm",
                    "Zoom Meeting ID": "972-885-7916",
                    "Contact Person": "Tyler Huang (858) 900-7462"
                },
                image: "images/Schedule/Prayer_Meeting.jpg"
            }
        }
    }
}

// events for the calendar 
var events = {
    "events": {
        "2020 Summer MG 1": {
            allDay: false,
            start: "2020-08-03T20:00:00",
            title: "Summer Medium Group",
            url: ""
        },
        "2020 Summer SG 1": {
            allDay: false,
            start: "2020-08-10T20:00:00",
            title: "Summer Small Group",
            url: ""
        },
        "2020 Summer MG 2": {
            allDay: false,
            start: "2020-08-17T20:00:00",
            title: "Summer Medium Group",
            url: ""
        },
        "2020 Summer SG 2": {
            allDay: false,
            start: "2020-08-24T20:00:00",
            title: "Summer Small Group",
            url: ""
        },
        "2020 Summer MG 3": {
            allDay: false,
            start: "2020-08-31T20:00:00",
            title: "Summer Medium Group",
            url: ""
        },
        "2020 Summer SG 3": {
            allDay: false,
            start: "2020-09-07T20:00:00",
            title: "Summer Small Group",
            url: "",
        },
        "2020 Summer MG 4": {
            allDay: false,
            start: "2020-09-14T20:00:00",
            title: "Summer Medium Group",
            url: ""
        },
        "Women's Hangout": {
            allDay: false,
            start: "2020-09-17T20:00:00",
            title: "Women's Hangout",
            url: ""
        },
        "2020 Summer SG 4": {
            allDay: false,
            start: "2020-09-21T20:00:00",
            title: "Summer Small Group",
            url: ""
        },
        "Online Escape Room": {
            allDay: false,
            start: "2020-09-28T15:00:00",
            title: "Online Escape Room",
            url: "https://www.facebook.com/events/3275266462570407/"
        },
        "Virtual Baking Night": {
            allDay: false,
            start: "2020-09-30T20:00:00",
            title: "Virtual Baking Night",
            url: "https://www.facebook.com/events/2882744395278684/"
        },
        "Late-Afternoon Games": {
            allDay: false,
            start: "2020-10-02T15:00:00",
            title: "Late-Afternoon Games",
            url: "https://www.facebook.com/events/2618148985104734"
        },
        "FA2020 LG 1": {
            allDay: false,
            start: "2020-10-05T20:00:00",
            title: "Fall Large Group",
            url: "https://www.facebook.com/events/762933597603767"
        },
        "FA2020 Freshman Small Group 1": {
            allDay: false,
            start: "2020-10-06T20:00:00",
            title: "Fall Freshman SG",
            url: ""
        },
        "FA2020 Women's Small Group 1": {
            allDay: false,
            start: "2020-10-07T20:00:00",
            title: "Fall Women's SG",
            url: ""
        },
        "FA2020 Men's Small Group 1": {
            allDay: false,
            start: "2020-10-08T20:00:00",
            title: "Fall Men's SG",
            url: ""
        },
        "FA2020 LG 2": {
            allDay: false,
            start: "2020-10-12T20:00:00",
            title: "Fall Large Group",
            url: "https://www.facebook.com/events/344516343527332"
        },
        "FA2020 Freshman Small Group 2": {
            allDay: false,
            start: "2020-10-13T20:00:00",
            title: "Fall Freshman SG",
            url: ""
        },
        "FA2020 Women's Small Group 2": {
            allDay: false,
            start: "2020-10-14T20:00:00",
            title: "Fall Women's SG",
            url: ""
        },
        "FA2020 Men's Small Group 2": {
            allDay: false,
            start: "2020-10-15T20:00:00",
            title: "Fall Men's SG",
            url: ""
        },
        "FA2020 Week 2 Thursday Night Games": {
            allDay: false,
            start: "2020-10-15T22:00:00",
            title: "Thur Night Games",
            url: ""
        },
        "FA2020 LG 3": {
            allDay: false,
            start: "2020-10-19T20:00:00",
            title: "Fall Large Group",
            url: "https://www.facebook.com/events/397874061392402/"
        },
        "FA2020 Freshman Small Group 3": {
            allDay: false,
            start: "2020-10-20T20:00:00",
            title: "Fall Freshman SG",
            url: ""
        },
        "FA2020 Women's Small Group 3": {
            allDay: false,
            start: "2020-10-21T20:00:00",
            title: "Fall Women's SG",
            url: ""
        },
        "FA2020 Men's Small Group 3": {
            allDay: false,
            start: "2020-10-22T20:00:00",
            title: "Fall Men's SG",
            url: ""
        },
        "FA2020 Week 3 Thursday Night Games": {
            allDay: false,
            start: "2020-10-22T22:00:00",
            title: "Thur Night Games",
            url: ""
        },
        "FA2020 Week 3 Prayer Meeting": {
            allDay: false,
            start: "2020-10-23T14:00:00",
            title: "Prayer Meeting",
            url: ""
        },
        "FA2020 LG 4": {
            allDay: false,
            start: "2020-10-26T20:00:00",
            title: "Fall Large Group",
            url: "https://www.facebook.com/events/677527533179245/"
        },
        "FA2020 Freshman Small Group 4": {
            allDay: false,
            start: "2020-10-27T20:00:00",
            title: "Fall Freshman SG",
            url: ""
        },
        "FA2020 Women's Small Group 4": {
            allDay: false,
            start: "2020-10-28T20:00:00",
            title: "Fall Women's SG",
            url: ""
        },
        "FA2020 Men's Small Group 4": {
            allDay: false,
            start: "2020-10-29T20:00:00",
            title: "Fall Men's SG",
            url: ""
        },
        "FA2020 Week 4 Thursday Night Games": {
            allDay: false,
            start: "2020-10-29T22:00:00",
            title: "Thur Night Games",
            url: ""
        },
        "FA2020 Week 4 Prayer Meeting": {
            allDay: false,
            start: "2020-10-30T14:00:00",
            title: "Prayer Meeting",
            url: ""
        },
        "Pumpkin Carving and Costume Party": {
            allDay: false,
            start: "2020-10-31T20:00:00",
            title: "Pumpkin Carving Party",
            url: "https://www.facebook.com/events/358960215221842/"
        },
        "FA2020 LG 5": {
            allDay: false,
            start: "2020-11-02T20:00:00",
            title: "Fall Large Group",
            url: ""
        },
        "FA2020 LG 6": {
            allDay: false,
            start: "2020-11-09T20:00:00",
            title: "Fall Large Group",
            url: ""
        },
    }
}


/**
 * *************************
 * END JSON
 * *************************
 */
