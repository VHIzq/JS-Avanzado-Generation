const $btnCat = document.querySelector("#btnCat");
const $catsImg = document.querySelector("#cats-img");

$btnCat.addEventListener("click", async() =>{
  const resp = await fetch("https://api.thecatapi.com/v1/images/search");
  const data = await resp.json();

  const imgCat = document.createElement("img");
  imgCat.src = data[0].url;
  imgCat.width = "300";
  $catsImg.appendChild(imgCat);
})




/* fetch("https://api.thecatapi.com/v1/images/search")
.then(resp => resp.json())
.then(data => {
  console.log(data);
  const imgCat = document.createElement("img");
  imgCat.src = data[0].url;
  imgCat.width = "300";
  $catsImg.appendChild(imgCat);
}); */