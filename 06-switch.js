/* Los swtich son otra forma de control de flujo */
/* const edad = parseInt(prompt("Ingresa tu edad"));
let mensaje = "";
switch ( edad ){
  case 18:
    mensaje = "Puedes entrar a la fiesta";
    break;
  case 25:
    mensaje = "Bienvenido a la fiesta";
    break;
  case 70:
    mensaje = "Eres de la tercera edad, suerte";
    break;
  default: 
    mensaje = "No cumples con las edades permitidas";
    break;
}
document.write(`<h1>${mensaje}</h1>`); */

const nombre = prompt("Ingresa tbu nombre");
let mensaje = "";
switch(nombre.toLowerCase()){
  case "victor":
    mensaje = "Eres SysAdmin";
    break;
  case "hugo":
    mensaje = "Eres Scrum Master";
    break;
  default:
    mensaje = "Eres parte de otro equipo";
    break;
}
document.write(`<h1>${mensaje} </h1>`);
