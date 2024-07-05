axios
  .get("https://hp-api.onrender.com/api/characters/staff", {
    responseType: "json",
  })
  .then(function (res) {
    if (res.status === 200) {
      console.log(res.data);
      actores(res.data);
    }
  })
  .catch(function (err) {
    console.log(err);
  });

const menu = document.getElementById("burger");
const nav = document.querySelector("nav");
menu.addEventListener("click", function () {
  nav.classList.toggle("active");
});
function actores(slr) {
  const cont = document.createElement("div");
  cont.classList.add("cont");
  cont.id = "contenedor";
  document.body.appendChild(cont);
  slr.forEach((element) => {
    if (element.image != "") {
      const actores = document.createElement("div");
      actores.classList.add("actores");
      cont.appendChild(actores);
      const h2 = document.createElement("h2");
      const name = document.createTextNode(element.actor);
      h2.appendChild(name);
      actores.appendChild(h2);
      var imagen = document.createElement("img");
      imagen.src = element.image;
      actores.appendChild(imagen);

      actores.addEventListener("click", function () {
        MostrarHechizo(element);
      });
    }
  });
}
function MostrarHechizo(actores) {
  const cont = document.getElementById("contenedor");
  cont.style.display = "none";
  const detalle = document.createElement("div");
  detalle.classList.add("detalle");
  document.body.appendChild(detalle);
  const cuadraro = document.createElement("div");
  cuadraro.classList.add("cuadrado");
  detalle.appendChild(cuadraro);
  const masInfo = document.createElement("div");
  masInfo.classList.add("masInfo");
  cuadraro.appendChild(masInfo);
  const h1 = document.createElement("h1");
  const name = document.createTextNode(actores.actor);
  h1.appendChild(name);
  masInfo.appendChild(h1);
  var img = document.createElement("img");
  img.src = actores.image;
  masInfo.appendChild(img);
  const p = document.createElement("p");
  const desc = document.createTextNode("Gender: " + actores.gender);
  p.appendChild(desc);
  masInfo.appendChild(p);
  const btn = document.createElement("button");
  btn.innerHTML = "&times;";
  btn.classList.add("cerrar");
  cuadraro.appendChild(btn);
  const pp = document.createElement("P");
  const pelo = document.createTextNode("Hair Color: " + actores.hairColour);
  pp.appendChild(pelo);
  masInfo.appendChild(pp);
  const nav = document.querySelector("nav");
  nav.classList.remove("active")
  if (actores.dateOfBirth != null) {
    const pf = document.createElement("P");
    const fecha = document.createTextNode(
      "Date of birth: " + actores.dateOfBirth
    );
    pf.appendChild(fecha);
    masInfo.appendChild(pf);
  }
  btn.addEventListener("click", function () {
    detalle.remove();
    cont.style.display = "flex";
    nav.classList.remove("active")
  });
}
