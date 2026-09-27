const botonesSecciones = document.querySelectorAll(".tarjeta-nido__boton");

botonesSecciones.forEach((boton) => {
  boton.addEventListener("click", () => {
    const seccionSeleccionada = boton.dataset.seccion;

    console.log(seccionSeleccionada);
  });
});
