// run these functions when the website is loaded
window.onload = function() {
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