const formulario = document.getElementById("formLogin");
const contrasena = document.getElementById("contrasena");
const btnMostrar = document.getElementById("btnMostrar");

btnMostrar.addEventListener("click", () => {
    const mostrar = contrasena.type === "password";

    contrasena.type = mostrar ? "text" : "password";
    btnMostrar.textContent = mostrar ? "Ocultar" : "Ver";
    btnMostrar.setAttribute(
        "aria-label",
        mostrar ? "Ocultar contraseña" : "Mostrar contraseña"
    );
});

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    alert("Esta es una demostración del front-end de GeoMove. La conexión al sistema se implementará posteriormente.");
});
