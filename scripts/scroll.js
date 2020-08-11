scrollToElement("#header .content .menu .item");
scrollToElement("#categories .content .item");
scrollToElement("#footer .content .section a");
scrollToElement("#arrow");
scrollToElementMobile("#mobile-menu .content .item");

function scrollToElement(button) {
    $(document).ready(function() {
        $(button).on('click', function(event) {
            if (this.hash !== "") {
                event.preventDefault();

                var hash = this.hash;

                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 800, function() {
                    window.location.hash = hash;
                });
            }
        });
    });
}

function scrollToElementMobile(button) {
    $(document).ready(function() {
        $(button).on('click', function(event) {
            if (this.hash !== "") {
                event.preventDefault();

                var hash = this.hash;
                
                document.getElementById("mobile-menu").style.height = 0;
                document.getElementById("mobile-menu").onclick = "showMenu()";

                setTimeout(function() {
                    $('html, body').animate({
                        scrollTop: $(hash).offset().top
                    }, 800, function() {
                        window.location.hash = hash;
                    });
                 }, 500);
            }
        });
    });
}