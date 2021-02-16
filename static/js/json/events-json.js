/**
 * *************************
 * START JSON
 * *************************
 */

var events_text = {
    events_body: 'Some of our activities do not have the same location or time every week, so we will be updating the website as frequently as we can. To receive the latest updates on these activities, join our Facebook page or email list!',
    events_header: 'Weekly Events',
    page_banner: 'images/Page_Banners/Events_Page.png',
    past_events_header: 'Past Events',
    upcoming_events_header: 'Upcoming Events (Week 7)'
}

var events = {
    past_events: {
        escape_room_2: {
            title: "Virtual Escape Room 2",
            description: "Solved a complicated escape room about colors!",
            fb_link: 'https://www.facebook.com/events/879856582854412',
            image: "images/Events/Escape_Room_2.jpg",
            time: "February 6"
        },
        christmas_party: {
            title: "Christmas Party",
            description: "Played fun games together and ended with a gift exchange!",
            fb_link: 'https://www.facebook.com/events/366128217787903',
            image: "images/Events/Christmas_Party.jpg",
            time: "December 21"
        },
        womens_cardgiving: {
            title: "Women's Cardsgiving",
            description: "Made nice thanksgiving cards together with other women in the fellowship!",
            fb_link: 'https://www.facebook.com/events/302761620812492',
            image: "images/Events/Womens_Cardgiving.jpg",
            time: "November 22",
        },
        pumpkin_carving: {
            title: "Pumpkin Party",
            description: "Carved pumpkins together and had a fun time of fellowship!",
            fb_link: 'https://www.facebook.com/events/358960215221842/',
            image: "images/Events/Pumpkin_Party.jpg",
            time: "Halloween Day"
        },
        escape_room_1: {
            title: "Virtual Escape Room 1",
            description: "Worked together to solve a virtual escape room!",
            fb_link: 'https://www.facebook.com/events/3275266462570407/',
            image: "images/Events/Escape_Room_1.jpg",
            time: "Welcome Week Event"
        }
    },
    upcoming_events: {
        large_group: {
            title: "Large Group",
            description: "Gather together with the community for worship and learning!",
            details: "Zoom ID: 978-9517-5741 | Listen to our Sermons here!",
            fb_link: 'https://www.facebook.com/events/1003279653409203',
            image: "images/Events/Large_Group.jpg",
            sermon_link: "https://drive.google.com/drive/folders/1aJXlQDJ9CxGYqr_Q-PBYsN86Ho576IH8?fbclid=IwAR0sS7HvmeMO1f4ebQQmbFuQBhizLWpTCagWLmtZH3nl8ISR0v2_AzW-ysE",
            time: "Monday at 8pm"
        },
        /*
        joint_sg_1: {
            title: "Joint Small Group 1",
            description: "Topic: Stewardship<br>Led by Sonia Kang & Tin-Trung Pham",
            details: "Zoom ID: 939-4529-1945",
            fb_link: '',
            image: "images/Events/Bro_App.jpg",
            time: "Tuesday at 8pm"
        },
        joint_sg_2: {
            title: "Joint Small Group 2",
            description: "Topic: Stewardship<br>Led by Aidan Monsale & Thomas Tang",
            details: "Zoom ID: 294-637-2645",
            fb_link: '',
            image: "images/Events/Winter_Retreat.jpg",
            time: "Thursday at 8pm"
        },
        */
        freshman_small_group: {
            title: "Freshman Small Group",
            description: "Focus: Self/Identity<br>Led by Elizabeth Tov & Tin-Trung Pham",
            details: "Zoom ID: 937-6687-0241",
            fb_link: '',
            image: "images/Events/Freshman_SG.jpg",
            time: "Tuesday at 8pm"
        },
        /*
        study_party: {
            title: "Study Party",
            description: "Come joins us for a fun time of studying and fellowship!",
            details: "Zoom ID: 619-279-5467",
            fb_link: '',
            image: "images/Events/Study_Party.jpg",
            time: "Wednesday at 4pm"
        },
        */
        womens_small_group: {
            title: "Women's Small Group",
            description: "Focus: Proactively dying to our earthly self<br>Led by Dorothy Tsai & Luann Huang",
            details: "Zoom ID: 960-5718-6580",
            fb_link: '',
            image: "images/Events/Womens_SG.jpg",
            time: "Wednesday at 8pm"
        },
        mens_small_group: {
            title: "Men's Small Group",
            description: "Focus: Our personal relationship with God<br>Led by Joey Truong & Thomas Tang",
            details: "Zoom ID: 958-5281-7592",
            fb_link: '',
            image: "images/Events/Mens_SG.jpg",
            time: "Thursday at 8pm"
        },
        game_night: {
            title: "Game Night",
            description: "Join us in some virtual games :) We play fun interactive games like Among Us!",
            details: "Zoom ID: 967-7844-2675" /*Join us on our Discord!*/ ,
            fb_link: '',
            image: "images/Events/Game_Night.jpg",
            time: "Thursday at 10pm"
        },
        prayer_meeting: {
            title: "Prayer Meeting",
            description: "Come join us and pray together!<br> Led by Tin-Trung Pham",
            details: "Zoom ID: 995-1239-5142",
            fb_link: '',
            image: "images/Events/Prayer_Meeting.jpg",
            time: "Friday at 12:30pm",
        }
    }
    /** Archived events
        pre_large_group: {
            title: "Pre-Large Group Dinner",
            description: "Join us before large group to eat and fellowship!",
            details: {
                "When": "Every Monday 7:00pm",
                "Where": "Cancelled due to Covid-19",
                "Contact Person": ""
            },
        },
        hope: {
            title: "HOPE",
            description: "HOPE is an intentional time of prayer for each other, our campus, and the world. We will also be doing different types of prayer activities to broaden our horizon on prayer.",
            details: {
                "When": "TBD",
                "Zoom ID": "TBD",
                "Contact Person": ""
            },
            image: "images/Schedule/HOPE.jpg"
        },
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
        }
    */
}

/**
 * *************************
 * END JSON
 * *************************
 */