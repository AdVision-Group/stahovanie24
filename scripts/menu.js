function showMenu() {
    var menu = document.getElementById("mobile-menu");
    var height = document.getElementById("mobile-menu-content").offsetHeight;
    
    menu.style.height = height + "px";
    
    document.getElementById("menu-button").setAttribute("onclick", "javascript:hideMenu();");
}

function hideMenu() {
    var menu = document.getElementById("mobile-menu");
    
    menu.style.height = "0px";
    
    document.getElementById("menu-button").setAttribute("onclick", "javascript:showMenu();");
}