// run these functions when the website is loaded
$(document).ready(function() {
    // json for header/body text
    for (id in churches_text) {
        if (id != 'churches') {
            $('#' + id).append(churches_text[id].replace('aacf.ucsd@aacf.org', '<a href="mailto:aacf.ucsd@aacf.org">aacf.ucsd@aacf.org</a>'));
        }
    }

    // json for church tabs
    var church_tab_div = '';
    var church_tab_ind = 0;
    for (churches in churches_text.churches) {
        if (church_tab_ind == 0) {
            church_tab_div = '<li class="active"><a class="church-tab-title" href="#' + churches + '" role="tab" data-toggle="tab">' + churches + '</a></li>';
        } else {
            church_tab_div = '<li><a class="church-tab-title" href="#' + churches + '" role="tab" data-toggle="tab">' + churches + '</a></li>';
        }
        $('#churches > .nav-tabs').append(church_tab_div);
        church_tab_ind++;
    }

    // json for church details
    var churches_div = '';
    var churches_id = '';
    var churches_ind = 0;
    for (church in churches_text.churches) {
        if (churches_ind == 0) {
            churches_div = '<div class="tab-pane active" id="' + church + '"><h4 class="church-title"></h4><p class="church-details"></p></div>';
        } else {
            churches_div = '<div class="tab-pane" id="' + church + '"><h4 class="church-title"></h4><p class="church-details"></p></div>';
        }
        churches_id = '#churches > .tab-content > #' + church;
        $('#churches > .tab-content').append(churches_div);
        $(churches_id + '> .church-title').text(churches_text.churches[church].title);
        for (details in churches_text.churches[church].details) {
            $(churches_id + '> .church-details').append('<b>' + details + ': </b>');
            if (details == 'Website') {
                $(churches_id + '> .church-details').append('<a target="_blank" href="' + churches_text.churches[church].details[details] + '">' + churches_text.churches[church].details[details] + '</a><br>');
            } else {
                $(churches_id + '> .church-details').append(churches_text.churches[church].details[details] + '<br>');
            }
        }
        for (service in churches_text.churches[church].services) {
            $(churches_id + '> .church-details').append('<br><b>' + service + ': </b>');
            $(churches_id + '> .church-details').append(churches_text.churches[church].services[service] + '<br>');
        }
        for (contact in churches_text.churches[church].contacts) {
            $(churches_id + '> .church-details').append('<br><b>' + contact + ': </b>');
            $(churches_id + '> .church-details').append(churches_text.churches[church].contacts[contact] + '<br>');
        }
        churches_ind++;
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