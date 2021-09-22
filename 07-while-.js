/* Ciclo while
Permite repetir bloques de código mientras una condicion sea verdadera

Respecto al ciclo for, este no define el número de veces que se repite el ciclo.
*/

/* while("condicion"){
  bloque de código
} */

/* function pedirNUmero(){
  num1 = parseInt(prompt("Ingresa un número"));
  while(isNaN(num1)){
    num1 = parseInt(prompt("Ingresa un número"));
  }
}
pedirNUmero(); */

/* let num1 = parseInt(prompt("Ingresa un numero"));
const num_secreto = 23;
let intentos = 1;
while(num1 !== num_secreto){
  console.log("No adivinaste el número secreto. Intenta otra vez");
  console.log(`Intento: ${intentos}`);
  intentos++;
  num1 = parseInt(prompt("Ingresa un numero"));
}
console.log("Felicidades, adivinaste el número secreto"); */


/* Ciclo Do While */
/* let num1 = parseInt(prompt("Ingresa un numero"));

do{
  document.write(`<p>El número introducido es: ${num1}</p>`);
  num1 = parseInt(prompt("Ingresa un numero"));
}
while(num1 > 5); */

/* function promedio(num){
  let suma = 0;
  let contador = 0;
  let nums = [];
  num = parseInt(prompt("Ingresa un número"));
  while(num > 0){
    contador++;
    suma += num;
    nums.push(num);
    num = parseInt(prompt("Ingresa un número"));
  }
  document.write(`<h1>Suma: ${suma} <br> Media: ${suma / contador} <br> Los números ingresados son: ${nums}</h1>`);
}
promedio(num); */


/* function divisor(num){
  num = parseInt(prompt("Introduce un número"));
  let divisores = [];

  for(let i = 1; i < num; i++){
    if(num[i] % 2 == 0){
      divisores.push(num[i]);
      divisor += 1;
    }
  }
  document.write(`<h1>Los divisores son: ${divisores}</h1>`)
}
divisor(num); */

  function divisores(){
    let divisor = 1;
    let divisores = [];
    //introduzco numero
    let num = parseInt(prompt("Introduce un número"))
    //se itera cada número menor a num
    while(divisor <= num){
      //es divisor si el residuo es cero
      if(num % divisor === 0){
        //si lo es, agrego divisor a divisores
        divisores.push(divisor);
      }
      //itero el siguiente número
      divisor++; //lo coloco fuera de if, porque el divisor incrementado será ocupao en el while
    }
    document.write(`<h1>${divisores} </h1>`);
  }
  divisores();

