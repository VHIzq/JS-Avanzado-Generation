//@ts-check
const $cta = document.querySelector("#cta");
const $dogsImg = document.querySelector("#dogs-imgs");

$cta.addEventListener("click", () => {
  fetch("https://dog.ceo/api/breeds/image/random")
  .then(response => response.json())
  .then(data => {
    console.log(data);
    const imgDog = document.createElement("img");
    imgDog.src = data.message;
    $dogsImg.appendChild(imgDog);
  })
  .catch(fail => {
    console.log(fail);
  });
});