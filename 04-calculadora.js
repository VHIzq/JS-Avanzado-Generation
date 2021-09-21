/* const edad = parseInt(prompt("Introduce tu año de nacimiento"));

const edadCalculada = 2021 - edad;

const tuEdad = `<h1>Tu edad es ${edadCalculada} años</h1>`;
document.write(tuEdad); */


/* function edadFunc(edad){
  edad = parseInt(prompt("En qué año naciste?"));
  const edadCalculada = 2021 - edad;
  const imprimirEdad = `<h1>Tu edad es ${edadCalculada} años</h1>`;
  document.write(imprimirEdad);
}
edadFunc();
 */
/* Indicar si un ´´numero es par o impar */

function numero(num){
  num = parseInt(prompt("Ingresa un número"));
  if(num % 2 == 0){
    document.write(`<h1>El número ${num} es par</h1>`);
  }else{
    document.write(`<h1>El número ${num} es impar</h1>`);
  }
}
numero();