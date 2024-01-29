document.getElementById('formularioContacto').addEventListener('submit', function(event){
    var nombre = document.getElementById('name').value;
    var correo = document.getElementById('email').value;
    var mensajeError = document.getElementById('error');

    mensajeError.textContent = ''; // Limpiar mensaje de error anterior

    if(nombre == '' || correo == '') {
        mensajeError.textContent = 'Por favor, complete todos los campos.';
        event.preventDefault();
        return;
    }

    if(!correo.includes('@')) {
        mensajeError.textContent = 'Por favor, ingrese una dirección de correo electrónico válida.';
        event.preventDefault();
    }
});
