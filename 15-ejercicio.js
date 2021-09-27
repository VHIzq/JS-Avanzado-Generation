const $btnCat = document.querySelector("#btnCat");
const $catsImg = document.querySelector("#cats-img");

$btnCat.addEventListener("click", () =>{
  fetch("https://api.thecatapi.com/v1/images/search")
  .then(resp => resp.json())
  .then(data => {
    console.log(data);
    const imgCat = document.createElement("img");
    imgCat.src = data[0].url;
    imgCat.width = "300";
    $catsImg.appendChild(imgCat);
    /* document.body.append(imgCat); */
  });
})

  /* Por desestructuración
    ¨Podemos estraer elwmwntos de un arreglo
    u objeto */
    /* const [cat] = data; */
    /* const [cat] = data; == const cat = data[0] */
    /*  console.log(cat);
      imgCat.src = url;
    const {url} = cat; */