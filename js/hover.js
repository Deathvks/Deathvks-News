// Seleccionamos el elemento div con id 'one'
var div = document.getElementById("one");
var div2 = document.getElementById("two");

// Asignamos una función al evento mouseover
div.onmouseover = function () {
    // Escalamos el div al doble de su tamaño
    div.style.transform = "scale(1.1)";
};

// Asignamos una función al evento mouseout
div.onmouseout = function () {
    // Restauramos el div a su tamaño original
    div.style.transform = "scale(1)";
};

div2.onmouseover = function () {
    // Escalamos el div al doble de su tamaño
    div2.style.transform = "scale(1.1)";
};

div2.onmouseout = function () {
    // Restauramos el div a su tamaño original
    div2.style.transform = "scale(1)";
};