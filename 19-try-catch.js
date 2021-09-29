/* try nos permite ejecutar código propenso a fallar de una manera segura */

//@ts-check 
const gravedad = 9.8;
console.log(gravedad);

try{
  gravedad = 10;
}catch(fail){  //el catch se ejecuta si hay un error y lo atrapa. Recibe como primer parámetro el error / fail
  console.log(fail);
  alert(fail);
}finally{ //finally siempre se ejecita
  console.log("Somos finally");
}
console.log(gravedad);

