axios
  .get("https://hp-api.onrender.com/api/spells", {
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
    const hechizo = document.createElement("div");
    hechizo.classList.add("hechizo");
    cont.appendChild(hechizo);
    const h2 = document.createElement("h2");
    const name = document.createTextNode(element.name);
    h2.appendChild(name);
    hechizo.appendChild(h2);
    const p = document.createElement("p");
    const desc = document.createTextNode(element.description);
    p.appendChild(desc);
    hechizo.appendChild(p);
    // hechizo.addEventListener("click", function () {
    //   MostrarHechizo(element);
    // });
  });
}
// function MostrarHechizo(hechizo) {
//   const cont = document.getElementById("contenedor");
//   cont.style.display = "none";
//   const detalle = document.createElement("div");
//   detalle.classList.add("detalle");
//   document.body.appendChild(detalle);
//   const h1 = document.createElement("h1");
//   const name = document.createTextNode(hechizo.name);
//   h1.style.color = "#ffff"
//   h1.appendChild(name);
//   detalle.appendChild(h1);
//   const p = document.createElement("p");
//   const desc = document.createTextNode(hechizo.description);
//   p.style.color = "#ffff"
//   p.appendChild(desc);
//   detalle.appendChild(p);
// }
