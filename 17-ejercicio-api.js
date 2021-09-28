const $tarjeta = document.querySelector("#tarjeta");
const $contenedor = document.querySelector("#contenedor");
let content = "";

let mostrar_cartas = () => {
  fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
    .then((resp) => resp.json())
    .then((data) => {
      let count = Object.keys(data).length;
      for (let i = 0; i < count; i++) {
        content += `
            <div id="tarjeta" class="card m-3" style="width: 18rem;">
                        <img src="${data[i].url}" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <p class="card-text">${data[i].title}</p>
                        </div>
                    </div>;
                  `
      }
      $contenedor.innerHTML = content;
    });
};
mostrar_cartas();