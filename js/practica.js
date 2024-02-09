    function initialize() {
    const DARK_MODE = document.getElementById('dark-mode');
    DARK_MODE.addEventListener('click', showDarkMode);

    // Al cargar la página, verifica si el modo oscuro está activado en el local storage
    if (localStorage.getItem('theme') === 'dark') {
        document.body.style.backgroundColor = 'black';
        document.querySelector('.topic').style.color = "white";
        document.getElementById('after-header').style.backgroundColor = "rgb(23, 23, 24)";
        document.getElementById('one').style.backgroundColor = "black";
        document.getElementById('two').style.backgroundColor = "black";
        document.getElementById('title').style.color = "white";
        document.getElementById('title-two').style.color = "white";
        document.getElementById('formularioContacto').style.backgroundColor = "black";
        DARK_MODE.innerText = 'Tema Claro';
    } else {
        document.body.style.backgroundColor = 'white';
        document.querySelector('.topic').style.color = "black";
        document.getElementById('after-header').style.backgroundColor = "rgb(230, 233, 235)";
        document.getElementById('one').style.backgroundColor = "white";
        document.getElementById('two').style.backgroundColor = "white";
        document.getElementById('title').style.color = "black";
        document.getElementById('title-two').style.color = "black";
        document.getElementById('formularioContacto').style.backgroundColor = "white";
        DARK_MODE.innerText = 'Tema Oscuro';
    }
}

function showDarkMode() {

    const DARK_MODE = document.getElementById('dark-mode');

    if (document.body.style.backgroundColor === 'white') {
        document.body.style.backgroundColor = 'black';
        document.querySelector('.topic').style.color = "white";
        document.getElementById('after-header').style.backgroundColor = "rgb(23, 23, 24)";
        document.getElementById('one').style.backgroundColor = "black";
        document.getElementById('two').style.backgroundColor = "black";
        document.getElementById('title').style.color = "white";
        document.getElementById('title-two').style.color = "white";
        document.getElementById('formularioContacto').style.backgroundColor = "black";
        DARK_MODE.innerText = 'Tema Claro';

        localStorage.setItem('theme', 'dark'); // Guarda el tema en modo oscuro
    } else {
        document.body.style.backgroundColor = 'white';
        DARK_MODE.innerText = 'Tema Oscuro';
        document.querySelector('.topic').style.color = "black";
        document.getElementById('after-header').style.backgroundColor = "rgb(230, 233, 235)";
        document.getElementById('one').style.backgroundColor = "white";
        document.getElementById('two').style.backgroundColor = "white";
        document.getElementById('title').style.color = "black";
        document.getElementById('title-two').style.color = "black";
        document.getElementById('formularioContacto').style.backgroundColor = "white";
        localStorage.setItem('theme', 'light'); // Guarda el tema en modo claro
    }
}

initialize();
