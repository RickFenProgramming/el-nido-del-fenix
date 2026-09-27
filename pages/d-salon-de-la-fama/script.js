const listaHomenajes = document.querySelector(".galeria-homenaje__lista");

console.log(listaHomenajes);

const pioneros = [
  {
    nombre: "Jerry Lawson",
    reconocimiento: "Pionero de los cartuchos intercambiables",
    descripcion:
      "Su trabajo ayudó a transformar la manera en que las consolas utilizaban y distribuían videojuegos.",
  },
  {
    nombre: "Ralph Baer",
    reconocimiento: "Pionero de las consolas domésticas",
    descripcion:
      "Su trabajo en la Brown Box sentó las bases de Magnavox Odyssey, la primera consola doméstica comercial.",
  },
  {
    nombre: "Ada Lovelace",
    reconocimiento: "Pionera de la programación informática",
    descripcion:
      "Escribió un algoritmo para la Máquina Analítica de Charles Babbage y anticipó que las computadoras podrían realizar tareas más allá de los cálculos numéricos.",
  },
];

console.log(pioneros);

function crearTarjetaHomenaje(pionero) {
  const tarjetaHomenaje = document.createElement("article");
  tarjetaHomenaje.classList.add("tarjeta-homenaje");

  const nombrePionero = document.createElement("h3");
  nombrePionero.textContent = pionero.nombre;

  const reconocimientoPionero = document.createElement("p");
  reconocimientoPionero.classList.add("tarjeta-homenaje__reconocimiento");
  reconocimientoPionero.textContent = pionero.reconocimiento;

  const descripcionPionero = document.createElement("p");
  descripcionPionero.classList.add("tarjeta-homenaje__descripcion");
  descripcionPionero.textContent = pionero.descripcion;

  tarjetaHomenaje.append(
    nombrePionero,
    reconocimientoPionero,
    descripcionPionero,
  );

  listaHomenajes.append(tarjetaHomenaje);
}

crearTarjetaHomenaje(pioneros[0]);
crearTarjetaHomenaje(pioneros[1]);
crearTarjetaHomenaje(pioneros[2]);
