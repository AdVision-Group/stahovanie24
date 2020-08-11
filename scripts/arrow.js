$(window).scroll(function() {    
    var offset = window.pageYOffset;
                
    if (offset > 300) {
        document.getElementById("arrow").style.opacity = "1";
    } else {
        document.getElementById("arrow").style.opacity = "0";
    }
});