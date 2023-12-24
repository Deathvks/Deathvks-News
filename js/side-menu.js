function initialize() {
    const headerMenuIcon = document.getElementById("header-menu-icon");
    headerMenuIcon.addEventListener("click", function(event) {
        showSideMenu();
        event.stopPropagation(); // Previene que el evento se propague al documento
    });

    const sideMenuIcon = document.getElementById("side-menu-icon");
    sideMenuIcon.addEventListener("click", function(event) {
        hideSideMenu();
        event.stopPropagation(); // Previene que el evento se propague al documento
    });

    // Escucha los clics en el documento
    document.addEventListener("click", function(event) {
        const sideMenu = document.getElementById("side-menu");
        if (sideMenu.style.visibility === "visible") {
            hideSideMenu();
        }
    });
}

function showSideMenu() {
    const sideMenu = document.getElementById("side-menu");
    sideMenu.style.visibility = "visible";
    document.getElementById("header-menu-icon").style.visibility = "hidden";
    document.getElementById("side-menu-icon").style.visibility = "visible";
}

function hideSideMenu() {
    const sideMenu = document.getElementById("side-menu");
    sideMenu.style.visibility = "hidden";
    document.getElementById("header-menu-icon").style.visibility = "visible";
    document.getElementById("side-menu-icon").style.visibility = "hidden";
}

initialize();
