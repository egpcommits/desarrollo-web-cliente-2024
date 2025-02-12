document.querySelector("button").addEventListener("click", function () {
  let salida = document.querySelector("#salida");
  const url = "https://omgvamp-hearthstone-v1.p.rapidapi.com/info";
  //729413b8e3msh377a94be04c10a1p1cc325jsnaa9376328948

  const cabecera = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "729413b8e3msh377a94be04c10a1p1cc325jsnaa9376328948",
      "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
    },
  };

  fetch(url, cabecera)
    .then(function (respuesta) {
      //Capturo la respuesta
      console.log(respuesta);

      if (!respuesta.ok) {
        throw new Error("Error del Fetch: " + respuesta.status);
      }

      //DEvuelvo el formato texto o json
      return respuesta.json();
    })
    .then(function (datos) {
      //Capturo y gestiono los datos
      console.log(datos);
      let clases = datos.classes;
      let plantilla = "";
      for (let clase of clases) {
        plantilla += `<p>${clase}</p>`;
      }

      salida.innerHTML = plantilla;
    })
    .catch(function (error) {
      alert("Problemas accediendo a la URL: " + error);
    });
});
