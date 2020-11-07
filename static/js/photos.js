// run these functions when the website is loaded
window.onload = function() {

    // json for header and body
    for (id in photos_text) {
        if (id != 'photos') {
            $('#' + id).append(photos_text[id]);
        }
    }

    // json for photo gallery
    var photos_div = '';
    for (album in photos_text.photos) {
        photos_div = '<h2 class="album-header" id="' + photos_text.photos[album] + '" onclick="showPhotos(this)">' + album + '</h2>';
        $('#photos').append(photos_div);
    }

    // json for footer
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
        transition: 'fade'
    });
};

// onclick function for photos
function showPhotos(caller_obj) {
    // append galleria and images
    var img;
    $('#' + $(caller_obj).context.id).after('<div class="galleria" id="' + $(caller_obj).context.id + '"></div>');
    for (year in photos) {
        for (events in photos[year]) {
            if (photos[year][events].id != $(caller_obj).context.id) {
                continue;
            }
            for (i = 1; i <= photos[year][events].count; i++) {
                img = document.createElement("img");
                img.src = photos[year][events].path + photos[year][events].name + " (" + i + ").jpg";
                $('#' + $(caller_obj).context.id + '.galleria')[0].append(img)
                console.log($('#' + $(caller_obj).context.id + '.galleria'))
            }
        }
    }

    $('#' + $(caller_obj).context.id).attr('onclick', '');

    // run galleria
    Galleria.run('#' + $(caller_obj).context.id + '.galleria');
}