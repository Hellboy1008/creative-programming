/**
 * *************************
 * START JSON
 * *************************
 */

var photos_text = {
    page_banner: 'images/Page_Banners/Photos_Page.png',
    photos_body: 'Here are some pictures and videos from past events and retreats! Click the different event headers to view the photos.',
    photos_header: 'Photos',
    photos_text: {
        'events': {
            description: "Photos from general events and hangouts we have each year. These events include AACF Basketball Tournament, large groups,  and other smaller hangouts we have throughout the year.",
            relevant_years: '2013-14, 2014-15, 2015-16, 2016-17, 2017-18, 2018-19, 2019-20',
            title: 'General Events'
        },
        'wi_retreat': {
            description: "Photos from our winter retreat we have every year. Winter retreat is a time where we travel as a fellowship to a retreat site and spend intentional time to grow together.",
            relevant_years: '2013-14, 2014-15, 2015-16, 2016-17, 2017-18, 2018-19, 2019-20',
            title: 'Winter Retreat'
        },
        'bro_app': {
            description: "Photos from our brother's appreciation we have every other year. Brother's appreciation is a time where we celebrate and appreciate the brothers in the fellowship.",
            relevant_years: '2013-14, 2015-16, 2017-18, 2019-20',
            title: "Brother's Appreciation"
        },
        'sis_app': {
            description: "Photos from our sister's appreciation we have every other year. Sister's appreciation is a time where we celebrate and appreciate the sisters in the fellowship.",
            relevant_years: '2014-15, 2015-16, 2016-17, 2018-19',
            title: "Sister's Appreciation"
        },
        'eoy_banquet': {
            description: "Photos from our end of year banquet we hold every year. End of year banquet is a time where we reflect on what we've learned each year and celebrate the graduating seniors.",
            relevant_years: '2013-14, 2014-15, 2015-16, 2016-17, 2017-18, 2018-19',
            title: 'End of Year Banquet'
        }
    },
    photos: {
        "2019-2020 Events": '2019-20-events',
        "2019-2020 Brother's Appreciation": '2019-20-bro-app',
        "2019-2020 Winter Retreat": '2019-20-wi-retreat',
        "2018-2019 Events": '2018-19-events',
        "2018-2019 End of Year Banquet": '2018-19-eoy-banquet',
        "2018-2019 Sister's Appreciation": '2018-19-sis-app',
        "2018-2019 Winter Retreat": '2018-19-wi-retreat',
        "2017-2018 Events": '2017-18-events',
        "2017-2018 End of Year Banquet": '2017-18-eoy-banquet',
        "2017-2018 Brother's Appreciation": '2017-18-bro-app',
        "2017-2018 Winter Retreat": '2017-18-wi-retreat',
        "2016-2017 Events": '2016-17-events',
        "2016-2017 End of Year Banquet": '2016-17-eoy-banquet',
        "2016-2017 Sister's Appreciation": '2016-17-sis-app',
        "2016-2017 Winter Retreat": '2016-17-wi-retreat',
        "2015-2016 Events": '2015-16-events',
        "2015-2016 End of Year Banquet": '2015-16-eoy-banquet',
        "2015-2016 Brother's and Sister's Appreciation": '2015-16-bro-sis-app',
        "2015-2016 Winter Retreat": '2015-16-wi-retreat',
        "2014-2015 Events": '2014-15-events',
        "2014-2015 End of Year Banquet": '2014-15-eoy-banquet',
        "2014-2015 Sister's Appreciation": '2014-15-sis-app',
        "2014-2015 Winter Retreat": '2014-15-wi-retreat',
        "2013-2014 Events": '2013-14-events',
        "2013-2014 End of Year Banquet": '2013-14-eoy-banquet',
        "2013-2014 Brother's Appreciation": '2013-14-bro-app',
        "2013-2014 Winter Retreat": '2013-14-wi-retreat'
    }
}

