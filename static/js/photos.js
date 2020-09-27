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
        photos_div = '<h2 class="album-header">' + album + '</h2><div class="galleria" id="' + photos_text.photos[album] + '"></div>';
        $('#photos').append(photos_div);
    }
    $('#photos').append('<hr>');

    // json for footer
    for (media in footer) {
        if (media == 'aacf_email') {
            $('#' + media).attr('href', 'mailto:' + footer[media]);
        } else {
            $('#' + media).attr('href', footer[media]);
        }
    }

    // add photos to html
    var img;
    for (year in photos) {
        for (events in photos[year]) {
            for (i = 1; i <= photos[year][events].count; i++) {
                img = document.createElement("img");
                img.src = photos[year][events].path + photos[year][events].name + " (" + i + ").jpg";
                document.getElementById(photos[year][events].id).appendChild(img);
            }
        }
    }

    // load photo gallery
    Galleria.loadTheme('static/gallery_files/galleria.classic.min.js');
    Galleria.configure({
        transition: 'fade'
    });
    Galleria.run('.galleria');
};