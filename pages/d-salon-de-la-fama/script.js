const listaHomenajes = document.querySelector(".galeria-homenaje__lista");

console.log(listaHomenajes);

const primerPionero = {
  nombre: "Jerry Lawson",
  reconocimiento: "Pionero de los cartuchos intercambiables",
  descripcion:
    "Su trabajo ayudó a transformar la manera en que las consolas utilizaban y distribuían videojuegos.",
};

console.log(primerPionero);

const tarjetaHomenaje = document.createElement("article");
tarjetaHomenaje.classList.add("tarjeta-homenaje");

const nombrePionero = document.createElement("h3");
nombrePionero.textContent = primerPionero.nombre;

tarjetaHomenaje.append(nombrePionero);
listaHomenajes.append(tarjetaHomenaje);
