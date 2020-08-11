var link = document.getElementById("service-link");
var dropdown = document.getElementById("dropdown");

link.onmouseover = function() {
    var position = link.getBoundingClientRect();

    var left = position.left;
    var bottom = position.bottom;

    dropdown.style.left = left + "px";
    dropdown.style.top = bottom + "px";
    dropdown.style.display = "flex";
};

link.onmouseout = function() {
    dropdown.style.display = "none";
};
        
dropdown.onmouseover = function() {
    dropdown.style.display = "flex";
};

dropdown.onmouseout = function() {
    dropdown.style.display = "none";
};