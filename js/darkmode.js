function initialize() {
    const DARK_MODE = document.getElementById('dark-mode');
    DARK_MODE.addEventListener('click', toggleMode);
}

function toggleMode() {
    if (document.body.style.backgroundColor === 'black') {
        document.body.style.backgroundColor = 'white';
        this.textContent = 'Modo Oscuro';
    } else {
        document.body.style.backgroundColor = 'black';
        this.textContent = 'Modo Claro';
    }
}

initialize();
