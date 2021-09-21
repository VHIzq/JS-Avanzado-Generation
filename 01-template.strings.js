const nombre = prompt("Escribe tu nombre");
const edad = prompt("Ingresa tu edad");

console.log("Hola " + `${nombre}. Veo que tienes ${edad} años`);

const saludos = `<h1>Tu perfil es <br> Nombre: ${nombre} <br> Edad: ${edad}</h1>`

document.write(saludos);