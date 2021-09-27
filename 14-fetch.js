/* Fetch nos permite hacer peticiones HTTP
desde JS */
/* Por default la perticion a API 
es por el método GET */
/* Promwsas */
/* Es un evento asíncrono, entonces
usamos promesas */
/* si es por GET,sólo se coloca la URL */
const peticion = fetch("https://jsonplaceholder.typicode.com/todos/1")
.then(resp => resp.json())
.then(data =>{
  console.log(data);
})
.catch(err => {
  console.log(err);
});

console.log(peticion);



