$(document).ready(function () {
    // Add smooth scrolling to all links
    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });


    $('.parallax-container').parallax({
        imageSrc: 'img/image-header-meringue.jpg',
        naturalWidth: 600,
        naturalHeight: 400,
    });


    $('.parallax-container-2').parallax({
        imageSrc: 'img/image-mid-jubotron-wedding.jpg',
        naturalWidth: 600,
        naturalHeight: 400,
    });


    // JavaScript
    window.sr = ScrollReveal();
    sr.reveal('.img-portfolio', {
        origin: 'bottom',
    });
    sr.reveal('.img-feature-2', {
        origin: 'left',
        distance: '100px',
        duration: 2000,
        scale: 1
    });


    $('a.gallery').featherlightGallery({
        previousIcon: '«',
        nextIcon: '»',
        galleryFadeIn: 300,
        openSpeed: 300
    });

});
