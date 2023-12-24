function initialize() {
    const headerMenuIcon = document.getElementById("header-menu-icon");
    headerMenuIcon.addEventListener("click", showSideMenu);

    const sideMenuIcon = document.getElementById("side-menu-icon");
    sideMenuIcon.addEventListener("click", hideSideMenu);
}

function showSideMenu() {
    const sideMenu = document.getElementById("side-menu");
    sideMenu.style.visibility = "visible";
    document.getElementById("header-menu-icon").style.visibility = "hidden";
    document.getElementById("side-menu-icon").style.visibility = "visible"; // Mostrar el icono para cerrar el menú lateral
}

function hideSideMenu() {
    const sideMenu = document.getElementById("side-menu");
    sideMenu.style.visibility = "hidden";
    document.getElementById("header-menu-icon").style.visibility = "visible";
    document.getElementById("side-menu-icon").style.visibility = "hidden"; // Ocultar el icono para cerrar el menú lateral
}

initialize();
