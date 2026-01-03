let indice = 0;
let alertas = document.querySelectorAll(".alerta");

function mostrarAlerta() {
    alertas[indice].style.display = "flex";
}

function cerrarAlerta() {
    alertas[indice].style.display = "none";
}

function SiguienteAlerta() {
    alertas[indice].style.display = "none";
    indice = (indice + 1) % alertas.length;
    alertas[indice].style.display = "flex";
}