var photos = {
    Y13_14: {
        bro_app: {
            count: 1,
            id: '2013-14-bro-app',
            name: 'UCSD_AACF_2014_Bro_App',
            path: 'images/Gallery/2013_2014/Bro_App/'
        },
        eoy_banquet: {
            count: 1,
            id: '2013-14-eoy-banquet',
            name: 'UCSD_AACF_2014_EOY_Banquet',
            path: 'images/Gallery/2013_2014/EOY_Banquet/'
        },
        events: {
            count: 19,
            id: '2013-14-events',
            name: 'UCSD_AACF_2013_2014_Events',
            path: 'images/Gallery/2013_2014/Events/'
        },
        wi_retreat: {
            count: 8,
            id: '2013-14-wi-retreat',
            name: 'UCSD_AACF_2014_WI_Retreat',
            path: 'images/Gallery/2013_2014/WI_Retreat/'
        }
    },
    Y14_15: {
        eoy_banquet: {
            count: 1,
            id: '2014-15-eoy-banquet',
            name: 'UCSD_AACF_2015_EOY_Banquet',
            path: 'images/Gallery/2014_2015/EOY_Banquet/'
        },
        events: {
            count: 14,
            id: '2014-15-events',
            name: 'UCSD_AACF_2014_2015_Events',
            path: 'images/Gallery/2014_2015/Events/'
        },
        sis_app: {
            count: 2,
            id: '2014-15-sis-app',
            name: 'UCSD_AACF_2015_Sis_App',
            path: 'images/Gallery/2014_2015/Sis_App/'
        },
        wi_retreat: {
            count: 4,
            id: '2014-15-wi-retreat',
            name: 'UCSD_AACF_2015_WI_Retreat',
            path: 'images/Gallery/2014_2015/WI_Retreat/'
        }
    },
    Y15_16: {
        bro_sis_app: {
            count: 13,
            id: '2015-16-bro-sis-app',
            name: 'UCSD_AACF_2016_Bro_Sis_App',
            path: 'images/Gallery/2015_2016/Bro_Sis_App/'
        },
        eoy_banquet: {
            count: 1,
            id: '2015-16-eoy-banquet',
            name: 'UCSD_AACF_2016_EOY_Banquet',
            path: 'images/Gallery/2015_2016/EOY_Banquet/'
        },
        events: {
            count: 37,
            id: '2015-16-events',
            name: 'UCSD_AACF_2015_2016_Events',
            path: 'images/Gallery/2015_2016/Events/'
        },
        wi_retreat: {
            count: 1,
            id: '2015-16-wi-retreat',
            name: 'UCSD_AACF_2016_WI_Retreat',
            path: 'images/Gallery/2015_2016/WI_Retreat/'
        }
    },
    Y16_17: {
        eoy_banquet: {
            count: 7,
            id: '2016-17-eoy-banquet',
            name: 'UCSD_AACF_2017_EOY_Banquet',
            path: 'images/Gallery/2016_2017/EOY_Banquet/'
        },
        events: {
            count: 31,
            id: '2016-17-events',
            name: 'UCSD_AACF_2016_2017_Events',
            path: 'images/Gallery/2016_2017/Events/'
        },
        sis_app: {
            count: 7,
            id: '2016-17-sis-app',
            name: 'UCSD_AACF_2017_Sis_App',
            path: 'images/Gallery/2016_2017/Sis_App/'
        },
        wi_retreat: {
            count: 7,
            id: '2016-17-wi-retreat',
            name: 'UCSD_AACF_2017_WI_Retreat',
            path: 'images/Gallery/2016_2017/WI_Retreat/'
        }
    },
    Y17_18: {
        bro_app: {
            count: 16,
            id: '2017-18-bro-app',
            name: 'UCSD_AACF_2018_Bro_App',
            path: 'images/Gallery/2017_2018/Bro_App/'
        },
        eoy_banquet: {
            count: 16,
            id: '2017-18-eoy-banquet',
            name: 'UCSD_AACF_2018_EOY_Banquet',
            path: 'images/Gallery/2017_2018/EOY_Banquet/'
        },
        events: {
            count: 7,
            id: '2017-18-events',
            name: 'UCSD_AACF_2017_2018_Events',
            path: 'images/Gallery/2017_2018/Events/'
        },
        wi_retreat: {
            count: 29,
            id: '2017-18-wi-retreat',
            name: 'UCSD_AACF_2018_WI_Retreat',
            path: 'images/Gallery/2017_2018/WI_Retreat/'
        }
    },
    Y18_19: {
        eoy_banquet: {
            count: 82,
            id: '2018-19-eoy-banquet',
            name: 'UCSD_AACF_2019_EOY_Banquet',
            path: 'images/Gallery/2018_2019/EOY_Banquet/'
        },
        events: {
            count: 5,
            id: '2018-19-events',
            name: 'UCSD_AACF_2018_2019_Events',
            path: 'images/Gallery/2018_2019/Events/'
        },
        sis_app: {
            count: 58,
            id: '2018-19-sis-app',
            name: 'UCSD_AACF_2019_Sis_App',
            path: 'images/Gallery/2018_2019/Sis_App/'
        },
        wi_retreat: {
            count: 20,
            id: '2018-19-wi-retreat',
            name: 'UCSD_AACF_2019_WI_Retreat',
            path: 'images/Gallery/2018_2019/WI_Retreat/'
        }
    },
    Y19_20: {
        bro_app: {
            count: 47,
            id: '2019-20-bro-app',
            name: 'UCSD_AACF_2020_Bro_App',
            path: 'images/Gallery/2019_2020/Bro_App/'
        },
        events: {
            count: 10,
            id: '2019-20-events',
            name: 'UCSD_AACF_2019_2020_Events',
            path: 'images/Gallery/2019_2020/Events/'
        },
        wi_retreat: {
            count: 52,
            id: '2019-20-wi-retreat',
            name: 'UCSD_AACF_2020_WI_Retreat',
            path: 'images/Gallery/2019_2020/WI_Retreat/'
        }
    }
}

/**
 * *************************
 * END JSON
 * *************************
 */