// Seleccionamos el elemento div con id 'one'
let div = document.getElementById("one");
let div2 = document.getElementById("two");
let div3 = document.getElementById("three");
let div4 = document.getElementById("four");

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

div3.onmouseover = function () {
    // Escalamos el div al doble de su tamaño
    div3.style.transform = "scale(1.1)";
};

div3.onmouseout = function () {
    // Restauramos el div a su tamaño original
    div3.style.transform = "scale(1)";
};

div4.onmouseover = function () {
    div4.style.transform = "scale(1.1)";
};

div4.onmouseout = function () {
    div4.style.transform = "scale(1)";
};