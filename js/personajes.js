// Hacemos llamada a la libreria Axios
axios
  .get("https://hp-api.onrender.com/api/characters", {
    responseType: "json",
  })
  .then(function (res) {
    if (res.status === 200) {
      console.log(res.data);
    }
    res.data.forEach(function (personaje) {
      // console.log(personaje);
      foto(personaje);
    });
  })
  .catch(function (err) {
    console.log(err);
  });

// barra de navegación
const menu = document.getElementById("burger");
const nav = document.querySelector("nav");
// creamos el div Contenedor donde voy a poner todas las fotos
const cont = document.createElement("div");
cont.classList.add("contenedor");
document.body.appendChild(cont);
menu.addEventListener("click", function () {
  nav.classList.toggle("active");
});
function foto(slr) {
  if (slr.image != "") {
    // Creamos el div de todos los personajes
    const foto = document.createElement("div");
    foto.classList.add("foto");
    cont.appendChild(foto);
    foto.id = slr.id;
    // cogemos las imagenes y las metemos dentro de foto
    const img = document.createElement("img");
    img.src = slr.image;
    foto.appendChild(img);
    // creamos div datos dentro del div fotos
    const datos = document.createElement("div");
    datos.classList.add("datos");
    foto.appendChild(datos);
    // Cogemos el nombre y lo metemos dentro de foto
    const h2 = document.createElement("h2");
    const nombre = document.createTextNode(slr.name);
    h2.appendChild(nombre);
    datos.appendChild(h2);
    // cogemos los datos de la casa y los metemos dentro de la casa
    const p = document.createElement("p");
    const casa = document.createTextNode(slr.house);
    p.appendChild(casa);
    datos.appendChild(p);
    // Ponemos cada color para su
    if (slr.house === "Gryffindor") {
      foto.style.backgroundColor = "#7F0909";
      h2.style.color = "#ffc500";
      p.style.color = "#eeba30";
    } else if (slr.house === "Slytherin") {
      foto.style.backgroundColor = "#1A472A";
      h2.style.color = "#c0c0c0";
      p.style.color = "#5d5d5d";
    } else if (slr.house === "Ravenclaw") {
      foto.style.backgroundColor = "#222f5b";
      h2.style.color = "#946b2d";
      p.style.color = "#5d5d5d";
    } else if (slr.house === "Hufflepuff") {
      foto.style.backgroundColor = "#f0c75e";
      h2.style.color = "#372e29";
      p.style.color = "#726255";
    } else {
      foto.style.backgroundColor = "#757575 ";
    }
    foto.addEventListener("click", function () {
      mostrarPersonaje(slr);
    });
  }
}
function mostrarPersonaje(personaje) {
  // Crear un nuevo div
  const masInfo = document.createElement("div");
  masInfo.classList.add("info");
  document.body.appendChild(masInfo);

  // Cerrar la barra de navegación si está abierta
  nav.classList.remove("active");

  // Hacemos un div con mas informacion
  const img = document.createElement("img");
  img.src = personaje.image;
  masInfo.appendChild(img);

  const detalles = document.createElement("div");
  detalles.classList.add("detalles");
  masInfo.appendChild(detalles);
  //
  const nombres = document.createElement("p");
  const nombre = document.createTextNode("Name: " + personaje.name);
  nombres.appendChild(nombre);
  detalles.appendChild(nombres);

  if (personaje.house != "") {
    const p = document.createElement("p");
    const casa = document.createTextNode("House: " + personaje.house);
    p.appendChild(casa);
    detalles.appendChild(p);
  } else {
    casa = "No tiene casa, solo alumnos de Howarts";
  }
  const especie = document.createElement("p");
  const esptex = document.createTextNode("Specie: " + personaje.species);
  especie.appendChild(esptex);
  detalles.appendChild(especie);
  if (personaje.patronus != "") {
    const pp = document.createElement("P");
    const patronus = document.createTextNode("Patronus: " + personaje.patronus);
    pp.appendChild(patronus);
    detalles.appendChild(pp);
  }
  if (personaje.wand.core != "") {
    const pw = document.createElement("p");
    const wand = document.createTextNode("Wand: " + personaje.wand.core);
    pw.appendChild(wand);
    detalles.appendChild(pw);
  }

  if (personaje.house === "Gryffindor") {
    masInfo.style.backgroundColor = "#7F0909";
  } else if (personaje.house === "Slytherin") {
    masInfo.style.backgroundColor = "#1A472A";
  } else if (personaje.house === "Ravenclaw") {
    masInfo.style.backgroundColor = "#222f5b";
  } else if (personaje.house === "Hufflepuff") {
    masInfo.style.backgroundColor = "#f0c75e";
  } else {
    masInfo.style.backgroundColor = "#757575 ";
  }
  // Ocultar todos los elementos de la pantalla principal excepto la foto seleccionada
  cont.style.display = "none";

  /*   const foto = document.getElementsByClassName("foto");
  for (let i = 0; i < foto.length; i++) {
    foto[i].style.display = "none";
  } */

  //  botón para cerrar
  const cerrar = document.createElement("button");
  cerrar.classList.add("cerrar");
  cerrar.innerHTML = "&times;";
  cerrar.classList.add("cerrar");
  masInfo.appendChild(cerrar);

  // Evento para que cuando le de al botón de cerrar todo vuelva a ser como antes
  cerrar.addEventListener("click", function () {
    masInfo.remove();
    cont.style.display = "flex";
    nav.classList.remove("active")
  });
}
