// run these functions when the website is loaded
window.onload = function() {
    // json for page banner
    $('#page_banner').css('background-image', 'url(' + photos_text["page_banner"] + ')');

    // json for header and body
    for (id in photos_text) {
        if (id != 'photos' && id != 'page_banner') {
            $('#' + id).append(photos_text[id]);
        }
    }

    // json for photo container
    var photos_container = '';
    for (photos_type in photos_text.photos_text) {
        photos_container = '<div class="photo-section photos-row" id="' + photos_type + '"><div class="photos-text photos-column"><p class="photos-type-title"></p><p class="photos-type-desc"></p></div><div class="galleria photos-column"></div><div class="photos-selection photos-column"></div></div>';
        $('#photos').append(photos_container);
        $('#' + photos_type + '>.photos-text>.photos-type-title').append(photos_text.photos_text[photos_type].title);
        $('#' + photos_type + '>.photos-text>.photos-type-desc').append(photos_text.photos_text[photos_type].description);
        $('#' + photos_type + '>.photos-selection').append('<select class="photos-selector" name="year" id="select_year_' + photos_type + '"><option hidden>Select year</option></select><button type="button" onclick="showPhotos(this)" class="year-buttons" id="btn_' + photos_type + '"><i class="fa fa-arrow-right"></i></button>');
        relevant_years_arr = photos_text.photos_text[photos_type].relevant_years.split(",");
        // add photos to initial gallery
        initial_year = relevant_years_arr[relevant_years_arr.length - 1].trim();
        photo_id = (initial_year + '_' + photos_type).replaceAll('_', '-');
        for (year in photos) {
            for (events in photos[year]) {
                if (photos[year][events].id != photo_id) {
                    continue;
                }
                $('#' + photos_type + '>.galleria').attr('id', photo_id);
                for (i = 1; i <= photos[year][events].count; i++) {
                    img = document.createElement("img");
                    img.src = photos[year][events].path + photos[year][events].name + " (" + i + ").jpg";
                    $('#' + photo_id + '.galleria')[0].append(img)
                }
            }
        }
        Galleria.run('#' + photo_id + '.galleria');
        // add relevant years to select option
        for (years in relevant_years_arr) {
            $('#' + photos_type + '>.photos-selection>#select_year_' + photos_type).append('<option value="' + years + '">' + relevant_years_arr[years].trim() + '</option>');
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

    // load galleria
    Galleria.loadTheme('static/gallery_files/galleria.classic.min.js');
    Galleria.configure({
        transition: 'fade',
        imageCrop: 'landscape',
        thumbnails: false
    });
};

// onclick function for photos
function showPhotos(caller_obj) {
    selected_id = $('#select_year' + caller_obj.id.substring(3) + ' option:selected').text() + caller_obj.id.substring(3);
    selected_id = selected_id.replaceAll('_', '-');
    if (selected_id.indexOf('Select year') != -1) {
        return;
    } else if (selected_id == '2015-16-bro-app' || selected_id == '2015-16-sis-app') {
        selected_id = '2015-16-bro-sis-app';
    }
    $('#' + caller_obj.id.substring(4) + ' .galleria').remove();
    $('<div class="galleria photos-column"></div>').insertAfter('#' + caller_obj.id.substring(4) + '>.photos-text');
    // add photos
    for (year in photos) {
        for (events in photos[year]) {
            if (photos[year][events].id != selected_id) {
                continue;
            }
            $('#' + caller_obj.id.substring(4) + ' .galleria').attr('id', selected_id);
            for (i = 1; i <= photos[year][events].count; i++) {
                img = document.createElement("img");
                img.src = photos[year][events].path + photos[year][events].name + " (" + i + ").jpg";
                $('#' + caller_obj.id.substring(4) + ' .galleria')[0].append(img)
            }
        }
    }
    Galleria.run('#' + caller_obj.id.substring(4) + ' .galleria');
}